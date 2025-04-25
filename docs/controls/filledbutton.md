---
title: FilledButton
sidebar_label: FilledButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Filled buttons have the most visual impact after the [`FloatingActionButton`](/docs/controls/floatingactionbutton), and
should be used for important, final actions that complete a flow, like **Save**, **Join now**, or **Confirm**.
See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

<img src="/img/docs/controls/filled-button/basic-filled-buttons.png" className="screenshot-20" />

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/filledbutton)

### Filled button


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/filled-button/filled-button-example.py
```


## Properties

### `adaptive`

If the value is `True`, an adaptive Button is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoButton`](/docs/controls/cupertinofilledbutton) is created, which matches the functionality and presentation of this button. On other platforms, a Material `FilledButton` is created.

Defaults to `False`.

### `autofocus`

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

### `bgcolor`

Button's background [color](/docs/reference/colors). If both `bgcolor` and `style.bgcolor` are provided, `bgcolor` value will be used.

### `color`

Button's text [color](/docs/reference/colors). If both `color` and `style.color` are provided, `color` value will be used.

### `content`

A Control representing custom button content.

### `elevation`

Button's elevation. If both `elevation` and `style.elevation` are provided, `elevation` value will be used.

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

## Events

### `on_click`

Fires when a user clicks the button.

### `on_hover`

Fires when a mouse pointer enters or exists the button response area. `data` property of event object contains `true` (string) when cursor enters and `false` when it exits.

### `on_long_press`

Fires when the button is long-pressed.
