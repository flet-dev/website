---
title: Icon
sidebar_label: Icon
slug: icon
---

Displays a Material icon.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Icons browser](https://flet-icons-browser.fly.dev/#/)

## Examples

### Icons with different colors and sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Icon, Page, Row, colors, icons

def main(page: Page):
    page.add(
        Row(
            [
                Icon(name=icons.FAVORITE, color=colors.PINK),
                Icon(name=icons.AUDIOTRACK, color=colors.GREEN_400, size=30),
                Icon(name=icons.BEACH_ACCESS, color=colors.BLUE, size=50),
                Icon(name="settings", color="#c1c1c1"),
            ]
        )
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

## Properties

### `name`

The name of the icon. You can search through the list of all available icons using open-source [Icons browser](https://flet-icons-browser.fly.dev/#/) app [written in Flet](https://github.com/flet-dev/examples/tree/main/python/icons-browser).

### `color`

Icon color.

### `size`

Icon size. Default is 24.

### `tooltip`

The text displayed when hovering a mouse over the Icon.