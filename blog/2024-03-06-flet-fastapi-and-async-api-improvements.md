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

TBD. Fletd written in Go has been Replaced. No more overhead. Fast and fancy.

Uvicorn is used by default.

How to run with any other ASGI web server. How `assets`, `upload` folders are resolved.

Environment variables to control all parameters of web app.

## Flet is async-first framework

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

* [CupertinoActivityIndicator](/docs/controls/cupertinoactivityindicator)
* [CupertinoActionSheet](/docs/controls/cupertinoactionsheet)
* [CupertinoSlidingSegmentedButton](/docs/controls/CupertinoSlidingSegmentedButton)
* [CupertinoSegmentedButton](/docs/controls/cupertinosegmentedbutton)
* [CupertinoTimerPicker](/docs/controls/cupertinotimerpicker)
* [CupertinoPicker](/docs/controls/cupertinopicker)
* [CupertinoDatePicker](/docs/controls/cupertinodatepicker)
* [CupertinoContextMenu](/docs/controls/cupertinocontextmenu)

## Accessibility improvements

More Semantics properties and SemanticsService control (#2731).

## App lifecycle change event

Page.on_app_lifecycle_state_change

`show`
`resume`
`hide`
`inactive`
`pause`
`detach`
`restart`

```python
import flet as ft


def main(page: ft.Page):

    def app_lifecycle_change(e: ft.AppLifecycleStateChangeEvent):
        print("App lifecycle state:", e.state)

    page.on_app_lifecycle_state_change = app_lifecycle_change
    page.add(ft.Text("Hello World"))


ft.app(target=main)
```

## `Page.media` details

TBD

Flet 0.21.0 has breaking changes. Upgrade to Flet 0.21.0, test your apps and let us know what you think by joining [Flet Discord server](https://discord.gg/dzWXP8SHG8) or creating a new thread on [Flet GitHub discussions](https://github.com/flet-dev/flet/discussions).

Enjoy!