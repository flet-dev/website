---
title: Assets
sidebar_label: Assets
---

Flet apps can include both code and assets/resources. 
An asset is a file that is bundled and deployed with your app, and is accessible at runtime. 
Common types of assets include static data (e.g. JSON files), configuration files, icons, images, videos etc.

## Relative paths

Inorder to use relative paths to your asset files you will need to provide a path to the your assets directory when launching your app with the `ft.app()` function.
The parameter used for this is called the `assets_dir` 

and it defaultwhich defaults to `"assets"`) . 

This specifies the folder where local assets are stored. 
These paths are relativeto the the app's entry point file, e.g. `main.py`. 

For example:


## Absolute paths

In most cases, you can use absolute paths to the asset file you need.




The assets subsection of the flutter section specifies files that should be included with the app. 
Each asset is identified by an explicit path relative to the app's entry point file (e.g. `main.py`) where the asset file is located. 
The actual directory name used (assets in first example or directory in the above example) doesn't matter.

During a build, the assets are placed into a special archive called the asset bundle that apps read from at runtime.




To include local fonts, set the `assets_dir` parameter (defaults to `"assets"`) in the `ft.app()` function. This specifies the folder where local assets are stored. The path can either be relative to `main.py` or an absolute path. For example:

```
/assets
   /fonts
       /OpenSans-Regular.ttf
main.py
```
