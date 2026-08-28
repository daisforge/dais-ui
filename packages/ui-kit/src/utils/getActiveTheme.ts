export type ActiveThemeGlobal =
  | 'light'
  | 'dark'
  | 'highContrastLight'
  | 'betaCoreLight';

/**
 * Получение активной темы
 * @returns значение активной темы
 */
export const getActiveTheme = (): ActiveThemeGlobal => {
  const theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'dark') return 'dark';
  if (theme === 'highContrastLight') return 'highContrastLight';
  if (theme === 'betaCoreLight') return 'betaCoreLight';
  return 'light';
};
