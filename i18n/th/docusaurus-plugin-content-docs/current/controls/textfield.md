---
title: TextField
sidebar_label: TextField
slug: textfield
---

A material design text field.

A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Textbox, Button, Text
with flet.page("basic-textboxes") as page:
  def button_clicked(e):
        t.value = f"Textboxes values are:  '{tb1.value}', '{tb2.value}', '{tb3.value}', '{tb4.value}', '{tb5.value}'."
        page.update()

  t = Text()
  tb1 = Textbox(label='Standard')
  tb2 = Textbox(label='Disabled', disabled=True, value='First name')
  tb3 = Textbox(label='Read-only', read_only=True, value='Last name')  
  tb4 = Textbox(label="With placeholder", placeholder='Please enter text here')
  tb5 = Textbox(label='With an icon', icon='Emoji2')
  b = Button(text='Submit', on_click=button_clicked)
  page.add(tb1, tb2, tb3, tb4, tb5, b, t)

  input()
```
  </TabItem>
</Tabs>

### TextField with `on_change` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Text, Textbox

with flet.page("textbox-with-change-event") as page:

    def textbox_changed(e):
        t.value = e.control.value
        page.update()

    t = Text()
    tb = Textbox(
        label="Textbox with 'change' event:",
        on_change=textbox_changed,
    )

    page.add(tb, t)
    input()
```
  </TabItem>
</Tabs>

### Password with reveal button

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Textbox
with flet.page("password-with-reveal-button") as page:

  page.add(Textbox(label='Password with reveal button', password=True))
  
```
  </TabItem>
</Tabs>

### Multiline TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Textbox
with flet.page("multiline-textboxes") as page:

  page.add(
      Textbox(label='standard', multiline=True),
      Textbox(label='disabled', multiline=True, disabled=True, value='line1\nline2\nline3\nline4\nline5\n'),
      Textbox(label='With auto adjusted height', multiline=True, auto_adjust_height=True))
  
```
  </TabItem>
</Tabs>

### Underlined and borderless TextFields

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Textbox
with flet.page("underlined-and-borderless-textboxes") as page:

  page.add(
    Textbox(label='Underlined', underlined=True, placeholder='Enter text here'),
    Textbox(label='Borderless', borderless=True, placeholder='Enter text here'))
  
```
  </TabItem>
</Tabs>

### TextFields with prefixes and suffixes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Textbox
with flet.page("suffix-prefix-textboxes") as page:

  page.add(
    Textbox(label='With prefix', prefix='https://'),
    Textbox(label='With suffix', suffix='.com'),
    Textbox(label='With prefix and suffix', prefix='https://', suffix='.com'))
  
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODOcontrol,
```

  </TabItem>
</Tabs>

## Properties

### `value`

Current value of the TextField.

### `keyboard_type`

The type of keyboard to use for editing the text:

* `text`
* `multiline`
* `number`
* `phone`
* `datetime`
* `email`
* `url`
* `visiblePassword`
* `name`
* `streetAddress`
* `none`

### `multiline`

`True` if TextField can contain multiple lines of text.

### `min_lines`

The minimum number of lines to occupy when the content spans fewer lines.

This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

Default is `1`.

### `max_lines`

The maximum number of lines to show at one time, wrapping if necessary.

This affects the height of the field itself and does not limit the number of lines that can be entered into the field.

If this is `1` (the default), the text will not wrap, but will scroll horizontally instead.

### `password`

Whether to hide the text being edited. Default is `False`.

### `can_reveal_password`

Displays a toggle icon button that allows revealing the entered password.

### `read_only`

Whether the text can be changed.

When this is set to `True`, the text cannot be modified by any shortcut or keyboard operation. The text is still selectable.

Defaults to `False`.

### `shift_enter`

Changes the behavior of `Enter` button in `multiline` TextField to be chat-like, i.e. new line can be added with `Shift`+`Enter` and pressing just `Enter` fires `on_submit` event.

### `text_align`

How the text should be aligned horizontally: `left` (default), `right`, `center`, `justify`, `start`, `end`.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `label`

Optional text that describes the input field.

When the input field is empty and unfocused, the label is displayed on top of the input field (i.e., at the same location on the screen where text may be entered in the input field). When the input field receives focus (or if the field is non-empty) the label moves above, either vertically adjacent to, or to the center of the input field.

### `icon`

The name of the icon to show before the input field and outside of the decoration's container.

### `border`

Border around input: `outline` (default), `underline`, `none`.

### `content_padding`

The padding for the input decoration's container.

See [`Container.padding`](container#padding) for more information about padding and possible values.

### `filled`

If `True` the decoration's container is filled with theme fillColor.

### `hint_text`

Text that suggests what sort of input the field accepts.

Displayed on top of the input when the it's empty and either (a) `label` is null or (b) the input has the focus.

### `helper_text`

Text that provides context about the input's value, such as how the value will be used.

If non-null, the text is displayed below the input decorator, in the same location as `error_text`. If a non-null `error_text` value is specified then the helper text is not shown.

### `counter_text`

Optional text to place below the line as a character count.

If null or an empty string and counter isn't specified, then nothing will appear in the counter's location.

### `error_text`

Text that appears below the input border.

If non-null, the border's color animates to red and the `helper_text` is not shown.

### `prefix`

Optional `Control` to place on the line before the input.

This can be used, for example, to add some padding to text that would otherwise be specified using `prefix_text`, or to add a custom control in front of the input. The control's baseline is lined up with the input baseline.

Only one of `prefix` and `prefix_text` can be specified.

The `prefix` appears after the `prefix_icon`, if both are specified.

### `prefix_icon`

An icon that appears before the `prefix` or `prefix_text` and before the editable part of the text field, within the decoration's container.

### `prefix_text`

Optional text `prefix` to place on the line before the input.

### `suffix`

Optional `Control` to place on the line after the input.

This can be used, for example, to add some padding to the text that would otherwise be specified using `suffix_text`, or to add a custom control after the input. The control's baseline is lined up with the input baseline.

Only one of `suffix` and `suffix_text` can be specified.

The `suffix` appears before the `suffix_icon`, if both are specified.

### `suffix_icon`

An icon that appears after the editable part of the text field and after the `suffix` or `suffix_text`, within the decoration's container.

### `suffix_text`

Optional text `suffix` to place on the line after the input.

## Methods

### `focus()`

Moves focus to a TextField.

## Events

### `on_change`

Fires when the typed input for the TextField has changed.

### `on_submit`

Fires when user presses ENTER while focus is on TextField.

### `on_focus`

Fires when the control has received focus.

### `on_blur`

Fires when the control has lost focus.