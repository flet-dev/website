---
title: PermissionStatus
sidebar_label: PermissionStatus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Defines the state of a [`PermissionType`](/docs/reference/types/permissiontype).

`PermissionStatus` enum has the following values:

### `DENIED`

The user denied access to the requested feature, permission needs to be asked first.

### `GRANTED`

The user granted access to the requested feature.

### `LIMITED`

The user has authorized this application for limited access. So far this is only relevant for the Photo Library picker.

Only supported on iOS 14+.

### `PERMANENTLY_DENIED`

Permission to the requested feature is permanently denied, the permission dialog will not be shown when requesting this
permission. The user may still change the permission status in the settings.

* On Android 11+ (API 30+) it indicates whether the user denied the permission for a second time.
* Below Android 11 (API 30) it indicates whether the user denied access to the requested feature and selected to never
  again show a request.
* On iOS it indicates if the user has denied access to the requested feature.

### `PROVISIONAL`

The application is provisionally authorized to post non-interruptive user notifications.

Only supported on iOS 12+.

### `RESTRICTED`

The OS denied access to the requested feature. The user cannot change this app's status, possibly due to active
restrictions such as parental controls being in place.

Only supported on iOS.