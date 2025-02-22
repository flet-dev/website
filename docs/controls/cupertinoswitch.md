---
title: CupertinoSwitch
sidebar_label: CupertinoSwitch
---

An iOS-style switch.

Used to toggle the on/off state of a single setting.

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.

For example, "On/Off", "Show/Hide". Choosing an option should produce an immediate result.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/cupertinoswitch)

### CupertinoSwitch and adaptive Switch

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import logging
import flet as ft
import asyncio

logging.basicConfig(level=logging.DEBUG)


def main(page: ft.Page):
    page.add(
        ft.CupertinoSwitch(
            label="Cupertino Switch",
            value=True,
        ),
        ft.Switch(
            label="Material Switch",
            value=True,
            thumb_color={ft.ControlState.SELECTED: ft.Colors.BLUE},
            track_color=ft.Colors.YELLOW,
            focus_color=ft.Colors.PURPLE,
        ),
        ft.Container(height=20),
        ft.Text(
            "Adaptive Switch shows as CupertinoSwitch on macOS and iOS and as Switch on other platforms:"
        ),
        ft.Switch(
            adaptive=True,
            label="Adaptive Switch",
            value=True,
        ),
    )


ft.app(main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertinoswitch/cupertino-switch.gif" className="screenshot-70"/>

## Properties

### ~~`active_color`~~

:::warning
This property is deprecated since `v0.26.0` and will be removed in `v0.29.0`. Use `active_track_color` instead.
:::

The [color](/docs/reference/colors) to use for the track when the switch is on.

Defaults to `CupertinoColors.SYSTEM_GREEN`.

### `active_thumb_image`

An image to use on the thumb of this switch when the switch is on. Can be a local file path or URL.

### `active_track_color`

The [color](/docs/reference/colors) to use on the track when this switch is on.

Defaults to `CupertinoColors.SYSTEM_GREEN`.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `focus_color`

The [color](/docs/reference/colors) to use for the focus highlight for keyboard interactions.

### `inactive_thumb_color`

The [color](/docs/reference/colors) to use on the thumb when this switch is off.

If `None`, defaults to `thumb_color`, or `CupertinoColors.WHITE` if `thumb_color` is also `None`.

### `inactive_thumb_image`

An image to use on the thumb of this switch when the switch is off. Can be a local file path or URL.

### `inactive_track_color`

The [color](/docs/reference/colors) to use on the track when this switch is off.

Defaults to `CupertinoColors.SECONDARY_SYSTEM_FILL`.

### `label`

The clickable label to display on the right of the switch.

### `label_position`

The position of the label relative to the switch.

Value is of type [`LabelPosition`](/docs/reference/types/labelposition) and defaults to `LabelPosition.RIGHT`.

### `off_label_color`

The [color](/docs/reference/colors) to use for the accessibility label when the switch is off.

### `on_label_color`

The [color](/docs/reference/colors) to use for the accessibility label when the switch is on.

Defaults to `cupertino_colors.WHITE`.

### `thumb_color`

The [color](/docs/reference/colors) of the switch's thumb.

### `thumb_icon`

The icon of this Switch's thumb in various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are
supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

### ~~`track_color`~~

:::warning
This property is deprecated since `v0.26.0` and will be removed in `v0.29.0`. Use `inactive_track_color` instead.
:::

The [color](/docs/reference/colors) to use for the track when the switch is off.

Defaults to `CupertinoColors.SECONDARY_SYSTEM_FILL`.

### `track_outline_color`

The outline [color](/docs/reference/colors) of this switch's track in
various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are
supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

### `track_outline_width`

The outline width of this switch's track in all or specific [`ControlState`](/docs/reference/types/controlstate) states. 
The following states are supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).


### `value`

Current value of the switch.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_change`

Fires when the state of the switch is changed.

### `on_image_error`

Fires when the image (`active_thumb_image` or `inactive_thumb_image`) fails to load.

### `on_focus`

Fires when the control has received focus.