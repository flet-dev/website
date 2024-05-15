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

### Specify output directory

If you specify the build directory then the directory acts like a cache, speeding up subsequent builds.

```bash
flet build -o ./build macos
```

## Debugging the build process

You can use both 
- `flet build -v` for verbose logging or
- `flet build -vv` for the highest level of verbose logging.

If something is not working in your build process then you may need the highest verbosity of logging.
