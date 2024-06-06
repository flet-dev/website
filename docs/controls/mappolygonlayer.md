---
title: PolygonLayer
sidebar_label: PolygonLayer
---

A layer to display `PolygonMarker`s.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

See [`Map`](/docs/controls/map) Control.

## `PolygonLayer` Properties

### `draw_labels_last`

A boolean value indicating whether to draw labels last.

Defaults to `False`.

### `polygon_culling`

A boolean value indicating whether to use polygon culling.

Defaults to `False`.

### `polygon_labels`

A boolean value indicating whether to display polygon labels.

Defaults to `True`.

### `polygons`

A list of [`PolygonMarker`](#polygonmarker-properties)s to be displayed.

### `simplification_tolerance`

The distance between two neighboring polygon points, in logical pixels scaled to floored zoom.

Defaults to `0.5`.

### `use_alternative_rendering`

Whether to use an alternative rendering pathway to draw polygons onto the underlying Canvas, which can be more
performant in some circumstances.

Defaults to `False`.

## `PolygonMarker` Properties

A marker for the `PolygonLayer`.

### `border_color`

The border color of the polygon outline.

### `border_stroke_width`

The border stroke width of the polygon outline.

### `color`

The fill color of the polygon.

### `coordinates`

The list of coordinates (latitude and longitude) defining the polygon marker.

Value is of type [`MapLatitudeLongitude`](/docs/reference/types/maplatitudelongitude).

### `disable_holes_border`

Whether to holes should have borders.

Defaults to `False`.

### `label`

The label of the polygon.

### `label_text_style`

The style of the `label`.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

### `rotate_label`

Whether to rotate the label counter to the camera's rotation, to ensure it remains upright.

Defaults to `False`.

### `stroke_cap`

The stroke cap style of the polygon.

Value is of type [`StrokeCap`](/docs/reference/types/strokecap).

### `stroke_join`

The stroke join style of the polygon.

Value is of type [`StrokeJoin`](/docs/reference/types/strokejoin).
