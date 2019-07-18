# 前后端分离的项目如何进行 SEO 优化

> 2019-07-18 17:59:22

前后端分离能带来很多的好处，比如前端不需要再安装各种后端的环境，不需要跑后端项目，遇到报错也不需要再跑去找后端小哥哥定位问题了。 当然也带来了一些问题，比如页面需要 SEO，这个就有点小尴尬了。

当然想要 SEO，那就可以让它有 SEO 的功能。

> 比较完美的解决方案是做成 SSR，但是比较麻烦。 这里不讨论 SSR 怎么实现。

## 一、原理概述

先讲解一些，纯前端项目如何拥有 SEO 的效果。

### 1.1、SEO 是什么？

`SEO` 是英文 `Search Engine Optimization` 的缩写，中文译为“**搜索引擎优化**”。

为什么需要搜索引擎优化呢？ 网站的数量非常多，但是你又不想去记住，什么问题应该去什么网站。 这个时候搜索引擎就可以帮你了，比如（谷歌，bing，百度）。 你输入你想要了解的内容，然后就出现一系列相关的内容了。

这些相关的一堆内容哪来的呢？是搜索引擎的爬虫一个一个爬回来并存起来。然后经过一系列的数据处理，最终就成了我们搜索某个关键字后，给我们展现的内容了。（有兴趣可以找一些相关文章深入了解一下）。

搜索引擎的爬虫也是会挑食的，不是什么东西（网站）都吃（爬）。因此 SEO 就来了，把你的网站做成爬虫想要的口味。

### 1.2、为什么纯前端项目不利于 SEO？

现在 `React`，`Vue` 非常流行，页面都是通过 js 渲染生成的。 意思就是，爬虫来的时候，发现爬到的页面时这样的。

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <div id="app">loading...</div>
  </body>
</html>
```

> 页面由 js 生成，在注入到 `<div id="app"></div>` 中，因此爬虫访问到的是空的页面。
>
> 这里得说明一下，google 的爬虫是会抓取这种 JS 渲染的页面的，但是百度的爬虫，不吃这一套。
>
> 因此在国内，纯前端项目 SEO 效果就非常差了。

爬虫一看爬取的内容，什么毛线网站的，什么有营养的东西都没有，不吃，吐掉了。因此你的页面就不会被搜索引擎收录了，其他人在搜索内容，也找不到你的内容了。

### 1.3、如何解决这个问题呢？

解决这个问题就投其所好呗。

既然百度爬虫不抓取 `CSR`（**Client Server Render 客户端渲染**，就是请求完 JS 渲染出页面的形式） 页面。那么把 JS 渲染后的页面，返回给爬虫咯。

处理步骤：

1. 爬虫/用户 访问网站
2. nginx 判断是否为爬虫，因为爬虫会带着『我是爬虫』（比如百度爬虫会带着 Baiduspider）的标识。（nginx 如何配置，可以找找资料，这里就不想洗讲了）
3. 不是爬虫，用户访问则正常打开网站
4. 是爬虫，就返回 CSR 渲染后的页面内容给它，满足它

这里怎么拿到 CSR 渲染后的页面，我们拧出来单独讲。

## 二、获取 CSR 渲染后的页面内容

上面我们已经了解到，怎么才能满足爬虫，需要拿到 CSR 渲染后的页面。

**CSR 的页面，也称 动态页面**，就是页面的内容，可能是根据 JS 请求接口，拿到数据，在生成的页面。

动态页面，使用常规的爬虫，是爬取不到渲染后的内容的。 这里需要用到一个东西， google 的 **puppeteer (无界面浏览器) **，就是一个没有页面的浏览器。

让这个 Puppeteer 打开我们的 CSR 页面，然后等它加载完成页面，再把 HTML 来出来给爬虫。

### 2.1、使用 prerender 来获取 CSR 页面内容

这个库已经帮你封装了以下几个部分。

1. 获取页面地址
2. 使用 puppeteer 打开 页面
3. 页面加载完成后，返回 html 的内容

> 解释一下：pretender 使用的是 `chrome-remote-interface` 这个东西去打开页面，获取 JS 渲染后的 HTML 页面的。
>
> `chrome-remote-interface` 可以理解为 `puppeteer` 中的某个功能，简化版。

运行下面这个命令，可以尝试 prerender 的使用。

```bash
# Run these commands
git clone https://github.com/prerender/prerender.git
cd prerender
npm install
node server.js
```

详细了解，看这个文档 https://prerender.io/documentation 。

启动起来 Prerender 服务后，再配置 nginx 识别爬虫，并转发到 Prerender 服务。

```bash
location ^~ /webpath/ {
  set $prerender 0;
  if ($http_user_agent ~* "baiduspider|twitterbot|facebookexternalhit|rogerbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator") {
      set $prerender 1;
  }

  # 谷歌推荐的配置方式,可要可不要
  if ($args ~ "_escaped_fragment_") {
      set $prerender 1;
  }

  if ($prerender = 1) {
      # 官方推荐通过$prerender变量来进行跳转来解决NGINX缓存
      set $prerender "127.0.0.1:3000";

      rewrite .* /$scheme://$host$request_uri? break;
      proxy_pass http://$prerender;
  }

  # 此处，我们假设主页面html为 /index.html
  try_files $uri$args /index.html;
}
```

### 2.2、如果你不用 prerender 呢？

如果这个是一个面试题，你说了 `prerender` 可以实现，面试官问你，不用 `prerender` 你能实现吗？

那是必须能实现的，也就是实现 prerender 的功能即可。 那么我们可以用 prerender 一样的 `chrome-remote-interface` 或者 `puppeteer` 来获取 CSR 页面的内容都是可以的。

再实现这个的时候，顺便考虑一个点，你是等爬虫来了再现场去抓取页面，还是提前抓取存起来呢？

### 2.3、预先抓取页面 OR 实时抓取页面

各有优劣，具体选择看情况，也可以两者结合使用。

预先抓取

- 可以快速返回给爬虫
- 麻烦，需要实现缓存这一块（怎么存储，多久更新缓存，未命中缓存怎么处理）

实时抓取

- 爬虫每次拿到都是最新的
- 生成 CSR 页面速度可能很慢

### 三、参考文章

- [前端后端分离，怎么解决 SEO 优化的问题呢？](https://www.zhihu.com/question/52235652)
- [Prerender 预渲染优化 SEO](<[http://codingfishman.github.io/2016/05/06/prerender%E9%A2%84%E6%B8%B2%E6%9F%93%E4%BC%98%E5%8C%96SEO/](http://codingfishman.github.io/2016/05/06/prerender预渲染优化SEO/)>)
