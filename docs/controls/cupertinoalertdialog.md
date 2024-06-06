---
title: CupertinoAlertDialog
sidebar_label: CupertinoAlertDialog
---

An iOS-style alert dialog.

An alert dialog informs the user about situations that require acknowledgement. An alert dialog has an optional title and an optional list of actions. The title is displayed above the content and the actions are displayed below the content.

This dialog styles its title and content (typically a message) to match the standard iOS title and message dialog text style. These default styles can be overridden by explicitly defining `text_style` property.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

To display action buttons that look like standard iOS dialog buttons,
provide [`CupertinoDialogAction`](/docs/controls/cupertinodialogaction)s for the actions given to this dialog.

<img src="/img/docs/controls/cupertinodialogaction/cupertinoalertdialog.png" className="screenshot-50" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinoalertdialog)

### CupertinoAlertDialog and adaptive AlertDialog example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.scroll = True

    def handle_action_click(e):
        page.add(ft.Text(f"Action clicked: {e.control.text}"))
        # e.control is the clicked action button, e.control.parent is the corresponding parent dialog of the button
        page.close(e.control.parent)

    cupertino_actions = [
        ft.CupertinoDialogAction(
            "Yes",
            is_destructive_action=True,
            on_click=handle_action_click,
        ),
        ft.CupertinoDialogAction(
            text="No",
            is_default_action=False,
            on_click=handle_action_click,
        ),
    ]

    material_actions = [
        ft.TextButton(text="Yes", on_click=handle_action_click),
        ft.TextButton(text="No", on_click=handle_action_click),
    ]

    page.add(
        ft.FilledButton(
            text="Open Material Dialog",
            on_click=lambda e: page.open(
                ft.AlertDialog(
                    title=ft.Text("Material Alert Dialog"),
                    content=ft.Text("Do you want to delete this file?"),
                    actions=material_actions,
                )
            ),
        ),
        ft.CupertinoFilledButton(
            text="Open Cupertino Dialog",
            on_click=lambda e: page.open(
                ft.CupertinoAlertDialog(
                    title=ft.Text("Cupertino Alert Dialog"),
                    content=ft.Text("Do you want to delete this file?"),
                    actions=cupertino_actions,
                )
            ),
        ),
        ft.FilledButton(
            text="Open Adaptive Dialog",
            adaptive=True,
            on_click=lambda e: page.open(
                ft.AlertDialog(
                    adaptive=True,
                    title=ft.Text("Adaptive Alert Dialog"),
                    content=ft.Text("Do you want to delete this file?"),
                    actions=cupertino_actions if page.platform in [ft.PagePlatform.IOS, ft.PagePlatform.MACOS] else material_actions,
                )
            ),
        ),
    )


ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `actions`

The (optional) set of actions that are displayed at the bottom of the dialog.

Typically this is a list of [`CupertinoDialogAction`](/docs/controls/cupertinodialogaction) controls.

### `content`

The (optional) content of the dialog is displayed in the center of the dialog in a lighter font. Typically this is a [`Column`](/docs/controls/column) that contains the dialog's [`Text`](/docs/controls/text) message.

### `modal`

If set to True, dialog cannot be dismissed by clicking the area outside of it. The default value is False.

### `open`

Set to `True` to display a dialog.

### `title`

The (optional) title of the dialog is displayed in a large font at the top of the dialog.

Typically a [`Text`](/docs/controls/text) control.

## Events

### `on_dismiss`

Fires when the dialog is dismissed.
