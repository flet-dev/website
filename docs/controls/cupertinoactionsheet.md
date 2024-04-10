---
title: CupertinoActionSheet
sidebar_label: CupertinoActionSheet
---

An iOS-style action sheet.

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
    page.theme_mode = ft.ThemeMode.LIGHT
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    action_sheet = ft.CupertinoActionSheet(
        title=ft.Text("Title"),
        message=ft.Text("Message"),
        cancel=ft.CupertinoActionSheetAction(
            content=ft.Text("Cancel"),
            on_click=lambda e: page.close_bottom_sheet(),
        ),
        actions=[
            ft.CupertinoActionSheetAction(
                content=ft.Text("Default Action"),
                is_default_action=True,
                on_click=lambda e: print("Default clicked"),
            ),
            ft.CupertinoActionSheetAction(
                content=ft.Text("Normal Action"),
                on_click=lambda e: print("Normal Action clicked"),
            ),
            ft.CupertinoActionSheetAction(
                content=ft.Text("Destructive Action"),
                is_destructive_action=True,
                on_click=lambda e: print("Destructive Action clicked"),
            ),
        ],
    )

    page.add(
        ft.OutlinedButton(
            "Open CupertinoBottomSheet containing CupertinoActionSheet",
            on_click=lambda e: page.show_bottom_sheet(
                ft.CupertinoBottomSheet(action_sheet)
            ),
        )
    )

ft.app(main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-action-sheet/basic-cupertino-action-sheet.png" className="screenshot-40"/>

## Properties

### `actions`

A list of action buttons to be shown in the sheet. These actions are typically [`CupertinoActionSheetAction`](cupertinoactionsheetaction)s. This list must have at least one action.

### `cancel`

An optional control to be shown below the actions but grouped separately from them. Typically a [`CupertinoActionSheetAction`](cupertinoactionsheetaction) button.

### `message`

A control containing a descriptive message that provides more details about the reason for the alert. Typically a `Text` control.

### `title`

A control containing the title of the action sheet. Typically a `Text` control.
