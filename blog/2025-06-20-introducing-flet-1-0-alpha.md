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

## What’s new for developers in Flet 1.0

Flet 1.0 introduces major changes that simplify how you build, run, and scale apps. Some are improvements, some are breaking — all are focused on giving you a faster, more flexible developer experience.

* **Declarative approach to building Flet apps** - alongside the traditional imperative style.
* **Auto-update** - forget calling `.update()` after every control change.
* **Single-threaded async UI model** - similar to JavaScript, or Flutter. Breaking change - read below how it affects your existing Flet app.
* **Services** - persistent, non-UI components that live across UI rebuilds and navigation. Existing controls such as Audio, FilePicker, Clipboard were re-written as services.
* **Complete WASM (WebAssembly) support for web apps** - faster download and performance on modern browsers.
* **Offline (no-CDN) mode for web apps** - Flutter resources and Pyodide are bundled with the app.
* **Embedding Flet apps into existing web page** - render Flet app into an HTML element on any web page.
* **Multiple FletApp controls in a single web app** - ???

### Declarative approach

TBD

### Auto-update

TBD

### Single-threaded async UI model

TBD

### Services

TBD

### WebAssembly support

TBD

### Offline mode for web apps

TBD

### Embedding Flet web apps

TBD

## Architectural changes in Flet 1.0

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