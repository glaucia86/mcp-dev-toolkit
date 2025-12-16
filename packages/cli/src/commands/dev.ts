import { Command } from 'commander';

export const devCommand = new Command('dev')
  .description('Run MCP server in dev mode (tsx watch)')
  .action(async () => {
    console.log('dev: not implemented yet');
  });
