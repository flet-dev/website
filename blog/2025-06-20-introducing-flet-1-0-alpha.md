---
slug: introducing-flet-1-0-alpha
title: Introducing Flet 1.0 Alpha
authors: feodor
tags: [news]
---

Flet has been in the making for over three years, steadily gaining traction and building a vibrant user community. As more developers adopt Flet for real-world projects, one thing has become clear: people are ready to commit — but they also want to see the same commitment from us.

Releasing **Flet 1.0** isn’t just about a version number. It’s about signaling stability, maturity, and long-term vision. A stable API, comprehensive documentation, better testing, and a refreshed website — these are the foundational pieces developers need to confidently build serious apps on Flet.

But **Flet 1.0 isn’t just the next incremental release. It’s a complete re-architecture**.

The first versions of Flet inherited design decisions from Pglet — a web-based framework with a focus on multi-language support. While that served as a useful starting point, Flet has since evolved into a Python-centric framework for building cross-platform apps — web, desktop, and mobile.

With that evolution came growing pains: technical debt, architectural misfits, and increasing complexity. Rather than patch over the cracks, we made a bold decision: to rewrite Flet from the ground up. It’s always risky to rewrite, but there’s no better time than now — before 1.0 — while the user base is still manageable and we can afford to break things in the name of long-term simplicity and maintainability.

The goals were clear:
* Make the developer experience smoother for both app and extension authors
* Clean up the architecture to support future growth
* Lay a solid foundation for stability and long-term support

After nearly five months of work, **today we’re releasing the Flet 1.0 Alpha — a technical preview of what’s coming.**

<!-- truncate -->

## What’s new for developers

Flet 1.0 introduces major changes that simplify how you build, run, and scale apps. Some are improvements, some are breaking — all are focused on giving you a faster, more flexible developer experience.

* **Declarative approach to building Flet apps** - alongside the traditional imperative style.
* **Auto-update** - forget calling `.update()` after every control change.
* **Services** - persistent, non-UI components that live across UI rebuilds and navigation. Existing controls such as Audio, FilePicker, Clipboard were re-written as services.
* **Complete WASM (WebAssembly) support for web apps** - faster download and performance on modern browsers.
* **Offline (no-CDN) mode for web apps** - Flutter resources and Pyodide are bundled with the app.
* **Embedding Flet apps into existing web page** - render Flet app into an HTML element on any web page.
* **Multiple FletApp controls in a single web app** - ???

### Declarative approach

TBD

### Auto-update

TBD

### Services

FilePicker
HapticFeedback
SemanticsService
ShakeDetector

### WebAssembly support

TBD

`page.wasm` - [example]

### Offline mode for web apps

TBD

### Embedding Flet web apps

TBD

### Other changes and improvements

#### Storage paths

`page.storage_paths`

#### Event handlers without `e`

Simple event handlers can now omit `e` parameter, for example both of these work:

```py
button_1.on_click = lambda: print("Clicked!")
button_2.on_click = lambda e: print("Clicked!", e)
```

or

```py
def increment():
   print("Increment clicked")

inc_btn.on_click = increment
```

#### `Control.before_event(e)` hook

The method is called before calling any event handler.

It receives an instance of `ControlEvent` as parameter and should return either `True` or `False`. Returning `False` cancels event handler. Example implementation in `Page` class:

```py
    def before_event(self, e: ControlEvent):
        if isinstance(e, RouteChangeEvent):
            if self.route == e.route:
                return False
            self.query()
        return super().before_event(e)
``` 

#### `ft.context.page` works in all event handlers

It's now possible to get a reference to a current `Page` instance in any part of Flet program.

## Breaking changes

Flet 1.0 is a major release and includes breaking changes — for good reason!

