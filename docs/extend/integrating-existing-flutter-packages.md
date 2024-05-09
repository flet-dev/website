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

### Implementation

Flet extension consists of the following parts:

* [Flet Flutter package](https://docs.flutter.dev/packages-and-plugins/developing-packages).

* Python class for the new Flet control.

* Connection between the two.

For example, a basic [Flet extension](https://github.com/InesaFitsner/extend-flet-example) for [flutter_spinkit](https://pub.dev/packages/flutter_spinkit) package.

#### Flet Flutter package

Flet Flutter package has the following structure:

```
<package-name>/
└── lib/
    └──<package-name>.dart
    └──src
      └──create_control.dart
      └──<control-name>.dart
├── pubspec.yaml
```

* `pubspec.yaml`

Specify dependencies to the external Flutter package(s) for which you are creating Flet extension.

In the Flet Spinkit example, `pubspec.yaml` contains dependencies to `flutter_spinkit`:
```yaml
dependencies:
  flutter_spinkit: ^5.2.1
  flet: ^0.22.0
  flutter:
    sdk: flutter
```

* `<package-name>.dart`

```dart
library flet_spinkit;

export "../src/create_control.dart" show createControl, ensureInitialized;
```

* `create_control.dart`

* `<control-name>.dart`

Here you will...

#### Python class



#### Connect Python and Flutter

#### Debug

#### Types of controls
added to surface, added to overlay

#### Types of properties


### Examples

A few Flet controls are implemented as in external packages and could serve as a starting point for your own controls:

* `Video` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/video.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_video)
* `Audio` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/audio.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_audio)
* `Rive` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/rive.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_rive)

## Python control

TBD

## Dart wrapper

TBD

## Building your app

TBD