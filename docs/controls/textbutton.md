---
title: TextButton
sidebar_label: TextButton
slug: textbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Text buttons are used for the lowest priority actions, especially when presenting multiple options. Text buttons can be placed on a variety of backgrounds. Until the button is interacted with, its container isn’t visible. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

## Examples

### Basic text buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, TextButton


def main(page: Page):
    page.title = "Basic text buttons"
    page.add(
        TextButton(text="Text button"),
        TextButton("Disabled button", disabled=True),
    )


flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text-button/basic-text-buttons.png" width="40%" />

### Text buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, TextButton


def main(page: Page):
    page.title = "Text buttons with icons"
    page.add(
        TextButton("Button with icon", icon="chair_outlined"),
        TextButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text-button/text-buttons-with-icons.png" width="40%" />

### Text button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, Text, TextButton


def main(page: Page):
    page.title = "Text button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = TextButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = Text()

    page.add(b, t)

flet.app(target=main)

```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text-button/text-button-with-click-event.gif" width="50%" />

### Text button with custom content 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Icon, Page, Row, Text, TextButton, icons, padding


def main(page: Page):
    page.title = "Text buttons with custom content"
    page.add(
        TextButton(
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
        TextButton(
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

<img src="/img/docs/controls/text-button/text-buttons-with-custom-content.png" width="40%" />

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