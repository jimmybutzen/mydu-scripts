@echo off
REM Enter Titles Comma Seperated
set titles=Title 1, Title 2, Title 3

REM THE script will ask for userID and containerId interactively
set /p id="Enter userId: "
set /p containerHash="Enter containerId: "

REM Execute the SQL update inside the Docker container
docker exec -i %containerHash% psql -U dual -d dual -c "UPDATE public.auth SET titles='%titles%' WHERE id=%id%;"

echo Update completed.
pause