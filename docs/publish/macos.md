---
title: Packaging app for macOS
sidebar_label: macOS
---

Flet CLI provides `flet build macos` command that allows packaging Flet app into a macOS application bundle.

:::note
The command can be run on macOS only.
:::

## `flet build macos`

Creates a macOS application bundle from your Flet app.

## Permissions

Setting macOS entitlements which are written and `.entitlements` files:

```
flet build --macos-entitlements name_1=True|False name_2=True|False ...
```

Default macOS entitlements:

* `com.apple.security.app-sandbox = False`
* `com.apple.security.cs.allow-jit = True`
* `com.apple.security.network.client = True`
* `com.apple.security.network.server" = True`

Configuring macOS app entitlements in `pyproject.toml` (notice `"` around entitlement name):

```toml
[tool.flet.macos]
entitlement."com.apple.security.personal-information.photos-library" = true
```