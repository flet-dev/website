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


## How to upgrade

Run the following command to upgrade Flet:

```
pip install 'flet[all]' --upgrade
```

:::note
`[all]` is an "extra" specifier which tells pip to install all `flet` package dependencies. See [New Python packages structure](#new-python-packages-structure) section below for the explanation.
:::

Bump `flet` package version to `0.25.0` (or remove it at all to use the latest) in `requirements.txt` or `pyproject.toml`.

## Flet extensions

Flet extensions that used to be a part of Flet repository, now have been moved to separate repos and published on pypi:

[flet-ads](https://pypi.org/project/flet-ads/)
[flet-audio](https://pypi.org/project/flet-audio/)
[flet-audio-recorder](https://pypi.org/project/flet-audio-recorder/)
[flet-flashlight](https://pypi.org/project/flet-flashlight/)
[flet-geolocator](https://pypi.org/project/flet-geolocator/)
[flet-lottie](https://pypi.org/project/flet-lottie/)
[flet-map](https://pypi.org/project/flet-map/)
[flet-permission-handler](https://pypi.org/project/flet-permission-handler/)
[flet-rive](https://pypi.org/project/flet-rive/)
[flet-video](https://pypi.org/project/flet-video/)
[flet-webview](https://pypi.org/project/flet-webview/)

## Custom extensions

Flet now makes it easy to create and build project with your custom controls based on Flutter widgets.

Create new virtual enviroment and then [install Flet](/docs/getting-started/#python-venv-module) there.

### Create Flet extension project

Create new Flet project from template:
```
flet create --template extension --project-name my-project
```
### Build your app for macos

When in the folder where your pyproject.tolm for the app is, run flet build command:
```
cd examples/my_project_example
flet build macos
```

Open the app and see the new custom Flet Control
```
open build/macos/my-project-example.app
```


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