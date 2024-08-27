#!/bin/bash
# Define the default message as a variable
defaultMessage="Your message here"

# Run the docker-compose command with curl using the default message variable
docker-compose run --entrypoint curl sandbox -X POST -H "Content-Type: application/json" -d "{\"message\":\"$defaultMessage\"}" http://orleans:10111/playerdirectory/popup/all

# Pause to ensure the first command completes before proceeding
sleep 5