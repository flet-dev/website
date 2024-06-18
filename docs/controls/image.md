---
title: Image
sidebar_label: Image
---

An image is a graphic representation of something (e.g photo or illustration).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/image)

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Images Example"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.padding = 50
    page.update()

    img = ft.Image(
        src=f"/icons/icon-512.png",
        width=100,
        height=100,
        fit=ft.ImageFit.CONTAIN,
    )
    images = ft.Row(expand=1, wrap=False, scroll="always")

    page.add(img, images)

    for i in range(0, 30):
        images.controls.append(
            ft.Image(
                src=f"https://picsum.photos/200/200?{i}",
                width=200,
                height=200,
                fit=ft.ImageFit.NONE,
                repeat=ft.ImageRepeat.NO_REPEAT,
                border_radius=ft.border_radius.all(10),
            )
        )
    page.update()

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/image/custom-images.gif" className="screenshot-50"/>

## Properties

### `border_radius`

Clip image to have rounded corners. Border radius is an instance of [`BorderRadius`](/docs/reference/types/borderradius)
class.

### `color`

If set, this [color](/docs/reference/colors) is blended with each image pixel using `color_blend_mode`.

### `color_blend_mode`

Used to combine `color` with the image. In terms of the blend mode, color is the source and this image is the
destination.

Value is of type [`BlendMode`](/docs/reference/types/blendmode) and defaults to `BlendMode.COLOR`.

### `error_content`

Fallback `Control` to display if the image cannot be loaded from the source.

### `exclude_from_semantics`

Whether to exclude this image from semantics.

Defaults to `False`.

### `filter_quality`

The rendering quality of the image.

Value is of type [`FilterQuality`](/docs/reference/types/filterquality) and defaults to `FilterQuality.LOW`.

### `fit`

How to inscribe the image into the space allocated during layout.

Value is of type [`ImageFit`](/docs/reference/types/imagefit) and defaults to `ImageFit.NONE`.

### `gapless_playback`

Whether to continue showing the old image (`True`), or briefly show nothing (`False`), when the image provider changes.

Defaults to `False`.

### `height`

If set, require the image to have this height.

If not set, the image will pick a size that best preserves its intrinsic aspect ratio.

:::note
It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using `fit` to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.
:::

### `semantics_label`

A semantic description of the image. Used to provide a description of the image to TalkBack on Android, and VoiceOver on iOS.

### `src`

Image URL. This could be an external URL, e.g. `https://picsum.photos/200/200` or internal URL to reference app assets, e.g. `/my-image.png`.

You can specify `assets_dir` in `flet.app()` call to set the location of assets that should be available to the application. `assets_dir` could be a relative to your `main.py` directory or an absolute path. For example, consider the following program structure:

```
/assets
   /images/my-image.png
main.py
```

You can access your images in the application as following:

```python {5,9}
import flet as ft

def main(page: ft.Page):
    page.add(ft.Image(src=f"/images/my-image.png"))

flet.app(
    target=main,
    assets_dir="assets"
)
```

### `src_base64`

Displays an image from Base-64 encoded string, for example:

```python
import flet as ft

def main(page: ft.Page):
    page.add(ft.Image(src_base64="iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAACXBIWXMAAAORAAADkQFnq8zdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA6dJREFUSImllltoHFUYx3/fzOzm0lt23ZrQ1AQbtBehNpvQohgkBYVo410RwQctNE3Sh0IfiiBoIAjqi6TYrKnFy4O3oiiRavDJFi3mXomIBmOxNZe63ay52GR3Zj4f2sTEzmx3m//TYf7/c35zvgPnO6KqrESXqpq3muocAikv6m+/zytj3ejik1VN21G31YA9CgJ6xC+bMyQZPVCuarciPAMYC99V6Vw5pLbFSibHmlVoRVj9P3cmPBM8tSJI/M6mzabpfoAQ9fIF7WK4bd5vvuFnLGgy2vi0abg94A0AcJGvMq3hDxGRyar9r4F+iLAm0yIiRk8m37tctS1WsrIhhrI30+Srmg+J87OXUf3lWGS1q89dC6ltsSanxk4Aj2QBABii96300g87P/rtlrWr8l+vyDMfdlXSyyEikqxsiOUAQJCBhfHdXRfCq1LSsSlcWG+KBAGStvvrMkgiuv8lUc2mREukPwLUfHG+uTQv8Eown7VL3XlbBxYhf1c17hbVF3MDwA9bts280TnaU1YYqPby07aeFlUlHt27wSQ4CLo+F8AvoTCvHmyKF+ZbEb/M77P2LgvAwmrTHAHflN3KZxVbMC2jMFNOpgPnrMSOhvvFkMezXdwV4ePbtvHtxnJAMQ0j4JtVnO+eLb5oiSlt5HDbv7t1O90lpYCCCKbhfzW5kAIwUAazR0BlfII8Ow0I6uoVmI9MyAMwbMs8CExmDbk4zgu931MyO4OI4KrYflkRjOoTI+uM9d1vjotwKPu9QMk/sxzuO8POiVFcdZ1M2YBVsMEAKOqLvaPIe7mACuw0z/80SMH58SMplxlfiDhVi7dw2pltRhjKBQTQdrSja2KKTfE551NHuaZ0QVPvWYQUn31/Vm2nDvgjF4grVJx6suSvrvrSJ/6cSW2Oz9mf264uNrB806xZ1k/CZ49dUKgDEtlCROX2hfHpx8pGuuo3PpqYulw8fjndOp1yhgtNKRevJ1FyR2Ola+jXAjdnwTkZ6o896GdWdxDw7IxFg+0DpmXchTKSBWQnIuJn9u4j7dt+13UfHXEkXQOcuQ4kMhVtqsgUyPiQiPQfHw1NB2sRjmXKuTg1NwwBYLhtPtQX26eqTwGXPDOqvmcC4Hnwfrrad94GrVsOYTqUTkQY+iTlNe/6O1miSP/x0VB/+wMIDwHn/vtV1iQC4Xv95uUEWVCoL9Y5Z+gdovoyMHUFJHv88jmVy0vTuw7cZNv2YaA61Bfb7ZX5F8SaUv2xwZevAAAAAElFTkSuQmCC"))

ft.app(target=main)
```

Use `base64` command (Linux, macOS, WSL) to convert file to Base64 format, for example:

```
base64 -i <image.png> -o <image-base64.txt>
```

On Windows you can use PowerShell to encode string into Base64 format:

```posh
[convert]::ToBase64String((Get-Content -path "your_file_path" -Encoding byte))
```

### `repeat`

How to paint any portions of the layout bounds not covered by the image.

Values is of type [`ImageRepeat`](/docs/reference/types/imagerepeat) and defaults to `ImageRepeat.NO_REPEAT`.

### `semantics_label`

A semantics label for this image.

### `tooltip`

The text displayed when hovering a mouse over the Image.

### `width`

If set, require the image to have this width.

If not set, the image will pick a size that best preserves its intrinsic aspect ratio.

:::note
It is strongly recommended that either both the width and the height be specified, or that the Image be placed in a context that sets tight layout constraints, so that the image does not change size as it loads. Consider using `fit` to adapt the image's rendering to fit the given width and height if the exact image dimensions are not known in advance.
:::