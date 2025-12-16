import { Command } from 'commander';

export const initCommand = new Command('init')
  .description('Scaffold a new MCP server project')
  .action(async () => {
    console.log('init: not implemented yet');
  });
