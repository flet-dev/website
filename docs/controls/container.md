---
title: Container
sidebar_label: Container
---

Container allows to decorate a control with background color and border and position it with padding, margin and alignment. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/container)

### Clickable container

<img src="/img/docs/controls/container/clickable-container.gif" className="screenshot-50" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Containers - clickable and not"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    page.add(
        ft.Row(
            [
                ft.Container(
                    content=ft.Text("Non clickable"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.AMBER,
                    width=150,
                    height=150,
                    border_radius=10,
                ),
                ft.Container(
                    content=ft.Text("Clickable without Ink"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.GREEN_200,
                    width=150,
                    height=150,
                    border_radius=10,
                    on_click=lambda e: print("Clickable without Ink clicked!"),
                ),
                ft.Container(
                    content=ft.Text("Clickable with Ink"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.CYAN_200,
                    width=150,
                    height=150,
                    border_radius=10,
                    ink=True,
                    on_click=lambda e: print("Clickable with Ink clicked!"),
                ),
                ft.Container(
                    content=ft.Text("Clickable transparent with Ink"),
                    margin=10,
                    padding=10,
                    alignment=ft.alignment.center,
                    width=150,
                    height=150,
                    border_radius=10,
                    ink=True,
                    on_click=lambda e: print("Clickable transparent with Ink clicked!"),
                ),
            ],
            alignment=ft.MainAxisAlignment.CENTER,
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

<img src="/img/docs/controls/container/container-diagram.png" className="screenshot-50" />

### `alignment`

Align the child control within the container.

Alignment is an instance of [`alignment.Alignment`](/docs/reference/types/alignment) class.

### `animate`

Enables container "implicit" animation that gradually changes its values over a period of time.

The value of `animate` property could be one of the following types:

* `bool` - `True` to enable container animation with `linear` curve with `1000` milliseconds duration.
* `int` - enable container animation with `linear` curve and specified number of milliseconds. 
* `animation.Animation(duration: int, curve: AnimationCurve` - enable container animation with specified duration and transition [curve](/docs/reference/types/animationcurve).

For example:

<img src="/img/docs/controls/container/animate-container.gif" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):

    c = ft.Container(
        width=200,
        height=200,
        bgcolor="red",
        animate=ft.animation.Animation(1000, ft.AnimationCurve.BOUNCE_OUT),
    )

    def animate_container(e):
        c.width = 100 if c.width == 200 else 200
        c.height = 100 if c.height == 200 else 200
        c.bgcolor = "blue" if c.bgcolor == "red" else "red"
        c.update()

    page.add(c, ft.ElevatedButton("Animate container", on_click=animate_container))

ft.app(target=main)
```

### `bgcolor`

Defines the background [color](/docs/reference/colors) of the container.

### `blend_mode`

The blend mode applied to the `color` or `gradient` background of the container. Property value is [`BlendMode`](/docs/reference/types/blendmode) enum with `MODULATE` as default.

### `blur`

Applies Gaussian blur effect under the container.

The value of this property could be one of the following:

* **a number** - specifies the same value for horizontal and vertical sigmas, e.g. `10`.
* **a tuple** - specifies separate values for horizontal and vertical sigmas, e.g. `(10, 1)`.
* **an instance of [`Blur`](/docs/reference/types/blur)**

For example:

```python
ft.Stack(
    [
        ft.Container(
            content=ft.Text("Hello"),
            image_src="https://picsum.photos/100/100",
            width=100,
            height=100,
        ),
        ft.Container(
            width=50,
            height=50,
            blur=10,
            bgcolor="#44CCCC00",
        ),
        ft.Container(
            width=50,
            height=50,
            left=10,
            top=60,
            blur=(0, 10),
        ),
        ft.Container(
            top=10,
            left=60,
            blur=ft.Blur(10, 0, ft.BlurTileMode.MIRROR),
            width=50,
            height=50,
            bgcolor="#44CCCCCC",
            border=ft.border.all(2, ft.colors.BLACK),
        ),
    ]
)
```

### `border`

A border to draw above the background color. The value is an instance of [`border.Border`](/docs/reference/types/border) class.

### `border_radius`

If specified, the corners of the container are rounded by this radius. Border radius is an instance of [`border_radius.BorderRadius`](/docs/reference/types/borderradius) class.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Property value is [`ClipBehavior`](/docs/reference/types/clipbehavior) enum.

Default is `ANTI_ALIAS` if `border_radius` is not `None`; otherwise `HARD_EDGE`.

### `content`

A child Control contained by the container.

### `gradient`

Configures gradient background. The value must be an instance of one of the following classes:

* [`LinearGradient`](/docs/reference/types/lineargradient)
* [`RadialGradient`](/docs/reference/types/radialgradient)
* [`SweepGradient`](/docs/reference/types/sweepgradient)

### `image_fit`

How to inscribe the image into the space allocated during layout. 

The value is [`ImageFit`](/docs/reference/types/imagefit) enum. Default is `NONE`.

### `image_opacity`

Sets image opacity when blending with a background: value between `0.0` and `1.0`.

### `image_repeat`

How to paint any portions of the layout bounds not covered by the image.

The value is [`ImageRepeat`](/docs/reference/types/imagerepeat) enum. Default is `NO_REPEAT`.

### `image_src`

Sets an image as a container background. See [`Image.src`](image#src) for more details.

### `image_src_base64`

Sets an image encoded as Base-64 string as a container background. See [`Image.src_base64`](image#src_base64) for more details.

### `ink`

`True` to produce ink ripples effect when user clicks the container. Default is `False`.

### `ink_color`

The splash [color](/docs/reference/colors) of the ink response.

### `margin`

Empty space to surround the decoration and child control.

The value of `margin` property could be one of the following types:

* `int`
* `float`
* [`margin.Margin`](/docs/reference/types/margin)

### `padding`

Empty space to inscribe inside a container decoration (background, border). The child control is placed inside this padding.

Padding is an instance of [`padding.Padding`](/docs/reference/types/padding) class.

### `rtl`

`True` to set text direction to right-to-left. Default is `False`.

### `shadow`

A list of shadows cast by the container.

The value of this property is a single instance or a list of [`BoxShadow`](/docs/reference/types/boxshadow) class instances.

### `shape`

Sets the shape of the container. The value is `BoxShape` enum:

* `RECTANGLE` (default)
* `CIRCLE`

### `theme_mode`

The value is [`ThemeMode`](/docs/reference/types/thememode) enum. Default is `SYSTEM`.

Setting `theme_mode` "resets" parent theme and creates a new, unique scheme for all controls inside the container. Otherwise the styles defined in container's `theme` property override corresponding styles from the parent, inherited theme.

### `theme`

Allows setting a nested `ft.Theme` for all controls inside the container and down the tree, for example:

```python
import flet as ft

def main(page: ft.Page):
    # Yellow page theme with SYSTEM (default) mode
    page.theme = ft.Theme(
        color_scheme_seed=ft.colors.YELLOW,
    )

    page.add(
        # Page theme
        ft.Container(
            content=ft.ElevatedButton("Page theme button"),
            bgcolor=ft.colors.SURFACE_VARIANT,
            padding=20,
            width=300,
        ),

        # Inherited theme with primary color overridden
        ft.Container(
            theme=ft.Theme(color_scheme=ft.ColorScheme(primary=ft.colors.PINK)),
            content=ft.ElevatedButton("Inherited theme button"),
            bgcolor=ft.colors.SURFACE_VARIANT,
            padding=20,
            width=300,
        ),
        
        # Unique always DARK theme
        ft.Container(
            theme=ft.Theme(color_scheme_seed=ft.colors.INDIGO),
            theme_mode=ft.ThemeMode.DARK,
            content=ft.ElevatedButton("Unique theme button"),
            bgcolor=ft.colors.SURFACE_VARIANT,
            padding=20,
            width=300,
        ),
    )

ft.app(main)
```

<img src="/img/blog/theme-scrolling/nested-themes.png"  className="screenshot-60" />

### `url`

The URL to open when the container is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode:

* `_blank` (default) - new tab/window.
* `_self` - the current tab/window.

## Events

### `on_click`

Fires when a user clicks the container. Event object `e` is an instance of `ContainerTapEvent` class:

```python
class ft.ContainerTapEvent():
    local_x: float
    local_y: float
    global_x: float
    global_y: float
```

:::info
If `ink` is `True`, `e` will be plain `ControlEvent` with empty `data` instead of `ContainerTapEvent`.
:::

A simple usage example:

```python
import flet as ft

def main(page: ft.Page):
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    t = ft.Text()

    def container_click(e: ft.ContainerTapEvent):
        t.value = f"local_x: {e.local_x}\nlocal_y: {e.local_y}\nglobal_x: {e.global_x}\nglobal_y: {e.global_y}"
        t.update()

    page.add(
        ft.Column(
            [
                ft.Container(
                    content=ft.Text("Clickable inside container"),
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.GREEN_200,
                    width=200,
                    height=200,
                    border_radius=10,
                    on_click=container_click,
                ),
                t,
            ],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
        ),
    )

ft.app(target=main)
```

### `on_hover`

Fires when a mouse pointer enters or exists the container area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.

A simple example of a container changing its background color on mouse hover:

```python
import flet as ft

def main(page: ft.Page):
    def on_hover(e):
        e.control.bgcolor = "blue" if e.data == "true" else "red"
        e.control.update()

    page.add(
        ft.Container(width=100, height=100, bgcolor="red", ink=False, on_hover=on_hover)
    )

ft.app(target=main)
```

### `on_long_press`

Fires when the container is long-pressed.
