---
title: Alignment
sidebar_label: Alignment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Used to define an alignment relative to the center.

`Alignment` class has the following properties:

### `x` 

Represents the horizontal distance from the center. It's value ranges between `-1.0` and `1.0`.

### `y` 

Represents the vertical distance from the center.  It's value ranges between `-1.0` and `1.0`.

## Pre-defined alignments

<img src="/img/docs/controls/container/container-alignments-diagram.png" className="screenshot-40" />

### `top_left`

Represents the top left corner and is equivalent to `Alignment(-1.0, -1.0)`.

### `top_center`

Represents the top center and is equivalent to `Alignment(0.0, -1.0)`.

### `top_right`

Represents the top right corner and is equivalent to `Alignment(1.0, -1.0)`.

### `center_left`

Represents the center left and is equivalent to `Alignment(-1.0, 0.0)`.

### `center`

Represents the center and is equivalent to `Alignment(0.0, 0.0)`.

### `center_right`

Represents the center right and is equivalent to `Alignment(1.0, 0.0)`.

### `bottom_left`

Represents the bottom left corner and is equivalent to `Alignment(-1.0, 1.0)`.

### `bottom_center`

Represents the bottom center and is equivalent to `Alignment(0.0, 1.0)`.

### `bottom_right`

Represents the bottom right corner and is equivalent to `Alignment(1.0, 1.0)`.

## Usage example

```python
container_1.alignment = ft.alignment.center
container_2.alignment = ft.alignment.top_left
container_3.alignment = ft.Alignment(-0.5, -0.5)
```
<img src="/img/docs/controls/container/containers-alignments.png" className="screenshot-50" />