---
title: CupertinoPicker
sidebar_label: CupertinoPicker
---

An iOS-styled picker.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/cupertinotimerpicker)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/cupertino/cupertino-dialogs-alerts-panels/cupertino-picker-example.py
```



<img src="/img/docs/controls/cupertino-picker/cupertino-picker-example.gif" className="screenshot-40" />

## Properties

### `bgcolor`

The background [color](/docs/reference/colors) of the timer picker.

### `controls`

A list of controls representing items in this picker.

### `default_selection_overlay_bgcolor`

The default background [color](/docs/reference/colors) of the `selection_overlay`.

Defaults to `CupertinoColors.TERTIARY_SYSTEM_FILL`.

### `diameter_ratio`

Relative ratio between this picker's height and the simulated cylinder's diameter.

Smaller values creates more pronounced curvatures in the scrollable wheel.

### `item_extent`

The uniform height of all children. Defaults to `32`.

### `looping`

If `True`, children on a wheel can be scrolled in a loop.

Defaults to `False`.

### `magnification`

The zoomed-in rate of the magnifier, if it is used.

If the value is greater than `1.0`, the item in the center will be zoomed in by that rate, and it will also be rendered
as flat, not cylindrical like the rest of the list.
The item will be zoomed-out if magnification less than `1.0`.

Defaults to `1.0` - normal.

### `off_axis_fraction`

How much the wheel is horizontally off-center, as a fraction of its width.

### `selected_index`

The index (starting from 0) of the selected item in the `controls` list.

### `selection_overlay`

A control overlaid on the picker to highlight the selected entry, centered and matching the height of the center row. 

Defaults to a rounded rectangle in iOS 14 style with `default_selection_overlay_bgcolor` as background color.

### `squeeze`

The angular compactness of the children on the wheel.

### `use_magnifier`

Whether to use the magnifier for the center item of the wheel.

## Events

### `on_change`

Fires when the selection changes.