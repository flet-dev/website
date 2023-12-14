---
title: SearchBar
sidebar_label: SearchBar
slug: searchbar
---

A Material Design search bar. It visually looks like a `TextField` with the difference that, tapping on it opens a search view.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

## Properties

### `bar_bgcolor`

Defines the background [color](/docs/guides/python/colors) of the search bar.

### `bar_hint_text`

Defines the text to be shown in the search bar when it is empty and the search view is close. Usually some text that suggests what sort of input the field accepts.

### `bar_leading`

A `Control` to display before the text input field when the search view is close. This is typically an `Icon` or an `IconButton`.

### `bar_overlay_color`

Defines the highlight [color](/docs/guides/python/colors) that's typically used to indicate that the search bar is focused, hovered, or pressed.

To configure this property for specific `MaterialState`s set its value to a dictionary where the key is the state name and the value is a corresponding literal. On the other hand, to configure this property for _all_ `MaterialState`s set its value to a corresponding literal (e.g. `bar_overlay_color=ft.colors.BLUE`). 

### `bar_trailing`

A `Control` to display after the text input field when the search view is close. 

These controls can represent additional modes of searching (e.g voice search), an avatar, or an overflow menu and are usually not more than two.

### `capitalization`

Enables automatic on-the-fly capitalization of entered text. See [TextField.capitalization](textfield#capitalization) for possible values.

### `controls`

The list of controls to be displayed below the search bar when in search view. These controls are usually `ListTile`s and will be displayed in a `ListView`.

### `divider_color`

The color of the divider when in search view.

### `full_screen`

Defines whether the search view grows to fill the entire screen when the search bar is tapped. Defaults to `False`.

### `header_hint_style`

Defines the style of `view_hint_text`.

### `header_text_style`

Defines the style of the text being edited on the search view.

### `value`

The text in the search bar.

### `view_bgcolor`

Defines the background [color](/docs/guides/python/colors) of the search view.

### `view_elevation`

Defines the elevation of the search view.

### `view_hint_text`

Defines the text to be displayed when the search bar's input field is empty.

### `view_leading`

A `Control` to display before the text input field when the search view is open. This is typically an `Icon` or an `IconButton`.

Defaults to a back button which closes/pops the search view.

### `view_shape`

Defines the shape of the search view. See [Container.shape](container#shape) for possible values.

### `view_side`

Defines the color and weight of the search view's outline.

### `view_surface_tint_color`

Defines the color of the search view's surface tint.

### `view_trailing`

A list of `Control`s to display after the text input field when the search view is open. Defaults to a close button which closes/pops the search view.

## Events

### `on_change`

Fires when the typed input in the search bar has changed.

### `on_submit`

Fires when user presses ENTER while focus is on SearchBar.

### `on_tap`

Fires when the search bar is tapped.

## Methods

### `close_view(text)`

Closes the search view. The `text` parameter (defaults to an empty string) is the text to be shown in the search bar after the search view is closed.

### `open_view()`

Opens the search view.
