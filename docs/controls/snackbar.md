---
title: SnackBar
sidebar_label: SnackBar
slug: snackbar
---

A lightweight message with an optional action which briefly displays at the bottom of the screen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/snackbar)

### SnackBar with dynamic message

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

class Data:
    def __init__(self) -> None:
        self.counter = 0

d = Data()

def main(page):

    page.snack_bar = ft.SnackBar(
        content=ft.Text("Hello, world!"),
        action="Alright!",
    )

    def on_click(e):
        page.snack_bar = ft.SnackBar(ft.Text(f"Hello {d.counter}"))
        page.snack_bar.open = True
        d.counter += 1
        page.update()

    page.add(ft.ElevatedButton("Open SnackBar", on_click=on_click))

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/snackbar/snackbar-with-custom-content.gif" className="screenshot-40"/>

## Properties

### `action`

An optional action that the user can take based on the snack bar.

For example, the snack bar might let the user undo the operation that prompted the snackbar. Snack bars can have at most one action.

The action should not be "dismiss" or "cancel".

### `action_color`

The foreground [color](/docs/guides/python/colors) of action button.

### `behavior`

This defines the behavior and location of the snack bar.

Defines where a SnackBar should appear within a psge and how its location should be adjusted when the page also includes a `FloatingActionButton` or a `NavigationBar`.

If this property is `None`, then the default is `SnackBarBehavior.FIXED`.

If this value is `SnackBarBehavior.FLOATING`, the length of the bar is defined by either `width` or `margin`.

### `bgcolor`

SnackBar background [color](/docs/guides/python/colors).

### `close_icon_color`

An optional color for the close icon, if `show_close_icon` is `True`.

### `content`

The primary content of the snack bar. Typically a [`Text`](text) control.

### `dismiss_direction`

The direction in which the SnackBar can be dismissed.

Cannot be `None`, defaults to `DismissDirection.DOWN`.

### `duration`

The number of *milliseconds* that the SnackBar stays open for. Defaults to 4000 ([4 seconds](https://api.flutter.dev/flutter/material/SnackBar/duration.html)) when not set.

### `elevation`

The z-coordinate at which to place the snack bar. This controls the size of the shadow below the snack bar.

### `margin`

Empty space to surround the snack bar.

This property is only used when `behavior` is `SnackBarBehavior.FLOATING`. It can not be used if `width` is specified.

### `open`

Set to `True` to display a SnackBar. This property is automatically set to `False` once SnackBar is shown.

### `padding`

The amount of padding to apply to the snack bar's content and optional action.

### `show_close_icon`

Whether to include a "close" icon widget.

Tapping the icon will close the snack bar.

### `width`

The width of the snack bar.

If width is specified, the snack bar will be centered horizontally in the available space. This property is only used when `behavior` is `SnackBarBehavior.FLOATING`. It can not be used if `margin` is specified.

## Events

### `on_action`

Fires when action button is clicked.
