---
title: UrlTarget
sidebar_label: UrlTarget
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`UrlTarget` enum has the following values:

* `BLANK` - opens in a new tab/window
* `SELF` - opens in the current tab/window
* `PARENT` - opens in the parent frame. Behaves as `SELF` if there is no parent.
* `TOP` - opens in the full body of the window