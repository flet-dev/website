---
title: Chip
sidebar_label: Chip
---

Chips are compact elements that represent an attribute, text, entity, or action.

Chips help people enter information, make selections, filter content, or trigger actions. Use chips to show options for a specific context.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/chip)

### Assist chips

Assist chips are chips with `leading` icon and `on_click` event specified. They represent smart or automated actions that appear dynamically and contextually in a UI.

An alternative to assist chips are buttons, which should appear persistently and consistently.

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    def save_to_favorites_clicked(e):
        e.control.label.value = "Saved to favorites"
        e.control.leading = ft.Icon(ft.icons.FAVORITE_OUTLINED)
        e.control.disabled = True
        page.update()

    def open_google_maps(e):
        page.launch_url("https://maps.google.com")
        page.update()

    save_to_favourites = ft.Chip(
        label=ft.Text("Save to favourites"),
        leading=ft.Icon(ft.icons.FAVORITE_BORDER_OUTLINED),
        bgcolor=ft.colors.GREEN_200,
        disabled_color=ft.colors.GREEN_100,
        autofocus=True,
        on_click=save_to_favorites_clicked,
    )

    open_in_maps = ft.Chip(
        label=ft.Text("9 min walk"),
        leading=ft.Icon(ft.icons.MAP_SHARP),
        bgcolor=ft.colors.GREEN_200,
        on_click=open_google_maps,
    )

    page.add(ft.Row([save_to_favourites, open_in_maps]))

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/chip/assist-chips.png" className="screenshot-40"/>

### Filter chips

Filter chips are chips with `on_select` event specified. They use tags or descriptive words provided in the `label` to filter content. They can be a good alternative to switches or checkboxes.

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def amenity_selected(e):
        page.update()

    title = ft.Row([ft.Icon(ft.icons.HOTEL_CLASS), ft.Text("Amenities")])
    amenities = ["Washer / Dryer", "Ramp access", "Dogs OK", "Cats OK", "Smoke-free"]
    amenity_chips = []

    for amenity in amenities:
        amenity_chips.append(
            ft.Chip(
                label=ft.Text(amenity),
                bgcolor=ft.colors.GREEN_200,
                disabled_color=ft.colors.GREEN_100,
                autofocus=True,
                on_select=amenity_selected,
            )
        )

    page.add(title, ft.Row(amenity_chips))

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/chip/filter-chips.png" className="screenshot-60"/>


## Properties

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

[Color](/docs/reference/colors) to be used for the unselected, enabled chip's background.

### `border_side`

Defines the color and weight of the chip's outline. Value is the instance of [`BorderSide`](/docs/reference/types/borderside) class.

### `check_color`

[Color](/docs/reference/colors) of the chip's check mark when a check mark is visible.

### `click_elevation`

A non-negative value which defines the elevation of the chip when clicked/pressed.

Defaults to `8.0`.

### `clip_behavior`

The content will be clipped (or not) according to this option. Property value is [`ClipBehavior`](/docs/reference/types/clipbehavior) enum.

Defaults to `NONE`.

### `color`

The [color](/docs/reference/colors) that fills the chip in various [`ControlState`](/docs/reference/types/controlstate)
s.

### `delete_icon_tooltip`

The text to be used for the chip's `delete_icon` tooltip. If not provided or provided with an empty string, the tooltip of the delete icon will not be displayed.

### `delete_icon`

A `Control` to display to the right of the chip's `label` in case `on_delete` event is specified. Defaults to an [Icon](/docs/controls/icon) set to use `ft.icons.CANCEL`.

### `delete_icon_color`

[Color](/docs/reference/colors) of the `delete_icon`.

### `disabled_color`

The [color](/docs/reference/colors) used for the chip's background if it is disabled.

### `elevation`

A non-negative value which defines the size of the shadow below the chip. Defaults to `0`.

### `label`

A `Control` that represents primary content of the chip, typically a [Text](/docs/controls/text). Label is a required property.

### `label_padding`

Padding around the `label`.

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

By default, this is 4 logical pixels at the beginning and the end of the label, and zero on top and bottom.

### `label_style`

The style to be applied to the chip's `label`. An instance of type [`TextStyle`](/docs/reference/types/textstyle).

### `leading`

A `Control` to display to the left of the chip's `label`.

Typically the leading control is an [`Icon`](/docs/controls/icon) or a [`CircleAvatar`](/docs/controls/circleavatar).

### `padding`

The padding between the `label` and the outside shape.

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

By default, this is 4 logical pixels on all sides.

### `selected`

If `on_select` event is specified, `selected` property is used to determine wheather the chip is selected or not. Defaults to `False`.

### `selected_color`

The [color](/docs/reference/colors) used for the chip's background when it is selected.

### `selected_shadow_color`

The [color](/docs/reference/colors) used for the chip's background when the elevation is greater than 0 and the chip is selected.

### `shadow_color`

The [color](/docs/reference/colors) used for the chip's background when the elevation is greater than 0 and the chip is not selected.

### `shape`

The shape of the border around the chip.

The value is an instance of [`OutlinedBorder`](/docs/reference/types/outlinedborder) class.

The default shape is a `StadiumBorder`.

### `show_checkmark`

If `on_select` event is specified and chip is selected, `show_checkmark` is used to determine wheather or not to show a checkmark. Defaults to `True`.

### `surface_tint_color`

The [color](/docs/reference/colors) used as an overlay on `bgcolor` to indicate elevation.

### `visual_density`

Defines how compact the control's layout will be.

The value is of [`ThemeVisualDensity`](/docs/reference/types/themevisualdensity) enum.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_click`

Fires when the user clicks on the chip. Cannot be specified together with `on_select` event.

### `on_delete`

Fires when the user clicks on the `delete_icon`.

### `on_focus`

Fires when the control has received focus.

### `on_select`

Fires when the user clicks on the chip. Changes `selected` property to the opposite value. Cannot be specified together with `on_click` event.



