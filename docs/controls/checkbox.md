---
title: Checkbox
sidebar_label: Checkbox
slug: checkbox
---

Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic checkboxes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Checkbox, ElevatedButton, Text

def main(page):
    def button_clicked(e):
        t.value = (
            f"Checkboxes values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}, {c5.value}."
        )
        page.update()

    t = Text()
    c1 = Checkbox(label="Unchecked by default checkbox", value=False)
    c2 = Checkbox(label="Undefined by default tristate checkbox", tristate=True)
    c3 = Checkbox(label="Checked by default checkbox", value=True)
    c4 = Checkbox(label="Disabled checkbox", disabled=True)
    c5 = Checkbox(
        label="Checkbox with rendered label_position='left'", label_position="left"
    )
    b = ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(c1, c2, c3, c4, c5, b, t)

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/basic-checkbox.gif"/>

### Checkbox with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Checkbox, ElevatedButton, Text

def main(page):
  def checkbox_changed(e):
    t.value = f"Checkbox value changed to {c.value}" 
    t.update()

  c = Checkbox(label="Checkbox with 'change' event", on_change=checkbox_changed)
  t = Text()

  page.add(c, t)

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/checkbox/checkbox-with-change-event.gif"/>

## Properties

### `value`

Current value of the checkbox.

### `tristate`

If `True` the checkbox's value can be `True`, `False`, or `None` (`null`).

Checkbox displays a dash when its value is null.

### `label`

The clickable label to display on the right of a checkbox.

### `label_position`

Set to `left` if `label` should be displayed on the left side of the checkbox; otherwise `right` (default).

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `check_color`

The color to use for the check icon when this checkbox is checked.

### `fill_color`

The color that fills the checkbox, in all Material states:

* `hovered`
* `focused`
* `pressed`
* `dragged`
* `selected`
* `scrolledUnder`
* `disabled`
* `error`
* `""` (empty string) - fallback state, meaning "all other states".

To configure checkbox fill color for all Material states set `fill_color` value to a literal, for example:

```python
chk.fill_color=colors.GREEN
```

To configure fill color for specific Material states set its value to a dictionary where the key is state name. For example, to configure different fill colors for `hovered` and `focused` states and another color for all other states:

```python
chk.fill_color={
    "hovered": colors.GREEN,
    "focused": colors.RED,
    "": colors.BLACK,
}
```

## Events

### `on_change`

Fires when the state of the Checkbox is changed.

### `on_focus`

Fires when the control has received focus.

### `on_blur`

Fires when the control has lost focus.