#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * T10 — прогон A/B-замера: каждая задача из `tasks.json` решается агентом
 * в нескольких «руках», различающихся ТОЛЬКО доступом к инструментам.
 *
 * Основной стенд — потребительский (`ab/prepare-consumer.mjs`): песочница вне
 * репозитория, где стоит настоящий опубликованный `@daisforge/ui` и нет ни
 * исходников библиотеки, ни её `CLAUDE.md`.
 *
 *   pkg       — MCP нет, есть node_modules (как живёт потребитель сегодня)
 *   pkg-mcp   — только MCP, файлы читать нечем
 *   pkg-both  — и MCP, и node_modules
 *
 * Вспомогательный стенд — репозиторий (`src`, `src-mcp`): вопрос «нужен ли MCP
 * самим разработчикам библиотеки». В основной замер не входит.
 *
 * Результат прогона — сырьё: транскрипты в .probe/ab/runs/<arm>/<task>.jsonl
 * и код в .probe/ab/generated/<arm>/<task>.tsx. Метрики считает score.mjs,
 * его можно перезапускать без новых прогонов.
 */
import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {
  AB_DIR,
  GENERATED_DIR,
  OUT_ROOT,
  parseArgs,
  PKG_DIR,
  REPO_ROOT,
  RUNS_DIR,
} from './lib/paths.mjs';

const MCP_TOOLS = [
  'list_components',
  'search_components',
  'get_component',
  'get_component_props',
  'get_component_examples',
  'list_features',
  'get_feature',
  'get_feature_examples',
  'get_type',
].map((t) => `mcp__daisforge-ui__${t}`);

const RESOURCE_TOOLS = ['ListMcpResourcesTool', 'ReadMcpResourceTool'];
const FILE_TOOLS = ['Read', 'Grep', 'Glob'];

/**
 * `stand: 'consumer'` — рука работает в клоне потребительской песочницы;
 * `stand: 'repo'` — в самом монорепо (стенд разработчика библиотеки).
 */
export const ARMS = {
  pkg: { stand: 'consumer', mcp: false, builtin: ['Write', ...FILE_TOOLS] },
  'pkg-mcp': {
    stand: 'consumer',
    mcp: true,
    builtin: ['Write', ...RESOURCE_TOOLS],
  },
  'pkg-both': {
    stand: 'consumer',
    mcp: true,
    builtin: ['Write', ...FILE_TOOLS, ...RESOURCE_TOOLS],
  },
  src: { stand: 'repo', mcp: false, builtin: ['Write', ...FILE_TOOLS] },
  'src-mcp': {
    stand: 'repo',
    mcp: true,
    builtin: ['Write', ...FILE_TOOLS, ...RESOURCE_TOOLS],
  },
};

const DEFAULT_SANDBOX = path.join(os.homedir(), '.claude-ab-consumer');

/** Клон песочницы на слот параллельности: руки не должны видеть ответы друг друга. */
function cloneSandbox(sandbox, slot) {
  const dest = `${sandbox}-w${slot}`;
  if (fs.existsSync(dest)) return dest;
  try {
    // APFS: клонирование файлов вместо копирования — мгновенно и без места.
    execFileSync('cp', ['-Rc', sandbox, dest], { stdio: 'ignore' });
  } catch {
    execFileSync('cp', ['-R', sandbox, dest], { stdio: 'ignore' });
  }
  return dest;
}

function buildPrompt(task, answerRelPath) {
  return [
    `Задача: ${task.prompt}`,
    '',
    'Обстановка: приложение на React + TypeScript, библиотека компонентов',
    '`@daisforge/ui` уже установлена в зависимостях.',
    '',
    'Требования к результату:',
    `- Запиши РОВНО ОДИН файл: ${answerRelPath} (инструментом Write, целиком).`,
    '- Файл экспортирует один именованный React-компонент.',
    "- Компоненты библиотеки импортируй только из '@daisforge/ui'; React и хуки — из 'react'.",
    '- Не выдумывай имена компонентов и пропсов: если нужного нет — обойдись тем, что есть.',
    '- Ничего не запускай (сборку, тесты, установку) и не меняй другие файлы.',
    '- Объяснять в чате ничего не нужно — оценивается только файл.',
  ].join('\n');
}

