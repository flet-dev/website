---
title: TextField
sidebar_label: TextField
---

A material design text field.

A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/textfield)

### Basic TextFields


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/text-field/basic-textfields.py
```


<img src="/img/docs/controls/textfield/basic-textfield.gif" className="screenshot-40"/>

### TextField with `on_change` event


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/text-field/textfield-with-on-change.py
```


<img src="/img/docs/controls/textfield/textfield-with-change-event.gif" className="screenshot-40"/>

### Password with reveal button


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/text-field/password.py
```


<img src="/img/docs/controls/textfield/textfield-with-password.gif" className="screenshot-40"/>

### Multiline TextFields


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/text-field/multiline-example.py
```


<img src="/img/docs/controls/textfield/textfield-with-multiline.gif" className="screenshot-40"/>

### Underlined and borderless TextFields


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/text-field/underlined-borderless-example.py
```


<img src="/img/docs/controls/textfield/textfield-with-underline-and-borderless.gif" className="screenshot-40"/>

### TextFields with prefixes and suffixes


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/input-and-selections/text-field/prefix-suffix.py
```


<img src="/img/docs/controls/textfield/textfield-with-prefix-and-suffix.gif" className="screenshot-40"/>

## Properties

### `adaptive`

If the value is `True`, an adaptive TextField is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoTextField`](/docs/controls/cupertinotextfield) is created, which has matching functionality and presentation as `TextField`, and the graphics as expected on iOS. On other platforms, a Material TextField is created.

The default value is `False`.

### `autocorrect`

Whether to enable autocorrection.

Defaults to `True`.

### `autofill_hints`

Helps the autofill service identify the type of this text input. Value can either be a single [`AutoFillHint`](/docs/reference/types/autofillhint) enum item or a list of them.

More information [here](https://api.flutter.dev/flutter/material/TextField/autofillHints.html).

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

TextField background [color](/docs/reference/colors). Will not be visible if `filled=False`.

### `border`

Border around input.

Value is of type [`InputBorder`](/docs/reference/types/inputborder) and defaults to `InputBorder.OUTLINE`.

### `border_color`

Border [color](/docs/reference/colors). Could be `transparent` to hide the border.

### `border_radius`

Border radius is an instance of [`BorderRadius`](/docs/reference/types/borderradius) class.

### `border_width`

The width of the border in virtual pixels. Set to `0` to completely remove the border.

Defaults to `1`.

### `can_reveal_password`

Displays a toggle icon button that allows revealing the entered password. Is shown if both `password` and `can_reveal_password` are `True`.

The icon is displayed in the same location as `suffix` and in case both `can_reveal_password`/`password` and `suffix` are provided, then the `suffix` is not shown.

### `capitalization`

Enables automatic on-the-fly capitalization of entered text.

Value is of type [`TextCapitalization`](/docs/reference/types/textcapitalization) and defaults
to `TextCapitalization.NONE`.

### `color`

Text [color](/docs/reference/colors).

### `content_padding`

The padding for the input decoration's container.

The value is an instance of [`padding.Padding`](/docs/reference/types/padding) class or a number.

### `counter`

A `Control` to place below the line as a character count.

If `None` or an empty string and `counter_text` isn't specified, then nothing will appear in the counter's location.

### `counter_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `counter_text`.

### `counter_text`

Optional text to place below the line as a character count.

For dynamic update, it supports the following placeholders:

