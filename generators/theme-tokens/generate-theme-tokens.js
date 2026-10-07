/* eslint-disable no-console */
/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах (как в scripts/husky-commit) */
/**
 * Генератор токенов тем для canvas-рендереров TableGlide (слой «чернил»:
 * текст, бейджи, кнопки, статусы внутри ячеек).
 *
 * Источник истины — CSS-переменные тем атомарной команды в node_modules
 * (какие файлы — lib/theme-sources.js). Состав ключей и правила соответствия
 * «ключ → переменная» — lib/token-map.js; механика — остальные модули lib/.
 *
 * Выход:
 *   packages/ui-kit/src/components/TableGlide/theme-tokens.generated.ts
 *   generators/theme-tokens/report.md — пины и наследования (что откуда взялось).
 *
 * Запуск: node generators/theme-tokens/generate-theme-tokens.js
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { emitReport, emitTokensFile } from './lib/emit.js';
import { readThemeVariables } from './lib/parse-css-variables.js';
import { resolveTokenValue } from './lib/resolve-token.js';
import { THEME_SOURCES, THEMES } from './lib/theme-sources.js';
import { KEYS, MAPPING } from './lib/token-map.js';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIRNAME, '../..');
const OUT_TS = path.join(
  ROOT,
  'packages/ui-kit/src/components/TableGlide/theme-tokens.generated.ts',
);
const OUT_REPORT = path.join(DIRNAME, 'report.md');

// ─── Чтение переменных всех шести тем ───

const varsByTheme = Object.fromEntries(
  THEMES.map((theme) => [
    theme,
    readThemeVariables(path.join(ROOT, THEME_SOURCES[theme])),
  ]),
);

// ─── Значение каждого ключа в каждой теме + строки отчёта ───

const tokens = Object.fromEntries(THEMES.map((theme) => [theme, {}]));
const report = [];

KEYS.forEach((key) => {
  const rule = MAPPING[key] ?? {};
  THEMES.forEach((theme) => {
    const { value, origin } = resolveTokenValue(key, rule, varsByTheme, theme);
    if (value === undefined) {
      throw new Error(`Нет значения: ${key} / ${theme}`);
    }
    tokens[theme][key] = value;
    const isWorthReporting =
      origin.includes('пин') || origin.includes('унаслед');
    if (isWorthReporting) {
      report.push(`| \`${key}\` | ${theme} | \`${value}\` | ${origin} |`);
    }
  });
});

// ─── Выпуск ───

emitTokensFile(OUT_TS, tokens);
emitReport(OUT_REPORT, report);

const pinCount = report.filter((row) => row.includes('пин')).length;
const inheritCount = report.length - pinCount;
console.log(
  `theme-tokens.generated.ts: ${KEYS.length} ключей × ${THEMES.length} тем; пинов: ${pinCount}, наследований: ${inheritCount} (см. report.md)`,
);
