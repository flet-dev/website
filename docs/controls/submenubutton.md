---
title: SubmenuButton
sidebar_label: SubmenuButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A menu button that displays a cascading menu.

It can be used as part of a [MenuBar](/docs/controls/menubar), or as a standalone control.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/submenubutton)

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.padding = 0
    page.spacing = 0

    bg_container = ft.Ref[ft.Container]()

    def handle_color_click(e):
        color = e.control.content.value
        print(f"{color}.on_click")
        bg_container.current.content.value = f"{color} background color"
        bg_container.current.bgcolor = color.lower()
        page.update()

    def handle_on_hover(e):
        print(f"{e.control.content.value}.on_hover")

    menubar = ft.MenuBar(
        expand=True,
        controls=[
            ft.SubmenuButton(
                content=ft.Text("BgColors"),
                controls=[
                    ft.SubmenuButton(
                        content=ft.Text("B"),
                        leading=ft.Icon(ft.icons.COLORIZE),
                        controls=[
                            ft.MenuItemButton(
                                content=ft.Text("Blue"),
                                style=ft.ButtonStyle(bgcolor={ft.MaterialState.HOVERED: ft.colors.BLUE}),
                                on_click=handle_color_click,
                                on_hover=handle_on_hover,
                            )
                        ]
                    ),
                    ft.SubmenuButton(
                        content=ft.Text("G"),
                        leading=ft.Icon(ft.icons.COLORIZE),
                        controls=[
                            ft.MenuItemButton(
                                content=ft.Text("Green"),
                                style=ft.ButtonStyle(bgcolor={ft.MaterialState.HOVERED: ft.colors.GREEN}),
                                on_click=handle_color_click,
                                on_hover=handle_on_hover,
                            )
                        ]
                    ),
                    ft.SubmenuButton(
                        content=ft.Text("R"),
                        leading=ft.Icon(ft.icons.COLORIZE),
                        controls=[
                            ft.MenuItemButton(
                                content=ft.Text("Red"),
                                style=ft.ButtonStyle(bgcolor={ft.MaterialState.HOVERED: ft.colors.RED}),
                                on_click=handle_color_click,
                                on_hover=handle_on_hover,
                            )
                        ]
                    )
                ]
            )
        ]
    )

    page.add(
        ft.Row([menubar]),
        ft.Container(
            ref=bg_container,
            expand=True,
            bgcolor=ft.colors.SURFACE,
            content=ft.Text("Choose a bgcolor from the menu", style=ft.TextThemeStyle.HEADLINE_LARGE),
            alignment=ft.alignment.center,
        )
    )


ft.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/submenu-button/submenu-button.gif" className="screenshot-20" />

## Properties

### `alignment_offset`

The offset of the menu relative to the alignment origin determined by `MenuStyle.alignment` on the `style` attribute.

### `clip_behavior`

Whether to clip the content of this control or not. Property value is [`ClipBehavior`](/docs/reference/types/clipbehavior) enum.

Defaults to `HARD_EDGE`.

### `content`

The child control to be displayed in the middle portion of this button.

Typically this is the button's label, using a `Text` control.

### `controls`

A list of controls that appear in the menu when it is opened.

Typically either `MenuItemButton` or `SubMenuButton` controls.

If this list is empty, then the button for this menu item will be disabled.

### `leading`

An optional control to display before the `content`. Typically an [`Icon`](/docs/controls/icon) control.

### `menu_style`

Customizes this menu's appearance.

The value is an instance of [`MenuStyle`](/docs/reference/types/menustyle) class.

### `style`

Customizes this button's appearance.

The value is an instance of [`ButtonStyle`](/docs/reference/types/buttonstyle) class. 

### `trailing`

An optional control to display after the `content`. Typically an [`Icon`](/docs/controls/icon) control.

## Events

### `on_blur`

Fired when this button loses focus.

### `on_close`

Fired when the menu is closed.

### `on_focus`

Fired when the button receives focus.

### `on_hover`

Fired when the button is hovered.

### `on_open`

Fired when the menu is opened.
