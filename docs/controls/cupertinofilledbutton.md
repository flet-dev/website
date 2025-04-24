---
title: CupertinoFilledButton
sidebar_label: CupertinoFilledButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An iOS-style button with filled with background color.

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinofilledbutton)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-buttons/cupertino-filled-button-example.py
```


<img src="/img/docs/controls/cupertino-filled-button/cupertino-filled-button.png" className="screenshot-20" />

## Properties

### `content`

A Control representing custom button content.

### `disabled_bgcolor`

The background [color](/docs/reference/colors) of the button when it is disabled.

### `icon`

Icon shown in the button.

### `icon_color`

Icon [color](/docs/reference/colors).

### `min_size`

The minimum size of the button.

Defaults to `44.0`.

### `opacity_on_click`

Defines the opacity of the button when it is clicked.

Defaults to `0.4`. The button will have an opacity of `1.0` when it is not pressed.

### `padding`

The amount of space to surround the `content` control inside the bounds of the button.

### `text`

The text displayed on a button.

### `tooltip`

The text displayed when hovering the mouse over the button.

### `url`

The URL to open when the button is clicked. If registered, `on_click` event is fired after that.

### `url_target`

Where to open URL in the web mode.

Value is of type [`UrlTarget`](/docs/reference/types/urltarget) and defaults to `UrlTarget.BLANK`.

## Events

### `on_blur`

Fires when the button loses focus.

### `on_click`

Fires when a user clicks the button.

### `on_focus`

Fires when the button receives focus.

### `on_long_press`

Fires when a user long-presses the button.
