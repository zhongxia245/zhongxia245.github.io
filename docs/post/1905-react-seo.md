---
title: 1905 - SEO 思考
date: 2019-05-21 08:30:13
description: ""
---

## 更新

目前采用 Nextjs + Eggjs 这一套来实现页面的 SSR。页面数据如果不是经常变化的话，可以把页面进行缓存，可以采用 LRU 缓存算法。

## 一、项目背景

- 一个社区项目 (SEO 强相关)
- 使用 `python` + `jinja` (模板引擎) + `React` + `Jquery` 实现
- 前后端不分离

由于项目的代码几经人手，目前代码比较混乱，有重构的想法。想使用 React 的模块化，组件化来重构， 但是考虑到 SEO 问题，因此有了这篇文章。

因为这个是社区项目，因此 SEO 还是很重要的。

## 二、SEO 解决方案

虽然 Google 支持 JS 渲染，但是国内的百度不支持呀，所以只能放弃纯 JS 渲染的这种做法了。

### 2.1 针对搜索引擎返回静态页面

用户访问的时候，还是使用客户端渲染，只是针对爬虫返回特定的静态页面。

### 2.2 采用 SSR 渲染

SSR（server side render），首屏加载速度快， 且 SEO 友好。

- [Nextjs](https://nextjs.org/) 的 React SSR 渲染
- [Alibaba 的 Beidou 框架](https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/articles/high-performance-isomorphic-app.md)
- node + nunjucks(模板引擎) + Jquery

## 三、各个方案的优缺点

### 3.1 针对搜索引擎返回静态页面

简单粗暴，针对搜索引擎优化，而不是针对用户优化。

#### 优点

- 用户看到的是纯前端渲染得页面，开发方式保留常规的开发方式即可。
- 使用 nginx 部署静态站点，方便快捷

#### 缺点

- 针对搜索引擎优化，而非针对用户体验优化。
- 需要一个服务，当爬虫抓取页面的时候，返回一个静态页面，(静态页面可以 用 Headless Chrome 生成在返回，也可以自己写一个爬虫抓取自己的页面)

### 3.2 NextJS SSR 渲染

> alibaba 的 beidou 框架，具体没有用过，但是属于同构开发，跟 Next.js 类似，就放一起了。

相对浏览器渲染的开发方式，稍微麻烦一点，并且因为由动态路径页面，必须引入 Node 层。

#### 3.2.1 优点

- SSR 服务端直出，SEO 友好
- 在移动端下、首屏速度快，对用户友好

#### 3.2.2 缺点

- 开发相对复杂(这个也还好)
- Nextjs 引用图片，只能放在 static 目录下，不能直接用 `require` 直接引用图片

### 3.3 Node + Nunjucks + Jquery + react

最基础，最早期的 SSR 开发方式，现在用 Jquery 开发起来还是比较麻烦的，并且不好复用。

#### 3.3.1 优点

- 简单

#### 3.3.2 缺点

- 开发，维护相对比较麻烦
- 简单的展示页面可以用这个模式，复杂的页面可以用 React 开发，然后注入到页面上。

## 三、目前尝试过的方式

目前有两个项目进行了尝试

- NextJs SSR 支出
- Node + Nunjucks 渲染
  - 展示页面，直接用 Nunjucks 写模板直出
  - 交互性页面，则用 React 开发，然后 针对搜索引擎返回特定的内容。

## 参考文章

1. [IMWEB--SEO 优化实战](https://imweb.io/topic/5682938b57d7a6c47914fc00)
2. [IMWEB--使用 HeadlessChrome 做单页应用 SEO](https://imweb.io/topic/59524be72694079f71f50b0d)
3. [CNODE--教你如何搭建一个超完美的 React.js 服务端渲染开发环境](https://cnodejs.org/topic/5865a866189fd5ad6459006c)
