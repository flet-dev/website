---
title: Pagelet
sidebar_label: Pagelet
---

Pagelet implements the basic Material Design visual layout structure.

Use it for projects that require "page within a page" layouts with its own AppBar, BottomBar, Drawer, such as demos and galleries.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/pagelet)

### Pagelet example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def open_pagelet_end_drawer(e):
        pagelet.end_drawer.open = True
        pagelet.end_drawer.update()

    pagelet = ft.Pagelet(
        appbar=ft.AppBar(
            title=ft.Text("Pagelet AppBar title"), bgcolor=ft.colors.AMBER_ACCENT
        ),
        content=ft.Text("Pagelet body"),
        bgcolor=ft.colors.AMBER_100,
        bottom_app_bar=ft.BottomAppBar(
            bgcolor=ft.colors.BLUE,
            shape=ft.NotchShape.CIRCULAR,
            content=ft.Row(
                controls=[
                    ft.IconButton(icon=ft.icons.MENU, icon_color=ft.colors.WHITE),
                    ft.Container(expand=True),
                    ft.IconButton(icon=ft.icons.SEARCH, icon_color=ft.colors.WHITE),
                    ft.IconButton(icon=ft.icons.FAVORITE, icon_color=ft.colors.WHITE),
                ]
            ),
        ),
        end_drawer=ft.NavigationDrawer(
            controls=[
                ft.NavigationDrawerDestination(
                    icon=ft.icons.ADD_TO_HOME_SCREEN_SHARP, label="Item 1"
                ),
                ft.NavigationDrawerDestination(
                    icon=ft.icons.ADD_COMMENT, label="Item 2"
                ),
            ],
        ),
        floating_action_button=ft.FloatingActionButton(
            "Open", on_click=open_pagelet_end_drawer
        ),
        floating_action_button_location=ft.FloatingActionButtonLocation.CENTER_DOCKED,
        width=400,
        height=400,
    )

    page.add(pagelet)


ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/pagelet/pagelet-example.png" className="screenshot-30"/>

## Properties

### `appbar`

An [`AppBar`](/docs/controls/appbar) control to display at the top of the Pagelet.

### `bgcolor`

Background [color](/docs/reference/colors) of the Pagelet.

### `bottom_appbar`

[`BottomAppBar`](/docs/controls/bottomappbar) control to display at the bottom of the Pagelet. If both [`bottom_appbar`](/docs/controls/pagelet#bottom_appbar) and [`navigation_bar`](/docs/controls/pagelet#navigation_bar) properties are provided, `NavigationBar` will be displayed.

### `bottom_sheet`

The persistent bottom sheet to show information that supplements the primary content of the Pagelet. Can be any control.

### `content`

A child Control contained by the Pagelet. The control in the content of the Pagelet is positioned at the top-left of the available space between the app bar and the bottom of the Pagelet. 

### `drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the start edge of the page.

### `end_drawer`

A [`NavigationDrawer`](/docs/controls/navigationdrawer) control to display as a panel sliding from the end edge of the page.

### `floating_action_button`

A [`FloatingActionButton`](/docs/controls/floatingactionbutton) control to display on top of Pagelet content.

### `floating_action_button_location`

Defines a position for the `FloatingActionButton`.

Property value is [`FloatingActionButtonLocation`](/docs/reference/types/floatingactionbuttonlocation) enum. Default is `END_FLOAT`.

### `navigation_bar`

[`NavigationBar`](/docs/controls/navigationbar) control to display at the bottom of the page. If both [`bottom_appbar`](/docs/controls/pagelet#bottom_appbar) and [`navigation_bar`](/docs/controls/pagelet#navigation_bar) properties are provided, `NavigationBar` will be displayed.

## Methods

### `close_drawer()`

Closes active drawer.

### `close_end_drawer()`

Closes active end drawer.

### `show_drawer(drawer: NavigationDialog)`

Displays [`drawer`](/docs/controls/pagelet#drawer).

### `show_end_drawer(drawer: NavigationDialog)`

Displays [`end_drawer`](/docs/controls/pagelet#end_drawer).

