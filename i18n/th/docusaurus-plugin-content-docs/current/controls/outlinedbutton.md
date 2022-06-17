---
title: OutlinedButton
sidebar_label: OutlinedButton
slug: outlinedbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.
Outlined buttons pair well with filled buttons to indicate an alternative, secondary action. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

## Examples

### Basic outlined buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import OutlinedButton, Page


def main(page: Page):
    page.title = "Basic outlined buttons"
    page.add(
        OutlinedButton(text="Outlined button"),
        OutlinedButton("Disabled button", disabled=True),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/outlined-button/basic-outlined-buttons.png" className="screenshot-40" />

### Outlined buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import OutlinedButton, Page


def main(page: Page):
    page.title = "Outlined buttons with icons"
    page.add(
        OutlinedButton("Button with icon", icon="chair_outlined"),
        OutlinedButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/outlined-button/outlined-buttons-with-icons.png" className="screenshot-50" />

### Outlined button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import OutlinedButton, Page, Text


def main(page: Page):
    page.title = "Outlined button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = OutlinedButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = Text()

    page.add(b, t)

flet.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/outlined-button/outlined-button-with-click-event.gif" className="screenshot-50" />

### Outlined button with custom content 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Column,
    Container,
    Icon,
    OutlinedButton,
    Page,
    Row,
    Text,
    icons,
    padding,
)


def main(page: Page):
    page.title = "Outlined buttons with custom content"
    page.add(
        OutlinedButton(
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
        OutlinedButton(
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

<img src="/img/docs/controls/outlined-button/outlined-buttons-with-custom-content.png" className="screenshot-50" />


## Properties

### `text`

The text displayed on a button.

### `icon`

Icon shown in the button.

### `icon_color`

Icon color.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content`

A Control representing custom button content.

## Events

### `on_click`

Fires when a user clicks the button.
