---
title: Alignment
sidebar_label: Alignment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`alignment.Alignment` class has with `x` and `y` properties representing the distance from the center of a rectangle. `x=0`, `y=0` represents the center of the rectangle. `x=-1`, `y=-1` represents the top left of the rectangle, `x=1.0`, `y=1.0` represents the bottom right of the rectangle. There are pre-defined alignment constants in `flet.alignment` module: `top_left`, `top_center`, `top_right`, `center_left`, `center`, `center_right`, `bottom_left`, `bottom_center`, `bottom_right`.

<img src="/img/docs/controls/container/container-alignments-diagram.png" className="screenshot-40" />

For example:

```python

container_1.alignment = alignment.center
container_2.alignment = alignment.top_left
container_3.alignment = alignment.Alignment(-0.5, -0.5)
```
<img src="/img/docs/controls/container/containers-alignments.png" className="screenshot-50" />