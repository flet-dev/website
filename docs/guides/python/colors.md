---
title: Colors
sidebar_label: Colors
---

## Color value

There are 2 ways to define color property in Flet: hex value and named color from flet.colors module.

Hex value should be in format #AARRGGBB (0xAARRGGBB) or #RRGGBB (0xRRGGBB).

[Example]

[Live example]

Named colors are the 30 [Theme colors] and 156 Palette colors 

## How to define control colors

Most Flet controls have a default color (or colors) that can be overridden on different levels:

### Page level

A set of 30 Theme colors is used to configure color properties of most controls on the page level.

The colors are generated based on the `Theme.seed_color` property (the default value is 'blue').

Any of the 30 colors can be overriden, in which case they will have a fixed value that will not be dependent on seed_color.
[Example]



#### 

### 


### Control level

Flet will 









* Format for colors.
* Colors list
* Link to an app

`ft.colors.with_opacity` - works on a client