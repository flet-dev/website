---
slug: flet-mobile-strategy
title: Flet Mobile Strategy
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [product]
---

Flet project has got a lot of attention recently and we would like to thank all developers who tried Flet and have been spreading the word about it in the communities! Your support motivates to move Flet project forward with faster pace!

New Flet developers are constantly asking if there is a way to package Flet program to an `.apk` file to deploy to Android devices or `.ipa` to deploy to iOS.

In this post I would like to discuss our vision for Flet going mobile and provide some roadmap.

## Server-Driven UI

[TBD]

## Flet widget for Flutter

The first thing we are going to do is to separate Flet client into a Flutter Widget and publish the package at https://pub.dev.
Flet widget could be then integrated by mobile developers into existing or new Flutter apps for adding dynamic server-driven UI experiences to the core app functionality. A new Flutter app could be also created with just a single Flet widget to host a complete Flet app.

Developers will follow Flutter guide for packaging, signing and distributing their apps to [Android](https://docs.flutter.dev/deployment/android), [iOS](https://docs.flutter.dev/deployment/ios), [Linux](https://docs.flutter.dev/deployment/linux), [macOS](https://docs.flutter.dev/deployment/macos) or [Windows](https://docs.flutter.dev/deployment/windows) platforms.

Flet team will provide sample CI pipelines to automate packaging, signing and publishing of Flutter apps.

## Flet app for iOS and Android

The next step is a standalone "Flet" app in Apple Store and Google Play for "testing mobile experiences developed with Flet". Using this app developers will be able to add Flet app URL as a new project and instantly use the app

## Embedding Flet into native apps

[Put Flutter to work](https://medium.com/flutter/put-flutter-to-work-95f5fdcc592e)

## While-labeling Flet mobile app

