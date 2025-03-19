// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  pageSidebar: [
    {type: "doc", id: "introduction", label: "Introduction"},
    {
      type: "category",
      label: "Setup Guides",
      collapsible: true,
      collapsed: false,
      items: [
        {type: "doc", id: "local-setup"},
        {type: "doc", id: "aws-setup"},
      ],
    },
    {
      type: "category",
      label: "Bot API",
      collapsible: true,
      collapsed: false,
      items: [
        {type: "doc", id: "bot/api-info", label: "Authentication"},
        {type: "doc", id: "bot/auth-controller-register", label: "Create a new user", className: "api-method post"},
        {type: "doc", id: "bot/api-key-controller-create-api-key", label: "Create API key", className: "api-method post"},
        {type: "doc", id: "bot/api-key-controller-list-api-keys", label: "List API keys", className: "api-method post"},
        {type: "doc", id: "bot/api-key-controller-revoke-api-key", label: "Revoke API key", className: "api-method delete"},
        {type: "doc", id: "bot/bot-controller-create-bot", label: "Create bot", className: "api-method post"},
        {type: "doc", id: "bot/bot-controller-get-bot", label: "Retrieve bot", className: "api-method get"},
        {type: "doc", id: "bot/bot-controller-leave-call", label: "Remove Bot From Call", className: "api-method post"},
        {type: "doc", id: "bot/bot-controller-get-transcript", label: "Retrieve transcript", className: "api-method get"},
      ],
    },
    {
      type: "category",
      label: "Meeting Bots Guide",
      collapsible: true,
      collapsed: false,
      items: [
        {type: "doc", id: "google-bot", label: "Google Bot"},
        {type: "doc", id: "zoom-bot", label: "Zoom Bot"},
        {type: "doc", id: "microsoft-teams-bot", label: "Microsoft Teams Bot"},
      ],
    },
  ],
  openApiSidebar: [
    {
      type: "category",
      label: "  ",
      link: {
        type: "generated-index",
        title: "Bot API",
        description:
          "Using this API, users can manage bots for meetings. The API provides endpoints for creating, configuring, and controlling bots to assist with meeting automation and management.",
        slug: "/category/bot"
      },
      items: require("./docs/bot/sidebar.js")
    }
  ]
};

export default sidebars;