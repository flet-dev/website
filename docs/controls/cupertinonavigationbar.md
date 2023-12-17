---
title: CupertinoNavigationBar
sidebar_label: CupertinoNavigationBar
slug: cupertinonavigationbar
---

An iOS-styled bottom navigation tab bar.

Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/cupertinonavigationbar)

### A simple CupertinoNavigationBar

<img src="/img/docs/controls/cupertino-navigation-bar/cupertino-navigation-bar-sample.png" className="screenshot-40"/>

```python
import flet as ft

def main(page: ft.Page):
    page.title = "CupertinoNavigationBar Example"
    page.navigation_bar = ft.CupertinoNavigationBar(
        bgcolor=ft.colors.AMBER_100,
        inactive_color=ft.colors.GREY,
        active_color=ft.colors.BLACK,
        on_change=lambda e: print("Selected tab:", e.control.selected_index),
        destinations=[
            ft.NavigationDestination(icon=ft.icons.EXPLORE, label="Explore"),
            ft.NavigationDestination(icon=ft.icons.COMMUTE, label="Commute"),
            ft.NavigationDestination(
                icon=ft.icons.BOOKMARK_BORDER,
                selected_icon=ft.icons.BOOKMARK,
                label="Explore",
            ),
        ]
    )
    page.add(ft.SafeArea(ft.Text("Body!")))


ft.app(target=main)

```

## Properties

### `active_color`

The foreground [color](/docs/guides/python/colors) of the icon and title of the selected destination.

### `bgcolor`

The [color](/docs/guides/python/colors) of the CupertinoNavigationBar itself.

### `border`

A border to draw above the background color.

Each side of the container border is described by an instance of `border.BorderSide` class with two properties: `width` (number) and `color` (string). The value of `border` property is an instance of `border.Border` class describing all 4 sides of the rectangle. Helper methods available to set border styles:

* `border.all(width, color)`
* `border.symmetric(vertical: BorderSide, horizontal: BorderSide)`
* `border.only(left: BorderSide, top: BorderSide, right: BorderSide, bottom: BorderSide)`.

For example:

```python
container_1.border = ft.border.all(10, ft.colors.PINK_600)
container_1.border = ft.border.only(bottom=ft.border.BorderSide(1, "black"))
```

### `destinations`

Defines the appearance of the button items that are arrayed within the navigation bar.

The value must be a list of two or more `NavigationDestination` instances.

### `icon_size`

The size of all destination icons. Defaults to `30`.

### `inactive_color`

The foreground [color](/docs/guides/python/colors) of the icon and title of the unselected destinations.

### `selected_index`

The index into `destinations` for the current selected `NavigationDestination` or `None` if no destination is selected.

## Events

### `on_change`

Fires when selected destination changed.
