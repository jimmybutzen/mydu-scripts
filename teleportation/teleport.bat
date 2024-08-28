@echo off
setlocal enabledelayedexpansion

REM Prompt for teleportationNodeId & Tags to identify the teleportation nodes
set /p destinationTeleportId="Enter Destination Teleport ID: "
set /p destinationTeleportTag="Enter Destination Teleport Tag: "
set /p originTeleportId="Enter Origin Teleport ID: "
set /p originTeleportTag="Enter Origin Teleport Tag: "

REM Prompt for the Docker container hash
set /p containerHash="Enter Docker container hash: "

REM Validate input
if "%destinationTeleportId%"=="" (
    echo Destination Teleport ID cannot be empty.
    exit /b 1
)
if "%originTeleportId%"=="" (
    echo Origin Teleport ID cannot be empty.
    exit /b 1
)
if "%destinationTeleportTag%"=="" (
    echo Destination Teleport Tag cannot be empty.
    exit /b 1
)
if "%originTeleportTag%"=="" (
    echo Origin Teleport Tag cannot be empty.
    exit /b 1
)
destinationTeleportTag
REM Execute the SQL INSERT query inside the Docker container
docker exec -i %containerHash% psql -U dual -d dual -c "INSERT INTO public.element_property (name, property_type, value, element_id, internal) VALUES ( 'gameplayTag', 4, '%originTeleportTag%', '%destinationTeleportId%', false);"
docker exec -i %containerHash% psql -U dual -d dual -c "INSERT INTO public.element_property (name, property_type, value, element_id, internal) VALUES ( 'gameplayTag', 4, '%destinationTeleportTag%', '%originTeleportId%', false);"

REM Check if the command was successful
if %errorlevel% neq 0 (
    echo Error inserting teleport data.
    pause
    exit /b 1
)

pause
