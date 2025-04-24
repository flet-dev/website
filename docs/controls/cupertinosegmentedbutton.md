---
title: CupertinoSegmentedButton
sidebar_label: CupertinoSegmentedButton
---

An iOS-style segmented button.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/buttons/cupertinosegmentedbutton)

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/cupertino/cupertino-buttons/cupertino-segmented-button-example.py
```


<img src="/img/docs/controls/cupertino-segmented-button/basic-cupertino-segmented-button.gif" className="screenshot-40"/>

## Properties

### `border_color`

The [color](/docs/reference/colors) of the button's border.

### `click_color`

The [color](/docs/reference/colors) used to fill the background of this control when temporarily interacting with
through a long press or drag.

Defaults to the `selected_color` with 20% opacity.

### `controls`

A list of `Control`s to display as segments inside the CupertinoSegmentedButton.

### `padding`

The button's padding. Padding value is an instance of [`Padding`](/docs/reference/types/padding) class.

### `selected_color`

The [color](/docs/reference/colors) of the button when it is selected.

### `selected_index`

The index (starting from 0) of the selected segment in the `controls` list.

### `text`

The text to be shown in the button. In case both `text` and `content` are provided, then `content` will be used.

### `trailing_icon`

An optional icon to display at the right of the `text` or `content` control. 

### `unselected_color`

The [color](/docs/reference/colors) of the button when it is not selected.


## Events

### `on_change`

Fires when the state of the button is changed - when one of the `controls` is clicked.