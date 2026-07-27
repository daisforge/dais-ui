export type ActiveThemeGlobal = 'light' | 'dark' | 'highContrastLight';

/**
 * Получение активной темы
 * @returns значение активной темы
 */
export const getActiveTheme = (): ActiveThemeGlobal => {
  const theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'dark') return 'dark';
  if (theme === 'highContrastLight') return 'highContrastLight';
  return 'light';
};
