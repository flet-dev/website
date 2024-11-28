---
title: SystemOverlayStyle
sidebar_label: SystemOverlayStyle 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Allows the customization of the mobile's system overlay (which consists of the system status and navigation bars) appearance.

`SystemOverlayStyle` has the following properties:

#### `system_navigation_bar_color`

The [color](/docs/reference/colors) of the system navigation bar.

#### `system_navigation_bar_divider_color`

The [color](/docs/reference/colors) of the divider between the system navigation bar and the app content.

#### `enforce_system_navigation_bar_contrast`

indicates whether the system should enforce contrast for the status bar when setting a transparent status bar.

#### `enforce_system_status_bar_contrast`

indicates whether the system should enforce contrast for the navigation bar when setting a transparent navigation bar.

#### `system_navigation_bar_icon_brightness`

The `Brightness` of the system navigation bar icons. Either `Brightness.DARK` or `Brightness.LIGHT`.

#### `status_bar_brightness`

The `Brightness` of the status bar. Either `Brightness.DARK` or `Brightness.LIGHT`.

#### `status_bar_icon_brightness`

The `Brightness` of the status bar icons. Either `Brightness.DARK` or `Brightness.LIGHT`.
