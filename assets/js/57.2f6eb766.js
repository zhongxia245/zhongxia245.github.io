(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{192:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[s._v("#")]),s._v(" 一、介绍")]),s._v(" "),a("p",[s._v("Nodejs 运行在 Chrome 的 JavaScript 运行时平台，通常称这个平台为 V8 引擎， 不管是 V8 引擎还是 Nodejs 都是单线程的方式运行的。 因此在多核心处理器中并不能发挥最大的性能。")]),s._v(" "),a("h2",{attrs:{id:"二、nodejs-的-cluster-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、nodejs-的-cluster-模块"}},[s._v("#")]),s._v(" 二、Nodejs 的 cluster 模块")]),s._v(" "),a("p",[s._v("Nodejs 内置的 Cluster 模块，支持生成多个工作线程来共享同一个 TCP 连接。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-cluster-运作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-cluster-运作流程"}},[s._v("#")]),s._v(" 2.1 cluster 运作流程")]),s._v(" "),a("ol",[a("li",[s._v("Cluster 创建一个 master 线程")]),s._v(" "),a("li",[s._v("根据你的需求，fork 出多个 server app （也称为工作线程）")]),s._v(" "),a("li",[s._v("线程之间通过 IPC 进行通讯")]),s._v(" "),a("li",[s._v("内置负载均衡来处理线程之间的压力【采用 Round-robin 算法进行负载均衡】")])]),s._v(" "),a("blockquote",[a("p",[s._v("使用 Round-robin 调度策略时， master.accepts() 会传入所有的连接请求，然后将相应的 TCP 请求分配给选中的工作线程。【同样使用 IPC 进行通讯】")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个最基本的例子")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cluster "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cluster'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" os "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'os'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" numCPUs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cpus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Master:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Let's fork as many workers as you have CPU cores")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" numCPUs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Worker:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Let's spawn a HTTP server")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (Workers can share any TCP connection.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  In this case its a HTTP server)")]),s._v("\n\n  http\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"_2-2-pm2-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-pm2-功能"}},[s._v("#")]),s._v(" 2.2 PM2 功能")]),s._v(" "),a("p",[s._v("pm2 做了一些封装，使得 nodejs 代码不需要变动,然后使用负载均衡部署。")]),s._v(" "),a("p",[s._v("pm2 还增加了很多功能，比如自动重启、后台运行、实时扩展集群、零停机更新、开机自启等等，具体可以看下官网。")]),s._v(" "),a("h2",{attrs:{id:"三、常用命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、常用命令行"}},[s._v("#")]),s._v(" 三、常用命令行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g pm2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 常用命令")]),s._v("\npm2 start ./bin/www --watch             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动express运用")]),s._v("\npm2 start app.js                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\npm2 start app.js --name ma-app          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动项目并指定项目名字")]),s._v("\npm2 list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示所有pm2进程")]),s._v("\npm2 stop app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止指定进程")]),s._v("\npm2 restart app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启指定进程")]),s._v("\npm2 reload app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#reload指定进程")]),s._v("\npm2 delete app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除进程")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志管理")]),s._v("\npm2 -h                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示所有的pm2 logs命令")]),s._v("\npm2 logs app_id                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打印对应id的日志")]),s._v("\npm2 logs app_id --err                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#仅打印错误日志")]),s._v("\npm2 logs --line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打印日志的行数")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《PM2 官方文档》"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://imweb.io/topic/57c8cbb27f226f687b365636",target:"_blank",rel:"noopener noreferrer"}},[s._v("《PM2 实用入门指南》"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/jaxu/p/5193643.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("《使用 PM2 将 Node.js 的集群变得更加容易》"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);