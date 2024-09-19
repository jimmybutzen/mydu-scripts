# AkimboAdmin Mod

**AkimboAdmin** is a mod designed for administrators of the game. It provides several administrative actions such as retrieving construct IDs, element IDs, disowning constructs, and managing dispensers. It also offers advanced teleportation, item management, and debugging tools, making server administration easier.

## Features

-  **UI Integration**: IN PROGRESS. Moving all possible interactions to a custom in-game UI.
-  **Admin Tools**: Perform administrative actions like retrieving construct IDs, element IDs, and player IDs.
-  **Construct Management**: Disown constructs or repair elements directly through the mod , take ownership of a construct or repair a construct instantly.
-  **Bypass Admin Dispenser**: Enable or disable bypass on admin dispenser (this will set the dispenser to override player inventory to store everyting , you also can reset it so a player needs to have a linked container).
-  **Territory Management**: Will take over any claimed territory.
-  **Teleportation Management**: Teleport players or yourself to predefined locations/custom locations **ATTENTION**: only tp command works for custom locations .. working on ::POS strings to work.
-  **Item Management**: Fill your inventory (or a friend's) with all items from a filter list or give single items.
-  **Debugging**: In-game debugging panel for JavaScript interaction.

### Prerequisites

-  A running MyDU server installation.
-  Basic understanding of where to place mod files within the MyDU server directory structure.
-  Make sure that `Enable HTML screen Units`,`Enable mod actions` & `Enable mod javascript` is turned on in the General settings of the game otherwise the UI will not work !

### Step-by-Step Guide

1. **Download the Mod DLL:**

   -  Ensure you have the compiled `ModAkimboAdmin.dll` file ready.

2. **Prepare the Mod Directory:**

   -  Navigate to your MyDU server installation directory.
   -  Locate the `Mods` folder. If it doesn't exist, create it.

3. **Create the Mod Subdirectory:**
   -  Inside the `Mods` folder, create a new subdirectory called `ModAkimboAdmin`.
4. **Place the Files:**
   -  Copy the `ModAkimboAdmin.dll` file into the `Mods` folder.
   -  Download the contents of the folder named `ModAkimboAdmin` and place it inside the new `ModAkimboAdmin` folder in the `Mods` directory.

### Directory Structure

Your MyDU server directory should look like this after installation:

```
MyDU Server Installation Directory
└── Mods
    ├── ModAkimboAdmin.dll
    └── ModAkimboAdmin
        ├── config.json
        ├── AkimboAdminHud.css
        ├── CodeMirrorJS.js
        ├── AkimboAdminConstructHud.js
        ├── AkimboAdminElementHud.js
        └── AkimboAdminHud.js

```

### Configuration

1. **Edit `config.json`:**

   -  The mod will automatically load configuration from the `config.json` file. You can manually add custom teleport names , change spawn rates in this file in JSON format:
   -  Editing this will only work when the server is off otherwise the server can overwrite it with old values !!

   ```json
   {
      "Debug": true,
      "Access":["bo","Employees","staff"], // game,bo,Employees,vip,staff,Administrator,
      "TeleportLocations": [
         "Location1",
         "Location2",
         "Location3",
         "Location4",
         "Location5"
      ],
      "itemFilter": {
         "SingleItems": {
            "TerritoryUnitBasic": 100,
            "TerritoryUnitBasicSanctuary": 10,
            "RepairUnit": 100
         },
         "RecursiveSpawnGroups": {
            "WarpCell": 10000,
            "AtmoFuel": 1000000000000,
            "SpaceFuel": 1000000000000,
            "RocketFuel": 1000000000000,
            "HoneyComb": 1000000000000,
            "Ore1": 10000,
            "Ore2": 10000,
            "Ore3": 10000,
            "Ore4": 10000,
            "Ore5": 10000,
            "FurnituresAppliances": 100,
            "IndustryInfrastructure": 100,
            "EngineUnit": 100,
            "HighTechTransportation": 100,
            "SupportTechTransportation": 100,
            "ControlUnit": 100,
            "Systems": 100,
            "CoreUnitDynamic": 100,
            "CoreUnitSpace": 100,
            "CoreUnitStatic": 100,
            "Ammo": 100,
            "FireWork": 100,
            "Scrap": 100,
            "CombatDefense": 100
         },
         "talentId": 1023700067
      }
   }
   ```

2. **Attention**
   -  For using the fill inventory and spawing items in nanopack you can add the `creativemodetalent.yaml` to the item hierarchy COPY the itemId from BO and replace that with the talentId in the config this will make sure the correct talent will be triggered. If you have not added any new items before the number will match with the config.
   -  This talent will make sure that you can fly with a dynamic construct even with an overloaded nanopack.
   -  Make sure to configure the Access roles in this config file , these roles will have access to the mod. 

## Usage

1. **Load the Mod:**
   -  Ensure that your MyDU server is stopped if not restart you're server, and the mod is properly placed in the `Mods` directory.
2. **In-Game Use:**

   -  Players with appropriate permissions can use this mod , only players with an admin tag in BO can use this mod

3. **UI Loading**
   -  Ensure all UI-related files are in the `ModAkimboAdmin` folder.
   -  In-game, right-click and select:`Mod:AkimboAdmin -> UI`

## Debugging

   - all logs will be written to a log file in the `ModAkimboAdmin` folder

## Source file folder

-  this is only used if you want to modify the mod by yourself
