---
title: CupertinoRadio
sidebar_label: CupertinoRadio
---

A macOS style radio button. Radio buttons let people select a single option from two or more choices.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/cupertinoradio)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    def button_clicked(e):
        t.value = f"Your favorite color is:  {cg.value}"
        page.update()

    t = ft.Text()
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    cg = ft.RadioGroup(
        content=ft.Column(
            [
                ft.CupertinoRadio(value="red", label="Red - Cupertino Radio", active_color=ft.colors.RED, inactive_color=ft.colors.RED),
                ft.Radio(value="green", label="Green - Material Radio", fill_color=ft.colors.GREEN),
                ft.Radio(value="blue", label="Blue - Adaptive Radio", adaptive=True, active_color=ft.colors.BLUE),
            ]
        )
    )

    page.add(ft.Text("Select your favorite color:"), cg, b, t)


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertinoradio/cupertino-radio-basic.png" className="screenshot-30"/>

## `RadioGroup` properties

### `value`

Current value of the RadioGroup.

## `RadioGroup` events

### `on_change`

Fires when the state of the RadioGroup is changed.

## `CupertinoRadio` properties

### `active_color`

The [color](/docs/reference/colors) used to fill this radio when it is selected.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `fill_color`

The [color](/docs/reference/colors) that fills the radio.

### `focus_color`

The [color](/docs/reference/colors) for the radio's border when it has the input focus.

### `inactive_color`

The [color](/docs/reference/colors) used to fill this radio when it is not selected. Default value is white.

### `label`

The clickable label to display on the right of a Radio.

### `label_position`

Property value is [`LabelPosition`](/docs/reference/types/labelposition) enum. The default value is `RIGHT`.

### `toggleable`

Set to `True` if this radio button is allowed to be returned to an indeterminate state by selecting it again when
selected.

Defaults to `False`.

### `use_checkmark_style`

Defines whether the radio displays in a checkbox style or the default radio style. Defaults to `False`.

### `value`

The value to set to containing `RadioGroup` when the radio is selected.

## `CupertinoRadio` events

### `on_blur`

Fires when the control has lost focus.

### `on_focus`

Fires when the control has received focus.