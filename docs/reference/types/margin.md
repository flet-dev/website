---
title: Margin
sidebar_label: Margin
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`Margin` class has the properties to set margins for all sides of the rectangle: 

### `left`
### `top`
### `right`
### `bottom`

## Helper methods

An instance of `margin.Margin` can be created via constructor with values for specific sides or created with helper methods:

### `margin.all(value)`

Applies the same margin to all sides.

### `margin.symmetric(vertical, horizontal)`

Applies `vertical` margin to top and bottom sides and `horizontal` margin to left and right sides.

### `margin.only(left, top, right, bottom)`

Applies margin to the specified sides.

## Usage example

<img src="/img/docs/controls/container/container-margin-diagram.png" className="screenshot-50" />

```python
container_1.margin = margin.all(10)
container_2.margin = 20 # same as margin.all(20)
container_3.margin = margin.symmetric(vertical=10)
container_4.margin = margin.only(left=10)
```
