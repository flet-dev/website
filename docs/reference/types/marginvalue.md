---
title: MarginValue
sidebar_label: MarginValue
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MarginValue` type can be one of the following:
* `None`
* `int`
* `float`
*  `margin.Margin` class

`margin.Margin` class has the properties to set margins for all sides of the rectangle: 
* `left`
* `top`
* `right`
* `bottom`

An instance of `margin.Margin` can be created via constructor with values for specific sides or created with helper methods:

* `margin.all(value)`
* `margin.symmetric(vertical, horizontal)`
* `margin.only(left, top, right, bottom)`

For example:

```python

container_1.margin = margin.all(10)
container_2.margin = 20 # same as margin.all(20)
container_3.margin = margin.symmetric(vertical=10)
container_4.margin = margin.only(left=10)
```
<img src="/img/docs/controls/container/container-margin-diagram.png" className="screenshot-50" />