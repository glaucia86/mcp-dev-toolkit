import { Command } from 'commander';

export const inspectCommand = new Command('inspect')
  .description('Inspect an MCP server project (MVP)')
  .action(async () => {
    console.log('inspect: not implemented yet');
  });
