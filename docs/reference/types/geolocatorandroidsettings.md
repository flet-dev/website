---
title: GeolocatorAndroidSettings
sidebar_label: GeolocatorAndroidSettings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`GeolocatorAndroidSettings` class has the following values:

### `accuracy`

The accuracy of the location data.

Value is of type [`GeolocatorPositionAccuracy`](/docs/reference/types/geolocatorpositionaccuracy) and defaults to `GeolocatorPositionAccuracy.BEST`.

### `distance_filter`

The minimum distance (measured in meters) a device must move horizontally before an update event is generated.

Value is of type `int` and defaults to `0`.

### `force_location_manager`

Forces the Geolocator plugin to use the legacy LocationManager instead of the FusedLocationProviderClient.

Value is of type `bool` and defaults to `False`.

### `foreground_notification_text`

The body used for the foreground service notification.

### `foreground_notification_title`

The title used for the foreground service notification.

### `foreground_notification_enable_wake_lock`

Whether wakelock should be acquired when background execution is started. If this is `False` then the system can still sleep and all location events will be received at once when the system wakes up again.

Wake lock permissions should be obtained first by using [`PermissionHandler`](/docs/controls/permissionhandler).

Has no effect if `foreground_notification_text` or `foreground_notification_title` are not set.

Defaults to `False`.

### `foreground_notification_enable_wifi_lock`

Whether WifiLock is acquired when background execution is started. This allows the application to keep the Wi-Fi radio awake, even when the user has not used the device in a while (e. g. for background network communications).

Wifi lock permissions should be obtained first by using [`PermissionHandler`](/docs/controls/permissionhandler).

Has no effect if `foreground_notification_text` or `foreground_notification_title` are not set.

Defaults to `False`.

### `foreground_notification_color`

Accent [color](/docs/reference/colors) to be applied by the standard Style templates when presenting the notification.

Has no effect if `foreground_notification_text` or `foreground_notification_title` are not set.

### `foreground_notification_channel_name`

The user visible name of the notification channel. The notification channel name will be displayed in the system settings. The maximum recommended length is 40 characters, the name might be truncated if it is to long.

Has no effect if `foreground_notification_text` or `foreground_notification_title` are not set.

Value is of type `str` and defaults to `"Background Location"`.

### `foreground_notification_set_ongoing`

Whether the displayed notification is persistent and the user cannot dismiss it.

Has no effect if `foreground_notification_text` or `foreground_notification_title` are not set.

Defaults to `True`.

### `interval_duration`

The desired interval for active location updates.

Value is of type [`Duration`](/docs/reference/types/duration) and defaults to 5000 milliseconds.

### `time_limit`

The timeout interval for the location request. By default there's no time limit.

Value is of type [`Duration`](/docs/reference/types/duration).

### `use_mls_altitude`

Whether the altitude should be calculated as MSL (EGM2008) from NMEA messages and reported as the altitude instead of using the geoidal height (WSG84). Setting this property true will help to align Android altitude to that of iOS which uses MSL.

This property only works with position stream updates ([`Geolocator.on_position_change`](/docs/controls/geolocator#on_position_change)) and has no effect when getting the current position or last known position.

Value is of type `bool` and defaults to `False`.




