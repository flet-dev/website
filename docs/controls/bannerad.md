---
title: BannerAd
sidebar_label: BannerAd
---

Rectangular ads that appear at the top or bottom of the device screen. 
Banner ads stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time.

See [this](/docs/controls/ads) for more information.

:::note
For enhanced app performance, it is recommended dispose (remove from the controls tree) any `BannerAd` control after it is no longer needed.

On iOS, make sure you place this ad in a control with a fixed width and height, otherwise your ad may not be displayed. 
See [this](https://developers.google.com/admob/flutter/banner/fixed-size) for more information on standard banner sizes.
:::

## Properties

### `unit_id`

The ad unit ID to be used for the ad.

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

### `on_will_dismiss`

Fires before dismissing a full screen view. iOS only.