---
title: Paint
sidebar_label: Paint
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A description of the style to use when drawing a shape on the canvas.

`Paint` class has the following properties:

### `anti_alias`

Whether to apply anti-aliasing to lines and images drawn on the canvas.

Defaults to `True`.

### `blend_mode`

A blend mode to apply when a shape is drawn or a layer is composited.

Value is of type [`BlendMode`](/docs/reference/types/blendmode) and defaults to `BlendMode.SRC_OVER`.

### `blur_image`

Blur image when drawing it on a canvas.

See [`Container.blur`](/docs/controls/container#blur) for more information.

### `color`

The [color](/docs/reference/colors) to use when stroking or filling a shape. Defaults to opaque black.

### `gradient`

Configures gradient paint. Value is an instance of one of the following classes:

* [`PaintLinearGradient`](/docs/reference/types/paintlineargradient)
* [`PaintRadialGradient`](/docs/reference/types/paintradialgradient)
* [`PaintSweepGradient`](/docs/reference/types/paintsweepgradient)
