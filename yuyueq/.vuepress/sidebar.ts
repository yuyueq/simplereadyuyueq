import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig(


    {
        "/guide/":[
            {
                text: "开始吧",
                icon: "strong",
                prefix: "",
                // collapsable: true,
                children: [""],
            },
            {
                text: "Java",
                icon: "java",
                prefix: "java/",
                collapsable: true,
                children: ["hashmapjilu",
                    "mianshiwenti1",
                    "mianshiwenti2",
                    "mianshiwenti3"],
            },
            {
                text: "SQL",
                icon: "mysql",
                prefix: "sql/",
                collapsable: true,
                children: ["sqlhanshuwenti",
                    "mysqlshizhan",
                    "centosanzhuangmysql"],
            },
            {
                text: "资源",
                icon: "workingDirectory",
                prefix: "ziyuan/",
                collapsable: true,
                children: ["kaifaziyuan","changyongziyuan"],
            },
        ],


        "/posts/":[
            {
                text: "个人经历",
                icon: "people",
                prefix: "article/",
                // collapsable: true,
                children: [""],
            },
        ]
    }
);
