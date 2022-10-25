---
title: FilledTonalButton
sidebar_label: FilledTonalButton
slug: filledtonalbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A filled tonal button is an alternative middle ground between [FilledButton](filledbutton) and [OutlinedButton](outlinedbutton) buttons. They’re useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as "Next" in an onboarding flow. Tonal buttons use the secondary color mapping. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

## Examples

### Filled tonal button

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import FilledTonalButton, Page


def main(page: Page):
    page.title = "Basic filled buttons"
    page.add(
        FilledTonalButton(text="Filled tonal button"),
        FilledTonalButton("Disabled button", disabled=True),
        FilledTonalButton("Button with icon", icon="add"),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

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