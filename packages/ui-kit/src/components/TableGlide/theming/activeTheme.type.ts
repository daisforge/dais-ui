import type { TableColorTheme } from './table-colors.generated';

/**
 * Темы таблицы — шесть, по палитре генератора (generators/table-token-states).
 * Примечания: highContrastDark — темы нет и не планируется, значения = копия dark;
 * betaCoreDark пока не детектится глобальным getActiveTheme (нет CSS-темы в приложениях).
 */
export type ActiveTheme = TableColorTheme;
