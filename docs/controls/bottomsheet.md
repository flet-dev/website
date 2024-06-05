---
title: BottomSheet
sidebar_label: BottomSheet
---

Shows a modal Material Design bottom sheet.

A modal bottom sheet is an alternative to a menu or a dialog and prevents the user from interacting with the rest of the app.

To open this control, simply call the [`page.open()`](/docs/controls/page#open) helper-method.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/bottomsheet)

### Simple BottomSheet

<img src="/img/docs/controls/bottom-sheet/bottom-sheet-sample.gif" className="screenshot-30"/>

```python
import flet as ft


def main(page: ft.Page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    
    def handle_dismissal(e):
        page.add(ft.Text("Bottom sheet dismissed"))
    bs = ft.BottomSheet(
        on_dismiss=handle_dismissal,
        content=ft.Container(
            padding=50,
            content=ft.Column(
                tight=True,
                controls=[
                    ft.Text("This is bottom sheet's content!"),
                    ft.ElevatedButton("Close bottom sheet", on_click=lambda _: page.close(bs)),
                ],
            ),
        ),
    )
    page.add(ft.ElevatedButton("Display bottom sheet", on_click=lambda _: page.open(bs)))


ft.app(target=main)
```

## Properties

### `bgcolor`

The BottomSheet's background [color](/docs/reference/colors).

### `content`

The content `Control` of the bottom sheet.

### `dismissible`

Specifies whether the bottom sheet will be dismissed when user taps on the scrim.

### `enable_drag`

Specifies whether the bottom sheet can be dragged up and down and dismissed by swiping downwards.

### `elevation`

Controls the size of the shadow below the BottomSheet.

Defaults to `0.0`.

### `is_scroll_controlled`

Specifies if the bottom sheet contains scrollable content, such as ListView or GridView.

Defaults to `False`.

### `maintain_bottom_view_insets_padding`

Adds a padding at the bottom to avoid obstructing bottom sheet content with on-screen keyboard or other system elements.

### `open`

Set to `True` to display a bottom sheet.

Defaults to `False`.

### `show_drag_handle`

Whether to display drag handle at the top of sheet or not.

### `use_safe_area`

Specifies whether the sheet will avoid system intrusions on the top, left, and right.

Defaults to `False`.

## Events

### `on_dismiss`

Fires when bottom sheet is dismissed.