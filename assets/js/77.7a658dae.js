(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{209:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"服务器-mongodb-数据库定时备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器-mongodb-数据库定时备份"}},[s._v("#")]),s._v(" 服务器 MongoDB 数据库定时备份")]),s._v(" "),t("p",[s._v("个人项目学习使用，购买了一台阿里云服务器，并部署了几个小项目，数据库采用 MongoDB，为了避免服务器挂掉，数据丢失，因此对数据做一个定时备份。")]),s._v(" "),t("h2",{attrs:{id:"一、数据库备份实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、数据库备份实现"}},[s._v("#")]),s._v(" 一、数据库备份实现")]),s._v(" "),t("p",[s._v("定时备份大概分为几个步骤")]),s._v(" "),t("ol",[t("li",[s._v("导出线上 mongoose 数据, 并打成 tar 包")]),s._v(" "),t("li",[s._v("编写 shell 脚本，完成导出，打包操作")]),s._v(" "),t("li",[s._v("设置定时任务，每天凌晨 2 点备份数据")]),s._v(" "),t("li",[s._v("同步一份数据库数据到 OSS 上（这里用七牛）")])]),s._v(" "),t("h3",{attrs:{id:"_1、导出数据，打成-tar-包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、导出数据，打成-tar-包"}},[s._v("#")]),s._v(" 1、导出数据，打成 tar 包")]),s._v(" "),t("p",[s._v("导出数据虽然比较简单，但是为了避免出错，建议先在本地跑一下这个命令，然后在到服务器去运行。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -h 连接的数据库地址， -d 数据库名称，-o 导出路径， -u 用户名， -p 密码")]),s._v("\nmongodump -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27017 -d UserSystem -o ./backup -u demo -p demo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把数据库文件打包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zcvf ./UserSystem UserSystem.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ./UserSystem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_2、编写-shell-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、编写-shell-脚本"}},[s._v("#")]),s._v(" 2、编写 shell 脚本")]),s._v(" "),t("p",[s._v("每次进入服务器都需要执行导出命令，再打包，很麻烦，因此编写一个 shell 脚本。下次备份只需要执行脚本即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tasks/backup.sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("backUpFolder")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/zhongxia/backup\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份文件名带上日期信息，避免重名，并方便识别")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dateNow")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y_%m_%d_%H%M"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("backFileName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("egg_cnode_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dateNow")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入备份文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backUpFolder")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建备份目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backFileName")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出 dbName 数据库")]),s._v("\nmongodump -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27017 -d dbName -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backFileName")]),s._v(" -u demo -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123321'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩导出的数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zcvf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backFileName")]),s._v(".tar.gz "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backFileName")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件夹，只保留备份的压缩包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backFileName")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("写好了脚本，这里执行即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" backup.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可能存在的问题，你登录的用户没有操作备份文件夹的权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里只是举个最简单粗暴的解决方案")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /home/zhongxia/backup\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_3、设置定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、设置定时任务"}},[s._v("#")]),s._v(" 3、设置定时任务")]),s._v(" "),t("p",[s._v("备份文件，还需要每次手动进入服务器，执行 shell 脚本还是麻烦，并且还会经常忘记。")]),s._v(" "),t("p",[s._v("因此设置一个定时任务，自己跑，省时省力。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置定时任务，执行命令会进去一个配置文件中去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定时配置文件可能有默认的一些参考，可能是空的。（我机器上是空的）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加上一条定时任务")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分 小时 日 月 星期几 command")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每天两点定时备份egg_cnode 数据库")]),s._v("\n00 02 ** ** ** "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /home/zhongxia/task/backup.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("blockquote",[t("p",[s._v("00 02 ** ** ** 表示 每天凌晨 2 天执行， 这个不清楚可以网上搜索下 crontab 如何配置，这里就不多介绍了，因为平时用的少，也不太熟悉，不误人子弟了。")])]),s._v(" "),t("h3",{attrs:{id:"_4、上传到七牛"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、上传到七牛"}},[s._v("#")]),s._v(" 4、上传到七牛")]),s._v(" "),t("p",[s._v("数据库备份，本来就是怕服务器挂掉了，数据没有了。现在备份出来的数据还都存在服务器上。这样比没有备份，好不到哪里去，五十步笑百步。")]),s._v(" "),t("p",[s._v("因此可以上传到 OSS， 或者其他可以存储的地方, 这里以 七牛为例。")]),s._v(" "),t("h4",{attrs:{id:"_4-1、编写脚本，上传文件到七牛私有空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、编写脚本，上传文件到七牛私有空间"}},[s._v("#")]),s._v(" 4.1、编写脚本，上传文件到七牛私有空间")]),s._v(" "),t("p",[s._v("作为一个前端，JS 是最拿手的了，那么就用 node 来上传七牛吧。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// upload_qiniu.js")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" qiniu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qiniu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置你的空间名称，AK 和 SK， 这个在七牛控制台的密钥管理可以找到")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bucket "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<bucket>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" accessKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<accessKey>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" secretKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<secretKey>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mac "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("qiniu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mac")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("accessKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" secretKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" options "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bucket\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" putPolicy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("qiniu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PutPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" uploadToken "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" putPolicy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uploadToken")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("qiniu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从环境变量获取需要备份的文件名和目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这么写，是为了方便在 shell 脚本中执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" params "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fileName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".tar.gz"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" localFile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" fileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" formUploader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("qiniu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("form_up"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FormUploader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nformUploader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("putFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uploadToken"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" localFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("respErr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  respBody"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  respInfo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("respErr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" respErr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("respInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statusCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("respBody"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("respInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statusCode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("respBody"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])]),t("h4",{attrs:{id:"_4-2、shell-脚本增加一个上传功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、shell-脚本增加一个上传功能"}},[s._v("#")]),s._v(" 4.2、shell 脚本增加一个上传功能")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ... 上面代码省略, 把命令添加在脚本最后面")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传七牛")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backFileName")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$backUpFolder")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" node /home/zhongxia/task/upload_qiniu.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_4-3、验证一下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、验证一下"}},[s._v("#")]),s._v(" 4.3、验证一下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跑下脚本，看是否可行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" backup.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果没有报错，并且七牛控制台也可以看到，那就 ok 了。")]),s._v(" "),t("h2",{attrs:{id:"二、补充内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、补充内容"}},[s._v("#")]),s._v(" 二、补充内容")]),s._v(" "),t("h3",{attrs:{id:"_1、创建-mongo-用户去备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建-mongo-用户去备份"}},[s._v("#")]),s._v(" 1、创建 mongo 用户去备份")]),s._v(" "),t("p",[s._v("可以创建一个"),t("strong",[s._v("只有读写要备份数据库")]),s._v("的用户，去备份数据。主要还是为了控制用户的权限。")]),s._v(" "),t("blockquote",[t("p",[s._v("个人项目的话，怎么开心怎么来就行。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 root")]),s._v("\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",pwd:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123123123'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nshow databases"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nuse UserSystem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  创建用户")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'backup_user'")]),s._v(",pwd:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(",roles:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'readWrite'")]),s._v(",db:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'UserSystem'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  退出重新登录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\nmongo -u backup_user -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"_2、备份多个数据库，建议编写多个脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、备份多个数据库，建议编写多个脚本"}},[s._v("#")]),s._v(" 2、备份多个数据库，建议编写多个脚本")]),s._v(" "),t("p",[s._v("备份多个数据库为什么要写多个脚本呢，一个脚本处理所有，不行吗？当然是可以的。")]),s._v(" "),t("p",[s._v("不过写多个脚本，可以避免有一个数据库备份出错，所有的数据库都出错的原因。当然定时任务也可以各自配置，互相不影响。")]),s._v(" "),t("h3",{attrs:{id:"_3、七牛的私有空间文件如何下载？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、七牛的私有空间文件如何下载？"}},[s._v("#")]),s._v(" 3、七牛的私有空间文件如何下载？")]),s._v(" "),t("p",[s._v("使用七牛提供的默认临时域名，无法下载私有空间的文件。需要绑定一个自定义域名。")]),s._v(" "),t("p",[s._v("如何绑定域名，看 "),t("a",{attrs:{href:"https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name",target:"_blank",rel:"noopener noreferrer"}},[s._v("七牛官方文档"),t("OutboundLink")],1),s._v(" ， 如何设置 DNS 解析，可以去 "),t("a",{attrs:{href:"https://www.dnspod.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DNSPod"),t("OutboundLink")],1),s._v(" 的管理控制台=》DNS 管理 来添加一条 CNAME 记录解析。")]),s._v(" "),t("p",[s._v("之后就可以登录七牛控制台直接下载备份的数据库文件了。")]),s._v(" "),t("h3",{attrs:{id:"_4、如何把备份文件导入-mongo-数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何把备份文件导入-mongo-数据库"}},[s._v("#")]),s._v(" 4、如何把备份文件导入 mongo 数据库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 tar 包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf UserSystem.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把当前目录的 UserSytem备份文件，导出到 user-system 数据库中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用方式跟导出数据库文件一样")]),s._v("\nmongorestore -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27017 -d user-system ./UserSystem -u demo -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123123")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("blockquote",[t("p",[s._v("导出导入单表的话，可以查下 "),t("code",[s._v("mongoexport")]),s._v(" "),t("code",[s._v("mongoimport")]),s._v(" 这两个命令。")])]),s._v(" "),t("h3",{attrs:{id:"_5、如何把本地文件上传到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、如何把本地文件上传到服务器"}},[s._v("#")]),s._v(" 5、如何把本地文件上传到服务器")]),s._v(" "),t("p",[s._v("七牛下载下来的数据库备份在本地，需要先上传到服务器才能备份。")]),s._v(" "),t("blockquote",[t("p",[s._v("具体可以看下 "),t("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-scp.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux scp 命令"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从本地复制到服务器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_username@remote_ip:remote_folder\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从服务器到本地")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就是把scp 后面的两个参数换下位置而已")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" remote_username@remote_ip:remote_folder /home/space/music\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你服务器的端口不是 22，而是9999")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v(" local_file remote_username@remote_ip:remote_folder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);