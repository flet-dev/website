---
title: SafeArea
sidebar_label: SafeArea
---

A control that insets its `content` by sufficient padding to avoid intrusions by the operating system.

For example, this will indent the `content` by enough to avoid the status bar at the top of the screen.

It will also indent the `content` by the amount necessary to avoid The Notch on the iPhone X, or other similar creative physical features of the display.

When a `minimum_padding` is specified, the greater of the minimum padding or the safe area padding will be applied.

## Example

[Live example](https://flet-controls-gallery.fly.dev/layout/safearea)

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/safe-area/safe-area-example.py
```

## Properties

### `bottom`

Whether to avoid system intrusions on the bottom side of the screen.

Defaults to `True`.

### `content`

A `Control` to display inside safe area.

### `left`

Whether to avoid system intrusions on the left.

Defaults to `True`.

### `maintain_bottom_view_padding`

Specifies whether the `SafeArea` should maintain the bottom `MediaQueryData.viewPadding` instead of the bottom `MediaQueryData.padding`, defaults to `False`.

For example, if there is an onscreen keyboard displayed above the SafeArea, the padding can be maintained below the obstruction rather than being consumed. This can be helpful in cases where your layout contains flexible controls, which could visibly move when opening a software keyboard due to the change in the padding value. Setting this to true will avoid the UI shift.

### `minimum_padding`

This minimum padding to apply.

The greater of the minimum insets and the media padding will be applied.

### `right`

Whether to avoid system intrusions on the right.

Defaults to `True`.

### `top`

Whether to avoid system intrusions at the top of the screen, typically the system status bar.

Defaults to `True`.

