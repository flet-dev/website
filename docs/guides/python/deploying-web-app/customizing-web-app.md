---
title: Customizing web app
sidebar_label: Customizing web app
---

When you open Flet app in the browser its `index.html`, Flutter engine, favicon, images and other web app resources are served by Flet Server (aka "Flet daemon" or `fletd`). These resources are bundled with `flet` Python package. However, there are situations when you need to modify the contents of certain files to customize appearance of your app or its behavior, for example:

* Favicon.
* App loading animation.
* `manifest.json` with PWA details.
* `index.html` which includes app description and touch icon.


You can specify `assets_dir` in `flet.app()` call to set the location of assets that should be available to the application. `assets_dir` could be a relative to your `main.py` directory or an absolute path. For example, consider the following program structure:

```
/assets
   /images/my-image.png
main.py
```

You can access your images in the application as following:

```python {4,8}
import flet as ft

def main(page: ft.Page):
    page.add(ft.Image(src=f"/images/my-image.png"))

ft.app(
    target=main,
    assets_dir="assets"
)
```

#### Favicon

To override favicon with your own put `favicon.png` file into the root of assets directory. It should be a PNG image with the size of at least 32x32 pixels.

#### Loading animation

To override Flet animation image put `icons/loading-animation.png` image with your own app logo into the the root of assets directory.

If you like to completely customize Flutter app initialization logic you can modify [Flet's original `index.html`](https://github.com/flet-dev/flet/blob/main/client/web/index.html) following the [instructions in Flutter documentation](https://docs.flutter.dev/development/platform-integration/web/initialization). A customized `index.html` must be placed in the root of assets directory.