---
slug: flet-mobile-update
title: Flet mobile update
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [news]
---

I've been thinking how to make it running

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