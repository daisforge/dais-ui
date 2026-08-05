/* eslint-disable no-console */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { REPO_ROOT } from '../indexer/tsProject.js';
import { resolveIndex } from '../resolveIndex.js';
import type { ComponentRecord } from '../types.js';
import { isOkComponent } from '../types.js';

const PROBE_DIR = path.join(REPO_ROOT, 'packages/mcp-server/.probe');
const PROBE_FILE = path.join(PROBE_DIR, 'validate.ts');
const PROBE_TSCONFIG = path.join(
  REPO_ROOT,
  'packages/mcp-server/probe.tsconfig.json',
);
const TSC_BIN = path.join(REPO_ROOT, 'node_modules/.bin/tsc');

type CheckKind = 'import' | 'exists' | 'required';

interface CheckMeta {
  kind: CheckKind;
  component: string;
  part?: string;
  prop: string;
  isGeneric: boolean;
}

function sanitize(id: string): string {
  return id.replace(/[^A-Za-z0-9_]/g, '_');
}

/**
 * Генерирует .ts-пробник: для каждого компонента — реальный value-импорт из
 * `@ui-kit/index` + type-level проверки на существование и required каждого
 * пропа через настоящий тайпчекер, без единого сгенерированного значения
 * (в отличие от synthesizeExample — там плейсхолдеры дают ложные срабатывания
 * на нераспознанных типах). Несуществующий проп/экспорт — реальная ошибка tsc,
 * не наша эвристика.
 */
function generateProbe(components: Record<string, ComponentRecord>): {
  code: string;
  lineMeta: Map<number, CheckMeta>;
  totalChecks: number;
  coveredComponents: number;
} {
  const lines: string[] = [];
  const lineMeta = new Map<number, CheckMeta>();
  let counter = 0;
  let coveredComponents = 0;

  const push = (line: string, meta?: CheckMeta): void => {
    lines.push(line);
    if (meta) lineMeta.set(lines.length, meta);
  };

  push('/* eslint-disable */');
  push(
    '// АВТОГЕНЕРИРОВАНО validateIndex.ts — не редактировать руками, перегенерируется каждым запуском.',
  );
  push("import type { ComponentProps } from 'react';");
  push('');
  push('type Expect<T extends true> = T;');
  push(
    'type PropOptionality<T, K extends string> = K extends keyof T ? ({} extends Pick<T, K> ? true : false) : "missing";',
  );
  push(
    'type MatchesRequired<Actual extends boolean | "missing", ExpectedOptional extends boolean> = Actual extends "missing" ? true : Actual extends ExpectedOptional ? true : false;',
  );
  push('');

  const emitPropChecks = (
    propsAlias: string,
    propName: string,
    required: boolean,
    component: string,
    part: string | undefined,
    isGeneric: boolean,
  ): void => {
    const key = JSON.stringify(propName);

    counter += 1;
    push(`type _c${counter} = ${propsAlias}[${key}];`, {
      kind: 'exists',
      component,
      part,
      prop: propName,
      isGeneric,
    });

    counter += 1;
    const expectedOptional = !required;
    push(
      `type _c${counter} = Expect<MatchesRequired<PropOptionality<${propsAlias}, ${key}>, ${expectedOptional}>>;`,
      { kind: 'required', component, part, prop: propName, isGeneric },
    );
  };

  for (const name of Object.keys(components).sort()) {
    const record = components[name] as ComponentRecord;
    const ownAndInherited = [
      ...(record.props || []).map((p) => ({ ...p })),
      ...(record.inheritedProps || []).map((p) => ({ ...p })),
    ];
    const hasCompound = (record.compoundParts || []).length > 0;
    if (ownAndInherited.length === 0 && !hasCompound) {
      // eslint-disable-next-line no-continue -- пустой props[] без compound-частей: нечего проверять
      continue;
    }

    coveredComponents += 1;
    const isGeneric = Boolean(record.isGeneric);
    const varName = `C_${sanitize(name)}`;

    push(`import { ${name} as ${varName} } from '@ui-kit/index';`, {
      kind: 'import',
      component: name,
      prop: '',
      isGeneric,
    });

    const propsAlias = `P_${sanitize(name)}`;
    push(`type ${propsAlias} = ComponentProps<typeof ${varName}>;`);

    for (const p of ownAndInherited) {
      emitPropChecks(
        propsAlias,
        p.name,
        p.required,
        name,
        undefined,
        isGeneric,
      );
    }

    for (const part of record.compoundParts || []) {
      const partIsGeneric = Boolean(part.isGeneric) || isGeneric;
      const partPropsAlias = `P_${sanitize(name)}__${sanitize(part.name)}`;
      push(
        `type ${partPropsAlias} = ComponentProps<typeof ${varName}.${part.name}>;`,
        {
          kind: 'exists',
          component: name,
          part: part.name,
          prop: '(compound-part)',
          isGeneric: partIsGeneric,
        },
      );

      for (const p of part.props || []) {
        emitPropChecks(
          partPropsAlias,
          p.name,
          p.required,
          name,
          part.name,
          partIsGeneric,
        );
      }
    }

    push('');
  }

  return {
    code: `${lines.join('\n')}\n`,
    lineMeta,
    totalChecks: counter,
    coveredComponents,
  };
}

