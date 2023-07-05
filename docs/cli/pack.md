---
title: pack
sidebar_label: pack
---

```
usage: flet pack [-h] [-v] [-i ICON] [-n NAME] [-D] [--distpath DISTPATH] [--add-data [ADD_DATA ...]] [--hidden-import [HIDDEN_IMPORT ...]] [--product-name PRODUCT_NAME]
                 [--file-description FILE_DESCRIPTION] [--product-version PRODUCT_VERSION] [--file-version FILE_VERSION] [--company-name COMPANY_NAME] [--copyright COPYRIGHT]
                 [--bundle-id BUNDLE_ID]
                 script

Package Flet app to a standalone bundle.

positional arguments:
  script                path to a Python script

options:
  -h, --help            show this help message and exit
  -v, --verbose         -v for detailed output and -vv for more detailed
  -i ICON, --icon ICON  path to an icon file (.ico, .png, .icns)
  -n NAME, --name NAME  name for the generated executable (Windows) or app bundle (macOS)
  -D, --onedir          create a one-folder bundle containing an executable (Windows)
  --distpath DISTPATH   where to put the bundled app (default: ./dist)
  --add-data [ADD_DATA ...]
                        additional non-binary files or folders to be added to the executable
  --hidden-import [HIDDEN_IMPORT ...]
                        add an import not visible in the code of the script(s)
  --product-name PRODUCT_NAME
                        executable product name (Windows) or bundle name (macOS)
  --file-description FILE_DESCRIPTION
                        executable file description (Windows)
  --product-version PRODUCT_VERSION
                        executable product version (Windows) or bundle version (macOS)
  --file-version FILE_VERSION
                        executable file version, n.n.n.n (Windows)
  --company-name COMPANY_NAME
                        executable company name (Windows)
  --copyright COPYRIGHT
                        executable (Windows) or bundle (macOS) copyright
  --bundle-id BUNDLE_ID
                        bundle identifier (macOS)
```