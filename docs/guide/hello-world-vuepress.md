---
title: Hello VuePress
date: 2019-12-22 10:56:45
---

构建 blog 的方法有很多，vuepress 就是里面很常见的一种。 这里记录一下如何利用 vuepress 来部署 blog。

看 [VuePress 官网]([https://vuepress.vuejs.org/zh/guide/basic-config.html)) 文档，很容易就可以构建出来了。

## 一、初始化项目

```bash
npm install --global vuepress

mkdir blog

cd blog

npm init -y

# 用 docs 来放 markdown 的文件
mkdir docs

cd docs
echo '# hello , vuepress' > README.md

# 运行项目
vuepress dev docs

# bingo~
```

## 二、增加 vuepress 配置

这个时候，虽有已经有了最基本的 Markdown 文档展示，但是我们还想要页面标题，导航栏，侧边栏等一些必备的东西。

```bash
cd docs

# vuepress 的配置需要放在 .vuepress 目录下，因此需要创建一下
mkdir .vuepress
touch config.js
```

> 这里放一些基本配置来参考下
>
> 主要看下， themeConfig.nav / themeConfig.sidebar

```js
// .vuepress/config.js

module.exports = {
  title: "zhongxia",
  description: "乾坤未定，你我皆是黑马",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  base: "/",
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  serviceWorker: true, // PWA
  // 缓存进程更新
  serviceWorker: {
    updatePopup: {
      message: "请更新文档内容",
      buttonText: "立即更新"
    }
  },
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/post/" },
      { text: "About", link: "/about/" },
      {
        text: "GitHub",
        link: "https://github.com/zhongxia245",
        target: "_blank"
      }
    ],
    sidebar: "auto"
  }
};
```

## 三、如何部署

部署看这里 [vuepress 部署文档](https://vuepress.vuejs.org/zh/guide/deploy.html)

> 因为本站主要是部署在 github-pages ，因此配置大概这样
>
> 具体看下官网部署文档

```bash
# deploy.sh

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy vuepress blog'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/zhongxia245/zhongxia245.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

```sh
# 部署项目
sh deploy.sh
```

## 四、其他问题

如果是用来做 Blog，还差了自动生成目录列表，分页，翻页等功能。

不过目前文章比较少，还不是很必要，先不折腾了。

> 内容才是最重要的，形式可以说是锦上添花，而非雪中送炭。
