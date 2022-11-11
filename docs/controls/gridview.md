---
title: GridView
sidebar_label: GridView
slug: gridview
---

A scrollable, 2D array of controls.

:::info
GridView is very effective for large lists (thousands of items). Prefer it over wrapping [`Column`](column) or [`Row`](row) for smooth scrolling. See [Flet Icons Browser](https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py) for GridView usage example.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Photo gallery

<img src="/img/docs/controls/gridview/photo-gallery.png" className="screenshot-50"/>

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "GridView Example"
    page.theme_mode = "dark"
    page.padding = 50
    page.update()

    images = ft.GridView(
        expand=1,
        runs_count=5,
        max_extent=150,
        child_aspect_ratio=1.0,
        spacing=5,
        run_spacing = 5,
    )

    page.add(images)

    for i in range(0, 60):
        images.controls.append(
            ft.Image(
                src=f"https://picsum.photos/150/150?{i}",
                fit="none",
                repeat="noRepeat",
                border_radius=ft.border_radius.all(10),
            )
        )
    page.update()

ft.app(target=main, view=ft.WEB_BROWSER)
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