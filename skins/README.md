# Player Skins Script

This batch script is designed to insert skin records into a PostgreSQL database running inside a Docker container. It allows you to specify a player ID and a Docker container hash to execute SQL commands that insert skin data into the database.

## Prerequisites

1. **Docker**: Ensure Docker is installed and running on your system.
2. **Mydu server**: A Mydu server installation

## Script Overview

The script performs the following tasks:

1. Prompts the user for a `playerId` and Docker container hash.
2. Iterates over a predefined list of skins.
3. Executes an SQL `INSERT` query inside the Docker container to add each skin record to the `player_skins` table.

## Skin List

The script includes a default list of skins. Each skin is defined with a name and a unique item type value:
- `Gold,297147615`
- `Silver,297147615`
- `Rust,297147615`
- `Obsidian,297147615`

You can modify or extend the skin list by editing the script. To add more skins, copy and paste the `set "skins[N]=Name,Value"` lines and adjust the index `[N]`.

For skin IDs and colors, visit: [Lunar's Guide to Setting Up a Public MyDU Server](https://thesettlers.notion.site/Lunar-s-guide-to-setting-up-a-public-MyDU-server-at-home-35e35bfa048644a7ba50abb6ab2e5eb7)

## Usage

1. **Clone the repository** or copy the script into a new batch file, e.g., `insert_skins.bat`.

2. **Fill skin Items**
   Add the skins you want to add.

3. **Run the script**:
    insert_skins.bat 

4. **Enter the required information when prompted:**
   - `playerId`: The ID of the player you want to associate with the skins.
   - `Docker container hash`: The hash of the Docker container running PostgreSQL.

   !! attention windows users: you need to set the maxIndex to the latest id you have set in the itemlist to prevent looping trough a minimal items !!

This script will iterate through the skin list and insert each skin into the `player_skins` table within the specified Docker container.

## Error Handling

- **Empty `playerId`**: If the `playerId` is left empty, the script will exit with an error message.
- **SQL Insertion Failure**: If an SQL insertion fails, the script will output an error message and pause for user intervention.

## Notes

- Ensure that the Docker container hash is correct and the container is running.
- You can create multiple instances of this script: ex. gold_package_skins.bat or .sh , silver_package_skins.bat or sh etc. just copy the main file and adjust the item skins you want to give in this script

## License

This script is provided as-is without any warranty. Feel free to modify and use it as needed for your purposes.






