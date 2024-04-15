---
title: CupertinoSlidingSegmentedButton
sidebar_label: CupertinoSlidingSegmentedButton
---

An iOS-13 style segmented control.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinoslidingsegmentedbutton)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.theme_mode = ft.ThemeMode.LIGHT

    page.add(
        ft.CupertinoSlidingSegmentedButton(
            selected_index=1,
            thumb_color=ft.colors.BLUE_400,
            on_change=lambda e: print(f"selected_index: {e.data}"),
            padding=ft.padding.symmetric(0, 10),
            controls=[
                ft.Text("One"),
                ft.Text("Two"),
                ft.Text("Three"),
            ],
        ),
    )

ft.app(main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-sliding-segmented-button/basic-cupertino-sliding-segmented-button.gif" className="screenshot-40"/>

## Properties

### `bgcolor`

The background [color](/docs/reference/colors) of the button.

### `controls`

A list of `Control`s to display as segments inside the CupertinoSegmentedButton. Must have at least 2 items.

### `padding`

The button's padding. Padding value is an instance of [`padding.Padding`](/docs/reference/types/padding) class.

### `selected_index`

The index (starting from 0) of the selected segment in the `controls` list. 

### `thumb_color`

The [color](/docs/reference/colors) of the button when it is not selected.


## Events

### `on_change`

Fires when the state of the button is changed - when one of the `controls` is clicked.