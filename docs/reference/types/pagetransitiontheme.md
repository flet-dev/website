---
title: PageTransitionTheme
sidebar_label: PageTransitionTheme
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`PageTransitionTheme` enum has the following values:

#### `CUPERTINO`

A page transition animation that matches native iOS page transitions.

#### `FADE_UPWARDS`

Fades the new page in while translating it upwards, starting from about 25% below the top of the screen.

#### `NONE`

Zero delay transition without any animation.

#### `OPEN_UPWARDS`

A page transition animation that matches the transition used on Android P.

#### `PREDICTIVE`

A page transition that animates along with the back gesture to reveal the destination route. 
It can be canceled by dragging back towards the edge of the screen.

Only supported on Android U and above for now. If used on other platforms, it will fallback to `ZOOM`.

#### `ZOOM`

A page transition animation that matches the transition used on Android Q.