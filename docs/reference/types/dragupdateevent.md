---
title: DragUpdateEvent
sidebar_label: DragUpdateEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`DragUpdateEvent` class has the following properties:

### `delta_x`

The x component of the amount the pointer has moved in the coordinate space of the event receiver since the previous update.

### `delta_y`

The y component of the amount the pointer has moved in the coordinate space of the event receiver since the previous update.

### `local_x`

The x component of the local position in the coordinate system of the event receiver at which the pointer contacted the screen.

### `local_y`

The y component of the local position in the coordinate system of the event receiver at which the pointer contacted the screen.

### `global_x`

The x component of the pointer's global position when it triggered this update.

### `global_y`

The y component of the pointer's global position when it triggered this update.

### `primary_delta`

The amount the pointer has moved along the primary axis in the coordinate space of the event receiver since the previous update.

### `timestamp`

Recorded timestamp of the source pointer event that triggered the drag event.
