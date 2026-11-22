#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Готовит «до» для A/B: git worktree на коммите ДО T1 со своим собранным
 * сервером и своим (старым) data/component-index.json — индекс закоммичен,
 * поэтому пересобирать его не нужно, что и делает базовую линию честной:
 * это ровно тот сервер и ровно те данные, что были до правок.
 *
 *   node ab/prepare-before.mjs [--commit <ref>] [--path <dir>]
 *
 * node_modules воркtree не имеет — симлинкуем из основного чекаута
 * (ts-morph/@modelcontextprotocol/sdk те же, версия сервера от них не зависит).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { parseArgs, REPO_ROOT } from './lib/paths.mjs';

const argv = parseArgs(process.argv.slice(2));
const ref = argv.commit || 'a7246f6~1'; // последний коммит до T1
const dest = path.resolve(argv.path || path.join(REPO_ROOT, '../ui-ab-before'));

const git = (args, cwd = REPO_ROOT) =>
  execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();

const commit = git(['rev-parse', ref]);
console.log(
  `Базовая линия: ${commit} (${git(['log', '-1', '--format=%s', commit])})`,
);

if (!fs.existsSync(dest)) {
  console.log(`Создаю worktree: ${dest}`);
  git(['worktree', 'add', '--detach', dest, commit]);
} else {
  console.log(`Worktree уже есть: ${dest} — переключаю на ${commit}`);
  git(['checkout', '--detach', commit], dest);
}

const nm = path.join(dest, 'node_modules');
if (!fs.existsSync(nm)) {
  fs.symlinkSync(path.join(REPO_ROOT, 'node_modules'), nm, 'dir');
  console.log('node_modules симлинкован из основного чекаута');
}

const pkgDir = path.join(dest, 'packages/mcp-server');
console.log('Сборка сервера «до»…');
execFileSync(
  path.join(REPO_ROOT, 'node_modules/.bin/tsc'),
  ['-p', 'tsconfig.lib.json'],
  {
    cwd: pkgDir,
    stdio: 'inherit',
  },
);

const server = path.join(pkgDir, 'dist/server.js');
const index = path.join(pkgDir, 'data/component-index.json');
for (const f of [server, index]) {
  if (!fs.existsSync(f)) throw new Error(`Не появился файл: ${f}`);
}
console.log(
  `\nГотово. Индекс «до»: ${(fs.statSync(index).size / 1024 / 1024).toFixed(
    2,
  )} МБ\n` +
    `Прогон: node ab/run.mjs --arms mcp-before --before-server ${server}`,
);
