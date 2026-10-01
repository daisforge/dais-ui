/**
 * Генератор токенов тем для canvas-рендереров TableGlide (слой «чернил»:
 * текст, бейджи, кнопки, статусы внутри ячеек).
 *
 * Источник истины — CSS-переменные тем атомарной команды в node_modules:
 *   light / dark            @salutejs/sdds-themes/css/sdds_finai__{light,dark}.css
 *   betaCoreLight / Dark    @salutejs-ds/sdds_finai_beta_core/theme/themes/*.js
 *   highContrastLight / Dark @salutejs-ds/sdds_finai_high_contrast/theme/themes/*.js
 * (в js-модулях тем лежат те же строки `--token: #HEX` — парсятся той же регуляркой).
 *
 * Правила маппинга ключа tokens.ts → CSS-переменная:
 *   1) по умолчанию kebab-case имени (textPrimary → --text-primary);
 *   2) MAPPING.var — явное имя переменной (семантические алиасы команды,
 *      например dataPositive → data-green-minor; выведены по совпадению hex);
 *   3) MAPPING.alpha — «RGB базовой переменной + альфа-байт» (производные …12/…20/…56);
 *   4) MAPPING.pin — ручные значения по темам: аналога в CSS нет или источник
 *      не подтверждён (помечаются в отчёте, ждут решения дизайнера).
 * Если переменной нет в конкретной теме — значение наследуется из базовой темы
 * того же режима (light ← light, dark ← dark) и попадает в отчёт.
 *
 * Выход:
 *   packages/ui-kit/src/components/TableGlide/theme-tokens.generated.ts
 *   generators/theme-tokens/report.md — что откуда взялось, все наследования и пины.
 *
 * Запуск: node generators/theme-tokens/generate-theme-tokens.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIRNAME, '../..');
const OUT_TS = path.join(
  ROOT,
  'packages/ui-kit/src/components/TableGlide/theme-tokens.generated.ts',
);
const OUT_REPORT = path.join(DIRNAME, 'report.md');

// ─── Источники тем ───

const THEME_SOURCES = {
  light: 'node_modules/@salutejs/sdds-themes/css/sdds_finai__light.css',
  dark: 'node_modules/@salutejs/sdds-themes/css/sdds_finai__dark.css',
  betaCoreLight:
    'node_modules/@salutejs-ds/sdds_finai_beta_core/theme/themes/sdds_finai_beta_core__light.js',
  betaCoreDark:
    'node_modules/@salutejs-ds/sdds_finai_beta_core/theme/themes/sdds_finai_beta_core__dark.js',
  highContrastLight:
    'node_modules/@salutejs-ds/sdds_finai_high_contrast/theme/themes/sdds_finai_high_contrast__light.js',
  highContrastDark:
    'node_modules/@salutejs-ds/sdds_finai_high_contrast/theme/themes/sdds_finai_high_contrast__dark.js',
};

const THEMES = Object.keys(THEME_SOURCES);
/** Базовая тема того же режима — для наследования отсутствующих переменных. */
const MODE_BASE = {
  light: 'light',
  dark: 'dark',
  betaCoreLight: 'light',
  betaCoreDark: 'dark',
  highContrastLight: 'light',
  highContrastDark: 'dark',
};

// ─── Ключи tokens.ts ───
// Порядок и состав — как в текущем TOKENS_LIGHT (контракт getTokens сохраняется).

const KEYS = [
  'textPrimary',
  'textPrimaryHover',
  'textPrimaryActive',
  'textSecondary',
  'textSecondaryHover',
  'textSecondaryActive',
  'textTertiary',
  'textTertiaryHover',
  'textTertiaryActive',
  'textTertiaryBase',
  'textTertiaryVariant',
  'textParagraph',
  'textParagraphHover',
  'textParagraphActive',
  'textAccent',
  'textAccentHover',
  'textAccentActive',
  'textAccentTransparent20',
  'textPositive',
  'textPositiveHover',
  'textPositiveActive',
  'textWarning',
  'textWarningHover',
  'textWarningActive',
  'textNegative',
  'textNegativeHover',
  'textNegativeActive',
  'inverseTextPrimary',
  'onDarkTextPrimary',
  'onDarkTextPrimaryHover',
  'onDarkTextPrimaryActive',
  'onDarkTextPrimary96',
  'onDarkTextPrimary56',
  'onDarkTextPrimary28',
  'onLightTextPrimary',
  'onLightTextPrimaryHover',
  'onLightTextPrimaryActive',
  'surfaceSolidCard',
  'surfaceAccentMinor',
  'surfaceSolidDefault',
  'surfaceSolidTertiary',
  'surfaceAccent',
  'surfaceAccentHover',
  'surfaceAccentActive',
  'surfaceTransparentSecondary',
  'surfaceTransparentSecondaryHover',
  'surfaceTransparentSecondaryActive',
  'surfaceTransparentTertiary',
  'surfaceTransparentDeep',
  'surfaceClear',
  'surfacePositive',
  'surfacePositiveHover',
  'surfacePositiveActive',
  'surfaceWarning',
  'surfaceWarningHover',
  'surfaceWarningActive',
  'surfaceWarningMinor56',
  'surfaceNegative',
  'surfaceNegativeHover',
  'surfaceNegativeActive',
  'disabled',
  'surfaceTransparentAccent',
  'surfaceTransparentAccent12',
  'surfaceTransparentAccent20',
  'surfaceTransparentPositive',
  'surfaceTransparentPositive12',
  'surfaceTransparentPositive20',
  'surfaceTransparentWarning',
  'surfaceTransparentWarning12',
  'surfaceTransparentWarning20',
  'surfaceTransparentNegative',
  'surfaceTransparentNegative12',
  'surfaceTransparentNegative20',
  'onLightSurfaceSolidDefault',
  'onLightSurfaceTransparentDeep',
  'onDarkSurfaceSolidDefault',
  'onDarkSurfaceTransparentCard',
  'outlineAccent',
  'outlineSolidPrimary',
  'outlineSolidPrimary26',
  'dataBlueMinor',
  'dataBlueMinorActive',
  'dataBlue',
  'dataAccentMinorHover',
  'dataPositive',
  'dataPositiveMinor',
  'dataNegative',
  'dataNegativeMinor',
  'dataWarning',
  'dataWarningMinor',
  'dataOrange',
  'dataOrangeMinor',
  'dataViolet',
  'dataVioletMinor',
  'dataPink',
  'dataMagenta',
  'dataCyan',
  'dataCyanDark',
  'dataLime',
  'dataTeal',
];

