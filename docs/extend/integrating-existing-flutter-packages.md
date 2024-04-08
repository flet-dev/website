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

To integrate custom Flutter package into Flet you need to understand how to create Flutter apps and packages in Dart language and have Flutter development environment configured. See [Flutter Getting Started](https://docs.flutter.dev/get-started/install) for more information about Flutter and Dart.

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