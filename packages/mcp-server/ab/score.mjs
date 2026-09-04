#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * T10 — подсчёт метрик по уже сделанным прогонам (агент не запускается).
 *
 * Метрики из постановки, по каждой руке:
 *   1. доля ответов, проходящих `tsc`;
 *   2. выдуманных пропсов и импортов на задачу;
 *   3. вызовов инструментов до первой строчки кода;
 *   + выбран ли профильный компонент задачи (`expect` в tasks.json).
 *
 * Мишень компиляции — установленный пакет в потребительской песочнице, то
 * есть ровно то, против чего собирает код настоящий потребитель. Расхождение
 * «индекс обещает, а в пакете нет» (`ab/drift.mjs`) выносится в отдельное
 * ведро `index-drift`: агент туда не выдумывал, он поверил индексу — это
 * отдельная находка замера, а не его ошибка.
 *
 * Пишет .probe/ab/results.json и .probe/ab/report.md.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {
  AB_DIR,
  GENERATED_DIR,
  OUT_ROOT,
  parseArgs,
  PKG_DIR,
  RUNS_DIR,
} from './lib/paths.mjs';
import { parseTranscript } from './lib/transcript.mjs';
import { typecheckFiles } from './lib/typecheck.mjs';

const ARM_TITLES = {
  pkg: 'pkg — node_modules, без MCP',
  'pkg-mcp': 'pkg-mcp — только MCP',
  'pkg-both': 'pkg-both — MCP + node_modules',
  'pkg-mcp-before': 'pkg-mcp-before — MCP до T1',
  src: 'src — исходники, без MCP',
  'src-mcp': 'src-mcp — исходники + MCP',
};

const avg = (nums) => {
  const xs = nums.filter((n) => typeof n === 'number');
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;
};
const fmt = (n, d = 1) => (n === null || n === undefined ? '—' : n.toFixed(d));
const pct = (n) => (n === null ? '—' : `${(n * 100).toFixed(0)}%`);

/** Имена, импортированные из '@daisforge/ui' — для метрики выбора компонента. */
function importedComponents(code) {
  const names = new Set();
  for (const m of code.matchAll(
    /import\s*\{([^}]*)\}\s*from\s*['"]@daisforge\/ui['"]/g,
  )) {
    for (const part of m[1].split(',')) {
      const name = part
        .trim()
        .split(/\s+as\s+/)[0]
        .replace(/^type\s+/, '')
        .trim();
      if (name) names.add(name);
    }
  }
  return names;
}

