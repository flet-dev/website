---
title: StackFit
sidebar_label: StackFit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`StackFit` enum has the following values:

### `EXPAND`

The constraints passed to the stack from its parent are tightened to the biggest size allowed. For example, if the stack
has loose constraints with a width in the range 10 to 100 and a height in the range 0 to 600, then the
non-positioned `controls` of the stack would all be sized as 100 pixels wide and 600 high.

### `LOOSE`

The constraints passed to the stack from its parent are loosened. For example, if the stack has constraints that force
it to 350x600, then this would allow the non-positioned `controls` of the stack to have any width from 0 to 350 and any
height from 0 to 600.

### `PASS_THROUGH`

The constraints passed to the stack from its parent are passed unmodified to the non-positioned `controls`. For example,
if an expanded Stack is a child of a Row, the horizontal constraints will be tight and the vertical constraints will be
loose.


