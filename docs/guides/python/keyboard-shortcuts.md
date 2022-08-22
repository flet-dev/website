---
title: Keyboard shortcuts
sidebar_label: Keyboard shortcuts
---

A solid keyboard support is a key for user productivity while using your web and, especially, desltop app. Indeed, it could be really annoying to constantly switch between mouse and keyboard.

In addition to form controls' `.autofocus` property and [`TextField.focus()`](/docs/controls/textfield#focus) method Flet allows handling "global" keyboard events.

To capture all keystrokes implement `page.on_keyboard_event` handler. Event handler parameter `e` is an instance of `KeyboardEvent` class with the following properties:

* `key` - a textual representation of a pressed key, e.g. `A`, `Enter` or `F5`.
* `shift` - `True` if "Shift" key is pressed.
* `ctrl` - `True` if "Control" key is pressed.
* `alt` - `True` if "Alt" ("Option") key is pressed.
* `meta` - `True` if "Command" key is pressed.

This is a simple usage example:

```python
import flet
from flet import KeyboardEvent, Page, Text

def main(page: Page):
    def on_keyboard(e: KeyboardEvent):
        page.add(
            Text(
                f"Key: {e.key}, Shift: {e.shift}, Control: {e.ctrl}, Alt: {e.alt}, Meta: {e.meta}"
            )
        )

    page.on_keyboard_event = on_keyboard
    page.add(
        Text("Press any key with a combination of CTRL, ALT, SHIFT and META keys...")
    )

flet.app(target=main)
```

Here is [more advanced example](https://github.com/flet-dev/examples/blob/main/python/controls/page/keyboard-events.py).
