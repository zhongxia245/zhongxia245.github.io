# 【手写代码】React-Router

手写一个 Router组件，支持 push 跳转，replace 跳转。



## 一、先来一个简单的 Router 类

一个简单的路由大概就是这样

1. 注册路由对应的渲染组件（或渲染函数）
2. 监听 `hashchange` 检测到路由发生变化，重新渲染
3. 封装 `push` 页面跳转方法

> 同理的，browserHistory 则是使用 pushState, replaceState 来进行页面跳转，用 popState 来监听跳转。
>
> pushState 是 在 HTML5 新增在 history 上的 api，因此会存在一些兼容性问题，不够利用 react 的 状态更新机制，不用 popState 也可以实现 Router 功能，只是跳转必须用 Router 封装好的函数进行跳转即可。

```js
class Router {
  // 渲染的 dom 节点
  constructor(renderDom){
    this.routers = new Map()
    this.dom = renderDom || document.body
    window.addEventListener('hashchange',function(){
       this._render()
    })
  }
  
  // 初始化路由
  init(){
    this._render()
  }
  // 渲染内容
  _render(){
    let path = window.location.hash
    path = path.replace('#','')
    // 找到路由对应的渲染函数，在执行渲染
    if(this.routers.get(path)){
      this.dom.innerHTML = this.routers.get(path)()
    }
  }
  
  // 添加路由对应的渲染内容
  add(path,render){
    this.routers.set(path,render)
  }
  // 移出路由
  remove(path){
    this.routers.remove(path)
  }
  // 路由跳转
  push(path){
    window.location.href = `#${path}`
  }
}
```



## 二、React-Router

原理还是和上面一样，利用 popstate 监听路由跳转。

1. BroswerRouter 维护着一个全局的地址状态（url），当地址发生变化，子组件都重新渲染
2. 利用 createContext 让所有子组件共享
3. Route 组件，判断渲染的组件内容，以及路由匹配判断

```js
// BroswerRouter.js
import React, { useState, useEffect, createContext } from "react";
export const RouterContext = createContext({});

export default ({ children }) => {
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    // 路由变化，就改变状态
    window.addEventListener("popstate", () => {
      setUrl(window.location.pathname);
    });
  }, []);

  const router = {
    history: {
      push: function(url, state, title) {
        window.history.pushState(state, title, url);
        setUrl(url);
      },
      replace: function(url, state, title) {
        window.history.replaceState(state, title, url);
        setUrl(url);
      },
      go: window.history.go,
      back: window.history.back,
      goForward: window.history.forward,
      length: window.history.length
    },
    url: url
  };

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};
```



```js
// Route.js
import React, { useContext } from "react";
import { RouterContext } from "./BrowserRouter";

export default function Route({ component, path }) {
  const { history, url } = useContext(RouterContext);
  const match = {
    path,
    url
  };
  // react 要求组件名称必须是大写
  const Component = component;
  // 匹配上路由，就渲染，否则不渲染
  return url === path && <Component history={history} match={match} />;
}

```



看效果，[Online DEMO](https://zhongxia245.github.io/demo/pages/router-demo/index.html)

看源码, [点击查看](https://github.com/zhongxia245/demo/tree/master/src/pages/router-demo)



## 三、如何实现路由参数 /post/:id

如何实现类似这种参与的形式呢？

**实现步骤：**

1. context 增加 match 属性，把从地址上匹配出的参数传到子组件上
2. `route.js` 判断路径匹配的规则要变下，不能用`url ===path` 这种简单的方式



如何从地址上匹配出参数的字段名和值呢？下面提供两种方法。

> 手写代码就选第二种，顺便还能展示下正则的掌握情况。



### 1、利用第三方库来实现，动态路由

`path-to-regexp` 这个库支持 

```js
const { pathToRegexp } = require("path-to-regexp");

const keys = [];
const regexp = pathToRegexp("/foo/:bar", keys);
// regexp = /^\/foo\/([^\/]+?)\/?$/i
// keys = [{ name: 'bar', prefix: '/', suffix: '', pattern: '[^\\/#\\?]+?', modifier: '' }]
```



### 2、使用正则匹配

使用一个万能正则公式去匹配出想要的值。

> `(.*?)` 没有换行的内容匹配，把需要取出来的值，用这个替换

```js
//eg: `this is a {age}` 匹配出 age 字段名

'this is a {age}'.match(/this is a {(.*?)}$/)
// ["this is a {age}", "age", index: 0, input: "this is a {age}", groups: undefined] 
```



```js
let route = '/post/:id'
let path = '/post/1'

// 如何匹配得出 {id:1}
let key = route.match(/\post\/:(.*?)$/)  // ["post/:id", "id", index: 1, input: "/post/:id", groups: undefined]
let value = path.match(/\/post\/(.*?)$/) // ["/post/1", "1", index: 0, input: "/post/1", groups: undefined]

// key[1] ， value[1] 就是想要的值了

// 这里就可以拿到对应的 key 和 value 的值了。

// 多个参数的话
'/post/:id/:name'.match(/\/post\/:(.*?)\/:(.*?)$/)   // ["/post/:id/:name", "id", "name", index: 0, input: "/post/:id/:name", groups: undefined]
```