function main() {
  const argv = parseArgs(process.argv.slice(2));
  const sandbox = path.resolve(
    argv.sandbox || path.join(os.homedir(), '.claude-ab-consumer'),
  );
  if (!fs.existsSync(sandbox)) {
    console.error(
      `Нет потребительского стенда: ${sandbox}\nСоберите: node ab/prepare-consumer.mjs`,
    );
    process.exit(1);
  }

  const driftPath = path.join(OUT_ROOT, 'drift.json');
  const drift = fs.existsSync(driftPath)
    ? JSON.parse(fs.readFileSync(driftPath, 'utf8'))
    : { missingExports: [], missingProps: {} };
  if (!fs.existsSync(driftPath)) {
    console.warn(
      '⚠ Нет .probe/ab/drift.json — расхождение индекса и пакета не вычитается. Запустите ab/drift.mjs',
    );
  }
  const driftExports = new Set(drift.missingExports);

  const { tasks } = JSON.parse(
    fs.readFileSync(path.join(AB_DIR, 'tasks.json'), 'utf8'),
  );
  const taskById = new Map(tasks.map((t) => [t.id, t]));

  const arms = argv.arms
    ? String(argv.arms)
        .split(',')
        .map((s) => s.trim())
    : fs.existsSync(RUNS_DIR)
    ? fs
        .readdirSync(RUNS_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort()
    : [];
  if (arms.length === 0) {
    console.error('Прогонов нет: сначала node ab/run.mjs');
    process.exit(1);
  }

  // Ответы компилируются внутри песочницы: только оттуда '@daisforge/ui'
  // разрешается в установленный пакет, а не в исходники монорепо.
  const scoreDir = path.join(sandbox, 'src/ab-score');
  fs.rmSync(scoreDir, { recursive: true, force: true });

  const rows = [];
  const perArm = [];

  for (const arm of arms) {
    const runDir = path.join(RUNS_DIR, arm);
    if (!fs.existsSync(runDir)) continue;
    const taskIds = fs
      .readdirSync(runDir)
      .filter((f) => f.endsWith('.jsonl'))
      .map((f) => f.replace(/\.jsonl$/, ''))
      .sort();

    const armDir = path.join(scoreDir, arm);
    fs.mkdirSync(armDir, { recursive: true });
    const files = [];
    for (const id of taskIds) {
      const src = path.join(GENERATED_DIR, arm, `${id}.tsx`);
      if (!fs.existsSync(src)) continue;
      const dest = path.join(armDir, `${id}.tsx`);
      fs.copyFileSync(src, dest);
      files.push(dest);
    }

    const diagByFile = typecheckFiles(files, `score-${arm}`, {
      cwd: sandbox,
      extendsConfig: path.join(sandbox, 'tsconfig.json'),
      configDir: sandbox,
    });

    for (const id of taskIds) {
      const t = parseTranscript(path.join(runDir, `${id}.jsonl`), `${id}.tsx`);
      const dest = path.resolve(armDir, `${id}.tsx`);
      const exists = fs.existsSync(dest);
      const code = exists ? fs.readFileSync(dest, 'utf8') : '';
      const imported = importedComponents(code);
      const diags = exists ? diagByFile.get(dest) || [] : null;

      let invented = 0;
      let indexDrift = 0;
      let mismatch = 0;
      for (const d of diags || []) {
        if (d.kind === 'type-mismatch') {
          mismatch += 1;
          continue;
        }
        const { name } = d;
        const isDriftExport =
          d.kind === 'unknown-import' && name && driftExports.has(name);
        // Проп мог отсутствовать в пакете у любого из импортированных здесь
        // компонентов — сопоставляем по имени пропа в пределах файла.
        const isDriftProp =
          d.kind === 'unknown-prop' &&
          name &&
          [...imported].some((c) =>
            (drift.missingProps[c] || []).includes(name),
          );
        if (isDriftExport || isDriftProp) indexDrift += 1;
        else invented += 1;
      }

      const expected = taskById.get(id)?.expect || [];
      rows.push({
        arm,
        taskId: id,
        level: taskById.get(id)?.level,
        wroteFile: exists,
        passes: diags ? diags.length === 0 : false,
        invented: diags ? invented : null,
        indexDrift: diags ? indexDrift : null,
        typeMismatch: diags ? mismatch : null,
        pickedExpected: expected.length
          ? expected.some((c) => imported.has(c))
          : null,
        imported: [...imported],
        toolCallsBeforeCode: t.toolCallsBeforeCode,
        toolCalls: t.toolCalls,
        mcpCalls: t.mcpCalls,
        sourceCalls: t.sourceCalls,
        costUsd: t.costUsd,
        numTurns: t.numTurns,
        durationMs: t.durationMs,
        diagnostics: (diags || []).slice(0, 10),
      });
    }

    const armRows = rows.filter((r) => r.arm === arm);
    const withFile = armRows.filter((r) => r.wroteFile);
    perArm.push({
      arm,
      tasks: armRows.length,
      wroteFile: withFile.length,
      passRate: armRows.length
        ? withFile.filter((r) => r.passes).length / armRows.length
        : null,
      inventedPerTask: avg(withFile.map((r) => r.invented)),
      indexDriftPerTask: avg(withFile.map((r) => r.indexDrift)),
      mismatchPerTask: avg(withFile.map((r) => r.typeMismatch)),
      pickedExpectedRate: (() => {
        const xs = withFile.filter((r) => r.pickedExpected !== null);
        return xs.length
          ? xs.filter((r) => r.pickedExpected).length / xs.length
          : null;
      })(),
      toolCallsBeforeCode: avg(armRows.map((r) => r.toolCallsBeforeCode)),
      toolCalls: avg(armRows.map((r) => r.toolCalls)),
      costUsd: avg(armRows.map((r) => r.costUsd)),
      durationSec: avg(
        armRows.map((r) => (r.durationMs ? r.durationMs / 1000 : null)),
      ),
    });
  }

  fs.rmSync(scoreDir, { recursive: true, force: true });
  for (const f of fs.readdirSync(sandbox)) {
    if (/^tsconfig\.score-.*\.json$/.test(f)) fs.rmSync(path.join(sandbox, f));
  }

  fs.mkdirSync(OUT_ROOT, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_ROOT, 'results.json'),
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        sandbox,
        drift: driftPath,
        perArm,
        rows,
      },
      null,
      2,
    )}\n`,
    'utf8',
  );

  const md = [];
  md.push(
    '| Рука | Задач | Файл записан | tsc проходит | Выдумано на задачу | Профильный компонент | Тулов до кода | Всего тулов | $/задача |',
  );
  md.push('|---|---|---|---|---|---|---|---|---|');
  for (const a of perArm) {
    md.push(
      `| ${ARM_TITLES[a.arm] || a.arm} | ${a.tasks} | ${a.wroteFile} | ${pct(
        a.passRate,
      )} | ` +
        `${fmt(a.inventedPerTask)} | ${pct(a.pickedExpectedRate)} | ${fmt(
          a.toolCallsBeforeCode,
        )} | ` +
        `${fmt(a.toolCalls)} | ${fmt(a.costUsd, 3)} |`,
    );
  }
  md.push('');
  md.push(
    'Отдельно, не в счёт агенту: `index-drift` — проп или экспорт, который есть в индексе, но отсутствует ' +
      'в опубликованном пакете; `type-mismatch` — настоящий проп с неверным значением.',
  );
  md.push('');
  md.push(
    '| Рука | index-drift на задачу | type-mismatch на задачу | сек/задача |',
  );
  md.push('|---|---|---|---|');
  for (const a of perArm) {
    md.push(
      `| ${a.arm} | ${fmt(a.indexDriftPerTask)} | ${fmt(
        a.mismatchPerTask,
      )} | ${fmt(a.durationSec, 0)} |`,
    );
  }
  md.push('');
  md.push('### Разбивка по задачам');
  md.push('');
  md.push(
    '| Задача | Рука | tsc | Выдумано | Дрейф | Профильный | Тулов до кода | Компоненты в ответе |',
  );
  md.push('|---|---|---|---|---|---|---|---|');
  for (const r of rows) {
    md.push(
      `| ${r.taskId} | ${r.arm} | ${
        r.wroteFile ? (r.passes ? '✅' : '❌') : 'нет файла'
      } | ` +
        `${r.invented ?? '—'} | ${r.indexDrift ?? '—'} | ` +
        `${
          r.pickedExpected === null ? '—' : r.pickedExpected ? '✅' : '❌'
        } | ` +
        `${r.toolCallsBeforeCode ?? '—'} | ${r.imported
          .slice(0, 5)
          .join(', ')} |`,
    );
  }

  const report = `${md.join('\n')}\n`;
  fs.writeFileSync(path.join(OUT_ROOT, 'report.md'), report, 'utf8');
  console.log(report);
  console.log(
    `Подробности: ${path.relative(
      PKG_DIR,
      path.join(OUT_ROOT, 'results.json'),
    )}`,
  );
}

main();
