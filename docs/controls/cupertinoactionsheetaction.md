---
title: CupertinoActionSheetAction
sidebar_label: CupertinoActionSheetAction
---

An action button typically used in [`CupertinoActionSheet`](/docs/controls/cupertinoactionsheet).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinoactionsheetaction)

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

### `content`

The child control to be shown in this action button. In case both `text` and `content` are provided, then `content` will
be used.

### `is_default_action`

Whether this action should receive the style of an emphasized, default action.

### `is_destructive_action`

Whether this action should receive the style of a destructive action.

### `text`

The text to be shown in the button. In case both `text` and `content` are provided, then `content` will be used.

## Events

### `on_click`

Fires when this action button is clicked.