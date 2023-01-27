---
title: Publishing a static website with Pyodide
sidebar_label: Publishing static website
---

Publish as a standalone SPA.

What is Pyodide?

Limitations (pure Python modules or compiled against Pyodide)
A list of Pyodide compatible modules: https://pyodide.org/en/stable/usage/packages-in-pyodide.html

https://pyodide.org/en/stable/usage/wasm-constraints.html

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