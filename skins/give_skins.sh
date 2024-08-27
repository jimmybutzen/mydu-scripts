#!/bin/bash

# Define an array of skins
# To find id's and colors http://tiny.cc/LunarsGuide)
skins=(
       "Gold,297147615" 
       "Silver,297147615"
       "Rust,297147615"
       "Obsidian,297147615"
       )

# Prompt for Player ID
read -p "Enter playerId: " playerId

# Prompt for the Docker container hash
read -p "Enter Docker container hash: " containerHash

# Validate Player ID input
if [ -z "$playerId" ]; then
    echo "Player ID cannot be empty."
    exit 1
fi

# Loop through the array of skins
for skin in "${skins[@]}"; do
    # Extract individual values from the comma-separated string
    IFS=',' read -r name itemType <<< "$skin"
    
    echo "Name: $name, Value: $itemType"
    
    # Execute the SQL INSERT query inside the Docker container
    docker exec -i "$containerHash" psql -U dual -d dual -c "INSERT INTO public.player_skins (name, item_type, player_id) VALUES ('$name', '$itemType', $playerId);"

    # Check if the command was successful
    if [ $? -ne 0 ]; then
        echo "Error inserting itemType '$itemType'."
        exit 1
    fi
done