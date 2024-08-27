# Inventory Management Script

This script allows you to send a POST request using Docker Compose and `curl`. The items to be given can be easily customized by modifying a variable in the script.

## Features

- **Player ID Input:** The script prompts the user to enter a `playerId`. If the input is empty, the script will terminate with an error message.

- **Item Definition:** A predefined list of items is stored within the script. Each item is associated with a unique type ID and a quantity that determines how many of each item should be given to the player.


## Prerequisites

- **Docker:** The script assumes that Docker is installed and configured on your system. Docker is used to run the `curl` command in an isolated environment.
  
- **Mydu server installation:** A Mydu server installation




## Usage

1.  **Modify Items:** You can customize the list of items by editing the predefined array within the script. Each item should be defined by its type ID and the desired quantity.

2. **Run the Script:** Execute the script in a terminal. You will be prompted to enter a `playerId`.

3. **Provide Player ID:** Input the `playerId` when prompted. The script will automatically process the items and send the corresponding API requests.

4. **Monitor for Errors:** The script will notify you if any errors occur during the process. If successful, the items will be added to the player's inventory.

## Customization

- **Adjusting the API Endpoint:** If the API is hosted on a different service or port, you can modify the script accordingly to target the correct endpoint.

## Troubleshooting

- **Docker Issues:** If you encounter issues related to Docker or Docker Compose, ensure that Docker is installed and running properly on your system. You may also need to check the Docker service logs for more details.

- **API Accessibility:** If the script fails to connect to the API, verify that the `orleans` service is running and accessible on port `10111`.

## License

This script is provided as-is without any warranty. Feel free to modify and use it as needed for your purposes.

