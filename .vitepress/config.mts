import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: true,
    },
  },

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
      { text: "Guide", link: "/guide/what-is-reeve", activeMatch: "/guide/" },
      {
        text: "Reference",
        link: "/reference/configuration",
        activeMatch: "/reference/",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "What is Reeve?", link: "/guide/what-is-reeve" },
            { text: "Getting Started", link: "/guide/getting-started" },
          ],
        },
        {
          text: "Configuration",
          items: [
            { text: "Task Domains", link: "/guide/task-domains" },
            { text: "Trusted Tasks", link: "/guide/trusted-tasks" },
            { text: "Regex", link: "/guide/regex" },
            { text: "Cron", link: "/guide/cron" },
          ],
        },
        {
          text: "Pipelines",
          items: [
            { text: "Writing Pipelines", link: "/guide/writing-pipelines" },
            { text: "Variables", link: "/guide/variables" },
            { text: "Conditions", link: "/guide/conditions" },
            { text: "Actions", link: "/guide/actions" },
            { text: "Templating", link: "/guide/templating" },
          ],
        },
        {
          text: "Development",
          collapsed: false,
          items: [
            {
              text: "Writing a Plugin",
              link: "/guide/writing-a-plugin",
            },
            {
              text: "Creating a Reeve Step",
              link: "/guide/creating-a-reeve-step",
            },
          ],
        },
        {
          text: "Config & API Reference",
          base: "/reference/",
          link: "configuration",
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Configuration", link: "/reference/configuration" },
            { text: "YAML Reference", link: "/reference/yaml-reference" },
            { text: "CLI", link: "/reference/cli" },
            {
              text: "Plugins",
              collapsed: false,
              base: "/reference/plugin-",
              items: [
                {
                  text: "Overview",
                  link: "overview",
                  docFooterText: "Plugins",
                },
                { text: "Consul", link: "consul" },
                { text: "Gitea / Forgejo", link: "gitea" },
                { text: "HC Vault", link: "hcvault" },
                { text: "Local", link: "local" },
                { text: "Web UI", link: "webui" },
              ],
            },
            {
              text: "Pipeline Steps",
              collapsed: false,
              base: "/reference/pipeline-step-",
              items: [
                {
                  text: "Overview",
                  link: "overview",
                  docFooterText: "Pipeline Steps",
                },
                { text: "Docker Build", link: "docker-build" },
                { text: "Docker CLI", link: "docker-cli" },
                { text: "Docker Deploy", link: "docker-deploy" },
                { text: "Docker Secrets", link: "docker-secrets" },
                { text: "Envsubst", link: "envsubst" },
                { text: "File Revision", link: "file-revision" },
                {
                  text: "Gitea / Forgejo Test Package",
                  link: "forgejo-test-package",
                },
                {
                  text: "Gitea / Forgejo Upload Package",
                  link: "forgejo-upload-package",
                },
                { text: "Git Select Tag", link: "git-select-tag" },
                { text: "Load Env File", link: "load-env-file" },
                {
                  text: "Node Get Package Version",
                  link: "node-get-package-version",
                },
                { text: "NPM CLI", link: "npm-cli" },
                { text: "NPM Publish", link: "npm-publish" },
                { text: "Reeve CLI", link: "reeve-cli" },
                { text: "SFTP", link: "sftp" },
                { text: "SSH", link: "ssh" },
              ],
            },
          ],
        },
      ],
    },

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
