---
title: CupertinoActionSheet
sidebar_label: CupertinoActionSheet
---

An iOS-style action sheet.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinoactionsheet)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_click(e):
        page.add(ft.Text(f"Action clicked: {e.control.content.value}"))
        page.close(bottom_sheet)

    action_sheet = ft.CupertinoActionSheet(
        title=ft.Row([ft.Text("Title")], alignment=ft.MainAxisAlignment.CENTER),
        message=ft.Row([ft.Text("Description")], alignment=ft.MainAxisAlignment.CENTER),
        cancel=ft.CupertinoActionSheetAction(
            content=ft.Text("Cancel"),
            on_click=handle_click,
        ),
        actions=[
            ft.CupertinoActionSheetAction(
                content=ft.Text("Default Action"),
                is_default_action=True,
                on_click=handle_click,
            ),
            ft.CupertinoActionSheetAction(
                content=ft.Text("Normal Action"),
                on_click=handle_click,
            ),
            ft.CupertinoActionSheetAction(
                content=ft.Text("Destructive Action"),
                is_destructive_action=True,
                on_click=handle_click,
            ),
        ],
    )

    bottom_sheet = ft.CupertinoBottomSheet(action_sheet)

    page.add(
        ft.CupertinoFilledButton(
            "Open CupertinoBottomSheet",
            on_click=lambda e: page.open(bottom_sheet),
        )
    )


ft.app(main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-action-sheet/basic-cupertino-action-sheet.png" className="screenshot-40"/>

## Properties

### `actions`

A list of action buttons to be shown in the sheet. These actions are typically [`CupertinoActionSheetAction`](/docs/controls/cupertinoactionsheetaction)s. This list must have at least one action.

### `cancel`

An optional control to be shown below the actions but grouped separately from them. Typically a [`CupertinoActionSheetAction`](/docs/controls/cupertinoactionsheetaction) button.

### `message`

A control containing a descriptive message that provides more details about the reason for the alert. Typically
a [`Text`](/docs/controls/text) control.

### `title`

A control containing the title of the action sheet. Typically a [`Text`](/docs/controls/text) control.
