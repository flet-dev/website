---
title: SimpleAttribution
sidebar_label: SimpleAttribution
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A simple attribution layer displayed on the [`Map`](/docs/controls/map).

## Examples

See [`Map`](/docs/controls/map) Control.

## Properties

### `alignment`

The alignment of the attribution.

Value is of type [`Alignment`](/docs/reference/types/alignment) and defaults to `alignment.bottom_right`.

### `bgcolor`

Color of the box containing the source text.

Defaults to the background color of the app Theme.

### `text`

Attribution text, such as `"OpenStreetMap contributors"`.

## Events

### `on_click`

Fires when the `text` is clicked.
