---
title: Rive
sidebar_label: Rive
---

Displays an animation from a [Rive](https://rive.app/) file (URL or local file).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/rive)

### Basic Example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/animations/rive/rive-basic.py
```


<img src="/img/docs/controls/rive/basic-rive.gif" className="screenshot-40"/>

## Properties

### `alignment`

The alignment for the animation.

### `artboard`

The name of the artboard to use. If not specified, the default artboard of the provided `src` is used.

### `enable_antialiasing`

Whether to enable antialiasing when rendering.

Defaults to `True`.

### `fit`

The animation's fit.

### `placeholder_content`

The control to be displayed while the rive is loading.

### `src`

The source of your rive animation. Can either be a URL or a local asset file.

### `use_artboard_size`

Whether to use the inherent size of the artboard, i.e. the absolute size defined by the artboard, or size the widget based on the available constraints only (sized by parent). Defaults to `False`.