// ─── Таблица маппинга (исключения из kebab-case) ───
// Семантические алиасы data* выведены по совпадению hex в light-теме 0.79.1
// (наш dataPositive исторически = CSS data-green-minor и т.д.).

const MAPPING = {
  // data-палитра: имена команды → имена атомарки (по значению)
  dataBlue: { var: 'data-electric-blue-minor' },
  dataAccentMinorHover: { var: 'data-blue-mild' },
  dataPositive: { var: 'data-green-minor' },
  dataPositiveMinor: { var: 'surface-positive-minor' },
  dataNegative: { var: 'data-red-minor' },
  dataNegativeMinor: { var: 'data-red-light' },
  dataWarning: { var: 'data-orange-minor' },
  dataWarningMinor: { var: 'data-orange-light' },
  dataOrange: { var: 'data-yellow' },
  dataOrangeMinor: { var: 'data-yellow-minor' },
  dataVioletMinor: { var: 'data-orchid-minor' },
  dataMagenta: { var: 'data-fuchsia-minor' },
  dataCyan: { var: 'data-malachite-minor' },
  dataCyanDark: { var: 'data-malachite' },
  dataLime: { var: 'data-spring' },
  dataBlueMinorActive: { var: 'data-blue-minor-active' },

  // альфа-производные: RGB базовой переменной + альфа-байт
  textAccentTransparent20: { alpha: ['text-accent', '33'] },
  surfaceTransparentAccent12: { alpha: ['surface-transparent-accent', '1E'] },
  surfaceTransparentAccent20: { alpha: ['surface-transparent-accent', '33'] },
  surfaceTransparentPositive12: {
    alpha: ['surface-transparent-positive', '1E'],
  },
  surfaceTransparentPositive20: {
    alpha: ['surface-transparent-positive', '33'],
  },
  surfaceTransparentWarning12: { alpha: ['surface-transparent-warning', '1E'] },
  surfaceTransparentWarning20: { alpha: ['surface-transparent-warning', '33'] },
  surfaceTransparentNegative12: {
    alpha: ['surface-transparent-negative', '1E'],
  },
  surfaceTransparentNegative20: {
    alpha: ['surface-transparent-negative', '33'],
  },
  outlineSolidPrimary26: { alpha: ['outline-solid-primary', '42'] },
  surfaceWarningMinor56: { alpha: ['data-yellow', '8E'] },

  // пины: аналога в CSS нет или соответствие не подтверждено — значения из
  // текущего tokens.ts по темам (тёмные без данных наследуют light, TODO дизайнеру)
  disabled: {
    pin: { light: '#DDDDDD' },
    why: 'в CSS тем нет переменной disabled',
  },
  textTertiaryBase: {
    pin: { light: '#8A959D', highContrastLight: '#818C95' },
    why: 'кандидаты outline-solid-secondary / data-gray — выбор за дизайнером',
  },
  textTertiaryVariant: {
    pin: { light: '#657179', highContrastLight: '#65717A' },
    why: 'кандидат outline-solid-tertiary — выбор за дизайнером',
  },
  onDarkTextPrimary96: {
    pin: { light: '#F7F9FBF4' },
    why: 'RGB не совпадает с on-dark-text-primary текущей темы — источник не найден',
  },
  onDarkTextPrimary56: {
    pin: { light: '#F7F9FB8E' },
    why: 'RGB не совпадает с on-dark-text-primary текущей темы — источник не найден',
  },
  onDarkTextPrimary28: {
    pin: { light: '#F7F9FB47' },
    why: 'RGB не совпадает с on-dark-text-primary текущей темы — источник не найден',
  },
  dataViolet: {
    pin: { light: '#AD42F5', highContrastLight: '#9A29E0' },
    why: 'ближайший в теме data-orchid #C46BFF — замену должен подтвердить дизайнер',
  },
  dataTeal: {
    pin: { light: '#14CC98', highContrastLight: '#00B082' },
    why: 'ближайший в теме data-arctic #00AC7B — замену должен подтвердить дизайнер',
  },
};

