---
title: ScrollMode
sidebar_label: ScrollMode
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`ScrollMode` enum has the following values:

* `None` (default) - the column is non-scrollable and its content could overflow.
* `AUTO` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `ADAPTIVE` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `ALWAYS` - scrolling is enabled and scroll bar is always shown.
* `HIDDEN` - scrolling is enabled, but scroll bar is always hidden.