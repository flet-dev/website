---
title: AppBar
sidebar_label: AppBar
slug: appbar
---

A material design app bar.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### AppBar

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    AppBar,
    Icon,
    IconButton,
    Page,
    PopupMenuButton,
    PopupMenuItem,
    Text,
    colors,
    icons,
)

def main(page: Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    page.appbar = AppBar(
        leading=Icon(icons.PALETTE),
        leading_width=40,
        title=Text("AppBar Example"),
        center_title=False,
        bgcolor=colors.SURFACE_VARIANT,
        actions=[
            IconButton(icons.WB_SUNNY_OUTLINED),
            IconButton(icons.FILTER_3),
            PopupMenuButton(
                items=[
                    PopupMenuItem(text="Item 1"),
                    PopupMenuItem(),  # divider
                    PopupMenuItem(
                        text="Checked item", checked=False, on_click=check_item_clicked
                    ),
                ]
            ),
        ],
    )
    page.add(Text("Body!"))

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `leading`

A `Control` to display before the toolbar's title.

Typically the leading control is an [`Icon`](icon) or an [`IconButton`](iconbutton).

### `leading_width`

Defines the width of leading control. By default, the value of `leading_width` is `56.0`.

### `title`

The primary `Control` displayed in the app bar. Typically a [`Text`](text) control that contains a description of the current contents of the app.

### `center_title`

Whether the title should be centered. Default is `False`.

### `actions`

A list of `Control`s to display in a row after the title control.

Typically these controls are [`IconButtons`](iconbutton) representing common operations. For less common operations, consider using a [`PopupMenuButton`](popupmenubutton) as the last action.

### `toolbar_height`

Defines the height of the toolbar component of an AppBar. By default, the value of `toolbar_height` is `56.0`.

### `color`

The default color for Text and Icons within the app bar. Default color is defined by current theme.

### `bgcolor`

The fill color to use for an AppBar. Default color is defined by current theme.

### `elevation`

This property controls the size of the shadow below the app bar. Default value is 4.

### `automatically_imply_leading`

Controls whether we should try to imply the leading widget if null.

If `True` and `leading` is null, automatically try to deduce what the leading widget should be. If `False` and `leading` is null, leading space is given to title. If leading widget is not null, this parameter has no effect.