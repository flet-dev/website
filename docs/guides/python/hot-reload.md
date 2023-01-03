---
title: Hot reload
sidebar_label: Hot reload
---

The installation of `flet` Python module also installs `flet` command tool (Flet CLI)
that allows running web and desktop apps with hot reload.

```
usage: flet run [-h] [--port PORT] [--directory] [--recursive] [--hidden] [--web]
                script

Runs Flet app in Python with hot reload.

positional arguments:
  script                path to a Python script

options:
  -h, --help            show this help message and exit
  -v, --verbose         -v for detailed output and -vv for more detailed
  -p PORT, --port PORT  custom TCP port to run Flet app on
  -d, --directory       watch script directory
  -r, --recursive       watch script directory and all sub-directories recursively
  -n, --hidden          application window is hidden on startup
  -w, --web             open app in a web browser
```

By default, `flet` watches a single `script` file only. Use `--directory` flag to watch all files in script's directory. Use `--recursive` flag to watch script directory and all sub-directories recursively.

For example:

```
flet main.py -d
```