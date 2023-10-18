---
title: Chip
sidebar_label: Chip
slug: chip
---

Chips are compact elements that represent an attribute, text, entity, or action.

Chips help people enter information, make selections, filter content, or trigger actions. Use chips to show options for a specific context.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/chip)

### Assist chips

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

### Filter chips

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

### Input chips

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

### Suggestion chips

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

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

[Color](/docs/guides/python/colors) to be used for the unselected, enabled chip's background.

### `check_color`

[Color](/docs/guides/python/colors) of the chip's check mark when a check mark is visible.

### `delete_icon_tooltip`

The text to be used for the chip's `delete_icon` tooltip. If not provided or provided with an empty string, the tooltip of the delete icon will not be displayed.

### `delete_icon`

A `Control` to display to the right of the chip's `label` in case `on_delete` event is specified. Defaults to an [Icon](icon) set to use `ft.icons.CANCEL`.

### `delete_icon_color`

[Color](/docs/guides/python/colors) of the `delete_icon`.

### `disabled_color`

The [color](/docs/guides/python/colors) used for the chip's background if it is disabled.

### `elevation`

Specify elevation to change the size of the shadow below the chip. Defaults to 0. The value is always non-negative.

### `label`

A `Control` that represents primary content of the chip, typically a [Text](text). Label is a required property.

### `label_padding`

Padding around the `label`.

By default, this is 4 logical pixels at the beginning and the end of the label, and zero on top and bottom.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `label_style`

The style to be applied to the chip's `label`. See [`Text.textstyle`](text#textstyle-properties) for more information about `TextStyle` and possible values.

### `leading`

A `Control` to display to the left of the chip's `label`.

Typically the leading control is an [`Icon`](icon) or a [`CircleAvatar`](circleavatar).

### `padding`

The padding between the `label` and the outside shape.

By default, this is 4 logical pixels on all sides.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `selected`

If `on_select` event is specified, `selected` property is used to determine wheather the chip is selected or not. Defaults to `False`.

### `selected_color`

The [color](/docs/guides/python/colors) used for the chip's background when it is selected.

### `selected_shadow_color`

The [color](/docs/guides/python/colors) used for the chip's background when the elevation is greater than 0 and the chip is selected.

### `shadow_color`

The [color](/docs/guides/python/colors) used for the chip's background when the elevation is greater than 0 and the chip is not selected.

### `shape`

The shape of the border around the chip.

The value is an instance of one of the following implementations:
  * `StadiumBorder`
  * `RoundedRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `CircleBorder`
  * `BeveledRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.
  * `ContinuousRectangleBorder`
    * `radius` - border radius, an instance of `BorderRadius` class or a number.

The default shape is a `StadiumBorder`.

### `show_checkmark`

If `on_select` event is specified and chip is selected, `show_checkmark` is used to determine wheather or not to show a checkmark. Defaults to `True`.

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



