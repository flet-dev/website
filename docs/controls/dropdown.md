---
title: Dropdown
sidebar_label: Dropdown
---

Dropdown is used to help people make a choice from a menu and put the selected item into the text input field. It's also possible to filter the list based on the text input or search one item in the menu list.

:::info
Since version 0.27.0, Flet uses [DropdownMenu](https://api.flutter.dev/flutter/material/DropdownMenu-class.html) flutter widget for [Dropdown](/docs/controls/dropdown) control, which is a Material 3 version of previously used DropdownButton.

Some properties of previous Dropdown implementation are not available in the new version and were "stubbed" - they will not break your program but don't do anything. See the list of deprecated properties [here](#deprecated-dropdown-properties-and-events).

Previous version of Dropdown control is available as [`DropdownM2`](/docs/controls/dropdownm2) control and will be removed in Flet 0.30.0.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/dropdown)

### Dropdown with colors



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/dropdown/dropdown-example.py
```


<img src="/img/docs/controls/dropdown/dropdown-with-colors.png" className="screenshot-20"/>

### Dropdown with icons


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/dropdown/dropdown-icon-example.py
```


<img src="/img/docs/controls/dropdown/dropdown-with-icons.png" className="screenshot-20"/>

## `Dropdown` properties

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

The background [color](/docs/reference/colors) of the dropdown menu in
various [`ControlState`](/docs/reference/types/controlstate) states.

### `border`

Border around input.

Value is of type [`InputBorder`](/docs/reference/types/inputborder) and defaults to `InputBorder.OUTLINE`.

### `border_color`

Border [color](/docs/reference/colors). Could be `transparent` to hide the border.

### `border_radius`

Border radius is an instance of [`BorderRadius`](/docs/reference/types/borderradius) class.

### `border_width`

The width of the border in virtual pixels. Set to `0` to completely remove border.

Defaults to `1`.

### `color`

Text [color](/docs/reference/colors).

### `content_padding`

The [padding](/docs/reference/types/padding) for the input decoration's container.

### `dense`

Whether the TextField is part of a dense form (ie, uses less vertical space).

### `elevation`

The dropdown's menu elevation in
various [`ControlState`](/docs/reference/types/controlstate) states.

Defaults to `8`.

### `enable_filter`

Determine if the menu list can be filtered by the text input. Defaults to false.

If set to true, dropdown menu will show a filtered list. The filtered list will contain items that match the text provided by the input field, with a case-insensitive comparison.

<img src="/img/docs/controls/dropdown/dropdown-filter.gif" className="screenshot-20"/>

### `enable_search`

Determine if the first item that matches the text input can be highlighted.

Defaults to true as the search function could be commonly used.

<img src="/img/docs/controls/dropdown/dropdown-search.gif" className="screenshot-20"/>

### `error_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `error_text`.

### `error_text`

Text that appears below the input border.

If non-null, the border's color animates to red and the `helper_text` is not shown.

### `filled`

If `True` the decoration's container is filled with theme `fill_color`. The default is `False`.

### `fill_color`

Background [color](/docs/reference/colors) of the dropdown input text field. Will not be visible if `filled=False`.

### `focused_border_color`

Border [color](/docs/reference/colors) in focused state.

### `focused_border_width`

Border width in focused state.

### `helper_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `helper_text`.

### `helper_text`

Text that provides context about the input's value, such as how the value will be used.

If non-null, the text is displayed below the input decorator, in the same location as `error_text`. If a non-null `error_text` value is specified then the helper text is not shown.

### `hint_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `hint_text`.

### `hint_text`

Text that suggests what sort of input the field accepts.

Displayed on top of the input when it's empty and either (a) `label` is null or (b) the input has the focus.

### `label`

Optional text that describes the input field.

When the input field is empty and unfocused, the label is displayed on top of the input field (i.e., at the same location on the screen where text may be entered in the input field). When the input field receives focus (or if the field is non-empty) the label moves above, either vertically adjacent to, or to the center of the input field.

### `label_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `label`.

### `leading_icon`

