#!/usr/bin/env zsh
# coding=utf-8
# Created by alan on 2023-07-16 02:30:13
# $pwd=**/website

yarn
yarn build
git switch -c gh-pages
git switch gh-pages
# 默认的build目录是添加到`.gitignore`,第一次提交使用
# git commit -m "delete branch main files"
find . -type d ! -path "./.git*" ! -path "./build*" -maxdepth 1 | grep ./ | awk '{print $1}' | xargs rm -rf
find . -type f ! -path "./.git*" ! -path "./build*" -maxdepth 1 | xargs rm -rf
mv build/* . && rm -d build
# git commit -m "docs: add gh-pages"
git commit -m "update: gh-pages"
git push origin gh-pages
