# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed


### Fixed

### Security

## [0.0.1] - 2024-08-30
### Added
- Initial release of project


## [0.1.0] - 2024-09-15
### Added
- Custom UI integration to interact as an admin
- Teleport Panel
- Debug Panel
- Items Panel

## [0.2.0] - 2024-09-16
### Added
- UI Panels for construct and elements

### Changed
- Removed unrelevant items from dropdown and moved them to the respective UI panels

### Security
- Fixed a bug showing the options to a non admin user


## [0.2.1] - 2024-09-17

### Added
- config option to allow access to different user roles set in BO

### Changed
- Reworked the c# mod to allow the config option to work

## [0.2.2] - 2024-09-19

### Added
- dedicated log file to debug the UI interactions withouth having to look at grains_dev.log
- more error messages that are send to the client

### Changed
- Replaced all log refferences to use custom logging

### Fixed
- Bug that was caused by leftover code , the roles from BO couldnt open the hud due to a check on only admin was left over somewhere down the line. is adjusted now.
- Bug that would show the failover textbox when copying text to clipboard from the debug panel. is fixed now.
- Bug preventing to use tp command on own player character. 
- Bug preventing to use ::pos location strings to teleport to custom locations
