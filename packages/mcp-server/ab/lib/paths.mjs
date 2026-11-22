import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const AB_DIR = path.dirname(
  path.dirname(fileURLToPath(import.meta.url)),
);
export const PKG_DIR = path.dirname(AB_DIR);
export const REPO_ROOT = path.resolve(PKG_DIR, '../..');
export const OUT_ROOT = path.join(PKG_DIR, '.probe/ab');
export const RUNS_DIR = path.join(OUT_ROOT, 'runs');
export const GENERATED_DIR = path.join(OUT_ROOT, 'generated');
export const TSC_BIN = path.join(REPO_ROOT, 'node_modules/.bin/tsc');
export const TSCONFIG_BASE = path.join(AB_DIR, 'ab.tsconfig.base.json');

/** Минимальный разбор аргументов вида --key value / --flag. */
export function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = next;
      i += 1;
    }
  }
  return out;
}
