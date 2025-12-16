#!/usr/bin/env node
import { Command } from 'commander';

import { initCommand } from './commands/init.js';
import { devCommand } from './commands/dev.js';
import { inspectCommand } from './commands/inspect.js';
import { doctorCommand } from './commands/doctor.js';

const program = new Command();

program.name('mcp').description('MCP Dev Toolkit CLI').version('0.0.1');

program.addCommand(initCommand);
program.addCommand(devCommand);
program.addCommand(inspectCommand);
program.addCommand(doctorCommand);

program.parse(process.argv);
