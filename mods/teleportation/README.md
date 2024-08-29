
# ModTeleporterTagConfig - Teleporter Tag Configuration


**!!! Attention !!!**
- WORK IN PROGRESS !!!
- The Mod works is currently in development. It should have a configuration file to set the user id's that can use it. this will be implemented in the coming days
- When adding new items to the list a relog of the player is needed. this due to the modinfo will only be loaded upon logging in and this creates the dropdown list to choose you're tags. 

## Overview

`ModTeleporterTagConfig` is a custom mod for MyDU servers that allows players to configure teleportation points and manage teleport destinations using a simple UI. The mod provides predefined teleport names and allows for the addition of custom teleport names via a JSON configuration file.

## Features

- Predefined teleport destination names: Alpha, Beta, Gamma, Delta, Epsilon, Yota, Omega.
- Add custom teleport destination names using a JSON file.
- Open a teleportation panel in-game.
- Configure teleportation targets for elements with the appropriate permissions.

## Installation

### Prerequisites

- A running MyDU server installation.
- Basic understanding of where to place mod files within the MyDU server directory structure.

### Step-by-Step Guide

1. **Download the Mod DLL:**
   - Ensure you have the compiled `ModTeleporterTagConfig.dll` file ready.

2. **Prepare the Mod Directory:**
   - Navigate to your MyDU server installation directory.
   - Locate the `Mods` folder. If it doesn't exist, create it.

3. **Create the Mod Subdirectory:**
   - Inside the `Mods` folder, create a new subdirectory called `ModTeleporterTagConfig`.
   
4. **Place the Files:**
   - Copy the `ModTeleporterTagConfig.dll` file into the `Mods` folder.
   - Download the JSON file named `teleportNames.json` and place it in the `ModTeleporterTagConfig` folder. This file should be used to add or modify custom teleport names.
   - Download the  JavaScript file named `teleportScreen.js` (used for the teleport panel UI), place it in the same `ModTeleporterTagConfig` folder.

### Directory Structure

Your MyDU server directory should look like this after installation:

```
MyDU Server Installation Directory
└── Mods
    ├── ModTeleporterTagConfig.dll
    └── ModTeleporterTagConfig
        ├── teleportNames.json
        └── teleportScreen.js
```

### Configuration

1. **Edit `teleportNames.json`:**
   - The mod will automatically load teleport names from the `teleportNames.json` file. You can manually add custom teleport names to this file in JSON format:
   - Editing this will only work when the server is off otherwise the server can overwrite it with old values !!
   
   ```json
   [
       "Alpha",
       "Beta",
       "Gamma",
       "Delta",
       "Epsilon",
       "Yota",
       "Omega",
       "CustomName1",
       "CustomName2"
   ]
   ```

2. **JavaScript UI (`teleportScreen.js`):**
   - The mod will inject and execute the JavaScript code found in the `teleportScreen.js` file when the teleportation panel is opened. This file should contain the logic for rendering and handling the teleportation UI.

## Usage

1. **Load the Mod:**
   - Ensure that your MyDU server is stopped if not restart you're server, and the mod is properly placed in the `Mods` directory.
   
2. **In-Game Commands:**
   - Players with appropriate permissions can open the teleportation panel or set teleportation targets using the context menu options provided by the mod.

3. **Manage Teleport Names:**
   - Use the in-game UI to add new teleportation destinations or use the `teleportNames.json` file to manage them manually.

4. **Trigger Teleport Actions:**
   - Actions can be triggered in-game based on the mod's predefined configurations, allowing you to set or use teleportation points.

## Troubleshooting

- **Missing `teleportNames.json`:** If the file is missing, the mod will revert to using the default teleport names. Ensure the file is placed correctly in the `ModTeleporterTagConfig` folder.
- **JavaScript Issues:** If the teleportation panel does not display correctly, verify that the `teleportScreen.js` file is correctly formatted and located in the proper directory.
- **Logging:** The mod logs its actions into the Grains_Dev.log search for `NQ.TeleporterTagConfig`. If you encounter issues, check the server logs for any warnings or errors related to `MyDuMod`.

