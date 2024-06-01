---
title: MapEvent
sidebar_label: MapEvent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An enum representing strategies for evicting error tiles.

`MapTileLayerEvictErrorTileStrategy` enum has the following values:

### `DISPOSE`

Dispose of error tiles.

### `NOT_VISIBLE`

Do not display error tiles if not visible.

### `NOT_VISIBLE_RESPECT_MARGIN`

Do not display error tiles if not visible, respecting the margin.