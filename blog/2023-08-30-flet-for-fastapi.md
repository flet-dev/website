---
slug: flet-for-fastapi
title: Flet for FastAPI
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

We've just released Flet 0.10.0 with FastAPI support!

<img src="/img/blog/fastapi/fastapi-logo-teal.png" className="screenshot-60" />

[FastAPI](https://fastapi.tiangolo.com/) coupled with Uvicorn, Hypercorn, Gunicorn or other web server replaces built-in Flet web server (Fletd) to reliably run production Flet workloads.

On the other hand, seasoned FastAPI developers can use Flet to easily add interactive, real-time dashboards and admin UI to their existing or new FastAPI services.

## A minimal app example

```python
import flet as ft
import flet_fastapi

async def main(page: ft.Page):
    await page.add_async(
        ft.Text("Hello, Flet!")
    )

app = flet_fastapi.app(main)
```

It's a simple app that just outputs "Hello, Flet!" on a web page.

To run the app install Flet for FastAPI and Uvicorn:

```
pip install flet-fastapi
pip install uvicorn
```

Save the code above to `hello.py` and then start uvicorn as:

```
uvicorn hello:app
```

Open the browser and navigate to http://127.0.0.1:8000 to see the app running.

:::note
Flet app must be [async](/docs/guides/python/async-apps) in order to work with FastAPI WebSocket handler.
:::

## Features and benefits

* [Multiple Flet apps on a single domain](/docs/guides/python/deploying-web-app/running-flet-with-fastapi#hosting-multiple-flet-apps-under-the-same-domain) - mapped to the root and/or sub-paths.
* Simple [one-line mappings](/docs/guides/python/deploying-web-app/running-flet-with-fastapi#how-it-works) or [individual endpoint configurations](/docs/guides/python/deploying-web-app/running-flet-with-fastapi#configuring-individual-flet-endpoints).
* Light-weight async wrapper around FastAPI WebSocket connection for greater concurrency.
* Serves Flet static files with user assets and app meta-information customization.
* Uploads handler for `FilePicker` control.
* OAuth callback handler for authentication flows.

Check [the guide](/docs/guides/python/deploying-web-app/running-flet-with-fastapi) for complete information about Flet with FastAPI.

Let us know what you think by joining [Flet Discord server](https://discord.gg/dzWXP8SHG8) or creating a new thread on [Flet GitHub discussions](https://github.com/flet-dev/flet/discussions).