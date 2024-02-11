---
title: CupertinoButton
sidebar_label: CupertinoButton
slug: cupertinobutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An iOS-style button.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinobutton)

### Basic elevated buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python

```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/cupertino-button/cupertino-buttons.png" className="screenshot-20" />

### Elevated buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python

```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/cupertino-button/cupertino-buttons-with-icons.png" className="screenshot-30" />

### Elevated button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python

```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/cupertino-button/cupertino-button-with-click-event.gif" className="screenshot-50" />

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

### `bgcolor`

Button's background [color](/docs/guides/python/colors).

### `disabled_color`

The background [color](/docs/guides/python/colors) of the button when it is disabled.

### `content`

A Control representing custom button content.

### `elevation`

Button's elevation.

### `filled`

Whether the button has a filled background or not. Defaults to `False`.

### `icon`

Icon shown in the button.

### `icon_color`

Icon [color](/docs/guides/python/colors).

### `min_size`

The minimum size of the button. Defaults to `44.0`.

### `opacity_on_click`

Defines the opacity of the button when it is clicked. Defaults to `0.4`. The button will have an opacity of `1.0` when it is not pressed.

### `padding`

The amount of space to surround the `content` control inside the bounds of the button.

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

## Events

### `on_click`

Fires when a user clicks the button.
