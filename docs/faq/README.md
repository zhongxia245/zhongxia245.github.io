---
title: 移动端兼容性问题
sidebar: auto
---



前端开发，最令人苦恼的就是兼容性问题。



> 前端：明明我的电脑/手机上没有问题的。
>
> 测试：你看 :point_up_2:



因此这里记录一下移动端开发常见的兼容性问题，后面在遇到这种问题，可以来这里找到解决方案。



## 1、iOS 滑动不流畅

**表现**

上下滑动页面会产生卡顿，手指离开页面，页面立即停止运动。整体表现就是滑动不流畅，没有滑动惯性。

**原因**

原来在 iOS 5.0 以及之后的版本，滑动有定义有两个值 `auto` 和 `touch`，默认值为 `auto`。

```css
/* 当手指从触摸屏上移开，会保持一段时间的滚动 */
-webkit-overflow-scrolling: touch; 

/* 当手指从触摸屏上移开，滚动会立即停止 */
-webkit-overflow-scrolling: auto; 
```

**解决方案**

1. 在滚动容器中，使用 `-webkit-overflow-scrolling: touch`

   > 可能会导致使用`position:fixed;` 固定定位的元素，随着页面一起滚动

2. 设置外部 `overflow` 为 `hidden`,设置内容元素 `overflow` 为 `auto`。内部元素超出 body 即产生滚动，超出的部分 body 隐藏。

   ```css
   body {
       overflow-y: hidden;
   }
   .wrapper {
       overflow-y: auto;
   }
   ```

   

## 2、IOS 滚动置顶

**表现**

页面滚动事件（scroll）只有在页面滚动停止后才会触发一次，不会像 android 那样，实时的触发，因此再实现滚动指定的时候，经常等页面已经过去了，然后滚动效果定制后，突然一下着置顶。

**原因**

IOS 的 UIWebview 内核 设定了其在进行momentum scrolling(弹性滚动)时,会停止所有的 事件响应 及 DOM操作引起的页面渲染 (亲测),故 onscroll 不能实时响应。

> IOS 的 Webview 默认是用 UIWebview , Android 默认的是  WKWebview 。
>
> 不过现在 Apple 对使用 UIWebiview 的应用会进行警告，会慢慢替换成 WKWebview , 否则不给审核通过，因此后续就不用再担心这个滚动不流畅的问题。

**解决方案**

如果是需要滚动指定的效果，可以采用下面的两个解决方案

1. **CSS 方案解决滚动指定**

IOS 下采用 `position:sticky;` ，来实现滚动置顶。 设置了该属性，则不需要再兼容滚动事件来实现滚动置顶了。

但注意，该属性在 IOS 下兼容性不错，但是 android 和 PC下 兼容性堪忧，注意分平台做兼容。

2. **IntersectionObserver 事件处理**

   用来监听目标元素和窗口交叉的关系（交叉判断目标元素的显示隐藏）



## 3、Safari  Invalid Date

下面这些字符串时间，在 Chrome 浏览器下都是正常的，但是在 Safari 浏览器下就需要注意了。

```js
new Date('2019-1-01')
//Invalid Date

new Date('2019-1-1')
// Invalid Date

new Date('2019-01-01')
// Tue Jan 01 2019 08:00:00 GMT+0800 (CST)

new Date('2019/01/01')
// Tue Jan 01 2019 00:00:00 GMT+0800 (CST)

new Date('2019/1/1')
// Tue Jan 01 2019 00:00:00 GMT+0800 (CST)
```



## 4、Safari 数组 sort 排序

`Array.sort(compareFn)` 方法，`compareFn` 函数的返回值应该是 1 和 -1 ， 而不是 true 和 false。

否则会造成一些不同浏览器的兼容性问题，具体问题可以参考下面这个。

```js
var arr = [1,5,3,2,6]

// Chrome 浏览器
arr.sort((a,b)=>a>b)  // [1, 5, 3, 2, 6]

// Safari 浏览器
arr.sort((a,b)=>a>b)  // [1, 2, 3, 5, 6] (5)
```

在 safari 浏览器里面，返回 true，false，也可以排序成功，但是在 chrome 钟，则不行。

> The ECMA standards require the function being passed to sort() to return a number greater than 0, less than 0 or equal to 0. However, the function you have defined returns true / false. ECMA standards state that for a function which does not behave as expected, the implementation depends on the client.
>
> 大意就是 ECMA 标准规定是返回值 **＞=0，＜0** 来判断的。 
>
> 但是对于功能无法正常运行的功能，其实现取决于**客户端**。



## 5、IOS 300ms 点击延迟

**表现**

如标题，就是针对  click 点击事件触发的时间，有延迟感，感觉没有点击上的感觉，体验不好

**原因**

这是是由于IOS 的 safari 对于 web 页面，有一个双击缩放页面的功能。

那么如何区分单击还是双击呢？这个时候浏览器就做了一个约定，300ms 内，连续点击两次，则认为是双击，否则就是单击。

所以这个问题就出现了。

**解决方案**

1. 使用 touchstart 替换 click 事件

   > PC 没有 touchstart 事件，因此还需要做兼容处理，麻烦，因此用 fastclick 来解决的比较多。

2. 使用 fastclick



## 6、iPhone X系列安全区域适配问题

**表现**

头部刘海两侧区域或者底部区域，出现刘海遮挡文字，或者呈现黑底或白底空白区域。

**原因**

iPhone X 以及它以上的系列，都采用**刘海屏设计**和**全面屏手势**。头部、底部、侧边都需要做特殊处理。才能适配 iPhone X 的特殊情况。

**解决方案**

**设置安全区域，填充危险区域，危险区域不做操作和内容展示。**

> 危险区域指头部不规则区域，底部横条区域，左右触发区域。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
```

```css
/* 适配 iPhone X 顶部填充*/
@supports (top: env(safe-area-inset-top)){
  body,
  .header{
      padding-top: constant(safe-area-inset-top, 40px);
      padding-top: env(safe-area-inset-top, 40px);
      padding-top: var(safe-area-inset-top, 40px);
  }
}
/* 判断iPhoneX 将 footer 的 padding-bottom 填充到最底部 */
@supports (bottom: env(safe-area-inset-bottom)){
    body,
    .footer{
        padding-bottom: constant(safe-area-inset-bottom, 20px);
        padding-bottom: env(safe-area-inset-bottom, 20px);
        padding-top: var(safe-area-inset-bottom, 20px);
    }
}
```



## 7、IOS input 的 placeholder 属性使文本位置偏上

**表现**

在 IOS 中，input 的 placeholder 提示文案，当 input  设置 行高后， 提示文案会稍微偏上（chrome浏览器和 android 没有问题）

**原因**

不同浏览器对 line-height 的处理不太一样。 

> 具体原理不太清楚，找了半天没有找到相关资料

**解决方案**

```css
input::-webkit-input-placeholder{
  line-height: normal;
}
```

