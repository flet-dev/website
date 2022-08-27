---
title: Hot reload
sidebar_label: Hot reload
---

The installation of `flet` Python module also installs `flet` command tool (Flet CLI)
that allows running web and desktop apps with hot reload.

```
usage: flet [-h] [--port PORT] [--directory] [--recursive] [--hidden] [--web]
                script

Runs Flet app in Python with hot reload.

positional arguments:
  script                path to a Python script

optional arguments:
  -h, --help            show this help message and exit
  --port PORT, -p PORT  custom TCP port to run Flet app on
  --directory, -d       watch script directory
  --recursive, -r       watch script directory and all sub-directories recursively       
  --hidden, -n          application window is hidden on startup
  --web, -w             open app in a web browser
```

By default, `flet` watches a single `script` file only. Use `--directory` flag to watch all files in script's directory. Use `--recursive` flag to watch script directory and all sub-directories recursively.

For example:

```
flet main.py -d
```