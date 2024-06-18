---
title: AutoCompleteSuggestion
sidebar_label: AutoCompleteSuggestion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`AutoCompleteSuggestion` has the following properties:

### `key`

A string representing a unique identifier for the suggestion. It will be used in the filtering process of
the `AutoComplete.suggestions`.

For example, if the `key` is `one 1`, the user can type `one` or `1` for this suggestion to be shown.

### `value`

A string to be displayed in the suggestions list.

Ex: if `value="One"`, it will be displayed when the user's input is contained the `key`.
