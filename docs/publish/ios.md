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

### Rosetta 2

Flutter requires [Rosetta 2](https://support.apple.com/en-us/HT211861) on Apple silicon:

```
sudo softwareupdate --install-rosetta --agree-to-license
```

### Xcode

[Xcode](https://developer.apple.com/xcode/) 15 or later to compile native Swift or ObjectiveC code.

### CocoaPods

[CocoaPods](https://cocoapods.org/) 1.16 to compile and enable Flutter plugins.

### iOS wheels for binary Python packages

Binary Python packages (vs "pure" Python packages written in Python only) are packages that partially written in C, Rust or other languages producing native code. Example packages are `numpy`, `cryptography`, or `pydantic-core`.

Make sure all non-pure (binary) packages used in your Flet app have [pre-built wheels for iOS](/docs/reference/binary-packages-android-ios).

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