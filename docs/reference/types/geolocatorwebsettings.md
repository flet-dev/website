---
title: GeolocatorWebSettings
sidebar_label: GeolocatorWebSettings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`GeolocatorWebSettings` class has the following values:

### `accuracy`

The accuracy of the location data.

Value is of type [`GeolocatorPositionAccuracy`](/docs/reference/types/geolocatorpositionaccuracy) and defaults to `GeolocatorPositionAccuracy.BEST`.

### `distance_filter`

The minimum distance (measured in meters) a device must move horizontally before an update event is generated.

Value is of type `int` and defaults to `0`.

### `maximum_age`

A value indicating the maximum age of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position.

Value is of type [`Duration`](/docs/reference/types/duration) and defaults to `0`.

### `time_limit`

The timeout interval for the location request. By default there's no time limit.

Value is of type [`Duration`](/docs/reference/types/duration).




