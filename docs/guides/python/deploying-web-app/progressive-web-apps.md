---
title: Progressive web apps (PWA)
sidebar_label: Progressive web apps (PWA)
---

Progressive Web Apps, or PWAs, offer a way to turn app-like websites into website-like apps.

Check [PWAs Turn Websites Into Apps: Here's How](https://www.pcmag.com/how-to/how-to-use-progressive-web-apps) for the PWA introduction.

Browsers that support PWA ([installation instructions](#pwa-installation-instructions)):

* **Chrome** on all platforms
* **Edge** on all platforms
* **Firefox** on Android
* **Safari** on iOS and iPadOS

## Customizing PWA

:::info
The information in this section is based on the following sources (check them out for more details):

* [General information about PWAs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [PWA manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
:::

### Manifest

You can change PWA's name, description, colors and other information in `manifest.json` that must be put in the root of [assets directory](/docs/guides/python/deploying-web-app/customizing-web-app).

Here are the links to the most common manifest items that you'd like to customize:

* [`name`](https://developer.mozilla.org/en-US/docs/Web/Manifest/name) - the name of the web application as it is usually displayed to the user.
* [`short_name`](https://developer.mozilla.org/en-US/docs/Web/Manifest/short_name) - the name of the web application displayed to the user if there is not enough space to display `name`.
* [`description`](https://developer.mozilla.org/en-US/docs/Web/Manifest/description) - explains what the application does.
* [`theme_color`](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color) - defines the default theme color for the application.
* [`background_color`](https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color) - defines a placeholder background color for the application page to display before its stylesheet is loaded.

### Icons

Windows - round

iOS - touch in HTML: icons/apple-touch-icon-192.png

## PWA installation instructions

Below is the list of browsers that allow installing Flet web app as PWA on desktop or home screen and the instructions on how to do that. You are allowed to use these instructions along with images to educate the users of your application.

### Safari

To install PWA to a home screen on iOS and iPadOS:

* Tap <img src="/img/docs/getting-started/ios-share-icon.svg" className="icon-button" /> at the bottom of the screen.
* Tap **Add to home screen <img src="/img/docs/getting-started/add-box-icon.svg" className="icon-button" />** to open install app dialog.

### Chrome

Chrome supports PWA on all platforms where it's available.

#### Desktop

Chrome for desktop displays a button in the address bar to open "Install app" dialog:

<img src="/img/docs/getting-started/chrome-pwa-install.png" className="screenshot-60" />

#### Mobile

To install app on mobile version of Chrome:

* Tap <img src="/img/docs/getting-started/more-vert-icon.svg" className="icon-button" /> menu button to open Chrome main menu.
* Tap **Install app** to open app installation dialog.

### Edge

Edge supports PWA on all platforms where it's available. Similar to Chrome there is a button in the address bar to open "Install app" dialog:

<img src="/img/docs/getting-started/edge-pwa-install.png" className="screenshot-60" />


### Firefox on Android

* Tap <img src="/img/docs/getting-started/more-vert-icon.svg" className="icon-button" /> menu button to open Firefox main menu.
* Tap **Install** to open app installation dialog.