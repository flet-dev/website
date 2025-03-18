---
title: Create a new Flet app
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create a new directory (or directory with `pyproject.toml` already exists if initialized with `poetry` or `uv`) and switch into it.

To create a new "minimal" Flet app run the following command:

<Tabs groupId="language">
  <TabItem value="venv" label="venv" default>
```
flet create
```
  </TabItem>
  <TabItem value="uv" label="uv">
```
uv run flet create
```
  </TabItem>
  <TabItem value="poetry" label="poetry">
```
poetry run flet create
```
  </TabItem>
</Tabs>

The command will create the following directory structure:

```
├── README.md
├── pyproject.toml
├── src
│   ├── assets
│   │   └── icon.png
│   └── main.py
└── storage
    ├── data
    └── temp
```

:::note
1. Original `pyproject.toml` created by `uv init` or `poetry init` will be replaced with the one from Flet app template.
2. In case you encounter the error `Error creating the project from a template: 'git' is not installed.`, it means that you don't have _Git_ installed. Please visit [git-scm.com/downloads](https://git-scm.com/downloads) and install the latest version of _Git_. To verify your installation, type `git` in the terminal.
Please note that _Git_ is not the same as _GitHub CLI_ which is not an alternative for use with Flet.
:::

`src/main.py` contains Flet program. It has `main()` function where you would add UI elements ([controls](flet-controls)) to a page or a window. The application ends with a blocking `ft.app()` function which initializes Flet app and [runs](running-app) `main()`.

You can find more information about `flet create` command [here](/docs/reference/cli/create).

Now let's see Flet in action by [running the app](running-app)!
