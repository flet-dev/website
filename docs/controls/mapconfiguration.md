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

The initial center of the map.

Value is of type [`MapLatitudeLongitude`](/docs/reference/types/maplatitudelongitude).

### `initial_rotation`

The initial rotation value.

### `initial_zoom`

The initial zoom level.

### `interaction_configuration`

The interaction configuration.

Value is of type [`MapInteractionConfiguration`](/docs/reference/types/mapinteractionconfiguration).

### `keep_alive`

A boolean value to keep the map alive.

### `max_zoom`

The maximum zoom level.

### `min_zoom`

The minimum zoom level.

## Events

### `on_event`

Fires when any map events occurs.

Event handler argument is of type [`MapEvent`](/docs/reference/types/mapevent).

### `on_init`

Fires when the map is initialized.

### `on_long_press`

Fires when a long press event occurs.

Event handler argument is of type [`TapEvent`](/docs/reference/types/tapevent).

### `on_secondary_tap`

Fires when a secondary tap event occurs.

Event handler argument is of type [`TapEvent`](/docs/reference/types/tapevent).

### `on_tap`

Fires when a tap event occurs.

Event handler argument is of type [`TapEvent`](/docs/reference/types/tapevent).
