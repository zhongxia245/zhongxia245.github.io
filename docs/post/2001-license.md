---
title: 开源许可证（license）问答
date:2020-01-19 15:51:28
---



# 了解基本开源许可证（license）

> 你如果不遵守 License，在美国是可以让你赔很多钱的，在中国嘛…… 
>
> 来自 [《WTFPL 了解一下》](https://www.zhihu.com/question/280759610)



了解一下基本的知识。



每次创建 github 项目的时候，会提示选择一个许可证，到现在都还是提交模糊，许可证有什么用，应该这么选择？

1. 许可证是什么?
2. 许可证都有哪些类型？
3. 怎么选择许可证？



## 一、许可证是什么?

> 开源许可证是一种法律许可。通过它，版权拥有人明确允许，用户可以免费地使用、修改、共享版权软件。
>
> **版权法默认禁止共享**，也就是说，没有许可证的软件，就等同于保留版权，虽然开源了，用户只能看看源码，不能用，一用就会侵犯版权。所以软件开源的话，必须明确地授予用户开源许可证。

因此再商业项目中，使用的开源框架，引用的开源组件或者其他的，需要看是否有许可证，否则被告侵犯版权就和你尴尬了。  



## 二、许可证都有哪些类型？

目前国际上认可的许可证有 [80多种](https://opensource.org/licenses/alphabetical)。它们的共同特征是，都允许用户免费地使用、修改、共享源码，但是都有各自的使用条件。

根据使用条件不同可以分为两类

1. 宽松式（permissive）许可证
   1. BSD（二条款版）
   2. BSD（三条款版）
   3. MIT
   4. Apache 2
2. Copyleft 许可证（可以理解为严格式）
   1. Affero GPL (AGPL)
   2. GPL
   3. LGPL
   4. Mozilla（MPL）



> 具体的信息，可以看下 [《阮一峰-开源许可证教程》](https://www.ruanyifeng.com/blog/2017/10/open-source-license-tutorial.html)



## 三、怎么选择许可证？

简单的放一张图，来看下怎么选择。

![如何选择许可证](https://img-blog.csdn.net/20140811173721234?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVzdGNzX2Ru/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)



常见许可证，按照宽松程度的排列



![常见许可证的区别](https://tva1.sinaimg.cn/large/006tNbRwly1gb1qz2mrk7j30fk0etaab.jpg)





## 终、参考文章

1. [《阮一峰-开源许可证教程》](https://www.ruanyifeng.com/blog/2017/10/open-source-license-tutorial.html)
2. [《开源的法律保护》](https://ocselected.org/open-source-guide/legal/)
3. [《常见的开源许可证介绍》](https://github.com/Kimi-Gao/Program-Blog/issues/65)