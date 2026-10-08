/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах */
/**
 * Цвет одного ключа в одной теме и пояснение для отчёта «откуда он взят».
 * Правила проверяются по порядку (подробно — в шапке lib/token-map.js):
 *  1) задан руками (pin) — берём его;
 *  2) цвет другой переменной с другой прозрачностью (alpha);
 *  3) иначе — переменная по имени (своё имя из MAPPING или имя ключа через
 *     дефис). Если в этой теме её нет — берём из запасной темы.
 */
import { MODE_BASE } from './theme-sources.js';

/** Имя ключа → имя CSS-переменной: textPrimary → text-primary, surfaceAccent20 → surface-accent-20. */
const toKebabCase = (key) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d+)$/, '$1-$2')
    .toLowerCase();

/** Цвет без прозрачности: #RGB и #RRGGBBAA → #RRGGBB. */
const toRgbHex = (hex) => {
  const digits = hex.replace('#', '');
  const fullDigits =
    digits.length === 3
      ? [...digits].map((char) => char + char).join('')
      : digits;
  return `#${fullDigits.slice(0, 6).toUpperCase()}`;
};

/**
 * Откуда взят цвет — для report.md:
 *  - direct   — найден в своей теме напрямую (в отчёт не попадает);
 *  - manual   — задан руками в token-map.js (pin);
 *  - fallback — в этой теме переменной нет, взят из запасной темы.
 */
export const SOURCE = {
  direct: 'direct',
  manual: 'manual',
  fallback: 'fallback',
};

const resolvePin = (rule, theme, baseTheme) => ({
  value: rule.pin[theme] ?? rule.pin[baseTheme] ?? rule.pin.light,
  source: SOURCE.manual,
  origin: `задан руками: ${rule.why}`,
});

const resolveAlpha = (rule, varsByTheme, theme, baseTheme) => {
  const [baseVariable, alphaByte] = rule.alpha;
  const ownValue = varsByTheme[theme][baseVariable];
  const baseValue =
    ownValue ??
    varsByTheme[baseTheme][baseVariable] ??
    varsByTheme.light[baseVariable];
  const origin = `цвет --${baseVariable} с прозрачностью ${alphaByte}`;
  if (ownValue) {
    return {
      value: toRgbHex(ownValue) + alphaByte,
      source: SOURCE.direct,
      origin,
    };
  }
  return {
    value: toRgbHex(baseValue) + alphaByte,
    source: SOURCE.fallback,
    origin: `${origin}; переменной нет в теме, взята из запасной`,
  };
};

const resolveVariable = (key, rule, varsByTheme, theme, baseTheme) => {
  const variableName = rule.var ?? toKebabCase(key);
  const ownValue = varsByTheme[theme][variableName];
  const originPrefix = rule.var
    ? `--${variableName} (имя у атомарной команды другое)`
    : `--${variableName}`;
  if (ownValue !== undefined) {
    return { value: ownValue, source: SOURCE.direct, origin: originPrefix };
  }
  const inheritedFromBase = varsByTheme[baseTheme][variableName];
  return {
    value: inheritedFromBase ?? varsByTheme.light[variableName],
    source: SOURCE.fallback,
    origin: `${originPrefix}: в этой теме нет, взят из темы ${
      inheritedFromBase ? baseTheme : 'light'
    }`,
  };
};

/**
 * `{ value, source, origin }`: цвет, вид источника (SOURCE) и пояснение.
 * value === undefined, если переменной нет ни в одной теме.
 */
export const resolveTokenValue = (key, rule, varsByTheme, theme) => {
  const baseTheme = MODE_BASE[theme];
  if (rule.pin) {
    return resolvePin(rule, theme, baseTheme);
  }
  if (rule.alpha) {
    return resolveAlpha(rule, varsByTheme, theme, baseTheme);
  }
  return resolveVariable(key, rule, varsByTheme, theme, baseTheme);
};
