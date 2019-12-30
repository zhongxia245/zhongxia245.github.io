# 可视化活动运营平台 - 动态按需加载模块

按需加载是一个很常用的知识点，那么动态按需加载模块呢？

## 一、背景

在实现可视化运营活动平台（`后面简称可视化平台`）的时候，有很多封装好的功能模块，banner 模块，活动说明模块，转盘抽奖模块等等。

如果通过可视化平台创建一个简单的活动 A（只用到一个图片+一个悬浮按钮），但是可视化平台中，有几十个甚至上百个模块组件。这时候打开活动 A，却需要加载所有的模块代码，会存在很多冗余，造成页面打开慢，加载的 JS 包太大。



在解决之前，先简单了解下，可视化平台的思路。



## 二、可视化平台思路

可视化平台的大概思路如下

1. 通过可视化平台编辑器，设置页面包含的模块和内容

2. 编辑完成后，生成一个活动JSON 配置

   > 类似这样
   >
   > ```js
   > const config = [
   >   { name: '组件 A', props: { name: 'zhongxia' }, componentName: 'A.js' },
   >   { name: '组件 B', props: { age: 18 }, componentName: 'D.js' },
   >   { name: '组件 C', props: { score: 99 }, componentName: 'C.js' },
   > ];
   > ```

3. 展示页面，根据 id 获取到活动JSON 配置，解析配置生成活动页面。

   > 解析JSON 配置，生成页面，有以下几种方式

   1. 遍历JSON 配置，生成页面（加载所有模块代码，不做分割处理）

      > 在功能模块比较少的情况下，且活动交互，性能要求不是很高的话，把所有模块都打包起来，也不是不可以。

   2. 遍历 JSON 配置，懒加载用到的模块，然后生成页面

      > 只加载使用到模块的代码，不过会多发几个 HTTP 请求，问题不大

   3. 在发布活动的时候，生成活动代码，在部署

      > 生成代码的话，也是只加载用到的模块。只是这个会稍微麻烦点，发布活动需要生成活动代码，然后上传代码，再次构建部署。不过这种方式**灵活性最好**



## 三、动态懒加载

可视化平台，目前选中的方式是第二种，懒加载使用到的功能模块。采用 `react.lazy` 来进行模块的懒加载。

```jsx
// 核心代码大概这样
{config.map((item,index)=>{
  // 通过活动 JSON 配置中的模块名，动态加载用到的模块，并渲染出来
  let Comp = lazy(() => import(`./component/${item.componentName}`));
  return <Suspence fallback={<div>模块加载中...</div>} key={index}><Comp/></Suspence>
})}
```

这样写的话，实现了模块懒加载，但是打开调式工具的时候，发现还是只打包出一个问题，没有按需加载。

<img src="https://tva1.sinaimg.cn/large/006tNbRwly1gadmfl2eicj30re06mgms.jpg" alt="image-20191229152421736" style="zoom:50%;" />



这个是因为什么呢？因为webpack 构建的时候默认不会单独打包出懒加载的模块稳健，需要做一些配置。



### 1、webpack动态加载模块配置

> 写 demo 的时候，用 umi 来作为开发框架，因此这里以 `umi`为例

只需要在 `.umirc.js` 添加一个 `dynamicImport` 即可

```js
const config: any = {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dynamicImport: true,  // 动态加载
      },
    ],
  ]
};

export default config;

```

配置完成后，打开浏览器调试工具就看到多引入了两个js 文件，并且 `index.js` 文件大小也减少了。

<img src="https://tva1.sinaimg.cn/large/006tNbRwly1gadmm6aqkcj30pm07i3zx.jpg" alt="image-20191229153040906" style="zoom:50%;" />



> 如果是自己写 webpack配置来构建，看这里  [Webpack Dynamic Imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)。



### 2、动态加载模块报错怎么处理？

返回的活动JSON 配置，正常情况下，配置内用到的模块都是已经存在的模块，没有问题。但是如果某个模块名称被修改了，然后 解析 JSON 配置，生成活动页面的时候，就会报错，报找不到模块，导致JS 报错，页面空白。

<img src="https://tva1.sinaimg.cn/large/006tNbRwly1gadmprniptj311s0cm41n.jpg" alt="image-20191229153411651" style="zoom:50%;" />



页面空白非常不友好，技术人员无法没有打开调试工具，也不知道哪里报错，不好定位修改。因此需要做一个兜底处理。

**有两种处理方式**

1. 动态加载模块报错，把错误信息展示出来
2. 报错的模块，直接不展示

> 这里使用第一种方式

`import()`  返回的是一个 `promise` 对象，因此可以再  `catch` 内，处理报错的情况。

```jsx
let Comp = lazy(() => import(`./component/${item.componentName}`).catch(err => {
  // 注意需要加上 default ，否则 lazy 会报找不到组件啥的错误
  return { default: () => <div>{String(err)}</div>};})
);
```



动态模块按需加载，到这里就差不多啦。



## 终、效果截图

效果图源码看[《这里》](https://github.com/zhongxia245/demo/tree/master/src/pages/dynamic-lazy-loader)

[线上 DEMO](https://zhongxia245.github.io/demo/pages/dynamic-lazy-loader/)

![动态模块加载](https://tva1.sinaimg.cn/large/006tNbRwly1gadl0o29nvg30bb0ilq3a.gif)

