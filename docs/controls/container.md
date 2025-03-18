---
title: Container
sidebar_label: Container
---

Container allows to decorate a control with background color and border and position it with padding, margin and alignment. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/container)

### Clickable container

<img src="/img/docs/controls/container/clickable-container.gif" className="screenshot-50" />


```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/layout/container/clickable-container.py
```


## Properties

<img src="/img/docs/controls/container/container-diagram.png" className="screenshot-50" />

### `alignment`

Align the child control within the container.

Value is of type [`Alignment`](/docs/reference/types/alignment).

### `animate`

Enables container "implicit" animation that gradually changes its values over a period of time.

Value is of type [`AnimationValue`](/docs/reference/types/animationvalue).

### `bgcolor`

Defines the background [color](/docs/reference/colors) of the container.

### `blend_mode`

The blend mode applied to the `color` or `gradient` background of the container. 

Value is of type [`BlendMode`](/docs/reference/types/blendmode) and defaults to `BlendMode.MODULATE`.

### `blur`

Applies Gaussian blur effect under the container.

The value of this property could be one of the following:

* **a number** - specifies the same value for horizontal and vertical sigmas, e.g. `10`.
* **a tuple** - specifies separate values for horizontal and vertical sigmas, e.g. `(10, 1)`.
* **an instance of [`Blur`](/docs/reference/types/blur)**

For example:

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/layout/container/container-blur.py
```
<img src="/img/docs/controls/container/container-blur.gif" className="screenshot-40" />

### `border`

A border to draw above the background color.

Value is of type [`Border`](/docs/reference/types/border).

### `border_radius`

If specified, the corners of the container are rounded by this radius.

Value is of type [`BorderRadius`](/docs/reference/types/borderradius).

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.ANTI_ALIAS`
if `border_radius` is not `None`; otherwise `ClipBehavior.NONE`.

### `color_filter`

Applies a color filter to the container.

Value is of type [`ColorFilter`](/docs/reference/types/colorfilter).

### `content`

A child Control contained by the container.

### `dark_theme`

Allows setting a nested `theme` to be used when in dark theme mode for all controls inside the container and down the tree.

Value is of type [`Theme`](/docs/cookbook/theming).

### `foreground_decoration`

The foreground decoration.

Value is of type [`BoxDecoration`](/docs/reference/types/boxdecoration).

### `gradient`

Defines the gradient background of the container.

Value is of type [`Gradient`](/docs/reference/types/gradient).

### `ignore_interactions`

Whether to ignore all interactions with this container and its descendants.

Defaults to `False`.

### `image`

An image to paint above the `bgcolor` or `gradient`. If `shape=BoxShape.CIRCLE` then this image is clipped to the circle's boundary; if `border_radius` is not `None`then the image is clipped to the given radii.

Value is of type [`DecorationImage`](/docs/reference/types/decorationimage).

### `ink`

`True` to produce ink ripples effect when user clicks the container.

Defaults to `False`.

### `ink_color`

The splash [color](/docs/reference/colors) of the ink response.

### `margin`

Empty space to surround the decoration and child control.

Value is of type [`Margin`](/docs/reference/types/margin) class or a number.

### `padding`

Empty space to inscribe inside a container decoration (background, border). The child control is placed inside this padding.

Value is of type [`Padding`](/docs/reference/types/padding) or a number.

### `rtl`

`True` to set text direction to right-to-left.

Defaults to `False`.

### `shadow`

Shadows cast by the container.

Value is of type [`BoxShadow`](/docs/reference/types/boxshadow) or a `List[BoxShadow]`.

### `shape`

Sets the shape of the container.

Value is of type [`BoxShape`](/docs/reference/types/boxshape) and defaults to `BoxShape.RECTANGLE`.

### `theme_mode`

Setting `theme_mode` "resets" parent theme and creates a new, unique scheme for all controls inside the container. Otherwise the styles defined in container's `theme` property override corresponding styles from the parent, inherited theme.

Value is of type [`ThemeMode`](/docs/reference/types/thememode) and defaults to `ThemeMode.SYSTEM`.

### `theme`

Allows setting a nested `theme` for all controls inside the container and down the tree.

Value is of type [`Theme`](/docs/cookbook/theming).

**Usage example**

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/layout/container/nested-themes-switch.py
```

<img src="/img/docs/controls/container/container-theme.gif"  className="screenshot-60" />

### `url`

The URL to open when the container is clicked. If provided, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode.

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.BLANK`.

## Events

### `on_click`

Fires when a user clicks the container. Will not be fired on long press.

### `on_hover`

Fires when a mouse pointer enters or exists the container area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.

A simple example of a container changing its background color on mouse hover:

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/layout/container/simple-hover.py
```

<img src="/img/docs/controls/container/hover-container.gif" className="screenshot-20" />

### `on_long_press`

Fires when the container is long-pressed.

### `on_tap_down`

Fires when a user clicks the container with or without a long press.

Event handler argument is of type [`ContainerTapEvent`](/docs/reference/types/containertapevent).

:::info
If `ink` is `True`, `e` will be plain `ControlEvent` with empty `data` instead of `ContainerTapEvent`.
:::

A simple usage example:

```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/layout/container/container-click-events.py
```
<img src="/img/docs/controls/container/container-click-events.gif"  className="screenshot-60" />