# Bypass primary container on Admin dispensers

This script allows you to send a POST request using Docker Compose and `curl` to set a list of dispensers to bypass primary container limit. The dispensers to be modified can be easily customized by modifying a variable in the script.

**Attention:**
- For **Windows**, use the `.bat` script.
- For **Linux**, use the `.sh` script.
- This script will set bypass ALL admin dispensers in game. it is adviced to run it only if you want all admin dispensers to be bypassed. on a fresh install it will only bypass already placed admin dispensers so that UEF store ships can be bought without having the container capacity. if you add you're own admin dispensers and dont want to bypass them it is strongly advised to not rerun the script. if you are fine with the bypass on all admin dispensers you place you can rerun the script and it will set all known admin dispensers to true. 

## Prerequisites

- **Docker:** The script assumes that Docker is installed and configured on your system. Docker is used to run the `curl` command in an isolated environment.
  
- **Mydu Server Installation:** Ensure you have a Mydu server installed and running, as the script interacts with this server.

## Usage

1. **Run the Script:** Execute the script in a terminal. You will be prompted to enter a `container Hash`.


2. **Monitor for Errors:** The script will notify you if any errors occur during the process. If successful, the items will be added to the player's inventory.

## Troubleshooting

- **Docker Issues:** If you encounter issues related to Docker or Docker Compose, ensure that Docker is installed and running properly on your system. You may also need to check the Docker service logs for more details.

- **API Accessibility:** If the script fails to connect to the API, verify that the `orleans` service is running and accessible on port `10111`.

## License

This script is provided as-is without any warranty. Feel free to modify and use it as needed for your purposes.

