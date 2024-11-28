---
title: PaintRadialGradient
sidebar_label: PaintRadialGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PaintRadialGradient` class has the following properties:

### `center`

An instance of [`Offset`](/docs/reference/types/offset) class. The center of the gradient.

### `colors`

The [`colors`](/docs/reference/colors) the gradient should obtain at each of the stops. This list must contain at least two colors.

If `stops` is provided, this list must have the same length as `stops`.

### `focal`

The focal point of the gradient. If specified, the gradient will appear to be focused along the vector from `center` to focal.

### `focal_radius`

The radius of the focal point of gradient, as a fraction of the shortest side of the paint box. 

For example, if a radial gradient is painted on a box that is `100.0` pixels wide and `200.0` pixels tall, then a radius of `1.0` will place the `1.0` stop at `100.0` pixels from the focal point.

### `radius`

The radius of the gradient.

### `rotation`

The rotation of the gradient in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

### `stops`

A list of values from `0.0` to `1.0` that denote fractions along the gradient. 

If provided, this list must have the same length as `colors`. If the first value is not `0.0`, then a stop with position `0.0` and a color equal to the first color in `colors` is implied. If the last value is not `1.0`, then a stop with position `1.0` and a color equal to the last color in `colors` is implied.

### `tile_mode`

How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is of type [`GradientTileMode`](/docs/reference/types/gradienttilemode).


More information on Radial gradient [here](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.radial.html).

## Usage example

<img src="/img/docs/controls/canvas/paint-radial-gradient.png" className="screenshot-20" />

```python
cv.Circle(
    60,
    170,
    50,
    ft.Paint(
        gradient=ft.PaintRadialGradient(
            (60, 170), 50, colors=[ft.Colors.YELLOW, ft.Colors.BLUE]
        ),
        style=ft.PaintingStyle.FILL,
    ),
)
```
