---
title: GeolocatorPosition
sidebar_label: GeolocatorPosition
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`GeolocatorPosition` class has the following values:

### `accuracy`

The estimated horizontal accuracy of the position in meters.

### `altitude`

The altitude of the device in meters.

### `altitude_accuracy`

The estimated vertical accuracy of the position in meters.

### `floor`

The floor specifies the floor of the building on which the device is located.

### `heading`

The heading in which the device is traveling in degrees.

### `heading_accuracy`

The estimated heading accuracy of the position in degrees.

### `is_mocked`

Will be true on Android (starting from API lvl 18) when the location came from the mocked provider.

### `latitude`

The latitude of this position in degrees normalized to the interval -90.0 to +90.0 (both inclusive).

### `longitude`

The longitude of the position in degrees normalized to the interval -180 (exclusive) to +180 (inclusive).

### `speed`

The speed at which the devices is traveling in meters per second over ground.

### `speed_accuracy`

The estimated speed accuracy of this position, in meters per second.

### `timestamp`

The time at which this position was determined.

