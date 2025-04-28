---
title: AnimatedSwitcher
sidebar_label: AnimatedSwitcher
---

A control that by default does a cross-fade between a new control and the control previously set on the AnimatedSwitcher as a `content`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/animations/animated_switcher)

### Animated switching between two containers with scale effect

<img src="/img/docs/controls/animated-switcher/animated-switcher.gif" className="screenshot-20" />


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/animations/animated-switcher/animated-switcher.py
```


## Properties

### `content`

The content to display. When the `content` changes, the AnimatedSwitcher will animate the transition from the
old `content` to the new one.

Value is of type `Control`.

### `duration`

The duration, in milliseconds, of the transition from the old `content` value to the new one.

Value is of type `int` defaults to `1000` milliseconds.

### `reverse_duration`

The duration, in milliseconds, of the transition from the new `content` value to the old one.

Value is of type `int` and defaults to `1000` milliseconds.

### `switch_in_curve`

The animation curve to use when transitioning in a new `content`.

Value is of type [`AnimationCurve`](/docs/reference/types/animationcurve) and defaults
to [`AnimationCurve.LINEAR`](/docs/reference/types/animationcurve).

### `switch_out_curve`

The animation curve to use when transitioning a previous `content` out.

Value is of type [`AnimationCurve`](/docs/reference/types/animationcurve) and defaults
to [`AnimationCurve.LINEAR`](/docs/reference/types/animationcurve).

### `transition`

An animation type to transition between new and old `content`.

Value is of type [`AnimatedSwitcherTransition`](/docs/reference/types/animatedswitchertransition) and defaults
to [`AnimatedSwitcherTransition.FADE`](/docs/reference/types/animatedswitchertransition).   