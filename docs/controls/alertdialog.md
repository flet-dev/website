---
title: AlertDialog
sidebar_label: AlertDialog
slug: alertdialog
---

A material design alert dialog.

An alert dialog informs the user about situations that require acknowledgement. An alert dialog has an optional title and an optional list of actions. The title is displayed above the content and the actions are displayed below the content.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Example 1

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import AlertDialog, ElevatedButton, Page, Text, TextButton

def main(page: Page):
    page.title = "AlertDialog examples"

    dlg = AlertDialog(
        title=Text("Hello, you!"), on_dismiss=lambda e: print("Dialog dismissed!")
    )

    def close_dlg(e):
        dlg_modal.open = False
        page.update()

    dlg_modal = AlertDialog(
        modal=True,
        title=Text("Please confirm"),
        content=Text("Do you really want to delete all those files?"),
        actions=[
            TextButton("Yes", on_click=close_dlg),
            TextButton("No", on_click=close_dlg),
        ],
        actions_alignment="end",
        on_dismiss=lambda e: print("Modal dialog dismissed!"),
    )

    def open_dlg(e):
        page.dialog = dlg
        dlg.open = True
        page.update()

    def open_dlg_modal(e):
        page.dialog = dlg_modal
        dlg_modal.open = True
        page.update()

    page.add(
        ElevatedButton("Open dialog", on_click=open_dlg),
        ElevatedButton("Open modal dialog", on_click=open_dlg_modal),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `open`

Set to `True` to display a dialog.

### `modal`

Whether dialog can be dismissed by clicking the area outside of it.

### `title`

The (optional) title of the dialog is displayed in a large font at the top of the dialog.

Typically a [`Text`](text) control.

### `title_padding`

Padding around the title.

If there is no title, no padding will be provided. Otherwise, this padding is used.

This property defaults to providing 24 pixels on the top, left, and right of the title. If the content is not null, then no bottom padding is provided (but see `content_padding`). If it is not set, then an extra 20 pixels of bottom padding is added to separate the title from the actions.

See [`Container.padding`](/docs/controls/container#padding) for more information about padding and possible values.

### `content`

The (optional) content of the dialog is displayed in the center of the dialog in a lighter font. Typically this is a [`Column`](control) that contains the dialog's [`Text`](text) message.

### `content_padding`

Padding around the content.

If there is no content, no padding will be provided. Otherwise, padding of 20 pixels is provided above the content to separate the content from the title, and padding of 24 pixels is provided on the left, right, and bottom to separate the content from the other edges of the dialog.

See [`Container.padding`](/docs/controls/container#padding) for more information about padding and possible values.

### `actions`

The (optional) set of actions that are displayed at the bottom of the dialog.

Typically this is a list of [`TextButton`](textbutton) controls.

### `actions_padding`

Padding around the set of actions at the bottom of the dialog.

Typically used to provide padding to the button bar between the button bar and the edges of the dialog.

If are no actions, then no padding will be included. The padding around the button bar defaults to zero.

See [`Container.padding`](/docs/controls/container#padding) for more information about padding and possible values.

### `actions_alignment`

Defines the horizontal layout of the actions according to the same rules as for [`Row.alignment`](row#alignment).

Supported values: `start`, `end` (default), `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

## Events

### `on_dismiss`

Fires when dialog is dimissed.