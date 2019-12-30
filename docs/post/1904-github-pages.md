---
title: 1904 - 利用 Github Pages 部署 Blog 站点
date: 2019-04-30 16:22:39
description: ""
---

# 利用 Github Pages 部署 Blog 站点

部署 Blog 站点，正常情况下，你需要一个有独立外网 IP 的服务器，一个域名。

但是 `Github` 提供了一个 `Github Pages` 的功能，支持把你代码仓库的代码部署起来，提提供一个 二级域名（`username.github.io`）。

**`Github Pages` 是什么？**

用户编写的，托管再 github 上的静态网页。

> 下面所有讲述都默认认为您已经有了一个 `github`帐号的前提下。
>
> 笔者笔记本是 Mac 系统。

## 一、创建仓库

创建一个仓库，名称为 `username.github.io` 的名称（`username` 替换成你的 `Github 用户名称`）。

> 这个名字格式是 Github Pages 的规则

<img src="https://tva1.sinaimg.cn/large/006tNbRwgy1ga5i1vrl4oj30k405q3ye.jpg" alt="创建项目" style="zoom:50%;" />

## 二、提交静态网页到仓库中

仓库已经创建好了，那么就提交一个 `index.html` 到仓库中吧。

> 因为笔者已经创建过了，这里就说明一下，不删掉仓库，重新一步一步来了。

```bash
# 创建项目
mkdir blog
cd blog

# 初始化 git 仓库
git init

# 指定远程仓库地址
git remote add origin https://github.com/zhongxia245/zhongxia245.github.io.git


# 创建 index.html 文件
# window 系统可以直接右键添加一个html文件即可
echo "<h1>hello world</h1>" >> index.html

#  上传代码到master分支
git add .
git commit -am 'init project'
git push  origin master

```

好了，代码上传到 github 仓库了 （这里需要有一点 git 知识）。

大概这样

<img src="https://tva1.sinaimg.cn/large/006tNbRwgy1ga5i20iqgyj30yq0n4mxl.jpg" alt="项目截图" style="zoom:50%;" />

## 三、查看 Github Pages 配置

正常完成上一步，你就可以访问 [https://zhongxia245.github.io](https://zhongxia245.github.io) 这个域名去访问你部署的静态站点了。

> 访问的时候，换成自己的二级域名。

在 Project —> Settings —> Github Pages 可以看到分配给你的二级域名 (`username.github.io`)。

<img src="https://tva1.sinaimg.cn/large/006tNbRwgy1ga5i27jpgvj318807cjrj.jpg" alt="设置位置" style="zoom:50%;" />

打开 `Settings` 后，往下滑动一屏左右，可以看到 `Github Pages` 的信息。

- 你的二级域名
- 页面主题选择
- 自定义域名配置

<img src="https://tva1.sinaimg.cn/large/006tNbRwgy1ga5i22b9gfj311w0kydgk.jpg" alt="img" style="zoom:50%;" />

很简单，你现在已经部署好了，你的静态站点了。 可以往里面添加你想要展示的内容了。

如果你是写 Blog，可以去了解一下 `Hexo` , `Gatsby` ， 都可以快速构建出你简单美观的 Blog 站点了。

## 四、Gitee.io 了解一下

如果访问 `github` 速度很慢的话，在国内，你可以考虑使用 `gitee.io` 来进行部署静态站点。

`gitee.io` 可以理解为国内版的 `github`，部署静态站点的方式和 `github` 一样。
