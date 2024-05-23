---
title: Integrating existing Flutter packages into your Flet app
sidebar_label: Integrating existing Flutter packages
---

:::info Work in progress
The guide is being updated.
:::

## Introduction

Flet controls implement many Flutter built-in widgets which could be enough to create even the most complex apps. However, not all Flutter widgets or 3rd-pary packages could be supported by Flet team or added to Flet core.

Flet framework provides extensibility mechanism to build your Flet app with widgets or/and API from your own or [3rd-party Flutter packages](https://pub.dev/packages?sort=popularity).

### Prerequisites

To integrate custom Flutter package into Flet you need to have basic understanding of how to create Flutter apps and packages in Dart language and have Flutter development environment configured. See [Flutter Getting Started](https://docs.flutter.dev/get-started/install) for more information about Flutter and Dart.

## Creating Flet extension

Flet extension consists of the following parts:

* Flet Dart package

* Python control

Flet Dart package contains Flutter widget ... (Feodor)

Python control is a Python class that you will use in your Flet program .

For example, take a look at a basic [Flet extension](https://github.com/InesaFitsner/extend-flet-example) for [flutter_spinkit](https://pub.dev/packages/flutter_spinkit) package. 

### Flet Dart package

To create a new [Dart package](https://docs.flutter.dev/packages-and-plugins/developing-packages#dart), run the following command:
```
flutter create --template=package <package_name>
```

You will see this:
```

```

You need to add scr folder with two files...Flet Dart package should have the following structure:

```
└── <package_name>
    ├── lib
    │   ├── <package_name>.dart
    │   └── src
    │       ├── create_control.dart
    │       └── <control_name>.dart
    └── pubspec.yaml
        
```

#### `pubspec.yaml`

A yaml file containing metadata that specifies the package's dependencies.

In your `pubspec.yaml` you should add dependency to `flet` and Flutter package for which you are creating your extension. 

In the Flet Spinkit example, `pubspec.yaml` contains dependency to `flutter_spinkit`:
```yaml
dependencies:
  flet: ^0.22.0
  flutter_spinkit: ^5.2.1
  
```

#### `<package_name>.dart`

A starter app containing Dart code for the package. It should have the following contents:

```dart
library <package_name>;

export "../src/create_control.dart" show createControl, ensureInitialized;
```

It will export two methods: `createControl` method that will return your Dart (Feodor)

#### `create_control.dart`

Flet calls createControl for all controls.... (Feodor)

```dart
import 'package:flet/flet.dart';

import 'spinkit.dart';

CreateControlFactory createControl = (CreateControlArgs args) {
  switch (args.control.type) {
    case "spinkit":
      return SpinkitControl(
        parent: args.parent,
        control: args.control,
      );
    default:
      return null;
  }
};

void ensureInitialized() {
  // nothing to initialize
}
```

#### `<control-name>.dart`

Here you create Flutter "wrapper" widget that will build Flutter widget or API that you want to use in your Flet app.

Wrapper widget connects your contr... (Feodor)

connects Python control with its state and events to a Flutter widget or API. (Feodor)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class SpinkitControl extends StatelessWidget {
  const SpinkitControl({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const SpinKitRotatingCircle(
      color: Colors.red,
      size: 100.0,
    );
  }
}

```

As a proof of concept, we would like to see the hardcoded `SpinKitRotatingCircle` in our Flet program, and later we will get to customizing its properties. 

### Python control

Python control is a Python class that you can create in your Flet app or as an external Python module. In the Flet Spinkit example, we created Spinkit class in `/controls/spinkit.py` file:

```python

from flet_core.control import Control


class Spinkit(Control):
    """
    Spinkit Control.
    """

    def __init__(self):
        Control.__init__(self)

    def _get_control_name(self):
        return "spinkit"

```

The minumal reqirements for this class is that it has to be inherited from Flet `Control` and it has to have `_get_control_name` method that will return the control name. This name should be the same as `args.control.type` we check in the `create_control.dart` file.

### Connect your Python app and Dart package

Once you have created Dart Flutter package, Flet Python control and the Python app that uses it, you can run your app and see something like this:

[image with red square]

To be able to communicate to your Flutter package you need to create 

### Flet control properties

added to surface, added to overlay

### Custom properties

### Debug




## Examples

A few Flet controls are implemented as in external packages and could serve as a starting point for your own controls:

* `Video` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/video.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_video)
* `Audio` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/audio.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_audio)
* `Rive` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/rive.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_rive)
