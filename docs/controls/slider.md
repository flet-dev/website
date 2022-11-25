---
title: Slider
sidebar_label: Slider
slug: slider
---

A slider provides a visual indication of adjustable content, as well as the current setting in the total range of content.

Use a slider when you want people to set defined values (such as volume or brightness), or when people would benefit from instant feedback on the effect of setting changes.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic sliders

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.add(
        ft.Text("Default slider:"),
        ft.Slider(),
        ft.Text("Default disabled slider:"),
        ft.Slider(disabled=True))

ft.app(target=main)
```
  </TabItem>
</Tabs>

### Sliders with values

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.add(
        ft.Text("Slider with value:"),
        ft.Slider(value=0.3),
        ft.Text("Slider with a custom range and label:"),
        ft.Slider(min=0, max=100, divisions=10, label="{value}%"))

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/slider/slider-with-custom-content.gif" className="screenshot-30"/>

### Slider with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):

    def slider_changed(e):
        t.value = f"Slider changed to {e.control.value}"
        page.update()

    t = ft.Text()
    page.add(
        ft.Text("Slider with 'on_change' event:"),
        ft.Slider(min=0, max=100, divisions=10, label="{value}%", on_change=slider_changed), t)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/slider/slider-with-change-event.gif" className="screenshot-30"/>

## Properties

### `value`

The currently selected value for this slider.

The slider's thumb is drawn at a position that corresponds to this value.

### `min`

The minimum value the user can select.

Defaults to `0.0`. Must be less than or equal to `max`.

If the `max` is equal to the `min`, then the slider is disabled.

### `max`

The maximum value the user can select.

Defaults to `1.0`. Must be greater than or equal to `min`.

If the `max` is equal to the `min`, then the slider is disabled.

### `divisions`

The number of discrete divisions.

Typically used with `label` to show the current discrete value.

If not set, the slider is continuous.

### `label`

Format with `{value}`.

A label to show above the slider when the slider is active. The value of `label` must contain `{value}` which will be replaced with a current slider value.

It is used to display the value of a discrete slider, and it is displayed as part of the value indicator shape.

If not set, then the value indicator will not be displayed.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `active_color`

The color to use for the portion of the slider track that is active.

The "active" side of the slider is the side between the thumb and the minimum value.

### `inactive_color`

The color for the inactive portion of the slider track.

The "inactive" side of the slider is the side between the thumb and the maximum value.

### `thumb_color`

The color of the thumb.

## Events

### `on_change`

Fires when the state of the Slider is changed.

### `on_focus`

Fires when the control has received focus.

### `on_blur`

Fires when the control has lost focus.