---
title: AutofillGroupDisposeAction
sidebar_label: AutofillGroupDisposeAction
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Autofill context clean up actions.

`AutofillGroupDisposeAction` enum has the following values:

### `CANCEL`

Destroys the current autofill context without saving the user input.

### `COMMIT`

Destroys the current autofill context after informing the platform to save the user input from it.
