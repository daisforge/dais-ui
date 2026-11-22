import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { OUT_ROOT, REPO_ROOT, TSC_BIN, TSCONFIG_BASE } from './paths.mjs';

/**
 * Импорта нет вовсе или из модуля нет такого экспорта — выдуманный импорт.
 * TS2307 — нет модуля, TS2305/TS2724/TS2614/TS2613 — нет такого экспорта в модуле.
 */
const IMPORT_CODES = new Set([
  'TS2307',
  'TS2305',
  'TS2724',
  'TS2614',
  'TS2613',
]);

/** Коды, под которыми tsc сообщает о неизвестном JSX-атрибуте/поле объекта. */
const PROP_CODES = new Set([
  'TS2322',
  'TS2339',
  'TS2353',
  'TS2559',
  'TS2769',
  'TS2561',
]);

const PROP_MESSAGE =
  /(Property '[^']+' does not exist on type|Object literal may only specify known properties|is not assignable to type 'IntrinsicAttributes)/;

/**
 * Классификация диагностики tsc в три ведра.
 * `unknown-import`/`unknown-prop` — это и есть «выдуманное»: агент назвал
 * экспорт или проп, которого в библиотеке нет. Остальное (`type-mismatch`) —
 * настоящий компонент и настоящий проп, но неверно типизированное значение:
 * тоже провал `tsc`, но не выдумка.
 */
export function classify(code, message) {
  if (IMPORT_CODES.has(code)) return 'unknown-import';
  if (PROP_CODES.has(code) && PROP_MESSAGE.test(message)) return 'unknown-prop';
  return 'type-mismatch';
}

/** Имя из «has no exported member 'X'» / «Property 'X' does not exist». */
export function extractName(message) {
  const m =
    /has no exported member '([^']+)'/.exec(message) ||
    /Property '([^']+)' does not exist/.exec(message) ||
    /Object literal may only specify known properties, and '([^']+)'/.exec(
      message,
    );
  return m ? m[1] : undefined;
}

const DIAG_RE = /^(.+?)\((\d+),(\d+)\): error (TS\d+): (.+)$/;

/**
 * Запускает tsc по явному списку файлов и возвращает диагностики по файлам.
 *
 * `opts.cwd` + `opts.extendsConfig` позволяют компилировать в потребительской
 * песочнице против её `node_modules` (мишень — установленный пакет и его
 * `.d.ts`, ровно то, против чего собирает код настоящий потребитель), а не
 * против исходников монорепо.
 */
export function typecheckFiles(files, label = 'run', opts = {}) {
  const cwd = opts.cwd || REPO_ROOT;
  const extendsConfig = opts.extendsConfig || TSCONFIG_BASE;
  const configDir = opts.configDir || OUT_ROOT;
  const result = new Map(files.map((f) => [path.resolve(f), []]));
  if (files.length === 0) return result;

  fs.mkdirSync(configDir, { recursive: true });
  const tsconfigPath = path.join(configDir, `tsconfig.${label}.json`);
  fs.writeFileSync(
    tsconfigPath,
    `${JSON.stringify(
      {
        extends: extendsConfig,
        include: [],
        files: files.map((f) => path.resolve(f)),
      },
      null,
      2,
    )}\n`,
    'utf8',
  );

  let output = '';
  try {
    output = execFileSync(
      TSC_BIN,
      ['-p', tsconfigPath, '--noEmit', '--pretty', 'false'],
      {
        cwd,
        encoding: 'utf8',
        maxBuffer: 128 * 1024 * 1024,
      },
    );
  } catch (e) {
    output = (e.stdout || '') + (e.stderr || '');
  }

  // tsc печатает суть перегрузочной ошибки (TS2769) не в первой строке, а в
  // отступных строках-продолжениях («Property 'X' does not exist on type…»).
  // Классифицировать по одной первой строке нельзя — она у всех одинаковая.
  let current;
  for (const raw of output.split(/\r?\n/)) {
    const m = DIAG_RE.exec(raw.trim());
    if (m) {
      const file = path.resolve(cwd, m[1]);
      current = result.has(file)
        ? { line: Number(m[2]), code: m[4], message: m[5], detail: '' }
        : undefined; // ошибка вне разбираемых файлов
      if (current) result.get(file).push(current);
      continue;
    }
    if (current && /^\s+\S/.test(raw)) current.detail += ` ${raw.trim()}`;
  }

  for (const diags of result.values()) {
    for (const d of diags) {
      const full = d.message + d.detail;
      d.kind = classify(d.code, full);
      d.name = extractName(full);
      delete d.detail;
    }
  }

  return result;
}

export function summarizeDiagnostics(diags) {
  const count = (kind) => diags.filter((d) => d.kind === kind).length;
  const unknownImports = count('unknown-import');
  const unknownProps = count('unknown-prop');
  return {
    total: diags.length,
    unknownImports,
    unknownProps,
    typeMismatch: count('type-mismatch'),
    hallucinated: unknownImports + unknownProps,
    passes: diags.length === 0,
  };
}
