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

### New controls

* :white_check_mark: [AudioRecorder](https://flet.dev/docs/controls/audiorecorder)
* [Autocomplete](https://github.com/flet-dev/flet/issues/791)
* [AutofillGroup](https://github.com/flet-dev/flet/issues/848)
* [Camera](https://github.com/flet-dev/flet/issues/1281)
* [Context menu](https://github.com/flet-dev/flet/issues/1804)
* [DropdownMenu](https://github.com/flet-dev/flet/issues/1088)
* [Google Mobile Ads](https://github.com/flet-dev/flet/issues/286)
* [InAppPurchase](https://github.com/flet-dev/flet/issues/853)
* [Location](https://github.com/flet-dev/flet/issues/66)
* :white_check_mark: [Lottie](https://flet.dev/docs/controls/lottie)
* [Map](https://github.com/flet-dev/flet/issues/1193)
* [PlatformMenuBar](https://github.com/flet-dev/flet/issues/285) (and [#116](https://github.com/flet-dev/flet/issues/116))
* [Rive](https://github.com/flet-dev/flet/issues/89)
* [SliverAppBar](https://github.com/flet-dev/flet/issues/1843)
* [TreeView](https://github.com/flet-dev/flet/issues/961)
* :white_check_mark: [Video](https://flet.dev/docs/controls/video)

### Adaptive and Cupertino controls

* :white_check_mark: [Pagelet](https://github.com/flet-dev/flet/issues/2431)
* :white_check_mark: [AlertDialog → CupertinoAlertDialog](https://github.com/flet-dev/flet/issues/2203)
* :white_check_mark: [ElevatedButton → CupertinoButton](https://github.com/flet-dev/flet/issues/2377)
* :white_check_mark: [TextField → CupertinoTextField](https://github.com/flet-dev/flet/issues/2376)
* :white_check_mark: [NavigationBar → CupertinoNavigationBar](https://github.com/flet-dev/flet/issues/2242)
* :white_check_mark: [ListTile → CupertinoListTile](https://github.com/flet-dev/flet/issues/2487)
* :white_check_mark: [Slider → CupertinoSlider](https://github.com/flet-dev/flet/issues/2174)
* :white_check_mark: [Switch → CupertinoSwitch](https://github.com/flet-dev/flet/issues/2202)
* :white_check_mark: [Radio → CupertinoRadio](https://github.com/flet-dev/flet/issues/2201)
* :white_check_mark: [AppBar → CupertinoAppBar](https://github.com/flet-dev/flet/issues/2278)
* :white_check_mark: [Checkbox → CupertinoCheckbox](https://github.com/flet-dev/flet/issues/2157)
* :white_check_mark: [CupertinoContextMenu](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [DatePicker → CupertinoDatePicker](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [TimePicker → CupertinoTimePicker](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [CupertinoActivityIndicator](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [CupertinoActionSheet](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [CupertinoActionSheetAction](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [CupertinoBottomSheet](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [CupertinoSegmentedControl](https://github.com/flet-dev/flet/issues/2744)
* :white_check_mark: [CupertinoSlidingSegmentedControl](https://github.com/flet-dev/flet/issues/2744)