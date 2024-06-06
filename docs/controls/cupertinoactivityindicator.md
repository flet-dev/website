---
title: CupertinoActivityIndicator
sidebar_label: CupertinoActivityIndicator
---

An iOS-style activity indicator that spins clockwise.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/cupertinoactivityindicator)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page):
    page.theme_mode = ft.ThemeMode.LIGHT

    page.add(
        ft.CupertinoActivityIndicator(
            radius=50,
            color=ft.colors.RED,
            animating=True,
        )
    )

ft.app(target=main)
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/cupertino-activity-indicator/basic-cupertino-activity-indicator.png" className="screenshot-40"/>

## Properties

### `animating`

Whether the activity indicator is running its animation.

### `color`

Defines the [color](/docs/reference/colors) of the activity indicator.

### `radius`

The radius of the activity indicator.
