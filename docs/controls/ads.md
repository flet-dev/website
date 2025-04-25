---
title: Ads
sidebar_label: Ads
---

Displays ads in your app. Only available for mobile (Android and iOS) platforms.

:::info Packaging
To build your Flet app that uses ads control add `flet-ads` to `dependencies` key of the `[project]` section of your `pyproject.toml` file, for
example:

```toml
[project]
...
dependencies = [
  "flet==0.27.6",
  "flet-ads==0.1.0",
]
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples


```python reference
https://github.com/flet-dev/examples/blob/main/python/controls/information-displays/ads/ads-basic-example.py
```

<img src="/img/docs/controls/ads/ads.gif" className="screenshot-20" />

## Types
The following types are available:

- [`InterstitialAd`](/docs/controls/interstitialad)
- [`BannerAd`](/docs/controls/bannerad)

## Test Values
AdMob [provides](https://developers.google.com/admob/flutter/banner#always_test_with_test_ads) app and ad unit IDs for testing purposes. 

- AdMob app ID: `"ca-app-pub-3940256099942544~3347511713"`
- `BannerAd.unit_id` on Android: `"ca-app-pub-3940256099942544/9214589741"`
- `BannerAd.unit_id` on iOS: `"ca-app-pub-3940256099942544/2435281174"`
- `InterstitialAd.unit_id` on Android: `"ca-app-pub-3940256099942544/1033173712"`
- `InterstitialAd.unit_id` on iOS: `"ca-app-pub-3940256099942544/4411468910"`

Remember to replace these values with your own when you're ready to package your app.

## Packaging
The following are to be done when packaging an app that makes use of one of the above ad controls.

### Include Ads package
Add `flet-ads` to `dependencies` key of the `[project]` section of your `pyproject.toml` configuration file, for example:

```toml
[project]
...
dependencies = [
  ...
  "flet-ads==0.1.0",
  ...
]
```

### Specify AdMob app ID
Specify your [AdMob app ID](https://support.google.com/admob/answer/7356431), without which your application might crash on launch.

You can specify the app ID in two ways:
- In your `pyproject.toml` file:
```toml
# for Android
[tool.flet.android.meta_data]
"com.google.android.gms.ads.APPLICATION_ID" = "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"

# for iOS
[tool.flet.ios.info]
GADApplicationIdentifier = "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"
```

- In your build command from the terminal:
```bash
# for Android
flet build apk ... --android-meta-data com.google.android.gms.ads.APPLICATION_ID=ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy

# for iOS
flet build ipa ... --info-plist GADApplicationIdentifier=ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy
```