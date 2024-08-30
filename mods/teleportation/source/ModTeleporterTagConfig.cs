using Orleans;
using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Collections.Concurrent;
using Backend;
using Backend.Business;
using Backend.Database;
using NQutils.Config;
using Backend.Storage;
using Backend.Scenegraph;
using NQ;
using NQ.RDMS;
using NQ.Interfaces;
using NQutils;
using NQutils.Net;
using NQutils.Serialization;
using NQutils.Sql;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
// for json deserialization of client input
public class TeleportName
{
    public string teleportName;
}
public class MyDuMod : IMod
{
    private IServiceProvider isp;
    private IClusterClient orleans;
    private ILogger logger;
    private ConcurrentDictionary<ulong, bool> hasPanel = new();
    private List<string> names = new List<string> { "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Yota", "Omega" };


    
    private static string GetModsDirectoryPath()
    {
        var basePath = AppDomain.CurrentDomain.BaseDirectory;
        return Path.Combine(basePath, "Mods/ModTeleporterTagConfig");
    }
    private static string GetFilePath()
    {
        var modsDirectory = GetModsDirectoryPath();
        if (!Directory.Exists(modsDirectory))
        {
            Directory.CreateDirectory(modsDirectory); // Ensure the Mods directory exists
        }
        return Path.Combine(modsDirectory, "teleportNames.json");
    }

    private static string GetJsFilePath()
    {
        var modsDirectory = GetModsDirectoryPath();
        return Path.Combine(modsDirectory, "teleportScreen.js");
    }

    private string LoadJsContent()
    {
        var filePath = GetJsFilePath();
        if (File.Exists(filePath))
        {
            return File.ReadAllText(filePath);
        }
        else
        {
            logger.LogWarning($"JavaScript file not found at {filePath}.");
            return string.Empty;
        }
    }

    private void SaveNamesToFile()
    {
        var json = JsonConvert.SerializeObject(names);
        var filePath = GetFilePath();
        File.WriteAllText(filePath, json);
        logger.LogInformation($"Teleport names saved to {filePath}.");
    }

    private void LoadNamesFromFile()
    {
        var filePath = GetFilePath();
        if (File.Exists(filePath))
        {
            var json = File.ReadAllText(filePath);
            names = JsonConvert.DeserializeObject<List<string>>(json) ?? new List<string>();
            logger.LogInformation($"Teleport names loaded from {filePath}.");
        }
        else
        {
            logger.LogInformation($"No teleport names file found at {filePath}. Using default values.");
        }
    }

    public string GetName()
    {
        return "NQ.TeleporterTagConfig";
    }

    public Task Initialize(IServiceProvider isp)
    {
        this.isp = isp;
        this.orleans = isp.GetRequiredService<IClusterClient>();
        this.logger = isp.GetRequiredService<ILogger<MyDuMod>>();

        // Load names from file
        LoadNamesFromFile();

        return Task.CompletedTask;
    }

    public Task<ModInfo> GetModInfoFor(ulong playerId, bool admin)
    {
        hasPanel.Remove(playerId, out var _);
        var res = new ModInfo
        {
            name = GetName(),
            actions = new List<ModActionDefinition>(),
        };
        ulong idx = 0;
        foreach (var n in names)
        {
            res.actions.Add(new ModActionDefinition
            {
                id = 100 + idx,
                label = "Teleporter\\Set this TP target\\" + names[(int)idx],
                context = ModActionContext.Element,
            });
            res.actions.Add(new ModActionDefinition
            {
                id = 200 + idx,
                label = "Teleporter\\Make as target\\" + names[(int)idx],
                context = ModActionContext.Element,
            });
            idx += 1;
        }
        res.actions.Add(new ModActionDefinition
        {
            id = 7,
            label = "Teleporter\\open teleport panel",
            context = ModActionContext.Global,
        });
        return Task.FromResult(res);
    }

    public async Task TriggerAction(ulong playerId, ModAction action)
    {
       if (action.actionId == 7)
        {
            if (!hasPanel.ContainsKey(playerId))
            {
                var jsContent = LoadJsContent();
                if (!string.IsNullOrEmpty(jsContent))
                {
                    await isp.GetRequiredService<IPub>().NotifyTopic(Topics.PlayerNotifications(playerId),
                    new NQutils.Messages.ModTriggerHudEventRequest(new ModTriggerHudEvent
                    {
                        eventName = "modinjectjs",
                        eventPayload = jsContent,
                    }));
                }
                await Task.Delay(1000);
                hasPanel[playerId] = true;
            }

            await isp.GetRequiredService<IPub>().NotifyTopic(Topics.PlayerNotifications(playerId),
            new NQutils.Messages.ModTriggerHudEventRequest(new ModTriggerHudEvent
            {
                eventName = "TeleportPanel.show",
                eventPayload = "1",
            }));

        }
        else if (action.actionId == 1337)
        {

            var js = action.payload;
            var data = JsonConvert.DeserializeObject<TeleportName>(js);
            logger.LogInformation($"Adding teleport name: {data.teleportName}");

            if (data != null && !string.IsNullOrEmpty(data.teleportName))
            {
                names.Add(data.teleportName);
                SaveNamesToFile();  // Save updated list to file
                logger.LogInformation($"Added teleport name: {data.teleportName}");
            }
            else
            {
                logger.LogWarning("Failed to add teleport name: payload is null or teleportName is empty.");
            }
        }
        else
        {
            var cid = action.constructId;
            var eid = action.elementId;
            var right = await orleans.GetRDMSRightGrain(playerId).GetRightsForPlayerOnAsset(
                playerId,
                new AssetId
                {
                    type = AssetType.Element,
                    construct = cid,
                    element = eid,
                },
                true);
            if (!right.rights.Contains(Right.ElementEdit))
            {
                await isp.GetRequiredService<IPub>().NotifyTopic(Topics.PlayerNotifications(playerId),
                    new NQutils.Messages.ModTriggerHudEventRequest(new ModTriggerHudEvent
                    {
                        eventName = "modinjectjs",
                        eventPayload = "CPPHud.addFailureNotification(\"You do not have permissions on this element to configure teleporter\");",
                    }));
                return;
            }
            var key = ((action.actionId / 100) == 1) ? "teleport_destination" : "gameplayTag";
            var value = $"mod_teleporter_{playerId}_" + names[(int)action.actionId % 100];
            await orleans.GetConstructElementsGrain(cid).UpdateElementProperty(
                new ElementPropertyUpdate
                {
                    constructId = cid,
                    elementId = eid,
                    name = key,
                    value = new PropertyValue(value),
                    timePoint = TimePoint.Now(),
                });
            await isp.GetRequiredService<IPub>().NotifyTopic(Topics.PlayerNotifications(playerId),
                    new NQutils.Messages.ModTriggerHudEventRequest(new ModTriggerHudEvent
                    {
                        eventName = "modinjectjs",
                        eventPayload = "CPPHud.addFailureNotification(\"Teleportation configuration successful\");",
                    }));
        }
    }
}