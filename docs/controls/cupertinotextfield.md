---
title: CupertinoTextField
sidebar_label: CupertinoTextField
slug: cupertinotextfield
---

An iOS-style text field.

A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/cupertinotextfield)

### Basic TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.window_always_on_top = True
    page.theme_mode = ft.ThemeMode.LIGHT

    page.add(
        ft.CupertinoTextField(
            bgcolor=ft.colors.BLUE_100,
            shadow=ft.BoxShadow(color=ft.colors.RED_400, blur_radius=5, spread_radius=5),
            on_change=lambda e: print("CupertinoTextField change = ", e.control.value),
            placeholder_text="Enter text here",
            suffix=ft.Icon(ft.icons.EDIT),
            suffix_visibility_mode=ft.VisibilityMode.EDITING,
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/textfield/basic-textfield.gif" className="screenshot-40"/>

### Underlined and borderless TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.TextField(label="Underlined", border="underline", hint_text="Enter text here"),
        ft.TextField(
            label="Underlined filled",
            border=ft.InputBorder.UNDERLINE,
            filled=True,
            hint_text="Enter text here",
        ),
        ft.TextField(label="Borderless", border="none", hint_text="Enter text here"),
        ft.TextField(
            label="Borderless filled",
            border=ft.InputBorder.NONE,
            filled=True,
            hint_text="Enter text here",
        ),
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/textfield/textfield-with-underline-and-borderless.gif" className="screenshot-40"/>

## Properties

### `autocorrect`

Whether to enable autocorrection. Default is `True`.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

TextField background [color](/docs/guides/python/colors).

### `blend_mode`

The blend mode applied to the `color` or `gradient` background. See [`ShaderMask.blend_mode`](shadermask#blend_mode) for more details.

### `border`

Border around input - `InputBorder` enum with one of the values: `OUTLINE` (default), `UNDERLINE`, `NONE`.

### `border_color`

Border [color](/docs/guides/python/colors). Could be `transparent` to hide the border.

### `border_radius`

See [`Container.border_radius`](/docs/controls/container#border_radius) property docs for more information about border radius.

### `border_width`

The width of the border in virtual pixels. Default is 1. Set to 0 to completely remove border.

### `capitalization`

Enables automatic on-the-fly capitalization of entered text.

Property value is `TextCapitalization` enum with the following values:

* `NONE` (default) - do not change entered text.
* `CHARACTERS` - every entered symbol is capitalized.
* `WORDS` - capitalize the first letter of every word.
* `SENTENCES` - capitalize the first letter of every sentence.

### `color`

Text [color](/docs/guides/python/colors).

### `content_padding`

The padding for the input decoration's container.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `counter_style`

The style to use for `counter_text`.

### `counter_text`

Optional text to place below the line as a character count.

If null or an empty string and counter isn't specified, then nothing will appear in the counter's location.

### `cursor_color`

The [color](/docs/guides/python/colors) of TextField cursor.

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

This flag only affects Android. On iOS, suggestions are tied directly to `autocorrect`, so that suggestions are only shown when `autocorrect` is `True`. On Android autocorrection and suggestion are controlled separately. Default is `True`.

### `error_style`

The style to use for `error_text`.  

### `error_text`

Text that appears below the input border.

If non-null, the border's color animates to red and the `helper_text` is not shown.

### `filled`

If `True` the decoration's container is filled with theme fillColor.

### `focused_bgcolor`

Background [color](/docs/guides/python/colors) of TextField in focused state.

### `focused_border_color`

Border [color](/docs/guides/python/colors) in focused state.

### `focused_border_width`

Border width in focused state.

### `focused_color`

Text [color](/docs/guides/python/colors) when TextField is focused.

### `gradient`

Configures gradient background. See [`Container.gradient`](/docs/controls/container#gradient) for more information about gradient and possible values.

### `helper_style`

The style to use for `helper_text`.

### `helper_text`

Text that provides context about the input's value, such as how the value will be used.

If non-null, the text is displayed below the input decorator, in the same location as `error_text`. If a non-null `error_text` value is specified then the helper text is not shown.

### `hint_style`

The style to use for `hint_text`.

### `hint_text`

Text that suggests what sort of input the field accepts.

Displayed on top of the input when the it's empty and either (a) `label` is null or (b) the input has the focus.

### `icon`

The name of the icon to show before the input field and outside of the decoration's container.

### `input_filter`
Provides as-you-type filtering/validation in your `TextField`. It prevents the insertion of characters matching (or not matching) a particular pattern(`regex_string`), by replacing the characters with the given `replacement_string`.
When this parameter changes, the new filter will not be applied until the next time the user inserts or deletes text. 
Note that, similar to the `on_change` callback, the input filters are not applied when the text is changed programmatically.

`input_filter` is an instance of the `InputFilter` class, which takes 3 parameters: 
- `regex_string`: a regular expression pattern for the filter
- `allow`: a boolean value indicating whether to allow or deny/block the matched patterns - default is `True`
- `replacement_string`: string used to replace banned/denied patterns - default is an empty string.

The following helper classes are equally available:
- `NumbersOnlyInputFilter()` - only allow numbers
- `TextOnlyInputFilter()` - only allow text characters

Usage Example:

```python
ft.TextField(
    label="Only numbers are allowed :)",
    input_filter=ft.InputFilter(allow=True, regex_string=r"[0-9]", replacement_string=""),
    # input_filter=ft.NumbersOnlyInputFilter()
)
```

### `keyboard_type`

The type of keyboard to use for editing the text. The property value is `KeyboardType` enum with the following values:

* `TEXT` (default)
* `MULTILINE`
* `NUMBER`
* `PHONE`
* `DATETIME`
* `EMAIL`
* `URL`
* `VISIBLE_PASSWORD`
* `NAME`
* `STREET_ADDRESS`
* `NONE`

### `label`

Optional text that describes the input field.

When the input field is empty and unfocused, the label is displayed on top of the input field (i.e., at the same location on the screen where text may be entered in the input field). When the input field receives focus (or if the field is non-empty) the label moves above, either vertically adjacent to, or to the center of the input field.

### `label_style`

The style to use for `label`.

### `max_length`

Limits a maximum number of characters that can be entered into TextField.

### `max_lines`

The maximum number of lines to show at one time, wrapping if necessary.

This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

If this is `1` (the default), the text will not wrap, but will scroll horizontally instead.

### `min_lines`

The minimum number of lines to occupy when the content spans fewer lines.

This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

Default is `1`.

### `multiline`

`True` if TextField can contain multiple lines of text.

### `password`

Whether to hide the text being edited. Default is `False`.

### `placeholder_text`

A lighter colored placeholder hint that appears on the first line of the text field when the text entry is empty. Defaults to an empty string.

### `placeholder_style`

The style to use for `placeholder_text`.

### `prefix`

Optional `Control` to place on the line before the input.

This can be used, for example, to add some padding to text that would otherwise be specified using `prefix_text`, or to add a custom control in front of the input. The control's baseline is lined up with the input baseline.

Only one of `prefix` and `prefix_text` can be specified.

The `prefix` appears after the `prefix_icon`, if both are specified.

### `prefix_mode`

Defines the visibility of the `prefix` control based on the state of text entry. Has no effect if `prefix` is not specified.

The property value is `VisibilityMode` enum with the following values:

* `ALWAYS` (default) - `prefix` is always visible regardless of the text entry state
* `NEVER` - `prefix` is never visible regardless of the text entry state
* `EDITING` - `prefix` is visible only when the text entry is in editing mode
* `NOT_EDITING` - `prefix` is visible only when the current text entry is empty

### `read_only`

Whether the text can be changed.

When this is set to `True`, the text cannot be modified by any shortcut or keyboard operation. The text is still selectable.

Defaults to `False`.

### `rtl`

`True` to set text direction to right-to-left. Default is `False`.

### `selection_color`

The [color](/docs/guides/python/colors) of TextField selection.

### `shadow`

A list of shadows behind the text field.

### `shift_enter`

Changes the behavior of `Enter` button in `multiline` TextField to be chat-like, i.e. new line can be added with `Shift`+`Enter` and pressing just `Enter` fires `on_submit` event.

### `show_cursor`

Whether the field's cursor is to be shown. Defaults to `True`.

### `smart_dashes_type`

Whether to allow the platform to automatically format dashes.

This flag only affects iOS versions 11 and above. As an example of what this does, two consecutive hyphen characters will be automatically replaced with one en dash, and three consecutive hyphens will become one em dash. Default is `True`.

### `smart_quotes_type`

Whether to allow the platform to automatically format quotes.

This flag only affects iOS. As an example of what this does, a standard vertical double quote character will be automatically replaced by a left or right double quote depending on its position in a word. Default is `True`.

### `suffix`

Optional `Control` to place on the line after the input.

This can be used, for example, to add some padding to the text that would otherwise be specified using `suffix_text`, or to add a custom control after the input. The control's baseline is lined up with the input baseline.

Only one of `suffix` and `suffix_text` can be specified.

The `suffix` appears before the `suffix_icon`, if both are specified.

### `suffix_mode`

Defines the visibility of the `suffix` control based on the state of text entry. Has no effect if `suffix` is not specified.

The property value is `VisibilityMode` enum with the following values:

* `ALWAYS` (default) - `suffix` is always visible regardless of the text entry state
* `NEVER` - `suffix` is never visible regardless of the text entry state
* `EDITING` - `suffix` is visible only when the text entry is in editing mode
* `NOT_EDITING` - `suffix` is visible only when the current text entry is empty

### `text_align`

How the text should be aligned horizontally.

Property value is `TextAlign` enum with the following values:

* `LEFT` (default)
* `RIGHT`
* `CENTER`
* `JUSTIFY`
* `START`
* `END`

### `text_size`

Text size in virtual pixels.

### `text_vertical_align`

Defines how the text should be aligned vertically. It's value can either be a number ranging from `-1.0` (topmost location) to `1.0` (bottommost location) or of type `VerticalAlignment` enum with the following values:

* `START` - aligns the text vertically at the topmost location of the text field
* `CENTER` (default) - aligns the text vertically in the center of the text field
* `END` - aligns the text vertically at the bottommost location of the text field

### `text_style`

The style to use for the text being edited.

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
