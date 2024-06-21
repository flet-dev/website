---
title: Packaging app for Android
sidebar_label: Android
---

## Introduction

Flet CLI provides `flet build apk` and `flet build aab` commands that allow packaging Flet app into Android APK and Android App Bundle (AAB) respectively.

## Prerequisites

# Native Python packages

Native Python packages (vs "pure" Python packages written in Python only) are packages that partially written in C, Rust or other languages producing native code. Example packages are `numpy`, `cryptography`, `lxml`, `pydantic`.

When packaging Flet app for Android with `flet build` command such packages cannot be installed from PyPI, because there are no wheels (`.whl`) for Android platform.

Therefore, you have to compile native packages for Android on your computer before running `flet build` command.

:::warning Work in progress
We are actively working on automating the process described below - it's #1 item in our backlog.
:::

Flet uses [Kivy for Android](https://github.com/kivy/python-for-android) to build Python and native Python packages for Android.

To build your own Python distributive with custom native packages and use it with `flet build` command you need to use `p4a` tool provided by Kivy for Android.

`p4a` command-line tool can be run on macOS and Linux (WSL on Windows).

To get Android SDK install Android Studio.

On macOS Android SDK will be located at `$HOME/Library/Android/sdk`.

Install Temurin8 to get JRE 1.8 required by `sdkmanager` tool:

```bash
brew install --cask temurin8
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
```

Set the following environment variables:

```bash
export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"
export NDK_VERSION=25.2.9519653
export SDK_VERSION=android-33
```

Add path to `sdkmanager` to `PATH`:

```bash
export PATH=$ANDROID_SDK_ROOT/tools/bin:$PATH
```

Install Android SDK and NDK from https://developer.android.com/ndk/downloads/ or with Android SDK Manager:

```bash
echo "y" | sdkmanager --install "ndk;$NDK_VERSION" --channel=3
echo "y" | sdkmanager --install "platforms;$SDK_VERSION"
```

Create new Python virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install `p4a` from Flet's fork - it has pinned Python 3.11.6 which is compatible with the rest of the code produced by `flet build`:

```
pip3 install git+https://github.com/flet-dev/python-for-android.git@3.11.6
```

Install `cython`:

```
pip install --upgrade cython
```

Run `p4a` with `--requirements` including your custom Python libraries separated with comma, like `numpy` in the following example:

```
p4a create --requirements numpy --arch arm64-v8a --arch armeabi-v7a --arch x86_64 --sdk-dir $ANDROID_SDK_ROOT --ndk-dir $ANDROID_SDK_ROOT/ndk/$NDK_VERSION --dist-name mydist
```

*Choose No to "Do you want automatically install prerequisite JDK? [y/N]".*

**NOTE:** The library you want to build with `p4a` command should have a recipe in [this folder](https://github.com/kivy/python-for-android/tree/develop/pythonforandroid/recipes). You can [submit a request](https://github.com/kivy/python-for-android/issues) to make a recipe for the library you need or create your own recipe and submit a PR.

When `p4a` command completes a Python distributive with your custom libraries will be located at:

```
$HOME/.python-for-android/dists/mydist
```

In the terminal where you run `flet build apk` command to build your Flet Android app run the following command to store distributive full path in `SERIOUS_PYTHON_P4A_DIST` environment variable:

```bash
export SERIOUS_PYTHON_P4A_DIST=$HOME/.python-for-android/dists/mydist
```

Build your app by running `flet build apk` command to build `.apk`.

You app's bundle now includes custom Python libraries.

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

### Building platform-specific APK

By default, Flet builds "fat" APK which includes binaries for both `arm64-v8a` and `armeabi-v7a` architectures.

If you know/control Android device your app will be distributed on you can build a smaller APK for a specific architecture.

To build APK for `arm64-v8a`:

```
flet build apk --flutter-build-args=--target-platform --flutter-build-args=android-arm64
```

To build APK for `armeabi-v7a`:

```
flet build apk --flutter-build-args=--target-platform --flutter-build-args=android-arm
```

### Troubleshooting Android

To run interactive commands inside simulator or device:

```
adb shell
```

To overcome "permissions denied" error while trying to browse file system in interactive Android shell:

```
su
```

To download a file from a device to your local computer:

```
adb pull <device-path> <local-path>
```

## `flet build aab`

Build an Android App Bundle (AAB) file from your app.

This command builds release version. 'release' builds don't support debugging and are suitable for deploying to app stores. App bundle is the recommended way to publish to the Play Store as it improves your app size.

### Splash screen

By default, generated Android app will be showing a splash screen with an image from `assets` directory (see below) or Flet logo. You can disable splash screen for Android app with `--no-android-splash` option.