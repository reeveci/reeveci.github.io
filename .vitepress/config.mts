import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Reeve CI / CD",
  description: "Extensible open source CI / CD solution",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Reeve CI / CD" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Reeve CI / CD | Extensible open source CI / CD solution",
      },
    ],
    ["meta", { property: "og:url", content: "https://reeveci.github.io" }],
    // ["meta", { property: "og:image", content: "https://reeveci.github.io/social.png" }],
  ],

  themeConfig: {
    logo: "/favicon.ico",

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/reeveci/reeveci.github.io/edit/main/:path",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/what-is-reeve" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Reeve?", link: "/what-is-reeve" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License",
      copyright:
        "Copyright © 2023-present <a href='https://github.com/2manyvcos'>Aaron Burmeister</a>",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/reeveci" },
      { icon: "docker", link: "https://hub.docker.com/u/reeveci" },
    ],
  },

  sitemap: {
    hostname: "https://reeveci.github.io",
  },
});
