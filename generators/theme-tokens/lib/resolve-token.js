/* eslint-disable import/extensions -- Node ESM требует явного расширения в относительных импортах */
/**
 * Значение одного ключа контракта в одной теме + строка происхождения для
 * отчёта. Порядок применения правил (см. lib/token-map.js):
 * pin → alpha → имя переменной (явный алиас или kebab-case имени ключа),
 * с наследованием из базовой темы режима, если переменной в теме нет.
 */
import { MODE_BASE } from './theme-sources.js';

/** camelCase-ключ контракта → kebab-case имя CSS-переменной (textPrimary → text-primary, …Accent20 → …accent-20). */
const toKebabCase = (key) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d+)$/, '$1-$2')
    .toLowerCase();

/** RGB-часть hex-цвета без альфы: #RGB и #RRGGBBAA → #RRGGBB. */
const toRgbHex = (hex) => {
  const digits = hex.replace('#', '');
  const fullDigits =
    digits.length === 3
      ? [...digits].map((char) => char + char).join('')
      : digits;
  return `#${fullDigits.slice(0, 6).toUpperCase()}`;
};

const resolvePin = (rule, theme, baseTheme) => ({
  value: rule.pin[theme] ?? rule.pin[baseTheme] ?? rule.pin.light,
  origin: `пин (${rule.why})`,
});

const resolveAlpha = (rule, varsByTheme, theme, baseTheme) => {
  const [baseVariable, alphaByte] = rule.alpha;
  const ownValue = varsByTheme[theme][baseVariable];
  const baseValue =
    ownValue ??
    varsByTheme[baseTheme][baseVariable] ??
    varsByTheme.light[baseVariable];
  return {
    value: toRgbHex(baseValue) + alphaByte,
    origin: ownValue
      ? `альфа: ${baseVariable} + ${alphaByte}`
      : `альфа: ${baseVariable} + ${alphaByte} (база унаследована)`,
  };
};

const resolveVariable = (key, rule, varsByTheme, theme, baseTheme) => {
  const variableName = rule.var ?? toKebabCase(key);
  const ownValue = varsByTheme[theme][variableName];
  const originPrefix = rule.var
    ? `алиас → --${variableName}`
    : `--${variableName}`;
  if (ownValue !== undefined) {
    return { value: ownValue, origin: originPrefix };
  }
  const inheritedFromBase = varsByTheme[baseTheme][variableName];
  return {
    value: inheritedFromBase ?? varsByTheme.light[variableName],
    origin: `${originPrefix} (нет в теме, унаследовано из ${
      inheritedFromBase ? baseTheme : 'light'
    })`,
  };
};

/** `{ value, origin }`; value === undefined, если переменной нет нигде. */
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
