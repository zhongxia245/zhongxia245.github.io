---
title: 1910 - JS生成图片的调研
date: 2019-10-23 19:53:22
description: ""
---

# JS 生成图片的调研

从社区里面找来下，大部分使用这两个库可以完成生成图片的功能。 [dom2image](https://github.com/tsayen/dom-to-image) , [html2canvas](https://github.com/niklasvh/html2canvas).

很早就知道这两个库，知道有兼容性问题，但是不太清楚具体的问题多有哪些，因此有了这篇文章。

## 零、结果

整理测试结果，结果表示 `html2canvas` 的效果会比 `dom2image` 兼容性和失真程度好一点。

> 还没有去研究 dom2image 是否可以提高图片清晰度，因此结果只能作为参考。

## 一、测试测试

想尝试，可以打开这个 [测试地址](https://zhongxia245.github.io/demo/pages/dom2image/index.html) ， 想看源码，看这里 [源码](https://github.com/zhongxia245/demo/tree/master/src/pages/dom2image)

> - 测试机器,只有这两部了
>
>   - Iphone7, IOS12.4.1
>
>   - Android , Huawei Mate 9 , Android9
>
> - 测试分为 5 个环境，
>   - PC，
>   - wechat（IOS,Android）
>   - webview（IOS，Android）
>     - webview 为公司客户端内的 webview， IOS 使用 UIWebview，Android WkWebview。
> - 以下结果为页面超过一屏的测试结果。

| 功能                   | PC             | wechat ios                             | wechat android            | IOS                                | Android                | 其他               |
| ---------------------- | -------------- | -------------------------------------- | ------------------------- | ---------------------------------- | ---------------------- | ------------------ |
| dom2image 下载图片     | 可以下载       | 不可以下载                             | 不可以，只能长按保存      | 不可以                             | 不可以                 | 移动端无法下载文件 |
| dom2image 保存为 SVG   | 可以，不失真   | 部分内容丢失，不失真，可以长按保存,svg | 部分内容丢失，不失真，svg | 部分内容丢失，不失真，svg 格式     | 可以，不失真，svg      |                    |
| dom2image 保存为 PNG   | 可以，失真严重 | 可以，失真严重，可以长按保存,base64    | 无法生成                  | 部分内容丢失，不失真，可以长按保存 | 可以，失真严重，base64 |                    |
| html2canvas 保存为 SVG | 可以，稍微失真 | 可以，稍微失真，可以长按保存, base64   | 可以，稍微失真，base64    | 可以，稍微失真,base64              | 可以，稍微失真，base64 |                    |

> **部分内容丢失**：有可能是丢失图片，丢失页面按钮，或者其他元素，没有规律，因此统一称 部分内容丢失。
>
> **失真：**即页面上看着清晰，保存成图片后，看起来模糊。【非像素眼看着都模糊了，那是真的模糊了】
>
> **base64, svg** : 生成出来的图片格式, base64 、svg 格式

## 二、测试结果

1. `dom2image` , `html2canvas` 都可以使用本地图片，和七牛图片（七牛图片，需要七牛设置支持 CROS）
2. 内容只有一屏，则不会出现内容丢失的问题，超过一屏则会存在各种丢失内容的问题，丢失内容规律暂时没有找到
3. 她理财 android 分享 base64 图片有问题，选择分享微信好友后，没有反应 ， IOS 没有问题
4. 如果页面中存在图片，偶尔会丢失（本地图片，和七牛七牛，都有可能丢失）

## 三、采用的截图方案

由于 `dom2Image` 保存的 png 图片，存在严重失真，并且保存的 svg 图片虽然很清晰，但是客户端的分享功能，不支持 svg 模式，因此采用 `html2canvas` .

采用 `html2canvas` 方案， 测试可用性， 如果页面内容在一屏之内，测试结果如下

1. `wechat ios`： 可以
2. `webivew ios:` 可以， 图片偶尔会丢失，偶发
3. `wechat android`， 可以
4. `webview android`： 可以

### 3.1、页面中存在跨域的图片如何处理？

`html2Canvas` 请求非同域名的图片，如何支持生成 base64

```js
import html2canvas from "html2canvas"
import { Modal, Button, Toast } from "antd-mobile"

// .... 省略代码

Toast.loading("正在生成图片...")
html2canvas(document.getElementById("dom"), {
  useCORS: true, // 加上这个才能使用七牛上的图片地址，并且七牛需要设置好 CROS
  logging: false,
}).then(canvas => {
  Toast.hide()
  // 如果不设置 useCORS , 存在跨域图片，这里会报错
  const dataUrl = canvas.toDataURL()
  Modal.alert(<img style={{ width: "100%" }} src={dataUrl} />)
})
```

### 3.2、PC 端可以生成图片，并下载

> 这里以 dom2image 为例，主要展示触发下载保存功能，而不是如何截图

```js
dom2Image.toSvg(document.getElementById("dom")).then(dataUrl => {
  Toast.hide()
  // 触发下载保存图片功能
  let a = document.createElement("a")
  a.setAttribute("download", "demo.png")
  a.setAttribute("href", dataUrl)
  a.click()
})
```

### 3.3、html2canvas 截图模糊的解决方案

解决方案的原理，就是把 canvas 的大小变成页面元素的两倍。和页面上使用两倍图的原理是一样的。

```js
/*图片跨域及截图模糊处理*/
let shareContent = domObj, //需要截图的包裹的（原生的）DOM 对象
  width = shareContent.clientWidth, //shareContent.offsetWidth; //获取dom 宽度
  height = shareContent.clientHeight, //shareContent.offsetHeight; //获取dom 高度
  canvas = document.createElement("canvas"), //创建一个canvas节点
  scale = 2 //定义任意放大倍数 支持小数
canvas.width = width * scale //定义canvas 宽度 * 缩放
canvas.height = height * scale //定义canvas高度 *缩放
canvas.style.width = shareContent.clientWidth * scale + "px"
canvas.style.height = shareContent.clientHeight * scale + "px"
canvas.getContext("2d").scale(scale, scale) //获取context,设置scale
let opts = {
  scale: scale, // 添加的scale 参数
  canvas: canvas, //自定义 canvas
  logging: false, //日志开关，便于查看html2canvas的内部执行流程
  width: width, //dom 原始宽度
  height: height,
  useCORS: true, // 【重要】开启跨域配置
}
html2canvas(shareContent, opts).then(canvas => {
  const dataUrl = canvas.toDataURL()
})
```
