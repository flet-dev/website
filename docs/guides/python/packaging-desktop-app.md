---
title: Packaging desktop app
sidebar_label: Packaging desktop app
---

Flet Python app and all its dependencies can be packaged into an executable and user can run it on their computer without installing a Python interpreter or any modules.

[PyInstaller](https://pyinstaller.org/en/stable/index.html) is used to package Flet Python app and all its dependencies into a single package for Windows, macOS and Linux. To create Windows package, PyInstaller must be run on Windows; to build Linux app, it must be run on Linux; and to build macOS app - on macOS.

Start from installing PyInstaller:

```
pip install pyinstaller
```

Navigate to the directory where your `.py` file is located and build your app with the following command:

```
pyinstaller your_program.py
```

Your bundled Flet app should now be available in `dist/your_program` folder. Try running the program to see if it works.

On macOS/Linux:

```
./dist/your_program/your_program
```

on Windows:

```
dist\your_program\your_program.exe
```

Now you can just zip the contents of `dist/your_program` folder and distribute to your users! They don't need Python or Flet installed to run your packaged program - what a great alternative to Electron!

You'll notice though when you run a packaged program from macOS Finder or Windows Explorer a new console window is opened and then a window with app UI on top of it.

You can hide that console window by rebuilding the package with `--noconsole` switch:

```
pyinstaller your_program.py --noconsole --noconfirm
```

## Bundling to one file

Contents of `dist/your_program` directory is an app executable plus supporting resources: Python runtime, modules, libraries.

You can package all these in a single executable by using `--onefile` switch:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile
```

You'll get a larger executable in `dist` folder. That executable is a self-running archive with your program and runtime resources which gets unpacked into temp directory when run - that's why it takes longer to start "onefile" package.

:::note
For macOS you can distribute either `dist/your_program` or `dist/your_program.app` which is an application bundle.
:::

## Customizing package icon

Default bundle app icon is diskette which might be confusing for younger developers missed those ancient times when [floppy disks](https://en.wikipedia.org/wiki/Floppy_disk) were used to store computer data.

You can replace the icon with your own by adding `--icon` argument:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile --icon <your-image.png>
```

PyInstaller will convert provided PNG to a platform specific format (`.ico` for Windows and `.icns` for macOS), but you need to install [Pillow](https://pillow.readthedocs.io/en/stable/) module for that:

```
pip install pillow
```

## Packaging assets

Your Flet app can include [assets](/docs/controls/image#src). Provided app assets are in `assets` folder next to `your_program.py` they can be added to an application package with `--add-data` argument, on macOS/Linux:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile --add-data "assets:assets"
```

On Windows `assets;assets` must be delimited with `;`:

```
pyinstaller your_program.py --noconsole --noconfirm --onefile --add-data "assets;assets"
```

:::note
You can find here [all PyInstaller command-line options](https://pyinstaller.org/en/stable/usage.html)
:::

## Using CI for multi-platform packaging

To create an app package with PyInstaller for specific OS it must be run on that OS.

If you don't have an access to Mac or PC you can bundle your app for all three platforms with [AppVeyor](https://www.appveyor.com) - Continuous Integration service for Windows, Linux and macOS. In short, Continuous Integration (CI) is an automated process of building, testing and deploying (Continuous Delivery - CD) application on every push to a repository.

AppVeyor is free for open source projects hosted on GitHub, GitLab and Bitbucket. To use AppVeyor, push your app to a repository within one of those source-control providers.

To get started with AppVeyor [sign up for a free account](https://ci.appveyor.com/signup).

Click "New project" button, authorize AppVeyor to access your GitHub, GitLab or Bitbucket account, choose a repository with your program and create a new project.

Now, to configure packaging of your app for Windows, Linux and macOS, add file with [the following contents](https://github.com/flet-dev/python-ci-example/blob/main/appveyor.yml) into the root of your repository `appveyor.yml`. `appveyor.yml` is a build configuration file, or CI workflow, describing build, test, packaging and deploy commands that must be run on every commit.

:::note
You can just fork [flet-dev/python-ci-example](https://github.com/flet-dev/python-ci-example) repository and customize it to your needs.
:::

When you push any changes to GitHub repository, AppVeyor will automatically start a new build:

<img src="/img/docs/getting-started/appveyor-ci-flet-python-project.png" className="screenshot-70" />

What that [CI workflow](https://ci.appveyor.com/project/flet-dev/python-ci-example) does on every push to the repository:

* Clones the repository to a clean virtual machine.
* Installs app dependencies using `pip`.
* Runs `pyinstaller` to package Python app into "onefile" bundle for **Windows**, **macOS** and **Ubuntu**.
* Zip/Tar packages and uploads them to ["Artifacts"](https://ci.appveyor.com/project/flet-dev/python-ci-example/build/job/g2j2lhstv04eyxcm/artifacts).
* Uploads packages to [**GitHub releases**](https://github.com/flet-dev/python-ci-example/releases) when a new tag is pushed. Just push a new tag to make a release!

:::noteGITHUB_TOKEN
`GITHUB_TOKEN` in `appveyor.yml` is a GitHub Personal Access Token (PAT) used by AppVeyor to publish created packages to repository "Releases". You need to generate your own token and replace it in `appveyor.yml`. Login to your GitHub account and navigate to [Personal access token](https://github.com/settings/tokens) page. Click "Generate new token" and select "public_repo" or "repo" scope for public or private repository respectively. Copy generated token to a clipboard and return to AppVeyor Portal. Navigate to [Encrypt configuration data](https://ci.appveyor.com/tools/encrypt) page and paste token to "Value to encrypt" field, click "Encrypt" button. Put encrypted value under `GITHUB_TOKEN` in your `appveyor.yml`.
:::

Configure AppVeyor for your Python project, push a new tag to a repository and "automagically" get desktop bundle for all three platforms in GitHub releases! 🎉

<img src="/img/docs/getting-started/appveyor-ci-flet-github-releases.png" className="screenshot-70" />

In addition to [GitHub Releases](https://www.appveyor.com/docs/deployment/github/), you can also configure releasing of artifacts to [Amazon S3 bucket](https://www.appveyor.com/docs/deployment/amazon-s3/) or [Azure Blob storage](https://www.appveyor.com/docs/deployment/azure-blob/).