---
title: 1907 - Prerender入门实践
date: 2019-07-20 06:02:06
description: ""
---

这里主要讲实现一个简单案例的 实现步骤

1. 启动 Prerender 的 node 服务
2. 配置 nginx 代理转发
3. 测试是否配置成功

需要的环境：

1. centos 云服务器（本地机器也可以）
2. nginx

## 一、启动 Prerender 的 Node 服务

```bash
git clone https://github.com/prerender/prerender.git
cd prerender
npm install
node server.js

# 这里建议使用 pm2 来启动
pm2 start server.js --name prerender
```

如何在 centos 下 安装 Chrome 浏览器 ，具体可以看这个文章 [《INSTALLING GOOGLE CHROME ON CENTOS, AMAZON LINUX, OR RHEL》](https://intoli.com/blog/installing-google-chrome-on-centos/)

```bash
# 如果不想看文章，可以直接用这个命令( CentOS Linux release 7.5.1804 (Core) 下亲自成功)
curl https://intoli.com/install-google-chrome.sh | bash
```

如果是要跑到 docker 上，请看文章末尾 [prerender run in docker](#docker)。

## 配置 Nginx 转发

大概意思就是 nginx 判断 ua 是否携带爬虫的标识，是则转发的 prerender 服务。

> nginx 配置，可以参考：https://gist.github.com/thoop/8165802
>
> 打不开地址，则可以参考下面这个

```bash
server {
        listen       80;
        server_name  localhost;

        location / {
            root   /usr/local/etc/nginx/html;
            index  index.html index.htm;

            set $prerender 0;
            if ($http_user_agent ~* "googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator") {
                set $prerender 1;
            }
            if ($args ~ "_escaped_fragment_") {
                set $prerender 1;
            }
            if ($http_user_agent ~ "Prerender") {
                set $prerender 0;
            }
            if ($uri ~* "\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)") {
                set $prerender 0;
            }

            if ($prerender = 1) {
                set $prerender "0.0.0.0:10001";
                rewrite .* /$scheme://$host$request_uri? break;
                proxy_pass http://$prerender;
            }
        }
   }
```

## 测试结果

```bash
# 先尝试正常访问
curl  http://localhost/index.html

# 在加上百度爬虫的 UA 访问
curl -A Baiduspider http://localhost/index.html
```

## 补充一个 Prerender Run in Docker

<span id="docker"></span>

因为实现上面这个案例的时候，实用的是自己的阿里云服务器（centos6.5），因此直接采用 curl 的安装方式，然后把项目跑起来就可以了。

但是在公司内使用的时候，需要使用 docker 进行部署，因此需要进行以下的一些修改。

### 1、Docker 内安装 chrome 浏览器

```bash
# node-chrome-10.16
FROM node:10.16-alpine

ENV APP_PATH /app
WORKDIR ${APP_PATH}

# Change mirrors to tsinghua
RUN echo http://mirrors.tuna.tsinghua.edu.cn/alpine/edge/main > /etc/apk/repositories && \
    echo http://mirrors.tuna.tsinghua.edu.cn/alpine/edge/community >> /etc/apk/repositories && \
    echo http://mirrors.tuna.tsinghua.edu.cn/alpine/edge/testing >> /etc/apk/repositories && apk update

# Setting timezone
RUN apk add tzdata openssh-client git
RUN cp -r -f /usr/share/zoneinfo/Hongkong /etc/localtime

# Installs cnpm
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# Installs latest Chromium (73) package.
RUN apk add --no-cache \
      curl \
      make \
      gcc \
      g++ \
      python \
      linux-headers \
      binutils-gold \
      gnupg \
      libstdc++ \
      udev \
      chromium=~73.0.3683.103 \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ttf-freefont \
      wqy-zenhei

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Puppeteer v1.12.2 works with Chromium 73.
RUN yarn add puppeteer@1.12.2

RUN apk del --no-cache make gcc g++ python binutils-gold gnupg libstdc++

# Add user so we don't need --no-sandbox.
#RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
#    && mkdir -p /home/pptruser/Downloads /app \
#    && chown -R pptruser:pptruser /home/pptruser \
#    && chown -R pptruser:pptruser /app
#
## Run everything after as non-privileged user.
#USER pptruser

CMD ['/bin/sh']
```

### 2、修改 prerender 的代码

```javascript
#!/usr/bin/env node
var prerender = require("./lib")

// 需要指定chromeLocation，否则会报 unable to find Chrome install. Please specify with chromeLocation
// 需要加上 chromeFlags ，否则会报 Chrome connection closed... restarting Chrome
// https://github.com/prerender/prerender/issues/450
var server = prerender({
  chromeLocation: "/usr/bin/chromium-browser",
  chromeFlags: [
    "--no-sandbox",
    "--headless",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "--hide-scrollbars",
  ],
})

server.use(prerender.sendPrerenderHeader())
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags())
server.use(prerender.httpHeaders())

server.start()
```
