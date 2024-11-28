---
title: InterstitialAd
sidebar_label: InterstitialAd
---

Full-screen ads that cover the interface of an app until closed by the user. 
They're best used at natural pauses in the flow of an app's execution, such as in between levels of a game or just after completing a task.

See [this](/docs/controls/ads) for more information.

## Properties

### `unit_id`

The ad unit ID to be used for the ad.

## Methods

### `show()`

Shows the interstitial ad. The interstitial ad must be added to the [`page.overlay`](/docs/controls/page#overlay) before calling this method.

:::note 
Interstitial ads require user input to be dismissed. They can't be dismissed programmatically.

Also, interstitial ads can only be shown once. Subsequent calls to show will trigger `on_error`. 
To show an `InterstitialAd` again, you need to create a new instance. ([example](/docs/controls/ads#examples))
:::

## Events

### `on_click`

Fires when the ad is clicked.

### `on_close`

Fires when the full screen view has been closed. 

You can resume anything paused while handling `on_open`.

### `on_error`

Fires when an error occurs on the ad.

### `on_impression`

Fires when an impression occurs on the ad.

### `on_load`

Fires when the ad is loaded.

### `on_open`

Fires when the ad is clicked. A full screen view/overlay (e.g. a browser window) is presented in response to the user clicking on an ad. 

You may want to pause animations and time sensitive interactions.
