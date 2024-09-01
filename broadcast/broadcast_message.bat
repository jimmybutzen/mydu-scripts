@echo off
rem Define the default message as a variable
set "defaultMessage=Your message here"

rem Run the docker-compose command with curl using the default message variable
docker-compose run --rm --entrypoint curl sandbox -X POST -H "Content-Type: application/json" -d "{\"message\":\"%defaultMessage%\"}" http://orleans:10111/playerdirectory/popup/all

rem Pause to ensure the first command completes before proceeding
timeout /t 5
