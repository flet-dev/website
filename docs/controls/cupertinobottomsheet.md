---
title: CupertinoBottomSheet
sidebar_label: CupertinoBottomSheet
---

An iOS-style bottom sheet.

To open this control, simply call the [`page.open()`](/docs/controls/page#open) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinobottomsheet)

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

### `bgcolor`

The BottomSheet's background [color](/docs/reference/colors).

### `content`

The content of the bottom sheet.

### `height`

The height of the bottom sheet.

### `modal`

Whether this bottom sheet can be dismissed/closed by clicking the area outside of it.

### `open`

Set to `True` to display a bottom sheet.

### `padding`

The sheet's padding. The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

## Events

### `on_dismiss`

Fires when bottom sheet is dismissed.