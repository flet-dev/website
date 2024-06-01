---
title: LinearGradient
sidebar_label: LinearGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`LinearGradient` class has the following properties:

### `begin`

An instance of [`Alignment`](/docs/reference/types/alignment). The offset at which stop `0.0` of the gradient is placed.

### `colors`

The [`colors`](/docs/reference/colors) the gradient should obtain at each of the stops. This list must contain at least two colors.

If `stops` is provided, this list must have the same length as `stops`.

### `end`

An instance of [`Alignment`](/docs/reference/types/alignment). The offset at which stop `1.0` of the gradient is placed.

### `rotation`

The rotation of the gradient in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

More information on Linear gradient [here](https://api.flutter.dev/flutter/painting/LinearGradient-class.html).

### `stops`

A list of values from `0.0` to `1.0` that denote fractions along the gradient. 

If provided, this list must have the same length as `colors`. If the first value is not `0.0`, then a stop with position `0.0` and a color equal to the first color in `colors` is implied. If the last value is not `1.0`, then a stop with position `1.0` and a color equal to the last color in `colors` is implied.

### `tile_mode`

How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is of type [`GradientTileMode`](/docs/reference/types/gradienttilemode).


### Usage example

<img src="/img/docs/controls/container/linear-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=ft.LinearGradient(
        begin=ft.alignment.top_center,
        end=ft.alignment.bottom_center,
       colors=[ft.colors.BLUE, ft.colors.YELLOW],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```