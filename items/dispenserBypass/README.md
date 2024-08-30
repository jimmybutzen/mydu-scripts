# Bypass primary container on Admin dispensers

This script allows you to send a POST request using Docker Compose and `curl` to set a list of dispensers to bypass primary container limit. The dispensers to be modified can be easily customized by modifying a variable in the script.

**Attention:**
- For **Windows**, use the `.bat` script.
- For **Linux**, use the `.sh` script.

## Prerequisites

- **Docker:** The script assumes that Docker is installed and configured on your system. Docker is used to run the `curl` command in an isolated environment.
  
- **Mydu Server Installation:** Ensure you have a Mydu server installed and running, as the script interacts with this server.

## Usage

1. **Modify Items:** You can customize the list of items by editing the predefined array within the script. Each item should be defined by its type ID and the desired quantity. The itemIds can be found in the item hierarchy in BO. For uncraftable items i provided a .csv file with the item id's.
   - **Windows Only:** On Windows, you need to set the `maxIndex` to the last index `[N]` of the items array.

2. **Run the Script:** Execute the script in a terminal. You will be prompted to enter a `playerId`.

3. **Provide Player ID:** Input the `playerId` when prompted. The script will automatically process the items and send the corresponding API requests.

4. **Monitor for Errors:** The script will notify you if any errors occur during the process. If successful, the items will be added to the player's inventory.

## Customization

- **Adjusting the API Endpoint:** If the API is hosted on a different service or port, you can modify the script to target the correct endpoint.

## Troubleshooting

- **Docker Issues:** If you encounter issues related to Docker or Docker Compose, ensure that Docker is installed and running properly on your system. You may also need to check the Docker service logs for more details.

- **API Accessibility:** If the script fails to connect to the API, verify that the `orleans` service is running and accessible on port `10111`.

## License

This script is provided as-is without any warranty. Feel free to modify and use it as needed for your purposes.


INSERT INTO element_property (name, property_type, value, element_id, internal)
SELECT 'bypassPrimaryContainer', 1, '\x01'::bytea, id, false
FROM element
WHERE element_type_id = 1947803569
ON CONFLICT (element_id, name) DO NOTHING;