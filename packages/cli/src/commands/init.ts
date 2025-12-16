import { Command } from 'commander';
import prompts from 'prompts';
import path from 'node:path';
import fs from 'node:fs/promises';
import { execSync } from 'node:child_process';

import { copyDir, replaceTokensInTextFiles } from '../internal/fs.js';
import { templateBasicPath } from '../internal/paths.js';

type InitOptions = {
  name?: string;
  yes?: boolean;
};

export const initCommand = new Command('init')
  .description('Scaffold a new MCP server project')
  .option('-n, --name <name>', 'project name')
  .option('-y, --yes', 'skip prompts', false)
  .action(async (opts: InitOptions) => {
    const name =
      opts.name ??
      (opts.yes
        ? 'my-mcp-server'
        : (
            await prompts({
              type: 'text',
              name: 'value',
              message: 'Project name:',
              initial: 'my-mcp-server',
            })
          ).value);

    if (!name || typeof name !== 'string') {
      throw new Error('Project name is required.');
    }

    const targetDir = path.resolve(process.cwd(), name);

    // Avoid overwriting existing folder
    const exists = await fs
      .access(targetDir)
      .then(() => true)
      .catch(() => false);

    if (exists) {
      throw new Error(`Target directory already exists: ${targetDir}`);
    }

    const templateDir = templateBasicPath();

    // 1) Copy template
    await copyDir(templateDir, targetDir);

    // 2) Replace tokens
    await replaceTokensInTextFiles(targetDir, (content) =>
      content.replaceAll('{{PROJECT_NAME}}', name),
    );

    // 3) Install dependencies with specific SDK version
    console.log(`\nInstalling dependencies...`);
    try {
      // Install production dependencies
      execSync('pnpm add @modelcontextprotocol/sdk@1.0.4 zod@^3.24.0', {
        cwd: targetDir,
        stdio: 'inherit',
      });

      // Install dev dependencies
      execSync('pnpm add -D tsx@^4.0.0 typescript@^5.0.2', {
        cwd: targetDir,
        stdio: 'inherit',
      });
    } catch (error) {
      console.error('\nFailed to install dependencies. Please run:');
      console.error(`  cd ${name}`);
      console.error(`  pnpm install`);
      throw error;
    }

    // 4) Final message (stdout ok here; this is CLI, not MCP server)
    console.log(`\n✓ Created ${name} at ${targetDir}`);
    console.log(`\nNext steps:`);
    console.log(`  cd ${name}`);
    console.log(`  pnpm dev`);
  });
