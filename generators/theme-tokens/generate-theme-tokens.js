/* eslint-disable no-console */
/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах (как в scripts/husky-commit) */
/**
 * Генератор цветов «чернил» для таблицы: текст, бейджи, кнопки, статусы
 * внутри ячеек.
 *
 * Зачем он нужен. Обычные компоненты красятся CSS-переменными вида
 * var(--text-primary) — браузер сам подставляет цвет текущей темы. Таблица
 * рисует на canvas, а canvas понимает только готовый цвет (#RRGGBB), не
 * var(...). Поэтому генератор заранее выписывает конкретный цвет каждого
 * токена для каждой из шести тем.
 *
 * Откуда берёт. Читает файлы тем атомарной команды прямо из node_modules
 * (какие именно — lib/theme-sources.js). Какие цвета нужны и как они
 * называются в темах — lib/token-map.js; остальные файлы lib/ — механика.
 *
 * Что пишет:
 *   packages/ui-kit/src/components/TableGlide/theme-tokens.generated.ts —
 *     цвета по темам, в код попадают через getTokens() → theme.tokens;
 *   generators/theme-tokens/report.md — список значений, взятых НЕ
 *     напрямую из своей темы (заданы руками или взяты из запасной темы).
 *
 * Когда запускается: сам — последним шагом npm run update и npm run updateX
 * (после установки новых пакетов атомарной команды); руками — после правки
 * token-map.js: npm run theme-tokens:generate (из корня).
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { emitReport, emitTokensFile } from './lib/emit.js';
import { readThemeVariables } from './lib/parse-css-variables.js';
import { resolveTokenValue, SOURCE } from './lib/resolve-token.js';
import { THEME_SOURCES, THEMES } from './lib/theme-sources.js';
import { KEYS, MAPPING } from './lib/token-map.js';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIRNAME, '../..');
const OUT_TS = path.join(
  ROOT,
  'packages/ui-kit/src/components/TableGlide/theme-tokens.generated.ts',
);
const OUT_REPORT = path.join(DIRNAME, 'report.md');

// ─── Чтение цветов всех шести тем ───

const varsByTheme = Object.fromEntries(
  THEMES.map((theme) => [
    theme,
    readThemeVariables(path.join(ROOT, THEME_SOURCES[theme])),
  ]),
);

// ─── Цвет каждого ключа в каждой теме + строки отчёта ───

const tokens = Object.fromEntries(THEMES.map((theme) => [theme, {}]));
const report = [];
const counts = { manual: 0, fallback: 0 };

KEYS.forEach((key) => {
  const rule = MAPPING[key] ?? {};
  THEMES.forEach((theme) => {
    const { value, source, origin } = resolveTokenValue(
      key,
      rule,
      varsByTheme,
      theme,
    );
    if (value === undefined) {
      // Переменной нет ни в одной теме: скорее всего, атомарная команда её
      // переименовала или удалила — нужно поправить token-map.js.
      throw new Error(`Нет значения: ${key} / ${theme}`);
    }
    tokens[theme][key] = value;
    // В отчёт — только то, что взято НЕ напрямую из своей темы.
    if (source !== SOURCE.direct) {
      counts[source] += 1;
      report.push(`| \`${key}\` | ${theme} | \`${value}\` | ${origin} |`);
    }
  });
});

// ─── Запись ───

emitTokensFile(OUT_TS, tokens);
emitReport(OUT_REPORT, report);

console.log(
  `theme-tokens.generated.ts: ${KEYS.length} ключей × ${THEMES.length} тем; задано руками: ${counts.manual}, из запасной темы: ${counts.fallback} (см. report.md)`,
);
