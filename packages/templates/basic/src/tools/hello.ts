import { z } from 'zod';

export const helloTool = {
  name: 'hello',
  title: 'Hello Tool',
  description: 'Returns a greeting message',
  inputSchema: {
    name: z.string().optional().describe('The name to greet'),
  },
  outputSchema: {
    message: z.string().describe('The greeting message'),
  },
  async handler(input: { name?: string }) {
    const message = `Hello ${input.name ?? 'world'}!`;
    return {
      content: [{ type: 'text' as const, text: message }],
      structuredContent: { message },
    };
  },
} as const;
