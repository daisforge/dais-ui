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
