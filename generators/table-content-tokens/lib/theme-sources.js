/** Шесть тем из единого пакета SDDS; пути от корня репозитория. */
export const THEME_SOURCES = {
  light: 'node_modules/@sddsjs/sdds_finai/css/sdds_finai_default__light.css',
  dark: 'node_modules/@sddsjs/sdds_finai/css/sdds_finai_default__dark.css',
  betaCoreLight:
    'node_modules/@sddsjs/sdds_finai/css/sdds_finai_beta_core__light.css',
  betaCoreDark:
    'node_modules/@sddsjs/sdds_finai/css/sdds_finai_beta_core__dark.css',
  highContrastLight:
    'node_modules/@sddsjs/sdds_finai/css/sdds_finai_high_contrast__light.css',
  highContrastDark:
    'node_modules/@sddsjs/sdds_finai/css/sdds_finai_high_contrast__dark.css',
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
