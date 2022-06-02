---
title: GridView
sidebar_label: GridView
slug: gridview
---

A scrollable, 2D array of controls.

:::info
GridView is very effective for large lists (thousands of items). Prefer it over wrapping [`Column`](column) or [`Row`](row) for smooth scrolling. See [Flet Icons Browser](https://github.com/flet-dev/examples/blob/main/python/icons-browser/main.py) for GridView usage example.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Photo gallery

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Image, Page, GridView, border_radius

def main(page: Page):
    page.title = "GridView Example"
    page.theme_mode = "dark"
    page.padding = 50
    page.update()

    images = GridView(
        expand=1,
        runs_count=5,
        max_extent=150,
        child_aspect_ratio=1.0,
        spacing=5,
        run_spacing=5,
    )

    page.add(images)

    for i in range(0, 60):
        images.controls.append(
            Image(
                src=f"https://picsum.photos/150/150?{i}",
                fit="none",
                repeat="noRepeat",
                border_radius=border_radius.all(10),
            )
        )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)
```
  </TabItem>
</Tabs>

## Properties

### `controls`

A list of `Control`s to display inside GridView.

### `horizontal`

`True` to layout GridView items horizontally.

### `runs_count`

The number of children in the cross axis.

### `max_extent`

### `spacing`

The number of logical pixels between each child along the main axis.

### `run_spacing`

The number of logical pixels between each child along the cross axis.

### `child_aspect_ratio`

The ratio of the cross-axis to the main-axis extent of each child.

### `padding`

The amount of space by which to inset the children.

See [`Container.padding`](container#padding) property for more information and possible values.