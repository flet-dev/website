---
title: build
sidebar_label: build
---

This command is used to package a Flet application for distribution. You can find it's guide [here](/docs/guides/python/packaging-app-for-distribution).

```
usage: flet build [-h] [-v] [-o OUTPUT_DIR] [--project PROJECT_NAME] [--description DESCRIPTION] [--product PRODUCT_NAME] [--org ORG_NAME] [--company COMPANY_NAME] [--copyright COPYRIGHT]
                  [--splash-color SPLASH_COLOR] [--splash-dark-color SPLASH_DARK_COLOR] [--no-web-splash] [--no-ios-splash] [--no-android-splash] [--team TEAM_ID] [--base-url BASE_URL]
                  [--web-renderer {canvaskit,html}] [--use-color-emoji] [--route-url-strategy {path,hash}] [--flutter-build-args [FLUTTER_BUILD_ARGS ...]] [--include-packages FLUTTER_PACKAGES [FLUTTER_PACKAGES ...]]
                  [--build-number BUILD_NUMBER] [--build-version BUILD_VERSION] [--module-name MODULE_NAME] [--template TEMPLATE] [--template-dir TEMPLATE_DIR] [--template-ref TEMPLATE_REF]
                  {macos,linux,windows,web,apk,aab,ipa} [python_app_path]

Build an executable app or install bundle.

positional arguments:
  {macos,linux,windows,web,apk,aab,ipa}
                        the type of a package or target platform to build
  python_app_path       path to a directory with a Python program

options:
  -h, --help            show this help message and exit
  -v, --verbose         -v for detailed output and -vv for more detailed
  -o OUTPUT_DIR, --output OUTPUT_DIR
                        where to put resulting executable or bundle (default is <python_app_directory>/build/<target_platform>)
  --project PROJECT_NAME
                        project name for executable or bundle
  --description DESCRIPTION
                        the description to use for executable or bundle
  --product PRODUCT_NAME
                        project display name that is shown in window titles and about app dialogs
  --org ORG_NAME        org name in reverse domain name notation, e.g. "com.mycompany" - combined with project name and used as an iOS and Android bundle ID
  --company COMPANY_NAME
                        company name to display in about app dialogs
  --copyright COPYRIGHT
                        copyright text to display in about app dialogs
  --splash-color SPLASH_COLOR
                        background color of app splash screen on iOS, Android and web
  --splash-dark-color SPLASH_DARK_COLOR
                        background color in dark mode of app splash screen on iOS, Android and web
  --no-web-splash       disable web app splash screen
  --no-ios-splash       disable iOS app splash screen
  --no-android-splash   disable Android app splash screen
  --team TEAM_ID        Team ID to sign iOS bundle (ipa only)
  --base-url BASE_URL   base URL for the app (web only)
  --web-renderer {canvaskit,html}
                        renderer to use (web only)
  --use-color-emoji     enables color emojis with CanvasKit renderer (web only)
  --route-url-strategy {path,hash}
                        URL routing strategy (web only)
  --flutter-build-args [FLUTTER_BUILD_ARGS ...]
                        additional arguments for flutter build command
  --include-packages FLUTTER_PACKAGES [FLUTTER_PACKAGES ...]
                        include extra Flutter Flet packages, such as flet_video, flet_audio, etc.
  --build-number BUILD_NUMBER
                        build number - an identifier used as an internal version number
  --build-version BUILD_VERSION
                        build version - a "x.y.z" string used as the version number shown to users
  --module-name MODULE_NAME
                        python module name with an app entry point
  --template TEMPLATE   a directory containing Flutter bootstrap template, or a URL to a git repository template
  --template-dir TEMPLATE_DIR
                        relative path to a Flutter bootstrap template in a repository
  --template-ref TEMPLATE_REF
                        the branch, tag or commit ID to checkout after cloning the repository with Flutter bootstrap template
```
