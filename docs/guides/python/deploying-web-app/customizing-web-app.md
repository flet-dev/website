---
title: Customizing web app
sidebar_label: Customizing web app
---

When you open Flet app in the browser its `index.html`, Flutter engine, favicon, images and other web app resources are served by Flet Server (aka "Flet deamon" or `fletd`). These resources are embedded into Fletd executable. However, there are situations when you need to modify the contents of certain files to customize app appearance or behavior, for example:

* Favicon
* App loading animation
* `manifest.json` with PWA details
* `index.html` which includes app description and touch icon


You can specify `assets_dir` in `flet.app()` call to set the location of assets that should be available to the application. `assets_dir` could be a relative to your `main.py` directory or an absolute path. For example, consider the following program structure:

```
/assets
   /images/my-image.png
main.py
```

You can access your images in the application as following:

```python {5,9}
import flet
from flet import Page, Image

def main(page: Page):
    page.add(Image(src=f"/images/my-image.png"))

flet.app(
    target=main,
    assets_dir="assets"
)
```

#### Favicon

favicon - 32x32 png - when running in the browser

#### Loading animation

icon for loading animation: icons/icon-192.png

https://docs.flutter.dev/development/platform-integration/web/initialization

https://github.com/flutter/gallery/blob/master/web/index.html