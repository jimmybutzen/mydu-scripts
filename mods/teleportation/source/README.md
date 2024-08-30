# NQ.TeleporterTagConfig Mod

This mod provides a user interface for configuring teleporter tags within the game. It allows players to set teleport destinations and gameplay tags, manage teleportation configurations, and open a custom teleport panel.

## Features

- **Teleportation Configuration**: Set teleport destinations and gameplay tags.
- **Custom Teleport Panel**: Open a teleport panel with predefined options.
- **Dynamic Teleport Names**: Add new teleport names dynamically and persist them across sessions.

## Required DLLs

To build the project, you need to include several DLLs that are required by the mod. These DLLs can be found in the server folder `mydu-mod-toolkit`. Specifically, you will need to copy the following DLLs from the `ModAdmin` example folder:

- `Backend.dll`
- `Backend.PubSub.dll`
- `BotLib.dll`
- `Interfaces.dll`
- `NQutils.dll`
- `Router.dll`
- `Router.orleans.dll`

Make sure these DLLs are in the same directory as your compiled NQ.TeleporterTagConfig DLL to ensure proper functionality.

## Configuration

### JavaScript File

A custom JavaScript file (`teleportScreen.js`) can be loaded when opening the teleport panel. This file should be placed in the `Mods/ModTeleporterTagConfig` directory. The mod will automatically load this script and inject it into the game's HUD.

### Teleport Names

The mod allows for the dynamic addition of teleport names. These names are stored in a JSON file located in the `Mods/ModTeleporterTagConfig` directory. You can manually edit this file to add or remove teleport names if needed.

## Building the Project

1. **Copy Required DLLs**:
   - Navigate to the `mydu-mod-toolkit` directory on your server.
   - Copy the required DLLs listed above from the `ModAdmin` example folder to your project directory.

2. **Compile the Project**:
   - Open the solution in your preferred IDE (e.g., Visual Studio).
   - Build the solution to produce the compiled DLL.

3. **Deploy the DLL**:
   - Place the compiled DLL and the copied DLLs into the appropriate directory where your Orleans cluster can load it.

## Deployment

- Ensure that the compiled DLL and required DLLs are in the correct directory.
- Place the `teleportScreen.js` file and the `teleportNames.json` file (if manually configured) in the `Mods/ModTeleporterTagConfig` directory.
- Restart the Orleans cluster to load the mod.

## Usage

- **Opening the Teleport Panel**: Use the in-game menu to access the teleport panel through the available mod actions.
- **Setting Teleport Destinations**: Configure the teleport destination by selecting the appropriate action from the mod's menu.


