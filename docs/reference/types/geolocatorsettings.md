---
title: GeolocatorSettings
sidebar_label: GeolocatorSettings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Parent to the following classes:
- [`GeolocatorWebSettings`](/docs/reference/types/geolocatorwebsettings)
- [`GeolocatorAndroidSettings`](/docs/reference/types/geolocatorandroidsettings)
- [`GeolocatorAppleSettings`](/docs/reference/types/geolocatorapplesettings)

`GeolocatorSettings` class has the following values:

### `accuracy`

The accuracy of the location data.

Value is of type [`GeolocatorPositionAccuracy`](/docs/reference/types/geolocatorpositionaccuracy) and defaults to `GeolocatorPositionAccuracy.BEST`.

### `distance_filter`

The minimum distance (measured in meters) a device must move horizontally before an update event is generated.

Value is of type `int` and defaults to `0`.

### `time_limit`

The timeout interval for the location request. By default there's no time limit.

Value is of type [`Duration`](/docs/reference/types/duration).




