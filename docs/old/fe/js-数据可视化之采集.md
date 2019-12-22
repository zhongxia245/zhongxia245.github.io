---
title: 【JS】数据可视化之采集
tags: js
categories: 前端
description: >-
  版本迭代应该是基于数据的，离开数据支持的快速迭代，很可能就是原地踏步。既然需要数据分析，那么就需要采用用户的操作数据，这样才能有数据的支持。这里简单记录下，一些数据采集的思路以及需要采集的信息。
abbrlink: 2622
date: 2018-02-07 16:15:57
---

原文地址：[数据可视化采集--如何设置前端监控系统](http://www.cnblogs.com/yexiaochai/p/6246490.html)

## 一、前端监控系统

版本迭代应该是基于数据的，离开数据支持的快速迭代，很可能就是原地踏步。

既然需要数据分析，那么就需要采用用户的操作数据，这样才能有数据的支持。

## 二、数据统计

不同的数据分析，需要使用到不同的数据，那么到底需要什么数据呢， 这个拍脑袋想不出来，所以进行基础的穷举：

- PV、UV
- 页面点击
- 页面来源（document.referrer）
- 页面停留时间 （web 计算不准确）
- 前端错误日志 （后面单独讲）
- 首屏载入速度
- 用户环境收集（navigator.userAgent）
- 跨域资源检测 (检测所有非白名单的脚本，发现脚本注册行为，附件特性)
- 渠道信息 (推广的时候，运营加上)

## 三、错误日志

某个特定条件才触发的 BUG，要测试出来是最麻烦的。当代码量大的时候，前端预警和错误日志是很重要的。

### 3.1 错误捕捉

如果把打包出来的 js 文件，放到了七牛上，域名不一样，错误信息就抓不到。

```
// 不能捕捉不同域名下的报错， 不同域名统一报错 javascript error
window.onerror = function (msg, url, line, col, error) {
     //......
}
```

### 3.2 生产环境错误

> 总而言之，线上错误日志搜集的行号信息，在线下平台便能很好的翻译了，这里方案有了，我接下来马上想法落地，落地情况在存储篇反馈

可以使用第三方工具，对日志做二次解析。**Sentry**

- #### 线上错误信息长什么样？
  生产环境的代码是压缩过的，错误信息都在一行里面，特别难看，如果要深入了解错误信息，就需要 source map 。
  ![](https://ws1.sinaimg.cn/large/006tNc79gy1fo7x2ha9x3j319i0h241f.jpg)

* #### source map 有什么用？
  调试代码的时候，可以把打包的 js 文件映射到实际的代码文件中，方便调试。

sourcemap 是一个信息文件，里面存储着位置信息。

如果是用 webpack 打包的话，只需要在 webpack.config.js 里面添加 devtool 配置即可。

生产环境有了 sourcemap 文件，报错的时候就可以看到具体报错的代码行
![](https://ws1.sinaimg.cn/large/006tNc79gy1fo7xqvttsjj30zw0dkmyk.jpg)

- #### 不想让这么容易的看到代码怎么办？

  但是上传到生产环境后，别人就可以很容易的理解我们的代码，这个并不是想要的结果。 所以需要把错误信息，拿到线下来翻译。

- #### 线下如何翻译错误代码？
  线下翻译的话，需要有一个把错误信息的行号列号，还原到具体代码中的某一行。

[raygun--收费](https://raygun.com/sourcemaps)

[《github-sourcemap》](https://github.com/mozilla/source-map)

> 开源的 nodejs 库，实现根据行列，sourcemap 文件定位到某个文件的某一行代码

```
var mapData = require('./index.json');
// console.log(sourceMap);
var sourceMap = require('source-map');
var consumer = new sourceMap.SourceMapConsumer(mapData);
var numInfo = consumer.originalPositionFor({ line: 1, column: 13330 })
console.log(numInfo)
```

```
{
  source: 'pages/index/index.js',
  line: 182,
  column: 0,
  name: 'layoutHtml'
}
```

## 三、数据采集

采集可以使用第三方来采集，也可以使用自己的采集系统。 采集的数据，在第一点数据统计里面列举了一些最基本的。

当然还可以收集一些用户的行为，比如用户点击了多少次，分享了多少次等

可以采用 img 标签的跨域能力，实现跨域信息上传的功能。
