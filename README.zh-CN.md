# Website

该网站是使用现代静态网站生成器 [Docusaurus 2](https://v2.docusaurus.io/) 构建的。

### 自动安装依赖

```
$ yarn
```

### 本地开发

```
$ yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，无需重新启动服务器。

### 构建

```
$ yarn build
```

此命令将静态内容生成到`build`目录中，并且可以使用任何静态内容托管服务提供服务。

### 部署

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

如果您使用 GitHub Pages 进行托管，此命令是构建网站并将其推送到`gh-pages`分支的便捷方法。
