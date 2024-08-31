---
title: GeolocatorAppleSettings
sidebar_label: GeolocatorAppleSettings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`GeolocatorAppleSettings` class has the following values:

### `accuracy`

The accuracy of the location data.

Value is of type [`GeolocatorPositionAccuracy`](/docs/reference/types/geolocatorpositionaccuracy) and defaults to `GeolocatorPositionAccuracy.BEST`.

### `activity_type`

The location manager uses the information in this property as a cue to determine when location updates may be automatically paused.

Value is of type [`GeolocatorActivityType`](/docs/reference/types/geolocatoractivitytype) and defaults to `GeolocatorActivityType.OTHER`.

### `allow_background_location_updates`

Whether to allow the app to receive location updates in the background.

Value is of type `bool` and defaults to `True`.

### `distance_filter`

The minimum distance (measured in meters) a device must move horizontally before an update event is generated.

Value is of type `int` and defaults to `0`.

### `show_background_location_indicator`

Flag to ask the Apple OS to show the background location indicator (iOS only) if app starts up and background and requests the users location.
For this setting to work and for the location to be retrieved the user must have granted "always" permissions for location retrieval.

Value is of type `bool` and defaults to `False`.

### `time_limit`

The timeout interval for the location request. By default there's no time limit.

Value is of type [`Duration`](/docs/reference/types/duration).

### `pause_location_updates_automatically`

Allows the location manager to pause updates to improve battery life on the target device without sacrificing location data. When this property is set to `True`, the location manager pauses updates (and powers down the appropriate hardware) at times when the location data is unlikely to change.

Value is of type `bool` and defaults to `False`.


