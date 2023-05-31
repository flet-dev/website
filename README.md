# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## multi languages translation 

### docusaurus guide 

https://docusaurus.io/docs/i18n/introduction

###  Help us translate the Docusaurus based Flet website 

https://github.com/facebook/docusaurus/issues/3526

### learn from apisix website

https://github.com/apache/apisix-website/tree/master


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
