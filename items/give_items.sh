#!/bin/bash

# Prompt for Player ID
read -p "Enter playerId: " playerId

# Validate Player ID input
if [[ -z "$playerId" ]]; then
    echo "Player ID cannot be empty."
    exit 1
fi

# Define the items array (adjust as needed) for example thrones
items=(
    "392866463,1"  # Golden throne
    "2542033786,1" # Metal throne
    "536277576,1"  # Obsidian throne
)

# Loop through the items array
for item in "${items[@]}"; do
    # Extract individual values from the comma-separated string
    IFS=',' read -r itemTypeId quantity <<< "$item"

    echo "Id: $itemTypeId, Value: $quantity"

    # Define the JSON payload
    jsonPayload="{\"item\":{\"type\":$itemTypeId},\"quantity\":{\"value\":$quantity}}"

    # Run the docker-compose command with curl using the JSON payload variable
    docker-compose run --rm --entrypoint curl sandbox -X POST -H "Content-Type: application/json" -d "$jsonPayload" "http://orleans:10111/inventory/$playerId/giveitems/" > /dev/null 2>&1

    # Check if the command was successful
    if [[ $? -ne 0 ]]; then
        echo "Error giving itemType '$itemTypeId'."
        read -p "Press any key to continue..."
        exit 1
    fi
done

# Pause to ensure the first command completes before proceeding
sleep 5
