@echo off
setlocal enabledelayedexpansion

REM Create a default skin list if you need more copy and paste the set "skins[3]=Obsidian,297147615" and adjust the [number] incremental
REM To find id's and colors http://tiny.cc/LunarsGuide)
set "skins[0]=Gold,297147615"
set "skins[1]=Silver,297147615"
set "skins[2]=Rust,297147615"
set "skins[3]=Obsidian,297147615"

REM Prompt for Player ID
set /p playerId="Enter playerId: "

REM Prompt for the Docker container hash
set /p containerHash="Enter Docker container hash: "

REM Validate Player ID input
if "%playerId%"=="" (
    echo Player ID cannot be empty.
    exit /b 1
)

REM Determine the number of skin records (adjust as needed)
set "maxIndex=3"

REM Loop through the rows of the array
for /L %%i in (0,1,%maxIndex%) do (
    set "line=!skins[%%i]!"
    REM Extract individual values from the comma-separated string
    for /F "tokens=1,2 delims=," %%a in ("!line!") do (
        echo Name: %%a, Value: %%b
        set "name=%%a"
        set "itemType=%%b"
        REM Execute the SQL INSERT query inside the Docker container
    docker exec -i %containerHash% psql -U dual -d dual -c "INSERT INTO public.player_skins (name, item_type, player_id) VALUES ('!name!', '!itemType!', %playerId%);"

    REM Check if the command was successful
    if %errorlevel% neq 0 (
        echo Error inserting itemType '%%itemType%%'.
        pause
        exit /b 1
    )
    )
)

pause

