@echo off
setlocal enabledelayedexpansion

rem itemTypeName: NavigatorChair_Gold
rem quantity: 1

REM Prompt for Player ID
set /p playerId="Enter playerId: "

REM Validate Player ID input
if "%playerId%"=="" (
    echo Player ID cannot be empty.
    exit /b 1
)

REM Define the items array (adjust as needed) for example trones
set "items[0]=392866463,1" REM Golden trone
set "items[1]=2542033786,1" REM Metal trone
set "items[2]=536277576,1" REM Obsidian trone

REM Determine the number of items (adjust maxIndex if needed)
set "maxIndex=2"

REM Loop through the items array
for /L %%i in (0,1,%maxIndex%) do (
    set "line=!items[%%i]!"
    
    REM Extract individual values from the comma-separated string
    for /F "tokens=1,2 delims=," %%a in ("!line!") do (
        echo Id: %%a, Value: %%b
        set "itemTypeId=%%a"
        set "quantity=%%b"

        REM Define the JSON payload based on the captured TCP dump data
        set "jsonPayload={\"item\":{\"type\":!itemTypeId!},\"quantity\":{\"value\":!quantity!}}"

        REM Run the docker-compose command with curl using the JSON payload variable
        docker-compose run --entrypoint curl sandbox -X POST -H "Content-Type: application/json" -d "!jsonPayload!" http://orleans:10111/inventory/%playerId%/giveitems/ > nul 2>&1

        REM Check if the command was successful
        if !errorlevel! neq 0 (
            echo Error giving itemType '!itemTypeId!'.
            pause
            exit /b 1
        )
    )
)

REM Pause to ensure the first command completes before proceeding
timeout /t 5