---
title: PaintSweepGradient
sidebar_label: PaintSweepGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PaintSweepGradient` class has the following properties:

### `center`

An instance of [`Offset`](/docs/reference/types/offset) class. The center of the gradient.

### `colors`

The [`colors`](/docs/reference/colors) the gradient should obtain at each of the stops. This list must contain at least two colors.

If `stops` is provided, this list must have the same length as `stops`.

### `end_angle`

The angle in radians at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2.

### `rotation`

The rotation of the gradient in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

### `start_angle`

The angle in [radians](https://en.wikipedia.org/wiki/Radian) at which stop 0.0 of the gradient is placed. Defaults to 0.0.

### `stops`

A list of values from `0.0` to `1.0` that denote fractions along the gradient. 

If provided, this list must have the same length as `colors`. If the first value is not `0.0`, then a stop with position `0.0` and a color equal to the first color in `colors` is implied. If the last value is not `1.0`, then a stop with position `1.0` and a color equal to the last color in `colors` is implied.

### `tile_mode`

How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is of type [`GradientTileMode`](/docs/reference/types/gradienttilemode).


More information on Sweep gradient [here](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.sweep.html).

#### Usage example

<img src="/img/docs/controls/canvas/paint-sweep-gradient.png" className="screenshot-20" />

```python
cv.Path(
    [
        cv.Path.MoveTo(60, 230),
        cv.Path.LineTo(110, 330),
        cv.Path.LineTo(10, 330),
        cv.Path.Close(),
    ],
    ft.Paint(
        gradient=ft.PaintSweepGradient(
            (60, 280),
            colors=[ft.colors.YELLOW, ft.colors.BLUE],
            start_angle=0,
            end_angle=math.pi * 2,
        ),
        stroke_width=5,
        stroke_join=ft.StrokeJoin.ROUND,
        style=ft.PaintingStyle.STROKE,
    ),
)
```

### `stroke_cap`

The kind of finish to place on the end of lines drawn when `style` is set to `PaintingStyle.STROKE`.

The value is an instance of `ft.StrokeCap` enum:

* `BUTT` (default) - Begin and end contours with a flat edge and no extension.
* `ROUND` - Begin and end contours with a semi-circle extension.
* `SQUARE` - Begin and end contours with a half square extension. This is similar to extending each contour by half the stroke width (as given by `Paint.stroke_width`).

### `stroke_join`

The kind of finish to place on the joins between segments.

This applies to paths drawn when style is set to `PaintingStyle.STROKE`, It does not apply to points drawn as lines with `canvas.Points`.

Defaults to `StrokeJoin.MITER`, i.e. sharp corners.

Value is of type [`StrokeJoin`](/docs/reference/types/strokejoin).

See [StrokeJoin enum](https://api.flutter.dev/flutter/dart-ui/StrokeJoin.html) in Flutter documentation for more details.

### `stroke_miter_limit`

The limit for miters to be drawn on segments when the join is set to `StrokeJoin.MITER` and the style is set to `PaintingStyle.STROKE`. If this limit is exceeded, then a `StrokeJoin.BEVEL` join will be drawn instead. This may cause some 'popping' of the corners of a path if the angle between line segments is animated, as seen in the diagrams below.

This limit is expressed as a limit on the length of the miter.

Defaults to 4.0. Using zero as a limit will cause a `StrokeJoin.BEVEL` join to be used all the time.

### `stroke_width`

How wide to make edges drawn when style is set to `PaintingStyle.STROKE`. The width is given in logical pixels measured in the direction orthogonal to the direction of the path.

Defaults to 0.0, which correspond to a hairline width.

### `stroke_dash_pattern`

A circular array of dash offsets and lengths.

For example, the array `[5, 10]` would result in dashes 5 pixels long
followed by blank spaces 10 pixels long.  The array `[5, 10, 5]` would
result in a 5 pixel dash, a 10 pixel gap, a 5 pixel dash, a 5 pixel gap,
a 10 pixel dash, etc.

### `style`

Whether to paint inside shapes, the edges of shapes, or both.

The value is an instance of `ft.PaintingStyle` enum:

* `FILL` (default) - Apply the `Paint` to the inside of the shape. For example, when applied to the `canvas.Circle` shape, this results in a disc of the given size being painted.
* `STROKE` - Apply the `Paint` to the edge of the shape. For example, when applied to the `canvas.Circle` shape, this results is a hoop of the given size being painted. The line drawn on the edge will be the width given by the `Paint.stroke_width` property.