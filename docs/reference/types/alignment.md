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

### `TOP_LEFT`

Represents the top left corner and is equivalent to `Alignment(-1.0, -1.0)`.

### `TOP_CENTER`

Represents the top center and is equivalent to `Alignment(0.0, -1.0)`.

### `TOP_RIGHT`

Represents the top right corner and is equivalent to `Alignment(1.0, -1.0)`.

### `CENTER_LEFT`

Represents the center left and is equivalent to `Alignment(-1.0, 0.0)`.

### `CENTER`

Represents the center and is equivalent to `Alignment(0.0, 0.0)`.

### `CENTER_RIGHT`

Represents the center right and is equivalent to `Alignment(1.0, 0.0)`.

### `BOTTOM_LEFT`

Represents the bottom left corner and is equivalent to `Alignment(-1.0, 1.0)`.

### `BOTTOM_CENTER`

Represents the bottom center and is equivalent to `Alignment(0.0, 1.0)`.

### `BOTTOM_RIGHT`

Represents the bottom right corner and is equivalent to `Alignment(1.0, 1.0)`.

## Usage example

```python
container_1.alignment = ft.Alignment.CENTER
container_2.alignment = ft.Alignment.TOP_LEFT
container_3.alignment = ft.Alignment(-0.5, -0.5)
