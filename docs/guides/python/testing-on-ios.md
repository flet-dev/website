---
title: Testing Flet app on iOS
sidebar_label: Testing on iOS
---

Start building awesome mobile apps in Python using just your computer and mobile phone!

Install [Flet](#) app to your iOS device. You will be using this app to see how your Flet project is working on iPhone or iPad.

To get started on your computer you need Python 3.7 or above installed.

:::cautionImportant
Your iOS device and computer must be connected to the same Wi-Fi or local network.
:::

It's recommended to start with creating a new virtual environment:

```
python3 -m venv .venv
source .venv/bin/activate
```

Next, install the latest `flet` package:

```
pip install flet==0.8.0.dev1596
```

Ensure that Flet has successfully installed and Flet CLI is in `PATH`:

```
flet --version
```

Create a new Flet project:

```
flet create my-app
cd my-app
```

Run the following command to start Flet development server hosting your app:

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

You can try mode complex Flet example from [Introduction](/docs/#flet-app-example).

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