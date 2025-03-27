# CueMeet Documentation

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

### API Documentation

The documentation includes API reference generated from OpenAPI specifications. Use these commands to manage API docs:

- `npm run gen-api-docs` - Generate API documentation
- `npm run clean-api-docs` - Remove generated API documentation
- `npm run gen-api-docs:version` - Generate versioned API documentation
- `npm run clean-api-docs:version` - Remove versioned API documentation

## Project Structure

```
documentation/
├── docs/            # Documentation markdown files
├── src/             # React components and pages
├── static/          # Static files like images
├── openapi.yaml     # OpenAPI specification
└── docusaurus.config.js  # Docusaurus configuration
```

## Contributing

When contributing to the documentation:

1. Create your working branch
2. Make your changes
3. Preview your changes locally using `npm start`
4. Submit a pull request

For more detailed information about setting up the project locally, see [local-setup.md](docs/local-setup.md).