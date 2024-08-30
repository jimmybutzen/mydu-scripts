@echo off
setlocal enabledelayedexpansion

REM Prompt for the Docker container hash
set /p containerHash="Enter Docker container hash: "

REM Validate container input
if "%containerHash%"=="" (
    echo container hash cannot be empty.
    exit /b 1
)

REM Execute the SQL INSERT query inside the Docker container
docker exec -i %containerHash% psql -U dual -d dual -c "INSERT INTO element_property (name, property_type, value, element_id, internal) SELECT 'bypassPrimaryContainer', 1, '1', id, false FROM element WHERE element_type_id = 1947803569 ON CONFLICT (element_id, name) DO UPDATE SET property_type = 1 value = '1';"

REM Check if the command was successful
if %errorlevel% neq 0 (
    echo Error inserting item into 'element_property'.
    pause
    exit /b 1
)

pause
