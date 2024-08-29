---
title: InteractiveViewerInteractionStartEvent
sidebar_label: InteractiveViewerInteractionStartEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`InteractiveViewerInteractionStartEvent` class has the following properties:

### `pointer_count`

The number of pointers being tracked by the gesture recognizer.
Typically this is the number of fingers being used to pan the widget using the gesture recognizer. 

Value is of type `int`.

### `global_focal_point`

The initial focal point of the pointers in contact with the screen reported in global coordinates.

Value is of type [`Offset`](/docs/reference/types/offset).

### `local_focal_point`

The initial focal point of the pointers in contact with the screen reported in local coordinates.

Value is of type [`Offset`](/docs/reference/types/offset).

