---
title: DecorationImage
sidebar_label: DecorationImage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`DecorationImage` has the following properties:

### `alignment`

The alignment of the image within its bounds.

Value is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `Alignment(0.0, 0.0)`.

### `anti_alias`

Whether to paint the image in anti-aliased quality.

Value is of type `bool` and defaults to `False`.

### `color_filter`

A color filter to apply to the image before painting it.

Value is of type [`ColorFilter`](/docs/reference/types/colorfilter).

### `filter_quality`

The quality of the image filter.

Value is of type [`FilterQuality`](/docs/reference/types/filterquality) and defaults to `FilterQuality.MEDIUM`.

### `fit`

How the image should be inscribed into the box.

Value is of type [`ImageFit`](/docs/reference/types/imagefit).

### `invert_colors`

Whether to invert the colors of the image while drawing.

Value is of type `bool` and defaults to `False`.

### `match_text_direction`

Whether to paint the image in the direction of the TextDirection.

Value is of type `bool` and defaults to `False`.

### `opacity`

The opacity of the image.

Value is of type `float` and defaults to `1.0`.

### `repeat`

How the image should be repeated to fill the box.

Value is of type [`ImageRepeat`](/docs/reference/types/imagerepeat) and defaults to `ImageRepeat.NO_REPEAT`.

### `src`

The image to paint.

### `src_base64`

The base64-encoded image to paint.

### `scale`

The scale(image pixels to be shown per logical pixels) to apply to the image.

Value is of type `float` and defaults to `1.0`.



