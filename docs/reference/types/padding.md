---
title: Padding
sidebar_label: Padding
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`padding.Padding` class has the following properties to set padding for all sides of the rectangle:: 
* `left`
* `top`
* `right`
* `bottom`

An instance of `padding.Padding` can be created via constructor with values for specific sides or created with helper methods:

* `padding.all(value: float)`
* `padding.symmetric(vertical, horizontal)`
* `padding.only(left, top, right, bottom)`

For example:

```python

container_1.padding = ft.padding.all(10)
container_2.padding = 20 # same as ft.padding.all(20)
container_3.padding = ft.padding.symmetric(horizontal=10)
container_4.padding=padding.only(left=10)
```

<img src="/img/docs/controls/container/container-padding-diagram.png" className="screenshot-50" />