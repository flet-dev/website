---
title: Border
sidebar_label: Border
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`border.Border` class has the following properties describing 4 sides of the rectangle:
* `top`
* `right`
* `bottom`
* `left`

Each side of the border is described by an instance of [`border.BorderSide`](/docs/reference/types/borderside) class. The value of `border` property is an instance of `border.Border` class describing all 4 sides of the rectangle. Helper methods available to set border styles:

* `border.all(width, color)`
* `border.symmetric(vertical: BorderSide, horizontal: BorderSide)`
* `border.only(left: BorderSide, top: BorderSide, right: BorderSide, bottom: BorderSide)`.

For example:

```python
container_1.border = ft.border.all(10, ft.colors.PINK_600)
container_1.border = ft.border.only(bottom=ft.border.BorderSide(1, "black"))