import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "bot/api-info",
    },
    {
      type: "category",
      label: "App",
      link: {
        type: "doc",
        id: "bot/app",
      },
      items: [
        {
          type: "doc",
          id: "bot/app-controller-get-health",
          label: "AppController_getHealth",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Auth",
      link: {
        type: "doc",
        id: "bot/auth",
      },
      items: [
        {
          type: "doc",
          id: "bot/auth-controller-register",
          label: "AuthController_register",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ApiKey",
      link: {
        type: "doc",
        id: "bot/api-key",
      },
      items: [
        {
          type: "doc",
          id: "bot/api-key-controller-create-api-key",
          label: "ApiKeyController_createApiKey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bot/api-key-controller-list-api-keys",
          label: "ApiKeyController_listApiKeys",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bot/api-key-controller-revoke-api-key",
          label: "ApiKeyController_revokeApiKey",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Bot",
      link: {
        type: "doc",
        id: "bot/bot",
      },
      items: [
        {
          type: "doc",
          id: "bot/bot-controller-create-bot",
          label: "BotController_createBot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bot/bot-controller-get-bot-list",
          label: "BotController_getBotList",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "bot/bot-controller-leave-call",
          label: "BotController_leaveCall",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bot/bot-controller-get-bot",
          label: "BotController_getBot",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
