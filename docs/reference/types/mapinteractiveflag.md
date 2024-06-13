---
title: MapInteractiveFlag
sidebar_label: MapInteractiveFlag
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MapInteractiveFlag` enum has the following values:

### `ALL`

Flag for all interactions.

### `DOUBLE_TAP_ZOOM`

Flag for double tap zoom.

### `DOUBLE_TAP_DRAG_ZOOM`

Flag for double tap drag zoom.

### `DRAG`

Flag for dragging.

### `FLING_ANIMATION`

Flag for fling animation.

### `NONE`

No interactive flags.

### `PINCH_MOVE`

Flag for pinch move.

### `PINCH_ZOOM`

Flag for pinch zoom.

### `ROTATE`

Flag for rotation.

### `SCROLL_WHEEL_ZOOM`

Flag for scroll wheel zoom.

## Usage Example

The enum is a flag, so multiple interactions can be combined together.

* Add flags, with the bitwise 'OR' (|) operator in-between:

```python
map.MapConfiguration(
    interaction_configuration=map.MapInteractionConfiguration(
        flags=map.MapInteractiveFlag.PINCH_ZOOM | map.MapInteractiveFlag.ROTATE
    )
)
```

* Remove flags from `ALL`, using the `&` and `~` operators in-between:

```python
map.MapConfiguration(
    interaction_configuration=map.MapInteractionConfiguration(
        flags=map.MapInteractiveFlag.ALL & ~map.MapInteractiveFlag.ROTATE
    )
)
```