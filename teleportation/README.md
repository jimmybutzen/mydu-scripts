# Teleportation Node Script

This repository contains scripts for inserting teleportation node data into a PostgreSQL database using Docker. The scripts are provided in two variants:

- **Windows OS:** `.bat` script
- **Linux OS:** `.sh` script

**Attention:**
- For **Windows**, if you encounter an error complaining about the container not being found, even after copying the correct hash from Docker Desktop, you can try running `docker ps` in a command window from your installation folder. Search for the PostgreSQL container and copy the hash presented on the left. It should be a smaller hash than the one you copied from Docker Desktop.
- **All users**: Ensure your tags are different on both sides. For example, for teleportation_destination, use `tp_test_A` for the first node and another tag like `tp_test_B` for the second node. The destination tag for the first node should be set to `tp_test_A`, and the other node should have the destination tag `tp_test_B` for this example. The Item ID refers to ID and NOT Local ID.

## Overview

These scripts prompt the user to input specific details about teleportation nodes and their tags, validate the input, and execute SQL `INSERT` queries within a Docker container to add the data to the database.

### Key Concepts

- **TeleportID:** This is the ID of the `teleportationNode` in BO (Back Office).
- **TeleportTag:** This is the tag that is set as `teleport_destination` in BO on the `teleportationNode` identified by the ID.

## Windows Script (.bat)

### Multiple Teleportation Nodes

The `.bat` file is designed for use on Windows OS. It prompts the user for the following inputs:

- **Destination Teleport ID**
- **Destination Teleport Tag**
- **Origin Teleport ID**
- **Origin Teleport Tag**
- **Docker Container Hash**

The script then validates the input and executes SQL commands within the specified Docker container.

### Single Teleportation Node

This script provides a way to set the gameplay tag on a single given teleportation node. It prompts the user for the following inputs:

- **Teleport ID**
- **Teleport Tag**
- **Docker Container Hash**

The script validates the input and executes the SQL command within the specified Docker container to set the gameplay tag on the teleportation node.

### Usage

1. Open a command prompt.
2. Run the `.bat` file by typing its name and pressing Enter.
3. Follow the prompts to input the required information.
4. The script will insert the teleportation node data into the database.

## Linux Script (.sh)

### Multiple Teleportation Nodes

The `.sh` file is designed for use on Linux OS. Similar to the Windows script, it prompts the user for the following inputs:

- **Destination Teleport ID**
- **Destination Teleport Tag**
- **Origin Teleport ID**
- **Origin Teleport Tag**
- **Docker Container Hash**

The script then validates the input and executes the SQL commands inside the specified Docker container.

### Single Teleportation Node

The script for a single teleportation node on Linux prompts the user for the following inputs:

- **Teleport ID**
- **Teleport Tag**
- **Docker Container Hash**

The script validates the input and executes the SQL command inside the specified Docker container to set the gameplay tag on the teleportation node.

### Usage

1. Open a terminal.
2. Make the script executable by running: `chmod +x scriptname.sh`
3. Run the script by typing `./scriptname.sh` and pressing Enter.
4. Follow the prompts to input the required information.
5. The script will insert the teleportation node data into the database.

## Error Handling

Both scripts will check if the provided inputs are empty and will exit with an error message if any required fields are missing. After executing the SQL commands, the scripts will check if the operation was successful and notify the user accordingly.

## License
