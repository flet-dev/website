---
title: Dropdown
sidebar_label: Dropdown
slug: dropdown
---

A material design button for selecting from a list of items.

A dropdown lets the user select from a number of items. The dropdown shows the currently selected item as well as an arrow that opens a menu for selecting another item.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/dropdown)

### Basic dropdown

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def button_clicked(e):
        t.value = f"Dropdown value is:  {dd.value}"
        page.update()

    t = ft.Text()
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    dd = ft.Dropdown(
        width=100,
        options=[
            ft.dropdown.Option("Red"),
            ft.dropdown.Option("Green"),
            ft.dropdown.Option("Blue"),
        ],
    )
    page.add(dd, b, t)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/basic-dropdown.gif" className="screenshot-30"/>

### Dropdown with label and hint

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.Dropdown(
            label="Color",
            hint_text="Choose your favourite color?",
            options=[
                ft.dropdown.Option("Red"),
                ft.dropdown.Option("Green"),
                ft.dropdown.Option("Blue"),
            ],
            autofocus=True,
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-custom-content.gif" className="screenshot-30"/>

### Dropdown with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def dropdown_changed(e):
        t.value = f"Dropdown changed to {dd.value}"
        page.update()

    t = ft.Text()
    dd = ft.Dropdown(
        on_change=dropdown_changed,
        options=[
            ft.dropdown.Option("Red"),
            ft.dropdown.Option("Green"),
            ft.dropdown.Option("Blue"),
        ],
        width=200,
    )
    page.add(dd, t)

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-change-event.gif" className="screenshot-30" />

### Change items in dropdown options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def find_option(option_name):
        for option in d.options:
            if option_name == option.key:
                return option
        return None

    def add_clicked(e):
        d.options.append(ft.dropdown.Option(option_textbox.value))
        d.value = option_textbox.value
        option_textbox.value = ""
        page.update()

    def delete_clicked(e):
        option = find_option(d.value)
        if option != None:
            d.options.remove(option)
            # d.value = None
            page.update()

    d = ft.Dropdown()
    option_textbox = ft.TextField(hint_text="Enter item name")
    add = ft.ElevatedButton("Add", on_click=add_clicked)
    delete = ft.OutlinedButton("Delete selected", on_click=delete_clicked)
    page.add(d, ft.Row(controls=[option_textbox, add, delete]))

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/dropdown/dropdown-with-add-and-delete.gif" className="screenshot-40"/>

## `Dropdown` properties

### `alignment`

Defines how the hint or the selected item is positioned within the dropdown.

See [`Container.alignment`](/docs/controls/container#alignment) property for possible values.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

Dropdown background [color](/docs/guides/python/colors).

### `border`

Border around input - `InputBorder` enum with one of the values: `OUTLINE` (default), `UNDERLINE`, `NONE`.

### `border_color`

Border [color](/docs/guides/python/colors). Could be `transparent` to hide the border.

### `border_radius`

See [`Container.border_radius`] property docs for more information about border radius.

### `border_width`

The width of the border in virtual pixels. Default is 1. Set to 0 to completely remove border.

### `color`

Text [color](/docs/guides/python/colors).

### `content_padding`

The padding for the input decoration's container.

### `counter_style`

The style to use for `counter_text`.

### `counter_text`

Optional text to place below the line as a character count.

If null or an empty string and counter isn't specified, then nothing will appear in the counter's location.

### `dense`

Whether the TextField is part of a dense form (ie, uses less vertical space).

### `error_style`

The style to use for `error_text`.

### `error_text`

Text that appears below the input border.

If non-null, the border's color animates to red and the `helper_text` is not shown.

### `filled`

If `True` the decoration's container is filled with theme fillColor.

### `focused_bgcolor`

Background [color](/docs/guides/python/colors) of dropdown in focused state.

### `focused_border_color`

Border [color](/docs/guides/python/colors) in focused state.

### `focused_border_width`

Border width in focused state.

### `focused_color`

Text [color](/docs/guides/python/colors) when Dropdown is focused.

### `helper_style`

The style to use for `helper_text`.

### `helper_text`

Text that provides context about the input's value, such as how the value will be used.

If non-null, the text is displayed below the input decorator, in the same location as `error_text`. If a non-null `error_text` value is specified then the helper text is not shown.

### `hint_style`

The style to use for `hint_text`.

### `hint_text`

Text that suggests what sort of input the field accepts.

Displayed on top of the input when it's empty and either (a) `label` is null or (b) the input has the focus.

### `icon`

The name of the icon to show before the input field and outside of the decoration's container.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `label`

Optional text that describes the input field.

When the input field is empty and unfocused, the label is displayed on top of the input field (i.e., at the same location on the screen where text may be entered in the input field). When the input field receives focus (or if the field is non-empty) the label moves above, either vertically adjacent to, or to the center of the input field.

### `label_style`

The style to use for `label`.

### `options`

A list of `Option` controls representing items in the dropdown.

### `prefix`

Optional `Control` to place on the line before the input.

This can be used, for example, to add some padding to text that would otherwise be specified using `prefix_text`, or to add a custom control in front of the input. The control's baseline is lined up with the input baseline.

Only one of `prefix` and `prefix_text` can be specified.

The `prefix` appears after the `prefix_icon`, if both are specified.

### `prefix_icon`

An icon that appears before the `prefix` or `prefix_text` and before the editable part of the text field, within the decoration's container.

### `prefix_style`

The style to use for `prefix_text`.

### `prefix_text`

Optional text `prefix` to place on the line before the input.

### `suffix`

Optional `Control` to place on the line after the input.

This can be used, for example, to add some padding to the text that would otherwise be specified using `suffix_text`, or to add a custom control after the input. The control's baseline is lined up with the input baseline.

Only one of `suffix` and `suffix_text` can be specified.

The `suffix` appears before the `suffix_icon`, if both are specified.

### `suffix_icon`

An icon that appears after the editable part of the text field and after the `suffix` or `suffix_text`, within the decoration's container.

### `suffix_style`

The style to use for `suffix_text`.

### `suffix_text`

Optional text `suffix` to place on the line after the input.

### `text_size`

Text size in virtual pixels.

### `text_style`

The text style to use for text in the dropdown button and the dropdown menu that appears when you tap the button.

### `value`

`key` value of the selected option.

## `Dropdown` methods

### `focus()`

Moves focus to a Dropdown.

## `Dropdown` events

### `on_blur`

Fires when the control has lost focus.

### `on_change`

Fires when the selected item of the Dropdown has changed.

### `on_focus`

Fires when the control has received focus.

## `Option` properties

### `key`

Option's key. `text` value will be used instead if `key` is not specified.

### `text`

Option's display text. `key` value will be used instead if `text` is not specified.