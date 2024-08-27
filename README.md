# MyDU Server Admin Tools

Welcome to the MyDU Server Admin Tools repository. This project contains various scripts and utilities designed to help game server administrators manage in-game elements and player interactions. Each folder in this repository provides specific functionalities that can be tailored to fit different needs.

## Repository Structure

### 1. Broadcast Messages
- **Folder:** `broadcast`
- **Description:** Contains scripts for broadcasting messages to all players connected to the game.
- **Usage:** These scripts can be used to send announcements or alerts to all players. The messages can be scheduled using Task Sheduler (Windows) or `crontab` (Linux/macOS) for periodic broadcasting.

### 2. Item Management
- **Folder:** `items`
- **Description:** Provides scripts for giving items to players.
- **Usage:** This script is useful for server admins who need to give special collectible items to players that are not available for purchase in-game. Admins can create item sets and distribute them as needed.

### 3. Skin Management
- **Folder:** `skins`
- **Description:** Includes scripts for giving collectible skins to players.
- **Usage:** Similar to the item management scripts, these scripts allow admins to distribute collectible skins that players cannot buy in-game. Ideal for giving out exclusive or special edition skins.

### 4. Title Management
- **Folder:** `titles`
- **Description:** Example scripts for assigning titles to players.
- **Usage:** This feature allows admins to grant titles to players, such as "Astronaut," "Cosmonaut," or other titles that reflect achievements or roles within the game.

