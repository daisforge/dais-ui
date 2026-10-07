/**
 * Источники шести тем — файлы пакетов атомарной команды в node_modules
 * (пути от корня репозитория).
 *
 * light/dark — CSS-файлы @salutejs/sdds-themes. Beta core и high contrast
 * поставляются JS-модулями, но внутри лежат те же строки `--token: #HEX`,
 * поэтому все шесть файлов читаются одним парсером (см. parse-css-variables).
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
 * Базовая тема того же режима — у производных тем (beta, high contrast) есть
 * не все переменные; отсутствующие наследуются из базовой светлой/тёмной.
 * Каждое такое наследование попадает в report.md.
 */
export const MODE_BASE = {
  light: 'light',
  dark: 'dark',
  betaCoreLight: 'light',
  betaCoreDark: 'dark',
  highContrastLight: 'light',
  highContrastDark: 'dark',
};
