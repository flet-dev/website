---
title: PolylineLayer
sidebar_label: PolylineLayer
---

A layer to display [`PolylineMarker`](#polylinemarker-properties)s.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

See [`Map`](/docs/controls/map) Control.

## `PolylineLayer` Properties

### `polylines`

A list of [`PolylineMarker`](#polylinemarker-properties)s to be displayed.

## `PolylineMarker` Properties

A marker for the [`PolylineLayer`](#polylinelayer-properties).

### `border_color`

The border color of this polyline.

### `border_stroke_width`

The border stroke width of this polyline.

Defaults to `0.0` - disabled.

### `color`

The color of this polyline marker.

### `colors_stop`

A list of stops for gradient colors along the polyline.

### `coordinates`

The coordinates (latitude and longitude) defining the polyline.

Value is a list with items of type [`MapLatitudeLongitude`](/docs/reference/types/maplatitudelongitude).

### `gradient_colors`

A list of colors in case a gradient should get used.

### `stroke_cap`

The stroke cap style of the polyline.

Value is of type [`StrokeCap`](/docs/reference/types/strokecap) and defaults to `StrokeCap.ROUND`.

### `stroke_join`

The stroke join style of the polyline.

Value is of type [`StrokeJoin`](/docs/reference/types/strokejoin) and defaults to `StrokeJoin.ROUND`.

### `stroke_width`

The stroke width of this polyline.

### `stroke_pattern`

The stroke pattern of this polyline.

Value is of type [`StrokePattern`](/docs/reference/types/mapstrokepattern) and defaults to `SolidStrokePattern()`.

### `use_stroke_width_in_meter`

A boolean value to indicate if the stroke width is in meters or pixels.

Defaults to `False` - pixels.
