---
title: Integrating existing Flutter packages into your Flet app
sidebar_label: 3rd-party Flutter packages
---

:::info Work in progress
The guide is being updated.
:::

## Introduction

Flet controls implement many Flutter built-in widgets which could be enough to create even the most complex apps. However, not all Flutter widgets or 3rd-party packages could be supported by Flet team or added to Flet core.

Flet framework provides extensibility mechanism to build your Flet app with widgets or/and API from your own or [3rd-party Flutter packages](https://pub.dev/packages?sort=popularity).

### Prerequisites

To integrate custom Flutter package into Flet you need to have basic understanding of how to create Flutter apps and packages in Dart language and have Flutter development environment configured. See [Flutter Getting Started](https://docs.flutter.dev/get-started/install) for more information about Flutter and Dart.

## Creating Flet extension

Flet extension that integrates 3rd-party Flutter package consists of the following parts:

1. Flet Dart package

2. Flet Python control

Flet Dart package contains Flutter widget ... (Feodor)

Flet Python control is a Python class that you will use in your Flet program.

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

It will export two methods: `createControl` method that will return your Dart (Feodor) ... 

#### `create_control.dart`

Flet calls createControl for all controls.... (Feodor) ...

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

### Flet Python control

Flet Python control is a Python class that you can create in your Flet app or as an external Python module. In the Flet Spinkit example, we created Spinkit class in `/controls/spinkit.py` file:

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

Once you have created Flet Dart package and Flet Python control, create a Python program in `main.py` that uses it:
```python
import flet as ft
from controls.spinkit import Spinkit

def main(page: ft.Page):
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    page.add(Spinkit())


ft.app(main)
```

Let's run this simple app using `flet run` command. We expect to see the hardcoded `SpinKitRotatingCircle` on the page but that's not happening yet. Instead, we see this message in place of the Spinkit control:

<img src="/img/docs/extending-flet/unknown-control.png" className="screenshot-40" />

Our Flet app doesn't know yet about the new Flet Dart package that we created because it uses ...(Feodor).

To connect your Python app and new Flet Dart package, you need create to `pubspec.yaml` file on the same level as `main.py`. It should have the following contents:

```
dependencies:
  flet_spinkit:
    path: {absolute-path-to-flet-dart-package-folder}
```
:::info Work in progress
This approach is subject to change and the guide is being updated.
:::

Now you need to build the app for the platform of your choice by running `flet build` command, for example:

```
flet build macos
```

Finally, we open the built app:

```
open build/macos/flet_spinkit_app.app
```
<img src="/img/docs/extending-flet/spinkit-1.gif" className="screenshot-40" />

You can find source code for this example [here](https://github.com/InesaFitsner/extend-flet-example/tree/spinkit-step-1).

### Customise properties

In the example above, Spinkit control creates a hardcoded Flutter widget which is not very useful as we want to be able to customize its properties. 

#### Flet Control properties

When we created Spinkit class in Python, it inherited from Flet [`Control`](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/control.py) class that has properties common for all controls such as `visible`, `opacity` and `tooltip`, to name a few. See reference for the common Control properties [here](/docs/controls). 

To be able to use these properties for your new control you need to:

1. Add the Control properties you want to use in the constructor for your new Python control:

```python
from typing import Any, Optional

from flet_core.control import Control, OptionalNumber

class Spinkit(Control):
    """
    Spinkit Control.
    """

    def __init__(
        self,
        #
        # Control
        #
        opacity: OptionalNumber = None,
        tooltip: Optional[str] = None,
        visible: Optional[bool] = None,
        data: Any = None,
    ):
        Control.__init__(
            self,
            tooltip=tooltip,
            opacity=opacity,
            visible=visible,
            data=data,
        )

    def _get_control_name(self):
        return "spinkit"
```

2. In `<control-name>.dart` file, use `baseControl` method to wrap Flutter widget:

```dart
import 'package:flet/flet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class SpinkitControl extends StatelessWidget {
  final Control? parent;
  final Control control;

  const SpinkitControl({
    super.key,
    required this.parent,
    required this.control,
  });

  @override
  Widget build(BuildContext context) {
    return baseControl(
        context,
        const SpinKitRotatingCircle(
          color: Colors.green,
          size: 100.0,
        ),
        parent,
        control);
  }
}
```

3. Use Control properties in your app:
```python
import flet as ft
from controls.spinkit import Spinkit


def main(page: ft.Page):
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    page.add(Spinkit(opacity=0.5, tooltip="Spinkit tooltip"))


ft.app(main)

```

You can find source code for this example [here](https://github.com/InesaFitsner/extend-flet-example/tree/spinkit-step-2).

#### Flet ConstrainedControl properties

There three types of controls in Flet:

1. Visual Controls that are added to the surface, such as Spinkit.
2. Popup Controls (dialogs, pickers, panels etc.).
3. Non-visual Controls that are added to `overlay`, such as Video or Audio.

In most cases, Visual Controls could inherit from [`ConstrainedControl`](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/constrained_control.py) that has many additional properties such as `top` and `left` for its position within Stack and a bunch of animation properties.

To use those properities, add them to the constructor of your Python control:
```python

```

#### Control-specific properties

### Debug




## Examples

A few Flet controls are implemented as in external packages and could serve as a starting point for your own controls:

* `Video` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/video.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_video)
* `Audio` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/audio.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_audio)
* `Rive` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/rive.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_rive)