// ─── Парсинг ───

const parseTheme = (file) => {
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const vars = {};
  for (const m of text.matchAll(
    /--([a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{3,8})\b/g,
  )) {
    // первое вхождение — значение :root текущей темы
    if (!(m[1] in vars)) vars[m[1]] = m[2].toUpperCase();
  }
  return vars;
};

const kebab = (key) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d+)$/, '$1-$2')
    .toLowerCase();

const rgbOf = (hex) => {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  return `#${h.slice(0, 6).toUpperCase()}`;
};

// ─── Сборка ───

const varsByTheme = {};
for (const theme of THEMES)
  varsByTheme[theme] = parseTheme(THEME_SOURCES[theme]);

const tokens = {}; // { theme: { key: hex } }
const report = []; // строки отчёта
for (const theme of THEMES) tokens[theme] = {};

for (const key of KEYS) {
  const rule = MAPPING[key] ?? {};
  for (const theme of THEMES) {
    const vars = varsByTheme[theme];
    const baseTheme = MODE_BASE[theme];
    let value;
    let origin;

    if (rule.pin) {
      value = rule.pin[theme] ?? rule.pin[baseTheme] ?? rule.pin.light;
      origin = `пин (${rule.why})`;
    } else if (rule.alpha) {
      const [baseVar, alphaByte] = rule.alpha;
      const baseValue =
        vars[baseVar] ??
        varsByTheme[baseTheme][baseVar] ??
        varsByTheme.light[baseVar];
      value = rgbOf(baseValue) + alphaByte;
      origin = vars[baseVar]
        ? `альфа: ${baseVar} + ${alphaByte}`
        : `альфа: ${baseVar} + ${alphaByte} (база унаследована)`;
    } else {
      const varName = rule.var ?? kebab(key);
      value = vars[varName];
      origin = rule.var ? `алиас → --${varName}` : `--${varName}`;
      if (value === undefined) {
        value = varsByTheme[baseTheme][varName] ?? varsByTheme.light[varName];
        origin += ` (нет в теме, унаследовано из ${
          varsByTheme[baseTheme][varName] ? baseTheme : 'light'
        })`;
      }
    }

    if (value === undefined) {
      throw new Error(`Нет значения: ${key} / ${theme}`);
    }
    tokens[theme][key] = value;
    if (origin.includes('пин') || origin.includes('унаслед')) {
      report.push(`| \`${key}\` | ${theme} | \`${value}\` | ${origin} |`);
    }
  }
}

// ─── Выпуск TS ───

const emitTheme = (name, theme) => {
  const lines = [`export const ${name} = {`];
  for (const key of KEYS) lines.push(`  ${key}: '${tokens[theme][key]}',`);
  lines.push('} as const;');
  return lines.join('\n');
};

const header = `/**
 * АВТОГЕНЕРИРОВАНО из generators/theme-tokens — НЕ ПРАВИТЬ РУКАМИ.
 * Перегенерация: node generators/theme-tokens/generate-theme-tokens.js
 *
 * Токены тем для canvas-рендереров TableGlide, собранные из CSS-переменных
 * пакетов атомарной команды (@salutejs/sdds-themes, beta core, high contrast).
 * Карта соответствий и ручные пины — generators/theme-tokens/generate-theme-tokens.js,
 * происхождение каждого нестандартного значения — generators/theme-tokens/report.md.
 */

`;

fs.writeFileSync(
  OUT_TS,
  `${
    header +
    [
      emitTheme('TOKENS_LIGHT', 'light'),
      emitTheme('TOKENS_DARK', 'dark'),
      emitTheme('TOKENS_BETA_LIGHT', 'betaCoreLight'),
      emitTheme('TOKENS_BETA_DARK', 'betaCoreDark'),
      emitTheme('TOKENS_HC_LIGHT', 'highContrastLight'),
      emitTheme('TOKENS_HC_DARK', 'highContrastDark'),
    ].join('\n\n')
  }\n`,
);

fs.writeFileSync(
  OUT_REPORT,
  `# Отчёт генератора токенов тем

Сгенерировано: ${new Date()
    .toISOString()
    .slice(0, 10)}. Ниже — все значения, которые
взяты НЕ напрямую из переменной своей темы: пины (нет аналога в CSS или соответствие
не подтверждено) и наследования (переменной нет в теме — взята база того же режима).
Прямые попадания в отчёт не включаются.

| Ключ | Тема | Значение | Происхождение |
|---|---|---|---|
${report.join('\n')}
`,
);

const pinCount = report.filter((r) => r.includes('пин')).length;
const inheritCount = report.length - pinCount;
console.log(
  `theme-tokens.generated.ts: ${KEYS.length} ключей × ${THEMES.length} тем; пинов: ${pinCount}, наследований: ${inheritCount} (см. report.md)`,
);
