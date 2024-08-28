#!/bin/bash

# Prompt for Teleport ID & Tag to identify the teleportation node
read -p "Enter Teleport ID: " TeleportId
read -p "Enter Teleport Tag: " TeleportTag

# Prompt for the Docker container hash
read -p "Enter Docker container hash: " containerHash

# Validate input
if [ -z "$TeleportId" ]; then
    echo "Teleport ID cannot be empty."
    exit 1
fi

if [ -z "$TeleportTag" ]; then
    echo "Teleport Tag cannot be empty."
    exit 1
fi

# Execute the SQL INSERT query inside the Docker container
docker exec -i "$containerHash" psql -U dual -d dual -c "INSERT INTO public.element_property (name, property_type, value, element_id, internal) VALUES ('gameplayTag', 4, '$TeleportTag', '$TeleportId', false);"

# Check if the command was successful
if [ $? -ne 0 ]; then
    echo "Error inserting teleport data."
    exit 1
fi

echo "Teleport data inserted successfully."
