---
title: Canvas
sidebar_label: Canvas
slug: canvas
---

Canvas is control for drawing arbitrary graphics using a set of primitives or "shapes" such as line, arc, path and text.

## Examples

### Banner with leading icon and actions

```python
import flet as ft



ft.app(target=main)
```

<img src="/img/docs/controls/banner/banner-with-custom-content.gif" className="screenshot-40"/>

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