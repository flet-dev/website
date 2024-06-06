---
title: FilePicker
sidebar_label: FilePicker
---

A control that allows you to use the native file explorer to pick single or multiple files, with extensions filtering support and upload.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
In Linux, the FilePicker control depends on [Zenity](https://help.gnome.org/users/zenity/stable/)  when running Flet as an app. This is not a requirement when running Flet in a browser.

To install Zenity on Ubuntu/Debian run the following commands:
```bash
sudo apt-get install zenity
```
:::

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

Value is of type [`FilePickerFileType`](/docs/reference/types/filepickerfiletype) and defaults
to `FilePickerFileType.ANY`.

### `initial_directory`

Can be optionally set to an absolute path to specify where the dialog should open. Only supported on Linux, macOS, and Windows.

### `result`

Result is set when the dialog is closed.

Value is of type [`FilePickerResultEvent`](/docs/reference/types/filepickerresultevent).

## Methods

### `get_directory_path()`

Selects a directory and returns its absolute path.

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title` - the title of the dialog window.
* `initial_directory` - the initial directory where the dialog should open.

### `pick_files()`

Retrieves the file(s) from the underlying platform.

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title` - the title of the dialog window.
* `initial_directory` - the initial directory where the dialog should open.
* `file_type` - the allowed [`FilePickerFileType`](/docs/reference/types/filepickerfiletype).
* `allowed_extensions` - the allowed file extensions. Has effect only if `file_type` is `FilePickerFileType.CUSTOM`.
* `allow_multiple` - allow selecting multiple files.

### `save_file()`

Opens a save file dialog which lets the user select a file path and a file name to save a file.

This function does not actually save a file. It only opens the dialog to let the user choose a location and file name. This function only returns the path to this (non-existing) file in `FilePicker.result.path` property.

This method is only available on desktop platforms (Linux, macOS & Windows).

You could either set the following file picker properties or provide their values in the method call:

* `dialog_title` - the title of the dialog window.
* `file_name` - the default file name.
* `initial_directory` - the initial directory where the dialog should open.
* `file_type` - the allowed [`FilePickerFileType`](/docs/reference/types/filepickerfiletype).
* `allowed_extensions` - the allowed file extensions. Has effect only if `file_type` is `FilePickerFileType.CUSTOM`.

:::info
To save a file from the web, you don't need to use the FilePicker object.

You can instead provides an API endpoint `/download/:filename` that returns the file content, and then
use [`page.launch_url`](/docs/controls/page#launch_urlurl) to open the url, which will trigger the browser's save file dialog.

Take [FastAPI](/docs/publish/web/dynamic-website#advanced-fastapi-scenarios) as an example, you can use the following code to implement the endpoint:

```python
from fastapi import FastAPI, Response
from fastapi.responses import FileResponse

app = flet_fastapi.app(main)

@app.get("/download/{filename}")
def download(filename: str):
    path = prepare_file(filename)
    return FileResponse(path)
```

and then use `page.launch_url("/download/myfile.txt")` to open the url, for instance, when a button is clicked.

```python
ft.ElevatedButton("Download myfile", on_click=lambda _: page.launch_url("/download/myfile.txt"))
```
:::

### `upload()`

Uploads selected files to specified upload URLs.

Before calling upload [`pick_files()`](#pick_files) must be called, so the internal file picker selection is not empty.

Method arguments:

* `files` - a list of [`FilePickerUploadFile`](/docs/reference/types/filepickeruploadfile).

Each list item specifies which file should be uploaded to the upload URL with `PUT` (default) or `POST` method.

* `name`
* `upload_url`
* `method` (`PUT` (default), `POST`)

`upload_url` is, generally, a pre-signed URL (
like [AWS S3 object upload URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html)).

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

Event object is an instance of [`FilePickerResultEvent`](/docs/reference/types/filepickerresultevent).
See [`FilePicker.result`](#result) for class properties.

### `on_upload`

Fires when a file upload progress is updated.

Event object is an instance of [`FilePickerUploadEvent`](/docs/reference/types/filepickeruploadevent).