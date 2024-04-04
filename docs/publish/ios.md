---
title: Packaging app for iOS
sidebar_label: iOS
---

## Introduction

Flet CLI provides `flet build ipa` command that allows packaging Flet app into an iOS archive bundle and IPA for distribution.

:::note
The command can be run on macOS only.
:::

## `flet build ipa`

Build an iOS archive bundle and IPA for distribution (macOS host only).

:::warning Work in progress
Creating of an iOS package, suitable for running on a device or publishing to AppStore is, in general, a complex process with a lot of moving parts. Let us know if it worked or didn't work for your particular case and there are some changes required into Flutter project template. 
:::

To successfully generate IPA you should provide correct values for the following arguments:

* `--org` - organization name in reverse domain name notation, e.g. `com.mycompany` (default is `com.flet`). The value is combined with `--project` and used as an iOS and Android bundle ID.
* `--project` - project name in C-style identifier format (lowercase alphanumerics with underscores) used to build bundle ID and as a name for bundle executable. By default, it's the name of Flet app directory.
* `--team` - team ID to locate provisioning profile. If no team ID provided a unsigned iOS archive will be generated.