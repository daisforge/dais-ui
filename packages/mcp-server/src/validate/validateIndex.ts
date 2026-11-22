/* eslint-disable no-console */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PUBLIC_PROPS_HELPERS } from '../indexer/publicContract.js';
import { REPO_ROOT } from '../indexer/tsProject.js';
import { resolveIndex } from '../resolveIndex.js';
import type { ComponentIndex, ComponentRecord } from '../types.js';
import { isOkComponent } from '../types.js';
import { auditContracts } from './auditContracts.js';
import {
  checkIndexCompleteness,
  formatCompletenessReport,
} from './checkCompleteness.js';
import { KNOWN_OPEN_CONTRACTS } from './knownOpenContracts.js';

type CheckKind =
  | 'import'
  | 'contract'
  | 'open-contract'
  | 'exists'
  | 'required'
  | 'missing-prop'
  | 'unexpected-prop'
  | 'type';
interface CheckMeta {
  kind: CheckKind;
  component: string;
  part?: string;
  prop?: string;
}
export interface Diagnostic {
  file?: string;
  line?: number;
  code: string;
  message: string;
  check?: CheckMeta;
}
const PROBE_DIR = path.join(REPO_ROOT, 'packages/mcp-server/.probe');
const PROBE_FILE = path.join(PROBE_DIR, 'validate.ts');
const requireFromRoot = createRequire(path.join(REPO_ROOT, 'package.json'));

function internalImport(importPath: string): string {
  if (importPath === '@daisforge/ui') return '@ui-kit/index';
  if (!importPath.startsWith('@daisforge/ui/'))
    throw new Error(`Неизвестный importPath: ${importPath}`);
  return `@ui-kit/${importPath.slice('@daisforge/ui/'.length)}`;
}

/** Проверяем реальные экспорты, включая записи с пустым props и все ветви union. */
export function generateProbe(components: Record<string, ComponentRecord>) {
  const lines = PUBLIC_PROPS_HELPERS.trim().split('\n');
  lines.push(
    'type Expect<T extends true> = T;',
    'type IsAny<T> = 0 extends (1 & T) ? true : false;',
    'type IsOpen<T> = IsAny<T> extends true ? true : unknown extends T ? true : string extends McpKeys<T> ? true : false;',
    'type ValidContract<T> = [T] extends [never] ? false : true;',
    'type RequiredMatches<T, K extends PropertyKey, Optional extends boolean> = IsOpen<T> extends true ? true : true extends McpOptional<T, K> ? Optional : Optional extends false ? true : false;',
  );
  const lineMeta = new Map<number, CheckMeta>();
  let checks = 0;
  const nextCheck = () => {
    checks += 1;
    return checks;
  };
  const push = (code: string, meta: CheckMeta) => {
    lines.push(code);
    lineMeta.set(lines.length, meta);
  };
  const props = (
    alias: string,
    values: { name: string; required: boolean }[],
    component: string,
    part?: string,
  ) => {
    values.forEach((prop) => {
      const key = JSON.stringify(prop.name);
      push(
        `type Check${nextCheck()} = Expect<${key} extends McpKeys<${alias}> ? true : false>;`,
        { kind: 'exists', component, part, prop: prop.name },
      );
      push(
        `type Check${nextCheck()} = Expect<RequiredMatches<${alias}, ${key}, ${!prop.required}>>;`,
        { kind: 'required', component, part, prop: prop.name },
      );
    });
  };
  const contract = (
    alias: string,
    expression: string,
    component: string,
    part?: string,
  ) => {
    push(`type ${alias} = McpProps<${expression}>;`, {
      kind: 'contract',
      component,
      part,
    });
    push(`type Check${nextCheck()} = Expect<ValidContract<${alias}>>;`, {
      kind: 'contract',
      component,
      part,
    });
    // Открытая индексная сигнатура допускает любые поля: required для неё
    // недоказуем. Отдельное предупреждение вместо ложного результата проверки.
    push(
      `type Check${nextCheck()} = Expect<IsOpen<${alias}> extends true ? false : true>;`,
      { kind: 'open-contract', component, part },
    );
  };
  Object.keys(components)
    .sort()
    .forEach((name, i) => {
      const rec = components[name] as ComponentRecord;
      const value = `C${i}`;
      push(
        `import { ${name} as ${value} } from ${JSON.stringify(
          internalImport(rec.importPath),
        )};`,
        { kind: 'import', component: name },
      );
      if (rec.apiKind !== 'namespace') {
        contract(`P${i}`, `typeof ${value}`, name);
        props(`P${i}`, [...rec.props, ...(rec.inheritedProps || [])], name);
      }
      (rec.compoundParts || []).forEach((part, j) => {
        const alias = `P${i}_${j}`;
        contract(
          alias,
          `typeof ${value}[${JSON.stringify(part.name)}]`,
          name,
          part.name,
        );
        props(alias, part.props, name, part.name);
      });
    });
  return {
    code: `${lines.join('\n')}\n`,
    lineMeta,
    checks,
    coveredComponents: Object.keys(components).length,
  };
}

