---
title: OutlinedButton
sidebar_label: OutlinedButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.
Outlined buttons pair well with filled buttons to indicate an alternative, secondary action. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/outlinedbutton)

### Basic outlined buttons


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/outlined-button/basic-outlined-buttons.py
```


<img src="/img/docs/controls/outlined-button/outlined-buttons-example.png" className="screenshot-40" />

### Outlined buttons with icons



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/outlined-button/outlined-buttons-with-icons.py
```


<img src="/img/docs/controls/outlined-button/outlined-buttons-icons-example.png" className="screenshot-50" />

### Outlined button with `click` event



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/outlined-button/outlined-button-with-click-event.py
```



<img src="/img/docs/controls/outlined-button/outlined-button-click-event-example.gif" className="screenshot-50" />

### Outlined button with custom content 



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/outlined-button/outlined-buttons-with-custom-content.py
```



<img src="/img/docs/controls/outlined-button/outlined-buttons-custom.png" className="screenshot-50" />


## Properties

### `adaptive`

If the value is `True`, an adaptive button is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoButton`](/docs/controls/cupertinobutton) is created, which matches the functionality and presentation of this button. On other platforms, a Material `ElevatedButton` is created.

Defaults to `False`.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.NONE`.

### `content`

A Control representing custom button content.

### `icon`

Icon shown in the button.

### `icon_color`

Icon [color](/docs/reference/colors).

### `style`

The value is an instance of [`ButtonStyle`](/docs/reference/types/buttonstyle) class. 

### `text`

The text displayed on a button.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `url`

The URL to open when the button is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode.

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.BLANK`.

## Methods

### `focus()`

Moves focus to a button.

## Events

### `on_blur`

Fires when the control has lost focus.

### `on_click`

Fires when a user clicks the button.

### `on_focus`

Fires when the control has received focus.

### `on_hover`

Fires when a mouse pointer enters or exists the button response area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.

### `on_long_press`

Fires when the button is long-pressed.