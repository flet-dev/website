---
title: Displaying data
sidebar_label: Displaying data
---

## Text

`Text` control is used to output textual data. Its main properties are `value` and `size`, but it also has a number of formatting properties to control its appearence. For example:

```python
t = ft.Text(
    value="This is a Text control sample",
    size=30,
    color="white",
    bgcolor = "pink",
    weight="bold",
    italic=True,
)
page.add(t)
```
<img src="/img/docs/getting-started/displaying-data-text.png" className="screenshot-50" />

### Text styles

[TBD]

## Icon

* Icons list
* Link to an app

## Image

Note about CORS
Side-loading assets