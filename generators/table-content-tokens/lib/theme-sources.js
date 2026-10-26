/**
 * Где лежат шесть тем — файлы пакетов атомарной команды в node_modules
 * (пути от корня репозитория).
 *
 * light/dark — CSS-файлы @salutejs/sdds-themes. Beta core и high contrast
 * приходят JS-файлами, но внутри у них те же строки `--имя: #ЦВЕТ`,
 * поэтому все шесть файлов читаются одинаково (см. parse-css-variables.js).
 */
export const THEME_SOURCES = {
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

export const THEMES = Object.keys(THEME_SOURCES);

/**
 * Запасная тема для каждой темы. В beta и high contrast есть не все
 * переменные: если нужной нет, цвет берётся из обычной светлой или тёмной
 * темы (смотря, светлая это тема или тёмная). Каждый такой случай
 * записывается в report.md.
 */
export const MODE_BASE = {
  light: 'light',
  dark: 'dark',
  betaCoreLight: 'light',
  betaCoreDark: 'dark',
  highContrastLight: 'light',
  highContrastDark: 'dark',
};

/**
 * Темы, в которых семья data-*-light называется data-*-on-light, а
 * data-yellow-dark — data-yellow-on-dark (beta core и контрастная). Это
 * одна семья на тех же ступенях палитры, просто другое имя (ответ
 * дизайнера от 19.10.2026).
 */
export const ON_LIGHT_NAMING_THEMES = [
  'betaCoreLight',
  'betaCoreDark',
  'highContrastLight',
  'highContrastDark',
];

/** Имя переменной в конкретной теме: data-red-light → data-red-on-light в beta и контрастной. */
export const variableNameInTheme = (variableName, theme) => {
  if (!ON_LIGHT_NAMING_THEMES.includes(theme)) {
    return variableName;
  }
  return variableName.replace(/^(data-[a-z-]+)-(light|dark)$/, '$1-on-$2');
};
