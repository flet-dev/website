---
slug: gradients-button-textfield-styles
title: Beautiful gradients, button styles and TextField rounded corners in a new Flet release
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [release]
---

We've just released [Flet 0.1.44](https://pypi.org/project/flet/0.1.44/) adding new exciting features:

* Gradient backgrounds in Container
* Extensive styling for buttons, TextField and Dropdown controls

## Gradient backgrounds

### Linear

An instance of `LinearGradient` class:

* `begin` - An instance of `Alignment` class. The offset at which stop 0.0 of the gradient is placed.
* `end` - An instance of `Alignment` class. The offset at which stop 1.0 of the gradient is placed.
* `colors` - The colors the gradient should obtain at each of the stops. If stops is non-null, this list must have the same length as stops. This list must have at least two colors in it (otherwise, it's not a gradient!).
* `stops` - A list of values from 0.0 to 1.0 that denote fractions along the gradient. If non-null, this list must have the same length as `colors`. If the first value is not 0.0, then a stop with position 0.0 and a color equal to the first color in `colors` is implied. If the last value is not 1.0, then a stop with position 1.0 and a color equal to the last color in `colors` is implied.
* `tile_mode` - How this gradient should tile the plane beyond in the region before `begin` and after `end`. Supported values: `clamp` (default), `decal`, `mirror`, `repeated`. More info [here](https://api.flutter.dev/flutter/dart-ui/TileMode.html).
* `rotation` - rotation for the gradient, in [radians](https://en.wikipedia.org/wiki/Radian), around the center-point of its bounding box.

More information:

* [Linear gradient](https://api.flutter.dev/flutter/painting/LinearGradient-class.html) in Flutter documentation.
* [Radian measuring unit](https://en.wikipedia.org/wiki/Radian) on Wikipedia.

### Radial

An instance of `RadialGradient` class:

* `colors`, `stops`, `tile_mode`, `rotation` - see Linear gradient for description of these properties.
* `center` - An instance of `Alignment` class. The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the radial gradient in the center of the box.
* `radius` - The radius of the gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the `center`.
* `focal` - The focal point of the gradient. If specified, the gradient will appear to be focused along the vector from `center` to focal.
* `focal_radius` - The radius of the focal point of gradient, as a fraction of the shortest side of the paint box. For example, if a radial gradient is painted on a box that is 100.0 pixels wide and 200.0 pixels tall, then a radius of 1.0 will place the 1.0 stop at 100.0 pixels from the focal point.

More information:

* [Radial gradient](https://api.flutter.dev/flutter/painting/RadialGradient-class.html) in Flutter documentation.

### Sweep

* `center` - The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the sweep gradient in the center of the box.
* `start_angle` - The angle in radians at which stop 0.0 of the gradient is placed. Defaults to 0.0.
* `end_angle` - The angle in radians at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2.

More information:

* [Sweep gradient](https://api.flutter.dev/flutter/painting/SweepGradient-class.html) in Flutter documentation.

## Buttons styling

`ButtonStyle` class:
* color - The color for the button's Text and Icon control descendants.
* bgcolor - The button's background fill color.
* overlay_color - The highlight color that's typically used to indicate that the button is focused, hovered, or pressed.
* shadow_color - The shadow color of the button's Material.
* surface_tint_color - The surface tint color of the button's Material.
* elevation - The elevation of the button's Material.
* animation_duration - Defines the duration in milliseconds of animated changes for shape and elevation.
* padding - The padding between the button's boundary and its child.
* side - An instance of `BorderSide` class, the color and weight of the button's outline.
* shape - The shape of the button's underlying Material, an instance of one of the following implementations:
  * `StadiumBorder`
  * `RoundedRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `CircleBorder`
  * `BeveledRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `CountinuosRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.

Dictionary of a value.

Material states:

* `hovered`
* `focused`
* `pressed`
* `dragged`
* `selected`
* `scrolledUnder`
* `disabled`
* `error`
* (empty string)

## TextField and Dropdown styling

It is now possible to configure text size, border style and corners radius for normal and focused states of `TextField` and `Dropdown`.

```python
# TextField example
```

[screenshot]

```python
# Dropdown example
```

[screenshot]

## TextField improvements

`TextField` allows configuring colors for a cursor and selection:

```python
# TextField example
```

[screenshot]

Additionally, the maximum length of entered into `TextField` can now be limited with `max_length` property.

We also introduced `capitalization` property for automatic capitalization of characters as you type them into `TextField`. You can choose from 4 capitalization strategies: `none` (default), `characters`, `words` and `sentences`:

```python
code
```

[screenshot]

## Other changes

`IconButton` got `selected` state with distinctive style that can be toggled in your logic:

```python
code
```

[screenshot]

[Give Flet a try](/docs/guides/python/getting-started) and [let us know](https://discord.gg/dzWXP8SHG8) what you think!