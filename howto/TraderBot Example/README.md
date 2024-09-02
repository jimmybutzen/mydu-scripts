
# TraderBot Setup Guide

Welcome to the TraderBot setup guide! Follow the steps below to set up and configure the TraderBot for your server.

## Prerequisites

- Ensure that you are **not running the server on localhost**. You must have a **local IP, external IP, or domain name** configured.
- Docker and Docker Compose must be installed on your server.
- Do not upgrade npgsql from 6.0.7 it wil break things

## Steps to Set Up TraderBot

### 1. Clone the Repository

```bash
git clone https://github.com/dual-universe/mydu-server-mods/tree/main/TraderBot
```

### 2. Add Required DLLs

Copy the following DLLs from the `mydu-mod-toolkit/ModAdmin` or `mydu-mod-toolkit/Examples` folder (located in the server installation folder):

- `Backend.dll`
- `Backend.PubSub.dll`
- `BotLib.dll`
- `Interfaces.dll`
- `NQutils.dll`
- `Router.dll`
- `Router.Orleans.dll`

Additionally, add `Backend.Telemetry.dll` that was shared by Bearclaw on the channel.

### 3. Copy Dockerfile.mod

Copy `Dockerfile.mod` from the `mydu-mod-toolkit/Examples` folder to the TraderBot project directory.

### 4. Modify Dockerfile.mod

Open `Dockerfile.mod` in a text editor and modify the `ENTRYPOINT` line as follows:

```dockerfile
ENTRYPOINT ["/Mod/TraderBot", "/config/dual.yaml", "/Mod/trader.json"]
```

### 5. Edit TraderBot.csproj

Open `TraderBot.csproj` in a text editor and add the following property group:

```xml
<PropertyGroup>
  <TargetFramework>net6.0</TargetFramework>
</PropertyGroup>
```

### 6. Modify TraderBot.cs

Open `TraderBot.cs` and search for the line `if(qurl="")`. Replace it with:

```csharp
if(qurl == null)
```

### 7. Build the Project

Navigate to the project folder and build the Docker image:

```bash
docker build -t traderbot:1.0 -f Dockerfile.mod .
```

### 8. Update docker-compose.yml

Open the `docker-compose.yml` file in the main server installation folder and add the following service configuration:

```yaml
traderbot:
  image: traderbot:1.0
  pull_policy: never
  command: /config/dual.yaml
  volumes:
    - ${CONFPATH}:/config
  restart: always
  environment:
    BOT_LOGIN: <CREATED_USER_IN_BO>
    BOT_PASSWORD: <CREATED_USER_PASSWORD_IN_BO>
  networks:
    vpcbr:
      ipv4_address: 10.5.0.232
```

> **Note:** Ensure that the indentation matches the existing services.

### 9. Create a User in BO

- Role: `bot`, `game`, and `staff`

### 10. Deploy the Bot

From inside the installation folder, run:

```bash
docker compose up -d traderbot
```

### 11. Monitor Logs

- Watch the container logs to ensure the bot is running correctly.

### 12. Verify Player Creation

- Check if the player is created successfully.

### 13. Grant Quanta

- Give the trader player a trizillion quanta.

### 14. Restart the Bot (if necessary)

- You may need to restart the bot after granting it money.

## Conclusion

Congratulations! You have successfully set up the TraderBot on your server. If you encounter any issues, please refer to the logs for troubleshooting or consult the community for further assistance.
