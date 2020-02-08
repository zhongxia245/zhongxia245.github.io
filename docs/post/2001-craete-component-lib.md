---
title: 从零创建一个组件库
date: 2020-01-19 15:58:20
---

# 从零创建一个组件库

从零开始创建一个数据库需要考虑哪些问题？

1. 技术选型
   1. 打包方式（webpack，rollup）
   2. JS 选型（typescript）
   3. CSS 选型（css in js ?）
   4. monorepo（多包仓库）
2. 代码检测（eslint）
3. commit 规范
4. 测试工具（jest，mocha）
5. 组件按需加载
6. 组件展示（storybook，docz）

## 一、技术选型

阿里开源了一个 `father` 的 npm 包，专门用来打包类库，组件，支持 roolup，babel，可以打包出 cmd。

## 终、参考文档

1. [从零开始搭建 Vue 组件库 VV-UI](https://zhuanlan.zhihu.com/p/30948290)
2. [如何搭建一个组件库的开发环境](https://www.cxymsg.com/guide/componentCli.html)
