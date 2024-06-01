---
title: Publishing Flet app to multiple platforms
slug: /publish
---

## Introduction

Flet CLI provides `flet build` command that allows packaging Flet app into a standalone executable or install package for distribution.

## Platform matrix

The following matrix shows which OS you should run `flet build` command on in order to build a package for specific platform:

| Run on / `flet build` |   `apk/aab`   |   `ipa`   |   `macos`    |   `linux`    |   `windows`    |    `web`    |
| :----------------: | :-----: | :---------: | :--------: | :--------: | :----------: | :--------: |
| macOS              |   ✅    |       ✅     |      ✅    |           |              |     ✅     |
| Windows            |   ✅     |            |            |  ✅ (WSL)  |      ✅      |     ✅     |
| Linux              |   ✅    |            |            |     ✅     |              |     ✅     |

## Prerequisites

### Flutter SDK

Flutter SDK 3.16 or above must be installed and the path to both `flutter` and `dart` commands must be added to `PATH` environment variable.

On macOS we recommend installing Flutter SDK with ["Download and install" approach](https://docs.flutter.dev/get-started/install/macos/desktop?tab=download).

On Linux we recommend installing Flutter SDK with [Method 2: Manual installation](https://docs.flutter.dev/get-started/install/linux#method-2-manual-installation) (do not install Flutter with `snap`).

Pay attention to Flutter's own requirements for every platform, such as XCode and Cocopods on macOS, Visual Studio 2022 on Windows or additional tools and libraries on Linux.

## Project structure

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
will be running on mobile. As you run `pip freeze` command on a desktop `requirements.txt` will have
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

## Including optional controls

If your app uses the following controls their packages must be added to a build command:

* [`Audio`](/docs/controls/audio) control implemented in `flet_audio` package.
* [`AudioRecorder`](/docs/controls/audiorecorder) control implemented in `flet_audio_recorder` package.
* [`Lottie`](/docs/controls/lottie) control implemented in `flet_lottie` package.
* [`Rive`](/docs/controls/rive) control implemented in `flet_rive` package.
* [`Video`](/docs/controls/video) control implemented in `flet_video` package.
* [`WebView`](/docs/controls/webview) control implemented in `flet_webview` package.

Use `--include-packages <package_1> <package_2> ...` option to add Flutter packages with optional
Flet controls.

For example, to build your Flet app with `Video` and `Audio` controls add `--include-packages flet_video flet_audio` to your `flet build` command:

```
flet build apk --include-packages flet_video flet_audio
```

## Icons

You can customize app icons for all platforms (excluding Linux) with images in `assets` directory of your Flet app.

If only `icon.png` (or other supported format such as `.bmp`, `.jpg`, `.webp`) is provided it will be used as a source image to generate all icons.

* **iOS** - `icon_ios.png` (or any supported image format). Recommended minimum image size is 1024 px. Image should not be transparent (have alpha channel). Defaults to `icon.png` with alpha-channel automatically removed.
* **Android** - `icon_android.png` (or any supported image format). Recommended minimum image size is 192 px. Defaults to `icon.png`.
* **Web** - `icon_web.png` (or any supported image format). Recommended minimum image size is 512 px. Defaults to `icon.png`.
* **Windows** - `icon_windows.png` (or any supported image format). ICO will be produced of 256 px size. Defaults to `icon.png`. If `icon_windows.ico` file is provided it will be just copied to `windows/runner/resources/app_icon.ico` unmodified.
* **macOS** - `icon_macos.png` (or any supported image format). Recommended minimum image size is 1024 px. Defaults to `icon.png`.

## Splash screen

You can customize splash screens for iOS, Android and web applications with images in `assets` directory of your Flet app.

If only `splash.png` or `icon.png` (or other supported format such as `.bmp`, `.jpg`, `.webp`) is provided it will be used as a source image to generate all splash screen.

* **iOS (light)** - `splash_ios.png` (or any supported image format). Defaults to `splash.png` and then `icon.png`.
* **iOS (dark)** - `splash_dark_ios.png` (or any supported image format). Defaults to light iOS splash, then to `splash_dark.png`, then to `splash.png` and then `icon.png`.
* **Android (light)** - `splash_android.png` (or any supported image format). Defaults to `splash.png` and then `icon.png`.
* **Android (dark)** - `splash_dark_android.png` (or any supported image format).  Defaults to light Android splash, then to `splash_dark.png`, then to `splash.png` and then `icon.png`.
* **Web (light)** - `splash_web.png` (or any supported image format). Defaults to `splash.png` and then `icon.png`.
* **Web (dark)** - `splash_dark_web.png` (or any supported image format). Defaults to light web splash, then `splash_dark.png`, then to `splash.png` and then `icon.png`.

`--splash-color` option specifies background color for a splash screen in light mode. Defaults to `#ffffff`.

`--splash-dark-color` option specifies background color for a splash screen in dark mode. Defaults to `#333333`.

## Flet app entry point

By default, `flet build` command assumes `main.py` as the entry point of your Flet application, i.e. the file with `ft.app(main)` at the end. A different entry point could be specified with `--module-name` argument.

## Versioning

You can provide a version information for built executable or package with `--build-number` and `--build-version` arguments. This is the information that is used to distinguish one build/release from another in App Store and Google Play and is shown to the user in about dialogs.

`--build-number` - an integer number (defaults to `1`), an identifier used as an internal version number.
Each build must have a unique identifier to differentiate it from previous builds.
It is used to determine whether one build is more recent than another, with higher numbers indicating
more recent build.

`--build-version` - a "x.y.z" string (defaults to `1.0.0`) used as the version number shown to users. For each new
version of your app, you will provide a version number to differentiate it from previous versions.

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

## Verbose logging

`--verbose` or `-vv` option allows to see the output of all commands during `flet build` run.
We might ask for a detailed log if you need support.

## Logging

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
