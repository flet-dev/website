---
title: Testing Flet app on iOS
sidebar_label: Testing on iOS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Start building awesome mobile apps in Python using just your computer and mobile phone!

Install [Flet](https://apps.apple.com/app/flet/id1624979699) app to your iOS device. You will be using this app to see how your Flet project is working on iPhone or iPad.

<a href="https://apps.apple.com/app/flet/id1624979699" target="_blank"><img src="/img/docs/getting-started/testing-on-ios/qr-code.jpg" className="screenshot-30" /></a>

To get started on your computer you need Python 3.7 or greater installed.

:::cautionImportant
Your iOS device and computer must be connected to the same Wi-Fi or local network.
:::

It's recommended to start with the creation of a new virtual environment:

<Tabs groupId="language">
  <TabItem value="macOS" label="macOS" default>

```
python3 -m venv .venv
source .venv/bin/activate
```

  </TabItem>
  <TabItem value="Linux" label="Linux">

```
python3 -m venv .venv
source .venv/bin/activate
```

  </TabItem>
  <TabItem value="Windows" label="Windows">

```
python.exe -m venv .venv
.venv\Scripts\activate.bat
```

  </TabItem>
</Tabs>

Next, install the latest `flet` package:

```
pip install flet --upgrade
```

Ensure that Flet has successfully installed and Flet CLI is available in `PATH` by running:

```
flet --version
```

Create a new Flet project:

```
flet create my-app
cd my-app
```

Run the following command to start Flet development server with your app:

```
flet run --ios
```

A QR code with encoded project URL will be displayed in the terminal:

<img src="/img/docs/getting-started/testing-on-ios/app-qr-code.png" className="screenshot-30 screenshot-rounded" />

Open **Camera** app on your iOS device, point to a QR code and click **Open in Flet** link.

A dialog asking for permissions to access your local network will popup:

<img src="/img/docs/getting-started/testing-on-ios/flet-local-network.png" className="screenshot-30 screenshot-rounded" />

Click **Allow** and you should see your Flet app running.

Try updating `main.py` (for example, replace a greeting of `Text` control) - the app will be instantly refreshed on your iOS device.

You can try more complex Flet example from [Introduction](/docs/#flet-app-example).

To return to "Home" tab either:
- Long-press anywhere on the screen with 3 fingers or
- Shake your iOS device.

You can also "manually" add a new project by clicking **"+"** button and typing its URL.

:::infoQuick test
There is "Counter" Flet project hosted on the internet that you can add to Flet app to make sure everything works:

```
https://flet-counter-test-ios.fly.dev
```
:::

Check "Gallery" tab for some great examples of what kind of projects could be done with Flet.

Explore [Flet examples](https://github.com/flet-dev/examples/tree/main/python) for even more examples.