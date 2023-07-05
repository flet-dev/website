---
title: BottomSheet
sidebar_label: BottomSheet
slug: bottomsheet
---

Shows a modal Material Design bottom sheet.

A modal bottom sheet is an alternative to a menu or a dialog and prevents the user from interacting with the rest of the app.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/bottomsheet)

### Simple BottomSheet

<img src="/img/docs/controls/bottom-sheet/bottom-sheet-sample.gif" className="screenshot-30"/>

```python
import flet as ft

def main(page: ft.Page):
    def bs_dismissed(e):
        print("Dismissed!")

    def show_bs(e):
        bs.open = True
        bs.update()

    def close_bs(e):
        bs.open = False
        bs.update()

    bs = ft.BottomSheet(
        ft.Container(
            ft.Column(
                [
                    ft.Text("This is sheet's content!"),
                    ft.ElevatedButton("Close bottom sheet", on_click=close_bs),
                ],
                tight=True,
            ),
            padding=10,
        ),
        open=True,
        on_dismiss=bs_dismissed,
    )
    page.overlay.append(bs)
    page.add(ft.ElevatedButton("Display bottom sheet", on_click=show_bs))

ft.app(target=main)
```

## Properties

### `content`

The content of the bottom sheet.

### `dismissible`

Specifies whether the bottom sheet will be dismissed when user taps on the scrim.

### `enable_drag`

Specifies whether the bottom sheet can be dragged up and down and dismissed by swiping downwards.

### `open`

Set to `True` to display a bottom sheet.

### `show_drag_handle`

Whether to display drag handle at the top of sheet or not.

### `use_safe_area`

Specifies whether the sheet will avoid system intrusions on the top, left, and right. Defaults to `False`.

## Events

### `on_dismiss`

Fires when bottom sheet is dismissed.