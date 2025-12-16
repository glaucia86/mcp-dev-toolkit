import { Command } from 'commander';

export const doctorCommand = new Command('doctor')
  .description('Run sanity checks for an MCP server project (MVP)')
  .action(async () => {
    console.log('doctor: not implemented yet');
  });
