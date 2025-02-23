---
slug: tap-into-native-android-and-ios-apis-with-pyjnius-and-pyobjus
title: Tap into native Android and iOS APIs with PyJnius and PyObjus
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

Introduction

## PyJnius for Android

PyJnius is a Python library for accessing Java classes using the **Java Native Interface** (JNI).

### Adding to a project

Add `pyjnius` dependency for Android builds only (other settings in `pyproject.toml` were omitted for brevity):

```toml
[project]
name = "pyjnius"
version = "0.1.0"
dependencies = [
  "flet==0.27.1"
]

[tool.flet.android]
dependencies = [
  "pyjnius"
]
```

### Usage examples

Here are some example of how PyJnius can be used in your Flet Android app.

#### Getting Android OS details

```python
from jnius import autoclass

# Get Build and Build.VERSION classes
Build = autoclass('android.os.Build')
Version = autoclass('android.os.Build$VERSION')

# Get OS details
device_model = Build.MODEL
manufacturer = Build.MANUFACTURER
brand = Build.BRAND
hardware = Build.HARDWARE
product = Build.PRODUCT
device = Build.DEVICE
os_version = Version.RELEASE
sdk_version = Version.SDK_INT
```

#### Listing Bluetooth devices

```python
from jnius import autoclass

# Get BluetoothAdapter instance
BluetoothAdapter = autoclass('android.bluetooth.BluetoothAdapter')
bluetooth_adapter = BluetoothAdapter.getDefaultAdapter()

if bluetooth_adapter is None:
    print("Bluetooth not supported on this device")
else:
    if not bluetooth_adapter.isEnabled():
        print("Bluetooth is disabled. Please enable it.")
    else:
        print("Bluetooth is enabled.")

        # Get paired devices
        paired_devices = bluetooth_adapter.getBondedDevices()
        for device in paired_devices.toArray():
            print(f"Device Name: {device.getName()}, MAC Address: {device.getAddress()}")
```

### Accessing the Activity

App main activity instance can be retrieved with the following code:

```python
import os
from jnius import autoclass

activity_host_class = os.getenv("MAIN_ACTIVITY_HOST_CLASS_NAME")
assert activity_host_class
activity_host = autoclass(activity_host_class)
activity = activity_host.mActivity
```

Heck, you can basically call any Android API using PyJnius - endless posibilities!

Check complete [Flet PyJnius example](https://github.com/flet-dev/python-package-tests/tree/main/pyjnius).

For more PyJnius examples and API refer to the [PyJnius Documentation](https://pyjnius.readthedocs.io/en/latest/quickstart.html).

## PyObjus for iOS

TBD

https://pyobjus.readthedocs.io/en/latest/quickstart.html

## Plyer challenge

https://pub.dev/packages/device_info_plus - for Android and iOS