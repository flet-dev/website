---
title: InteractiveViewerInteractionUpdateEvent
sidebar_label: InteractiveViewerInteractionUpdateEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`InteractiveViewerInteractionUpdateEvent` class has the following properties:

### `pointer_count`

The number of pointers being tracked by the gesture recognizer.
Typically this is the number of fingers being used to pan the widget using the gesture recognizer. 

Due to platform limitations, trackpad gestures count as two fingers even if more than two fingers are used.

Value is of type `int`.

### `global_focal_point`

The focal point of the interaction in global coordinates.

Value is of type [`Offset`](/docs/reference/types/offset).

### `local_focal_point`

The focal point of the interaction in local coordinates.

Value is of type [`Offset`](/docs/reference/types/offset).

### `scale`

The scale implied by the average distance between the pointers in contact with the screen.

Value is of type `float`.

### `horizontal_scale`

The scale implied by the average distance along the horizontal axis between the pointers in contact with the screen.

Value is of type `float`.

### `vertical_scale`

The scale implied by the average distance along the vertical axis between the pointers in contact with the screen.

Value is of type `float`.

### `rotation`

The angle (in radians) implied by the first two pointers to enter in contact with the screen.

Value is of type `float`.