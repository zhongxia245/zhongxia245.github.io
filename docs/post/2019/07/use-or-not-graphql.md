---
title: 对于用不用 GraphQL 的思考？
date: 2019-07-20 19:52:35
description: ""
---

# 对于用不用 GraphQL 的思考？

GraphQL 是 Facebook2015 年开源的数据查询规范，然而现在大部分的 Web Services 都是 RESTFul 的。既然已经了 RESTFul 的解决方案，为什么还需要使用 GraphQL 呢？

因此这篇文章调研一下社区中的一些看法，让自己对 GraplQL 有一个大概的理解。

> 在写这篇文章的时候，还是没有想到 GraphQL 在公司项目的实际应用场景，因此观点会更偏向暂时不用 GraphQL。当然这个问题，根据各个公司的实际情况思考。

## 零、总结

**个人项目，或者公司的内部项目，可以尝试使用，但是已有的老项目使用的意义不大。**

1. 开发模式，我们这边是先出接口文档，在前后端开发，并不会前端等后端开发完成，在去开发前端。因此效率上提升有限。
2. 对于接口权限控制， RESTFul 控制起来会更自由一点
3. GraphQL 缓存上虽然有一个 DataLoader 兜底，把一些比较频繁的 Query 缓存起来，但是和 RESTFul 比较起来，还是更复杂的。 而对我们公司来说，缓存还是很有必要的。

虽然不抗拒学习新的方法，新的思路，但是作为一个实用主义者，还是更看中它带来了什么。

采用[《The state of GraphQL by Reddit》](https://blog.graphqleditor.com/the-state-of-graphql-by-reddit/)中的一句话来作为总结的结尾

> **Development should always be about picking the right tool for the job. GraphQL isn’t always the right tool. REST isn’t dead and GraphQL isn’t going to kill it.**
>
> 开发应该始终是为工作选择合适的工具。GraphQL 不是银弹。REST 没有死，GraphQL 也不会杀死它。

## 一、GraphQL 带来的好处

一个新的解决方案的出现，必然是为了解决老方案存在的痛点了。

1. 数据冗余和请求冗余 (overfetching & underfetching)
2. 接口校验 (validation)
3. 接口变动，维护与文档

### 1.1、数据冗余和请求冗余 (overfetching & underfetching)

RESTFul 接口返回的内容，大部分情况下是一个完整的记录。如果我们只需要用到其他一两个字段，其实就没必要返回那么多数据。在 PC 上，这个可能无感，在 Mobile 上，会增加一些额外的流量。

### 1.2、接口校验 (validation)

RESTFul 的接口需要对提交的数据校验，判断是否是 Number，是否为 Boolean 什么的。 GraphQL 对请求的字段有一个强类型约束。

虽然基本校验可以省下一部分，但是一些权限校验却带来了麻烦。

### 1.3、接口变动，维护与文档

RESTFul 接口的修改，都需要更新使用文档，比如接口地址变了，新增了一个接口，返回的字段变了，更新起来比较麻烦。

GraphQL 这个问题轻一点，因为接口地址一直都是同一个，新增接口或者修改接口，只需要在 query 里面在加一个即可。

> 但还是需要接口文档的，不然前端很难找到什么字段对应什么意思，并且前端还需要各个表里面有什么字段。

## 二、5 个不用 GraphQL 的理由

1. 迁移成本
2. 牺牲 Performance
3. 权限控制
4. 缓存能解决很多问题

### 2.1、迁移成本

老项目从 RESTFul 迁移到 GraphQL 的话，感觉意义不大，因为从前后端都需要进行改造。对于新项目可以尝试。

### 2.2、牺牲 Performance

对于前端可能写各种各样的查询条件出来（多层嵌套查询），SQL 查询的效率可能被大大降低。

> 对于前端人员有更高的要求，需要去判断哪些写法可能会导致 SQL 查询变慢。需要了解一些 数据库知识。

### 2.3、权限控制

RESTFul 一个接口一个地址，因此控制权限已有有成熟的解决方案，但是 GraphQL 只有一个地址（当然也可以配置多个，但是肯定不会像 RESTFul 一个功能一个地址），权限控制起来就麻烦多了。

### 2.4、缓存能解决很多问题

对于 RESTFul 来说，缓存是一个比较简单的事情 （可以针对接口地址来做缓存）。虽然 GraphQL 的缓存，有 Fackbook 的 DataLoader 来优化，但是如果想把优化这个事情自己来把控，这个就增加了更大的复杂度。

## 三、一些大牛的回答？

> **作者：尤雨溪**
>
> 时间：2016 年 3 月 1 号
>
> GraphQL 确实并没有『火起来』，我觉得是这么几个因素：
>
> 1. 要在前端爽爽地使用 GraphQL，必须要在服务端搭建符合 GraphQL spec 的接口，基本上是整个改写服务端暴露数据的方式。目前 FB 官方就只有一个 Node.js 的 reference implementation，其他语言都是社区爱好者自己搞的。另外，GraphQL 在前端如何与视图层、状态管理方案结合，目前也只有 React/Relay 这个一个官方方案。换句话说，如果你不是已经在用 **Node + React** 这个技术栈，引入 GraphQL 成本略高，风险也不小，这就很大程度上限制了受众。
> 2. GraphQL 的 field resolve 如果按照 naive 的方式来写，每一个 field 都对数据库直接跑一个 query，会产生大量冗余 query，虽然网络层面的请求数被优化了，但数据库查询可能会成为性能瓶颈，这里面有很大的优化空间，但并不是那么容易做。FB 本身没有这个问题，因为他们内部数据库这一层也是抽象掉的，**写 GraphQL 接口的人不需要顾虑 query 优化的问题**。
> 3. 这个事情到底由谁来做？GraphQL 的利好主要是在于前端的开发效率，但**落地却需要服务端的全力配合**。如果是小公司或者整个公司都是全栈，那可能可以做，但在很多前后端分工比较明确的团队里，要推动 GraphQL 还是会遇到各种协作上的阻力。这可能是没火起来的根本原因。
>
> 原文地址：https://www.zhihu.com/question/38596306/answer/137333431

这个回答有点过时了，毕竟是 3 年前的。 但是回答中的 第 2，第 3 点说到的问题，到现在还是一个值得思考的点。

## 四、参考文章

1. [《5 个用/不用 GraphQL 的理由》](https://www.jianshu.com/p/12dff5905cf6)

2. [《2019 GraphQL 学习指南》](https://juejin.im/post/5c3d54096fb9a049c04346db)
3. [《The state of GraphQL by Reddit》](https://blog.graphqleditor.com/the-state-of-graphql-by-reddit/)
