---
title: Image
sidebar_label: Image
slug: image
---

An image is a graphic representation of something (e.g photo or illustration).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Image, Page, Row, border_radius

def main(page: Page):
    page.title = "Images Example"
    page.theme_mode = "light"
    page.padding = 50
    page.update()

    img = Image(
        src=f"/icons/icon-512.png",
        width=100,
        height=100,
        fit="contain",
    )
    images = Row(expand=1, wrap=False, scroll="always")

    page.add(img, images)

    for i in range(0, 30):
        images.controls.append(
            Image(
                src=f"https://picsum.photos/200/200?{i}",
                width=200,
                height=200,
                fit="none",
                repeat="noRepeat",
                border_radius=border_radius.all(10),
            )
        )
    page.update()

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `src`

Image URL. This could be an external URL, e.g. `https://picsum.photos/200/200` or internal URL to reference side-loaded assets, e.g. `/my-image.png`.

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

### `width`

If set, require the image to have this width.

If not set, the image will pick a size that best preserves its intrinsic aspect ratio.

:::note
It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using `fit` to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.
:::

### `height`

If set, require the image to have this height.

If not set, the image will pick a size that best preserves its intrinsic aspect ratio.

:::note
It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using `fit` to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.
:::

### `repeat`

How to paint any portions of the layout bounds not covered by the image. Supported values: `noRepeat` (default), `repeat`, `repeatX`, `repeatY`.

### `fit`

How to inscribe the image into the space allocated during layout. Supported values: `none` (default), `contain`, `cover`, `fill`, `fitHeight`, `fitWidth`, `scaleDown`.

### `border_radius`

Clip image to have rounded corners. See [`Container.border_radius`](/docs/controls/container#border_radius) for more information and examples.

### `tooltip`

The text displayed when hovering a mouse over the Image.