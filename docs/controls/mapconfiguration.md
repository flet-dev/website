---
title: MapConfiguration
sidebar_label: MapConfiguration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Properties

### `bgcolor`

The background color.

### `initial_center`

The initial center of the map, of type [`MapLatitudeLongitude`](/docs/reference/types/maplatitudelongitude).

### `initial_rotation`

The initial rotation value, of type `OptionalNumber`.

### `initial_zoom`

The initial zoom level, of type `OptionalNumber`.

### `interaction_configuration`

The interaction configuration, of type [`MapInteractionConfiguration`](/docs/reference/types/mapinteractionconfiguration).

### `keep_alive`

A boolean value to keep the map alive.

### `max_zoom`

The maximum zoom level, of type `OptionalNumber`.

### `min_zoom`

The minimum zoom level, of type `OptionalNumber`.

## Events

### `on_event`

Fires when any map events occurs. The event is of type [`MapEvent`](/docs/reference/types/mapevent).

### `on_init`

Fires when the map is initialized.

### `on_long_press`

Fires when a long press event occurs. The event is of type [`TapEvent`](/docs/reference/types/tapevent).

### `on_secondary_tap`

Fires when a secondary tap event occurs. The event is of type [`TapEvent`](/docs/reference/types/tapevent).

### `on_tap`

Fires when a tap event occurs. The event is of type [`TapEvent`](/docs/reference/types/tapevent).
