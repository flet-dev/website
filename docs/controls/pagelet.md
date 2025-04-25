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



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/pagelet/pagelet-example.py
```


<img src="/img/docs/controls/pagelet/pagelet-light-example.png" className="screenshot-30"/>

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

Value can be of type `OffsetValue`
or [`FloatingActionButtonLocation`](/docs/reference/types/floatingactionbuttonlocation). Defaults
to `FloatingActionButtonLocation.END_FLOAT`.

### `navigation_bar`

[`NavigationBar`](/docs/controls/navigationbar) control to display at the bottom of the page. If both [`bottom_appbar`](/docs/controls/pagelet#bottom_appbar) and [`navigation_bar`](/docs/controls/pagelet#navigation_bar) properties are provided, `NavigationBar` will be displayed.

## Methods

### `close_drawer()`

Closes active drawer.

### `close_end_drawer()`

Closes active end drawer.

### `show_drawer(drawer: NavigationDrawer)`

Displays [`drawer`](/docs/controls/pagelet#drawer).

### `show_end_drawer(drawer: NavigationDrawer)`

Displays [`end_drawer`](/docs/controls/pagelet#end_drawer).

