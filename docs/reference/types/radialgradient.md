---
title: RadialGradient
sidebar_label: RadialGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`RadialGradient` class has the following properties:

### `colors`

### `stops`

### `tile_mode`

How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is of type [`GradientTileMode`](/docs/reference/types/gradienttilemode).

### `rotation`

The rotation of the gradient in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

### `center` 

An instance of [`Alignment`](/docs/reference/types/alignment) class. The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the radial gradient in the center of the box.

### `radius` 

The radius of the gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the `center`.

### `focal` 

The focal point of the gradient. If specified, the gradient will appear to be focused along the vector from `center` to focal.

### `focal_radius` 

The radius of the focal point of gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the focal point.


More information on Radial gradient [here](https://api.flutter.dev/flutter/painting/RadialGradient-class.html)).

### Usage example

<img src="/img/docs/controls/container/radial-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=ft.RadialGradient(
       colors=[ft.colors.YELLOW, ft.colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```