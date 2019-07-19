---
title: 使用 Prerender 实现纯前端页面的 SEO
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
