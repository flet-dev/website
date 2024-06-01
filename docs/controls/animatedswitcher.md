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

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):

    c1 = ft.Container(
        ft.Text("Hello!", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        alignment=ft.alignment.center,
        width=200,
        height=200,
        bgcolor=ft.colors.GREEN,
    )
    c2 = ft.Container(
        ft.Text("Bye!", size=50),
        alignment=ft.alignment.center,
        width=200,
        height=200,
        bgcolor=ft.colors.YELLOW,
    )
    c = ft.AnimatedSwitcher(
        c1,
        transition=ft.AnimatedSwitcherTransition.SCALE,
        duration=500,
        reverse_duration=100,
        switch_in_curve=ft.AnimationCurve.BOUNCE_OUT,
        switch_out_curve=ft.AnimationCurve.BOUNCE_IN,
    )

    def animate(e):
        c.content = c2 if c.content == c1 else c1
        c.update()

    page.add(
        c,
        ft.ElevatedButton("Animate!", on_click=animate),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `duration`

The duration, in milliseconds, of the transition from the old `content` value to the new one.

Defaults to `1000` milliseconds.

### `reverse_duration`

The duration, in milliseconds, of the transition from the new `content` value to the old one.

Defaults to `1000` milliseconds.

### `switch_in_curve`

The animation curve to use when transitioning in a new `content`. Property value is [`AnimationCurve`](/docs/reference/types/animationcurve) enum with `AnimationCurve.LINEAR` as default.

### `switch_out_curve`

The animation curve to use when transitioning a previous `content` out. Property value is [`AnimationCurve`](/docs/reference/types/animationcurve) enum with `AnimationCurve.LINEAR` as default.

### `transition`

An animation type to transition between new and old `content`. Property value is `AnimatedSwitcherTransition` enum with the following values:

* `FADE`
* `ROTATION`
* `CALE`

Defaults to `FADE`.   