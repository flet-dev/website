---
title: ShakeDetector
sidebar_label: ShakeDetector
slug: shakedetector
---

Detects phone shakes.

It is non-visual and should be added to `page.overlay` list.

## Examples

### Shake detector sample

```python
# TODO
```

## Properties

### `minimum_shake_count`

Number of shakes required before shake is triggered. Default is `1`.

### `shake_slop_time_ms`

Minimum time between shakes, in milliseconds. Default is `500` ms.

### `shake_count_reset_time_ms`

Time, in milliseconds, before shake count resets. Default is `3000` ms.

### `shake_threshold_gravity`

Shake detection threshold, in Gs. Default is `2.7`G.

## Events

### `on_shake`

Triggers when the shake detected.