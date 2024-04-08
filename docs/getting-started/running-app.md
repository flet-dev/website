---
title: Running Flet app
---

Flet app can be run as a desktop or web app using a single `flet run` command.

## Run as a desktop app

To run Flet app as a desktop app, use the following command:

```bash
flet run
```
This command will run `main.py` located in the current directory.

If you need to provide a different path to the file, use the following command:

```bash
flet run [script]
```

To run `main.py` located in a different directory, provide an absolute or a relative path to the directory where it is located, for example:

```bash
flet run /Users/JohnSmith/Documents/projects/flet-app
```

To run script with a name other than `main.py`, provide an absolute or a relative path to the file, for example:

```bash
flet run counter.py
```

The app will be started in a native OS window:

<div className="row">
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>macOS</h3>
    <img src="/img/docs/getting-started/flet-counter-macos.png" className="screenshot-70" />
  </div>
  <div className="col col--6" style={{textAlign: 'center'}}>
    <h3>Windows</h3>
    <img src="/img/docs/getting-started/flet-counter-windows.png"className="screenshot-60" />
  </div>  
</div>

## Run as a web app

To run Flet app as a web app, use the following command:
```bash
flet run --web [script]
```

A new browser window/tab will be opened and the app will be using a random TCP port:

<img src="/img/docs/getting-started/flet-counter-safari.png" className="screenshot-50" />

To run on a fixed port use `--port` (`-p`) option, for example:
```bash
flet run --web --port 8000 app.py
```

## Hot reload

By default, Flet will watch the script file that was run and reload the app whenever the file is changed and saved, but will not watch for changes in other files.

To watch all the files in the same directory, use the following command:

```
poetry run flet run -d [script]
```

To watch script directory and all sub-directories recursively, use the following command:
```
poetry run flet run -d -r [script]
```

You can find more information about `flet run` command [here](/docs/reference/cli/run).
