---
slug: flet-new-packaging-pre-release
title: Flet new packaging pre-release
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
---

Flet packaging for iOS and Android has been relying on Kivy and it was super annoying when your app depends on Python binary packages, such as Numpy or Pillow. You needed to compile those packages yourself using Kivy command line tools. It was really frustrating and even hopeless if Kivy didn't have "recipes" for some packages, like Pydantic.

Kivy no more! We've just published Flet 0.25.0devXXX pre-release with the improved `flet build` command which does not use Kivy! Flet is now using its own Python runtime "meticulously crafted in-house".

Flet packaging implementation for iOS and Androind adheres to strict specifications defined in [PEP 730](https://peps.python.org/pep-0730/) (iOS) and [PEP 738](https://peps.python.org/pep-0738/) (Android) which were implemented and released in Python 3.13 (and back-ported to Python 3.12). When pypi.org supports wheel tags for iOS and Android and 3rd-party Python package maintainers start uploading their mobile packages Flet will be compatible with them and you'll be able to use them in your Flet app.

## Installing pre-release

```
pip install flet==0.25.0devXXX
```

:::note
For testing purposes we suggest installing Flet pre-release in a dedicated Python virtual environment.
:::

## Python 3.12

Packaged Flet app runs on Python 3.12.6 runtime for all platforms.

## Pre-built binary packages

`flet build` command for iOS and Android is now installing pre-built binary packages from https://pypi.flet.dev.

New packages can be built with creating a recipe in [Mobile Forge](https://github.com/flet-dev/mobile-forge) project. For now, Flet team is authoring those recipes for you, but when the process is polished and fully-automated you'll be able to send a PR and test the compiled package right away.

If you don't yet see a package at https://pypi.flet.dev you can request it in [Flet discussions - Packages](https://github.com/flet-dev/flet/discussions/categories/packages). Please do not request pure Python packages. Go to package's "Download files" section at https://pypi.org and make sure it contains binary platform-specific wheels.

Packaging behavior was changed too:

- The packaging is not trying to replace `flet` dependency with `flet-runtime`, `flet-embed` or `flet-pyodide`, but install all dependencies "as is" from `requirements.txt` or `pyproject.toml` - thanks to the new Flet packages structure (link).
- If the binary package for target platform is not found the packaging won't be trying to compile it from source distribution, but will fail instead with a meaningful error.

## New packages structure

TBD

## Control over compilation and cleanup

TBD

## What else coming in the release

### `pyproject.toml` support

TBD

### Running Flet app on simulator

TBD

### Installing Flutter

TBD


