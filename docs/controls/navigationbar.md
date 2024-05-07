---
title: NavigationBar
sidebar_label: NavigationBar
---

Material 3 Navigation Bar component.

Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/navigationbar)

### A simple NavigationBar

<img src="/img/docs/controls/navigation-bar/navigation-bar-sample.gif" className="screenshot-40"/>

```python
import flet as ft

def main(page: ft.Page):

    page.title = "NavigationBar Example"
    page.navigation_bar = ft.NavigationBar(
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
    page.add(ft.Text("Body!"))

ft.app(target=main)
```

## `NavigationBar` properties

### `adaptive`

If the value is `True`, an adaptive `NavigationBar` is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a `CupertinoNavigationBar` is created, which has matching functionality and presentation as `NavigationBar`, and the graphics as expected on iOS. On other platforms, a Material `NavigationBar` is created.

The default value is `False`.

### `animation_duration`

The transition time for each destination as it goes between selected and unselected.

### `bgcolor`

The [color](/docs/reference/colors) of the NavigationBar itself.

### `destinations`

Defines the appearance of the button items that are arrayed within the navigation bar.

The value must be a list of two or more `NavigationDestination` instances.

### `elevation`

The elevation of the NavigationBar itself.

### `indicator_color`

The [color](/docs/reference/colors) of the selected destination indicator.

### `indicator_shape`

The shape of the selected destination indicator. The value is an instance of [`OutlinedBorder`](/docs/reference/types/outlinedborder) class.

### `label_behavior`

Defines how the destinations' labels will be laid out and when they'll be displayed.

Can be used to show all labels, show only the selected label, or hide all labels.

Property value is `NavigationBarLabelBehavior` enum with the following values:

* `ALWAYS_SHOW` (default) - Always shows all of the labels under each navigation bar destination, selected and unselected.
* `ALWAYS_HIDE` - Never shows any of the labels under the navigation bar destinations, regardless of selected vs unselected.
* `ONLY_SHOW_SELECTED` - Only shows the labels of the selected navigation bar destination. When a destination is unselected, the label will be faded out, and the icon will be centered. When a destination is selected, the label will fade in and the label and icon will slide up so that they are both centered.

### `overlay_color`

The highlight [color](/docs/reference/colors) of the `NavigationDestination` in various [`MaterialState`](/docs/reference/types/materialstate) states. The
following [`MaterialState`](/docs/reference/types/materialstate) values are supported: `PRESSED`, `HOVERED` and `FOCUSED`.

### `selected_index`

The index into `destinations` for the current selected `NavigationDestination` or `None` if no destination is selected.

### `shadow_color`

The [color](/docs/reference/colors) used for the drop shadow to indicate `elevation`.

### `surface_tint_color`

The surface tint of the Material that holds the NavigationDrawer's contents.

## `NavigationBar` events

### `on_change`

Fires when selected destination changed.

## `NavigationDestination` properties

### `bgcolor`

The [color](/docs/reference/colors) of this destination.

### `icon`

The name of the icon of the destination.

### `icon_content`

The icon `Control` of the destination. Typically the icon is an [`Icon`](/docs/controls/icon) control. Used instead of `icon` property.

If `selected_icon_content` is provided, this will only be displayed when the destination is not selected.

To make the NavigationBar more accessible, consider choosing an icon with a stroked and filled version, such as `icons.CLOUD` and `icons.CLOUD_QUEUE`. The icon should be set to the stroked version and `selected_icon` to the filled version.

### `label`

The text label that appears below the icon of this `NavigationDestination`.

### `selected_icon`

The name of alternative icon displayed when this destination is selected.

### `selected_icon_content`

An alternative icon `Control` displayed when this destination is selected.

If this icon is not provided, the NavigationBar will display `icon_content` in either state.