function mcpConfig(arm, workDir, beforeServer) {
  if (!ARMS[arm].mcp) return JSON.stringify({ mcpServers: {} });
  const entry =
    arm === 'pkg-mcp-before'
      ? beforeServer
      : ARMS[arm].stand === 'consumer'
      ? path.join(workDir, 'node_modules/@daisforge/ui-mcp/dist/server.js')
      : path.join(PKG_DIR, 'dist/server.js');
  if (!fs.existsSync(entry)) {
    throw new Error(
      `Сервер для руки «${arm}» не найден: ${entry}\n${
        ARMS[arm].stand === 'consumer'
          ? 'Соберите стенд: node ab/prepare-consumer.mjs'
          : 'Соберите сервер: npm run build'
      }`,
    );
  }
  return JSON.stringify({
    mcpServers: { 'daisforge-ui': { command: 'node', args: [entry] } },
  });
}

function runOne({
  arm,
  task,
  slot,
  model,
  budget,
  timeoutMs,
  sandbox,
  beforeServer,
}) {
  const spec = ARMS[arm];
  const workDir =
    spec.stand === 'consumer' ? cloneSandbox(sandbox, slot) : REPO_ROOT;
  const answerRel =
    spec.stand === 'consumer'
      ? path.join('src/pages', `${task.id}.tsx`)
      : path.join('packages/mcp-server/.probe/ab/work', `${task.id}.tsx`);
  const answerAbs = path.join(workDir, answerRel);

  // Чистим страницы от предыдущего прогона: иначе следующая рука увидела бы
  // готовый ответ соседней и сравнение рук перестало бы что-либо значить.
  if (spec.stand === 'consumer') {
    const pagesDir = path.join(workDir, 'src/pages');
    fs.rmSync(pagesDir, { recursive: true, force: true });
    fs.mkdirSync(pagesDir, { recursive: true });
  } else {
    fs.mkdirSync(path.dirname(answerAbs), { recursive: true });
    fs.rmSync(answerAbs, { force: true });
  }

  const runDir = path.join(RUNS_DIR, arm);
  fs.mkdirSync(runDir, { recursive: true });
  const transcriptPath = path.join(runDir, `${task.id}.jsonl`);

  const args = [
    '-p',
    buildPrompt(task, answerRel),
    '--output-format',
    'stream-json',
    '--verbose',
    '--model',
    model,
    '--max-budget-usd',
    String(budget),
    '--tools',
    spec.builtin.join(','),
    '--allowedTools',
    ...[...spec.builtin, ...(spec.mcp ? MCP_TOOLS : [])],
    '--mcp-config',
    mcpConfig(arm, workDir, beforeServer),
    '--strict-mcp-config',
    '--disable-slash-commands',
    '--no-session-persistence',
  ];

  return new Promise((resolve) => {
    const started = Date.now();
    const out = fs.createWriteStream(transcriptPath);
    let stderr = '';
    const child = spawn('claude', args, { cwd: workDir });
    const timer = setTimeout(() => child.kill('SIGKILL'), timeoutMs);

    child.stdout.pipe(out);
    child.stderr.on('data', (d) => {
      stderr += d.toString();
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      out.end();
      const genDir = path.join(GENERATED_DIR, arm);
      fs.mkdirSync(genDir, { recursive: true });
      const wrote = fs.existsSync(answerAbs);
      if (wrote)
        fs.copyFileSync(answerAbs, path.join(genDir, `${task.id}.tsx`));
      const failed = wrote ? null : failureReason(transcriptPath);
      if (failed) fs.rmSync(transcriptPath, { force: true });
      resolve({
        arm,
        taskId: task.id,
        level: task.level,
        stand: spec.stand,
        workDir,
        exitCode: code,
        failed,
        wroteFile: wrote,
        wallMs: Date.now() - started,
        transcript: path.relative(PKG_DIR, transcriptPath),
        stderr: stderr.slice(-2000),
      });
    });
  });
}

/**
 * Прогон, оборванный не по вине агента (упёрлись в лимит аккаунта, сеть,
 * убит по таймауту), НЕ должен остаться на диске: иначе резюмируемость
 * засчитает его сделанным и в метрики попадёт пустой ответ. Возвращает
 * причину или null.
 */
function failureReason(transcriptPath) {
  let txt = '';
  try {
    txt = fs.readFileSync(transcriptPath, 'utf8').trim();
  } catch {
    return 'транскрипт не записан';
  }
  if (!txt) return 'пустой транскрипт';
  const lines = txt.split(/\r?\n/);
  try {
    const last = JSON.parse(lines[lines.length - 1]);
    if (last.type === 'result' && last.is_error)
      return String(last.result || 'ошибка прогона');
  } catch {
    return 'транскрипт оборван';
  }
  return null;
}

