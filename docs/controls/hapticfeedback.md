---
title: HapticFeedback
sidebar_label: HapticFeedback
---

Allows access to the haptic feedback interface on the device.

It is non-visual and should be added to `page.overlay` list.

## Examples

### Haptic feedback sample

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/haptic-feedback/haptic-feedback-example.py
```

## Methods

### `heavy_impact()`

Provides a haptic feedback corresponding a collision impact with a heavy mass.

### `light_impact()`

Provides a haptic feedback corresponding a collision impact with a light mass.

### `medium_impact()`

Provides a haptic feedback corresponding a collision impact with a medium mass.

### `vibrate()`

Provides vibration haptic feedback to the user for a short duration.