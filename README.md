# MCP Dev Toolkit

> A development toolkit for creating, running, and debugging Model Context Protocol (MCP) servers with exceptional Developer Experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.24+-orange.svg)](https://pnpm.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.6+-red.svg)](https://turbo.build/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![npm version](https://img.shields.io/npm/v/@mcp-dev/cli.svg?style=flat)](https://www.npmjs.com/package/@mcp-dev/cli)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/glaucia86/mcp-dev-toolkit)
[![Code Coverage](https://img.shields.io/badge/coverage-85%25-green.svg)](https://github.com/glaucia86/mcp-dev-toolkit)

## 🎯 What is MCP Dev Toolkit?

**MCP Dev Toolkit** is an open-source project focused on Developer Experience (DX) for developers building **Model Context Protocol (MCP) servers** in **JavaScript and TypeScript**.

Think of it as the **"Postman + DevTools for MCP"** — a unified, opinionated, and production-ready toolkit that covers the entire development lifecycle of an MCP server, from scaffolding to debugging.

## 🚀 Why MCP Dev Toolkit?

Building MCP servers today is challenging:

- ❌ Confusing and non-standardized initial setup
- ❌ Lack of opinionated templates
- ❌ Extremely difficult debugging
- ❌ Poor visibility into context, tools, schemas, and agent decisions
- ❌ Missing local tooling comparable to REST/GraphQL ecosystems

**MCP Dev Toolkit solves these problems by providing:**

- ✅ Unified CLI for creating, running, inspecting, and diagnosing MCP servers
- ✅ TypeScript templates with best practices from day one
- ✅ Hot reload and structured logs in development mode
- ✅ Web inspector for tool visualization and execution
- ✅ Clear documentation and practical learning

## 📦 Features

### CLI (`@mcp-dev/cli`)

```bash
# Create a new MCP server project
mcp init

# Run server in development mode with hot reload
mcp dev

# Inspect registered tools and schemas
mcp inspect

# Validate project structure and configuration
mcp doctor
```

### Key Capabilities

- 🔥 **Hot Reload**: Automatic reloading during development
- 📊 **Structured Logs**: Clear visibility of server operations
- 🔍 **Inspector UI**: Web interface for tool testing and debugging
- 🛠️ **Opinionated Templates**: TypeScript templates with best practices
- ⚡ **Fast Setup**: Get a working MCP server in under 10 minutes

## 📥 Installation

```bash
# Using pnpm (recommended)
pnpm add -g @mcp-dev/cli

# Using npm
npm install -g @mcp-dev/cli

# Using yarn
yarn global add @mcp-dev/cli
```

## 🏁 Quick Start

```bash
# 1. Create a new MCP project
mcp init my-mcp-server
cd my-mcp-server

# 2. Install dependencies
pnpm install

# 3. Start development mode
mcp dev

# 4. In another terminal, inspect the server
mcp inspect
```

## 🏗️ Project Structure

This is a monorepo managed with **pnpm workspaces** and **Turborepo**:

```
mcp-dev-toolkit/
├── packages/
│   ├── cli/              # CLI commands and logic
│   ├── templates/        # Project templates
│   │   └── basic/        # Basic MCP server template
│   └── inspector/        # Web UI for inspection (planned)
├── apps/
│   └── docs/            # Documentation site (planned)
├── turbo.json           # Turborepo configuration
├── pnpm-workspace.yaml  # pnpm workspace configuration
└── package.json         # Root package.json
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/glaucia86/mcp-dev-toolkit.git
cd mcp-dev-toolkit

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Run in development mode
pnpm dev
```

## 📚 Documentation

For detailed documentation, please visit our [docs](./docs) folder (coming soon).

### Commands

- **`mcp init`**: Initialize a new MCP server project with TypeScript template
- **`mcp dev`**: Run the server in development mode with hot reload and structured logs
- **`mcp inspect`**: List registered tools, schemas, and server context
- **`mcp doctor`**: Validate project structure, configuration, and run sanity checks

## 🗺️ Roadmap

### v0.1 (MVP) - Current
- ✅ CLI (init, dev, inspect, doctor)
- ✅ TypeScript MCP template
- 🚧 Basic inspector UI
- 🚧 Documentation

### v0.2
- 🔜 Tool replay functionality
- 🔜 Trace export
- 🔜 Enhanced error handling

### v0.3
- 🔜 Plugin system
- 🔜 OpenTelemetry bridge
- 🔜 VS Code extension (read-only)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) (coming soon) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👤 Author

**Glaucia Lemos**
- Twitter: [@glaucia_lemos86](https://twitter.com/glaucia_lemos86)
- GitHub: [@glaucia86](https://github.com/glaucia86)

## 🙏 Acknowledgments

- [Model Context Protocol](https://modelcontextprotocol.io/) team for the foundational SDK
- The JavaScript/TypeScript community for the amazing tooling ecosystem

## 📊 Success Metrics

- ⏱️ Time to create a functional MCP server: **< 10 minutes**
- 📈 NPM downloads growth
- ⭐ GitHub stars and community engagement
- 🎓 Usage in workshops and technical content

---

**Made with ❤️ by the community**
