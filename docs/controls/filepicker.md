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

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title`
* `initial_directory`
* `file_type`
* `allowed_extensions`
* `allow_multiple`

### `save_file()`

Opens a save file dialog which lets the user select a file path and a file name to save a file.

This function does not actually save a file. It only opens the dialog to let the user choose a location and file name. This function only returns the path to this (non-existing) file in `FilePicker.result.path` property.

This method is only available on desktop platforms (Linux, macOS & Windows).

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title`
* `file_name`
* `initial_directory`
* `file_type`
* `allowed_extensions`

### `get_directory_path()`

Selects a directory and returns its absolute path.

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title`
* `initial_directory`

### `upload()`

Uploads selected files to specified upload URLs.

Before calling upload [`pick_files()`](#pick_files) must be called, so the internal file picker selection is not empty.

Method arguments:

* `files` - a list of `FilePickerUploadFile` class instances.

Each list item specifies which file should be uploaded to the upload URL with `PUT` (default) or `POST` method.

* `name`
* `upload_url`
* `method` (`PUT` (default), `POST`)

`upload_url` is, generally, a presigned URL (like [AWS S3 object upload URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html)).

For built-in upload storage a signed upload URL can be generated with the following call:

```python
upload_url = page.get_upload_url("dir/filename.ext", 60)
```

First argument is a relative to upload storage path.
Second argument is a URL time-to-live in seconds.

To enable built-in upload storage provide `upload_dir` argument to `flet.app()` call:

```python
flet.app(target=main, upload_dir="uploads")
```

## Events

### `on_result`

TBD

### `on_upload`

`FilePickerUploadEvent` class:

* `file_name`
* `progress`
* `error`