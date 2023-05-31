This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## multi languages translation

### docusaurus guide

https://docusaurus.io/docs/i18n/introduction

### Help us translate the Docusaurus based Flet website

https://github.com/facebook/docusaurus/issues/3526

### learn from apisix website

https://github.com/apache/apisix-website/tree/master

### steps

1. add the following to docusaurus.config.js

```
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

```

2. add the following to docusaurus.config.js

```
        {
          type: 'localeDropdown',
          position: 'right',
        },
```

3. add i18n/zh folder,create sub-folder and related files

```
-docusaurus-plugin-content-blog
-docusaurus-plugin-content-docs
--current.json
--current
-docusaurus-theme-classic
--footer.json
--navbar.json
-code.json
```
