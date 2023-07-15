#!/usr/bin/env zsh
# coding=utf-8
# Created by alan on 2023-07-16 02:30:13

git switch -c gh-pages
git switch gh-pages
git add build/*
git commit -m "docs: add gh-pages"
git push origin gh-pages