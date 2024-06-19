---
title: GeolocatorPermissionStatus
sidebar_label: GeolocatorPermissionStatus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Represent the possible location permissions.

`GeolocatorPermissionStatus` enum has the following values:

### `ALWAYS`

Permission to access the device's location is allowed even when the App is running in the background.

### `DENIED`

Permission to access the device's location is denied, the app should try to request permission using
the [`Geolocator.request_permission()`](/docs/controls/geolocator#request_permission) method.

### `DENIED_FOREVER`

Permission to access the device's location is permanently denied. When requesting permissions the permission dialog will
not be shown until the user updates the permission in the app settings.

### `UNABLE_TO_DETERMINE`

Permission status cannot be determined. This permission is only returned by
the [`Geolocator.check_permission()`](/docs/controls/geolocator#get_permission_status) method on the web platform for
browsers that did not implement the [Permission API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API).

### `WHILE_IN_USE`

Permission to access the device's location is allowed only while the App is in use.


