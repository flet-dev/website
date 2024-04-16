---
title: Paint
sidebar_label: Paint
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `Paint` properties

A description of the style to use when drawing a shape on the canvas.

### `anti_alias`

Whether to apply anti-aliasing to lines and images drawn on the canvas. Defaults to `True`.

### `blend_mode`

A blend mode to apply when a shape is drawn or a layer is composited.

Defaults to `BlendMode.SRC_OVER`.

Property value is [`BlendMode`](/docs/reference/types/blendmode).

### `blur_image`

Blur image when drawing it on a canvas.

See [`Container.blur`](/docs/controls/container#blur) for more information.

### `color`

The [color](/docs/reference/colors) to use when stroking or filling a shape. Defaults to opaque black.

### `gradient`

Configures gradient paint. The value is an instance of one of the following classes:

* `PaintLinearGradient`
* `PaintRadialGradient`
* `PaintSweepGradient`

#### `PaintLinearGradient`

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

`PaintLinearGradient` class has the following properties:

* `begin` - An instance of `Offset` class. The offset at which stop 0.0 of the gradient is placed.
* `end` - An instance of `Offset` class. The offset at which stop 1.0 of the gradient is placed.
* `colors` - The colors the gradient should obtain at each of the stops. If stops is non-null, this list must have the same length as stops. This list must have at least two colors in it (otherwise, it's not a gradient!).
* `stops` - A list of values from 0.0 to 1.0 that denote fractions along the gradient. If non-null, this list must have the same length as `colors`. If the first value is not 0.0, then a stop with position 0.0 and a color equal to the first color in `colors` is implied. If the last value is not 1.0, then a stop with position 1.0 and a color equal to the last color in `colors` is implied.
* `tile_mode` - How this gradient should tile the plane beyond in the region before `begin` and after `end`. The value is `GradientTileMode` enum with supported values: `CLAMP` (default), `DECAL`, `MIRROR`, `REPEATED`. More info [here](https://api.flutter.dev/flutter/dart-ui/TileMode.html).
* `rotation` - rotation for the gradient, in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

More information:

* [Linear gradient](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.linear.html) in Flutter documentation.
* [Radian measuring unit](https://en.wikipedia.org/wiki/Radian) on Wikipedia.

#### `PaintRadialGradient`

<img src="/img/docs/controls/canvas/paint-radial-gradient.png" className="screenshot-20" />

```python
cv.Circle(
    60,
    170,
    50,
    ft.Paint(
        gradient=ft.PaintRadialGradient(
            (60, 170), 50, colors=[ft.colors.YELLOW, ft.colors.BLUE]
        ),
        style=ft.PaintingStyle.FILL,
    ),
)
```

`PaintRadialGradient` class has the following properties:

* `center` - An instance of `Offset` class. The center of the gradient.
* `radius` - The radius of the gradient.
* `colors`, `stops`, `tile_mode`, `rotation` - see [Linear gradient](#paintlineargradient) for description of these properties.
* `focal` - The focal point of the gradient. If specified, the gradient will appear to be focused along the vector from `center` to focal.
* `focal_radius` - The radius of the focal point of gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the focal point.

More information:

* [Radial gradient](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.radial.html) in Flutter documentation.

#### `PaintSweepGradient`

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

`PaintSweepGradient` class has the following properties:

* `center` - The center of the gradient.
* `colors`, `stops`, `tile_mode`, `rotation` - see [Linear gradient](#paintlineargradient) for description of these properties.
* `start_angle` - The angle in radians at which stop 0.0 of the gradient is placed. Defaults to 0.0.
* `end_angle` - The angle in radians at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2.
* `rotation` - gradient rotation in radians.

More information:

* [Sweep gradient](https://api.flutter.dev/flutter/dart-ui/Gradient/Gradient.sweep.html) in Flutter documentation.

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

The value is an instance of `ft.StrokeJoin` enum:

* `MITER` (default) - Joins between line segments form sharp corners.
* `ROUND` - Joins between line segments are semi-circular.
* `BEVEL` - Joins between line segments connect the corners of the butt ends of the line segments to give a beveled appearance.

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