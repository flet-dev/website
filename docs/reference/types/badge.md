---
title: Badge
sidebar_label: Badge
---

A Material Design "badge".

Badges are used to show notifications, counts, or status information about its control, typically an icon that is a part of a NavigationBar or a NavigationRail destination or a button's icon.

The information is shown as [`text`](/docs/reference/types/badge#text) on a badge's label. If the `text` is not provided, the badge is shown as a filled circle of [`small_size`](/docs/reference/types/badge#small_size) diameter.

If `text` is provided, the label is a StadiumBorder shaped badge with height equal to [`large_size`](#large_size).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/badge)

### Badge decorating an icon on a NavigationBar

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.title = "Badge example"

    page.navigation_bar = ft.NavigationBar(
        destinations=[
            ft.NavigationBarDestination(
                icon_content=ft.Icon(
                    ft.Icons.EXPLORE,
                    badge=ft.Badge(small_size=10),
                ),
                label="Explore",
            ),
            ft.NavigationBarDestination(
                icon=ft.Icons.COMMUTE,
                label="Commute",
            ),
            ft.NavigationBarDestination(
                icon_content=ft.Icon(
                    ft.Icons.PHONE,
                    badge="10",
                )
            ),
        ]
    )
    page.add(ft.Text("Body!"))


ft.app(main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/badge/badge-navigation-bar.png" className="screenshot-50" />

## Properties

### `alignment`

Aligns the label relative to the content of the badge.

The alignment positions the label in similar way content of a container is positioned using its [`alignment`](/docs/controls/container#alignment), except that the badge alignment is resolved as if the label was a [`large_size`](#large_size) square and `offset` is added to the result.

This value is only used if `text` property is provided.

For example:

```python
badge.alignment = ft.alignment.top_left
```

Value is of type [`Alignment`](/docs/reference/types/alignment).

### `bgcolor`

Background [color](/docs/reference/colors) of the label.

### `label_visible`

If `False`, the `label` is not displayed. By default, `label_visible` is True. It can be used to create a badge only shown under certain conditions.

Value is of type `bool`.

### `large_size`

The badge's label height if `text` is provided.

If the default value is overridden then it may be useful to also override `padding` and `alignment`.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber)  and defaults to `16`. 

### `offset`

Combined with `alignment` to determine the location of the label relative to the content.

Has effect only used if `text` is also provided.

Value is of type [`OffsetValue`](/docs/reference/types/aliases#offsetvalue).

### `padding`

The padding added to the badge's label.

This value is only used if `text` is provided. Defaults to 4 pixels on the left and right.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue).

### `small_size`

The badge's label diameter if `text` is not provided.

Vaue is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `6`.

### `text`

The text shown on badge's label, typically 1 to 4 characters.

If the text is not provided, the badge is shown as a filled circle of [`small_size`](#small_size) diameter. 

If `text` is provided, the label is a StadiumBorder shaped badge with height equal to [`large_size`](#large_size).

Value is of type `str`.

### `text_color`

[Color](/docs/reference/colors) of the text shown in the label. This color overrides the color of the label's `text_style`.

### `text_style`

The text style to use for text in the label.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).