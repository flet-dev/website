---
slug: flet-fastapi-and-async-api-improvements
title: Flet FastAPI and async API improvements
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

Flet makes writing dynamic, real-time web apps a real fun!

Flet 0.21.0 further improves web apps development experience as well as using asyncio APIs in your Flet apps.

Here's what's new in Flet 0.21.0:

## FastAPI with Uvicorn replaces built-in web server

From very beginning of Flet life to serve web apps there was a built-in web server written in Go
and called "Fletd". It's being started on the background when you run your app with `flet run --web`.
Fletd was part of Flet Python wheel contributing a few megabytes to its size.
Additionally, Python app was using WebSockets to talk to Fletd web server which was adding sometimes noticable overhead.

Then, in [Flet 0.10.0](http://localhost:3000/blog/flet-for-fastapi) we have added FastAPI support to build "serious" web apps using AsyncIO API.

Now, in Flet 0.21.0 built-in web server has been completely removed and replaced with FastAPI and Uvicorn. Fletd is not a part of Flet distribution anymore.

Using FastAPI means there is no more communication overhead as web server is a part of Flet app.
Also, you don't need to do any additional steps to host your app in production with FastAPI -
you just use the same `ft.app(main)` command to run your app.

:::warning Breaking change

`flet_fastapi` package has been deprecated and its contents moved to `flet` package as `flet.fastapi`
module. If you were using FastAPI in your Flet app replace:

```python
import flet_fastapi
```

with

```python
import flet.fastapi as flet_fastapi
```
:::

**Use any ASGI web server for hosting**

You can host your Flet web app with any ASGI-compatible server such as [Uvicorn](https://www.uvicorn.org/) (used by default), [Hypercorn](https://pgjones.gitlab.io/hypercorn/) or [Daphne](https://github.com/django/daphne).

Just tell Flet to export ASGI app:

```python title="main.py"
import flet as ft

def main(page: ft.Page):
    page.add(ft.Text("Hello ASGI!"))

app = ft.app(main, export_asgi_app=True)
```

and then run with Hypercorn as (provided the):

```
hypercorn main:app --bind 0.0.0.0:8000
```

**Web app environment variables**

Every aspect of web app hosting can be controlled with environment variables:

* `FLET_FORCE_WEB_SERVER` - `true` to force running app as a web app. Automatically set on headless Linux hosts.
* `FLET_SERVER_PORT` - TCP port to run app on. `8000` if the program is running on a Linux server or `FLET_FORCE_WEB_SERVER` is set; otherwise random port.
* `FLET_SERVER_IP` - IP address to listen web app on, e.g. `127.0.0.1`. Default is `0.0.0.0` - bound to all server IPs.
* `FLET_ASSETS_DIR` - absolute path to app "assets" directory.
* `FLET_UPLOAD_DIR` - absolute path to app "upload" directory.
* `FLET_MAX_UPLOAD_SIZE` - max allowed size of uploaded file, in bytes. Unlimited if not specified.
* `FLET_SECRET_KEY` - a secret key to sign temporary upload URLs.
* `FLET_WEB_APP_PATH` - a URL path after domain name to host web app under, e.g. `/apps/myapp`. Default is `/` - host app in the root.
* `FLET_SESSION_TIMEOUT` - session lifetime, in seconds. Default is `3600`.
* `FLET_OAUTH_STATE_TIMEOUT` - max allowed time to complete OAuth web flow, in seconds. Default is `600`.
* `FLET_WEB_RENDERER` - Flutter rendering mode: `canvaskit` (default), `html` or `auto`.
* `FLET_WEB_USE_COLOR_EMOJI` - `true`, or `True` or `1` to load web font with colorful emojis.
* `FLET_WEB_ROUTE_URL_STRATEGY` - `path` (default) or `hash`.
* `FLET_WEBSOCKET_HANDLER_ENDPOINT` - custom path for WebSocket handler. Default is `/ws`.
* `FLET_UPLOAD_HANDLER_ENDPOINT` - custom path for upload handler. Default is `/upload`.
* `FLET_OAUTH_CALLBACK_HANDLER_ENDPOINT` - custom path for OAuth handler. Default is `/oauth_callback`.

## Async-first framework

TBD. Mix sync and async. What's run in threads, what's in tasks. When to use async.

Most `_async` methods gone. (link to deprecated methods)

Use `update()`, `add()`.

## Custom controls API normalized

`UserControl` is deprecated

Control._before_build_command() replaced with Control.before_update()

Control.build()

Use Control.did_mount() and Control.will_unmount() instead. Control.did_mount_async() and Control.will_unmount_async() are not called anymore.

Control._is_isolated() replaced with Control.is_isolated().

`page.run_thread()`, `page.run_task()` and `page.executor` and `page.loop`.

```python
import asyncio

import flet as ft


class Countdown(ft.UserControl):
    def __init__(self, seconds):
        super().__init__()
        self.seconds = seconds

    def did_mount(self):
        self.running = True
        self.page.run_task(self.update_timer)

    def will_unmount(self):
        self.running = False

    async def update_timer(self):
        while self.seconds and self.running:
            mins, secs = divmod(self.seconds, 60)
            self.countdown.value = "{:02d}:{:02d}".format(mins, secs)
            self.update()
            await asyncio.sleep(1)
            self.seconds -= 1

    def build(self):
        self.countdown = ft.Text()
        return self.countdown


def main(page: ft.Page):
    page.add(Countdown(120), Countdown(60))


ft.app(main)
```

## New Cupertino controls

```
* [CupertinoActivityIndicator](/docs/controls/cupertinoactivityindicator)
* [CupertinoActionSheet](/docs/controls/cupertinoactionsheet)
* [CupertinoSlidingSegmentedButton](/docs/controls/cupertinoslidingsegmentedbutton)
* [CupertinoSegmentedButton](/docs/controls/cupertinosegmentedbutton)
* [CupertinoTimerPicker](/docs/controls/cupertinotimerpicker)
* [CupertinoPicker](/docs/controls/cupertinopicker)
* [CupertinoDatePicker](/docs/controls/cupertinodatepicker)
* [CupertinoContextMenu](/docs/controls/cupertinocontextmenu)
```

## Accessibility improvements

```
Complete implementation of [Semantics](/docs/controls/semantics) control and new [SemanticsService](/docs/controls/semanticsservice) control.
```

## App lifecycle change event

There is a new `Page.on_app_lifecycle_state_change` event that allows listening for changes in the application lifecycle.

For example, you can now update UI with the latest information when the app becomes active (brought to the front). That works on iOS, Android, all desktop platforms and web!

The following app lifecycle transitions are recognized:

* `SHOW`
* `RESUME`
* `HIDE`
* `INACTIVE`
* `PAUSE`
* `DETACH`
* `RESTART`

Here's a small example of how this event can be used: 

```python
import flet as ft

def main(page: ft.Page):

    def app_lifecycle_change(e: ft.AppLifecycleStateChangeEvent):
        if e.state == ft.AppLifecycleState.RESUME:
          print("Update UI with fresh data!")

    page.on_app_lifecycle_state_change = app_lifecycle_change
    page.add(ft.Text("Hello World"))

ft.app(target=main)
```

## `Page.media` details

TBD

Flet 0.21.0 has breaking changes. Upgrade to Flet 0.21.0, test your apps and let us know what you think by joining [Flet Discord server](https://discord.gg/dzWXP8SHG8) or creating a new thread on [Flet GitHub discussions](https://github.com/flet-dev/flet/discussions).

Enjoy!