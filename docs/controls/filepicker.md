---
title: FilePicker
sidebar_label: FilePicker
slug: filepicker
---

A control that allows you to use the native file explorer to pick single or multiple files, with extensions filtering support and upload.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

[Live example](https://flet-controls-gallery.fly.dev/utility/filepicker)

### Pick multiple files

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft

def main(page: ft.Page):
    def pick_files_result(e: ft.FilePickerResultEvent):
        selected_files.value = (
            ", ".join(map(lambda f: f.name, e.files)) if e.files else "Cancelled!"
        )
        selected_files.update()

    pick_files_dialog = ft.FilePicker(on_result=pick_files_result)
    selected_files = ft.Text()

    page.overlay.append(pick_files_dialog)

    page.add(
        ft.Row(
            [
                ft.ElevatedButton(
                    "Pick files",
                    icon=ft.icons.UPLOAD_FILE,
                    on_click=lambda _: pick_files_dialog.pick_files(
                        allow_multiple=True
                    ),
                ),
                selected_files,
            ]
        )
    )

ft.app(target=main)
```
  </TabItem>
</Tabs>

### All dialog modes

<img src="/img/docs/controls/file-picker/file-picker-all-modes-demo.png" className="screenshot-70" />

[Source code](https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-all-modes.py)

### Upload multiple files

<img src="/img/docs/controls/file-picker/file-picker-multiple-uploads.png" className="screenshot-40" />

[Source code](https://github.com/flet-dev/examples/blob/main/python/controls/file-picker/file-picker-upload-progress.py)

## Properties

### `allowed_extensions`

Allow picking files with specified extensions only.

The value of this property is a list of strings, e.g. `["pdf", "svg", "jpg"]`.

### `allow_multiple`

Allow selecting multiple files.

### `dialog_title`

Can be optionally set on desktop platforms to set the modal window title. It will be ignored on other platforms.

### `file_name`

Works for "Save file" dialog only. Can be set to a non-empty string to provide a default file name.

### `file_type`

Allow to pick files of specific group.

Property value is `FilePickerFileType` enum with the following values:

* `ANY` (default) - any file
* `IMAGE`
* `VIDEO`
* `MEDIA` - `VIDEO` and `IMAGE`
* `AUDIO`
* `CUSTOM` - only files with extensions from `allowed_extensions` list

### `initial_directory`

Can be optionally set to an absolute path to specify where the dialog should open. Only supported on Linux, macOS, and Windows.

### `result`

Result is set when the dialog is closed.

The value of this property is an instance of `FilePickerResultEvent` class:

* `path` - result of "Save file" or "Get directory path" dialogs: selected file path or directory path respectively. `None` if dialog was cancelled.
* `files` result of "Pick files" dialog: a list of `FilePickerFile` class instances. `None` if dialog was cancelled.

`FilePickerFile` class properties:

* `name` - file name without a path.
* `path` - full path to a file. Works for desktop and mobile only. `None` on web.
* `size` - file size in bytes.

## Methods

### `get_directory_path()`

Selects a directory and returns its absolute path.

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title`
* `initial_directory`

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
ft.app(target=main, upload_dir="uploads")
```

## Events

### `on_result`

Fires when file picker dialog is closed.

Event object is an instance of `FilePickerResultEvent` class. See [`FilePicker.result`](#result) for class properties.

### `on_upload`

Fires when a file upload progress is updated.

Event object is an instance of `FilePickerUploadEvent` class:

* `file_name`
* `progress` - a value from `0.0` to `1.0`.
* `error`