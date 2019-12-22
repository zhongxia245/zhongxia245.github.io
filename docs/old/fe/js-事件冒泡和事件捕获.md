---
title: 【JS】事件冒泡和事件捕获
tags: js
categories: 前端
description: JavaScript 基础知识，事件机制了解一下。
abbrlink: 35471
date: 2017-11-08 10:32:13
---

## 一、术语

绑定在被点击元素的事件是按照代码顺序发生，其他元素通过冒泡或者捕获“感知”的事件，按照 W3C 的标准，_先发生捕获事件，后发生冒泡事件_。所有事件的顺序是：_其他元素捕获阶段事件 -> 本元素代码顺序事件 -> 其他元素冒泡阶段事件 。_

### 1. 事件捕获

从 document 到触发事件的那个节点过程 叫 事件捕获
![](http://ww2.sinaimg.cn/large/006tNc79jw1fceimc699ij307y06c0sz.jpg)

### 2. 事件冒泡

和事件捕获相反，从触发事件的节点，
![](http://ww2.sinaimg.cn/large/006tNc79jw1fceily8o8tj309607nwew.jpg)

**事件冒泡可以被阻止**

```javascript
e.stopPropagation() //可以阻止冒泡
```

![](http://ww3.sinaimg.cn/large/006tNc79jw1fcein15mmaj30ah06kdga.jpg)

## 二、实例

#### 情况 1：默认事件冒泡形式

```html
<div id="parent"><div id="child">child</div></div>

<script>
  document.getElementById('parent').addEventListener('click', function() {
    console.log('parent click...')
  })
  document.getElementById('child').addEventListener('click', function() {
    console.log('child click...')
  })
</script>
```

默认情况下的绑定事件，是事件冒泡的形式
![](http://ww4.sinaimg.cn/large/006tNc79jw1fcegy4aprzj30dc02waa4.jpg)

#### 情况 2：事件捕获形式

如果把绑定事件的第三个参数变成 true， 则变成事件捕获

```javascript
document.getElementById('parent').addEventListener(
  'click',
  function() {
    console.log('parent click...')
  },
  true
)
document.getElementById('child').addEventListener(
  'click',
  function() {
    console.log('child click...')
  },
  true
)
```

![](http://ww2.sinaimg.cn/large/006tNc79jw1fceh202xcyj30om02ct8t.jpg)

## 二、addEventListener 第三个参数

```
// 第三个参数 true：在捕获阶段执行目标事件
// 第三个参数 false【默认】：在冒泡阶段执行目标事件
dom.addEvenvListener('click',fn,false/true)
```

衍生出的问题

#### 2.1 一个 DOM 节点，绑定两个点击事件，一个冒泡，一个捕获，那么触发几次事件？

> 首先，无论是冒泡事件还是捕获事件，元素都会先执行捕获阶段。从上往下，如有捕获事件，则执行；一直向下到目标元素后，从目标元素开始向上执行冒泡元素，即第三个参数为 true 表示捕获阶段调用事件处理程序，如果是 false 则是冒泡阶段调用事件处理程序。(在向上执行过程中，已经执行过的捕获事件不再执行，只执行冒泡事件。)

**冒泡阶段，已经执行过的捕获事件不在执行**