function runTsc(): string {
  try {
    return execFileSync(
      TSC_BIN,
      ['-p', PROBE_TSCONFIG, '--noEmit', '--pretty', 'false'],
      { cwd: REPO_ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
    );
  } catch (e) {
    const err = e as { stdout?: string; stderr?: string };
    return (err.stdout || '') + (err.stderr || '');
  }
}

interface ParsedError {
  line: number;
  code: string;
  message: string;
}

function parseTscOutput(output: string): ParsedError[] {
  const re = /\.probe[/\\]validate\.ts\((\d+),\d+\): error (TS\d+): (.+)$/;
  const errors: ParsedError[] = [];
  for (const raw of output.split(/\r?\n/)) {
    const m = re.exec(raw);
    if (m) {
      errors.push({
        line: Number(m[1]),
        code: m[2] as string,
        message: m[3] as string,
      });
    }
  }
  return errors;
}

interface Finding extends CheckMeta {
  code: string;
  message: string;
}

interface Buckets {
  importMissing: Finding[];
  propNotFound: Finding[];
  requiredMismatch: Finding[];
  genericBestEffort: Finding[];
}

function buildReport(
  errors: ParsedError[],
  lineMeta: Map<number, CheckMeta>,
): Buckets {
  const findings: Finding[] = errors
    .map((err) => {
      const meta = lineMeta.get(err.line);
      return meta
        ? { ...meta, code: err.code, message: err.message }
        : undefined;
    })
    .filter((f): f is Finding => f !== undefined);

  // Если сломался сам импорт компонента — все его дальнейшие findings это
  // каскад одной и той же причины, а не отдельные баги. Схлопываем.
  const brokenImportComponents = new Set(
    findings.filter((f) => f.kind === 'import').map((f) => f.component),
  );
  const collapsed = findings.filter(
    (f) => f.kind === 'import' || !brokenImportComponents.has(f.component),
  );

  return {
    importMissing: collapsed.filter((f) => f.kind === 'import'),
    propNotFound: collapsed.filter((f) => f.kind === 'exists' && !f.isGeneric),
    requiredMismatch: collapsed.filter(
      (f) => f.kind === 'required' && !f.isGeneric,
    ),
    genericBestEffort: collapsed.filter((f) => f.isGeneric),
  };
}

function printBucket(title: string, items: Finding[], limit: number): void {
  console.log(`\n--- ${title} (${items.length}) ---`);
  for (const f of items.slice(0, limit)) {
    const loc = f.part
      ? `${f.component}.${f.part}.${f.prop}`
      : `${f.component}.${f.prop}`;
    console.log(`  ${f.code} ${loc} — ${f.message}`);
  }
  if (items.length > limit) {
    console.log(`  … и ещё ${items.length - limit}`);
  }
}

function main(): void {
  const resolved = resolveIndex();
  const components: Record<string, ComponentRecord> = {};
  for (const [name, rec] of Object.entries(resolved.index.components)) {
    if (isOkComponent(rec)) components[name] = rec;
  }

  fs.mkdirSync(PROBE_DIR, { recursive: true });
  const { code, lineMeta, totalChecks, coveredComponents } =
    generateProbe(components);
  fs.writeFileSync(PROBE_FILE, code, 'utf8');

  console.log(
    `Пробник сгенерирован: ${totalChecks} type-level проверок, ${coveredComponents} из ${
      Object.keys(components).length
    } компонентов покрыто (остальные — пустой props[] без compound-частей).`,
  );
  console.log('Запуск tsc...');

  const output = runTsc();
  const errors = parseTscOutput(output);
  const buckets = buildReport(errors, lineMeta);

  console.log('\n═══ Отчёт валидатора индекса @daisforge/ui-mcp ═══');
  printBucket('IMPORT / EXPORT-MISSING', buckets.importMissing, Infinity);
  printBucket('PROP-NOT-FOUND', buckets.propNotFound, 40);
  printBucket('REQUIRED-MISMATCH', buckets.requiredMismatch, 40);
  printBucket(
    'GENERIC BEST-EFFORT (не считается провалом прогона)',
    buckets.genericBestEffort,
    20,
  );

  const attributed =
    buckets.importMissing.length +
    buckets.propNotFound.length +
    buckets.requiredMismatch.length +
    buckets.genericBestEffort.length;
  console.log(
    `\nВсего диагностик tsc: ${errors.length}, атрибутировано: ${attributed}.`,
  );
}

main();
