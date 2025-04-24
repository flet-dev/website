---
title: Dismissible
sidebar_label: Dismissible
---

A control that can be dismissed by dragging in the indicated `dismiss_direction`. 
When dragged or flung in the specified `dismiss_direction`, it's content smoothly slides out of view.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/dismissible)

### Dismissible ListView Tiles



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/dismissable/dismissable-listview.py
```

<img src="/img/docs/controls/dismissible/dismissible-listview.gif" className="screenshot-40"/>

## Properties

### `background`

A Control that is stacked behind the `content`. 

If `secondary_background` is also specified, then this control only appears when the content has been dragged down or to the right.

### `content`

A child Control contained by the Dismissible.

### `cross_axis_end_offset`

Specifies the end offset along the main axis once the card has been dismissed.

If non-zero value is given then widget moves in cross direction depending on whether it is positive or negative.

### `dismiss_direction`

The direction in which the control can be dismissed.

Value is of type [`DismissDirection`](/docs/reference/types/dismissdirection).

### `dismiss_thresholds`

The offset threshold the item has to be dragged in order to be considered dismissed. 

Ex: a threshold of `0.4` (the default) means that the item has to be dragged _at least_ 40% in order for it to be dismissed.

It is specified as a dictionary where the key is of type [`DismissDirection`](/docs/reference/types/dismissdirection)
and the value is the threshold(fractional/decimal value between `0.0` and `1.0`):

```python
ft.Dismissible(
    # ...
    dismiss_thresholds={
        ft.DismissDirection.VERTICAL: 0.1,
        ft.DismissDirection.START_TO_END: 0.7
    }
)
```

### `movement_duration`

The duration for card to dismiss or to come back to original position if not dismissed.

### `resize_duration`

The amount of time the control will spend contracting before `on_dismiss` is called.

### `secondary_background`

A control that is stacked behind the `content` and is exposed when the `content` has been dragged up or to the left. 

Has no effect if `background` is not specified.

## Events

### `on_confirm_dismiss`

Gives the app an opportunity to confirm or veto a pending dismissal. The widget cannot be dragged again until the returned this pending dismissal is resolved.

To resolve the pending dismissal, call the `confirm_dismiss(dismiss)` method passing it a boolean representing the decision. If `True`, then the control will be dismissed, otherwise it will be moved back to its original location.

See the example at the top of this page for a possible implementation.

### `on_dismiss`

Fires when this control has been dismissed, after finishing resizing.

### `on_resize`

Fires when this control changes size, for example, when contracting before being dismissed.

### `on_update`

Fires when this control has been dragged.

## Methods

### `confirm_dismiss(dismiss: bool)`

Resolves the pending dismissal. To be called while handling the `on_confirm_dismiss` event.
