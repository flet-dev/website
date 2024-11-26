---
title: BoxConstraints
sidebar_label: BoxConstraints
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`BoxConstraints` class has the following properties:

### `max_height`

The maximum height that satisfies the constraints, such that `min_height <= max_height <= float("inf")`.

Value is of type [`Number`](/docs/reference/types/aliases#number) and defaults to `float("inf")` - infinity.

### `max_width`

The maximum width that satisfies the constraints, such that `min_width <= max_width <= float("inf")`.

Value is of type [`Number`](/docs/reference/types/aliases#number) and defaults to `float("inf")` - infinity.

### `min_height`

The minimum height that satisfies the constraints, such that `0.0 <= min_height <= max_height`.

Value is of type [`Number`](/docs/reference/types/aliases#number) and defaults to `0.0`.

### `min_width`

The minimum width that satisfies the constraints, such that `0.0 <= min_width <= max_width`.

Value is of type [`Number`](/docs/reference/types/aliases#number) and defaults to `0.0`.
