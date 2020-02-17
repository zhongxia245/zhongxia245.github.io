(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{178:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"一、什么是工程化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是工程化"}},[a._v("#")]),a._v(" 一、什么是工程化")]),a._v(" "),t("blockquote",[t("p",[a._v("所有能降低成本，并且能提高效率的事情的总称为工程化。")])]),a._v(" "),t("p",[a._v("对于目前（2018-12-03 23:21:22）的前端开发，需要了解以下几个内容")]),a._v(" "),t("ol",[t("li",[a._v("主流框架 React 、 Vue 等")]),a._v(" "),t("li",[a._v("主流构建工具 Webpack")]),a._v(" "),t("li",[a._v("版本控制工具 Git")]),a._v(" "),t("li",[a._v("自动化部署 GitLab + Ci")]),a._v(" "),t("li",[a._v("Eslint + 约定代码规范")]),a._v(" "),t("li",[a._v("Nodejs")]),a._v(" "),t("li",[a._v("TypeScript 了解一下")])]),a._v(" "),t("h2",{attrs:{id:"二、一路过来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、一路过来"}},[a._v("#")]),a._v(" 二、一路过来")]),a._v(" "),t("h3",{attrs:{id:"_2-1-代码层面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-代码层面"}},[a._v("#")]),a._v(" 2.1 代码层面")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("jquery")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" react\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("14 年开始接触前端，刚开始就是使用 jquery + 前端三板斧（HTML+CSS+JS），上面就是干。")]),a._v(" "),t("p",[a._v("16 年初，后面就直接开始使用 React 了， 中间还有一些 MVC 框架， backbone，ember，angular 这些了解一点，但是没有实际的项目经验。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-模块化层面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-模块化层面"}},[a._v("#")]),a._v(" 2.2 模块化层面")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("script 引入 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("》 requireJs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("seajs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("grunt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("gulp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" parcel\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("刚开始代码都是用 script 引入，然后一个项目，引入十几个 js 文件， requrejs 只有在自己的小项目里面用户， grunt 和 gulp 工作中用的就是用来处理 "),t("code",[a._v("css预处理，图片压缩，代码压缩，雪碧图，上传七牛，svg处理，文件hash处理）")]),a._v("，后面框架优化处理，统一使用 webpack 来进行处理。")]),a._v(" "),t("h3",{attrs:{id:"_2-3-自动化部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-自动化部署"}},[a._v("#")]),a._v(" 2.3 自动化部署")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("代码 SVN 管理，手动打包代码，生成到 window server 服务器，用 IIS 进行部署")]),a._v(" "),t("blockquote",[t("p",[a._v("前端 jquery / flex3，后端.NET")])])]),a._v(" "),t("li",[t("p",[a._v("代码 SVN 管理，运维同学通过 jenkins 拉取代码，进行部署")]),a._v(" "),t("blockquote",[t("p",[a._v("此时已经用 react，后端 java")])])]),a._v(" "),t("li",[t("p",[a._v("代码 GitLab 管理，前端使用 CI + docker + k8s 自动化打包上线")])])]),a._v(" "),t("h3",{attrs:{id:"_2-4-前后端分离的历程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-前后端分离的历程"}},[a._v("#")]),a._v(" 2.4 前后端分离的历程")]),a._v(" "),t("p",[a._v("有合在一起的开发经历，也有分开后的开发经历。")]),a._v(" "),t("p",[a._v("如果项目的页面都很简单，没有什么交互，可以合在一起开发，用模板渲染，对 SEO 有好处，项目维护也还行。")]),a._v(" "),t("p",[a._v("如果项目交互很多，类似后台管理系统，商品购买的流程，有比较多的交互，则前后端分离开发会舒服点。")]),a._v(" "),t("p",[t("strong",[a._v("前后端分离后，请求接口跨域问题如何解决？")]),a._v("\n如果开发的时候分开，部署的时候合在一起")]),a._v(" "),t("ol",[t("li",[a._v("nginx 代理")]),a._v(" "),t("li",[a._v("webpack-dev-server proxy 代理")]),a._v(" "),t("li",[a._v("关闭浏览器安全沙箱\n"),t("blockquote",[t("p",[a._v("这种方式会携带 cookie，对需要携带 cookie 的友好， 简单粗暴. 仅仅使用于本地开发跨域处理\n可以参考：https://www.cnblogs.com/zhongxia/p/5416024.html")])])]),a._v(" "),t("li",[a._v("后端 CROS\n"),t("blockquote",[t("p",[a._v("这种方式需要后端支持, 如果后面部署在一起，加这个就没有必要。")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);