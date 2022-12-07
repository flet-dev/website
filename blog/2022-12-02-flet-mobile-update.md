---
slug: flet-mobile-update
title: Flet mobile update
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [news]
---

This post is a continuation of [Flet mobile strategy](/docs/guides/python/mobile-support) published a few months ago.

Our original approach to Flet running on a mobile device was Server-Driven UI. Though SDUI has its own benefits (like bypassing App Store for app updates) it doesn't work in all cases, adds latency (which is not cool for user actions requiring immediate update, like drawing apps) and requires web server to host Python part of the app. 

I've been thinking how to make Python runtime embedded into Flutter app and running on Android or iOS device. No doubt it's technically possible as Kivy and BeeWare projects do that already.

## Flet current architecture

The current architecture of Flet desktop app is shown on the diagram below:

<img src="/img/blog/mobile-update/flet-desktop-architecture.svg" className="screenshot-100" />

Running Flet program on a desktop starts three applications (processes):

* **Python runtime** (`python3`) - Python interpreter running your Python script. This is what you are starting from a command line. Python starts Fletd server and connects to it via WebSockets.
* **Fletd server** (`fletd`)- Flet web server written in Go, listening on a TCP port. Fletd holds the state of all user sessions (for desktop app there is only one session) and dispatches page updates and user generated events between Python program and Flet client.
* **Flet client** (`flet`) - desktop app written in Flutter and displaying UI in a native OS window. Flet client connects to Fletd server via WebSockets.

The architecture works well for Flet web apps, but for desktop it seems redundant:

* As all three processes run on the same computer WebSockets could be replaced with sockets or named pipes with less overhead.
* Fletd server has no much sense as there is only one user session and UI state is persistently stored in Flet desktop client which is never "reloaded".

## Flet new desktop architecture

Flet desktop app architecture can be simplified by replacing Fletd with a "stub" written in Python and communicating with Flet desktop client via sockets (Windows) and named pipes (macOS and Linux):

<img src="/img/blog/mobile-update/flet-desktop-architecture-v2.svg" className="screenshot-70" />

## Flet mobile architecture

Mobile applications are running in a very strict context with a number of limitations. For example, on iOS the app cannot spawn a new processes. Other words, Flet Flutter app cannot just start "python.exe" and pass your script as an argument.

Luckily for us, [Python can be embedded](https://docs.python.org/3/extending/embedding.html) into another app as a C library and Dart (the language in which Flutter apps are written) allows calling C libraries via [FFI](https://dart.dev/guides/libraries/c-interop) (Foreign Function Interface).

Additionally, while Android allows loading of dynamically linked libraries iOS requires all libraries statically linked into app executable. [This article](https://blog.logrocket.com/dart-ffi-native-libraries-flutter/) covers Dart FFI in more details, if you are curious.

So, Flet mobile architecture will look like this:

<img src="/img/blog/mobile-update/flet-mobile-architecture-v2.svg" className="screenshot-40" />

Python runtime will be statically or dynamically linked with Flutter client and called via FFI and named pipes.

Running Python on mobile will have some limitations though with the most notable one is the requirement to use pure Python modules or modules with native code compiled specifically for mobile ARM64 architecture.

## Asyncio support

Asyncio is part of Python 3 and we see more and more libraries utilizing async/await programming model which is more effective for I/O-bound applications and UI logic.

Currently, Flet is running all control event handlers in new threads and it's also a pain to see `threading.sleep()` calls hogging thread just to do some UI animation. All that looks expensive.

Using of async libraries from a sync code is [possible](https://github.com/flet-dev/flet/issues/128), but looks hacky and inefficient as it keeps CPU busy just to wait async method to finish.

Async/await model is a state machine switching between tasks in a single thread. By switching to async Flet will able to utilize streams for implementing socket server and pure async [WebSockets library](https://pypi.org/project/websockets/). It will be possible to use both sync and async event handlers in a Flet app without any compromises/hacks.

Additionally, Flet async would be able to run entirely in the browser with [Pyodide](https://pyodide.org/) - Python distribution based on WebAssembly (WASM). Imagine, Flet web app that does not require a server to run a Python code!

## The plan

We are going to develop the scope above in a few iterations:

1. Async support with async WebSockets library. Works with the same Fletd in Go.
2. Fletd server in Python to use with desktop.
3. Embedding Python with Fletd stub and user pgoram into iOS.
4. Embedding Python into Android.
5. Packaging mobile apps for iOS and Android.

I'm calling for help of the community, especially with C/C++/native code part.

Hop to [Discord](https://discord.gg/dzWXP8SHG8) to discuss.