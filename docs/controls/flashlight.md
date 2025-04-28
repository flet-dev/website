---
title: Flashlight
sidebar_label: Flashlight
---

A control to use FlashLight. Works on iOS and Android. Based on [torch_light](https://pub.dev/packages/torch_light) Flutter widget.

Flashlight control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `FlashLight` control add `flet-flashlight` to `dependencies` key of the `[project]` section of your `pyproject.toml` file, for
example:

```toml
[project]
...
dependencies = [
  "flet==0.27.6",
  "flet-flashlight==0.1.0",
]
```
:::

## Example

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/flashlight/flashlight-example.py
```

## Methods

### `turn_on()`

Turns flashlight ON.

### `turn_off()`

Turns flashlight OFF.

### `toggle()`

Toggles the state of flashlight.
