import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "文章", icon: "creative", link: "/guide/" },

  /*{
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },*/
  {
    text: "旧版文档",
    icon: "note",
    link: "https://yuyueq.github.io/simpleread",
  },
  { text: "关于我", icon: "people", link: "/posts/article/" },
]);
