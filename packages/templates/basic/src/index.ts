import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { helloTool } from './tools/hello.js';

const server = new Server(
  {
    name: '{{PROJECT_NAME}}',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register tool list handler
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: helloTool.name,
      description: helloTool.description,
      inputSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The name to greet',
          },
        },
      },
    },
  ],
}));

// Register tool call handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === helloTool.name) {
    const result = await helloTool.handler(request.params.arguments || {});
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result),
        },
      ],
    };
  }
  throw new Error(`Unknown tool: ${request.params.name}`);
});

// IMPORTANTE: stdio transport exige stdout "limpo" (sem console.log)
const transport = new StdioServerTransport();
await server.connect(transport);

// Se quiser logar algo, use stderr:
console.error(`[{{PROJECT_NAME}}] MCP server started (stdio transport)`);
