---
title: CircleLayer
sidebar_label: CircleLayer
---

A layer to display [`CircleMarker`](#circlemarker-properties)s.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

See [`Map`](/docs/controls/map) Control.

## `CircleLayer` Properties

### `circles`

A list of [`CircleMarker`](#circlemarker-properties)s to be displayed.

## `CircleMarker` Properties

A circular marker displayed on the [`Map`](/docs/controls/map) through the [`CircleLayer`](/docs/controls/mapcirclelayer) at `coordinates`.

### `border_color`

The border color of the circle border line. Requires `border_stroke_width > 0` inorder to be visible.

### `border_stroke_width`

The border stroke width of the circle border.

Defaults to `0` - no border.

### `color`

The [color](/docs/reference/colors) of the circle area.

### `coordinates`

The center coordinates of the marker.

Value is of type [`MapLatitudeLongitude`](/docs/reference/types/maplatitudelongitude).

### `radius`

The radius of the circle.

### `use_radius_in_meter`

A boolean value to indicate if the radius is in meters or pixels.

Defaults to `False` - pixels.

