---
slug: flet-v-0-23-release-announcement
title: Flet v0.23.0 Release Announcement
author: Henri Ndonko
author_title: Flet Contributor and Maintainer
author_url: https://github.com/ndonkoHenri
author_image_url: https://avatars.githubusercontent.com/u/98978078?v=4
tags: [releases]
---

We are excited to announce the release of Flet 0.23.0. It is a big release with many new features and bug fixes.

## New Controls

- [`AutoComplete`](/docs/controls/autocomplete)
- [`AutoFillGroup`](/docs/controls/autofillgroup)
- [`Flashlight`](/docs/controls/flashlight)
- [`Geolocator`](/docs/controls/geolocator)
- [`Map`](/docs/controls/map)
- [`PermissionHandler`](/docs/controls/permissionhandler)

## New Properties

- [`Option`](/docs/controls/dropdown#dropdownoption-properties): `content`, `text_style`
- [`TextStyle`](/docs/reference/types/textstyle): `baseline`, `overflow`, `word_spacing`

## Error Handling

> PEP 20 (Zen of Python): Errors should never pass silently.

Several devs reported that, on some occasions, a control might visually break without clear information on what caused
the break.

For example, in issue [#3149](https://github.com/flet-dev/flet/issues/3149), @base-13 mentioned that _"in a DataTable if
the number of columns is less than the number of datacells in any row it will grey out whole table without throwing
error"_.

Knowing this, we added more assertion-checks in most of the controls, such that, when you provide them with a wrong
value, an AssertionError is raised with a very clear message of what was wrongly done.

If you find out that some checks are still missing, please point them out so they can be addressed.

## Command Line (CLI) Output

The output of the `flet build` command has been prettified.

Also, a new option has been added --show-platform-matrix which displays a table containing the build platform matrix,
which has header columns "Command" (possible build commands) and "Platform" (the device you should use with the
respective command).

Furthermore, when the targeted platform can't be built on your device, a table displaying the build platform matrix is
shown with an informative message.

## Breaking Changes

While doing "Error Handling" mentioned above, we had to mark some important properties as required.

The following properties are now "required" (must be provided and visible) when creating an instance of their classes:

* [`AnimatedSwitcher.content`](/docs/controls/animatedswitcher#content)
* [`Banner.content`](/docs/controls/banner#content), [`Banner.actions`](/docs/controls/banner#actions)
* [`BottomSheet.content`](/docs/controls/bottomsheet#content)
* [`CupertinoActionSheetAction.content`](/docs/controls/cupertinoactionsheetaction#content)
* [`DataRow.cells`](/docs/controls/datatable)
* [`DataTable.columns`](/docs/controls/datatable)
* [`DragTarget.content`](/docs/controls/dragtarget#content)
* [`Draggable.content`](/docs/controls/draggable#content)
* [`ExpansionTile.title`](/docs/controls/expansiontile#title)
* [`MenuBar.controls`](/docs/controls/menubar#controls)
* [`Pagelet.content`](/docs/controls/pagelet#content)
* [`RadioGroup.content`](/docs/controls/radio#content)
* [`SafeArea.content`](/docs/controls/safearea#content)
* [`ShaderMask.shader`](/docs/controls/shadermask#shader)
* [`WindowDragArea.content`](/docs/controls/windowdragarea#content)

## Bug Fixes

The below issues were successfully fixed:

* [#3144](https://github.com/flet-dev/flet/issues/3144): `ScrollbarTheme.thickness` value not respected when not
  interacting with
* [#3072](https://github.com/flet-dev/flet/issues/3072): High-resolution videos play laggy on Android TV devices.
* [#3023](https://github.com/flet-dev/flet/issues/3023): (Regression) Some `LineChart` colors not visually respected
* [#2989](https://github.com/flet-dev/flet/issues/2989): Color of [`Dropdown`](/docs/controls/dropdown) when disabled
  doesn't reflect its disabled state
* [#1753](https://github.com/flet-dev/flet/issues/1753): [`Markdown`](/docs/controls/markdown) code block not selectable
* [#3097](https://github.com/flet-dev/flet/issues/3097): Hot-reload occurs when a file is opened
* [#1647](https://github.com/flet-dev/flet/issues/1647): [`Container.theme_mode`](/docs/controls/container#theme_mode)
  not honoured when `Container.theme=None`
* [#3064](https://github.com/flet-dev/flet/issues/3064): [`Container.on_tap_down`](/docs/controls/container#on_tap_down)
  not called when `Container.on_click=None`

Special Thanks to the dynamic Flet community for reporting all the issues they encountered. We keep working hard on
solving the remaining ones.

## Deprecations

* All the `Page.window_***` properties are now deprecated and moved to [`Page.window`](/docs/controls/page#window)
  property, which is of type [`Window`](/docs/reference/types/window).
  To migrate, simply use change `window_` to `window.` as seen below:
  ```python
  # before 
  page.window_height = 200
  page.on_window_event = lambda e: print(e.type)
  
  # now
  page.window.height = 200
  page.window.on_event = lambda e: print(e.type)
  ```

* `SafeArea.minimum` is deprecated and has been renamed
  to [`minimum_padding`](/docs/controls/safearea#minimum_padding)
* `MaterialState` enum is deprecated and has been renamed to [`ControlState`](/docs/reference/types/controlstate)
* `NavigationDestination` is deprecated and has been renamed
  to [`NavigationBarDestination`](/docs/controls/navigationbar#navigationbardestination-properties)

Also, the deprecation policy has been modified. While Flet is pre-1.0, all deprecations will be removed from the API after the next 3 releases.
So the above deprecations made in v0.23.0 (and all the other deprecations made in the previous versions), will be removed in v0.26.0.

That's it! :)

Upgrade to Flet 0.23.0, test your apps and let us know how you find the new features we added.
If you have any questions, please join [Flet Discord server](https://discord.gg/dzWXP8SHG8) or create a new thread
on [Flet GitHub discussions](https://github.com/flet-dev/flet/discussions).

Happy Flet-ing!
