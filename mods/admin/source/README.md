# AkimboAdmin Mod Source Code

This repository contains the necessary setup information for the **AkimboAdmin** class, which is part of the AkimboAdmin mod.

## Features

- **Admin Tools**: Perform administrative actions like retrieving construct IDs, element IDs, and player IDs.
- **Construct Management**: Disown constructs or repair elements directly through the mod.
- **Bypass Admin Dispenser**: Enable or disable bypass on specific elements with appropriate rights.
- **External Notifications**: Automatically triggers external notifications when significant changes occur in constructs.

## Required DLLs

To build the project, you need to include several DLLs that are required by the mod. These DLLs can be found in the server folder `mydu-mod-toolkit`. Specifically, you will need to copy the following DLLs from the `ModAdmin` example folder:

- `Backend.dll`
- `Backend.PubSub.dll`
- `BotLib.dll`
- `Interfaces.dll`
- `NQutils.dll`
- `Router.dll`
- `Router.orleans.dll`

Make sure these DLLs are in the same directory as your compiled MyDuMod DLL to ensure proper functionality.

## Building the Project

1. **Copy Required DLLs**:
   - Navigate to the `mydu-mod-toolkit` directory on your server.
   - Copy the required DLLs listed above from the `ModAdmin` example folder to your project directory.

2. **Compile the Project**:
   - Open the solution in your preferred IDE (e.g., Visual Studio).
   - Build the solution to produce the compiled DLL.

3. **Deploy the DLL**:
   - Place the compiled DLL and the copied DLLs into the appropriate directory where your Orleans cluster can load it.


