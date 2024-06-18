---
title: NavigationBarLabelBehavior
sidebar_label: NavigationBarLabelBehavior
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`NavigationBarLabelBehavior` enum has the following values:

### `ALWAYS_HIDE`

Never shows any of the labels under the navigation bar destinations, regardless of selected vs unselected.

### `ALWAYS_SHOW`

Always shows all of the labels under each navigation bar destination, selected and unselected.

### `ONLY_SHOW_SELECTED`

Only shows the labels of the selected navigation bar destination. When a destination is unselected, the label will be
faded out, and the icon will be centered. When a destination is selected, the label will fade in and the label and icon
will slide up so that they are both centered.