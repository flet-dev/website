---
title: Switch
sidebar_label: Switch
---

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.

For example, "On/Off", "Show/Hide". Choosing an option should produce an immediate result.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/switch)

### Basic switches

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    def button_clicked(e):
        t.value = (
            f"Switch values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}."
        )
        page.update()

    t = ft.Text()
    c1 = ft.Switch(label="Unchecked switch", value=False)
    c2 = ft.Switch(label="Checked switch", value=True)
    c3 = ft.Switch(label="Disabled switch", disabled=True)
    c4 = ft.Switch(
        label="Switch with rendered label_position='left'", label_position=ft.LabelPosition.LEFT
    )
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(c1, c2, c3, c4, b, t)

ft.app(target=main, view=ft.AppView.WEB_BROWSER)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/basic-switch.gif" className="screenshot-30"/>

### Switch with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def theme_changed(e):
        page.theme_mode = (
            ft.ThemeMode.DARK
            if page.theme_mode == ft.ThemeMode.LIGHT
            else ft.ThemeMode.LIGHT
        )
        c.label = (
            "Light theme" if page.theme_mode == ft.ThemeMode.LIGHT else "Dark theme"
        )
        page.update()

    page.theme_mode = ft.ThemeMode.LIGHT
    c = ft.Switch(label="Light theme", on_change=theme_changed)
    page.add(c)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/switch-with-change-event.gif" className="screenshot-30"/>

## Properties

### `active_color`

The [color](/docs/reference/colors) to use when this switch is on.

### `active_track_color`

The [color](/docs/reference/colors) to use on the track when this switch is on.

If `track_color` returns a non-null color in the `selected` state, it will be used instead of this color.

### `adaptive`

If the value is `True`, an adaptive Switch is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a `CupertinoSwitch` is created, which has matching functionality and presentation as `Switch`, and the graphics as expected on iOS. On other platforms, a Material Switch is created.

The default value is `False`. See the example of usage [here](/docs/controls/cupertinoswitch#cupertinoswitch-and-adaptive-switch).

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `focus_color`

The [color](/docs/reference/colors) to use for the focus highlight for keyboard interactions.

### `hover_color`

The [color](/docs/reference/colors) to be used when it is being hovered over by the mouse pointer.

### `inactive_thumb_color`

The [color](/docs/reference/colors) to use on the thumb when this switch is off.

If `thumb_color` returns a non-null color in the default state, it will be used instead of this color.

### `inactive_track_color`

The [color](/docs/reference/colors) to use on the track when this switch is off.

If `track_color` returns a non-null color in the default state, it will be used instead of this color.

### `label`

The clickable label to display on the right of the Switch.

### `label_style`

The label's style. An instance of type [`TextStyle`](/docs/reference/types/textstyle).

### `label_position`

Property value is [`LabelPosition`](/docs/reference/types/labelposition) enum. The default value is `RIGHT`.

### `mouse_cursor`

The cursor to be displayed when a mouse pointer enters or is hovering over this control.
The value is [`MouseCursor`](/docs/reference/types/mousecursor) enum.

### `overlay_color`

The [color](/docs/reference/colors) for the switch's Material in
various [`ControlState`](/docs/reference/types/controlstate) states. The
following [`ControlState`](/docs/reference/types/controlstate) values are
supported: `PRESSED`, `SELECTED`, `HOVERED`, `FOCUSED` and `DEFAULT` (fallback).

### `splash_radius`

The radius of the splash effect when the switch is pressed.

### `thumb_color`

The [color](/docs/reference/colors) of this switch's thumb in
various [`ControlState`](/docs/reference/types/controlstate) states. The
following [`ControlState`](/docs/reference/types/controlstate) values are
supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

### `thumb_icon`

The icon of this Switch's thumb in various [`ControlState`](/docs/reference/types/controlstate) states. The
following [`ControlState`](/docs/reference/types/controlstate) values are
supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

### `track_color`

The [color](/docs/reference/colors) of this switch's track in
various [`ControlState`](/docs/reference/types/controlstate) states. The
following [`ControlState`](/docs/reference/types/controlstate)
values are supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

### `track_outline_color`

The outline [color](/docs/reference/colors) of this switch's track in
various [`ControlState`](/docs/reference/types/controlstate) states. The
following [`ControlState`](/docs/reference/types/controlstate) values are
supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

### `value`

Current value of the Switch.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_change`

Fires when the state of the Switch is changed.

### `on_focus`

Fires when the control has received focus.