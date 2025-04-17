---
title: PermissionHandler
sidebar_label: PermissionHandler
---

PermissionHandler can check and/or request permissions from the running device for access to various components. Works
on Windows, iOS, Android and web.
Based on the [permission_handler](https://pub.dev/packages/permission_handler) Dart/Flutter package.

PermissionHandler control is non-visual and should be added to [`page.overlay`](/docs/controls/page#overlay) list.

:::info Packaging
To build your Flet app that uses `PermissionHandler` control, add `--include-packages flet_permission_handler`
to `flet build` command, for example:

```
flet build apk --include-packages flet_permission_handler
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic Example


```python reference
https://github.com/flet-dev/examples/blob/example-polishing/python/controls/utility/permission-handler/permission-handler-example.py
```


## Methods

### `check_permission(of: PermissionType)`

Checks the status of the specified [`PermissionType`](/docs/reference/types/permissiontype).

Returns an instance of type [`PermissionStatus`](/docs/reference/types/permissionstatus).

### `open_app_settings()`

Opens the device's settings. Before calling this method, you usually want to briefly remind the user of which permission
is needed and how/where precisely it is to be enabled.

Returns a boolean value: `True` if the device's settings were opened successfully, `False` otherwise.

### `request_permission(of: PermissionType)`

Requests the device for access to the specified [`PermissionType`](/docs/reference/types/permissiontype) from the user.

Returns an instance of type [`PermissionStatus`](/docs/reference/types/permissionstatus).