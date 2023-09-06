---
title: ElevatedButton
sidebar_label: ElevatedButton
slug: elevatedbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/elevatedbutton)

### Basic elevated buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Basic elevated buttons"
    page.add(
        ft.ElevatedButton(text="Elevated button"),
        ft.ElevatedButton("Disabled button", disabled=True),
    )

ft.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/basic-elevated-buttons.png" className="screenshot-20" />

### Elevated buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Elevated buttons with icons"
    page.add(
        ft.ElevatedButton("Button with icon", icon="chair_outlined"),
        ft.ElevatedButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

ft.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-icons.png" className="screenshot-30" />

### Elevated button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Elevated button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ft.ElevatedButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = ft.Text()

    page.add(b, t)

ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-button-with-click-event.gif" className="screenshot-50" />

### Elevated button with custom content 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Elevated buttons with custom content"
    page.add(
        ft.ElevatedButton(
            width=150,
            content=ft.Row(
                [
                    ft.Icon(name=ft.icons.FAVORITE, color="pink"),
                    ft.Icon(name=ft.icons.AUDIOTRACK, color="green"),
                    ft.Icon(name=ft.icons.BEACH_ACCESS, color="blue"),
                ],
                alignment=ft.MainAxisAlignment.SPACE_AROUND,
            ),
        ),
        ft.ElevatedButton(
            content=ft.Container(
                content=ft.Column(
                    [
                        ft.Text(value="Compound button", size=20),
                        ft.Text(value="This is secondary text"),
                    ],
                    alignment=ft.MainAxisAlignment.CENTER,
                    spacing=5,
                ),
                padding=ft.padding.all(10),
            ),
        ),
    )

ft.app(target=main)
```

  </TabItem>
  
</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-custom-content.png" className="screenshot-30" />

## Properties

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

Button's background [color](/docs/guides/python/colors).

### `color`

Button's text [color](/docs/guides/python/colors).

### `content`

A Control representing custom button content.

### `elevation`

Button's elevation.

### `icon`

Icon shown in the button.

### `icon_color`

Icon [color](/docs/guides/python/colors).

### `style`

The value is an instance of `ButtonStyle` class. `ButtonStyle` allows controling all visual aspects of a button, such as shape, foreground, background and shadow colors, content padding, border width and radius.

Each individual style attribute could be configured for all or particular "Material states" of a button, such as "hovered", "focused", "disabled" and others. For example, you can configure a different shape, background color for a hovered state and configure fallback values for all other states.

The following `MaterialState` values are supported:

* `HOVERED`
* `FOCUSED`
* `PRESSED`
* `DRAGGED`
* `SELECTED`
* `SCROLLEDUNDER`
* `DISABLED`
* `ERROR`
* `DEFAULT` - fallback state, meaning "all other states".

To configure style attribute for all Material states set its value to a literal (or class instance). For example, if you set `color` property to a literal the value will be applied to all button states:

```python
ButtonStyle(
    color=ft.colors.WHITE
)
```

To configure style attribute for specific Material states set its value to a dictionary where the key is state name. For example, to configure different background colors for `HOVERED` and `FOCUSED` states and another colors for all other states:

```python
ButtonStyle(
    color={
        ft.MaterialState.HOVERED: ft.colors.WHITE,
        ft.MaterialState.FOCUSED: ft.colors.BLUE,
        ft.MaterialState.DEFAULT: ft.colors.BLACK,
    }
)
```

Check the following example:

<img src="/img/blog/gradients/styled-button.gif" className="screenshot-30" />

```python
import flet as ft
from flet.border import BorderSide
from flet.buttons import RoundedRectangleBorder

def main(page: ft.Page):

    page.add(
        ft.ElevatedButton(
            "Styled button 1",
            style=ft.ButtonStyle(
                color={
                    ft.MaterialState.HOVERED: ft.colors.WHITE,
                    ft.MaterialState.FOCUSED: ft.colors.BLUE,
                    ft.MaterialState.DEFAULT: ft.colors.BLACK,
                },
                bgcolor={ft.MaterialState.FOCUSED: ft.colors.PINK_200, "": ft.colors.YELLOW},
                padding={ft.MaterialState.HOVERED: 20},
                overlay_color=ft.colors.TRANSPARENT,
                elevation={"pressed": 0, "": 1},
                animation_duration=500,
                side={
                    ft.MaterialState.DEFAULT: BorderSide(1, ft.colors.BLUE),
                    ft.MaterialState.HOVERED: BorderSide(2, ft.colors.BLUE),
                },
                shape={
                    ft.MaterialState.HOVERED: RoundedRectangleBorder(radius=20),
                    ft.MaterialState.DEFAULT: RoundedRectangleBorder(radius=2),
                },
            ),
        )
    )

ft.app(target=main)
```

#### `ButtonStyle` class

 `ButtonStyle` class has the following properties:

* `color` - The color for the button's Text and Icon control descendants.
* `bgcolor` - The button's background fill color.
* `overlay_color` - The highlight color that's typically used to indicate that the button is focused, hovered, or pressed.
* `shadow_color` - The shadow color of the button's Material.
* `surface_tint_color` - The surface tint color of the button's Material.
* `elevation` - The elevation of the button's Material.
* `animation_duration` - Defines the duration in milliseconds of animated changes for shape and elevation.
* `padding` - The padding between the button's boundary and its child.
* `side` - An instance of `BorderSide` class, the color and weight of the button's outline.
* `shape` - The shape of the button's underlying Material, an instance of one of the following implementations:
  * `StadiumBorder`
  * `RoundedRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `CircleBorder`
  * `BeveledRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `ContinuousRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.

This is an example demonstrating various button shapes:

<img src="/img/blog/gradients/button-shapes.png" className="screenshot-20" />

```python
import flet as ft

def main(page: ft.Page):
    page.padding = 30
    page.spacing = 30
    page.add(
        ft.FilledButton(
            "Stadium",
            style=ft.ButtonStyle(
                shape=ft.StadiumBorder(),
            ),
        ),
        ft.FilledButton(
            "Rounded rectangle",
            style=ft.ButtonStyle(
                shape=ft.RoundedRectangleBorder(radius=10),
            ),
        ),
        ft.FilledButton(
            "Continuous rectangle",
            style=ft.ButtonStyle(
                shape=ft.ContinuousRectangleBorder(radius=30),
            ),
        ),
        ft.FilledButton(
            "Beveled rectangle",
            style=ft.ButtonStyle(
                shape=ft.BeveledRectangleBorder(radius=10),
            ),
        ),
        ft.FilledButton(
            "Circle",
            style=ft.ButtonStyle(shape=ft.CircleBorder(), padding=30),
        ),
    )

ft.app(target=main)
```

### `text`

The text displayed on a button.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `url`

The URL to open when the button is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode:

* `_blank` (default) - new tab/window.
* `_self` - the current tab/window.

## Methods

### `focus()`

Moves focus to a button.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_click`

Fires when a user clicks the button.

### `on_focus`

Fires when the control has received focus.

### `on_hover`

Fires when a mouse pointer enters or exists the button response area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.

```python
import flet as ft

def main(page: ft.Page):
    def on_hover(e):
        e.control.bgcolor = "orange" if e.data == "true" else "yellow"
        e.control.update()

    page.add(
        ft.ElevatedButton(
            "I'm changing color on hover", bgcolor="yellow", on_hover=on_hover
        )
    )

ft.app(target=main)
```

### `on_long_press`

Fires when the button is long-pressed.