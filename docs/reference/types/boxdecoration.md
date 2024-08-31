---
title: BoxDecoration
sidebar_label: BoxDecoration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`BoxDecoration` has the following properties:

### `bgcolor`

The [color](/docs/reference/colors) to fill in the background of the box.

### `blend_mode`

The blend mode to apply to the background `color` or `gradient`.

Value is of type [`BlendMode`](/docs/reference/types/blendmode).

### `border`

A border to draw above the background `color`, `gradient`, or `image`.

Value is of type [`Border`](/docs/reference/types/border).

### `border_radius`

The border radius of the box.

Value is of type [`BorderRadius`](/docs/reference/types/borderradius).

### `box_shadow`

A list of shadows cast by the box.

Value is of type [`List[BoxShadow]`](/docs/reference/types/boxshadow).

### `gradient`

A gradient to use when filling the box.

### `image`

An image to paint above the background `color` or `gradient`.

Value is of type [`DecorationImage`](/docs/reference/types/decorationimage).

### `shape`

The shape to fill the `bgcolor`, `gradient`, and `image` into and to cast as the `shadow`.

