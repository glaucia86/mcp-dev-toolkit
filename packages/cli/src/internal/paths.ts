import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dist/internal -> dist -> cli -> packages -> repo root
export function repoRootFromCliDist() {
  return path.resolve(__dirname, '../../../..');
}

export function templateBasicPath() {
  return path.join(repoRootFromCliDist(), 'packages', 'templates', 'basic');
}

