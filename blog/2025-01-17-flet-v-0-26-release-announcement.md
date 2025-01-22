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

Hello!

Changes:

* Extensibility
* Flutter 3.27
* Installing Flutter, JDK, Android SDK
* Using Flet built with `flet build` in `flet run`.

## How to upgrade

Run the following command to upgrade Flet:

```
pip install 'flet[all]' --upgrade
```

:::note
`[all]` is an "extra" specifier which tells pip to install all `flet` package dependencies. See [New Python packages structure](#new-python-packages-structure) section below for the explanation.
:::

Bump `flet` package version to `0.25.0` (or remove it at all to use the latest) in `requirements.txt` or `pyproject.toml`.

## Built-in extensions

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

## User extensions

Flet now makes it easy to create and build projects with your custom controls based on Flutter widgets or Flutter 3rd-party packages:

1. Create new virtual enviroment and [install Flet](/docs/getting-started/#python-venv-module) there.

2. Create new Flet extension project from template:

```
flet create --template extension --project-name my-project
```

A project with new MyProject control will be created. The control is just a Flutter Text widget with two properties.  

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

In extension guide:
how to install extension from:
from pypi
from GitHub
from file system

## Other changes

TBD

## Bug fixes

TBD

## Conclusion

Flet 0.25.0 is a huge release and your feedback is highly welcomed!

Upgrade to Flet 0.25.0, test your apps and let us know how you find the new features we added.

If you have any questions, please join [Flet Discord server](https://discord.gg/dzWXP8SHG8) or create a new thread
on [Flet GitHub discussions](https://github.com/flet-dev/flet/discussions).

Happy Flet-ing! 👾