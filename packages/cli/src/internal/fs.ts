import fs from 'node:fs/promises';
import path from 'node:path';

export async function copyDir(srcDir: string, destDir: string) {
  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

export async function replaceTokensInTextFiles(
  rootDir: string,
  replacer: (content: string) => string,
) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const p = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await replaceTokensInTextFiles(p, replacer);
      continue;
    }

    // Só mexe em arquivos texto comuns
    if (!/\.(ts|tsx|js|mjs|cjs|json|md|yml|yaml|txt|gitignore)$/i.test(entry.name)) {
      continue;
    }

    const raw = await fs.readFile(p, 'utf8');
    const next = replacer(raw);
    if (next !== raw) await fs.writeFile(p, next, 'utf8');
  }
}
