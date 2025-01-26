---
title: Getting started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before you can create your first Flet app you need to setup your development environment which requires Python 3.9 or above and `flet` package.

We recommend installing Flet in a virtual environment which can be done in a number of different ways.

## Prerequisites

### macOS

Flet supports macOS 11 (Big Sur) or later.

### Windows

Flet supports 64-bit version of Microsoft Windows 10 or later.

### Linux

Flet supports Debian Linux 11 or later and Ubuntu Linux 20.04 LTS or later.

There are additional [prerequisites](/docs/publish/linux#prerequisites) when developing and running Flet apps on Linux.

<details>
  <summary>Windows Subsystem for Linux (WSL)</summary>

Flet apps can be run on WSL 2 (Windows Subsystem for Linux 2). If you are getting `cannot open display` error [following this guide](https://github.com/microsoft/wslg/wiki/Diagnosing-%22cannot-open-display%22-type-issues-with-WSLg) for troubleshooting.

#### Audio support

If you recieve `error while loading shared libraries: libgstapp-1.0.so.0` GStreamer is not installed in your WSL environment.

To install GStreamer run the following command:

```
apt install -y libgstreamer1.0-0 gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools
```

#### Video support

Video support in Flet on WSL requires `libmpv` library.

If you recieve `error while loading shared libraries: libmpv.so.1: cannot open shared object file: No such file or directory` it means the library is not installed.

To install `libmpv` run the following commands:

```
sudo apt update
sudo apt install libmpv-dev libmpv2
sudo ln -s /usr/lib/x86_64-linux-gnu/libmpv.so /usr/lib/libmpv.so.1
```

</details>

## Virtual environment

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

  <TabItem value="linux" label="Linux">

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

Once you activated virtual environment, you'll see that your prompt now shows `(.venv)` prefix.

Now you can install the latest version of Flet in `.venv` virtual environment:
<Tabs groupId="os">
  <TabItem value="mac" label="macOS" default>

    ```
    pip install 'flet[all]'
    ```

  </TabItem>

  <TabItem value="linux" label="Linux">

    ```
    pip install flet[all]
    ```

  </TabItem>

  <TabItem value="windows" label="Windows">
    ```
    pip install flet[all]
    ```

  </TabItem>

</Tabs>
To check what version of Flet was installed:
```
flet --version
```

You can read more about Python `venv` module [here](https://docs.python.org/3/library/venv.html).

Now you are ready to [create your first Flet app](create-flet-app).

## Poetry

Another way to setup a virtual environment for your Flet project is using [Poetry](https://python-poetry.org/docs/).

:::note Poetry 2.0
All Poetry examples in Flet docs is for Poetry 2.0 as it supports standard `[project]` section in `pyproject.toml`.
:::

Once you have Poetry [installed](https://python-poetry.org/docs/#installation), run the following commands in your terminal:

```
mkdir my-app
cd my-app
poetry init --dev-dependency='flet[all]' --python='>=3.9' --no-interaction
```

This command will create `pyproject.toml` in `my-app` directory.

Run the following command to install Flet and other dependencies:

```
poetry install --no-root
```

Make sure Flet CLI has been installed and can be run:

```
poetry run flet --version
```

Now you are ready to [create your first Flet app](create-flet-app). 

:::note
When [creating](create-flet-app) and [running](running-app) Flet app using Poetry, you'll need to use `poetry run` before each command!
:::

## uv

**uv** is "An extremely fast Python package and project manager, written in Rust."

[Install `uv`](https://github.com/astral-sh/uv?tab=readme-ov-file#installation) and run the following commands in your terminal:

```
mkdir my-app
cd my-app
uv init
```

This command will create `pyproject.toml` in `my-app` directory.

Run the following command to add Flet as dependency:

```
uv add 'flet[all]' --dev
```

Make sure Flet CLI has been installed and can be run:

```
uv run flet --version
```

Now you are ready to [create your first Flet app](create-flet-app). 

:::note
When [creating](create-flet-app) and [running](running-app) Flet app using uv, you'll need to use `uv run` before each command!
:::

