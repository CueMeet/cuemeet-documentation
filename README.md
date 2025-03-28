<div align="center">
  <img src="https://i.postimg.cc/FRLZLSSF/Banner.png" alt="Meeting Bots Control Panel Banner" />
  <h1>CueMeet Documentation</h1>
</div>

---
## Links to CueMeet Repositories

You can explore all our repositories for additional tools and integrations:

<ul>
  <li><a href="https://github.com/CueMeet/cuemeet-documentation" target="_blank">CueMeet Docs</a></li>
  <li><a href="https://github.com/CueMeet/Meeting-Bots-Control-Panel" target="_blank">CueMeet Control Panel</a></li>
  <li><a href="https://github.com/CueMeet/cuemeet-google-bot" target="_blank">Google Meet Bot</a></li>
    <li><a href="https://github.com/CueMeet/cuemeet-teams-bot" target="_blank">Ms Teams Bot</a></li>
    <li><a href="https://github.com/CueMeet/cuemeet-zoom-bot" target="_blank">Zoom Meet Bot</a></li>
</ul>

---

[![License](https://img.shields.io/badge/license-GPL%203.0-blue.svg)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.7.0-blue)](https://docusaurus.io/)
[![Node.js](https://img.shields.io/badge/Node.js-20.11.0-green)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Available-blue)](https://www.docker.com/)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-4.3.4-orange)](https://www.openapis.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-Package%20Manager-blue)](https://yarnpkg.com/)
[![Community](https://img.shields.io/badge/Community-Supported-green)](SUPPORT.md)

This directory contains the documentation website built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Getting Started

To work with the documentation locally using Docker, you'll docker or compatible tool installed on your system.

1. Install dependencies:
```bash
docker build -t cue-docs .
```
2. Start the development server:
```bash
docker run -p 3000:3000 cue-docs
```


To work with the documentation locally, you'll need Node.js installed on your system.

1. Install dependencies:
```bash
yarn install
```

2. Start the development server:
```bash
yarn start
```

This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the static website
- `npm run serve` - Serve the built website locally
- `npm run deploy` - Deploy the site to production
- `npm run clear` - Clear the local build cache

## Project Structure

```
documentation/
├── docs/            # Documentation markdown files
├── src/             # React components and pages
├── static/          # Static files like images
├── openapi.yaml     # OpenAPI specification
└── docusaurus.config.js  # Docusaurus configuration
```

## 📚 Documentation

Detailed documentation is available in the [docs](https://cuemeet.github.io/cuemeet-documentation/) directory:

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

---

## 🔐 Security

Please refer to [SECURITY.md](./SECURITY.md) for information about reporting security vulnerabilities and best practices.

---

## 🆙 Upgrading

For version compatibility and migration steps, see [UPGRADE.md](./UPGRADE.md).

---

## 📜 Code of Conduct

We follow a standard of respectful communication and collaboration. Please review our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

---

## 📝 License

This project is licensed under the [GNU General Public License v3.0 (GPL-3.0)](LICENSE)  — see the LICENSE file for details.

<div align="center">
  Made with ❤️ by CueCard.ai team
</div>