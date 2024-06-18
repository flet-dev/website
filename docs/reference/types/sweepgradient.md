---
title: SweepGradient
sidebar_label: SweepGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`SweepGradient` class has the following properties:

### `center`

The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the sweep gradient in the center of the box.

### `colors`

The [`colors`](/docs/reference/colors) the gradient should obtain at each of the stops. This list must contain at least two colors.

If `stops` is provided, this list must have the same length as `stops`.

### `end_angle`

The angle in [radians](https://en.wikipedia.org/wiki/Radian) at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2.

### `rotation`

Rotation for the gradient, in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

### `stops`

A list of values from `0.0` to `1.0` that denote fractions along the gradient. 

If provided, this list must have the same length as `colors`. If the first value is not `0.0`, then a stop with position `0.0` and a color equal to the first color in `colors` is implied. If the last value is not `1.0`, then a stop with position `1.0` and a color equal to the last color in `colors` is implied.

### `start_angle`

The angle in [radians](https://en.wikipedia.org/wiki/Radian) at which stop 0.0 of the gradient is placed. Defaults to 0.0.

### `tile_mode`

How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is `GradientTileMode` enum with supported values: `CLAMP` (default), `DECAL`, `MIRROR`, `REPEATED`. More info [here](https://api.flutter.dev/flutter/dart-ui/TileMode.html).


More information on Sweep gradient [here](https://api.flutter.dev/flutter/painting/SweepGradient-class.html).

### Usage example

<img src="/img/docs/controls/container/sweep-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=SweepGradient(
        center=ft.alignment.center,
        start_angle=0.0,
        end_angle=math.pi * 2,
       colors=[ft.colors.YELLOW, ft.colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```