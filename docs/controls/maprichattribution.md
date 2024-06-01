---
title: RichAttribution
sidebar_label: RichAttribution
---

An animated and interactive attribution layer that supports both logos/images and text (displayed in a popup controlled by an icon button adjacent to the logos).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

See [`Map`](/docs/controls/map) Control.

##  Properties

### `alignment`

The alignment of the attribution. Value is of type [`AttributionAlignment`](/docs/reference/types/attributionalignment).

### `attributions`

A list of text source attributions. List items are of type [`TextSourceAttribution`](/docs/controls/maptextsourceattribution).

### `permanent_height`

The permanent height of the attribution layer. Defaults to `24.0`.

### `popup_bgcolor`

The background [color](/docs/reference/colors) of the popup box.

### `show_flutter_map_attribution`

A boolean value indicating whether to show the Flutter map attribution. Defaults to `True`.