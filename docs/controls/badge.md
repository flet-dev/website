---
title: Badge
sidebar_label: Badge
slug: badge
---

A Material Design "badge".

Badges are used to show notifications, counts, or status information on navigation items such as NavigationBar or NavigationRail destinations or a button's icon.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/displays/badge)

### Icons of different colors and sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Badges for NavigationBar destinations"
    page.navigation_bar = ft.NavigationBar(
        destinations=[
            ft.NavigationDestination(
                icon_content=ft.Badge(
                    content=ft.Icon(ft.icons.EXPLORE),
                    small_size=10,
                ),
                label="Explore",
            ),
            ft.NavigationDestination(icon=ft.icons.COMMUTE, label="Commute"),
            ft.NavigationDestination(
                icon_content=ft.Badge(content=ft.Icon(ft.icons.PHONE), text="10")
            ),
        ]
    )
    page.add(ft.Text("Body!"))


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/badge/badge-navigation-bar.png" className="screenshot-50" />

## Properties

### `color`

Icon [color](/docs/guides/python/colors).

### `name`

The name of the icon. You can search through the list of all available icons using open-source [Icons browser](https://gallery.flet.dev/icons-browser/) app [written in Flet](https://github.com/flet-dev/examples/blob/main/python/apps/icons-browser/main.py).

### `size`

Icon size. Default is 24.

### `tooltip`

The text displayed when hovering a mouse over the Icon.