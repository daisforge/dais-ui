#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Собирает из ответов агента работающее приложение (T10).
 *
 * `tsc` доказывает, что код типизируется; этот шаг доказывает, что он ещё и
 * СОБИРАЕТСЯ и подключён — страницы попадают в `src/pages` песочницы, откуда
 * их подхватывает каркас App (`import.meta.glob`), и приложение проходит
 * `vite build`. Без этого «приложение запускается» оставалось бы обещанием.
 *
 *   node ab/assemble-app.mjs [--arm pkg-mcp] [--only-passing] [--no-build]
 *
 * Дальше приложение можно поднять руками:
 *   cd ~/.claude-ab-consumer && npx vite
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { GENERATED_DIR, OUT_ROOT, parseArgs, REPO_ROOT } from './lib/paths.mjs';

const argv = parseArgs(process.argv.slice(2));
const SANDBOX = path.resolve(
  argv.sandbox || path.join(os.homedir(), '.claude-ab-consumer'),
);
const arm = argv.arm || 'pkg-mcp';

function main() {
  const armDir = path.join(GENERATED_DIR, arm);
  if (!fs.existsSync(armDir)) {
    throw new Error(
      `Нет ответов руки «${arm}»: ${armDir}\nСначала node ab/run.mjs`,
    );
  }

  // Какие ответы прошли tsc — берём из results.json, чтобы одна сломанная
  // страница не роняла сборку всего приложения.
  const resultsPath = path.join(OUT_ROOT, 'results.json');
  const passing = new Set();
  if (fs.existsSync(resultsPath)) {
    const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    for (const r of results.rows)
      if (r.arm === arm && r.passes) passing.add(`${r.taskId}.tsx`);
  }

  const pagesDir = path.join(SANDBOX, 'src/pages');
  fs.rmSync(pagesDir, { recursive: true, force: true });
  fs.mkdirSync(pagesDir, { recursive: true });

  const all = fs.readdirSync(armDir).filter((f) => f.endsWith('.tsx'));
  const skipped = [];
  let copied = 0;
  for (const f of all) {
    if (argv['only-passing'] && passing.size && !passing.has(f)) {
      skipped.push(f);
      continue;
    }
    fs.copyFileSync(path.join(armDir, f), path.join(pagesDir, f));
    copied += 1;
  }

  console.log(`Рука «${arm}»: страниц подключено ${copied} из ${all.length}`);
  if (skipped.length)
    console.log(`  пропущены (не проходят tsc): ${skipped.join(', ')}`);

  if (argv['no-build']) {
    console.log(`\nПоднять приложение: cd ${SANDBOX} && npx vite`);
    return;
  }

  console.log('\n▸ vite build…');
  try {
    execFileSync(path.join(REPO_ROOT, 'node_modules/.bin/vite'), ['build'], {
      cwd: SANDBOX,
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' },
    });
    console.log(`\nСобралось. Поднять в браузере: cd ${SANDBOX} && npx vite`);
  } catch {
    console.error(
      '\nvite build упал — приложение с этими страницами не запускается.',
    );
    process.exit(1);
  }
}

main();
