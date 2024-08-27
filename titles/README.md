# Title Skins Script

This script is designed to interactively update a PostgreSQL database running inside a Docker container. It allows you to specify a list of titles and update the corresponding entries in the `auth` table based on a user-provided `userId`.

!! attention for Windows use the .bat script , for linux users use the .sh script !!


## Prerequisites

1. **Docker**: Ensure Docker is installed and running on your system.
2. **Mydu server**: A Mydu server installation

## Script Overview

The script performs the following tasks:

1. Prompts the user for a `playerId` and Docker container hash.
3. Executes an SQL `INSERT` query inside the Docker container to add each skin record to the `player_skins` table.

## Usage

1. **Clone the repository** or copy the script into a new batch file, e.g., `update_titles.bat`. For linux `update_titles.sh`

2. **Fill titles**
   Add the titles you want to add by adjusting it in the script.

3. **Run the script**:
    update_titles.bat or update_titles.sh for linux 

4. **Enter the required information when prompted:**
   - `playerId`: The ID of the player you want to associate with the skins.
   - `Docker container hash`: The hash of the Docker container running PostgreSQL.

## Notes

- Ensure that the Docker container hash is correct and the container is running.
- You can create multiple instances of this script: ex. new_player_titles.bat or .sh , silver_player_titles.bat or sh etc. just copy the main file and adjust the item skins you want to give in this new created script

## License

This script is provided as-is without any warranty. Feel free to modify and use it as needed for your purposes.
   
