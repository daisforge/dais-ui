#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Расхождение «индекс ↔ установленный пакет» (T10).
 *
 * Индекс собран по локальным исходникам (`1.12.1`), а компилируется код против
 * опубликованного пакета (`1.12.2`). Если агент возьмёт из индекса проп,
 * которого в опубликованных `.d.ts` ещё/уже нет, tsc обвинит агента — хотя
 * выдумал не он. Поэтому расхождение измеряется заранее, тем же приёмом, что
 * и `validateIndex` (настоящий тайпчекер, а не эвристика), и вычитается при
 * подсчёте метрик в `score.mjs`.
 *
 *   node ab/drift.mjs [--path <песочница>]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { OUT_ROOT, parseArgs, PKG_DIR, REPO_ROOT } from './lib/paths.mjs';

const argv = parseArgs(process.argv.slice(2));
const SANDBOX = path.resolve(
  argv.path || path.join(os.homedir(), '.claude-ab-consumer'),
);
const PROBE = path.join(SANDBOX, 'src/__drift.ts');
const TSC = path.join(REPO_ROOT, 'node_modules/.bin/tsc');

const sanitize = (id) => id.replace(/[^A-Za-z0-9_]/g, '_');

function generateProbe(components) {
  const lines = [];
  const meta = new Map();
  const push = (line, m) => {
    lines.push(line);
    if (m) meta.set(lines.length, m);
  };

  push('/* eslint-disable */');
  push('// АВТОГЕНЕРИРОВАНО ab/drift.mjs — удаляется сразу после прогона.');
  push("import type { ComponentProps } from 'react';");
  push('');

  let counter = 0;
  for (const [name, rec] of Object.entries(components)) {
    const props = [...(rec.props || []), ...(rec.inheritedProps || [])];
    if (props.length === 0) continue;
    const alias = `C_${sanitize(name)}`;
    // Импортируем ровно оттуда, куда велит индекс: у части компонентов это не
    // баррель, а глубокий путь ('@daisforge/ui/components/TableGlide'). Проба
    // по баррелю показывала бы «нет такого экспорта» там, где индекс и не
    // обещал барреля, — и мерила бы саму пробу, а не индекс.
    push(`import { ${name} as ${alias} } from '${rec.importPath}';`, {
      kind: 'export',
      component: name,
      importPath: rec.importPath,
    });
    const p = `P_${sanitize(name)}`;
    push(`type ${p} = ComponentProps<typeof ${alias}>;`);
    for (const prop of props) {
      counter += 1;
      push(`type _d${counter} = ${p}[${JSON.stringify(prop.name)}];`, {
        kind: 'prop',
        component: name,
        prop: prop.name,
        isGeneric: Boolean(rec.isGeneric),
      });
    }
    push('');
  }
  return { code: `${lines.join('\n')}\n`, meta, checks: counter };
}

function main() {
  const indexPath = path.join(PKG_DIR, 'data/component-index.json');
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  const installedPkg = JSON.parse(
    fs.readFileSync(
      path.join(SANDBOX, 'node_modules/@daisforge/ui/package.json'),
      'utf8',
    ),
  );

  const components = Object.fromEntries(
    Object.entries(index.components).filter(([, r]) => !r.error),
  );
  const { code, meta, checks } = generateProbe(components);
  fs.writeFileSync(PROBE, code, 'utf8');
  console.log(
    `Проба: ${checks} проверок пропсов по ${
      Object.keys(components).length
    } компонентам ` +
      `(индекс ${index.libVersion} против установленного ${installedPkg.version}).`,
  );

  let output = '';
  try {
    output = execFileSync(TSC, ['-p', 'tsconfig.json', '--pretty', 'false'], {
      cwd: SANDBOX,
      encoding: 'utf8',
      maxBuffer: 128 * 1024 * 1024,
    });
  } catch (e) {
    output = (e.stdout || '') + (e.stderr || '');
  } finally {
    fs.rmSync(PROBE, { force: true });
  }

  const missingExports = new Set();
  const missingProps = {};
  const genericProps = {};
  let otherErrors = 0;

  for (const raw of output.split(/\r?\n/)) {
    const m = /^src[/\\]__drift\.ts\((\d+),\d+\): error (TS\d+): (.+)$/.exec(
      raw.trim(),
    );
    if (!m) continue;
    const info = meta.get(Number(m[1]));
    if (!info) {
      otherErrors += 1;
      continue;
    }
    if (info.kind === 'export') {
      missingExports.add(info.component);
    } else {
      const bucket = info.isGeneric ? genericProps : missingProps;
      (bucket[info.component] ||= []).push(info.prop);
    }
  }

  // Компонент, которого нет в пакете, тянет за собой все свои пропсы — это одна
  // причина, а не сотня, и в карту пропсов их класть не надо.
  for (const name of missingExports) {
    delete missingProps[name];
    delete genericProps[name];
  }

  const drift = {
    generatedAt: new Date().toISOString(),
    indexLibVersion: index.libVersion,
    installedVersion: installedPkg.version,
    checks,
    missingExports: [...missingExports].sort(),
    missingProps,
    // У дженериков `ComponentProps<typeof X>` резолвится по умолчанию и даёт
    // ложные «нет такого пропса» — validateIndex по той же причине выносит их
    // в отдельное ведро. В вычитание при подсчёте метрик они не идут.
    genericProps,
    otherErrors,
  };

  fs.mkdirSync(OUT_ROOT, { recursive: true });
  const out = path.join(OUT_ROOT, 'drift.json');
  fs.writeFileSync(out, `${JSON.stringify(drift, null, 2)}\n`, 'utf8');

  const propCount = Object.values(missingProps).reduce(
    (a, b) => a + b.length,
    0,
  );
  console.log(
    `\nЭкспортов индекса нет в пакете: ${drift.missingExports.length}`,
  );
  if (drift.missingExports.length)
    console.log(`  ${drift.missingExports.join(', ')}`);
  console.log(
    `Пропсов индекса нет в пакете: ${propCount} у ${
      Object.keys(missingProps).length
    } компонентов`,
  );
  for (const [c, ps] of Object.entries(missingProps).slice(0, 10)) {
    console.log(
      `  ${c}: ${ps.slice(0, 8).join(', ')}${
        ps.length > 8 ? ` … (${ps.length})` : ''
      }`,
    );
  }
  console.log(
    `Дженерики (в вычитание не идут): ${
      Object.keys(genericProps).length
    } компонентов, прочих диагностик: ${otherErrors}`,
  );
  console.log(`\nЗаписано: ${path.relative(PKG_DIR, out)}`);
}

main();
