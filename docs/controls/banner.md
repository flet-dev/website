---
title: Banner
sidebar_label: Banner
slug: banner
---

A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). A user action is required for it to be dismissed.

Banners are displayed at the top of the screen, below a top app bar. They are persistent and non-modal, allowing the user to either ignore them or interact with them at any time.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Banner with leading icon and actions

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Banner, ElevatedButton, Icon, Text, TextButton, colors, icons

def main(page):
    def close_banner(e):
        page.banner.open = False
        page.update()

    page.banner = Banner(
        bgcolor=colors.AMBER_100,
        leading=Icon(icons.WARNING_AMBER_ROUNDED, color=colors.AMBER, size=40),
        content=Text(
            "Oops, there were some errors while trying to delete the file. What would you like me to do?"
        ),
        actions=[
            TextButton("Retry", on_click=close_banner),
            TextButton("Ignore", on_click=close_banner),
            TextButton("Cancel", on_click=close_banner),
        ],
    )

    def show_banner_click(e):
        page.banner.open = True
        page.update()

    page.add(ElevatedButton("Show Banner", on_click=show_banner_click))

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/banner/banner-with-custom-content.gif"/>

## Properties

### `open`

Set to `True` to display a banner.

### `leading`

The (optional) leading `Control` of the Banner.

Typically an [`Icon`](icon) control.

### `leading_padding`

The amount of space by which to inset the leading control. This defaults to 16 virtual pixels. See [`Container.padding`](container#padding) for more information about padding and possible values.

### `content`

The content of the Banner. Typically a [`Text`](text) control.

### `content_padding`

The amount of space by which to inset the content.

If the actions are below the content, this defaults to `padding.only(left=16.0, top=24.0, right=16.0, bottom=4.0)`.

If the actions are trailing the content, this defaults to `padding.only(left=16.0, top=2.0)`.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `actions`

The set of actions that are displayed at the bottom or trailing side of the Banner.

Typically this is a list of [`TextButton`](textbutton) controls.

### `force_actions_below`

An override to force the actions to be below the content regardless of how many there are.

If this is `True`, the actions will be placed below the content. If this is `False`, the actions will be placed on the trailing side of the content if actions's length is 1 and below the content if greater than 1.

Defaults to `False`.

### `bgcolor`

The color of the surface of this Banner.