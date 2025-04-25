---
title: SegmentedButton
sidebar_label: SegmentedButton
---

A Material button that allows the user to select from limited set of options and are typically used in cases where there are only 2-5 options.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/segmentedbutton)



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/segmented-button/segmented-button-example.py
```

<img src="/img/docs/controls/segmented-button/segmented-button-example.gif" className="screenshot-40" />

## `SegmentedButton` Properties

### `allow_empty_selection`

A boolean value that indicates if having no selected segments is allowed. 

If `True`, then it is acceptable for none of the segments to be selected and also that `selected` can be empty.

If `False` (the default), there must be at least one segment selected. If the user taps on the only selected segment it will not be deselected, and `on_change` will not be called.

### `allow_multiple_selection`

A boolean value that indicates if multiple segments can be selected at one time.

If `True`, more than one segment can be selected. When selecting a segment, the other `selected` segments will stay selected. Selecting an already selected segment will unselect it.

If `False`(the default), only one segment may be selected at a time. When a segment is selected, any previously selected segment will be unselected.

### `direction`

The orientation of the button's `segments`. 

Value is of type [`Axis`](/docs/reference/types/axis) and defaults to `Axis.HORIZONTAL`.

### `padding`

Defines the button's size and padding. If specified, the button expands to fill its parent's space with this padding.

When `None`, the button adopts its intrinsic content size.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue).

### `segments`

A required parameter that describes the segments in the button. It's a list of `Segment` objects.

### `selected`

A set of `Segment.value`s that indicate which segments are selected. It is updated when the user (un)selects a segment.

### `selected_icon`

An `Icon` control that is used to indicate a segment is selected.

If `show_selected_icon` is `True` then for `selected` segments this icon will be shown before the `Segment.label`, replacing the `Segment.icon` if it is specified.

Defaults to an `Icon` with the `CHECK` icon.

### `show_selected_icon`

A boolean value that indicates if the `selected_icon` is displayed on the `selected` segments.

If `True`, the `selected_icon` will be displayed at the start of the `selected` segments.

If `False`, then the `selected_icon` is not used and will not be displayed on `selected` segments.

### `style`

Customizes this button's appearance.

Value is of type [`ButtonStyle`](/docs/reference/types/buttonstyle).

## Events

### `on_change`

Fires when the selection changes.

## `Segment` Properties

### `disabled`

Determines if the segment is available for selection.

### `icon`

The icon (typically an [`Icon`](/docs/controls/icon)) to be displayed in the segment.

### `label`

The label (usually a [`Text`](/docs/controls/text)) to be displayed in the segment.

### `tooltip`

The tooltip for the segment.

### `value`

Used to identify the `Segment`.





