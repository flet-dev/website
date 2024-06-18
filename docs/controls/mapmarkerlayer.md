---
title: MarkerLayer
sidebar_label: MarkerLayer
---

A layer to display `Marker`s.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

See [`Map`](/docs/controls/map) Control.

## `MarkerLayer` Properties

### `alignment`

Alignment of each marker relative to its normal center at `Marker.coordinates`.

Values is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `ft.alignment.center`.

### `markers`

A list of [`Marker`](#marker-properties)s to be displayed.

### `rotate`

Whether to counter rotate markers to the map's rotation, to keep a fixed orientation.

## `Marker` Properties

A container for a `content` control located at a geographic coordinate `coordinates`.

### `alignment`

Alignment of the marker relative to the normal center at `coordinates`.

Values is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `alignment.center` if also unset by the
parent `MarkerLayer`.

### `content`

The content to be displayed at `coordinates`.

### `coordinates`

The coordinates of the marker. This will be the center of the marker, if `alignment=ft.alignment.center`.

Value is of type [`MapLatitudeLongitude`](/docs/reference/types/maplatitudelongitude).

### `height`

The height of the `content` Control.

### `rotation`

Whether to counter rotate this marker to the map's rotation, to keep a fixed orientation.

When `True`, this marker will always appear upright and vertical from the user's perspective.

Defaults to `False` if also unset by the parent `MarkerLayer`.

Note: this is not used to apply a custom rotation in degrees to the marker.

### `width`

The width of the `content` Control.
