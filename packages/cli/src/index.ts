#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('mcp')
  .description('MCP Dev Toolkit CLI')
  .version('0.0.1');

program
  .command('ping')
  .description('health check command')
  .action(() => {
    console.log('pong');
  });

program.parse(process.argv);
