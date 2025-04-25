---
title: SelectionArea
sidebar_label: SelectionArea
---

Flet controls are not selectable by default. `SelectionArea` is used to enable selection for its `content`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Selectable Text controls



```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/selection-area/selection-area-example.py
```

<img src="/img/docs/controls/selection-area/selection-area.gif" className="screenshot-40"/>

## Properties

### `content`

A child Control contained by the SelectionArea. If you need to have multiple selectable controls, use `Row`, `Column`, or `Stack`, which have a `controls` property, and then provide multiple controls to that control.

## Events

### `on_change`

Fires when the selected content changes.

