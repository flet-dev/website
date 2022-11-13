---
title: Switch
sidebar_label: Switch
slug: switch
---

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.

For example, "On/Off", "Show/Hide". Choosing an option should produce an immediate result.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

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
        label="Switch with rendered label_position='left'", label_position="left"
    )
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(c1, c2, c3, c4, b, t)

ft.app(target=main, view=ft.WEB_BROWSER)
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
    page.theme_mode = "dark" if page.theme_mode == "light" else "light"
    c.label = "Light theme" if page.theme_mode == "light" else "Dark theme"
    page.update()

  page.theme_mode = "light"
  c = ft.Switch(label="Light theme", on_change=theme_changed)
  page.add(c)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/switch-with-change-event.gif" className="screenshot-30"/>

## Properties

### `value`

Current value of the Switch.

### `label`

The clickable label to display on the right of the Switch.

### `label_position`

Set to `left` if `label` should be displayed on the left side of the Switch; otherwise `right` (default).

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `active_color`

The color to use when this switch is on.

### `active_track_color`

The color to use on the track when this switch is on.

If `track_color` returns a non-null color in the `selected` state, it will be used instead of this color.

### `inactive_thumb_color`

The color to use on the thumb when this switch is off.

If `thumb_color` returns a non-null color in the default state, it will be used instead of this color.

### `inactive_track_color`

The color to use on the track when this switch is off.

If `track_color` returns a non-null color in the default state, it will be used instead of this color.

### `thumb_color`

The color of this Switch's thumb.

Resolved in the following Material states:

* `selected`
* `hovered`
* `focused`
* `disabled`
* `""` (empty string) - fallback state, meaning "all other states".

To configure thumb color for all Material states set `thumb_color` value to a literal, for example:

```python
sw.thumb_color=colors.GREEN
```

To configure thumb color for specific Material states set its value to a dictionary where the key is state name. For example, to configure different fill colors for `hovered` and `focused` states and another color for all other states:

```python
sw.thumb_color={
    "hovered": colors.GREEN,
    "focused": colors.RED,
    "": colors.BLACK,
}
```

### `track_color`

The color of this Switch's track.

Resolved in the following states:

* `selected`
* `hovered`
* `focused`
* `disabled`
* `""` (empty string) - fallback state, meaning "all other states".

## Events

### `on_change`

Fires when the state of the Switch is changed.

### `on_focus`

Fires when the control has received focus.

### `on_blur`

Fires when the control has lost focus.