---
title: Geolocator
sidebar_label: Geolocator
---

Geolocator fetches Position from device GPS. Works on macOS, Windows, iOS, Android and web.
Based on the [geolocator](https://pub.dev/packages/geolocator) Dart/Flutter package.

Geolocator control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `Geolocator` control add `flet-geolocator` to `dependencies` key of the `[project]` section of your `pyproject.toml` file, for
example:

```toml
[project]
...
dependencies = [
  "flet==0.27.6",
  "flet-geolocator==0.1.0",
]
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/utility/geolocator/geolocator-example.py
```

## Properties

### `location_settings`

Value is of type [`GeolocatorSettings`](/docs/reference/types/geolocatorsettings).

## Methods

### `get_current_position(accuracy, location_settings)`

Gets the current position of the device with the desired accuracy and settings.

This method has the following properties:

* `accuracy`: value is of type [`GeolocatorPositionAccuracy`](/docs/reference/types/geolocatorpositionaccuracy) and
  defaults to `GeolocatorPositionAccuracy.BEST`.
* `location_settings`: value is of type [`GeolocatorSettings`](/docs/reference/types/geolocatorsettings). If not specified, then the [`location_settings`](#location_settings) property is used.

Returns an instance of type [`GeolocatorPosition`](/docs/reference/types/geolocatorposition).

**Note:** Depending on the availability of different location services, this can take several seconds.
It is recommended to call the `get_last_known_position()` method first to receive a known/cached position and update it
with the result of `get_current_position()`

### `get_last_known_position()`

Gets the last known position of the device with the specified accuracy. The accuracy can be defined using the [`location_settings`](#location_settings) property.

Returns an instance of type [`GeolocatorPosition`](/docs/reference/types/geolocatorposition).

### `get_permission_status()`

Gets which permission the app has been granted to access the device's location.

Returns an instance of type [`GeolocatorPermissionStatus`](/docs/reference/types/geolocatorpermissionstatus).

### `request_permission()`

Requests the device for access to the device's location.

Returns an instance of type [`GeolocatorPermissionStatus`](/docs/reference/types/geolocatorpermissionstatus).

### `is_location_service_enabled()`

Checks if location service is enable.

Returns a boolean value: `True` if location service is enabled, `False` otherwise.

### `open_app_settings()`

Attempts to open device's app settings.

Returns a boolean value: `True` if the device's settings were opened successfully, `False` otherwise.

### `open_location_settings()`

Attempts to open device's location settings.

Returns a boolean value: `True` if the device's settings were opened successfully, `False` otherwise.

## Events

### `on_error`

Fires when an error occurs.

### `on_position_change`

Fires when the position of the device changes.

Event handler argument is of type [`GeolocatorPositionChangeEvent`](/docs/reference/types/geolocatorpositionchangeevent).