---
title: Powershell
draft: 
tags:
  - cli
  - powershell
---
# Basic
| Command                            | Description                                             |
| ---------------------------------- | ------------------------------------------------------- |
| `Get-Help`                         | Display help for a cmdlet or function.                  |
| `Get-Command`                      | Get information about available cmdlets.                |
| `Get-Module`                       | List installed modules.                                 |
| `Get-Process`                      | Get information about running processes.                |
| `Get-Service`                      | Get information about services.                         |
| `Get-EventLog`                     | Get events in the event log.                            | 
| `Get-ChildItem` or `dir`           | List items in the current directory.                    |
| `Set-Location` or `cd`             | Change current directory.                               |
| `Copy-Item` or `cp`                | Copy files or directories.                              |
| `Move-Item` or `mv`                | Rename or move files or directories.                    |
| `Remove-Item` or `rm`              | Remove (delete) files or directories.                   |
| `New-Item`                         | Create a new item (file or directory).                  |
| `Clear-Host` or `cls`              | Clear the console screen.                               |
| `Get-Location` or `pwd`            | Show the current location (path).                       |
| `Invoke-Expression` or `iex`       | Run a string as a PowerShell command.                   |
| `Get-Service | Start-Service`      | Start a service.                                        |
| `Get-Service | Stop-Service`       | Stop a service.                                         |
| `Get-Service | Restart-Service`    | Restart a service.                                      |
| `Get-Service | Set-Service`        | Change the startup type of a service.                   |
| `Get-Service | Where-Object {...}` | Filter services based on a condition.                   |
| `Get-Process | Where-Object {...}` | Filter processes based on a condition.                  |
| `Get-Content` or `gc`              | Get the content of a file.                              |
| `Set-Content` or `sc`              | Set the content of a file.                              |
| `Select-Object` or `select`        | Select specific properties of objects.                  |
| `ForEach-Object` or `%`            | Process each item in a collection.                      |
| `Get-Help about_*`                 | Display help about a specific topic (wildcard allowed). |
| `Start-Transcript`                 | Start transcript logging of the current session.        |
| `Stop-Transcript`                  | Stop transcript logging.                                |
| `Get-Command | Out-GridView`       | Display commands in a graphical grid view.              |
| `Get-Command -Syntax`              | Show the syntax of a cmdlet.                            |

*Note: This is a basic cheat sheet, and there are many more PowerShell cmdlets and concepts to explore.*
