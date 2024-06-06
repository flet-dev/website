---
title: NavigationDrawer
sidebar_label: NavigationDrawer
---

Material Design Navigation Drawer component.

Navigation Drawer is a panel that slides in horizontally from the left or right edge of a page to show primary destinations in an app. To add NavigationDrawer to the page, use [`page.drawer`](/docs/controls/page#drawer) and [`page.end_drawer`](/docs/controls/page#end_drawer) properties. Similarly, the NavigationDrawer can be added to a [`View`](/docs/controls/view#drawer). To display the drawer, set its `open` property to `True`.

To open this control, simply call the [`page.open()`](/docs/controls/page#opencontrol) helper-method.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/navigation/navigationdrawer)

### NavigationDrawer sliding from the left edge of a page

<img src="/img/docs/controls/navigationdrawer/navigation-drawer-start.gif" className="screenshot-60"/>

```python
import flet as ft


def main(page: ft.Page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_dismissal(e):
        page.add(ft.Text("Drawer dismissed"))

    def handle_change(e):
        page.add(ft.Text(f"Selected Index changed: {e.selected_index}"))
        # page.close(drawer)

    drawer = ft.NavigationDrawer(
        on_dismiss=handle_dismissal,
        on_change=handle_change,
        controls=[
            ft.Container(height=12),
            ft.NavigationDrawerDestination(
                label="Item 1",
                icon=ft.icons.DOOR_BACK_DOOR_OUTLINED,
                selected_icon_content=ft.Icon(ft.icons.DOOR_BACK_DOOR),
            ),
            ft.Divider(thickness=2),
            ft.NavigationDrawerDestination(
                icon_content=ft.Icon(ft.icons.MAIL_OUTLINED),
                label="Item 2",
                selected_icon=ft.icons.MAIL,
            ),
            ft.NavigationDrawerDestination(
                icon_content=ft.Icon(ft.icons.PHONE_OUTLINED),
                label="Item 3",
                selected_icon=ft.icons.PHONE,
            ),
        ],
    )

    page.add(ft.ElevatedButton("Show drawer", on_click=lambda e: page.open(drawer)))


ft.app(main)
```

### NavigationDrawer sliding from the right edge of a page

<img src="/img/docs/controls/navigationdrawer/navigation-drawer-end.gif" className="screenshot-60"/>

```python
import flet as ft


def main(page: ft.Page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_dismissal(e):
        page.add(ft.Text("End drawer dismissed"))

    def handle_change(e):
        page.add(ft.Text(f"Selected Index changed: {e.control.selected_index}"))
        # page.close(end_drawer)

    end_drawer = ft.NavigationDrawer(
        position=ft.NavigationDrawerPosition.END,
        on_dismiss=handle_dismissal,
        on_change=handle_change,
        controls=[
            ft.NavigationDrawerDestination(icon=ft.icons.ADD_TO_HOME_SCREEN_SHARP, label="Item 1"),
            ft.NavigationDrawerDestination(icon=ft.icons.ADD_COMMENT, label="Item 2"),
        ],
    )

    page.add(ft.ElevatedButton("Show end drawer", on_click=lambda e: page.open(end_drawer)))


ft.app(main)
```

## `NavigationDrawer` properties

### `bgcolor`

The [color](/docs/reference/colors) of the navigation drawer itself.

### `controls`

Defines the appearance of the items within the navigation drawer.

The list contains `NavigationDrawerDestination` items and/or other controls such as headlines and dividers.

### `elevation`

The elevation of the navigation drawer itself.

### `indicator_color`

The [color](/docs/reference/colors) of the selected destination indicator.

### `indicator_shape`

The shape of the selected destination indicator.

Value is of type [`OutlinedBorder`](/docs/reference/types/outlinedborder).

### `position`

The position of this drawer.

Value is of type [`NavigationDrawerPosition`](/docs/reference/types/navigationdrawerposition) and defaults
to `NavigationDrawerPosition.START`.

### `selected_index`

The index for the current selected `NavigationDrawerDestination` or null if no destination is selected.

A valid selected_index is an integer between 0 and number of destinations - `1`. For an invalid `selected_index`, for
example, `-1`, all destinations will appear unselected.

### `shadow_color`

The [color](/docs/reference/colors) used for the drop shadow to indicate `elevation`.

### `surface_tint_color`

The surface tint of the Material that holds the NavigationDrawer's contents.

### `tile_padding`

Defines the padding for `NavigationDrawerDestination` controls.

## `NavigationDrawer` events

### `on_change`

Fires when selected destination changed.

### `on_dismiss`

Fires when drawer is dismissed by clicking outside of the panel or [programmatically](/docs/controls/page#closecontrol).

## `NavigationDrawerDestination` properties

### `bgcolor`

The [color](/docs/reference/colors) of this destination.

### `icon`

The name of the icon of the destination.

### `icon_content`

The icon `Control` of the destination. Typically the icon is an [`Icon`](/docs/controls/icon) control. Used instead of `icon` property.

If `selected_icon_content` is provided, this will only be displayed when the destination is not selected.

To make the NavigationDrawer more accessible, consider choosing an icon with a stroked and filled version, such as `icons.CLOUD` and `icons.CLOUD_QUEUE`. The icon should be set to the stroked version and `selected_icon` to the filled version.

### `label`

The text label that appears below the icon of this `NavigationDrawerDestination`.

### `selected_icon`

The name of alternative icon displayed when this destination is selected.

### `selected_icon_content`

An alternative icon `Control` displayed when this destination is selected.

If this icon is not provided, the NavigationDrawer will display `icon_content` in either state.