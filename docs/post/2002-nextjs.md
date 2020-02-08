# Next.js 踩坑指南

next.js 是一个 react ssr 的框架，可以很方便的来实现 ReactSSR，对于需要 SEO 的需求来说，这个是很好用的。并且社区资源也很丰富，搜索资料也比较多。



但是总会有一些坑，需要填过，才深有体会，这里汇总一些填坑指南。



## 一、入门

官网是最好的入门手册，跟着 [《官网入门手册》](https://nextjs.org/learn/basics/getting-started)来过 一遍，你对 Next.js 就有了一个基本的了解和使用。

> 这块没有什么难点，跟着文档走下去即可，文档是英文的，不过很通俗易懂。



## 二、各种场景的处理方案

next.js 提供了很多插件来支持各种场景。 具体有什么插件可以看 [《这里》](https://github.com/zeit/next-plugins)。

同样的 next.js 也提供了很多 example 案例， 具体看[《这里》](https://github.com/zeit/next.js/blob/canary/examples/)

> 多看看这里，可以解决大部分问题



### 2.1、样式处理

next.js 默认使用的是 `style-jsx`, `css in js `的一种。 用来页面开发是完全够用的，只是如果还需要使用 less，css 之类的，需要单独处理。

看这里 [less使用案例](https://github.com/zeit/next.js/blob/canary/examples/with-next-less/next.config.js) 



官网提供了 一下几个插件来支持样式处理。

- [@zeit/next-css](https://github.com/zeit/next-plugins/blob/master/packages/next-css)
- [@zeit/next-sass](https://github.com/zeit/next-plugins/blob/master/packages/next-sass)
- [@zeit/next-less](https://github.com/zeit/next-plugins/blob/master/packages/next-less)
- [@zeit/next-stylus](https://github.com/zeit/next-plugins/blob/master/packages/next-stylus)



### 2.2、引入 antd、antd-mobile 组件库

常规开发中，引入一个组件库会方便很多，没必要再次写通用组件。

但是在 next.js 引入 `antd , antd-mobile`  也 常规 CSR 不太一样，因为 SSR 需要在 node 中支持 css。



and-mobile 引入，必须支持 css 样式，如果只引入 less 是不行的， 因为 `antd-mobile` 引入了`normalize.css` 

> 所以如果只支持 less 的话，会报错。



具体如何操作，看这里 [antd-mobile 引入方式](https://github.com/zeit/next.js/blob/canary/examples/with-antd-mobile/next.config.js)

> antd 引入，同理去这个地址找， 找 antd 的 example 。



### 2.3、页面loading

next.js 是一个 单页面 SSR , 因此再页面跳转的时候，加一个页面 Loading 效果，会好很多。

具体实现实现看 [《这里》](https://github.com/zeit/next.js/blob/canary/examples/with-loading/pages/_app.js)

![](https://tva1.sinaimg.cn/large/0082zybpgy1gbnuwft25tj30qu056mx3.jpg)



## 三、坑

能解决的坑，都不是坑。



### 3.1、样式导致页面跳转问题

**现象：**当 A 页面应用外部样式，B 页面没有使用外部样式。 浏览器直接打开 B 页面，然后这个时候点击跳转去 A 页面，会跳转不过去。（开发环境出现）

**解决方案：** 使用一个 Layout 布局，然后 Layout 引入外部样式，也可以自己写一个  Layout.less 的样式文件，这样所有页面都有引入外部样式，这个时候就没有问题。

> 具体原理还不太清楚，但是 next.js 会把所有 css 都打包成一个文件。





