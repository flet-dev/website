---
title: ListTileAlignment
sidebar_label: ListTileAlignment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Defines the alignment of the `leading` and `trailing` controls in a [`ListTile`](/docs/controls/listtile).

`ListTileAlignment` enum has the following values:

### `BOTTOM`

The bottoms of the `leading` and `trailing` controls are placed `min_vertical_padding` above the bottom of `title`.

### `CENTER`

Centers the `leading` and `trailing` controls relative to the titles.

### `THREE_LINE`

The top of the `leading` and `trailing` controls are placed `min_vertical_padding` below the top of the `title`
if `is_three_line=True`, otherwise they're centered relative to the titles.

### `TITLE_HEIGHT`

The tops of the `leading` and `trailing` controls are placed `16` units below the top of the `title` if the titles'
overall height is greater than `72`, otherwise they're centered relative to the titles.

### `TOP`

The tops of the `leading` and `trailing` controls are placed `min_vertical_padding` below the top of `title`.
