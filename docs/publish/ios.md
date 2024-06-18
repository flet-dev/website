---
title: Packaging app for iOS
sidebar_label: iOS
---

## Introduction

Flet CLI provides `flet build ipa` command that allows packaging Flet app into an iOS archive bundle and IPA for distribution.

:::note
The command can be run on macOS only.
:::

## Prerequisites

### Native Python packages

Native Python packages (vs "pure" Python packages written in Python only) are packages that partially written in C, Rust or other languages producing native code. Example packages are `numpy`, `cryptography`, `lxml`, `pydantic`.

When packaging Flet app for iOS with `flet build` command such packages cannot be installed from PyPI, because there are no wheels (`.whl`) for iOS platform.

Therefore, you have to compile native packages for iOS on your computer before running `flet build` command.

:::warning Work in progress
We are actively working on automating the process described below - it's #1 item in our backlog.
:::

Flet uses [Kivy for iOS](https://github.com/kivy/kivy-ios) to build Python and native Python packages for iOS.

To build your own Python distributive with custom native packages and use it with `flet build` command you need to use `toolchain` tool provided by Kivy for iOS.

`toolchain` command-line tool can be run on macOS only.

Start with creating a new Python virtual environment and installing `kivy-ios` package from Flet's fork as described [here](https://github.com/flet-dev/python-for-ios?tab=readme-ov-file#installation--requirements):

```
pip install git+https://github.com/flet-dev/python-for-ios.git
```

Run `toolchain` command with the list of packages you need to build, for example to build `numpy`:

```
toolchain build numpy
```

**NOTE:** The library you want to build with `toolchain` command should have a recipe in [this folder](https://github.com/kivy/kivy-ios/tree/master/kivy_ios/recipes). You can [submit a request](https://github.com/kivy/kivy-ios/issues) to make a recipe for the library you need or create your own recipe and submit a PR.

You can also install package that don't require compilation with `pip`:

```
toolchain pip install flask
```

This case you don't need to include that package into `requirements.txt` of your Flet app.

When `toolchain` command is finished you should have everything you need in `dist` directory.

Get the full path to `dist` directory by running `realpath dist` command.

In the terminal where you run `flet build ipa` command to build your Flet iOS app run the following command to
store `dist` full path in `SERIOUS_PYTHON_IOS_DIST` environment variable:

```bash
export SERIOUS_PYTHON_IOS_DIST="<full-path-to-dist-directory>"
```

Build your app by running `flet build ipa` command.

You app's bundle now includes custom Python libraries.

## `flet build ipa`

Build an iOS archive bundle and IPA for distribution (macOS host only).

:::warning Work in progress
Creating of an iOS package, suitable for running on a device or publishing to AppStore is, in general, a complex process with a lot of moving parts. Let us know if it worked or didn't work for your particular case and there are some changes required into Flutter project template. 
:::

To successfully generate IPA you should provide correct values for the following arguments:

* `--org` - organization name in reverse domain name notation, e.g. `com.mycompany` (defaults to `com.flet`). The value
  is combined with `--project` and used as an iOS and Android bundle ID.
* `--project` - project name in C-style identifier format (lowercase alphanumerics with underscores) used to build bundle ID and as a name for bundle executable. By default, it's the name of Flet app directory.
* `--team` - team ID to locate provisioning profile. If no team ID provided a unsigned iOS archive will be generated.