---
title: Roadmap
slug: roadmap
---

# Roadmap

## 2024

### Flet 1.0

Flet 1.0 launch checklist:

* Packaging works smoothly for all platforms.
* API is clean and stable.
* Documentation is complete and up-to-date.
* Website landing page is updated.

### Packaging

* :white_check_mark: Packaging for all platforms with a single [`flet build` command](/docs/publish): Windows, Linux, macOS, web, iOS and Android.
* :white_check_mark: Python packaging tool for iOS and Android (Mobile Forge).
* :white_check_mark: New Python runtimes for iOS and Android that don't depend on Kivy.
* :construction: Make `flet` Python package with dependencies installable on any platform and remove `flet-embed`, `flet-pyodide`, `flet-runtime` ([issue](https://github.com/flet-dev/flet/issues/3163)).
* PyPI proxy service to "inject" mobile packages while installing project dependencies with `pip`.
* Update `flet build` command to use new runtime and PyPI proxy.
* Non-pure Python [packages](https://github.com/flet-dev/flet/discussions/categories/packages?discussions_q=is%3Aopen+category%3APackages+sort%3Atop) for iOS and Android, with CI and hosting:
  * `numpy`
  * :construction: `pydantic-core`
  * :construction: `cryptography`
  * `opencv-python`
  * `pillow`
  * `pandas`
  * `protobuf`
  * `pycparser`
  * :construction: `bcrypt`
  * [more](https://github.com/flet-dev/flet/discussions/categories/packages)

### Documentation

* :white_check_mark: [Adaptive UI](/docs/getting-started/adaptive-apps) - adaptive controls that change their look depending on the platform the app runs.
* :construction: Integrating 3rd-party Flutter packages to user apps.
* Responsive UI - layouts that adapt to a device screen size.
* Refresh tutorials.

### Testing

* Test suite for Flet controls.
* Test suite for non-pure Python modules.

### Controls

* :white_check_mark: [AudioRecorder](https://flet.dev/docs/controls/audiorecorder)
* :white_check_mark: [Autocomplete](https://github.com/flet-dev/flet/issues/791)
* :white_check_mark: [AutofillGroup](https://github.com/flet-dev/flet/issues/848)
* :white_check_mark: [Lottie](https://flet.dev/docs/controls/lottie)
* :white_check_mark: [Rive](https://github.com/flet-dev/flet/issues/89)
* :white_check_mark: [Video](https://flet.dev/docs/controls/video)
* :construction: [Camera](https://github.com/flet-dev/flet/issues/1281)
* :construction: [Geolocator](https://github.com/flet-dev/flet/issues/66)
* :construction: [Flashlight](https://github.com/flet-dev/flet/issues/3188)
* :construction: [Map](https://github.com/flet-dev/flet/issues/1193)
* :construction: [PermissionHandler](https://github.com/flet-dev/flet/pull/3212)
* [Context menu](https://github.com/flet-dev/flet/issues/1804)
* [DropdownMenu](https://github.com/flet-dev/flet/issues/1088)
* [Google Mobile Ads](https://github.com/flet-dev/flet/issues/286)
* [InAppPurchase](https://github.com/flet-dev/flet/issues/853)
* [PlatformMenuBar](https://github.com/flet-dev/flet/issues/285) (and [#116](https://github.com/flet-dev/flet/issues/116))
* [SliverAppBar](https://github.com/flet-dev/flet/issues/1843)
* [TreeView](https://github.com/flet-dev/flet/issues/961)
* [Sms](https://github.com/flet-dev/flet/issues/3195)


### Community

* [PyCon US 2024](https://pycon.blogspot.com/2021/05/pycon-us-2024-and-2025-announcement.html)

## 2025

### Packaging

* Flet Packaging and Deployment Service aka Flet CI.