---
title: Hello World ，Gatsby
date: 2019-04-30 10:34:10
---

这是一个使用 [Gatsby](https://www.gatsbyjs.org) 来构建的 Blog 站点。

使用 `Gatsby`来部署页面，主要是因为感觉这个页面特别的简洁，看起来很舒服，因此就用这个了。

## 一、如何使用

```bash
npm install -g gatsby

# 官方提供的一个 Blog 模板
gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog

cd gatsby-blog

# 启动项目
npm start

# 构建项目
npm run build

```

> 在 `content/blog/` 添加 `markdown` 文件，即可完成文章的添加。

## 二、如何使用 Github Pages 部署 Blog

既然 Blog 已经搭建好啦，那么应该部署到服务器，通过域名去访问，才算是一个完整 Blog 。

Github 提供了一个 Github Pages 的功能，支持你部署一个静态的 web 站点，并且给一个二级域名。我们可以通过这种方式来部署，省下自己搭建服务器的麻烦。

具体如何部署，请看这篇文章[《使用 Github Pages 部署 Blog 站点》](/github-pages/)

## 三、利用 Github 管理 源代码和构建出的资源

部署 Blog 站点 的时候，只需要使用到 构建出来的 `public` 目录， 不需要使用源代码。 但是把源代码直接丢在本地，这样也不太好 (万一不小心删除了，换电脑了岂不麻烦)。

**Github Pages 部署需要使用到 master 分支。**

因此我们可以把构建出来的静态资源上传到 master 分支，然后把源代码上传到 `source` 分支。

```bash
# 利用 gh-pages 来上传构建的文件到指定分支
yarn add -D gh-pages

# package.json 的 scripts 添加 deploy 命令
# 这个命令可以会把构建出来的文件，上传到 master 分支
"deploy": "gatsby clean && gatsby build --prefix-paths && gh-pages -b master -d public",

# 部署上线
npm run deploy

# 常规操作上传源代码
git co -b source master
git add .
git commit -am 'upload xxx  code'
git push
```
