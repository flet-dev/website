---
title: CupertinoAlertDialog
sidebar_label: CupertinoAlertDialog
slug: cupertinoalertdialog
---

An iOS-style alert dialog.

An alert dialog informs the user about situations that require acknowledgement. An alert dialog has an optional title and an optional list of actions. The title is displayed above the content and the actions are displayed below the content.

This dialog styles its title and content (typically a message) to match the standard iOS title and message dialog text style. These default styles can be overridden by explicitly defining `text_style` property.

To display action buttons that look like standard iOS dialog buttons, provide [`CupertinoDialogActions`](/docs/controls/cupertinodialogaction) for the actions given to this dialog.

<img src="/img/docs/controls/cupertinodialogaction/cupertinoalertdialog.png" className="screenshot-50" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinoalertdialog)

### CupertinoAlertDialog and adaptive AlertDialog example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import logging

import flet as ft

logging.basicConfig(level=logging.DEBUG)


def main(page: ft.Page):
    cupertino_alert_dialog = ft.CupertinoAlertDialog(
        title=ft.Text("Cupertino Alert Dialog"),
        content=ft.Text("Do you want to delete this file?"),
        actions=[
            ft.CupertinoDialogAction(
                "OK",
                is_destructive_action=True,
            ),
            ft.CupertinoDialogAction(text="Cancel"),
        ],
    )

    alert_dialog = ft.AlertDialog(
        title=ft.Text("Material Alert Dialog"),
        content=ft.Text("body"),
        actions=[ft.TextButton("OK"), ft.TextButton("Cancel")],
    )

    actions = []
    if page.platform in ["ios", "macos"]:
        actions = [
            ft.CupertinoDialogAction("OK"),
            ft.CupertinoDialogAction("Cancel"),
        ]
    else:
        actions = [ft.TextButton("OK"), ft.TextButton("Cancel")]

    adaptive_alert_dialog = ft.AlertDialog(
        adaptive=True,
        title=ft.Text("Adaptive Alert Dialog"),
        content=ft.Text("body"),
        actions=actions,
    )

    def open_cupertino_dialog(e):
        page.dialog = cupertino_alert_dialog
        cupertino_alert_dialog.open = True
        page.update()

    def open_material_dialog(e):
        page.dialog = alert_dialog
        alert_dialog.open = True
        page.update()

    def open_adaptive_dialog(e):
        page.dialog = adaptive_alert_dialog
        adaptive_alert_dialog.open = True
        page.update()

    page.add(
        ft.OutlinedButton("Open Cupertino Dialog", on_click=open_cupertino_dialog),
        ft.OutlinedButton("Open Material Dialog", on_click=open_material_dialog),
        ft.OutlinedButton("Open Adaptive Dialog", on_click=open_adaptive_dialog),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `actions`

The (optional) set of actions that are displayed at the bottom of the dialog.

Typically this is a list of [`CupertinoDialogAction`](cupertinodialogaction) controls.

### `content`

The (optional) content of the dialog is displayed in the center of the dialog in a lighter font. Typically this is a [`Column`](column) that contains the dialog's [`Text`](text) message.

### `modal`

If set to True, dialog cannot be dismissed by clicking the area outside of it. The default value is False.

### `open`

Set to `True` to display a dialog.

### `title`

The (optional) title of the dialog is displayed in a large font at the top of the dialog.

Typically a [`Text`](text) control.

## Events

### `on_dismiss`

Fires when the dialog is dismissed.
