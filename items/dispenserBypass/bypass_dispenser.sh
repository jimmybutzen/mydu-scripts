#!/bin/bash

# Prompt for the Docker container hash
read -p "Enter Docker container hash: " containerHash

# Validate container input
if [ -z "$containerHash" ]; then
    echo "Container hash cannot be empty."
    exit 1
fi

# Execute the SQL INSERT query inside the Docker container
docker exec -i "$containerHash" psql -U dual -d dual -c "INSERT INTO element_property (name, property_type, value, element_id, internal) SELECT 'bypassPrimaryContainer', 1, '1', id, false FROM element WHERE element_type_id = 1947803569 ON CONFLICT (element_id, name) DO DO UPDATE SET property_type = 1 value = '1';"

# Check if the command was successful
if [ $? -ne 0 ]; then
    echo "Error inserting item into 'element_property'."
    exit 1
fi

# Pause before exiting
read -p "Press any key to continue..."
