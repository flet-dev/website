---
title: Canvas
sidebar_label: Canvas
slug: canvas
---

Canvas is a control for drawing arbitrary graphics using a set of primitives or "shapes" such as line, arc, path and text.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/canvas)

### Basic usage

<img src="/img/docs/controls/canvas/canvas-face.png" className="screenshot-20"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    stroke_paint = ft.Paint(stroke_width=2, style=ft.PaintingStyle.STROKE)
    fill_paint = ft.Paint(style=ft.PaintingStyle.FILL)
    cp = cv.Canvas(
        [
            cv.Circle(100, 100, 50, stroke_paint),
            cv.Circle(80, 90, 10, stroke_paint),
            cv.Circle(84, 87, 5, fill_paint),
            cv.Circle(120, 90, 10, stroke_paint),
            cv.Circle(124, 87, 5, fill_paint),
            cv.Arc(70, 95, 60, 40, 0, math.pi, paint=stroke_paint),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### `Path` shape example

<img src="/img/docs/controls/canvas/canvas-triangles.png" className="screenshot-20"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    cp = cv.Canvas(
        [
            cv.Path(
                [
                    cv.Path.MoveTo(25, 25),
                    cv.Path.LineTo(105, 25),
                    cv.Path.LineTo(25, 105),
                ],
                paint=ft.Paint(
                    style=ft.PaintingStyle.FILL,
                ),
            ),
            cv.Path(
                [
                    cv.Path.MoveTo(125, 125),
                    cv.Path.LineTo(125, 45),
                    cv.Path.LineTo(45, 125),
                    cv.Path.Close(),
                ],
                paint=ft.Paint(
                    stroke_width=2,
                    style=ft.PaintingStyle.STROKE,
                ),
            ),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### Bezier curves

<img src="/img/docs/controls/canvas/canvas-bezier.png" className="screenshot-30"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    cp = cv.Canvas(
        [
            cv.Path(
                [
                    cv.Path.MoveTo(75, 25),
                    cv.Path.QuadraticTo(25, 25, 25, 62.5),
                    cv.Path.QuadraticTo(25, 100, 50, 100),
                    cv.Path.QuadraticTo(50, 120, 30, 125),
                    cv.Path.QuadraticTo(60, 120, 65, 100),
                    cv.Path.QuadraticTo(125, 100, 125, 62.5),
                    cv.Path.QuadraticTo(125, 25, 75, 25),
                ],
                paint=ft.Paint(
                    stroke_width=2,
                    style=ft.PaintingStyle.STROKE,
                ),
            ),
            cv.Path(
                [
                    cv.Path.SubPath(
                        [
                            cv.Path.MoveTo(75, 40),
                            cv.Path.CubicTo(75, 37, 70, 25, 50, 25),
                            cv.Path.CubicTo(20, 25, 20, 62.5, 20, 62.5),
                            cv.Path.CubicTo(20, 80, 40, 102, 75, 120),
                            cv.Path.CubicTo(110, 102, 130, 80, 130, 62.5),
                            cv.Path.CubicTo(130, 62.5, 130, 25, 100, 25),
                            cv.Path.CubicTo(85, 25, 75, 37, 75, 40),
                        ],
                        100,
                        100,
                    )
                ],
                paint=ft.Paint(
                    gradient=ft.PaintRadialGradient(
                        ft.Offset(150, 150), 50, [ft.colors.PINK_100, ft.colors.PINK]
                    ),
                    style=ft.PaintingStyle.FILL,
                ),
            ),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### Drawing text

<img src="/img/docs/controls/canvas/canvas-text.png" className="screenshot-60"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    cp = cv.Canvas(
        [
            cv.Text(0, 0, "Just a text"),
            cv.Circle(200, 100, 2, ft.Paint(color=ft.colors.RED)),
            cv.Text(
                200,
                100,
                "Rotated",
                ft.TextStyle(weight=ft.FontWeight.BOLD, size=30),
                spans=[
                    ft.TextSpan(
                        "around top_center",
                        ft.TextStyle(italic=True, color=ft.colors.GREEN, size=20),
                    )
                ],
                alignment=ft.alignment.top_center,
                rotate=math.pi * 0.15,
            ),
            cv.Circle(400, 100, 2, ft.Paint(color=ft.colors.RED)),
            cv.Text(
                400,
                100,
                "Rotated around top_left",
                ft.TextStyle(size=20),
                alignment=ft.alignment.top_left,
                rotate=math.pi * -0.15,
            ),
            cv.Circle(600, 200, 2, ft.Paint(color=ft.colors.RED)),
            cv.Text(
                600,
                200,
                "Rotated around center",
                ft.TextStyle(size=20),
                alignment=ft.alignment.center,
                rotate=math.pi / 2,
            ),
            cv.Text(
                300,
                400,
                "Limited to max_width and right-aligned.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                text_align=ft.TextAlign.RIGHT,
                max_width=400,
            ),
            cv.Text(
                200,
                200,
                "WOW!",
                ft.TextStyle(
                    weight=ft.FontWeight.BOLD,
                    size=100,
                    foreground=ft.Paint(
                        gradient=ft.PaintLinearGradient(
                            (200, 200),
                            (300, 300),
                            colors=[ft.colors.YELLOW, ft.colors.RED],
                        ),
                        stroke_join=ft.StrokeJoin.ROUND,
                        stroke_cap=ft.StrokeCap.ROUND,
                    ),
                ),
            ),
            cv.Text(
                200,
                200,
                "WOW!",
                ft.TextStyle(
                    weight=ft.FontWeight.BOLD,
                    size=100,
                    foreground=ft.Paint(
                        color=ft.colors.PINK,
                        stroke_width=6,
                        style=ft.PaintingStyle.STROKE,
                        stroke_join=ft.StrokeJoin.ROUND,
                        stroke_cap=ft.StrokeCap.ROUND,
                    ),
                ),
            ),
        ],
        width=float("inf"),
        expand=True,
    )

    page.add(cp)

ft.app(main)
```

### Free-hand drawing tool - canvas with gesture detector

<img src="/img/docs/controls/canvas/canvas-flet-brush.gif" className="screenshot-40"/>

```python
import flet as ft
import flet.canvas as cv

class State:
    x: float
    y: float

state = State()

def main(page: ft.Page):
    page.title = "Flet Brush"

    def pan_start(e: ft.DragStartEvent):
        state.x = e.local_x
        state.y = e.local_y

    def pan_update(e: ft.DragUpdateEvent):
        cp.shapes.append(
            cv.Line(
                state.x, state.y, e.local_x, e.local_y, paint=ft.Paint(stroke_width=3)
            )
        )
        cp.update()
        state.x = e.local_x
        state.y = e.local_y

    cp = cv.Canvas(
        [
            cv.Fill(
                ft.Paint(
                    gradient=ft.PaintLinearGradient(
                        (0, 0), (600, 600), colors=[ft.colors.CYAN_50, ft.colors.GREY]
                    )
                )
            ),
        ],
        content=ft.GestureDetector(
            on_pan_start=pan_start,
            on_pan_update=pan_update,
            drag_interval=10,
        ),
        expand=False,
    )

    page.add(
        ft.Container(
            cp,
            border_radius=5,
            width=float("inf"),
            expand=True,
        )
    )


ft.app(main)
```

## `Canvas` properties

### `resize_interval`

Sampling interval in milliseconds for `on_resize` event. Default is `0` - call `on_resize` on every change.

### `shapes`

The list of `Shape` objects (see below) to draw on the canvas.

## `Canvas` events

### `on_resize`

Fires when the size of canvas has changed.

Event object `e` is an instance of `CanvasResizeEvent` class with the following fields:

* `width` - a new width of the canvas.
* `height` - a new height of the canvas.

## `Arc` shape properties

Draws an arc scaled to fit inside the given rectangle.

It starts from `start_angle` radians around the oval up to `start_angle` + `sweep_angle` radians around the oval, with zero radians being the point on the right hand side of the oval that crosses the horizontal line that intersects the center of the rectangle and with positive angles going clockwise around the oval. If `use_center` is `True`, the arc is closed back to the center, forming a circle sector. Otherwise, the arc is not closed, forming a circle segment.

[PICTURE] - https://api.flutter.dev/flutter/dart-ui/Canvas/drawArc.html

### `x`

The x-axis coordinate of the arc's top left point.

### `y`

The y-axis coordinate of the arc's top left point.

### `width`

Width of the rectangle containing the arc's oval.

### `height`

Height of the rectangle containing the arc's oval.

### `start_angle`

Starting angle in radians to draw arc from.

### `sweep_angle`

The length of the arc in radians.

### `use_center`

If `use_center` is `True`, the arc is closed back to the center, forming a circle sector. Otherwise, the arc is not closed, forming a circle segment.

### `paint`

A style to draw an arc with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Circle` shape properties

Draws a circle.

### `x`

The x-axis coordinate of the circle's center point.

### `y`

The y-axis coordinate of the circle's center point.

### `radius`

Circle's radius.

### `paint`

A style to draw a circle with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Color` shape properties

Paints the given `color` onto the canvas, applying the given `blend_mode`, with the given color being the source and the background being the destination.

### `color`

[Color](/docs/guides/python/colors) to paint onto the canvas.

### `blend_mode`

Blend mode to apply.

See [`ShaderMask.blend_mode`](shadermask#blend_mode) for possible blend mode values.

## `Fill` shape properties

Fills the canvas with the given `Paint`.

To fill the canvas with a solid color and blend mode, consider `Color` shape instead.

### `paint`

A style to fill the canvas with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Line` shape properties

Draws a line between the given points using the given paint. The line is stroked, the value of the `Paint.style` is ignored.

### `x1`

The x-axis coordinate of the line's starting point.

### `y1`

The y-axis coordinate of the line's starting point.

### `x2`

The x-axis coordinate of the line's end point.

### `y2`

The y-axis coordinate of the line's end point.

### `paint`

A style to draw a line with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Oval` shape properties

Draws an axis-aligned oval that fills the given axis-aligned rectangle with the given `Paint`. Whether the oval is filled or stroked (or both) is controlled by `Paint.style`.

### `x`

The x-axis coordinate of the oval's top left point.

### `y`

The y-axis coordinate of the oval's top left point.

### `width`

Width of the rectangle containing the oval.

### `height`

Height of the rectangle containing the oval.

### `paint`

A style to draw an oval with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Path` shape properties

Draws the a path with given `elements` with the given `Paint`.

Whether this shape is filled or stroked (or both) is controlled by `Paint.style`. If the path is filled, then sub-paths within it are implicitly closed (see `Path.Close`).

### `elements`

The list of path elements:

#### `Path.MoveTo(x, y)`

Starts a new sub-path at the given point (`x`,`y`).

#### `Path.LineTo(x, y)`

Adds a straight line segment from the current point to the given point (`x`,`y`).

#### `Path.QuadraticTo(cp1x, cp2y, x, y, w)`

Adds a bezier segment that curves from the current point to the given point (`x`,`y`), using the control points (`cp1x`,`cp1y`) and the weight `w`. If the weight is greater than 1, then the curve is a hyperbola; if the weight equals 1, it's a parabola; and if it is less than 1, it is an ellipse.

#### `Path.CubicTo(cp1x, cp1y, cp2x, cp2y, x, y)`

Adds a cubic bezier segment that curves from the current point to the given point (`x`,`y`), using the control points (`cp1x`,`cp1y`) and (`cp2x`,`cp2y`).

#### `Path.SubPath(elements, x, y)`

Adds the sub-path described by `elements` to the given point (`x`,`y`).

#### `Path.Arc(x, y, width, height, start_angle, sweep_angle)`

Adds a new sub-path with one arc segment that consists of the arc that follows the edge of the oval bounded by the given rectangle with top left corner at `x` and `y` and dimensions `width` and `height`, from `start_angle` radians around the oval up to `start_angle` + `sweep_angle` radians around the oval, with zero radians being the point on the right hand side of the oval that crosses the horizontal line that intersects the center of the rectangle and with positive angles going clockwise around the oval.

#### `Path.ArcTo(x, y, radius, rotation, large_arc, clockwise)`

Appends up to four conic curves weighted to describe an oval of `radius` and rotated by `rotation` (measured in degrees and clockwise).

The first curve begins from the last point in the path and the last ends at `x` and `y`. The curves follow a path in a direction determined by `clockwise` (bool) and `large_arc` (bool) in such a way that the sweep angle is always less than 360 degrees.

A simple line is appended if either either radii are zero or the last point in the path (`x`,`y`). The radii are scaled to fit the last path point if both are greater than zero but too small to describe an arc.

#### `Path.Oval(x, y, width, height)`

Adds a new sub-path that consists of a curve that forms the ellipse that fills the given rectangle.

#### `Path.Rect(x, y, width, height, border_radius)`

Adds a rectangle as a new sub-path.

#### `Path.Close`

Closes the last sub-path, as if a straight line had been drawn from the current point to the first point of the sub-path.

### `paint`

A style to draw a path with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Points` shape properties

Draws a sequence of points according to the given `point_mode`.

### `points`

The list of `ft.Offset` describing points.

### `point_mode`

Defines how a list of points is interpreted when drawing a set of points. The value is of type `ft.PointMode`:

* `POINTS` - Draw each point separately. If the `Paint.stroke_cap` is `StrokeCap.ROUND`, then each point is drawn as a circle with the diameter of the `Paint.stroke_width`, filled as described by the `Paint` (ignoring `Paint.style`). Otherwise, each point is drawn as an axis-aligned square with sides of length `Paint.stroke_width`, filled as described by the `Paint` (ignoring `Paint.style`).`
* `LINES` - Draw each sequence of two points as a line segment. If the number of points is odd, then the last point is ignored. The lines are stroked as described by the `Paint` (ignoring `Paint.style`).
* `POLYGON` - Draw the entire sequence of point as one line. The lines are stroked as described by the `Paint` (ignoring `Paint.style`).

### `paint`

A style to draw points with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Rect` shape properties

Draws a rectangle.

### `x`

The x-axis coordinate of the rectangle's top left point.

### `y`

The y-axis coordinate of the rectangle's top left point.

### `width`

Width of the rectangle.

### `height`

Height of the rectangle.

### `border_radius`

Border radius of the rectangle, value of type `ft.BorderRadius`.

### `paint`

A style to draw a rectangle with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Shadow` shape properties

Draws a shadow for a `path` representing the given material `elevation`.

The `transparent_occluder` argument should be `True` if the occluding object is not opaque.

### `path`

The list of `Path.PathElement` objects describing the path.

### `color`

Shadow [color](/docs/guides/python/colors).

### `elevation`

Shadow elevation.

### `transparent_occluder`

`True` if the occluding object is not opaque. Default is `False`.

## `Text` shape properties

Draws `text` with `style` in the given point (`x`, `y`).

### `x`

The x-axis coordinate of the text's `alignment` point.

### `y`

The y-axis coordinate of the text's `alignment` point.

### `text`

The text to draw.

### `style`

A text style to draw `text` and `spans` with. The value is the instance of [`ft.TextStyle`](text#textstyle-properties) class.

### `spans`

The list of [`ft.TextSpan`](text#textspan-properties) objects to build a rich text paragraph.

### `alignment`

A point within a text rectangle to determine its position and rotation center.

The value is of type `ft.Alignment`. Default value is `ft.alignment.top_left`.

### `text_align`

Text horizontal align. See [`Text.text_align`](text#text_align) property for supported values.

### `max_lines`

The maximum number of lines painted. Lines beyond this number are silently dropped. For example, if maxLines is 1, then only one line is rendered. If `max_lines` is `None`, but ellipsis is not `None`, then lines after the first one that overflows the width constraints are dropped.

### `max_width`

The maximum width of the painted text. Default is `None` - infinity.

### `ellipsis`

String used to ellipsize overflowing text.

### `rotate`

Text rotation in radians. Text is rotated around the point determined by `alignment`. See code examples above.

## `Paint` properties

A description of the style to use when drawing a shape on the canvas.

### `anti_alias`

Whether to apply anti-aliasing to lines and images drawn on the canvas. Defaults to `True`.

### `blend_mode`

:::note
The property is not yet implemented and reserved for future use.
:::

A blend mode to apply when a shape is drawn or a layer is composited.

Defaults to `BlendMode.SRC_OVER`.

See [`ShaderMask.blend_mode`](shadermask#blend_mode) for possible blend mode values.

### `blur_image`

:::note
The property is not yet implemented and reserved for future use.
:::

Blur image when drawing it on a canvas.

See [`Container.blur`](container#blur) for more information.

### `color`

The [color](/docs/guides/python/colors) to use when stroking or filling a shape. Defaults to opaque black.

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