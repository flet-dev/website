---
title: Flashlight
sidebar_label: Flashlight
---

A control to use FlashLight. Works on iOS and Android. Based on [torch_light](https://pub.dev/packages/torch_light) Flutter widget.

Flashlight control is non-visual and should be added to `page.overlay` list.

## Example

```python
import flet as ft

def main(page: ft.Page):
    flashLight = ft.Flashlight()
    page.overlay.append(flashLight)
    page.add(
        ft.TextButton("toggle", on_click=lambda _: flashlight.toggle())
    )

ft.app(target=main)
```

## Methods

### `turn_on()`

Turns flashlight ON.

### `turn_off()`

Turns flashlight OFF.

### `toggle()`

Toggles the state of flashlight.
