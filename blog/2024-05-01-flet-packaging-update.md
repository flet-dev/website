---
slug: flet-packaging-update
title: Flet packaging update
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

## The problem

When you package your Flet program in Python to run on a mobile device (or desktop) the resulting
bundle (.apk, .ipa, .exe, .app) contains your Python program, Python interpreter and [Python Standard Libary](https://docs.python.org/3/library/index.html).

If your program uses only Python standard libary then packaging process is relatively easy - Flet zips your code and combines Flutter app together with Python interpreter and standard library both compiled for the target platform: Android or iOS.

However, problems arise when your Flet program uses third-party packages, with thousands of them published on PyPI or Conda.

There are two kinds of packages:

### Pure-Python packages

A "pure-Python" package is a package that only contains Python code, and doesn't include, say, C extensions or code in other languages. You only need a Python interpreter and the Python Standard Library to run a pure-Python package, and it doesn't matter what your OS or platform is.

Examples of such packages: `httpx`, `click`, `rich`, `requests`.

To verify if the package is pure find that package on [PyPI](https://pypi.org) and navigate to its "Download files" page. If under "Built distribution" section there is only one wheel ending with `-py3-none-any.whl` then *most probably* it's a pure Python package that will work "as is" on any device with Python.

<img src="/img/blog/packaging/pypi-pure-package.png" className="screenshot-80 screenshot-rounded" />

We say *"probably"* because that pure package could depend on a non-pure package which brings you to the next section. For example, [`pydantic`](https://pypi.org/project/pydantic/#files) is a pure package, but to work properly it requires [`pydantic-core`](https://pypi.org/project/pydantic-core/#files) non-pure package written in Rust.

### Non-pure Python packages

A "non-pure Python" package is one that is fully or partially written in C, C++, Rust, or another language and must be compiled to machine code for the platform on which it will run.

Examples of such packages: `cryptography`, `opencv-python`, `numpy`, `msgpack`.

On "Download files" page of non-pure package you will find a bunch of wheels pre-built for various platforms: macOS, Windows, Linux.

<img src="/img/blog/packaging/pypi-non-pure-package.png" className="screenshot-80 screenshot-rounded" />

When you run `pip install <package>` pip tries to find a wheel for your specific platform and Python version looking at wheel sufixes that include that information.

It's a courtesy of package developer to provide pre-compiled wheels for multiple platforms. There could be missing wheels for some platforms, or no wheels at all - just `.tar.gz` under "Source distribution" with package sources.

#### Building package from sources is hard

To install a package with source distribution only, pip will attempt to build non-Python code on your machine using installed compilers, linkers, libraries, and SDKs. However, this process can be lengthy and error-prone. The compiled code base might be large, and your machine could lack the required libraries or toolchains.

#### No wheels for iOS and Android yet

There are no pre-built wheels for iOS and Android on PyPI and PyPI's validation process won't allow package developers to upload them anyway as both iOS and Android are not officially supported platforms in Python.

There is a process ([PEP 730](https://peps.python.org/pep-0730/) and [PEP 738](https://peps.python.org/pep-0738/)) to add official support for iOS and Android to Python 3.13, so, hopefully, the developer experience will improve.

#### Package dependencies

Pure-Python packages can import or depend on non-pure packages and you should keep that in mind while packaging your Flet app to run on a mobile device.

For example, `supabase` package, to access Supabase API, is a pure package which depends on `pydantic` package which is also pure Python package. In its turn `pydantic` package depends on `pydantic-core` which is a non-pure package written in Rust. Thus, to run your Flet app using Supabase API the packaging process should be able to find a pre-build wheel for your target platform. If PyPI doesn't have that wheel then it could be either Flet developers, building that wheel on their servers and hosting it somewhere, or you, building that wheel on your own machine.

## Current approach

Kivy

## Packaging 2.0

What we have now

How it works now

Drawbacks (flet package substitution, no pre-built packages - have to build yourself using p4a)

## PyCon

TBD