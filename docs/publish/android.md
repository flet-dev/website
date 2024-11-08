---
title: Packaging app for Android
sidebar_label: Android
---

## Introduction

Flet CLI provides `flet build apk` and `flet build aab` commands that allow packaging Flet app into Android APK and Android App Bundle (AAB) respectively.

## Prerequisites

### Binary Python packages

Binary Python packages (vs "pure" Python packages written in Python only) are packages that partially written in C, Rust or other languages producing native code. Example packages are `numpy`, `cryptography`, or `pydantic`.

Flet provides an alternative index https://pypi.flet.dev to host Python binary wheels (`.whl` files downloaded by pip) for iOS and Android platforms.

The following packages are currently available for Android:

| Name          | Version      |
|---------------|--------------|
| aiohttp       | 3.9.5 |
| argon2-cffi-bindings | 21.2.0 | 
| bcrypt | 4.2.0 | 
| bitarray | 2.9.2 | 
| blis | 1.0.0 | 
| Brotli | 1.1.0 | 
| cffi | 1.17.1 | 
| contourpy | 1.3.0 | 
| cryptography | 43.0.1 | 
| kiwisolver | 1.4.7 | 
| lru-dict | 1.3.0
| MarkupSafe | 2.1.5 | 
| matplotlib | 3.9.2 | 
| numpy | 2.1.1 | 
| numpy | 1.26.4 | 
| opencv-python | 4.10.0.84 | 
| pandas | 2.2.2 | 
| pillow | 10.4.0 | 
| pydantic-core | 2.23.3 | 
| time-machine | 2.16.0 | 
| websockets | 13.0.1 | 
| yarl | 1.11.1

:::warning Work in progress
New packages can be built with creating a recipe in [Mobile Forge](https://github.com/flet-dev/mobile-forge) project. For now, Flet team is authoring those recipes for you, but when the process is polished and fully-automated you'll be able to send a PR and test the compiled package right away.

If you don't yet see a package at https://pypi.flet.dev you can request it in [Flet discussions - Packages](https://github.com/flet-dev/flet/discussions/categories/packages). Please do not request pure Python packages. Go to package's "Download files" section at https://pypi.org and make sure it contains binary platform-specific wheels.
:::

### Android SDK

To build the app for the Android platform, the `flet build` command requires the Android SDK to be installed on your machine.

The official way to install the Android SDK and Java is by installing Android Studio.

:::note
On macOS Android SDK will be located at `$HOME/Library/Android/sdk`.
:::

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

### Building platform-specific APKs

By default, Flet builds "fat" APK which includes binaries for both `arm64-v8a` and `armeabi-v7a` architectures.

You can configure Flet to split fat APK into smaller APKs for each platformby using `--split-per-abi` option or by setting `split_per_abi` in `pyproject.toml`:

```toml
[tool.flet.android]
split_per_abi = true
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

Configuring splash in `pyproject.toml`:

```toml
[tool.flet.splash]
android = false
```

## Permissions

Configuring Android permissions and features to be written into `AndroidManifest.xml`:

```
flet build --android-permissions permission=True|False ... --android-features feature_name=True|False
```

For example:

```
flet build \
    --android-permissions android.permission.READ_EXTERNAL_STORAGE=True \
      android.permission.WRITE_EXTERNAL_STORAGE=True \
    --android-features android.hardware.location.network=False
```

Default Android permissions:

* `android.permission.INTERNET`

Default permissions can be disabled with `--android-permissions` option and `False` value, for example:

```
flet build --android-permissions android.permission.INTERNET=False
```

Default Android features:

* `android.software.leanback=False` (`False` means it's written in manifest as `android:required="false"`)
* `android.hardware.touchscreen=False`

Configuring permissions and features in `pyproject.toml` (notice quotes `"` around key names):

```toml
[tool.flet.android.permission] # --android-permissions
"android.permission.CAMERA" = true
"android.permission.CAMERA" = true

[tool.flet.android.feature] # --android-features
"android.hardware.camera" = false
```

## Meta-data

Configuring Android app meta-data to be written into `AndroidManifest.xml`:

```
flet build --android-meta-data name_1=value_1 name_2=value_2 ...
```

Default Android meta-data:

* `io.flutter.embedding.android.EnableImpeller=false`

Configuring meta-data in `pyproject.toml` (notice quotes `"` around key names):

```toml
[tool.flet.android.meta_data]
"com.google.android.gms.ads.APPLICATION_ID" = "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"
```