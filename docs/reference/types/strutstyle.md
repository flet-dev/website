---
title: StrutStyle
sidebar_label: StrutStyle
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`StrutStyle` class has the following properties: 

### `font_family`

See [`Text.font_family`](/docs/controls/text#font_family).

### `force_strut_height`

Whether the strut height should be forced.

Defaults to `False`.

### `height`

The minimum height of the strut, as a multiple of `size`.

See detailed explanation [here](https://api.flutter.dev/flutter/painting/StrutStyle/height.html).

### `italic`

`True` to use italic typeface.

Defaults to `False`.

### `leading`

The amount of additional space to place between lines when rendering text.

Defaults to using the font-specified leading value.

### `size`

The size of text (in logical pixels) to use when getting metrics from the font.

Defaults to `14`.

### `weight`

The typeface thickness to use when calculating the strut.

Value is of type [`FontWeight`](/docs/reference/types/fontweight) and defaults to `FontWeight.W_400`.