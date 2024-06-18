---
title: TransparentPointer
sidebar_label: TransparentPointer
---

TransparentPointer is the solution to ["How to pass through all gestures between two widgets in Stack"](https://stackoverflow.com/questions/65269190/pass-trough-all-gestures-between-two-widgets-in-stack) problem.

For example, if there is an [`ElevatedButton`](/docs/controls/elevatedbutton)
inside [`Container`](/docs/controls/container) with [`GestureDetector`](/docs/controls/gesturedetector) then tapping on
a button won't be "visible" to a gesture detector behind it. With `TransparentPointer` a tapping event doesn't stop on a
button, but goes up to the parent, similar to event bubbling in HTML/JS.

## Example

```python
import flet as ft

def main(page):
    page.add(
        ft.Stack(
            [
                ft.GestureDetector(
                    on_tap=lambda _: print("TAP!"),
                    multi_tap_touches=3,
                    on_multi_tap=lambda e: print(
                        "MULTI TAP:", e.correct_touches
                    ),
                    on_multi_long_press=lambda _: print("Multi tap long press"),
                ),
                ft.TransparentPointer(ft.Container(
                    ft.ElevatedButton("Test button"),
                    padding=50
                )),
            ],
            expand=True,
        )
    )

ft.app(target=main)
```

## Properties

### `content`

The `Control` that should be displayed inside the TransparentPointer.
