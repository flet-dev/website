---
title: Padding
sidebar_label: Padding
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Defines padding for all sides of a rectangle.

`Padding` class has the following properties: 
### `left`

The padding value for the left side of the rectangle.

### `top`

The padding value for the top side of the rectangle.

### `right`

The padding value for the right side of the rectangle.

### `bottom`

The padding value for the bottom side of the rectangle.

## Helper methods

`Padding` can be created via constructor with values for specific sides or created with helper methods:

### `padding.all(value: float)`

Applies the same padding to all sides.

### `padding.symmetric(vertical, horizontal)`

Applies `vertical` padding to top and bottom sides and `horizontal` padding to left and right sides.

### `padding.only(left, top, right, bottom)`

Applies padding to the specified sides.

## Usage example

<img src="/img/docs/controls/container/container-padding-diagram.png" className="screenshot-50" />

```python
container_1.padding = ft.padding.all(10)
container_2.padding = 20 # same as ft.padding.all(20)
container_3.padding = ft.padding.symmetric(horizontal=10)
container_4.padding=padding.only(left=10)
```

