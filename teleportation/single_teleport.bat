@echo off
setlocal enabledelayedexpansion

REM Prompt for teleportationNodeId & Tags to identify the teleportation nodes
set /p TeleportId="Enter Teleport ID: "
set /p TeleportTag="Enter Teleport Tag: "


REM Prompt for the Docker container hash
set /p containerHash="Enter Docker container hash: "

REM Validate input
if "%TeleportId%"=="" (
    echo Destination Teleport ID cannot be empty.
    exit /b 1
)
if "%TeleportTag%"=="" (
    echo Origin Teleport ID cannot be empty.
    exit /b 1
)


REM Execute the SQL INSERT query inside the Docker container
docker exec -i %containerHash% psql -U dual -d dual -c "INSERT INTO public.element_property (name, property_type, value, element_id, internal) VALUES ( 'gameplayTag', 4, '%TeleportTag%', '%TeleportId%', false);"

REM Check if the command was successful
if %errorlevel% neq 0 (
    echo Error inserting teleport data.
    pause
    exit /b 1
)

pause
