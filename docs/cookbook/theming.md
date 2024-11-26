---
title: Theming
sidebar_label: Theming
---

It is possible to configure your application and/or the containing controls to follow a particular themes.

### App-wide themes

The `Page` control (uppermost control in the tree) has two useful properties for this: `theme`
and `dark_theme` properties to configure the appearance of the entire app in light and
dark theme modes respectively.

Both of type [`Theme`](/docs/reference/types/theme), they represent the default/fallback themes to be used app-wide, 
except explicitly modified/overriden in the tree. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.theme = ft.Theme(color_scheme_seed="green")
page.update()
```

</TabItem>
</Tabs>
