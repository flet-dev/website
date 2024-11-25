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

### Binary Python packages

Binary Python packages (vs "pure" Python packages written in Python only) are packages that partially written in C, Rust or other languages producing native code. Example packages are `numpy`, `cryptography`, or `pydantic`.

Flet provides an alternative index https://pypi.flet.dev to host Python binary wheels (`.whl` files downloaded by pip) for iOS and Android platforms.

The following packages are currently available for iOS:

| Name          | Version      |
|---------------|--------------|
| aiohttp       | 3.9.5 |
| argon2-cffi-bindings | 21.2.0 |
| bcrypt | 4.2.0 |
| bitarray | 2.9.2 |
| blis | 1.0.0 |
| Brotli | 1.1.0 |
| cffi | 1.17.1 |
| contourpy | 1.3.0 |
| cryptography | 43.0.1 |
| google-crc32 | 1.6.0 |
| grpcio | 1.67.1 |
| kiwisolver | 1.4.7 |
| lru-dict | 1.3.0 |
| lxml | 5.3.0 |
| MarkupSafe | 2.1.5 |
| matplotlib | 3.9.2 |
| numpy | 2.1.1 |
| numpy | 1.26.4 |
| opencv-python | 4.10.0.84 |
| pandas | 2.2.2 |
| pillow | 10.4.0 |
| protobuf | 5.28.3 |
| pydantic-core | 2.23.3 |
| time-machine | 2.16.0 |
| websockets | 13.0.1 |
| yarl | 1.11.1 |

:::warning Work in progress
New packages can be built with creating a recipe in [Mobile Forge](https://github.com/flet-dev/mobile-forge) project. For now, Flet team is authoring those recipes for you, but when the process is polished and fully-automated you'll be able to send a PR and test the compiled package right away.

If you don't yet see a package at https://pypi.flet.dev you can request it in [Flet discussions - Packages](https://github.com/flet-dev/flet/discussions/categories/packages). Please do not request pure Python packages. Go to package's "Download files" section at https://pypi.org and make sure it contains binary platform-specific wheels.
:::

## `flet build ipa`

Build an iOS archive bundle and IPA for distribution (macOS host only).

To successfully generate "runnable" IPA you should provide correct values for the following arguments:

* `--org` - organization name in reverse domain name notation, e.g. `com.mycompany` (defaults to `com.flet`). The value
  is combined with `--project` and used as an iOS and Android bundle ID.
* `--project` - project name in C-style identifier format (lowercase alphanumerics with underscores) used to build bundle ID and as a name for bundle executable. By default, it's the name of Flet app directory.
* `--team` - team ID to locate provisioning profile. If no team ID provided a unsigned iOS archive will be generated.

You can also configure these settings in `pyproject.toml`:

```toml
[project]
name = "my-app"

[tool.flet]
org = "com.mycompany"

[tool.flet.ios]
team = "team_id"
```

## Permissions

Setting iOS permissions which are written into `Info.plist` file:

```
flet build --info-plist permission_1=True|False|description permission_2=True|False|description ...
```

For example:

```
flet build --info-plist NSLocationWhenInUseUsageDescription="This app uses location service when in use."
```

Configuring iOS permissions in `pyproject.toml`:

```toml
[tool.flet.ios.info] # --info-plist
NSCameraUsageDescription = "This app uses the camera to ..."
```

## Deep linking

You can configure deep-linking settings for iOS bundle with the following `flet build` options:

* `--deep-linking-scheme` - deep linking URL scheme to configure for iOS and Android builds, i.g. "https" or "myapp".
* `--deep-linking-host` - deep linking URL host.

The same can be configured in `pyproject.toml`:

```toml
[tool.flet.ios.deep_linking]
scheme = "https"
host = "mydomain.com"
```

See [Deep linking](https://docs.flutter.dev/ui/navigation/deep-linking) section in Flutter docs for more information and complete setup guide.