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



Let's see what 

There are other projects. Flutter is different.

Current state

[DIAGRAM]


Next steps:

0. Asyncio support

Async/Await
Can run both async and sync code

1. Lightweight Python UI host with TCP on Windows and Unix Sockets on Linux/macOS. Python program starts Flet Flutter app. Two processes - no more Fletd.

[DIAGRAM]

2. Flet Flutter client with embedded Python. Python communicates with Flutter host via TCP/Sockets. One process. Packaging would change on this stage.

[DIAGRAM]

3. Flet Flutter client with embedded Python. Python communicates with Flutter host via native calls (FFI, ReceivePort). One process.

[DIAGRAM]