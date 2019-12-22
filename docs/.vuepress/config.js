module.exports = {
  title: "zhongxia",
  description: "乾坤未定，你我皆是黑马",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  base: "/",
  plugins: ["@vuepress-reco/vuepress-plugin-back-to-top"],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  serviceWorker: true, // 阅读缓存进程
  // 缓存进程更新
  serviceWorker: {
    updatePopup: {
      message: "请更新文档内容",
      buttonText: "立即更新"
    }
  },
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: "Blog", link: "/post/" },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/about/" },
      {
        text: "GitHub",
        link: "https://github.com/zhongxia245",
        target: "_blank"
      }
    ],
    sidebar: "auto"
  }
};
