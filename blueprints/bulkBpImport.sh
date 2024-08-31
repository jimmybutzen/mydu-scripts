#!/bin/bash

# Directory containing JSON files 
# REPLACE YOU'RE FOLDER DIRECTORY IF NEEDE
DIRECTORY="./blueprints"

# URL for posting JSON files
URL="http://orleans:10111/blueprint/import?creatorPlayerId=2&creatorOrganizationId=0"

# Docker container and service name
SERVICE="sandbox"

# Check if the directory exists
if [ ! -d "$DIRECTORY" ]; then
  echo "Directory $DIRECTORY does not exist."
  exit 1
fi

# Loop through all JSON files in the directory
for FILE in "$DIRECTORY"/*.json; do
  # Check if there are no JSON files
  if [ ! -e "$FILE" ]; then
    echo "No JSON files found in $DIRECTORY."
    exit 1
  fi

  # Get the file name
  FILENAME=$(basename "$FILE")

  # Print status
  echo "Processing $FILENAME..."

  # Post the file content to the URL using docker-compose
  cat "$FILE" | base64 -w 0 | sed -e 's@$@"@' -e 's@^@"@' | docker-compose run -T --entrypoint "curl -X POST -H 'Content-Type: application/json' -d @- $URL" $SERVICE

  # Check the exit status of docker-compose
  if [ $? -ne 0 ]; then
    echo "Failed to post $FILENAME."
  else
    echo "$FILENAME posted successfully."
  fi

done
