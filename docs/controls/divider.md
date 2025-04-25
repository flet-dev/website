---
title: Divider
sidebar_label: Divider
---

A thin horizontal line, with padding on either side.

In the material design language, this represents a divider.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/divider)


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/divider/divider-horiz.py
```


<img src="/img/docs/controls/divider/divider.png" className="screenshot-40" />

## Properties

### `color`

The [color](/docs/reference/colors) to use when painting the line.

### `height`

The divider's height extent. The divider itself is always drawn as a horizontal line that is centered within the height
specified by this value.

Defaults to `16.0`.

### `leading_indent`

The amount of empty space to the leading edge of the divider.

Defaults to `0.0`.

### `thickness`

The thickness of the line drawn within the divider. A divider with a thickness of `0.0` is always drawn as a line with a
height of exactly one device pixel.

Defaults to `0.0`.

### `trailing_indent`

The amount of empty space to the trailing edge of the divider.

Defaults to `0.0`.
