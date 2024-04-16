---
title: InputFilter
sidebar_label: InputFilter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Input filter prevents the insertion of characters matching (or not matching) a particular pattern(`regex_string`), by replacing the characters with the given `replacement_string`.
When this parameter changes, the new filter will not be applied until the next time the user inserts or deletes text. 
Note that, similar to the `on_change` callback, the input filters are not applied when the text is changed programmatically.

`InputFilter` class takes 3 parameters: 
- `regex_string`: a regular expression pattern for the filter
- `allow`: a boolean value indicating whether to allow or deny/block the matched patterns - default is `True`
- `replacement_string`: string used to replace banned/denied patterns - default is an empty string.

The following helper classes are equally available:
- `NumbersOnlyInputFilter()` - only allow numbers
- `TextOnlyInputFilter()` - only allow text characters

### Examples of usage:

```python
ft.CupertinoTextField(
    placeholder_text="Only numbers are allowed :)",
    input_filter=ft.InputFilter(allow=True, regex_string=r"[0-9]", replacement_string=""),
)
```

```python
ft.TextField(
    label="Only numbers are allowed :)",
    input_filter=ft.InputFilter(allow=True, regex_string=r"[0-9]", replacement_string=""),
    # input_filter=ft.NumbersOnlyInputFilter()
)
```