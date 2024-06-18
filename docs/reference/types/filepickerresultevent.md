---
title: FilePickerResultEvent
sidebar_label: FilePickerResultEvent
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`FilePickerResultEvent` class has the following properties:

### `path`

Result of [`FilePicker.save_file()`](/docs/controls/filepicker#save_file)
or [`get_directory_path()`](/docs/controls/filepicker#get_directory_path) dialogs. `None` if dialog was
cancelled/dismissed.

### `files`

Result of [`FilePicker.pick_files()`](/docs/controls/filepicker#pick_files) dialog: a list
of [`FilePickerFile`](/docs/reference/types/filepickerfile). `None` if dialog was cancelled/dismissed.

