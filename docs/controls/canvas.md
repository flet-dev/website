---
title: Canvas
sidebar_label: Canvas
slug: canvas
---

Canvas is control for drawing arbitrary graphics using a set of primitives or "shapes" such as line, arc, path and text.

## Examples

### Basic usage

<img src="/img/docs/controls/canvas/canvas-face.png" className="screenshot-20"/>

```python
import math

import flet as ft
import flet.canvas as cv

def main(page: ft.Page):
    stroke_paint = paint = ft.Paint(stroke_width=2, style=ft.PaintingStyle.STROKE)
    fill_paint = paint = ft.Paint(style=ft.PaintingStyle.FILL)
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

### `shapes`

The list of `Shape` objects (see below) to draw on the canvas.

### `resize_interval`

Sampling interval in milliseconds for `on_resize` event. Default is `0` - call `on_resize` on every change.

## `Canvas` events

### `on_resize`

Fires when the size of canvas has changed.

Event object `e` is an instance of `CanvasResizeEvent` class with the following fields:

* `width` - a new width of the canvas.
* `height` - a new height of the canvas.

## `Arc` shape properties

Draw an arc scaled to fit inside the given rectangle.

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

### `start_agnle`

Starting angle in radians to draw arc from.

### `sweep_angle`

The length of the arc in radians.

### `use_center`

If `use_center` is `True`, the arc is closed back to the center, forming a circle sector. Otherwise, the arc is not closed, forming a circle segment.

### `paint`

A style to draw an arc with. The value of this property is the instance of [`ft.Paint`](#paint-properties).

## `Circle` shape properties

### `x`

### `y`

### `radius`

### `paint`

## `Color` shape properties

### `color`

### `blend_mode`

## `Fill` shape properties

### `paint`

## `Line` shape properties

### `x1`

### `y1`

### `x2`

### `y2`

### `paint`

## `Oval` shape properties

### `x`

### `y`

### `width`

### `height`

### `paint`

## `Path` shape properties

### `elements`

#### `Path.MoveTo`

* `x`
* `y`

#### `Path.LineTo`

* `x`
* `y`

#### `Path.QuadraticTo`

* `cp1x`
* `cp1y`
* `x`
* `y`
* `w`

#### `Path.CubicTo`

* `cp1x`
* `cp1y`
* `cp2x`
* `cp2y`
* `x`
* `y`

#### `Path.SubPath`

* `elements`
* `x`
* `y`

#### `Path.Arc`

* `x:`
* `y`
* `width`
* `height`
* `start_angle`
* `sweep_angle`

#### `Path.ArcTo`

* `x`
* `y`
* `radius`
* `rotation`
* `large_arc`
* `clockwise`

#### `Path.Oval`

* `x`
* `y`
* `width`
* `height`

#### `Path.Rect`

* `x`
* `y`
* `width`
* `height`
* `border_radius`

#### `Path.Close`

### `paint`

## `Points` shape properties

### `points`

### `point_mode`

### `paint`

## `Rect` shape properties

### `x`

### `y`

### `width`

### `height`

### `border_radius`

### `paint`

## `Shadow` shape properties

### `path`

### `color`

### `elevation`

### `transparent_occluder`

## `Text` shape properties

### `x`

### `y`

### `text`

### `style`

### `spans`

### `alignment`

### `text_align`

### `max_lines`

### `max_width`

### `ellipsis`

### `rotate`

## `Paint` properties

A description of the style to use when drawing a shape on the canvas.

### `color`

The color to use when stroking or filling a shape. Defaults to opaque black.

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

### `anti_alias`

### `gradient`

### `stroke_cap`

### `stroke_join`

### `stroke_miter_limit`

### `stroke_width`

### `stroke_dash_pattern`

### `style`