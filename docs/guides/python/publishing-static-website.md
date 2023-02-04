---
title: Publishing a static website with Pyodide
sidebar_label: Publishing static website
---

Publish as a standalone SPA.

What is Pyodide?

Limitations (pure Python modules or compiled against Pyodide)
A list of Pyodide compatible modules: https://pyodide.org/en/stable/usage/packages-in-pyodide.html

https://pyodide.org/en/stable/usage/wasm-constraints.html

## Flet static vs server-side

With Flet static deployment a WASM version of Python runtime along with a user code are loaded into the browser which has its pros and cons.

Flet static pros:

* Zero latency between user-generated events (clicks, text field changes, drags) and page updates. There is no Fletd server, no WebSockets - Python program communicates with Flutter web client directly via JavaScript.
* Cheap hosting - Flet static app does not require any code to run on the server and thus can be hosted anywhere: GitHub Pages, Cloudflare Pages, Vercel, a shared hosting or your own VPS.
* Higher scalability - Flet static app runs entirely in the browser and if it doesn't use any server-side API it could be scaled to any number of users with just CDN.

Flet static cons:

* Slower loading time - it requires additional time to download Python engine (Pyodide), built-in and `flet-pyodide` packages, and a user program. Besides, initialization of Pyodide engine itself takes around 2-4 seconds which the team is [looking to improve](https://pyodide.org/en/stable/project/roadmap.html#roadmap) in the future.
* Limited Python compatibility - not every program that works with native Python [can be run with Pyodide](https://pyodide.org/en/stable/usage/wasm-constraints.html).
* Lower performance - Pyodide is currently 3x-5x slower than native Python, so Flet apps with heavy processing would be better deployed as a server-side.
* Users can access program code as it's downloaded by a browser in the form of `tar.gz` archive.

## Async or not async?

TBD

## Publish app as a static website

```
flet publish <path-to-your-app.py>
```

A static website is published into `./dist` directory.

## Testing website

```
python -m http.server --directory dist
```

Open `http://localhost:8000` in your browser to check the published website.

[More information](https://docs.python.org/3/library/http.server.html).

## Loading packages

What are default packages?

`requirements.txt`

### Pre-release Python packages

## Assets

TBD

## URL strategy

...and relation to static hosting without fallback pages.

## Web renderer

TBD

## Hosting website in a sub-directory

Base URL

## Deploying website

Deploy a static website to any free hosting such as GitHub Pages, Cloudflare Pages or Vercel!

## Troubleshooting

Console tab of Developer Tools in browser

How to enable debug mode?