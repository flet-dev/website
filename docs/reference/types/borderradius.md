---
title: BorderRadius
sidebar_label: BorderRadius
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`border_radius.BorderRadius` class has the following properties describing 4 corner values:
* `top_left`
* `top_right`
* `bottom_left`
* `bottom_right`

The object could be created with a constructor where all corner values set separately or with helper methods:

* `border_radius.all(value)`
* `border_radius.horizontal(left: float = 0, right: float = 0)`
* `border_radius.vertical(top: float = 0, bottom: float = 0)`
* `border_radius.only(top_left, top_right, bottom_left, bottom_right)`

For example:

```python
container_1.border_radius= ft.border_radius.all(30)
```