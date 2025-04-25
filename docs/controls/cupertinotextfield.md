---
title: CupertinoTextField
sidebar_label: CupertinoTextField
---

An iOS-style text field.

A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/input/cupertinotextfield)

### Basic textfields


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-input-and-selections/cupertino-textfield-example.py
```


<img src="/img/docs/controls/cupertinotextfield/cupertino-textfield-basic.png" className="screenshot-40"/>

## Properties

### `animate_cursor_opacity`

Whether the cursor will animate from fully transparent to fully opaque during each cursor blink.

Defaults to `True` on iOS platforms and `False` on Android platforms.

### `autocorrect`

Whether to enable autocorrection.

Defaults to `True`.

### `autofill_hints`

Helps the autofill service identify the type of this text input. Value can either be a single [`AutoFillHint`](/docs/reference/types/autofillhint) enum item or a list of them.

More information [here](https://api.flutter.dev/flutter/cupertino/CupertinoTextField/autofillHints.html).

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

TextField background [color](/docs/reference/colors).

### `blend_mode`

The blend mode applied to the `color` or `gradient` background.

Value is of type [`BlendMode`](/docs/reference/types/blendmode) and defaults to `BlendMode.MODULATE`.

### `border`

A border to draw around input.

Value is of type [`Border`](/docs/reference/types/border).

### `border_color`

Border [color](/docs/reference/colors). Could be `transparent` to hide the border.

### `border_radius`

Value is of type [`BorderRadius`](/docs/reference/types/borderradius).

### `can_reveal_password`

Displays a toggle icon button that allows revealing the entered password. Is shown if both `password` and `can_reveal_password` are `True`.

The icon is displayed in the same location as `suffix` and in case both `can_reveal_password`/`password` and `suffix` are provided, then the `suffix` is not shown.

### `capitalization`

Enables automatic on-the-fly capitalization of entered text.

Value is of type [`TextCapitalization`](/docs/reference/types/textcapitalization) and defaults
to `TextCapitalization.NONE`.

### `clear_button_semantics_label`

The semantic label for the clear button used by screen readers. This will be used by screen reading software to identify
the clear button widget.

Defaults to `"Clear"`.

### `clear_button_visibility_mode`

Defines the visibility of the clear button based on the state of text entry. Will appear only if no `suffix` is provided.

Value is of type [`VisibilityMode`](/docs/reference/types/visibilitymode) and defaults to `VisibilityMode.NEVER`.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.HARD_EDGE`.

### `color`

Text [color](/docs/reference/colors).

### `content_padding`

The padding for the input decoration's container.

The value is an instance of [`Padding`](/docs/reference/types/padding) class or a number.

### `cursor_color`

The cursor's [color](/docs/reference/colors).

### `cursor_height`

The cursor's height.

### `cursor_radius`

The radius of the cursor's corners.

By default, the cursor has no radius.

### `cursor_width`

Sets cursor width.

### `dense`

Whether the TextField is part of a dense form (ie, uses less vertical space).

### `enable_ime_personalized_learning`

Whether to enable that the IME update personalized data such as typing history and user dictionary data.

Has effect only on Android devices.

Defaults to `True`.

### `enable_interactive_selection`

Whether to enable user interface affordances for changing the text selection.

For example, setting this to true will enable features such as long-pressing the text field to select text and show the cut/copy/paste menu, and tapping to move the text caret.

When `False`, the user cannot adjust the text selection, copy text, and paste clipboard content into the text field.

Defaults to true.

### `enable_scrible`

Whether iOS 14 Scribble features are enabled. Has effect only on iPads.

Defaults to `True`.

### `enable_suggestions`

Whether to show input suggestions as the user types.

This flag only affects Android. On iOS, suggestions are tied directly to `autocorrect`, so that suggestions are only
shown when `autocorrect` is `True`. On Android autocorrection and suggestion are controlled separately.

Defaults to `True`.

### `filled`

If `True` the decoration's container is filled with theme fill color.

### `fit_parent_size`

Whether the field's height should expand to fill its parent.

When `True`, the `min_lines` and `max_lines` properties are ignored.

Defaults to `False`.

### `focused_bgcolor`

Background [color](/docs/reference/colors) of TextField in focused state.

### `focused_border_color`

Border [color](/docs/reference/colors) in focused state.

### `focused_border_width`

Border width in focused state.

### `focused_color`

Text [color](/docs/reference/colors) when TextField is focused.

### `gradient`

Configures gradient background. 

Value is of type [`Gradient`](/docs/reference/types/gradient).

### `image`

An image to paint above the `bgcolor` or `gradient`.

Value is of type [`DecorationImage`](/docs/reference/types/decorationimage).

