#!/bin/bash

# Enter Titles Comma Seperated Between The Quotes
titles="Title 1, Title 2, Title 3"

# THE script will ask for userID and containerId interactively
read -p "Enter userId: " id
read -p "Enter container: " containerHash

# Execute the SQL update inside the Docker container
docker exec -i $containerHash psql -U dual -d dual -c "UPDATE public.auth SET titles='$titles' WHERE id=$id;"

echo "Update completed."