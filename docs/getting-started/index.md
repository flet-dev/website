---
title: Getting started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before you can create your first Flet app you need to setup your development environment which requires Python 3.8 or above and `flet` package.

We recommend installing Flet in a virtual environment which can be done in a number of different ways.

## Prerequisites

### Linux

If installing Flet on Linux, there are additional [prerequisites](/docs/publish/linux#prerequisites).

### WSL

Flet apps can be run on WSL 2 (Windows Subsystem for Linux 2). If you are getting `cannot open display` error [following this guide](https://github.com/microsoft/wslg/wiki/Diagnosing-%22cannot-open-display%22-type-issues-with-WSLg) for troubleshooting.

## Python venv module

You can create virtual environment by running the following commands in your terminal:

<Tabs groupId="os">
  <TabItem value="mac" label="macOS" default>

    ```
    mkdir first-flet-app
    cd first-flet-app
    python3 -m venv .venv
    source .venv/bin/activate
    ```

  </TabItem>

  <TabItem value="linux" label="Linux" default>

    ```
    mkdir first-flet-app
    cd first-flet-app
    python3 -m venv .venv
    source .venv/bin/activate
    ```

  </TabItem>

  <TabItem value="windows" label="Windows">
    ```
    md first-flet-app
    cd first-flet-app
    python -m venv .venv
    .venv\Scripts\activate
    ```

  </TabItem>

</Tabs>

Once you activated virtual environment, you'll see that you prompt now shows `(.venv)` prefix.

Now you can install the latest version of Flet in `.venv` virtual environment:
```
pip install flet
```
To check what version of Flet was installed:
```
flet --version
```

You can read more about Python `venv` module [here](https://docs.python.org/3/library/venv.html).

Now you are ready to [create your first Flet app](create-flet-app).

## Poetry

Another way to setup a virtual environment for your Flet project is using [Poetry](https://python-poetry.org/docs/).

Once you have Poetry [installed](https://python-poetry.org/docs/#installation), run the following command in your terminal:
```
poetry new first-flet-app
```
This command will create a new directory called first-flet-app with the following structure:
```
first-flet-app/
├── pyproject.toml
├── README.md
├── first-flet-app/
│   └── __init__.py
└── tests/
    └── __init__.py
```
Now you can add Flet dependency to your project:  
```
cd first-flet-app
poetry add flet
```
To check what version of Flet was installed:
```
poetry run flet --version
```

Now you are ready to [create your first Flet app](create-flet-app). 

:::note
When running Flet app using Poetry, you'll need to use `poetry run` before each command!
:::