### `input_filter`

Provides as-you-type filtering/validation in your `TextField`. 

Value is of type [`InputFilter`](/docs/reference/types/inputfilter).

### `keyboard_brightness`

The appearance of the keyboard.

Has effect only on iOS devices.

Value is of type [`Brightness`](/docs/reference/types/brightness) and defaults to `Brightness.LIGHT`.

### `keyboard_type`

The type of keyboard to use for editing the text.

Value is of type [`KeyboardType`](/docs/reference/types/keyboardtype) and defaults to `KeyboardType.TEXT`.

### `max_length`

Limits a maximum number of characters that can be entered into CupertinoTextField.

### `max_lines`

The maximum number of lines to show at one time, wrapping if necessary. 
This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

If this is `1` (the default), the text will not wrap, but will scroll horizontally instead.

Has no effect when `fit_parent_size` is `True`.

### `min_lines`

The minimum number of lines to occupy when the content spans fewer lines. 
This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

Has no effect when `fit_parent_size` is `True`.

Defaults to `1`.

### `multiline`

`True` if TextField can contain multiple lines of text.

### `obscuring_character`

Character to use when obscuring text if `password` is `True`.

Defaults to `•`.

### `padding`

The padding around the text entry area between the `prefix` and `suffix` or the clear button when `clear_button_mode` is not `VisibilityMode.NEVER`.

Value is of type [`Padding`](/docs/reference/types/padding) and defaults to padding of `7` pixels on all sides.

### `password`

Whether to hide the text being edited.

Defaults to `False`.

### `placeholder_text`

A lighter colored placeholder hint that appears on the first line of the text field when the text entry is empty. Defaults to an empty string.

### `placeholder_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for `placeholder_text`.

### `prefix`

Optional `Control` to place on the line before the input.

### `prefix_visibility_mode`

Defines the visibility of the `prefix` control based on the state of text entry. Has no effect if `prefix` is not specified.

Value is of type [`VisibilityMode`](/docs/reference/types/visibilitymode) and defaults to `VisibilityMode.ALWAYS`.

### `read_only`

Whether the text can be changed.

When this is set to `True`, the text cannot be modified by any shortcut or keyboard operation. The text is still selectable.

Defaults to `False`.

### `rtl`

`True` to set text direction to right-to-left.

Default is `False`.

### `scroll_padding`

Defines the paddint surrounding this field when scrolled.

Value is of type [`Padding`](/docs/reference/types/padding) and defaults to padding of `20` pixels on all sides.

### `selection_color`

The [color](/docs/reference/colors) of TextField selection.

### `shadow`

A list of shadows behind the text field.

### `shift_enter`

Changes the behavior of `Enter` button in `multiline` TextField to be chat-like, i.e. new line can be added with `Shift`+`Enter` and pressing just `Enter` fires `on_submit` event.

### `show_cursor`

Whether the field's cursor is to be shown.

Defaults to `True`.

### `smart_dashes_type`

Whether to allow the platform to automatically format dashes.

This flag only affects iOS versions 11 and above. As an example of what this does, two consecutive hyphen characters will be automatically replaced with one en dash, and three consecutive hyphens will become one em dash. Default is `True`.

### `smart_quotes_type`

Whether to allow the platform to automatically format quotes.

This flag only affects iOS. As an example of what this does, a standard vertical double quote character will be automatically replaced by a left or right double quote depending on its position in a word. Default is `True`.

### `strut_style`

The strut style used for the vertical layout.

Value is of type [`StrutStyle`](/docs/reference/types/strutstyle).

### `suffix`

Optional `Control` to place on the line after the input.

### `suffix_visibility_mode`

Defines the visibility of the `suffix` control based on the state of text entry. Has no effect if `suffix` is not specified.

Value is of type [`VisibilityMode`](/docs/reference/types/visibilitymode) and defaults to `VisibilityMode.ALWAYS`.

### `text_align`

How the text should be aligned horizontally.

Value is of type [`TextAlign`](/docs/reference/types/textalign) and defaults to `TextAlign.LEFT`.

### `text_size`

Text size in virtual pixels.

### `text_vertical_align`

Defines how the text should be aligned vertically.

Value can either be a number ranging from `-1.0` (topmost location) to `1.0` (bottommost location) or of
type [`VerticalAlignment`](/docs/reference/types/verticalalignment). Defaults to `VerticalAlignment.CENTER`.

### `text_style`

The [`TextStyle`](/docs/reference/types/textstyle) to use for the text being edited.

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

### `on_click`

Fires when the control is clicked.

### `on_focus`

Fires when the control has received focus.

### `on_submit`

Fires when user presses ENTER while focus is on TextField.


