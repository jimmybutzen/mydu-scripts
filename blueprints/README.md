# Blueprint Batch importer

This document provides information on how to use the provided Bash script to post JSON files to a specified URL using a Docker container.

**Attention:**
- **All users**: this script will only work for linux , working on a working script for windows.

## Overview

The Bash script is designed to:
1. Post blueprint JSON files from a specified directory to a given URL.
2. Utilize Docker and Docker Compose to handle the posting process via `curl`.

## Prerequisites

- **Docker and Docker Compose**: Ensure Docker and Docker Compose are installed on your system.
- **Mydu Server Installation:** Ensure you have a Mydu server installed and running, as the script interacts with this server.

## How to Use

1. **Update the Script Variables**:
   - **DIRECTORY**: Adjust the path if you need to.
   - the standard path is a subfolder of the folder where the script is located called `blueprints`
   - for ease of use you can download the file place it in a folder of you're mydu installation folder , and crete a subfolder called `blueprints`. place all the blueprints that need to be uploaded. 

2. **Save the Script**: Save the Bash script to a file on your system.

3. **Make the Script Executable**:
   - Run the command: `chmod +x your_script_file.sh` (replace `your_script_file.sh` with the actual name of your script file).

4. **Run the Script**:
   - Execute the script with the command: `./your_script_file.sh`.

## Expected Output

- The script will print the status of each file being processed.
- Success and error messages will indicate if the posting was successful or if any issues occurred.

## Notes

- Ensure the specified directory contains JSON files. If no files are found, the script will terminate with an appropriate message.
- The script encodes JSON files in Base64 before posting. Ensure the receiving endpoint is compatible with this format.

For more details about the script’s implementation, refer to the separate documentation file.
