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

### Basic dropdown

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Dropdown, ElevatedButton, Page, Text, dropdown

def main(page: Page):
    def button_clicked(e):
        t.value = f"Dropdown value is:  {dd.value}"
        page.update()

    t = Text()
    b = ElevatedButton(text="Submit", on_click=button_clicked)
    dd = Dropdown(
        width=100,
        options=[
            dropdown.Option("Red"),
            dropdown.Option("Green"),
            dropdown.Option("Blue"),
        ],
    )
    page.add(dd, b, t)

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Dropdown with label and hint

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Dropdown, Page, dropdown

def main(page: Page):
    page.add(
        Dropdown(
            label="Color",
            hint_text="Choose your favourite color?",
            options=[
                dropdown.Option("Red"),
                dropdown.Option("Green"),
                dropdown.Option("Blue"),
            ],
            autofocus=True,
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Dropdown with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Dropdown, Page, Text, dropdown

def main(page: Page):
    def dropdown_changed(e):
        t.value = f"Dropdown changed to {dd.value}"
        page.update()

    t = Text()
    dd = Dropdown(
        on_change=dropdown_changed,
        options=[
            dropdown.Option("Red"),
            dropdown.Option("Green"),
            dropdown.Option("Blue"),
        ],
        width=200,
    )
    page.add(dd, t)

flet.app(target=main)
```
  </TabItem>
</Tabs>

### Change items in dropdown options

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Dropdown, dropdown, Textbox, Button, Stack
with flet.page("change-dropdown-options") as page:

  def find_option(option_name):
    for option in d.options:
        if option_name == option.key:
          return option          
    return None

  def add_clicked(e):
    d.options.append(dropdown.Option(option_textbox.value))
    d.value = option_textbox.value
    option_textbox.value = ''
    page.update()

  def delete_clicked(e):
    option = find_option(d.value)
    if option !=None:
      d.options.remove(option)    
      page.update()

  d = Dropdown()
  option_textbox = Textbox(placeholder='Enter item name')
  add = Button("Add", on_click=add_clicked)
  delete = Button("Delete selected", on_click=delete_clicked)
  stack = Stack(controls = [d, Stack(horizontal=True, controls=[option_textbox, add, delete])])

  page.add(stack)

  input()
```
  </TabItem>
</Tabs>

## `Dropdown` properties

### `options`

A list of `Option` controls representing items in the dropdown.

### `value`

`key` value of the selected option.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `label`

Optional text that describes the input field.

When the input field is empty and unfocused, the label is displayed on top of the input field (i.e., at the same location on the screen where text may be entered in the input field). When the input field receives focus (or if the field is non-empty) the label moves above, either vertically adjacent to, or to the center of the input field.

### `icon`

The name of the icon to show before the input field and outside of the decoration's container.

### `border`

Border around input: `outline` (default), `underline`, `none`.

### `content_padding`

The padding for the input decoration's container.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `filled`

If `True` the decoration's container is filled with theme fillColor.

### `hint_text`

Text that suggests what sort of input the field accepts.

Displayed on top of the input when the it's empty and either (a) `label` is null or (b) the input has the focus.

### `helper_text`

Text that provides context about the input's value, such as how the value will be used.

If non-null, the text is displayed below the input decorator, in the same location as `error_text`. If a non-null `error_text` value is specified then the helper text is not shown.

### `counter_text`

Optional text to place below the line as a character count.

If null or an empty string and counter isn't specified, then nothing will appear in the counter's location.

### `error_text`

Text that appears below the input border.

If non-null, the border's color animates to red and the `helper_text` is not shown.

### `prefix`

Optional `Control` to place on the line before the input.

This can be used, for example, to add some padding to text that would otherwise be specified using `prefix_text`, or to add a custom control in front of the input. The control's baseline is lined up with the input baseline.

Only one of `prefix` and `prefix_text` can be specified.

The `prefix` appears after the `prefix_icon`, if both are specified.

### `prefix_icon`

An icon that appears before the `prefix` or `prefix_text` and before the editable part of the text field, within the decoration's container.

### `prefix_text`

Optional text `prefix` to place on the line before the input.

### `suffix`

Optional `Control` to place on the line after the input.

This can be used, for example, to add some padding to the text that would otherwise be specified using `suffix_text`, or to add a custom control after the input. The control's baseline is lined up with the input baseline.

Only one of `suffix` and `suffix_text` can be specified.

The `suffix` appears before the `suffix_icon`, if both are specified.

### `suffix_icon`

An icon that appears after the editable part of the text field and after the `suffix` or `suffix_text`, within the decoration's container.

### `suffix_text`

Optional text `suffix` to place on the line after the input.

## `Dropdown` methods

### `focus()`

Moves focus to a Dropdown.

## `Dropdown` events

### `on_change`

Fires when the selected item of the Dropdown has changed.

### `on_focus`

Fires when the control has received focus.

### `on_blur`

Fires when the control has lost focus.

## `Option` properties

### `key`

Option's key. `text` value will be used instead if `key` is not specified.

### `text`

Option's display text. `key` value will be used instead if `text` is not specified.