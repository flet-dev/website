---
title: FilePicker
sidebar_label: FilePicker
slug: filepicker
---

A control that allows you to use the native file explorer to pick single or multiple files, with extensions filtering support and upload.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Pick files

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
# TODO
```
  </TabItem>
</Tabs>

## Properties

### `file_type`

Allow to pick files of specific group:

* `any` (default) - any file
* `image`
* `video`
* `media` - `video` and `image`
* `audio`
* `custom` - only files with extensions from `allowed_extensions` list

### `allowed_extensions`

Allow picking files with specified extensions only.

The value of this property is a list of strings, e.g. `["pdf", "svg", "jpg"]`.

### `allow_multiple`

Allow selecting multiple files.

### `dialog_title`

Can be optionally set on desktop platforms to set the modal window title. It will be ignored on other platforms.

### `initial_directory`

Can be optionally set to an absolute path to specify where the dialog should open. Only supported on Linux, macOS, and Windows.

### `file_name`

Works for "Save file" dialog only. Can be set to a non-empty string to provide a default file name.

### `result`

`FilePickerResultEvent` class:

* `path`
* `files: List[FilePickerFile]`

`FilePickerFile` class:

* `name: str`
* `path`
* `size`

## Methods

### `pick_files()`

Retrieves the file(s) from the underlying platform.

* `dialog_title`
* `initial_directory`
* `file_type`
* `allowed_extensions`
* `allow_multiple`

### `save_file()`

* `dialog_title`
* `file_name`
* `initial_directory`
* `file_type`
* `allowed_extensions`

### `get_directory_path()`

* `dialog_title`
* `initial_directory`

### `upload()`

`FilePickerUploadFile` class:

* `name`
* `upload_url`
* `method` (`PUT` (default), `POST`)

## Events

### `on_result`

TBD

### `on_upload`

`FilePickerUploadEvent` class:

* `file_name`
* `progress`
* `error`