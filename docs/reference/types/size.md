---
title: Size
sidebar_label: Size
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Holds a 2D floating-point size. You can think of this as an Offset from the origin.

`Size` class has the following properties:

### `aspect_ratio`

Returns the aspect ratio of this size.

This property is read-only.

### `height`

The vertical extent of this size.

### `width`

The horizontal extent of this size.

## Methods

### `is_finite()`

Returns `True` if both the width and height are finite values and `False` otherwise.

### `is_infinite()`

Returns `True` if both the width and height are infinite values and `False` otherwise.