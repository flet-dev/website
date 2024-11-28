---
title: KeyboardEvent
sidebar_label: KeyboardEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`KeyboardEvent` class has the following properties:

### `alt`

Whether a logical ALT modifier key was pressed, regardless of which side of the keyboard it is on. For example, `Alt`
or `Option`.

Value is of type `bool`.

### `ctrl`

Whether a logical CTRL modifier key is pressed, regardless of which side of the keyboard it is on. For example, `Ctrl`.

Value is of type `bool`.

### `key`

A textual representation of the pressed keyboard key, e.g. `A`, `Enter` or `F5`.

Value is of type `str`.

### `meta`

Whether a logical META modifier key is pressed, regardless of which side of the keyboard it is on. For example,
the `Command`.

Value is of type `bool`.

### `shift`

Whether the `Shift` key was pressed.

Value is of type `bool`.

## Usage Example

```python
import flet as ft

class ButtonControl(ft.Container):
    def __init__(self, text):
        super().__init__()
        self.content = ft.Text(text)
        self.border = ft.border.all(1, ft.Colors.BLACK54)
        self.border_radius = 3
        self.bgcolor = "0x09000000"
        self.padding = 10
        self.visible = False


def main(page: ft.Page):
    def on_keyboard(e: ft.KeyboardEvent):
        key.content.value = e.key
        key.visible = True
        shift.visible = e.shift
        ctrl.visible = e.ctrl
        alt.visible = e.alt
        meta.visible = e.meta
        page.update()

    page.on_keyboard_event = on_keyboard

    key = ButtonControl("")
    shift = ButtonControl("Shift")
    ctrl = ButtonControl("Control")
    alt = ButtonControl("Alt")
    meta = ButtonControl("Meta")

    page.spacing = 50
    page.vertical_alignment = "center"
    page.horizontal_alignment = "center"
    page.add(
        ft.Text(
            "Press any key with a combination of CTRL, ALT, SHIFT and META keys..."
        ),
        ft.Row([key, shift, ctrl, alt, meta], alignment=ft.MainAxisAlignment.CENTER),
    )

ft.app(main)
```