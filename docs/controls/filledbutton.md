---
title: FilledButton
sidebar_label: FilledButton
slug: filledbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Filled buttons have the most visual impact after the [FloatingActionButton](floatingactionbutton), and should be used for important, final actions that complete a flow, like **Save**, **Join now**, or **Confirm**. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

<img src="/img/docs/controls/button/filled-button.png" width="40%" />

## Examples

### Filled button

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import FilledButton, Page


def main(page: Page):
    page.title = "Basic filled buttons"
    page.add(
        FilledButton(text="Filled button"),
        FilledButton("Disabled button", disabled=True),
        FilledButton("Button with icon", icon="add"),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/button/filled-buttons.png" width="40%" />

## Properties

### `text`

The text displayed on a button.

### `icon`

Icon shown in the button.

### `icon_color`

Icon color.

### `style`

See [ElevatedButton.style](elevatedbutton#style) for more information about this property.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `content`

A Control representing custom button content.

## Events

### `on_click`

Fires when a user clicks the button.

### `on_long_press`

Fires when the button is long-pressed.

### `on_hover`

Fires when a mouse pointer enters or exists the button response area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.