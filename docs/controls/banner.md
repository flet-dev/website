---
title: Banner
sidebar_label: Banner
---

A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). A user action is required for it to be dismissed.

Banners are displayed at the top of the screen, below a top app bar. They are persistent and non-modal, allowing the user to either ignore them or interact with them at any time.

To open this control, simply call the [`page.open()`](/docs/controls/page#open) helper-method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/dialogs/banner)

### Banner with leading icon and actions

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def close_banner(e):
        page.close(banner)
        page.add(ft.Text("Action clicked: " + e.control.text))

    action_button_style = ft.ButtonStyle(color=ft.colors.BLUE)
    banner = ft.Banner(
        bgcolor=ft.colors.AMBER_100,
        leading=ft.Icon(ft.icons.WARNING_AMBER_ROUNDED, color=ft.colors.AMBER, size=40),
        content=ft.Text(
            value="Oops, there were some errors while trying to delete the file. What would you like me to do?",
            color=ft.colors.BLACK,
        ),
        actions=[
            ft.TextButton(text="Retry", style=action_button_style, on_click=close_banner),
            ft.TextButton(text="Ignore", style=action_button_style, on_click=close_banner),
            ft.TextButton(text="Cancel", style=action_button_style, on_click=close_banner),
        ],
    )

    page.add(ft.ElevatedButton("Show Banner", on_click=lambda e: page.open(banner)))


ft.app(main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/banner/banner-with-custom-content.gif" className="screenshot-40"/>

## Properties

### `actions`

The set of actions that are displayed at the bottom or trailing side of the Banner.

Typically this is a list of [`TextButton`](/docs/controls/textbutton) controls.

### `bgcolor`

The [color](/docs/reference/colors) of the surface of this Banner.

### `content`

The content of the Banner. Typically a [`Text`](/docs/controls/text) control.

### `content_padding`

The amount of space by which to inset the content.

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

If the actions are below the content, this defaults to `padding.only(left=16.0, top=24.0, right=16.0, bottom=4.0)`.

If the actions are trailing the content, this defaults to `padding.only(left=16.0, top=2.0)`.

### `content_text_style`

The style to be used for the `Text` controls in the `content`. Value is an instance of
type [`TextStyle`](/docs/reference/types/textstyle).

### `divider_color`

The [color](/docs/reference/colors) of the divider.

### `elevation`

The elevation of the banner.

### `force_actions_below`

An override to force the actions to be below the content regardless of how many there are.

If this is `True`, the actions will be placed below the content. If this is `False`, the actions will be placed on the trailing side of the content if actions's length is 1 and below the content if greater than 1.

Defaults to `False`.

### `leading`

The (optional) leading `Control` of the Banner.

Typically an [`Icon`](/docs/controls/icon) control.

### `leading_padding`

The amount of space by which to inset the leading control. 

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

Defaults to 16 virtual pixels.

### `margin`

The amount of space surrounding the banner. 

The value is an instance of [`margin.Margin`](/docs/reference/types/margin) class or a number.

### `open`

Set to `True` to display a banner.

### `shadow_color`

The [color](/docs/reference/colors) of the shadow below the banner.

### `surface_tint_color`

The [color](/docs/reference/colors) used as an overlay on `bgcolor` to indicate elevation.

## Events

### `on_visible`

Fires when the banner is shown or made visible for the first time.