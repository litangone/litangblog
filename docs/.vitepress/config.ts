import { defineConfig, HeadConfig } from "vitepress";
import { RssPlugin, RSSOptions } from "vitepress-plugin-rss";


import markdownImagePlugin from "./markdownPlugin";


export default defineConfig({
  title: "李唐的独立博客",
  description: "litang.one",
  cleanUrls: true,
  appearance: false,
  ignoreDeadLinks: true,
  base: "/",
  buildEnd: rss,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownImagePlugin);
    },
  },
  vite: {
    // plugins: [RssPlugin(RSS)],
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "科技,旅行,生活方式,程序员,互联网,自媒体,摄影师,编程,前端,前端工程师,李唐,独立博客,LITANG,Vlog,YouTuber",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "我叫李唐，博客内容主题涉及科技、数码、互联网、摄影、旅行、生活方式等领域。",
      },
    ],
  ],
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    head.push([
      "meta",
      { property: "og:title", content: pageData.frontmatter.title },
    ]);
    head.push([
      "meta",
      { property: "og:description", content: pageData.frontmatter.title },
    ]);

    return head;
  },
  themeConfig: {
    logo: "./logo.svg",
    nav: [
      { text: "LITANG™", link: "https://youtube.com/" },
      {
        text: "视频",
        items: [
          { text: "YouTube", link: "https://youtube.com/" },
          { text: "哔哩哔哩", link: "https://space.bilibili.com/" },
        ],
      },
      { text: "关于", link: "https://github.com/litangone" },
    ],
    socialLinks: [
      { icon: "twitter", link: "https://x.com/" },
      { icon: "github", link: "https://github.com/litangone" },
    ],

    outlineTitle: "本文导览",
    lastUpdatedText: "最后更新时间",
    footer: {
      message: `Powered By <a href="https://github.com/litangone">VitePress</a>`,
      copyright: `Copyright © 2024 | <a href="https://litang.one/">LUOLEI.ORG</a><br/>
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" class="d-none d-lg-inline-block">粤ICP备xxxxx号</a>
      `,
    },
  },
});
