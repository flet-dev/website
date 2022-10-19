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
import flet
from flet import ElevatedButton, Switch, Text

def main(page):
    def button_clicked(e):
        t.value = (
            f"Switch values are:  {c1.value}, {c2.value}, {c3.value}, {c4.value}."
        )
        page.update()

    t = Text()
    c1 = Switch(label="Unchecked switch", value=False)
    c2 = Switch(label="Checked switch", value=True)
    c3 = Switch(label="Disabled switch", disabled=True)
    c4 = Switch(
        label="Switch with rendered label_position='left'", label_position="left"
    )
    b = ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(c1, c2, c3, c4, b, t)

flet.app(target=main, view=flet.WEB_BROWSER)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/basic-switch.gif"/>

### Switch with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, Switch

def main(page: Page):

  def theme_changed(e):
    page.theme_mode = "dark" if page.theme_mode == "light" else "light"
    c.label = "Light theme" if page.theme_mode == "light" else "Dark theme"
    page.update()

  page.theme_mode = "light"
  c = Switch(label="Light theme", on_change=theme_changed)
  page.add(c)

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/switch/switch-with-change-event.gif"/>

## Properties

### `value`

Current value of the Switch.

### `label`

The clickable label to display on the right of the Switch.

### `label_position`

Set to `left` if `label` should be displayed on the left side of the Switch; otherwise `right` (default).

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

## Events

### `on_change`

Fires when the state of the Switch is changed.

### `on_focus`

Fires when the control has received focus.

### `on_blur`

Fires when the control has lost focus.