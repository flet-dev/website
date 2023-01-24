---
title: Async apps
sidebar_label: Async apps
---

Flet app can be written as an async app and use `asyncio` and other Python async libraries. Calling coroutines is naturally supported in Flet, so you don't need to wrap them to run synchronously. 

By default, Flet uses `threading` library to run user sessions and execute event handlers in separate threads, but that, sometimes, could be ineffective usage of CPU as it does nothing while waiting for a HTTP response or executing `sleep()`.

Asyncio, on the other hand, allows implementing concurrency in a single thread by switching execution context between "coroutines". This is especially important for apps that are going to [published as a static websites](/docs/guides/python/publishing-app-as-static-website) using [Pyodide](https://pyodide.org/en/stable/). Pyodide is a Python runtime built as a WebAssembly (WASM) and running in the browser. At the time of writing it doesn't support [threading](https://github.com/pyodide/pyodide/issues/237) yet.

## Getting started with async

To start with an async Flet app you should make `main()` method `async`:

```python
import flet as ft

async def main(page: ft.Page):
    await page.add_async(ft.Text("Hello, async world!"))

ft.app(main)
```

You can use `await ft.app_async(main)` if Flet app is a part of a larger app and called from `async` code.

Notice the usage of `await page.add_async(...)` to add new controls to the page. In async app you cannot use `page.add()` or other sync page methods anymore - you must use their async counterparts ending with `_async` everywhere in the code:

* `page.add()` → `await page.add_async()`
* `page.update()` → `await page.update_async()`
* `page.clean()` → `await page.clean_async()`
* etc.

## Control event handlers

Control event handlers could be both sync and `async`.

If a handler does not call any async methods it could be a regular sync method:

```python
def page_resize(e):
    print("New page size:", page.window_width, page.window_height)

page.on_resize = page_resize
```

However, if a handler calls async logic it must be async too:

```python
async def button_click(e):
    page.controls.append(ft.Text("Hello!"))
    await page.update_async()

ft.ElevatedButton("Say hello!", on_click=button_click)
```

### Async lambdas

There is no async lambdas in Python. It's perfectly fine to have a lambda event handler in async app for simple things:

```python
page.on_error = lambda e: print("Page error:", e.data)
```

but you can't have an async lmbda, so an async event handler must be used.

## Sleeping

To delay code execution in async Flet app you should use [`asyncio.sleep()`](https://docs.python.org/3/library/asyncio-task.html#asyncio.sleep) instead of `time.sleep()`, for example:

```python
import asyncio
import flet as ft

async def main(page: ft.Page):
    async def button_click(e):
        await asyncio.sleep(1)
        await page.add_async(ft.Text("Hello!"))

    await page.add_async(
        ft.ElevatedButton("Say hello with delay!", on_click=button_click)
    )

ft.app(main)
```

## Threading

Technically, nobody will stop you from using `threading` library in async app, but it would be a bad idea anyway. `asynio` versions of locks, queues and tasks, used by Flet API are not thread-safe and, for example, calling `await page.update_async()` from multiple threads will lead to unpredictable results. Also, `threading` library is not supported by Pyodide if you decide to [deploy your app as a static website](/docs/guides/python/publishing-app-as-static-website).

To run something on a background use [`asyncio.create_task()`](https://docs.python.org/3/library/asyncio-task.html#asyncio.create_task). For example, an async version of "countdown" control from [User controls](/docs/guides/python/user-controls) guide would be:

```python
import asyncio
import flet as ft

class Countdown(ft.UserControl):
    def __init__(self, seconds):
        super().__init__()
        self.seconds = seconds

    async def did_mount_async(self):
        self.running = True
        asyncio.create_task(self.update_timer())

    async def will_unmount_async(self):
        self.running = False

    async def update_timer(self):
        while self.seconds and self.running:
            mins, secs = divmod(self.seconds, 60)
            self.countdown.value = "{:02d}:{:02d}".format(mins, secs)
            await self.update_async()
            await asyncio.sleep(1)
            self.seconds -= 1

    def build(self):
        self.countdown = ft.Text()
        return self.countdown

async def main(page: ft.Page):
    await page.add_async(Countdown(120), Countdown(60))

ft.app(target=main)
```

<img src="/img/docs/getting-started/user-control-countdown.gif" className="screenshot-40" />