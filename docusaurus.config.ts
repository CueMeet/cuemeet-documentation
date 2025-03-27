// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "CueMeet",
  tagline: "Only OpenSource Meeting Bot You Can't Recall",
  url: "https://docs.cuemeet.ai",
  baseUrl: "/cuemeet-documentation/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CueMeet",
  projectName: "cuemeet-documentation",
  deploymentBranch: "gh-pages",
  githubHost: "github.com",
  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docItemComponent: "@theme/ApiItem",
          routeBasePath: "docs",
          path: "docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "CueMeet",
        logo: {
          alt: "CueMeet Logo",
          src: "img/logo.png",
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "CueMeet",
            items: [
              {
                label: "Website",
                href: "https://cuemeet.ai",
              },
              {
                label: "Github",
                href: "https://github.com/CueMeet",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/55FbAHA9",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "CueCard",
            items: [
              {
                label: "Website",
                href: "https://cuecard.ai",
              },
              {
                label: "Github",
                href: "https://github.com/CueCard-AI",
              },
            ],
          },
        ],
        copyright: `Built with ❤️ by <a href="https://cuecard.ai" target="_blank" rel="noopener noreferrer">CueCard.ai</a>, empowering open-source innovation! 🚀`,
      },
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
        {
          highlight: "dart",
          language: "dart",
          logoClass: "dart",
        },
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "c",
          language: "c",
          logoClass: "c",
        },
        {
          highlight: "objective-c",
          language: "objective-c",
          logoClass: "objective-c",
        },
        {
          highlight: "ocaml",
          language: "ocaml",
          logoClass: "ocaml",
        },
        {
          highlight: "r",
          language: "r",
          logoClass: "r",
        },
        {
          highlight: "swift",
          language: "swift",
          logoClass: "swift",
        },
        {
          highlight: "kotlin",
          language: "kotlin",
          logoClass: "kotlin",
        },
        {
          highlight: "rust",
          language: "rust",
          logoClass: "rust",
        },
      ],
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',

      //   indexName: 'YOUR_INDEX_NAME',

      //   contextualSearch: true,
      //   replaceSearchResultPathname: {
      //     from: '/docs/',
      //     to: '/',
      //   },
      //   searchParameters: {},
      //   searchPagePath: 'search',
      //   insights: false,
      // },
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          openapi: {
            specPath: "openapi.yaml",
            outputDir: "docs/openapi",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en"],
      }),
    ],
  ],
};

export default async function createConfig() {
  return config;
}
