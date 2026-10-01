export type ActiveThemeGlobal =
  | 'light'
  | 'dark'
  | 'highContrastLight'
  | 'highContrastDark'
  | 'betaCoreLight'
  | 'betaCoreDark';

const KNOWN_THEMES: readonly ActiveThemeGlobal[] = [
  'light',
  'dark',
  'highContrastLight',
  'highContrastDark',
  'betaCoreLight',
  'betaCoreDark',
];

/**
 * Получение активной темы
 * @returns значение активной темы
 */
export const getActiveTheme = (): ActiveThemeGlobal => {
  const theme = document.documentElement.getAttribute('data-theme');

  return KNOWN_THEMES.find((known) => known === theme) ?? 'light';
};
