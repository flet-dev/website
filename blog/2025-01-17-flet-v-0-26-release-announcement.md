---
slug: flet-v-0-26-release-announcement
title: Flet v0.26.0 Release Announcement
author: Feodor Fitsner
author_title: Flet founder and developer
author_url: https://github.com/FeodorFitsner
author_image_url: https://avatars0.githubusercontent.com/u/5041459?s=400&v=4
tags: [releases]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Flet 0.26.0 release is out with the revised extensibility approach!
Packages are moved to ...
No need to use --include-packages - just add python dependencies.

## How to upgrade

Run the following command to upgrade Flet:

```
pip install 'flet[all]' --upgrade
```

:::note
`[all]` is an "extra" specifier which tells pip to install all `flet` package dependencies. See [New Python packages structure](#new-python-packages-structure) section below for the explanation.
:::

Bump `flet` package version to `0.25.0` (or remove it at all to use the latest) in `requirements.txt` or `pyproject.toml`.

## Extensibility changes

### Built-in extensions

Flet controls based on 3rd-party Flutter packages that used to be a part of Flet repository, now have been moved to separate repos and published on pypi:

* [flet-ads](https://pypi.org/project/flet-ads/)
* [flet-audio](https://pypi.org/project/flet-audio/)
* [flet-audio-recorder](https://pypi.org/project/flet-audio-recorder/)
* [flet-flashlight](https://pypi.org/project/flet-flashlight/)
* [flet-geolocator](https://pypi.org/project/flet-geolocator/)
* [flet-lottie](https://pypi.org/project/flet-lottie/)
* [flet-map](https://pypi.org/project/flet-map/)
* [flet-permission-handler](https://pypi.org/project/flet-permission-handler/)
* [flet-rive](https://pypi.org/project/flet-rive/)
* [flet-video](https://pypi.org/project/flet-video/)
* [flet-webview](https://pypi.org/project/flet-webview/)

To use a built-in Flet extension in your project, you need to install it first, for example:
```
pip install 'flet[all]' flet-audio
```

### User extensions

Flet now makes it easy to create and build projects with your custom controls based on Flutter widgets or Flutter 3rd-party packages:

1. Create new virtual enviroment and [install Flet](/docs/getting-started/#python-venv-module) there.

2. Create new Flet extension project from template:

```
flet create --template extension --project-name my-project
```

A project with new MyProject control will be created. The control is just a Flutter Text widget with text property.  

3. Build your app.

Flet project created from extension template has `examples/my_project_example` folder with the example app.

When in the folder where your `pyproject.toml` for the app is, run `flet build` command, for example, for macos:

```
flet build macos -v
```

Open the app and see the new custom Flet Control
```
open build/macos/my-project-example.app
```
<img src="/img/blog/extensions/example.png" className="screenshot-30" />

4. Run your app.

Once the project was built for desktop once, you can make changes to your python files and run it without re-building.

First, install dependencies from pyproject.toml:
```
pip install .
```

Now, you can make changes to your `main.py`:
```
import flet as ft

from my_project import MyProject


def main(page: ft.Page):
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    page.add(
        ft.Container(
            height=150,
            width=300,
            alignment=ft.alignment.center,
            bgcolor=ft.Colors.PINK_200,
            content=MyProject(
                tooltip="My new pink Control tooltip",
                value="My new pink Flet Control",
            ),
        ),
    )

ft.app(main)
```
 and run your app:
```
flet run
```
<img src="/img/blog/extensions/example_pink.png" className="screenshot-30" />

Read more about how to customise your extension [here](/docs/extend/integrating-existing-flutter-packages).

## Development environment configuration

To enhance the developer experience with the `flet build` command, Flet 0.26.0 ensures that the correct versions of Flutter SDK, Java (JDK), and Android SDK are installed. If any of these are missing or outdated, it automatically installs them for you.

You still need to install Visual Studio 2022 yourself if you're building a Flet app for Windows, or Xcode if you're building for iOS or macOS.

In the next releases we are going to introduce automatic configuration and startup of Android and iOS emulators.

## Flutter 3.27

Flet has been migrated to Flutter SDK 3.27. See [this pull request](https://github.com/flet-dev/flet/pull/4703) for new and updated control properties.

## Other changes

* Optional on-demand creation of `ListView.controls` ([#3931](https://github.com/flet-dev/flet/issues/3931))
* Reset `InteractiveViewer` tranformations ([#4391](https://github.com/flet-dev/flet/issues/4391))
* Passthrough of mouse events from main window to other applications ([#1438](https://github.com/flet-dev/flet/issues/1438))
* Implemented `Window.ignore_mouse_events` ([#4465](https://github.com/flet-dev/flet/pull/4465))
* Adding Google/Android TV platform support ([#4581](https://github.com/flet-dev/flet/pull/4581))
* Remove `Optional[]` from predefined typing `*Value`s ([#4702](https://github.com/flet-dev/flet/pull/4702))
* Throttle `InteractiveViewer` update events ([#4704](https://github.com/flet-dev/flet/pull/4704))
* Remove v0.26.0-related deprecations ([#4456](https://github.com/flet-dev/flet/issues/4456))

## Bug fixes

* Fixed: Update project_dependencies.py ([#4459](https://github.com/flet-dev/flet/pull/4459))
* Fixed: `SafeArea` object has no attribute `_SafeArea__minimum` ([#4500](https://github.com/flet-dev/flet/pull/4500))
* Fixed: Tooltip corruption in `Segment` and `BarChartRod` on `update()` ([#4525](https://github.com/flet-dev/flet/pull/4525))
* Fixed: Setting `CheckBox.border_side.stroke_align` to an Enum fails ([#4526](https://github.com/flet-dev/flet/pull/4526))
* Fixed: `ControlState` should be resolved based on user-defined order ([#4556](https://github.com/flet-dev/flet/pull/4556))
* Fixed: broken `Dismissible.dismiss_direction` ([#4557](https://github.com/flet-dev/flet/pull/4557))
* Fixed: Fix Rive not updating ([#4582](https://github.com/flet-dev/flet/pull/4582))
* Fixed: `DatePicker` regression with first and last dates ([#4661](https://github.com/flet-dev/flet/pull/4661))
* `flet build` command: Copy `flutter-packages`, support for platform-specific dependencies ([#4667](https://github.com/flet-dev/flet/pull/4667))
* Fixed: `CupertinoBottomSheet` applies a red color and yellow underline to `Text`  content ([#4673](https://github.com/flet-dev/flet/pull/4673))
* Fixed: setting `ButtonTheme` displays a grey screen ([#4731](https://github.com/flet-dev/flet/pull/4731))
* Fixed: `Textfield` input border color considers user-specified `border_color` property ([#4735](https://github.com/flet-dev/flet/pull/4735))
* Fixed: make `Tooltip.message` a required parameter ([#4736](https://github.com/flet-dev/flet/pull/4736))

## Conclusion

Flet 0.25.0 is a huge release and your feedback is highly welcomed!

Upgrade to Flet 0.25.0, test your apps and let us know how you find the new features we added.

If you have any questions, please join [Flet Discord server](https://discord.gg/dzWXP8SHG8) or create a new thread
on [Flet GitHub discussions](https://github.com/flet-dev/flet/discussions).

Happy Flet-ing! 👾