- `{value_length}`: the length of the textfield's value
- `{max_length}`: the maximum length of the field, defined by [`max_length`](#max_length). Defaults to `"None"` if
  `max_length` is not specified.
- `{symbols_left}`: the number of symbols/letters left to reach the field's [`max_length`](#max_length). Defaults to
  `"None"` if `max_length` is not specified.

Example:

```python
ft.TextField(
    hint_text="Custom counter text",
    counter_text="{value_length} chars / {max_length} max chars / {symbols_left} symbols left",
    max_length=10,
)

ft.TextField(
    hint_text="Counter text isn't shown by default",
    max_length=20,
),
```

### `cursor_color`

The [color](/docs/reference/colors) of TextField cursor.

### `cursor_height`

Sets cursor height.

### `cursor_radius`

Sets cursor radius.

### `cursor_width`

Sets cursor width.

### `dense`

Whether the TextField is part of a dense form (ie, uses less vertical space).

### `enable_suggestions`

Whether to show input suggestions as the user types.

This flag only affects Android. On iOS, suggestions are tied directly to `autocorrect`, so that suggestions are only
shown when `autocorrect` is `True`. On Android autocorrection and suggestion are controlled separately.

Defaults to `True`.

### `error_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `error_text`.

### `error_text`

Text that appears below the input border.

If non-null, the border's color animates to red and the `helper_text` is not shown.

### `filled`

If `True` the decoration's container is filled with theme `fill_color`.

If `filled=None`(default), then it is implicitly set to `True` when at least one of the following is
not `None`: `fill_color`, `focused_bgcolor`, `hover_color` and `bgcolor`.

### `fill_color`

Background [color](/docs/reference/colors) of TextField. Will not be visible if `filled=False`.

### `focused_bgcolor`

Background [color](/docs/reference/colors) of TextField in focused state. Will not be visible if `filled=False`.

### `focused_border_color`

Border [color](/docs/reference/colors) in focused state.

### `focused_border_width`

Border width in focused state.

### `focused_color`

Text [color](/docs/reference/colors) when TextField is focused.

### `helper_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `helper_text`.

### `helper_text`

Text that provides context about the input's value, such as how the value will be used.

If non-null, the text is displayed below the input decorator, in the same location as `error_text`. If a non-null `error_text` value is specified then the helper text is not shown.

### `hint_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `hint_text`.

### `hint_text`

Text that suggests what sort of input the field accepts.

Displayed on top of the input when the it's empty and either (a) `label` is null or (b) the input has the focus.

### `hover_color`

Background [color](/docs/reference/colors) of TextField when hovered. Will not be visible if `filled=False`.

### `icon`

The icon to show before the input field and outside of the decoration's container. Can be a `Control` or an icon name.

### `input_filter`

Provides as-you-type filtering/validation.

Similar to the `on_change` callback, the input filters are not applied when the content of the field is changed programmatically.

Value is of type [`InputFilter`](/docs/reference/types/inputfilter) class.

### `keyboard_type`

The type of keyboard to use for editing the text. The property value
is [`KeyboardType`](/docs/reference/types/keyboardtype) and defaults to `KeyboardType.TEXT`.

### `label`

Optional text that describes the input field.

When the input field is empty and unfocused, the label is displayed on top of the input field (i.e., at the same location on the screen where text may be entered in the input field). When the input field receives focus (or if the field is non-empty) the label moves above, either vertically adjacent to, or to the center of the input field.

### `label_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `label`.

### `max_length`

Limits a maximum number of characters that can be entered into TextField.

### `max_lines`

The maximum number of lines to show at one time, wrapping if necessary.

This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

If this is `1` (the default), the text will not wrap, but will scroll horizontally instead.

### `min_lines`

The minimum number of lines to occupy when the content spans fewer lines.

This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

Defaults to `1`.

### `multiline`

`True` if TextField can contain multiple lines of text.

### `password`

Whether to hide the text being edited.

Defaults to `False`.

### `prefix`

Optional `Control` to place on the line before the input.

This can be used, for example, to add some padding to text that would otherwise be specified using `prefix_text`, or to add a custom control in front of the input. The control's baseline is lined up with the input baseline.

Only one of `prefix` and `prefix_text` can be specified.

The `prefix` appears after the `prefix_icon`, if both are specified.

### `prefix_icon`

An icon that appears before the `prefix` or `prefix_text` and before the editable part of the text field, within the decoration's container. Can be a `Control` or an icon name.

### `prefix_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `prefix_text`.

### `prefix_text`

Optional text `prefix` to place on the line before the input.

### `read_only`

Whether the text can be changed.

When this is set to `True`, the text cannot be modified by any shortcut or keyboard operation. The text is still selectable.

Defaults to `False`.

### `rtl`

`True` to set text direction to right-to-left.

Defaults to `False`.

### `selection_color`

The [color](/docs/reference/colors) of TextField selection.

### `shift_enter`

Changes the behavior of `Enter` button in `multiline` TextField to be chat-like, i.e. new line can be added with `Shift`+`Enter` and pressing just `Enter` fires `on_submit` event.

### `show_cursor`

Whether the field's cursor is to be shown.

Defaults to `True`.

### `smart_dashes_type`

Whether to allow the platform to automatically format dashes.

This flag only affects iOS versions 11 and above. As an example of what this does, two consecutive hyphen characters
will be automatically replaced with one en dash, and three consecutive hyphens will become one em dash.

Defaults to `True`.

### `smart_quotes_type`

Whether to allow the platform to automatically format quotes.

This flag only affects iOS. As an example of what this does, a standard vertical double quote character will be
automatically replaced by a left or right double quote depending on its position in a word.

Defaults to `True`.

### `suffix`

Optional `Control` to place on the line after the input.

This can be used, for example, to add some padding to the text that would otherwise be specified using `suffix_text`, or to add a custom control after the input. The control's baseline is lined up with the input baseline.

Only one of `suffix` and `suffix_text` can be specified.

The `suffix` appears before the `suffix_icon`, if both are specified.

### `suffix_icon`

An icon that appears after the editable part of the text field and after the `suffix` or `suffix_text`, within the decoration's container. Can be a `Control` or an icon name.

### `suffix_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `suffix_text`.

### `suffix_text`

Optional text `suffix` to place on the line after the input.

### `text_align`

How the text should be aligned horizontally.

Value is of type [`TextAlign`](/docs/reference/types/textalign) and defaults to `TextAlign.LEFT`.

### `text_size`

Text size in virtual pixels.

### `text_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for the text being edited.

### `text_vertical_align`

Defines how the text should be aligned vertically.

Value can either be a number ranging from `-1.0` (topmost location) to `1.0` (bottommost location) or of
type [`VerticalAlignment`](/docs/reference/types/verticalalignment). Defaults to `VerticalAlignment.CENTER`.

### `value`

Current value of the TextField.

## Methods

### `focus()`

Moves focus to a TextField.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_change`

Fires when the typed input for the TextField has changed.

### `on_focus`

Fires when the control has received focus.

### `on_submit`

Fires when user presses ENTER while focus is on TextField.
