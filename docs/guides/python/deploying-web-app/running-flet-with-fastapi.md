---
title: Running Flet with FastAPI
sidebar_label: Running Flet with FastAPI
---

Flet for FastAPI replaces built-in Flet web server (Fletd) when deploying your Flet web apps to production.
[FastAPI](https://fastapi.tiangolo.com/) app run by [Uvicorn](https://www.uvicorn.org/), [Hypercorn](https://pgjones.gitlab.io/hypercorn/) or industry-leading [Gunicorn](https://gunicorn.org/) web server enables you to build reliable, high-performant Flet applications.

Existing FastAPI developers can use Flet to easily add interactive, real-time dashboards to their FastAPI apps.

## Installation

To install `flet-fastapi` run the following command:

```
pip install flet-fastapi
```

## Example app

:::cautionImportant

Flet app (and its dependent libraries) must be async to be able to run within FastAPI.
[Check this article](/docs/guides/python/async-apps) to learn how to write async Flet apps
and we also recommend reading [FastAPI's article about async/await](https://fastapi.tiangolo.com/async/) to better understand the differences between concurrency and parallelism.

:::

Create `counter.py` with the following content:

```python
import flet as ft
import flet_fastapi

async def main(page: ft.Page):
    counter = ft.Text("0", size=50, data=0)

    async def add_click(e):
        counter.data += 1
        counter.value = str(counter.data)
        await counter.update_async()

    page.floating_action_button = ft.FloatingActionButton(
        icon=ft.icons.ADD, on_click=add_click
    )
    await page.add_async(
        ft.Container(counter, alignment=ft.alignment.center, expand=True)
    )

app = flet_fastapi.app(main)
```

That's a simple app displaying a counter and a button at the right bottom of the page to increment that counter.

## Running the app locally

Install [Uvicorn](https://www.uvicorn.org/) web server:

```
pip install uvicorn
```

Start `uvicorn` with:

```
uvicorn counter:app
```

Open the browser and navigate to http://127.0.0.1:8000 to see the app running.

## How it works

`flet_fastapi.app()` configures a single Flet app at the root of FastAPI app with `main()` sessions handler and the following endpoints:

`/ws` (WS) - WebSocket handler for the Flet app. It calls `main()` function when a new WebSocket connection established and a new app session created.

`/upload` (PUT) - file uploads handler.

`/oauth_callback` (GET) - OAuth flow callback handler.

`/` (GET) - Flet app static files with SPA catch-all handler.

`flet_fastapi.app()` parameters:

* `fastapi_app` (FastAPI) - FastAPI application instance.
* `session_handler` (Coroutine) - application entry point - an async method called for newly connected user. Handler coroutine must have 1 parameter: `page` - `Page` instance.
* `assets_dir` (str, optional) - an absolute path to app's assets directory.
* `app_name` (str, optional) - PWA application name.
* `app_short_name` (str, optional) - PWA application short name.
* `app_description` (str, optional) - PWA application description.
* `web_renderer` (WebRenderer) - web renderer defaulting to `WebRenderer.CANVAS_KIT`.
* `use_color_emoji` (bool) - whether to load a font with color emoji. Default is `False`.
* `route_url_strategy` (str) - routing URL strategy: `path` (default) or `hash`.
* `upload_dir` (str) - an absolute path to a directory with uploaded files.
* `max_upload_size` (str, int) - maximum size of a single upload, bytes. Unlimited if `None`.
* `secret_key` (str, optional) - secret key to sign and verify upload requests.
* `session_timeout_seconds` (int, optional)- session lifetime, in seconds, after user disconnected.
* `oauth_state_timeout_seconds` (int, optional) - OAuth state lifetime, in seconds, which is a maximum allowed time between starting OAuth flow and redirecting to OAuth callback URL.

## Hosting multiple Flet apps under the same domain

```python
import flet as ft
import flet_fastapi


async def root_main(page: ft.Page):
    await page.add_async(ft.Text("This is root app!"))


async def sub_main(page: ft.Page):
    await page.add_async(ft.Text("This is sub app!"))


app = flet_fastapi.FastAPI()


app.mount("/sub-app", flet_fastapi.app(sub_main))
app.mount("/", flet_fastapi.app(root_main))
```

Sub-apps must be mapped before the root Flet app as it configures catch-all `index.html` for SPA.

Run the app with `uvicorn` and visit http://127.0.0.1:8000 and then http://127.0.0.1:8000/sub-app/ to see both Flet apps running. Notice the trailing slash in `/sub-app/` URL - without the slash the request will be routed to a root app.

## Adding Flet to the existing FastAPI app

```python
from contextlib import asynccontextmanager

import flet as ft
import flet_fastapi
from fastapi import FastAPI

@asynccontextmanager
async def lifespan(app: FastAPI):
    await flet_fastapi.app_manager.start()
    yield
    await flet_fastapi.app_manager.shutdown()

app = FastAPI(lifespan=lifespan)

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, Flet!"))

app.mount("/flet-app", flet_fastapi.app(main))
```

When adding Flet app to the existing FastAPI app you need to call `flet_fastapi.app_manager.start()` on app start and `flet_fastapi.app_manager.shutdown()` on shutdown. Use the way that best suites you: lifespan (in the example above) or app events.

`app_manager.start()` method starts background tasks cleaning up expired sessions and OAuth flow states.

`app_manager.shutdown()` method removes any temporary files created by a Flet app.

## Configuring individual Flet endpoints

### Static files

A FastAPI app to serve static Flet app files (index.html, manifest.json, Flutter JS app, etc.) and user assets.

```python
from flet_fastapi import FastAPI, FletStaticFiles

app = FastAPI()

# mount to the root of web app
app.mount(path="/", app=FletStaticFiles())
```

Parameters of `FletStaticFiles` constructor:

* `app_mount_path` (str) - absolute URL of Flet app. Default is `/`.
* `assets_dir` (str, optional) - an absolute path to app's assets directory.
* `app_name` (str, optional) - PWA application name.
* `app_short_name` (str, optional) - PWA application short name.
* `app_description` (str, optional) - PWA application description.
* `web_renderer` (WebRenderer) - web renderer defaulting to `WebRenderer.CANVAS_KIT`.
* `use_color_emoji` (bool) - whether to load a font with color emoji. Default is `False`.
* `route_url_strategy` (str) - routing URL strategy: `path` (default) or `hash`.
* `websocket_endpoint_path` (str, optional) - absolute URL of Flet app WebSocket handler. Default is `{app_mount_path}/ws`.

### WebSocket handler

Handles WebSocket connections from Flet client app running in the browser. WebSocket channel is used to send events from a browser to a Flet backend code and receive page real-time incremential updates.

```python
from flet_fastapi import FletApp

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, Flet!"))

@app.websocket("/app1/ws")
async def flet_app(websocket: WebSocket):
    await FletApp(main).handle(websocket)
```

* `session_handler` (Coroutine) - application entry point - an async method called for newly connected user. Handler coroutine must have 1 parameter: `page` - `Page` instance.
* `session_timeout_seconds` (int, optional) - session lifetime, in seconds, after user disconnected.
* `oauth_state_timeout_seconds` (int, optional) - OAuth state lifetime, in seconds, which is a maximum allowed time between starting OAuth flow and redirecting to OAuth callback URL.
* `upload_endpoint_path` (str, optional) - absolute URL of upload endpoint, e.g. `/upload`.
* `secret_key` (str, optional) - secret key to sign upload requests.

### Uploads handler

Handles file uploads by [FilePicker](/docs/controls/filepicker) control. This endpoint is optional - if your app doesn't use [FilePicker](/docs/controls/filepicker) then it's not needed.

```python
from flet_fastapi import FletUpload

@app.put("/upload")
async def flet_uploads(request: Request):
    await FletUpload("/Users/feodor/Downloads/123").handle(request)
```

### OAuth callback handler

Handles OAuth flow callback requests. If your app does't use [authentication](/docs/guides/python/authentication) then this endpoint is not needed.

```python
from flet_fastapi import FletOAuth

@app.get("/oauth_callback")
async def flet_oauth(request: Request):
    return await FletOAuth().handle(request)
```

## Running the app in production

### Uvicorn

[Uvicorn](https://www.uvicorn.org/), a lightning-fast ASGI server, built on uvloop and httptools.

To install Uvicorn:

```
pip install uvicorn
```

To run the app with Uvicorn while listening on all NIC IPs and port `8000`:

```
uvicorn --host 0.0.0.0 --port 8000 main:app
```

### Hypercorn

[Hypercorn](https://github.com/pgjones/hypercorn/) is another ASGI web server inspired by Gunicorn.

To install Hypercorn:

```
pip install hypercorn
```

To run the app with Hypercorn:

```
hypercorn --bind 0.0.0.0:8000 main:app
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) is popular web server to run Python web applications. While it implements WSGI specification it's possible to run ASGI FastAPI apps with a [worker process class](https://fastapi.tiangolo.com/deployment/server-workers/) provided by Uvicorn.

To install Gunicorn:

```
pip install gunicorn
```

Start `gunicorn` with:

```
gunicorn --bind 0.0.0.0:8000 -k uvicorn.workers.UvicornWorker counter:app
```