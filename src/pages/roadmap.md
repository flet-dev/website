---
title: Roadmap
slug: roadmap
---

# Roadmap

## 2025

### Flet 1.0

* **Long-term maintainability:** Controls are implemented using Python **dataclasses**, while the Flutter client adopts the built-in state management approach, eliminating the need for Redux. Ensures symmetric data structures in Python and Dart.
* **Enhanced Developer Experience (DX):** Control documentation is generated directly from source code, preventing discrepancies between docs, comments, and examples. Provides accurate IDE assistance.
* **Optimized Communication:** A binary protocol between Python and Dart eliminates unnecessary base64-to-bytes conversions, reducing CPU overhead and improving memory efficiency.

Flet 0.90 will be released as a preparatory step for Flet 1.0, introducing major changes, including breaking updates.

### Website

* **Ecosystem:** Community gallery for apps, extensions and educational materials (videos, tutorials, talks, etc.).

### Testing

* Test suite for Flet controls.
* Test suite for non-pure Python modules.

### Controls

* :white_check_mark: [Google Mobile Ads](https://github.com/flet-dev/flet/issues/286)
* :white_check_mark: [DropdownMenu](https://github.com/flet-dev/flet/issues/1088)
* :construction: [Camera](https://github.com/flet-dev/flet/issues/1281)
* [DataTable2](https://github.com/flet-dev/flet/issues/4576)
* [Context menu](https://github.com/flet-dev/flet/issues/1804)
* [InAppPurchase](https://github.com/flet-dev/flet/issues/853)
* [PlatformMenuBar](https://github.com/flet-dev/flet/issues/285) (and [#116](https://github.com/flet-dev/flet/issues/116))
* [SliverAppBar](https://github.com/flet-dev/flet/issues/1843)
* [TreeView](https://github.com/flet-dev/flet/issues/961)
* [Sms](https://github.com/flet-dev/flet/issues/3195)

### Community

* Presenting poster at [PyCon US 2025](https://us.pycon.org/2025/)

### Packaging

* Flet Packaging and Publishing Service (FPS).