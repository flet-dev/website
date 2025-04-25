---
title: Stack
sidebar_label: Stack
---

A control that positions its children on top of each other.

This control is useful if you want to overlap several children in a simple way, for example having some text and an image, overlaid with a gradient and a button attached to the bottom.

Stack is also useful if you want to implement [implicit animations](/docs/cookbook/animations) that require knowing absolute position of a target value.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/layout/stack)

### Transparent title over an image

<img src="/img/docs/controls/stack/image-title.png" className="screenshot-50" />


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/stack/image-title.py
```


### Avatar with online status

<img src="/img/docs/controls/stack/avatar-with-status.png" className="screenshot-10"/>


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/stack/avatar-with-status.py
```


### Absolute positioning inside Stack

<img src="/img/docs/controls/stack/stack-absolute-position.png" className="screenshot-50"/>


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/layout/stack/absolute-positioned.py
```


## Properties

### `alignment`

The alignment of the non-positioned (those that do not specify an alignment - ex neither top nor bottom - in a particular axis and partially-positioned `controls`.

### `clip_behavior`

The content will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior) and defaults to `ClipBehavior.HARD_EDGE`.

### `controls`

A list of Controls to display inside the Stack. The last control in the list is displayed on top.

### `fit`

How to size the non-positioned `controls`.

Value is of type [`StackFit`](/docs/reference/types/stackfit) and defaults to `StackFit.LOOSE`.