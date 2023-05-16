---
title: Publishing a static website with Pyodide
sidebar_label: Publishing static website
---

Flet app can be published as a standalone static website (SPA) and run entirely in the browser with [Pyodide](https://pyodide.org/en/stable/index.html).

Pyodide is a port of CPython to WebAssembly (WASM) which is an emerging technology with [some limitations](https://pyodide.org/en/stable/usage/wasm-constraints.html). Pyodide comes with a big list of [built-in packages](https://pyodide.org/en/stable/usage/packages-in-pyodide.html). However, to use a Python package from PyPI it must be a pure Python package or provide a wheel with binaries [built for Emscripten](https://pyodide.org/en/stable/development/new-packages.html).

## Flet static vs server-side

Flet static pros:

* Zero latency between user-generated events (clicks, text field changes, drags) and page updates. There is no Fletd server, no WebSockets - Python program communicates with Flutter web client directly via JavaScript.
* Cheap hosting - Flet static app does not require any code to run on the server and thus can be hosted anywhere: GitHub Pages, Cloudflare Pages, Replit, Vercel, a shared hosting or your own VPS.
* Higher scalability - Flet static app runs entirely in the browser and if it doesn't use any server-side API it could be scaled to any number of users with just CDN.

Flet static cons:

* Slower loading time - it requires additional time to download Python engine (Pyodide), built-in and `flet-pyodide` packages, and a user program. Besides, initialization of Pyodide engine itself takes around 2-4 seconds which the team is [looking to improve](https://pyodide.org/en/stable/project/roadmap.html#roadmap) in the future.
* Limited Python compatibility - not every program that works with native Python [can be run with Pyodide](https://pyodide.org/en/stable/usage/wasm-constraints.html).
* Lower performance - Pyodide is currently 3x-5x slower than native Python, so Flet apps with heavy processing would be better deployed as a server-side.
* Users can access program code as it's downloaded by a browser in the form of `tar.gz` archive.

## Async or not async?

Both [asyncio](/docs/guides/python/async-apps) and "regular" sync Flet apps can be published as a static website. In terms of concurrency, the website will have only one thread with a single user only - you. If your app has CPU-intensive logic it may affect UI responsivness no matter the app is async or not.

However, if your app contains an I/O logic (like [fetch](https://pyodide.org/en/stable/usage/api/python-api/http.html) wrapper for Pyodide) which is async in browser by definition then your app must be async.

## Publish app as a static website

Run the following command to publish Flet app to a standalone website:

```
flet publish <your-flet-app.py>
```

A static website is published into `./dist` directory.

Command optional arguments:

* `--pre` - allow micropip to install pre-release Python packages.
* `-a ASSETS_DIR`, `--assets ASSETS_DIR` - path to an assets directory.
* `--app-title APP_TITLE` - application title.
* `--app-description APP_DESCRIPTION` - application description.
* `--base-url BASE_URL` - base URL for the app.
* `--web-renderer {canvaskit,html}` - web renderer to use.
* `--route-url-strategy {path,hash}` - URL routing strategy.

## Testing website

You can test a published Flet app using Python's built-in [`http.server` module](https://docs.python.org/3/library/http.server.html):

```
python -m http.server --directory dist
```

Open `http://localhost:8000` in your browser to check the published app.

## Loading packages

You can load custom packages from PyPI during app start by listing them in `requirements.txt`. `requirements.txt` must be created in the same directory with `<your-flet-app.py>`.

Each line of `requirements.txt` contains a package name followed by an optional version specifier.

:::info

To install custom packages Pyodide uses [micropip](https://pypi.org/project/micropip/) - a lightweight version of `pip` that works in a browser.

You can use [Micropip API](https://micropip.pyodide.org/en/stable/project/api.html) directly in your Flet app:

```python
import sys

if sys.platform == "emscripten": # check if run in Pyodide environment
    import micropip
    await micropip.install("regex")
```
:::

### Pre-release Python packages

You can allow loading pre-release versions of PyPI packages, by adding `--pre` option to `flet publish` command:

```
flet publish <your-flet-app.py> --pre
```

## Assets

If your app requires assets (images, fonts, etc.) you can copy them into website directory by using `--assets <directory>` option with `flet publish` command:

```
flet publish <your-flet-app.py> --assets assets
```

:::caution
If you have `assets` directory in your app's directory and don't specify `--assets` option then the contents of `assets` will be packaged along with a Python application rather than copied to `dist`.
:::

## URL strategy

Flet apps support two ways of configuring URL-based routing:

* **Path** (default) - paths are read and written without a hash. For example, `fletapp.dev/path/to/view`.
* **Hash** - paths are read and written to the [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax). For example, `fletapp.dev/#/path/to/view`.

If a hosting provider supports [Single-page application (SPA) rendering](https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-application-spa-rendering) you can leave default "path" URL strategy as it gives pretty URLs.

However, if a hosting provider (like GitHub Pages) doesn't support SPA mode then you need to publish your app with "hash" URL strategy.

To specify "hash" URL strategy during static app publishing use `--route-url-strategy` option:

```
flet publish <your-flet-app.py> --route-url-strategy hash
```

## Web renderer

You can change default "canvaskit" web renderer ([more about renderers here](/docs/controls/text#using-system-fonts)) to "html" with `--web-renderer` option:

```
flet publish <your-flet-app.py> --web-renderer html
```

## Color emojis

To reduce app size default "CanvasKit" renderer does not use colorful emojis, because the font file with color emojies weights around 8 MB.

You can, however, opt-in for color emojis with `--use-color-emoji` flag:

```
flet publish <your-flet-app.py> --use-color-emoji
```

Alternatively, switch to `html` renderer which uses browser fonts.

## Hosting website in a sub-directory

Multiple Flet apps can be hosted on a single domain - each app in it's own sub-directory.

To make a published Flet app work in a sub-directory you have to publish it with `--base-url` option:

```
flet publish <your-flet-app.py> --base-url <sub-directory>
```

For example, if app's URL is `https://mywebsite.com/myapp` then it must be published with `--base-url myapp`.

## Deploying website

Deploy a static website to any free hosting such as GitHub Pages, Cloudflare Pages or Vercel!

### Cloudflare Pages

Before we get to the deployment, you will need an account. Get one from [here](https://dash.cloudflare.com/sign-up/pages), or simply login if you already have one. After signing up, you will have to verify your email address by clicking the link you will receive in your email. Check the spams too, if you don’t get it in your inbox.

In your account, from the side menu, select "Pages" as shown below:

<img src="/img/docs/cloudflare-pages-deploy/pages-from-sidebar.png"/>

And from there, select the “Create a project” button:

<img src="/img/docs/cloudflare-pages-deploy/project-creation.png"/>

Cloudflare proposes three ways to create a project. Only the first two will be exposed here:
- Connect to a git provider
- Direct upload

<img src="/img/docs/cloudflare-pages-deploy/deployment-methods.png"/>

#### Connecting to a Git provider

For this, you will need to have a [GitHub](https://github.com/) or [GitLab](https://gitlab.com/) account. In this account should be the repository you plan to use. An example could be found in this [repo](https://github.com/ndonkoHenri/Flutter-Counter-Clone).

Click on the “Connect to Git” blue button:

<img src="/img/docs/cloudflare-pages-deploy/git-account-selection.png"/>

From there, select the tab with the service containing your repository. Then, connect your account. Select one of the suggested options, then click on “Install & Authorize”.

<img src="/img/docs/cloudflare-pages-deploy/git-auth.png"/>

Choose the repository to be used, and press on the “Begin setup” button.

<img src="/img/docs/cloudflare-pages-deploy/repo-selection.png"/>

Before moving on, add a `runtime.txt` file in your repo. It should contain the python version to be used. In the file enter 3.7 which is the latest python version Cloudflare uses at time of writing.

[Here](https://github.com/ndonkoHenri/Flutter-Counter-Clone/blob/master/runtime.txt) is an example from the repo above. 

Having this done, we can now move to the next step which will be to configure some build and deployment settings for your site.

Set the name of your project, and the production branch to be used. The production branch is simply the branch of your repo to which any push of a commit will automatically trigger a deployment to your production environment. Pushes to your other branches will trigger deployment instead to your preview environment.

After setting these two, jump down to the “Build settings” section where we will be setting up the build instructions.

Skip the “Framework preset” (allow None) because Flet is neither in the list nor a JavaScript framework :)

The “Build command” depends on your application's structure. Follow the guide in the sections above to come up with your custom build command.

<img src="/img/docs/cloudflare-pages-deploy/flet-publish-help.png"/>

When the build command is ran by flet, a folder named ‘dist’ is created which will contain all the web files required by Cloudflare pages. Set it as your output directory. Note that this file will not be added to your repository, because Cloudflare only has read access to your code.

<img src="/img/docs/cloudflare-pages-deploy/build-settings.png"/>

You could optionally specify advanced parameters: the root directory (the directory in which Cloudflare runs the build command), and Environment variables (variables to be used during build time).
Now, click on the “Save and Deploy” button and let Cloudflare do the remaining job for you.

<img src="/img/docs/cloudflare-pages-deploy/successful-deployment.png"/>

Click on the URL that will be shown to move to your deployed site. 

<img src="/img/docs/cloudflare-pages-deploy/app-link-1.png"/>

If when opening the site you see a Cloudflare error, it means they haven’t completely finished the setup. So, simply wait for a minute then refresh the page, and you will see your application running.
Test the above deployed site [here](https://flet-counter.pages.dev/).


#### Direct Upload

Click on “Upload assets”. In step one, give your project a name. Remember that the name you will give will be used to determine the link to which your project will be deployed to.

The second step requires you to upload your project’s assets, either as folder or a zip file (with all the assets inside). If you already have one of them, then use the drag-and-drop or select them using the folder picker.

If you don’t yet have these assets but already have an app you've built, use the `flet publish` command in the directory containing your app files, and a `dist` folder will be created which you will then upload to Cloudflare pages as mentioned above. 

After the upload press on “Deploy site” button at the bottom.

<img src="/img/docs/cloudflare-pages-deploy/assets-upload.png"/>

You will then see a success message with a link to your deployed website. Test an example of a deployed site [here](https://todo-2.pages.dev/).

<img src="/img/docs/cloudflare-pages-deploy/app-link-2.png"/>

If when opening the site you see a Cloudflare error, it means they haven’t completely finished the setup. So, simply wait for a minute then refresh the page, and you will see your application running.
You can now click on the “Continue to project” button to monitor your deployments, or create new ones following the same steps above.

## Troubleshooting

When Flet app is running in a web browser all its `print()` statements are displayed in "Console" tab of Developer Tools in a browser. `print()` can be used as a simple debugging tool.

You can also use `logging` module and output messages to Console with different severity.

To enable detailed Flet logging add this to your program:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```
