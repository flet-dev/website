---
title: ElevatedButton
sidebar_label: ElevatedButton
slug: elevatedbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

## Examples

### Basic elevated buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, Page

def main(page: Page):
    page.title = "Basic elevated buttons"
    page.add(
        ElevatedButton(text="Elevated button"),
        ElevatedButton("Disabled button", disabled=True),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/basic-elevated-buttons.png" className="screenshot-40" />

### Elevated buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, Icon, Page, Row


def main(page: Page):
    page.title = "Elevated buttons with icons"
    page.add(
        ElevatedButton("Button with icon", icon="chair_outlined"),
        ElevatedButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-icons.png" className="screenshot-50" />

### Elevated button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, Page, Text

def main(page: Page):
    page.title = "Elevated button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ElevatedButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = Text()

    page.add(b, t)

flet.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-button-with-click-event.gif" className="screenshot-50" />

### Elevated button with custom content 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Column,
    Container,
    ElevatedButton,
    Icon,
    Page,
    Row,
    Text,
    icons,
    padding,
)


def main(page: Page):
    page.title = "Elevated buttons with custom content"
    page.add(
        ElevatedButton(
            width=150,
            content=Row(
                [
                    Icon(name=icons.FAVORITE, color="pink"),
                    Icon(name=icons.AUDIOTRACK, color="green"),
                    Icon(name=icons.BEACH_ACCESS, color="blue"),
                ],
                alignment="spaceAround",
            ),
        ),
        ElevatedButton(
            content=Container(
                content=Column(
                    [
                        Text(value="Compound button", size=20),
                        Text(value="This is secondary text"),
                    ],
                    alignment="center",
                    spacing=5,
                ),
                padding=padding.all(10),
            ),
        ),
    )


flet.app(target=main)

```

  </TabItem>
  
</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-custom-content.png" className="screenshot-40" />

## Properties

### `text`

The text displayed on a button.

### `color`

Button's text color.

### `bgcolor`

Button's background color.

### `elevation`

Button's elevation.

### `icon`

Icon shown in the button.

### `icon_color`

Icon color.

### `style`

The value is an instance of `ButtonStyle` class. `ButtonStyle` allows controling all visual aspects of a button, such as shape, foreground, background and shadow colors, content padding, border width and radius.



Each individual style attribute could be configured for all or particular "Material states" of a button, such as "hovered", "focused", "disabled" and others. For example, you can configure a different shape, background color for a hovered state and configure fallback values for all other states.

The following material states are supported:

* `hovered`
* `focused`
* `pressed`
* `dragged`
* `selected`
* `scrolledUnder`
* `disabled`
* `error`
* `""` (empty string) - fallback state, meaning "all other states".

To configure style attribute for all Material states set its value to a literal (or class instance). For example, if you set `color` property to a literal the value will be applied to all button states:

```python
ButtonStyle(
    color=colors.WHITE
)
```

To configure style attribute for specific Material states set its value to a dictionary where the key is state name. For example, to configure different background colors for `hovered` and `focused` states and another colors for all other states:

```python
ButtonStyle(
    color={
        "hovered": colors.WHITE,
        "focused": colors.BLUE,
        "": colors.BLACK,
    }
)
```

Check the following example:

<img src="/img/blog/gradients/styled-button.gif" className="screenshot-30" />

```python
import flet
from flet import ButtonStyle, ElevatedButton, Page, colors
from flet.border import BorderSide
from flet.buttons import RoundedRectangleBorder

def main(page: Page):

    page.add(
        ElevatedButton(
            "Styled button 1",
            style=ButtonStyle(
                color={
                    "hovered": colors.WHITE,
                    "focused": colors.BLUE,
                    "": colors.BLACK,
                },
                bgcolor={"focused": colors.PINK_200, "": colors.YELLOW},
                padding={"hovered": 20},
                overlay_color=colors.TRANSPARENT,
                elevation={"pressed": 0, "": 1},
                animation_duration=500,
                side={
                    "": BorderSide(1, colors.BLUE),
                    "hovered": BorderSide(2, colors.BLUE),
                },
                shape={
                    "hovered": RoundedRectangleBorder(radius=20),
                    "": RoundedRectangleBorder(radius=2),
                },
            ),
        )
    )

flet.app(target=main)
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
  * `CountinuosRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content`

A Control representing custom button content.

## Events

### `on_click`

Fires when a user clicks the button.