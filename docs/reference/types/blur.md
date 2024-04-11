---
title: Blur
sidebar_label: Blur
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`Blur` class has the following properties:

* `sigma_x` - horizontal sigma.
* `sigma_y` - vertical sigma.
* `tile_mode` - `BlurTileMode` enum value, defaults to `ft.BlurTileMode.CLAMP`.

`BlurTileMode` enum has the following values:

* `CLAMP`
* `DECAL`
* `MIRROR`
* `REPEATED`