const isLimitError = (reason) =>
  /limit|quota|rate.?limit|429/i.test(reason || '');

async function pool(items, size, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from(
    { length: Math.min(size, items.length) },
    async (_, slot) => {
      for (;;) {
        const i = cursor;
        cursor += 1;
        if (i >= items.length) return;
        results[i] = await worker(items[i], slot);
      }
    },
  );
  await Promise.all(runners);
  return results;
}

async function main() {
  const argv = parseArgs(process.argv.slice(2));
  const model = argv.model || 'sonnet';
  const budget = Number(argv.budget || 0.5);
  const timeoutMs = Number(argv.timeout || 420) * 1000;
  const concurrency = Number(argv.concurrency || 3);
  const sandbox = path.resolve(argv.sandbox || DEFAULT_SANDBOX);
  const beforeServer = argv['before-server']
    ? path.resolve(argv['before-server'])
    : undefined;

  const armNames = String(argv.arms || 'pkg,pkg-mcp,pkg-both')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  for (const a of armNames) {
    if (!ARMS[a])
      throw new Error(
        `Неизвестная рука «${a}». Есть: ${Object.keys(ARMS).join(', ')}`,
      );
  }
  if (
    armNames.some((a) => ARMS[a].stand === 'consumer') &&
    !fs.existsSync(sandbox)
  ) {
    throw new Error(
      `Нет потребительского стенда: ${sandbox}\nСоберите: node ab/prepare-consumer.mjs`,
    );
  }

  const { tasks } = JSON.parse(
    fs.readFileSync(path.join(AB_DIR, 'tasks.json'), 'utf8'),
  );
  const only = argv.tasks
    ? String(argv.tasks)
        .split(',')
        .map((s) => s.trim())
    : null;
  const selected = only ? tasks.filter((t) => only.includes(t.id)) : tasks;
  if (selected.length === 0)
    throw new Error('Под фильтр --tasks не попала ни одна задача');

  const jobs = [];
  for (const arm of armNames) {
    for (const task of selected) {
      if (
        fs.existsSync(path.join(RUNS_DIR, arm, `${task.id}.jsonl`)) &&
        !argv.force
      )
        continue;
      jobs.push({ arm, task });
    }
  }

  console.log(
    `Прогонов: ${jobs.length} (руки: ${armNames.join(', ')}; задач: ${
      selected.length
    }; ` +
      `модель: ${model}; бюджет: $${budget}/прогон; параллельно: ${concurrency})`,
  );
  if (jobs.length === 0) {
    console.log('Все прогоны уже есть — считайте метрики: node ab/score.mjs');
    return;
  }

  fs.mkdirSync(OUT_ROOT, { recursive: true });
  let finished = 0;
  let halted = null;
  const results = await pool(jobs, concurrency, async (job, slot) => {
    if (halted) return { ...job, taskId: job.task.id, skipped: true };
    const r = await runOne({
      ...job,
      slot,
      model,
      budget,
      timeoutMs,
      sandbox,
      beforeServer,
    });
    finished += 1;
    console.log(
      `[${finished}/${jobs.length}] ${r.arm}/${r.taskId} — ` +
        `${
          r.wroteFile ? 'файл записан' : `НЕУДАЧА: ${r.failed || 'файла нет'}`
        }, ` +
        `${(r.wallMs / 1000).toFixed(0)}s`,
    );
    // Упёрлись в лимит аккаунта — молотить очередь дальше бессмысленно и
    // вредно: каждая следующая задача «сгорит» вхолостую.
    if (isLimitError(r.failed) && !halted) {
      halted = r.failed;
      console.error(
        `\n⛔ Прогон остановлен: ${halted}\n   Повторите позже — сделанное сохранено, переснимать его не придётся.`,
      );
    }
    return r;
  });

  const metaPath = path.join(OUT_ROOT, 'runs-meta.json');
  const prev = fs.existsSync(metaPath)
    ? JSON.parse(fs.readFileSync(metaPath, 'utf8'))
    : { runs: [] };
  const done = results.filter((r) => !r.skipped);
  const merged = [
    ...prev.runs.filter(
      (r) => !done.some((n) => n.arm === r.arm && n.taskId === r.taskId),
    ),
    ...done,
  ];
  fs.writeFileSync(
    metaPath,
    `${JSON.stringify(
      {
        model,
        budget,
        sandbox,
        generatedAt: new Date().toISOString(),
        runs: merged,
      },
      null,
      2,
    )}\n`,
    'utf8',
  );
  console.log('\nГотово. Метрики: node ab/score.mjs');
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
