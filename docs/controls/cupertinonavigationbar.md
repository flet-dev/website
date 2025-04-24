---
title: CupertinoNavigationBar
sidebar_label: CupertinoNavigationBar
---

An iOS-styled bottom navigation tab bar.

Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/cupertinonavigationbar)

### A simple CupertinoNavigationBar

<img src="/img/docs/controls/cupertino-navigation-bar/cupertino-navbar.png" className="screenshot-40"/>

```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-navigation/cupertino-navigation-bar-example.py
```

## Properties

### `active_color`

The foreground [color](/docs/reference/colors) of the icon and title of the selected destination.

### `bgcolor`

The [color](/docs/reference/colors) of the navigation bar itself.

### `border`

Defines the border of this navigation bar. The value is an instance of [`Border`](/docs/reference/types/border) class.

### `destinations`

Defines the appearance of the button items that are arrayed within the navigation bar.

The value must be a list of two or
more [`NavigationBarDestination`](/docs/controls/navigationbar#navigationbardestination-properties) instances.

### `icon_size`

The size of all destination icons.

Defaults to `30`.

### `inactive_color`

The foreground [color](/docs/reference/colors) of the icon and title of the unselected destinations.

### `selected_index`

The index into `destinations` for the current selected `NavigationBarDestination` or `None` if no destination is selected.

## Events

### `on_change`

Fires when selected destination changed.
