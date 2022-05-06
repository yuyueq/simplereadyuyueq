import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://yuyueq.github.io/simpleread",

  author: {
    name: "Yuyueq",
    url: "https://www.yuyueq.cn",
  },

  themeConfig: {
    pure:true,
  },
  themeColor: {
    blue: "#2196f3",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo3.svg",

  repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag","Word", "ReadingTime"],

  blog: {
    description: "一个后端开发者",
    intro: "/README.md",
    medias: {
      GitHub: "https://github.com/yuyueq",
      Gitee: "https://gitee.com/yuyueq",
      Dingding: "https://im.dingtalk.com/",
      Email: "https://3289705398@qq.com/",
      Gmail: "https://dwxfrank@gmail.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    search: {
      locales: {
        "/": {
          placeholder: "搜索"
        },
      },
    },

    // 你也可以使用 Waline
    comment: {
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
      comment: false
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
