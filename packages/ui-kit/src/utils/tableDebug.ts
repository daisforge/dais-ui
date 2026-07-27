import { createDebugLogger } from '@ui-kit/shared/utils/debug';

/**
 * Debug-логгер для TableCanvas / TableGlide.
 *
 * Активация в консоли браузера:
 *   window.__TABLE_DEBUG__ = true    — включить все логи
 *   window.__TABLE_DEBUG__ = false   — выключить
 *
 * Использование:
 *   import { tableDebug } from '@ui-kit/utils/tableDebug';
 *   tableDebug('[TableCanvas]', 'render', { rowsCount: 10 });
 */
export const tableDebug = createDebugLogger('TABLE');
