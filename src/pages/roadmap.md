---
title: Roadmap
slug: roadmap
---

# Roadmap

## January - May 2024

The goal: Flet 1.0 launch.

* :white_check_mark: Packaging for all platforms with [`flet build` command](/docs/guides/python/packaging-app-for-distribution): Windows, Linux, macOS, web, iOS and Android.
  * :construction: `flet build` bugfixing and polishing.
  * Automatic installation of pre-built "native" (non-pure such as `pandas`, `numpy`) Python dependencies for iOS and Android (custom registry similar to Pyodide).
  * Integrating 3rd-party Flutter packages to user apps.
* :construction: Documentation improvements.
  * Adaptive UI - adaptive controls that change their look depending on the platform the app runs.
  * Responsive UI - layouts that adapt to a device screen size.
  * Update tutorials.
* Flet Packaging and Deployment Service aka Flet CI.
* Website update.
* [PyCon US 2024](https://pycon.blogspot.com/2021/05/pycon-us-2024-and-2025-announcement.html)

New controls:

* [AudioRecorder](https://github.com/flet-dev/flet/issues/419)
* [Autocomplete](https://github.com/flet-dev/flet/issues/791)
* [AutofillGroup](https://github.com/flet-dev/flet/issues/848)
* [Camera](https://github.com/flet-dev/flet/issues/1281)
* [Context menu](https://github.com/flet-dev/flet/issues/1804)
* [DropdownMenu](https://github.com/flet-dev/flet/issues/1088)
* [Google Mobile Ads](https://github.com/flet-dev/flet/issues/286)
* [InAppPurchase](https://github.com/flet-dev/flet/issues/853)
* [Location](https://github.com/flet-dev/flet/issues/66)
* [Lottie](https://github.com/flet-dev/flet/issues/88)
* [Map](https://github.com/flet-dev/flet/issues/1193)
* [PlatformMenuBar](https://github.com/flet-dev/flet/issues/285) (and [#116](https://github.com/flet-dev/flet/issues/116))
* [Rive](https://github.com/flet-dev/flet/issues/89)
* [SliverAppBar](https://github.com/flet-dev/flet/issues/1843)
* [TreeView](https://github.com/flet-dev/flet/issues/961)
* [Video](https://github.com/flet-dev/flet/issues/257)

Adaptive controls:
* [AlertDialog -> CupertinoAlertDialog](https://github.com/flet-dev/flet/issues/2203)
* Button
* ContextMenu
* :white_check_mark: [NavigationBar -> CupertinoNavigationBar](https://github.com/flet-dev/flet/issues/2242)
* DatePicker
* TimePicker
* ListTile
* :white_check_mark: [Slider -> CupertinoSlider](https://github.com/flet-dev/flet/issues/2174)
* :white_check_mark: [Switch -> CupertinoSwitch](https://github.com/flet-dev/flet/issues/2202)
* :white_check_mark: [Radio -> CupertinoRadio](https://github.com/flet-dev/flet/issues/2201)
* TabBar
* :white_check_mark: [Checkbox -> CupertinoCheckbox](https://github.com/flet-dev/flet/issues/2157)