The Flet team maintains a list of known breaking changes in [this issue](https://github.com/flet-dev/flet/issues/5238).

If you discover something else that’s broken or incorrect, please submit a new issue or discussion. Once confirmed, we’ll update the list.

Below is a summary of the most significant and impactful breaking changes:

### Single-threaded async UI model

Flet 1.0 adopts a single-threaded async UI model, similar to JavaScript or Flutter:

* Blocking calls like time.sleep() will freeze the UI
* Use async def event handlers and await asyncio.sleep(...) instead
* For CPU-bound tasks, offload them to threads using asyncio.to_thread(...)

This design makes concurrency more predictable and better suited for the browser and mobile platforms.

control's sync methods have gone.
all control methods are `_async` now and only set-like fire-and-forget methods have sync counterparts.

[Examples]

### `Page` split

`Page` split into `Page` and `PageView`.

To support multi-view

### Dialogs

`page.show_dialog()`

### Drawers

Remove `page.drawer` and `page.end_drawer`
NavigationDrawer: `position` property instead of page.drawer and page.end_drawer

### Control ID is integer

`e.target` is a number now, not a string.

### FilePicker

Service
API re-worked

### HapticFeedback

Service

# SemanticsService

Service

# ShakeDetector

Service

### Clipboard

`page.set_clipboard()` -> `page.clipboard.set_async()`

`page.get_clipboard()` -> `page.clipboard.get_async()`

### Client storage

`page.client_storage` changed to `page.shared_preferences`

shared_preferences

### UrlLauncher

TBD

### Scrollables

ScrollableControl: `on_scroll_interval` renamed to `scroll_interval`

### Buttons

All buttons: no text property, use content instead

## Architectural changes

Flet 1.0 is not just a feature release — it's a ground-up rewrite designed to address technical debt, improve maintainability, and unlock long-term performance and flexibility. Here are some of the most impactful architectural changes:

#### Simplified Python control implementation

- Controls are now implemented as Python **dataclasses**, bringing:
  - Automatic constructor generation
  - Native support for default values, type annotations, and field validation
  - No more manual conversions to/from `str` or `JSON`
  - Seamless support for **complex property types** (nested dataclasses, enums, etc.)

- This significantly reduces boilerplate and makes adding new controls trivial — often zero-maintenance.

#### Strong typing and IDE support

- Event handlers are now **strongly typed**, improving both runtime safety and developer ergonomics.
- All controls include **docstrings**, enabling rich auto-generated API documentation with **Docusaurus**.

#### Smarter UI diffing

- A new **diffing algorithm** powers efficient updates to the UI tree.
- It’s optimized for both **imperative** and **declarative** Flet programming styles.
- This results in faster rebuilds and fewer unnecessary redraws.

#### Dart runtime modernization

- Replaced the old Redux-based state management with **InheritedWidget** + **Provider**.
- The internal control hierarchy on the Dart side now mirrors the Python control tree, enabling **more efficient traversal and updates**.

#### Binary protocol for performance

- A new **binary serialization protocol** replaces the JSON-based message format:
  - Significantly reduces traffic size
  - No more base64 encoding for transferring binary data (e.g., images, files)

- Control property names in Dart now **exactly match their Python counterparts**, making it easier to debug and extend across both runtimes.

## Trying Flet 1.0 Alpha

We are releasing Flet 1.0 Alpha as `0.70.0.devXXX` (link to PyPI).

:::info
Going forward Flet 1.0 will be called `v1` and Flet 0.x will be called `v0`.

`main` branch of Flet repository will have Flet 1.0 and `v0` branch will have Flet 0.x.
:::

:::caution
Make sure you are installing Flet pre-release to a new virtual environment.
:::

To install Flet v1 Alpha:

```
pip install flet==0.70.0.devXXX
```

or add `flet==0.70.0.devXXX` to dependencies of your Python project.

### `flet build`

To make `flet build` work with Flet 1.0 Alpha specify exact version of `flet` and all extension packages in `dependencies` section of your `pyproject.toml`:

```
dependencies=[
  "flet==0.70.0.devXXX",
  "flet-audio==0.2.0.devXXX",
  "flet-video==0.2.0.devXXX",
  ...
]
```

Extensions for Flet v1 will have version `0.2.x` and above and Flet v0 extensions will have version `0.1.x`.

## Roadmap to Flet 1.0

* Flet 0.70 aka "**Flet 1.0 Alpha**" - this release. Generated docs are not yet included. We may release a few Flet 0.71, 0.72, 0.73, etc. to fix things.
* Flet 0.80 aka "**Flet 1.0 Beta**" - docs generated from sources are ready. All extensions are working and documented. Integration tests are available.
* Flet 0.90 aka "**Flet 1.0 RC**" - website landing page is updated, API complete and frozen.
* Flet 1.0 aka "**Flet 1.0 RTM**" - final release! :tada:

## Conslusion

TBD