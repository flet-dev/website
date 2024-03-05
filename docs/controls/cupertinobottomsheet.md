---
title: CupertinoBottomSheet
sidebar_label: CupertinoBottomSheet
slug: cupertinobottomsheet
---

An iOS-style bottom sheet.

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
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

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
                on_click=lambda e: print("Default clicked"),
                default=True,
            ),
            ft.CupertinoActionSheetAction(
                content=ft.Text("Normal Action"),
                on_click=lambda e: print("Normal Action clicked"),
            ),
            ft.CupertinoActionSheetAction(
                content=ft.Text("Destructive Action"),
                on_click=lambda e: print("Destructive Action clicked"),
                destructive=True,
            ),
        ],
    )

    page.add(
        ft.OutlinedButton(
            "Open Bottom Sheet containing CupertinoActionSheet",
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

### `bgcolor`

The BottomSheet's background [color](/docs/guides/python/colors).

### `content`

The content of the bottom sheet.

### `height`

The height of the bottom sheet.

### `modal`

Whether this bottom sheet can be dismissed/closed by clicking the area outside of it.

### `open`

Set to `True` to display a bottom sheet.

### `padding`

The sheet's padding. See [`Container.padding`](container#padding) for more details.

## Events

### `on_dismiss`

Fires when bottom sheet is dismissed.