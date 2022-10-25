---
title: SnackBar
sidebar_label: SnackBar
slug: snackbar
---

A lightweight message with an optional action which briefly displays at the bottom of the screen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### SnackBar with dynamic message

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, SnackBar, Text

class Data:
    def __init__(self) -> None:
        self.counter = 0

d = Data()

def main(page):

    page.snack_bar = SnackBar(
        content=Text("Hello, world!"),
        action="Alright!",
    )

    def on_click(e):
        page.snack_bar = SnackBar(Text(f"Hello {d.counter}"))
        page.snack_bar.open = True
        d.counter += 1
        page.update()

    page.add(ElevatedButton("Open SnackBar", on_click=on_click))

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/snackbar/snackbar-with-custom-content.gif" className="screenshot-40"/>

## Properties

### `open`

Set to `True` to display a SnackBar. This property is automatically set to `False` once SnackBar is shown.

### `content`

The primary content of the snack bar. Typically a [`Text`](text) control.

### `action`

An optional action that the user can take based on the snack bar.

For example, the snack bar might let the user undo the operation that prompted the snackbar. Snack bars can have at most one action.

The action should not be "dismiss" or "cancel".

### `bgcolor`

SnackBar background color.

### `action_color`

The foreground color of action button.

## Events

### `on_action`

Fires when action button is clicked.