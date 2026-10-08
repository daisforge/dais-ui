/* eslint-disable import/extensions -- импорт JS-модулей генератора содержимого (Node ESM требует расширение) */
/**
 * Сверка исходных цветов палитры дизайнера с темами атомарной команды (SDDS).
 *
 * Зачем. Палитра таблицы считается от цветов семантических токенов, которые
 * дизайнер вписала в code/table-token-sources.ts (SEMANTIC). Это снимок тем
 * на момент её работы: при обновлении пакетов SDDS он сам не меняется. Если
 * в SDDS появился токен, которого не было (там, где у палитры пусто и стоит
 * временный цвет), или поменялся цвет, палитра об этом не узнает. Скрипт
 * сравнивает снимок с темами из node_modules и пишет в консоль расхождения —
 * их нужно передать дизайнеру, чтобы она обновила исходные цвета.
 *
 * Сам скрипт ничего не меняет и не падает: код дизайнера не правим.
 *
 * Запуск из корня: npm run table-colors:check-sdds (сам — последним шагом
 * npm run update и npm run updateX).
 *
 * Подробнее. Сравниваются цвет покоя токена и, если они заданы, его
 * собственные состояния (переменные с суффиксами -hover, -active). Цвета
 * сравниваются без учёта регистра; полная непрозрачность (#RRGGBBFF)
 * считается равной #RRGGBB. Темы читаются тем же кодом, что и в генераторе
 * цветов содержимого (generators/table-content-tokens/lib).
 */
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { readThemeVariables } from '../table-content-tokens/lib/parse-css-variables.js';
import { printWarnings } from '../table-content-tokens/lib/print-warnings.js';
import { THEME_SOURCES } from '../table-content-tokens/lib/theme-sources.js';
import { SEMANTIC } from './code/table-token-sources';
import {
  type SourceToken,
  type ThemeName,
  type ThemeValues,
} from './code/table-token-states';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

/** Состояния токена, у которых в SDDS своя переменная: суффикс имени. */
const STATE_SUFFIXES = [
  ['values', ''],
  ['hover', '-hover'],
  ['active', '-active'],
] as const;

/** #RRGGBBFF → #RRGGBB, всё — заглавными: так одинаковые цвета равны. */
const normalizeHex = (hex: string) => {
  const upper = hex.toUpperCase();
  const isOpaqueWithAlpha = upper.length === 9 && upper.endsWith('FF');
  return isOpaqueWithAlpha ? upper.slice(0, 7) : upper;
};

const varsByTheme = Object.fromEntries(
  Object.entries(THEME_SOURCES).map(([theme, file]) => [
    theme,
    readThemeVariables(resolve(ROOT, file)),
  ]),
) as Record<ThemeName, Record<string, string>>;

/** Одна строка расхождения или undefined, если цвета совпадают. */
const describeMismatch = (
  variable: string,
  theme: ThemeName,
  paletteHex: string | null,
  sddsHex: string | undefined,
) => {
  if (paletteHex === null && sddsHex === undefined) {
    return undefined;
  }
  if (paletteHex === null) {
    return `${theme}: --${variable} в SDDS есть (${sddsHex}), в палитре пусто — сейчас стоит временный цвет`;
  }
  if (sddsHex === undefined) {
    return `${theme}: --${variable} в SDDS нет, в палитре ${paletteHex}`;
  }
  if (normalizeHex(paletteHex) !== normalizeHex(sddsHex)) {
    return `${theme}: --${variable} в палитре ${paletteHex}, в SDDS ${sddsHex}`;
  }
  return undefined;
};

const sourceTokens: SourceToken[] = Object.values(SEMANTIC);

const mismatches = sourceTokens.flatMap((token) =>
  STATE_SUFFIXES.flatMap(([field, suffix]) => {
    const values: ThemeValues | undefined = token[field];
    if (values === undefined) {
      return [];
    }
    const variable = `${token.name}${suffix}`;
    return (Object.keys(values) as ThemeName[])
      .map((theme) =>
        describeMismatch(
          variable,
          theme,
          values[theme] ?? null,
          varsByTheme[theme][variable],
        ),
      )
      .filter((line): line is string => line !== undefined);
  }),
);

if (mismatches.length === 0) {
  // eslint-disable-next-line no-console
  console.log('Палитра таблицы: исходные цвета совпадают с темами SDDS.');
} else {
  printWarnings(
    'исходные цвета палитры таблицы расходятся с темами SDDS — передать дизайнеру (generators/table-token-states/code/table-token-sources.ts)',
    mismatches,
  );
}
