---
title: TextSourceAttribution
sidebar_label: TextSourceAttribution
---

A text source attribution displayed on the Map. 

Can be used in [`RichAttribution.attributions`](/docs/controls/maprichattribution) list.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

See [`Map`](/docs/controls/map) Control.

## Properties

### `prepend_copyright`

Whether to add the '©' character to the start of the `text`.

Defaults to `True`.

### `text`

The text of the source attribution styled with `text_style`.

### `text_style`

The style of the text.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

## Events

### `on_click`

Fires when the attribution source is clicked or tapped.
