---
title: Packaging app for Android
sidebar_label: Android
---

## Introduction

Flet CLI provides `flet build apk` and `flet build aab` commands that allow packaging Flet app into Android APK and Android App Bundle (AAB) respectively.

## `flet build apk`

Build an Android APK file from your app.

This command builds release version. 'release' builds don't support debugging and are suitable for deploying to app stores. If you are deploying the app to the Play Store, it's recommended to use Android App Bundles (AAB) or split the APK to reduce the APK size.

* https://developer.android.com/guide/app-bundle
* https://developer.android.com/studio/build/configure-apk-splits#configure-abi-split

### Splash screen

By default, generated Android app will be showing a splash screen with an image from `assets` directory (see below) or Flet logo. You can disable splash screen for Android app with `--no-android-splash` option.

### Installing APK to a device

The easiest way to install APK to your device is to use `adb` (Android Debug Bridge) tool.

`adb` is a part of Android SDK. For example, on macOS, if Android SDK was installed with Android Studio
the location of `adb` tool will be at `~/Library/Android/sdk/platform-tools/adb`.

[Check this article](https://www.makeuseof.com/install-apps-via-adb-android/) for more information about installing and using `adb` tool on various platforms.

To install APK to a device run the following command:

```
adb install <path-to-your.apk>
```

If more than one device is connected to your computer (say, emulator and a physical phone) you can
use `-s` option to specify which device you want to install `.apk` on:

```
adb -s <device> install <path-to-your.apk>
```

where `<device>` can be found with `adb devices` command.

## `flet build aab`

Build an Android App Bundle (AAB) file from your app.

This command builds release version. 'release' builds don't support debugging and are suitable for deploying to app stores. App bundle is the recommended way to publish to the Play Store as it improves your app size.

### Splash screen

By default, generated Android app will be showing a splash screen with an image from `assets` directory (see below) or Flet logo. You can disable splash screen for Android app with `--no-android-splash` option.