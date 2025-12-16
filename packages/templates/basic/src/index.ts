import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { helloTool } from './tools/hello.js';

const server = new McpServer({
  name: '{{PROJECT_NAME}}',
  version: '0.1.0',
});

// Register tool using the correct MCP SDK API
server.registerTool(
  helloTool.name,
  {
    title: helloTool.title,
    description: helloTool.description,
    inputSchema: helloTool.inputSchema,
    outputSchema: helloTool.outputSchema,
  },
  async (input) => {
    return await helloTool.handler(input);
  }
);

// IMPORTANTE: stdio transport exige stdout "limpo" (sem console.log)
await server.run(new StdioServerTransport());

// Se quiser logar algo, use stderr:
console.error(`[{{PROJECT_NAME}}] MCP server started (stdio transport)`);
