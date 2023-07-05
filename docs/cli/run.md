---
title: run
sidebar_label: run
---

```
usage: flet run [-h] [-v] [-p PORT] [--name APP_NAME] [-m] [-d] [-r] [-n] [-w] [--ios] [-a ASSETS_DIR] [script]

Run Flet app.

positional arguments:
  script                path to a Python script

options:
  -h, --help            show this help message and exit
  -v, --verbose         -v for detailed output and -vv for more detailed
  -p PORT, --port PORT  custom TCP port to run Flet app on
  --name APP_NAME       app name to distinguish it from other on the same port
  -m, --module          treat the script as a python module path as opposed to a file path
  -d, --directory       watch script directory
  -r, --recursive       watch script directory and all sub-directories recursively
  -n, --hidden          application window is hidden on startup
  -w, --web             open app in a web browser
  --ios                 open app on iOS device
  -a ASSETS_DIR, --assets ASSETS_DIR
                        path to assets directory
```