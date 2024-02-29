---
title: Packaging app for distribution
sidebar_label: Packaging app for distribution
---

## Introduction

Flet CLI provides `flet build` command that allows packaging Flet app into a standalone executable or install package for distribution.

`flet build` command supersedes both [`flet pack`](packaging-desktop-app) (packaging into desktop app) and [`flet publish`](publishing-static-website) (packaging into a static website) commands and allows converting your Flet app into Android or iOS bundle, desktop app and a static website.

For building desktop apps `flet build` does not longer rely on PyInstaller like `flet pack` does, but uses Flutter SDK to produce a fast, offline, fully customizable (your own icons, about dialog and metadata) executable for Windows, Linux and macOS with Python runtime embedded into executable and running in-process.

Static websites built with `flet build`, compared to `flet publish`, have faster load time as all Python dependencies are now packaged into a single archive instead of being pulled in runtime with `micropip`. `flet build web` also detects native Python [packages built into Pyodide](https://pyodide.org/en/stable/usage/packages-in-pyodide.html), such as `bcrypt`, `html5lib`, `numpy` and many others, and installs them from Pyodide package registry.

## Prerequisites

### Flutter SDK

Flutter SDK 3.16 or above must be installed and the path to both `flutter` and `dart` commands must be added to `PATH` environment variable.

On macOS we recommend installing Flutter SDK with ["Download and install" approach](https://docs.flutter.dev/get-started/install/macos/desktop?tab=download).

On Linux we recommend installing Flutter SDK with [Method 2: Manual installation](https://docs.flutter.dev/get-started/install/linux#method-2-manual-installation) (do not install Flutter with `snap`).

Pay attention to Flutter's own requirements for every platform, such as XCode and Cocopods on macOS, Visual Studio 2022 on Windows or additional tools and libraries on Linux.

### Linux requirements

#### GStreamer

Building Flet apps on Linux requires [GStreamer](https://gstreamer.freedesktop.org/) libraries installed.

To install minimal set of GStreamer libs on Ubuntu/Debian run the following commands:

```
apt install libgtk-3-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev
```

To install full set of GStreamer libs:

```
apt install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-doc gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

See [this guide](https://gstreamer.freedesktop.org/documentation/installing/on-linux.html?gi-language=c) for installing on other Linux distributives.

### Windows requirements

#### Enable Developer Mode

While running `flet build` on Windows you may get the following error:

```
Building with plugins requires symlink support.

Please enable Developer Mode in your system settings. Run
  start ms-settings:developers
to open settings.
```
[Follow this SO answer](https://stackoverflow.com/a/70994092/1435891) for the instructions on how to enable developer mode in Windows 11.  

#### Visual Studio

```
Unable to find suitable Visual Studio toolchain. Please run `flutter
doctor` for more details.
```

[Follow this medium article](https://medium.com/@teamcode20233/a-guide-to-install-desktop-development-with-c-workload-542bb92cfe90) for the instructions on downloading & installing correct Visual Studio components for desktop development.


### Build platform matrix

The following matrix shows which OS you should run `flet build` command on in order to build a package for specific platform:

| Build on / Target platform |   ipa   |   apk/aab   |   macos    |   linux    |   windows    |    web    |
| :----------------: | :-----: | :---------: | :--------: | :--------: | :----------: | :--------: |
| macOS              |   ✅    |       ✅     |      ✅    |           |              |     ✅     |
| Windows            |         |       ✅     |            |  ✅ (WSL)  |      ✅      |     ✅     |
| Linux              |         |       ✅     |            |     ✅     |              |     ✅     |

### Project structure

`flet build` command assumes the following Flet project structure.

```
/assets/
    icon.png
main.py
requirements.txt
pyproject.toml
```

`main.py` is the entry point of your Flet application with `ft.app(main)` at the end. A different entry point could be specified with `--module-name` argument.

`assets` is an optional directory that contains application assets (images, sound, text and other files required by your app) as well as images used for package icons and splash screens.

If only `icon.png` (or other supported format such as `.bmp`, `.jpg`, `.webp`) is provided it will be used as a source image to generate all icons and splash screens for all platforms. See section below for more information about icons and splashes.

`requirements.txt` is a standard pip file that contains the list of Python requirements for your Flet app. If this file is not provided only `flet` dependency will be installed during packaging.

:::caution No pip freeze

Do not use `pip freeze > requirements.txt` command to create `requirements.txt` for the app that
will be runnin on mobile. As you run `pip freeze` command on a desktop `requirements.txt` will have
dependencies that are not intended to work on a mobile device, such as `watchdog`.

Hand-pick `requirements.txt` to have only direct dependencies required by your app, plus `flet`. 

:::

`pyproject.toml` can also be used by `flet build` command to get the list project dependencies.
However, if both `requirements.txt` and `pyproject.toml` exist then `pyproject.toml` will be ignored.

The easiest way to start with that structure is to use `flet create` command:

```
flet create myapp
```

where `myapp` is a target directory.

:::warning pyproject.toml
Reading dependencies from `pyproject.toml` is not yet supported ([issue](https://github.com/flet-dev/serious-python/issues/52)), please use `requirements.txt` instead.
:::

## How it works

`flet build <target_platform>` command could be run from the root of Flet app directory:

```
<flet_app_directory> % flet build <target_platform>
```

where `<target_platform>` could be one of the following: `apk`, `aab`, `ipa`, `web`, `macos`, `windows`, `linux`.

When running from a different directory you can provide the path to a directory with Flet app:

```
flet build <target_platform> <path_to_python_app>
```

Build results are copied to `<python_app_directory>/build/<target_platform>`. You can specify a custom output directory with `--output` option:

```
flet build <target_platform> --output <path-to-output-dir>
```

`flet build` uses Flutter SDK and the number of Flutter packages to build a distribution package from your Flet app.

When you run `flet build <target_platform>` command it:

* Creates a new Flutter project in a temp directory from https://github.com/flet-dev/flet-build-template template. Flutter app will contain a packaged Python app in the assets and use `flet` and `serious_python` packages to run Python app and render its UI respectively. The project is ephemeral and deleted upon completion.
* Copies custom icons and splash images (see below) from `assets` directory into a Flutter project.
* Generates icons for all platforms using [`flutter_launcher_icons`](https://pub.dev/packages/flutter_launcher_icons) package.
* Generates splash screens for web, iOS and Android targets using [`flutter_native_splash`](https://pub.dev/packages/flutter_native_splash) package.
* Packages Python app using `package` command of [`serious_python`](https://pub.dev/packages/serious_python) package. All python files in the current directory and sub-directories recursively will be compiled to `.pyc` files. All files, except `build` directory will be added to a package asset.
* Runs `flutter build <target_platform>` command to produce an executable or an install package.
* Copies build results to `build/<target_platform>` directory.

### Including optional controls

If your app uses the following controls their packages must be added to a build command:

* [`Audio`](/docs/controls/audio) control implemented in `flet_audio` package.
* [`AudioRecorder`](/docs/controls/audiorecorder) control implemented in `flet_audio_recorder` package.
* [`Video`](/docs/controls/video) control implemented in `flet_video` package.
* [`WebView`](/docs/controls/webview) control implemented in `flet_webview` package.

Use `--include-packages <package_1> <package_2> ...` option to add Flutter packages with optional
Flet controls.

For example, to build your Flet app with `Video` control add `--include-packages flet_video` to your `flet build` command:

```
flet build apk --include-packages flet_video
```

### Logging

All Flet apps output to `stdout` and `stderr` (e.g. all `print()` statements or `sys.stdout.write()` calls, Python `logging` library) is now redirected to `out.log` file. Writes to that file are unbuffered, so you can retrieve a log in your Python program at any moment with a simple:

```python
with open("out.log", "r") as f:
    log = f.read()
```

`AlertDialog` or any other control can be used to display the value of `log` variable.

When the program is terminated by calling `sys.exit()` with exit code `100` (magic code)
the entire log will be displayed in a scrollable window.

```python
import sys
sys.exit(100)
```

Calling `sys.exit()` with any other exit code will terminate (close) the app without displaying a log.

## `flet build web`

Publishes Flet Python app as a static website (SPA) that runs entirely in the browser with [Pyodide](https://pyodide.org/en/stable/index.html) and does not require any code running on the server side.

Pyodide is a port of CPython to WebAssembly (WASM) which is an emerging technology with [some limitations](https://pyodide.org/en/stable/usage/wasm-constraints.html). Pyodide comes with a big list of [built-in packages](https://pyodide.org/en/stable/usage/packages-in-pyodide.html). However, to use a Python package from PyPI it must be a pure Python package or provide a wheel with binaries [built for Emscripten](https://pyodide.org/en/stable/development/new-packages.html).

### Static website vs server-side 

Flet static website pros:

* Zero latency between user-generated events (clicks, text field changes, drags) and page updates. There is no web server calls, no WebSockets - Python program communicates with Flutter UI directly via JavaScript.
* Cheap hosting - Flet static app does not require any code to run on the server and thus can be hosted anywhere: GitHub Pages, Cloudflare Pages, Replit, Vercel, a shared hosting or your own VPS.
* Higher scalability - Flet static app runs entirely in the browser and if it doesn't use any server-side API it could be scaled to any number of users with just CDN.

Flet static website cons:

* Slower loading time - it requires additional time to download and initialize Python engine (Pyodide) and download a package with a Flet app.
* Limited Python compatibility - not every program that works with native Python [can be run with Pyodide](https://pyodide.org/en/stable/usage/wasm-constraints.html).
* Lower performance - Pyodide is currently 3x-5x slower than native Python, so Flet apps with heavy processing would be better deployed as a server-side.

### Async or sync

Both [asyncio](/docs/guides/python/async-apps) and "regular" sync Flet apps can be published as a static website. In terms of concurrency, the website will have only one thread with a single user only - you. If your app has CPU-intensive logic it may affect UI responsivness no matter the app is async or not.

However, if your app contains an I/O logic (like [fetch](https://pyodide.org/en/stable/usage/api/python-api/http.html) wrapper for Pyodide) which is async in browser by definition then your app must be async.

You can test a published web app using Python's built-in [http.server module](https://docs.python.org/3/library/http.server.html):

### Building website

To publish Flet app as a static website run the following command from the root of your Flet app:

```
flet build web
```

A static website is published into `./build/web` directory.

### Testing website

You can test a published Flet app using Python's built-in [`http.server` module](https://docs.python.org/3/library/http.server.html):

```
python -m http.server --directory build/web
```

Open `http://localhost:8000` in your browser to check the published app.

### Packaging assets

Once the website is published all files from `assets` directory will be copied "as is" to the root of the website.

This allows overriding such things as `favicon.png` or ` manifest.json` with your own content.

### URL strategy

Flet apps support two ways of configuring URL-based routing:

* **path** (default) - paths are read and written without a hash. For example, `fletapp.dev/path/to/view`.
* **hash** - paths are read and written to the [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax). For example, `fletapp.dev/#/path/to/view`.

If a hosting provider supports [Single-page application (SPA) rendering](https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-application-spa-rendering) you can leave default "path" URL strategy as it gives pretty URLs.

However, if a hosting provider (like GitHub Pages) doesn't support SPA mode then you need to publish your app with "hash" URL strategy.

Use `--route-url-strategy` argument to change URL strategy.

### Web renderer

You can change default "canvaskit" web renderer ([more about renderers here](/docs/controls/text#using-system-fonts)) to "html" with `--web-renderer` option:

```
flet build web --web-renderer html
```

### Color emojis

To reduce app size default "CanvasKit" renderer does not use colorful emojis, because the font file with color emojies weights around 8 MB.

You can, however, opt-in for color emojis with `--use-color-emoji` flag:

```
flet build web --use-color-emoji
```

Alternatively, switch to `html` renderer which uses browser fonts.

### Hosting website in a sub-directory

Multiple Flet apps can be hosted on a single domain - each app in it's own sub-directory.

To make a published Flet app work in a sub-directory you have to publish it with `--base-url` option:

```
flet build web --base-url <sub-directory>
```

For example, if app's URL is `https://mywebsite.com/myapp` then it must be published with `--base-url myapp`.

### Splash screen

By default, generated web app will be showing a splash screen with an image from `assets` directory (see below) or Flet logo. You can disable splash screen for web app with `--no-web-splash` option.

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

## `flet build ipa`

Build an iOS archive bundle and IPA for distribution (macOS host only).

:::warning Work in progress
Creating of an iOS package, suitable for running on a device or publishing to AppStore is, in general, a complex process with a lot of moving parts. Let us know if it worked or didn't work for your particular case and there are some changes required into Flutter project template. 
:::

To successfully generate IPA you should provide correct values for the following arguments:

* `--org` - organization name in reverse domain name notation, e.g. `com.mycompany` (default is `com.flet`). The value is combined with `--project` and used as an iOS and Android bundle ID.
* `--project` - project name in C-style identifier format (lowercase alphanumerics with underscores) used to build bundle ID and as a name for bundle executable. By default, it's the name of Flet app directory.
* `--team` - team ID to locate provisioning profile. If no team ID provided a unsigned iOS archive will be generated.

### Splash screen

By default, generated iOS app will be showing a splash screen with an image from `assets` directory (see below) or Flet logo. You can disable splash screen for Android app with `--no-ios-splash` option.

## `flet build macos`

Build a macOS desktop application.

## `flet build linux`

Build a Linux desktop application.

## `flet build windows`

Build a Windows desktop application.

## Icons

You can customize app icons for all platforms (excluding Linux) with images in `assets` directory of your Flet app.

If only `icon.png` (or other supported format such as `.bmp`, `.jpg`, `.webp`) is provided it will be used as a source image to generate all icons.

* **iOS** - `icon_ios.png` (or any supported image format). Recommended minimum image size is 1024 px. Image should not be transparent (have alpha channel). Defaults to `icon.png` with alpha-channel automatically removed.
* **Android** - `icon_android.png` (or any supported image format). Recommended minimum image size is 192 px. Defaults to `icon.png`.
* **Web** - `icon_web.png` (or any supported image format). Recommended minimum image size is 512 px. Defaults to `icon.png`.
* **Windows** - `icon_windows.png` (or any supported image format). ICO will be produced of 256 px size. Defaults to `icon.png`. If `icon_windows.ico` file is provided it will be just copied to `windows/runner/resources/app_icon.ico` unmodified.
* **macOS** - `icon_macos.png` (or any supported image format). Recommended minimum image size is 1024 px. Defaults to `icon.png`.

## Splash screens

You can customize splash screens for iOS, Android and web applications with images in `assets` directory of your Flet app.

If only `splash.png` or `icon.png` (or other supported format such as `.bmp`, `.jpg`, `.webp`) is provided it will be used as a source image to generate all splash screen.

* **iOS (light)** - `splash_ios.png` (or any supported image format). Defaults to `splash.png` and then `icon.png`.
* **iOS (dark)** - `splash_dark_ios.png` (or any supported image format). Defaults to light iOS splash, then to `splash_dark.png`, then to `splash.png` and then `icon.png`.
* **Android (light)** - `splash_android.png` (or any supported image format). Defaults to `splash.png` and then `icon.png`.
* **Android (dark)** - `splash_dark_android.png` (or any supported image format).  Defaults to light Android splash, then to `splash_dark.png`, then to `splash.png` and then `icon.png`.
* **Web (light)** - `splash_web.png` (or any supported image format). Defaults to `splash.png` and then `icon.png`.
* **Web (dark)** - `splash_dark_web.png` (or any supported image format). Defaults to light web splash, then `splash_dark.png`, then to `splash.png` and then `icon.png`.

`--splash-color` option specifies background color for a splash screen in light mode. Default is `#ffffff`.

`--splash-dark-color` option specifies background color for a splash screen in dark mode. Default is `#333333`.

## Flet app entry point

By default, `flet build` command assumes `main.py` as the entry point of your Flet application, i.e. the file with `ft.app(main)` at the end. A different entry point could be specified with `--module-name` argument.

## Versioning

You can provide a version information for built executable or package with `--build-number` and `--build-version` arguments. This is the information that is used to destinguish one build/release from another in App Store and Google Play and is shown to the user in about dialogs.

`--build-number` - an integer number (default is `1`), an identifier used as an internal version number.
Each build must have a unique identifier to differentiate it from previous builds.
It is used to determine whether one build is more recent than another, with higher numbers indicating
more recent build.

`--build-version` - a "x.y.z" string (default is `1.0.0`) used as the version number shown to users. For each new version of your app, you will provide a version number to differentiate it from previous versions.

## Customizing packaging template

To create a temporary Flutter project `flet build` uses [cookiecutter](https://cookiecutter.readthedocs.io/en/stable/) template stored in https://github.com/flet-dev/flet-build-template repository.

You can customize that template to suit your specific needs and then use it with `flet build`.

`--template` option can be used to provide the URL to the repository or path to a directory with your own template. Use `gh:` prefix for GitHub repos, e.g. `gh:{my-org}/{my-repo}` or provide a full path to a Git repository, e.g. `https://github.com/{my-org}/{my-repo}.git`.

For Git repositories you can checkout specific branch/tag/commit with `--template-ref` option.

`--template-dir` option specifies a relative path to a cookiecutter template in a repository given by `--template` option. When `--template` option is not used, this option specifies path relative to the `<user-directory>/.cookiecutters/flet-build-template`.

## Extra args to `flutter build` command

`--flutter-build-args` option allows passing extra arguments to `flutter build` command called during the build process. The option can be used multiple times.

For example, if you want to add `--no-tree-shake-icons` option:

```
flet build macos --flutter-build-args=--no-tree-shake-icons
```

To pass an option with a value:

```
flet build ipa --flutter-build-args=--export-method --flutter-build-args=development
```

## Native Python packages

Native Python packages (vs "pure" Python packages written in Python only) are packages that partially written in C, Rust or other languages producing native code. Example packages are `numpy`, `cryptography`, `lxml`, `pydantic`.

When packaging Flet app for iOS and Android with `flet build` command such packages cannot be installed from PyPI, because there are no wheels (`.whl`) for Android and iOS platforms.

Therefore, you have to compile native packages for Android and/or iOS on your computer before running `flet build` command.

:::warning Work in progress

We are actively working on automating the process described below - it's #1 item in our backlog.

:::

### Android

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

### iOS

Flet uses [Kivy for iOS](https://github.com/kivy/kivy-ios) to build Python and native Python packages for iOS.

To build your own Python distributive with custom native packages and use it with `flet build` command you need to use `toolchain` tool provided by Kivy for iOS.

`toolchain` command-line tool can be run on macOS only.

Start with creating a new Python virtual environment and installing `kivy-ios` package from Flet's fork as described [here](https://github.com/flet-dev/python-for-ios?tab=readme-ov-file#installation--requirements):

```
pip install git+https://github.com/flet-dev/python-for-ios.git
```

Run `toolchain` command with the list of packages you need to build, for example to build `numpy`:

```
toolchain build numpy
```

**NOTE:** The library you want to build with `toolchain` command should have a recipe in [this folder](https://github.com/kivy/kivy-ios/tree/master/kivy_ios/recipes). You can [submit a request](https://github.com/kivy/kivy-ios/issues) to make a recipe for the library you need or create your own recipe and submit a PR.

You can also install package that don't require compilation with `pip`:

```
toolchain pip install flask
```

This case you don't need to include that package into `requirements.txt` of your Flet app.

When `toolchain` command is finished you should have everything you need in `dist` directory.

Get the full path to `dist` directory by running `realpath dist` command.

In the terminal where you run `flet build ipa` command to build your Flet iOS app run the following command to
store `dist` full path in `SERIOUS_PYTHON_IOS_DIST` environment variable:

```bash
export SERIOUS_PYTHON_IOS_DIST="<full-path-to-dist-directory>"
```

Build your app by running `flet build ipa` command.

You app's bundle now includes custom Python libraries.

## Verbose logging

`--verbose` or `-vv` option allows to see the output of all commands during `flet build` run.
We might ask for a detailed log if you need support.
