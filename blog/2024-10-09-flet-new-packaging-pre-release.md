---
slug: flet-new-packaging-pre-release
title: Flet new packaging pre-release
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
---

Flet packaging for iOS and Android has been relying on Kivy and it was super annoying when your app depends on Python binary packages, such as Numpy or Pillow. You needed to compile those packages yourself using Kivy command line tools. It was really frustrating and even hopeless if Kivy didn't have "recipes" for some packages, like Pydantic.

Kivy no more! Flet is now using its own Python runtime "meticulously crafted in-house".
Flet packaging implementation for iOS and Androind adheres to strict specifications defined in [PEP 730](https://peps.python.org/pep-0730/) (iOS) and [PEP 738](https://peps.python.org/pep-0738/) (Android) which were implemented and released in Python 3.13 (and back-ported to Python 3.12). When pypi.org supports wheel tags for iOS and Android and 3rd-party Python package maintainers start uploading their mobile packages Flet will be compatible with them and you'll be able to use them in your Flet app. 


Pre-built packages hosted at ...

Build new packages with ...

Request new packages ...

If binary for required platform is not found `flet build` is not trying to compile it from the sources, but fails instead with a meaningfull error.

Is not trying to replace `flet` dependency with `flet-runtime`, `flet-embed` or `flet-pyodide`, but installs them "as is" - thanks to the new Flet packages structure (link).

