# 手写代码系列

在面试过程中，手写代码的环节是必不可少的，这里记录一下手写过的代码。



1. 手写 React-Router 组件



## 一、手写 React-Router 组件

这里做一个简单的介绍，具体看这里 [《【手写代码】React-Router》](./router.md)

分析下`react-router` 组件，有两种模式， `hash` 和 `browser` 模式。

### 1、hash 模式

利用 `window.location.href = '#/url'` 进行跳转，只变了 hash 值，因此不会刷新页面。`hash` 变化可以通过 `onhashchange` 来监听。利用 `onhashchange` 监听到的变化，渲染不一样的组件，来实现 router 组件。

> 可以利用 react  的 state 变化，触发重新渲染，用不用 `onhashchnage` 事件都可以实现。

### 2、browser 模式

在 html5中, history 新增了两个方法，`pushState` 和 `replaceState` , 通过这两个方法可以在不刷新页面的情况下修改页面的 url 地址。

`pushState` 和 `replaceState` 会触发 `onpopstate`事件，利用该事件渲染不一样的组件。

> 也可以利用 react 的 state变化，触发重新渲染，不需要通过监听 onpopstate 来触发重新渲染。

