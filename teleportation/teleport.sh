#!/bin/bash

# Prompt for teleportationNodeId & Tags to identify the teleportation nodes
read -p "Enter Destination Teleport ID: " destinationTeleportId
read -p "Enter Destination Teleport Tag: " destinationTeleportTag
read -p "Enter Origin Teleport ID: " originTeleportId
read -p "Enter Origin Teleport Tag: " originTeleportTag

# Prompt for the Docker container hash
read -p "Enter Docker container hash: " containerHash

# Validate input
if [ -z "$destinationTeleportId" ]; then
    echo "Destination Teleport ID cannot be empty."
    exit 1
fi

if [ -z "$originTeleportId" ]; then
    echo "Origin Teleport ID cannot be empty."
    exit 1
fi

if [ -z "$destinationTeleportTag" ]; then
    echo "Destination Teleport Tag cannot be empty."
    exit 1
fi

if [ -z "$originTeleportTag" ]; then
    echo "Origin Teleport Tag cannot be empty."
    exit 1
fi

# Execute the SQL INSERT query inside the Docker container
docker exec -i "$containerHash" psql -U dual -d dual -c "INSERT INTO public.element_property (name, property_type, value, element_id, internal) VALUES ('gameplayTag', 4, '$originTeleportTag', '$destinationTeleportId', false);"
docker exec -i "$containerHash" psql -U dual -d dual -c "INSERT INTO public.element_property (name, property_type, value, element_id, internal) VALUES ('gameplayTag', 4, '$destinationTeleportTag', '$originTeleportId',
