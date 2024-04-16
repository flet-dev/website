---
title: SnackBar
sidebar_label: SnackBar
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

The foreground [color](/docs/reference/colors) of action button.

### `action_overflow_threshold`

The percentage (between `0.0` and `1.0`) threshold for `action`'s width before it overflows to a new line. Defaults
to `0.25`.

If the width of the snackbar's `content` is greater than this percentage of the width of the snackbar minus the width of
its `action`, then the `action` will appear below the `content`.

At a value of `0.0`, the `action` will not overflow to a new line.

### `behavior`

This defines the behavior and location of the snack bar.

Defines where a SnackBar should appear within a page and how its location should be adjusted when the page also includes a `FloatingActionButton` or a `NavigationBar`.

Property value is `SnackBarBehavior` enum with the following values:

* `FIXED`
* `FLOATING`

If this property is `None`, then the default is `FIXED`.

If this value is `FLOATING`, the length of the bar is defined by either `width` or `margin`.

### `bgcolor`

SnackBar background [color](/docs/reference/colors).

### `clip_behavior`

The `content` will be clipped (or not) according to this option. Property value is [`ClipBehavior`](/docs/reference/types/clipbehavior) enum.

Default value is `HARD_EDGE`.

### `close_icon_color`

An optional color for the close icon, if `show_close_icon` is `True`.

### `content`

The primary content of the snack bar. Typically a [`Text`](/docs/controls/text) control.

### `dismiss_direction`

The direction in which the SnackBar can be dismissed.

Property value is `DismissDirection` enum with the following values:

* `NONE`
* `VERTICAL`
* `HORIZONTAL`
* `END_TO_START`
* `UP`
* `DOWN`

Cannot be `None`, defaults to `DOWN`.

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

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

### `shape`

The shape of the snack bar's. 

The value is an instance of [`OutlinedBorder`](/docs/reference/types/outlinedborder) class.

### `show_close_icon`

Whether to include a "close" icon widget.

Tapping the icon will close the snack bar.

### `width`

The width of the snack bar.

If width is specified, the snack bar will be centered horizontally in the available space. This property is only used when `behavior` is `SnackBarBehavior.FLOATING`. It can not be used if `margin` is specified.

## Events

### `on_action`

Fires when action button is clicked.

### `on_visible`

Fires the first time that the snackbar is visible within the page.
