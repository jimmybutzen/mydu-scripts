# Teleportation Node Script

This repository contains scripts for inserting teleportation node data into a PostgreSQL database using Docker. The scripts are provided in two variants:

- **Windows OS:** `.bat` script
- **Linux OS:** `.sh` script

**Attention:**
- For **Windows**, if for some reason you get an error complaining about container not found but you copied the correct hash from docker desktop , you can do a `docker ps` in a cmd window from you're installation folder , search for the postgres container and copy the hash presented on the left it should be a smaller hash then you copied from docker desktop. 


## Overview

These scripts prompt the user to input specific details about teleportation nodes and their tags, validate the input, and execute SQL `INSERT` queries within a Docker container to add the data to the database.

### Key Concepts

- **TeleportID:** This is the ID of the `teleportationNode` in BO (Back Office).
- **TeleportTag:** This is the tag that is set as `teleport_destination` in BO on the `teleportationNode` identified by the ID.

## Windows Script (.bat)

The `.bat` file is designed for use on Windows OS. It prompts the user for the following inputs:

- **Destination Teleport ID**
- **Destination Teleport Tag**
- **Origin Teleport ID**
- **Origin Teleport Tag**
- **Docker Container Hash**

The script then validates the input and executes SQL commands within the specified Docker container.

### Usage

1. Open a command prompt.
2. Run the `.bat` file by typing its name and pressing Enter.
3. Follow the prompts to input the required information.
4. The script will insert the teleportation node data into the database.

## Linux Script (.sh)

The `.sh` file is designed for use on Linux OS. Similar to the Windows script, it prompts the user for the following inputs:

- **Destination Teleport ID**
- **Destination Teleport Tag**
- **Origin Teleport ID**
- **Origin Teleport Tag**
- **Docker Container Hash**

The script then validates the input and executes the SQL commands inside the specified Docker container.

### Usage

1. Open a terminal.
2. Make the script executable by running: `chmod +x scriptname.sh`
3. Run the script by typing `./scriptname.sh` and pressing Enter.
4. Follow the prompts to input the required information.
5. The script will insert the teleportation node data into the database.

## Error Handling

Both scripts will check if the provided inputs are empty and will exit with an error message if any required fields are missing. After executing the SQL commands, the scripts will check if the operation was successful and notify the user accordingly.

