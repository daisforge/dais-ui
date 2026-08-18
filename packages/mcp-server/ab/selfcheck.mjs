#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Проверка самого измерителя, без единого прогона агента: скорер обязан
 * поставить «✅» честному файлу и найти ровно те два вида выдумки (импорт и
 * проп) в файле-подделке. Без этой проверки числа T10 нечем поверить.
 */
import path from 'node:path';

import { AB_DIR } from './lib/paths.mjs';
import { summarizeDiagnostics, typecheckFiles } from './lib/typecheck.mjs';

const good = path.join(AB_DIR, 'fixtures/good.tsx');
const bad = path.join(AB_DIR, 'fixtures/bad.tsx');

const diags = typecheckFiles([good, bad], 'selfcheck');
const g = summarizeDiagnostics(diags.get(good));
const b = summarizeDiagnostics(diags.get(bad));

console.log('good.tsx:', JSON.stringify(g));
console.log(' bad.tsx:', JSON.stringify(b));
for (const d of diags.get(bad))
  console.log(`   ${d.code} [${d.kind}] ${d.message}`);

const failures = [];
if (!g.passes) failures.push('good.tsx должен проходить tsc без диагностик');
if (b.unknownImports < 1) failures.push('bad.tsx: не пойман выдуманный импорт');
if (b.unknownProps < 1) failures.push('bad.tsx: не пойман выдуманный проп');

if (failures.length) {
  console.error(`\nСкорер неисправен:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(
  '\nСкорер исправен: честный файл проходит, выдумка ловится обоих видов.',
);
