---
title: ListView
sidebar_label: ListView
slug: listview
---

A scrollable list of controls arranged linearly.

ListView is the most commonly used scrolling control. It displays its children one after another in the scroll direction. In the cross axis, the children are required to fill the ListView.

:::info
ListView is very effective for large lists (thousands of items). Prefer it over [`Column`](column) or [`Row`](row) for smooth scrolling.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Auto-scrolling ListView

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from time import sleep
import flet as ft

def main(page: ft.Page):
    page.title = "Auto-scrolling ListView"

    lv = ft.ListView(expand=1, spacing = 10, padding = 20, auto_scroll=True)

    count = 1

    for i in range(0, 60):
        lv.controls.append(ft.Text(f"Line {count}"))
        count += 1

    page.add(lv)

    for i in range(0, 60):
        sleep(1)
        lv.controls.append(ft.Text(f"Line {count}"))
        count += 1
        page.update()

ft.app(target = main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/listview/custom-listview.gif" className="screenshot-40"/>

## Properties

### `controls`

A list of `Control`s to display inside ListView.

### `horizontal`

`True` to layout ListView items horizontally.

### `spacing`

The height of Divider between ListView items. No spacing between items if not specified.

### `divider_thickness`

If greater than `0` then Divider is used as a spacing between ListView items.

### `padding`

The amount of space by which to inset the children.

See [`Container.padding`](container#padding) property for more information and possible values.

### `auto_scroll`

`True` if scrollbar should automatically move its position to the end when children update.

### `item_extent`

A fixed height or width (for `horizontal` ListView) of an item to optimize rendering.

### `first_item_prototype`

`True` if the dimensions of the first item should be used as a "prototype" for all other items, i.e. their height or width will be the same as the first item. Default is `False`.