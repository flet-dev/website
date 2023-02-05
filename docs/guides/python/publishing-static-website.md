---
title: Publishing a static website with Pyodide
sidebar_label: Publishing static website
---

Flet app can be published as a standalone static website (SPA) and run entirely in the browser with [Pyodide](https://pyodide.org/en/stable/index.html).

Pyodide is a port of CPython to WebAssembly (WASM) which is an emerging technology with [some limitations](https://pyodide.org/en/stable/usage/wasm-constraints.html). Pyodide comes with a big list of [built-in packages](https://pyodide.org/en/stable/usage/packages-in-pyodide.html). However, to use a Python package from PyPI it must be a pure Python package or provide a wheel with binaries [built for Emscripten](https://pyodide.org/en/stable/development/new-packages.html).

## Flet static vs server-side

Flet static pros:

* Zero latency between user-generated events (clicks, text field changes, drags) and page updates. There is no Fletd server, no WebSockets - Python program communicates with Flutter web client directly via JavaScript.
* Cheap hosting - Flet static app does not require any code to run on the server and thus can be hosted anywhere: GitHub Pages, Cloudflare Pages, Vercel, a shared hosting or your own VPS.
* Higher scalability - Flet static app runs entirely in the browser and if it doesn't use any server-side API it could be scaled to any number of users with just CDN.

Flet static cons:

* Slower loading time - it requires additional time to download Python engine (Pyodide), built-in and `flet-pyodide` packages, and a user program. Besides, initialization of Pyodide engine itself takes around 2-4 seconds which the team is [looking to improve](https://pyodide.org/en/stable/project/roadmap.html#roadmap) in the future.
* Limited Python compatibility - not every program that works with native Python [can be run with Pyodide](https://pyodide.org/en/stable/usage/wasm-constraints.html).
* Lower performance - Pyodide is currently 3x-5x slower than native Python, so Flet apps with heavy processing would be better deployed as a server-side.
* Users can access program code as it's downloaded by a browser in the form of `tar.gz` archive.

## Async or not async?

Both [asyncio](/docs/guides/python/async-apps) and "regular" sync Flet apps can be published as a static website. In terms of concurrency, the website will have only one thread with a single user only - you. If your app has CPU-intensive logic it may affect UI responsivness no matter the app is async or not.

However, if your app contains an I/O logic (like [fetch](https://pyodide.org/en/stable/usage/api/python-api/http.html) wrapper for Pyodide) which is async in browser by definition then your app must be async.

## Publish app as a static website

Run the following command to publish Flet app to a standalone website:

```
flet publish <your-flet-app.py>
```

A static website is published into `./dist` directory.

Command optional arguments:

* `--pre` - allow micropip to install pre-release Python packages.
* `-a ASSETS_DIR`, `--assets ASSETS_DIR` - path to an assets directory.
* `--app-title APP_TITLE` - application title.
* `--app-description APP_DESCRIPTION` - application description.
* `--base-url BASE_URL` - base URL for the app.
* `--web-renderer {canvaskit,html}` - web renderer to use.
* `--route-url-strategy {path,hash}` - URL routing strategy.

## Testing website

You can test a published Flet app using Python's built-in [`http.server` module](https://docs.python.org/3/library/http.server.html):

```
python -m http.server --directory dist
```

Open `http://localhost:8000` in your browser to check the published app.

## Loading packages

You can load custom packages from PyPI during app start by listing them in `requirements.txt`. `requirements.txt` must be created in the same directory with `<your-flet-app.py>`.

Each line of `requirements.txt` contains a package name followed by an optional version specifier.

:::info

To install custom packages Pyodide uses [micropip](https://pypi.org/project/micropip/) - a lightweight version of `pip` that works in a browser.

You can use [Micropip API](https://micropip.pyodide.org/en/stable/project/api.html) directly in your Flet app:

```python
import sys

if sys.platform == "emscripten": # check if run in Pyodide environment
    import micropip
    await micropip.install("regex")
```
:::

### Pre-release Python packages

You can allow loading pre-release versions of PyPI packages, by adding `--pre` option to `flet publish` command:

```
flet publish <your-flet-app.py> --pre
```

## Assets

If your app requires assets (images, fonts, etc.) you can copy them into website directory by using `--assets <directory>` option with `flet publish` command:

```
flet publish <your-flet-app.py> --assets assets
```

:::caution
If you have `assets` directory in your app's directory and don't specify `--assets` option then the contents of `assets` will be packaged along with a Python application rather than copied to `dist`.
:::

## URL strategy

Flet apps support two ways of configuring URL-based routing:

* **Path** (default) - paths are read and written without a hash. For example, `fletapp.dev/path/to/view`.
* **Hash** - paths are read and written to the [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax). For example, `fletapp.dev/#/path/to/view`.

If a hosting provider supports [Single-page application (SPA) rendering](https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-application-spa-rendering) you can leave default "path" URL strategy as it gives pretty URLs.

However, if a hosting provider (like GitHub Pages) doesn't support SPA mode then you need to publish your app with "hash" URL strategy.

To specify "hash" URL strategy during static app publishing use `--route-url-strategy` option:

```
flet publish <your-flet-app.py> --route-url-strategy hash
```

## Web renderer

You can change default "canvaskit" web renderer ([more about renderers here](/docs/controls/text#using-system-fonts)) to "html" with `--web-renderer` option:

```
flet publish <your-flet-app.py> --web-renderer html
```

## Hosting website in a sub-directory

Multiple Flet apps can be hosted on a single domain - each app in it's own sub-directory.

To make a published Flet app work in a sub-directory you have to publish it with `--base-url` option:

```
flet publish <your-flet-app.py> --base-url <sub-directory>
```

For example, if app's URL is `https://mywebsite.com/myapp` then it must be published with `--base-url myapp`.

## Deploying website

Deploy a static website to any free hosting such as GitHub Pages, Cloudflare Pages or Vercel!

## Troubleshooting

When Flet app is running in a web browser all its `print()` statements are displayed in "Console" tab of Developer Tools in a browser. `print()` can be used as a simple debugging tool.

You can also use `logging` module and output messages to Console with different severity.

To enable detailed Flet logging add this to your program:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```