An optional Icon at the front of the text input field inside the decoration box (previously, [`prefix_icon`](#prefix_icon)).

Defaults to null. If this is not null, the menu items will have extra paddings to be aligned with the text in the text field.

### `menu_height`

The height of the dropdown menu. If this is null, the menu will display as many items as possible on the screen.

### `menu_width`

The width of the dropdown menu. If this is null, the menu width will be the same as input textfield width.

### `options`

A list of `DropdownOption` controls representing items in this dropdown.

### `selected_trailing_icon`

An optional icon at the end of the text field to indicate that the text field is pressed.

Defaults to an Icon with `ft.Icons.ARROW_DROP_UP`.

### `text_align`

The text align for the TextField of the Dropdown.

Value is of type [`TextAlign`](/docs/reference/types/textalign) and defaults to `TextAlign.START`.

### `text_size`

Text size in virtual pixels.

### `text_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for text in input text field.

### `trailing_icon`

An optional icon at the end of the text field (previously, [`select_icon`](#select_icon)).

Defaults to an Icon with `ft.Icons.ARROW_DROP_DOWN`.

### `width`

Determine the width of the Dropdown.

If this is null, the width of the Dropdown will be the same as the width of the widest menu item plus the width of the leading/trailing icon.

### `value`

`key` value of the selected option.

## `Dropdown` methods

### `focus()`

Moves focus to this dropdown.

## `Dropdown` events

### `on_blur`

Fires when the control has lost focus.

### `on_change`

Fires when the selected item of this dropdown has changed.

### `on_focus`

Fires when the control has received focus.

## Deprecated `Dropdown` properties and events

:::warning
The properties and events below are not available in Dropdown control since Flet version 0.27.0 and will be removed in Flet version 0.30.0. They were "stubbed" - using them will not break your program but they don't do anything.

They are still available in previous version of `Dropdown` control [`DropdownM2`](/docs/controls/dropdownm2) which will be removed in 0.30.0.
:::

### ~~`alignment`~~

Defines how the `hint` or the selected item is positioned within this dropdown.

Alignment is an instance of [`Alignment`](/docs/reference/types/alignment) class.

### ~~`counter`~~

A `Control` to place below the line as a character count.

If `None` or an empty string and `counter_text` isn't specified, then nothing will appear in the counter's location.

### ~~`counter_style`~~

The [`TextStyle`](/docs/reference/types/textstyle) to use for `counter_text`.

### ~~`counter_text`~~

Optional text to place below the line as a character count.

If `None` or an empty string and `counter` isn't specified, then nothing will appear in the counter's location. If `counter` is specified and visible, then this `counter_text` will be ignored.

### ~~`disabled_hint_content`~~

A placeholder `Control` for the dropdown's value that is displayed when `value` is `None` and the dropdown is disabled.

### ~~`enable_feedback`~~

Whether detected gestures should provide acoustic and/or haptic feedback. On Android, for example, setting this
to `True` produce a click sound and a long-press will produce a short vibration.

Defaults to `True`.

### ~~`focused_bgcolor`~~

Background [color](/docs/reference/colors) of dropdown in focused state. Will not be visible if `filled=False`.

### ~~`focused_color`~~

Text [color](/docs/reference/colors) when Dropdown is focused.

### ~~`hint_content`~~

A placeholder `Control` for the dropdown's value that is displayed when `value` is `None`.

### ~~`icon`~~

The [name of the icon](/docs/reference/icons) or `Control` to show before the input field and outside of the decoration's container.

Example with icon name:
```
icon=ft.Icons.BOOKMARK
```
Example with Control:
```
icon=ft.Icon(ft.Icons.BOOKMARK)
```

### ~~`icon_content`~~

The control to use for the drop-down button's icon. Defaults to an `Icon(icons.ARROW_DROP_DOWN)`.

**Deprecated in v0.25.0 and will be removed in v0.28.0. Use [`icon`](#select_icon)
instead.**

### ~~`icon_enabled_color`~~

The color of any `Icon` descendant of `icon_content` if this button is enabled.

**Deprecated in v0.25.0 and will be removed in v0.28.0. Use [`select_icon_enabled_color`](#select_icon_enabled_color)
instead.**

### ~~`icon_disabled_color`~~

The color of any `Icon` descendant of `icon_content` if this button is disabled.

**Deprecated in v0.25.0 and will be removed in v0.28.0. Use [`select_icon_enabled_color`](#select_icon_enabled_color)
instead.**

### ~~`icon_size`~~

The size of the icon button which wraps `icon_content`.

Defaults to `24.0`.

**Deprecated in v0.25.0 and will be removed in v0.28.0. Use [`icon`](#icon)
instead.**

### ~~`item_height`~~

The height of the items/options in the dropdown menu.

### ~~`max_menu_height`~~

The maximum height of the dropdown menu. If this is null, the menu will display as many items as possible on the screen.

### ~~`options_fill_horizontally`~~

Whether the dropdown's inner contents to horizontally fill its parent.
By default this button's inner width is the minimum size of its content. 

If `True`, the inner width is expanded to fill its surrounding container.

Value is of type `bool` and defaults to `False`.

### ~~`padding`~~

The [padding](/docs/reference/types/padding) around the visible portion of this dropdown.

### ~~`prefix`~~

Optional `Control` to place on the line before the input.

This can be used, for example, to add some padding to text that would otherwise be specified using `prefix_text`, or to add a custom control in front of the input. The control's baseline is lined up with the input baseline.

Only one of `prefix` and `prefix_text` can be specified.

The `prefix` appears after the `prefix_icon`, if both are specified.

### ~~`prefix_icon`~~

:::note
Use [`leading_icon`](#leading_icon) instead.
:::

An icon that appears before the `prefix` or `prefix_text` and before the editable part of the text field, within the decoration's container.



### ~~`prefix_style`~~

The [`TextStyle`](/docs/reference/types/textstyle) to use for `prefix_text`.

### ~~`prefix_text`~~

Optional text `prefix` to place on the line before the input.

### ~~`select_icon`~~

:::note
Use [`trailing_icon`](#trailing_icon) instead.
:::

The [name of the icon](/docs/reference/icons) or `Control` to use for the drop-down select button's icon. Defaults to an `Icon(ft.Icons.ARROW_DROP_DOWN)`.

Example with icon name:
```
icon=ft.Icons.BOOKMARK
```
Example with Control:
```
icon=ft.Icon(ft.Icons.BOOKMARK)
```

### ~~`select_icon_enabled_color`~~

The color of any `Icon` descendant of `select_icon` if this button is enabled.

### ~~`select_icon_disabled_color`~~

The color of any `Icon` descendant of `select_icon` if this button is disabled.

### ~~`select_icon_size`~~

The size of the icon button which wraps `select_icon`.

Defaults to `24.0`.

### ~~`suffix`~~

Optional `Control` to place on the line after the input.

This can be used, for example, to add some padding to the text that would otherwise be specified using `suffix_text`, or to add a custom control after the input. The control's baseline is lined up with the input baseline.

Only one of `suffix` and `suffix_text` can be specified.

The `suffix` appears before the `suffix_icon`, if both are specified.

### ~~`suffix_icon`~~

An icon that appears after the editable part of the text field and after the `suffix` or `suffix_text`, within the decoration's container.

### ~~`suffix_style`~~

The [`TextStyle`](/docs/reference/types/textstyle) to use for `suffix_text`.

### ~~`suffix_text`~~

Optional text `suffix` to place on the line after the input.

### ~~`on_click`~~

Fires when this dropdown is clicked.

## `DropdownOption` properties

Represents an item in a dropdown. Either `key` or `text` must be specified, else an `AssertionError` will be raised.

### `content`

A `Control` to display in this option. If not specified, `text` will be used as fallback, else `text`will be ignored.

### `key`

Option's key. If not specified `text` will be used as fallback.

### `leading_icon`

An optional icon to display before the content or text.

### `style`

Customizes this menu item's appearance. 

The value is an instance of [`ButtonStyle`](/docs/reference/types/buttonstyle) class. 

### `text`

Option's display text. If not specified `key` will be used as fallback.

### `trailing_icon`

An optional icon to display after the content or text.

## Deprecated `DropdownOption` properties and events

### ~~`alignment`~~

Defines the alignment of this option in it's container.

Value is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `alignment.center_left`.

### ~~`text_style`~~

Defines the style of the `text`.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

### ~~`on_click`~~

Fires when this option is clicked.