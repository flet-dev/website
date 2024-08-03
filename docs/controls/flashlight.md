---
title: Flashlight
sidebar_label: Flashlight
---

A control to use FlashLight. Works on iOS and Android. Based on [torch_light](https://pub.dev/packages/torch_light) Flutter widget.

Flashlight control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `Flashlight` control add `--include-packages flet_flashlight` to `flet build` command, for example:

```
flet build apk --include-packages flet_flashlight
```
:::

## Example

```python
import flet as ft

def main(page: ft.Page):
    flashlight = ft.Flashlight()
    page.overlay.append(flashlight)
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
