---
title: PaintLinearGradient
sidebar_label: PaintLinearGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PaintLinearGradient` class has the following properties:

### `begin`

An instance of [`Offset`](/docs/reference/types/offset). The offset at which stop 0.0 of the gradient is placed.

### `colors`

The [`colors`](/docs/reference/colors) the gradient should obtain at each of the stops. This list must contain at least two colors.

If `stops` is provided, this list must have the same length as `stops`.

### `end`

An instance of [`Offset`](/docs/reference/types/offset). The offset at which stop 1.0 of the gradient is placed.

### `stops`

A list of values from `0.0` to `1.0` that denote fractions along the gradient. 

If provided, this list must have the same length as `colors`. If the first value is not `0.0`, then a stop with position `0.0` and a color equal to the first color in `colors` is implied. If the last value is not `1.0`, then a stop with position `1.0` and a color equal to the last color in `colors` is implied.

### `tile_mode`

How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is `GradientTileMode` enum with supported values: `CLAMP` (default), `DECAL`, `MIRROR`, `REPEATED`. More info [here](https://api.flutter.dev/flutter/dart-ui/TileMode.html).

### `rotation`

Rotation for the gradient, in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.


More information on Linear gradient [here](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.linear.html).

## Usage example

<img src="/img/docs/controls/canvas/paint-linear-gradient.png" className="screenshot-20" />

```python
cv.Rect(
    10,
    10,
    100,
    100,
    5,
    ft.Paint(
        gradient=ft.PaintLinearGradient(
            (0, 10), (0, 100), colors=[ft.colors.BLUE, ft.colors.YELLOW]
        ),
        style=ft.PaintingStyle.FILL,
    ),
)
```