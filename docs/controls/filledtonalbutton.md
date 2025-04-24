---
title: FilledTonalButton
sidebar_label: FilledTonalButton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A filled tonal button is an alternative middle ground between [`FilledButton`](/docs/controls/filledbutton)
and [`OutlinedButton`](/docs/controls/outlinedbutton) buttons. They’re useful in contexts where a lower-priority button
requires slightly more emphasis than an outline would give, such as "Next" in an onboarding flow. Tonal buttons use the
secondary color mapping. See [Material 3 buttons](https://m3.material.io/components/buttons/overview) for more info.

<img src="/img/docs/controls/filled-tonal-button/basic-filled-tonal-buttons.png" className="screenshot-20" />

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/filledtonalbutton)

### Filled tonal button



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/buttons/filled-tonal-button/filled-tonal-button-example.py
```


## Properties

### `adaptive`

If the value is `True`, an adaptive Button is created based on whether the target platform is iOS/macOS.

On iOS and macOS, a [`CupertinoButton`](/docs/controls/cupertinobutton) is created, which matches the functionality and presentation of this button. On other platforms, a Material `FilledTonalButton` is created.

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