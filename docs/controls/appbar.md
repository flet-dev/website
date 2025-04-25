---
title: AppBar
sidebar_label: AppBar
---

A material design app bar.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/appbar)

### AppBar


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/navigation/app-bar/appbar-simple.py
```


<img src="/img/docs/controls/app-bar/app-bar.gif" className="screenshot-40"/>

## Properties

### `actions`

A list of `Control`s to display in a row after the title control.

Typically these controls are [`IconButtons`](/docs/controls/iconbutton) representing common operations. For less common operations, consider using a [`PopupMenuButton`](/docs/controls/popupmenubutton) as the last action.

**Note** that, if `AppBar.adaptive=True` and the app is opened on an iOS or macOS device, only the first element of this list will be used. This is because the `CupertinoAppBar`(which will be used on those two platforms) only accepts one - trailing - action control.

### `adaptive`

If the value is `True`, an adaptive AppBar is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoAppBar`](/docs/controls/cupertinoappbar) is created, which has matching functionality and presentation as `AppBar`, and the graphics as expected on iOS. On other platforms, a Material AppBar is created.

Value is of type `bool` and defaults to `False`.

### `automatically_imply_leading`

Controls whether we should try to imply the leading widget if null.

If `True` and `leading` is null, automatically try to deduce what the leading widget should be. If `False` and `leading` is null, leading space is given to title. If leading widget is not null, this parameter has no effect.

Value is of type `bool`.

### `bgcolor`

The fill [color](/docs/reference/colors) to use for an AppBar. Default color is defined by current theme.

### `center_title`

Whether the title should be centered.

Value is of type `bool` and defaults to `False`.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior).

### `color`

The default [color](/docs/reference/colors) for `Text` and `Icon` controls within the app bar. Default color is defined by current theme.

### `elevation`

The app bar's elevation.

Note: This effect is only visible when using the Material 2 design (`Theme.use_material3=False`).

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `4`.

### `elevation_on_scroll`

The elevation to be used if this app bar has something scrolled underneath it.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

### `exclude_header_semantics`

Whether the `title` should be wrapped with header [`Semantics`](/docs/controls/semantics).

Value is of type `bool` and defaults to `False`.

### `force_material_transparency`

Forces the app bar to be transparent (instead of Material's default type).

This will also remove the visual display of `bgcolor` and `elevation`, and affect other characteristics of this app bar.

Value is of type `bool`.

### `is_secondary`

Whether this app bar is not being displayed at the top of the screen.

Value is of type `bool` and defaults to `False`.

### `leading`

A `Control` to display before the toolbar's title.

Typically the leading control is an [`Icon`](/docs/controls/icon) or an [`IconButton`](/docs/controls/iconbutton).

Value is of type `Control`.

### `leading_width`

Defines the width of leading control.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `56.0`.

### `shadow_color`

The [color](/docs/reference/colors) of the shadow below the app bar.

A shadow is only visible and displayed if the `elevation` is greater than zero.

### `shape`

The shape of the app bar's Material as well as its shadow.

Value is of type [`OutlinedBorder`](/docs/reference/types/outlinedborder).

### `surface_tint_color`

The color of the surface tint overlay applied to the app bar's `bgcolor` to indicate elevation.

By default, no overlay will be applied.

### `title`

The primary `Control` displayed in the app bar. Typically a [`Text`](/docs/controls/text) control that contains a description of the current contents of the app.

**Note** that, if `AppBar.adaptive=True` and the app is opened on an iOS or macOS device, this control will be automatically centered.

Value is of type `Control`.

### `title_spacing`

The spacing around `title` on the horizontal axis. It is applied even if there are no `leading` or `actions` controls.

If you want `title` to take all the space available, set this value to `0.0`.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

### `title_text_style`

The style to be used for the `Text` controls in the `title`.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

### `toolbar_height`

Defines the height of the toolbar component of an AppBar.

Value is of tye [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `56.0`.

### `toolbar_opacity`

The opacity of the toolbar. Value ranges from `0.0` (transparent) to `1.0` (fully opaque).

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `1.0`.

### `toolbar_text_style`

The style to be used for the `Text` controls in the app bar's `leading` and `actions` (but not `title`).

Value is of type [`TextStyle`](/docs/reference/types/textstyle).