/** Сохраняем и ошибки исходников/конфига, и многострочные пояснения tsc. */
export function parseTscOutput(
  output: string,
  lineMeta = new Map<number, CheckMeta>(),
): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  output.split(/\r?\n/).forEach((line) => {
    const match = /^(?:(.+)\((\d+),\d+\): )?error (TS\d+): (.*)$/.exec(line);
    if (match) {
      const number = match[2] ? Number(match[2]) : undefined;
      diagnostics.push({
        file: match[1],
        line: number,
        code: match[3] as string,
        message: match[4] as string,
        check:
          match[1]?.replace(/\\/g, '/').endsWith('/.probe/validate.ts') &&
          number
            ? lineMeta.get(number)
            : undefined,
      });
    } else if (line.trim() && diagnostics.length) {
      const last = diagnostics[diagnostics.length - 1] as Diagnostic;
      last.message += `\n${line}`;
    }
  });
  return diagnostics;
}

export function assessDiagnostics(
  diagnostics: Diagnostic[],
  status: number | null,
  executionError?: string,
) {
  const warnings = diagnostics.filter(
    (d) =>
      d.check?.kind === 'open-contract' &&
      d.code === 'TS2344' &&
      KNOWN_OPEN_CONTRACTS.has(
        `${d.check.component}${d.check.part ? `.${d.check.part}` : ''}`,
      ),
  );
  const errors = diagnostics.filter((d) => !warnings.includes(d));
  // tsc обязан завершиться штатно: ошибка запуска/сигнал/неразобранный вывод — провал.
  const compilerFailure =
    executionError ||
    (status === null || status > 2 || (status !== 0 && diagnostics.length === 0)
      ? `tsc завершился со статусом ${status}, результат нельзя подтвердить`
      : undefined);
  return {
    errors,
    warnings,
    compilerFailure,
    ok: errors.length === 0 && !compilerFailure,
  };
}

export function validateIndex(index: ComponentIndex) {
  const completeness = checkIndexCompleteness(index);
  const records = Object.fromEntries(
    Object.entries(index.components).filter(([, rec]) => isOkComponent(rec)),
  ) as Record<string, ComponentRecord>;
  const probe = generateProbe(records);
  fs.mkdirSync(PROBE_DIR, { recursive: true });
  fs.writeFileSync(PROBE_FILE, probe.code);
  const tsc = spawnSync(
    process.execPath,
    [
      requireFromRoot.resolve('typescript/bin/tsc'),
      '-p',
      path.join(REPO_ROOT, 'packages/mcp-server/probe.tsconfig.json'),
      '--noEmit',
      '--pretty',
      'false',
    ],
    { cwd: REPO_ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  const output = (tsc.stdout || '') + (tsc.stderr || '');
  const diagnostics = parseTscOutput(output, probe.lineMeta);
  const contractAudit = auditContracts(index);
  contractAudit.issues.forEach(
    ({ kind, component, part, prop, expected, actual }) =>
      diagnostics.push({
        code: 'MCP_CONTRACT',
        message: `Ожидалось: ${expected ?? '(нет)'}; получено: ${
          actual ?? '(нет)'
        }`,
        check: { kind, component, part, prop },
      }),
  );
  const assessed = assessDiagnostics(
    diagnostics,
    tsc.status,
    tsc.error?.message ||
      (tsc.signal ? `tsc остановлен сигналом ${tsc.signal}` : undefined),
  );
  const indexErrors = Object.entries(index.components)
    .filter(([, rec]) => !isOkComponent(rec))
    .map(([name, rec]) => `${name}: ${rec.error}`);
  const report = {
    ...assessed,
    contractCoverage: contractAudit.coverage,
    ok:
      assessed.ok &&
      completeness.failures.length === 0 &&
      indexErrors.length === 0,
    completeness,
    indexErrors,
    checks: probe.checks,
    coveredComponents: probe.coveredComponents,
    diagnostics,
    compilerStatus: tsc.status,
  };
  fs.writeFileSync(
    path.join(PROBE_DIR, 'validation-report.json'),
    `${JSON.stringify(report, null, 2)}\n`,
  );
  fs.writeFileSync(path.join(PROBE_DIR, 'validation-tsc.log'), output);
  return report;
}

function main() {
  const report = validateIndex(resolveIndex().index);
  console.log(formatCompletenessReport(report.completeness));
  console.log(
    `Проверено ${report.coveredComponents} компонентов, ${report.checks} проверок.`,
  );
  console.log(
    `Независимый аудит: ${
      report.contractCoverage.length
    } контрактов, ${report.contractCoverage.reduce(
      (total, record) => total + record.checkedProps.length,
      0,
    )} пар компонент/поле; ${report.contractCoverage.reduce(
      (total, record) => total + record.declaredProps.length,
      0,
    )} полей по именованным Props; ${report.contractCoverage.reduce(
      (total, record) => total + record.truncatedProps.length,
      0,
    )} обрезанных типов.`,
  );
  report.diagnostics.forEach((d) =>
    console.log(
      `${d.check?.kind || 'compiler'} ${d.check?.component || d.file || ''}${
        d.check?.part ? `.${d.check.part}` : ''
      }${d.check?.prop ? `.${d.check.prop}` : ''}: ${d.code} ${d.message}`,
    ),
  );
  report.indexErrors.forEach((error) => console.error(error));
  if (report.compilerFailure) console.error(report.compilerFailure);
  console.log(
    `Ошибок: ${report.errors.length}; открытых контрактов: ${
      report.warnings.length
    }; результат: ${report.ok ? 'OK' : 'FAIL'}.`,
  );
  console.log(
    'Полный отчёт: packages/mcp-server/.probe/validation-report.json',
  );
  if (!report.ok) process.exitCode = 1;
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  main();
