---
title: SearchBar
sidebar_label: SearchBar
---

A Material Design search bar. It visually looks like a `TextField`.

To open the search view when the search bar is tapped, call the [`open_view()`](#open_view) method in the [`on_tap`](#on_tap) event handler.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/searchbar)

### Basic Example



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/search-bar/search-bar-example.py
```


<img src="/img/docs/controls/search-bar/searchbar-basic.gif" className="screenshot-50"/>

## Properties

### `autofocus`

Whether the text field should focus itself if nothing else is already focused.

Defaults to `False`.

### `bar_bgcolor`

Defines the background [color](/docs/reference/colors) of the search bar in all or
specific [`ControlState`](/docs/reference/types/controlstate) states.

### `bar_hint_text`

Defines the text to be shown in the search bar when it is empty and the search view is close. Usually some text that suggests what sort of input the field accepts.

### `bar_leading`

A `Control` to display before the text input field when the search view is close. This is typically an `Icon` or an `IconButton`.

### `bar_overlay_color`

Defines the highlight [color](/docs/reference/colors) that's typically used to indicate that the search bar is
in `FOCUSED`, `HOVERED`, or `PRESSED` [`ControlState`](/docs/reference/types/controlstate) states.

### `bar_scroll_padding`

Configures the padding around a Scrollable when the text field scrolls into view.

If the bar's text field is partially off-screen or covered (e.g., by the keyboard), it scrolls into view, ensuring it is positioned at the specified distance from the Scrollable edges.

Value is of type [`Padding`](/docs/reference/types/padding).

### `bar_trailing`

A `Control` to display after the text input field when the search view is close. 

These controls can represent additional modes of searching (e.g voice search), an avatar, or an overflow menu and are usually not more than two.

### `capitalization`

Enables automatic on-the-fly capitalization of entered text. 

Value is of type [`TextCapitalization`](/docs/reference/types/textcapitalization).

### `controls`

The list of controls to be displayed below the search bar when in search view. These controls are usually `ListTile`s and will be displayed in a `ListView`.

### `divider_color`

The color of the divider when in search view.

### `full_screen`

Defines whether the search view grows to fill the entire screen when the search bar is tapped. Defaults to `False`.

### `header_hint_style`

Defines the [`TextStyle`](/docs/reference/types/textstyle) of `view_hint_text`.

### `header_text_style`

Defines the [`TextStyle`](/docs/reference/types/textstyle) of the text being edited on the search view.

### `keyboard_type`

The type of action button to use for the keyboard. 

Value is of type [`KeyboardType`](/docs/reference/types/keyboardtype) and defaults to `KeyboardType TEXT`.

### `value`

The text in the search bar.

### `view_bgcolor`

Defines the background [color](/docs/reference/colors) of the search view.

### `view_elevation`

Defines the elevation of the search view.

### `view_hint_text`

Defines the text to be displayed when the search bar's input field is empty.

### `view_leading`

A `Control` to display before the text input field when the search view is open. Typically an `Icon` or an `IconButton`.

Defaults to a back button which closes/pops the search view.

### `view_shape`

Defines the shape of the search view.

Value is of type [`OutlinedBorder`](/docs/reference/types/outlinedborder).

### `view_side`

Defines the color and weight of the search view's outline.

Value is of type [`BorderSide`](/docs/reference/types/borderside).

### `view_surface_tint_color`

Defines the color of the search view's surface tint.

### `view_trailing`

A list of `Control`s to display after the text input field when the search view is open.

Defaults to a close button which closes/pops the search view.

## Methods

### `close_view(text)`

Closes the search view. The `text` parameter (defaults to an empty string) is the text to be shown in the search bar after the search view is closed.

### `open_view()`

Opens the search view.

## Events

### `on_change`

Fires when the typed input in the search bar has changed.

### `on_submit`

Fires when user presses ENTER while focus is on SearchBar.

### `on_tap`

Fires when the search bar is tapped.
