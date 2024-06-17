---
title: PermissionType
sidebar_label: PermissionType
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Defines the permissions which can be checked and requested.

`PermissionType` enum has the following values:

### `ACCESS_MEDIA_LOCATION`

Permission for accessing the device's media library.

### `ACCESS_NOTIFICATION_POLICY`

Permission for accessing the device's notification policy.

### `ACTIVITY_RECOGNITION`

Permission for accessing the device's activity recognition.

### `APP_TRACKING_TRANSPARENCY`

Permission for accessing the device's tracking state (iOS only).

### `ASSISTANT`

Permission for accessing the device's assistant.

* On Android, nothing
* On iOS, SiriKit

### `AUDIO`

Permission for accessing the device's audio files from external storage.

### `BACKGROUND_REFRESH`

Permission for reading the current background refresh status (iOS only).

### `BLUETOOTH`

Permission for accessing the device's bluetooth adapter state.

### `BLUETOOTH_ADVERTISE`

Permission for advertising Bluetooth devices

### `BLUETOOTH_CONNECT`

Permission for connecting to Bluetooth devices.

### `BLUETOOTH_SCAN`

Permission for scanning for Bluetooth devices.

### `CALENDAR_FULL_ACCESS`

Permission for reading from and writing to the device's calendar.

### `CALENDAR_WRITE_ONLY`

Permission for writing to the device's calendar.

### `CAMERA`

Permission for accessing the device's camera.

### `CONTACTS`

Permission for accessing the device's contacts.

### `CRITICAL_ALERTS`

Permission for sending critical alerts (iOS only).

### `IGNORE_BATTERY_OPTIMIZATIONS`

Permission for accessing ignore battery optimizations (Android only).

### `LOCATION`

Permission for accessing the device's location.

### `LOCATION_ALWAYS`

Permission for accessing the device's location when the app is running in the background.

### `LOCATION_WHEN_IN_USE`

Permission for accessing the device's location when the app is running in the foreground.

### `MANAGE_EXTERNAL_STORAGE`

Permission for accessing the device's external storage.

### `MEDIA_LIBRARY`

Permission for accessing the device's media library (iOS 9.3+ only).

### `MICROPHONE`

Permission for accessing the device's microphone.

### `NEARBY_WIFI_DEVICES`

Permission for connecting to nearby devices via Wi-Fi.

### `NOTIFICATION`

Permission for pushing notifications.

### `PHONE`

Permission for accessing the device's phone state (Android only).

### `PHOTOS`

Permission for accessing the device's photos.

### `PHOTOS_ADD_ONLY`

Permission for adding photos to the device's photo library (iOS only).

### `REMINDERS`

Permission for accessing the device's reminders (iOS only).

### `REQUEST_INSTALL_PACKAGES`

Permission for requesting installing packages.

### `SCHEDULE_EXACT_ALARM`

Permission for scheduling exact alarms.

### `SENSORS`

Permission for accessing the device's sensors.

### `SENSORS_ALWAYS`

Permission for accessing the device's sensors in background.

### `SMS`

Permission for sending and reading SMS messages (Android only).

### `SPEECH`

Permission for accessing speech recognition.

### `STORAGE`

Permission for accessing external storage.

### `SYSTEM_ALERT_WINDOW`

Permission for creating system alert window (Android only).

### `UNKNOWN`

The unknown only used for return type, never requested.

### `VIDEOS`

Permission for accessing the device's video files from external storage.
