---
title: SweepGradient
sidebar_label: SweepGradient
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`SweepGradient` class has the following properties:

* `colors`, `stops`, `tile_mode`, `rotation` - see [LinearGradient](/docs/reference/types/lineargradient) for description of these properties.
* `center` - The center of the gradient, as an offset into the (-1.0, -1.0) x (1.0, 1.0) square describing the gradient which will be mapped onto the paint box. For example, an alignment of (0.0, 0.0) will place the sweep gradient in the center of the box.
* `start_angle` - The angle in radians at which stop 0.0 of the gradient is placed. Defaults to 0.0.
* `end_angle` - The angle in radians at which stop 1.0 of the gradient is placed. Defaults to math.pi * 2.

More information:

* [Sweep gradient](https://api.flutter.dev/flutter/painting/SweepGradient-class.html) in Flutter documentation.

### Example of usage

<img src="/img/docs/controls/container/sweep-gradient.png" className="screenshot-20" />

```python
Container(
    gradient=SweepGradient(
        center=ft.alignment.center,
        start_angle=0.0,
        end_angle=math.pi * 2,
       colors=[ft.colors.YELLOW, ft.colors.BLUE],
    ),
    width=150,
    height=150,
    border_radius=5,
)
```