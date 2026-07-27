import type { DebugLogger, DebugNamespace } from './types';

/**
 * Фабрика debug-логгеров с управлением через `window.__<NAMESPACE>_DEBUG__`.
 *
 * Активация в консоли браузера:
 *   window.__TABLE_DEBUG__ = true     — включить логи для namespace "TABLE"
 *   window.__SCROLLBAR_DEBUG__ = true — включить для "SCROLLBAR"
 *   window.__DEBUG__ = true           — включить для namespace "DEBUG" (по умолчанию)
 *
 * Логи выводятся через console.debug — в DevTools нужно включить
 * уровень "Verbose" / "Debug" в фильтрах консоли.
 *
 * @example
 * const tableDebug = createDebugLogger('TABLE');
 * tableDebug('[TableCanvas]', 'render', { rowsCount: 10 });
 *
 * @example
 * const scrollDebug = createDebugLogger('SCROLLBAR');
 * scrollDebug('[CustomScrollbar]', 'thumb resize', { height: 120 });
 */
export function createDebugLogger(namespace: DebugNamespace = ''): DebugLogger {
  const windowKey = namespace ? `__${namespace}_DEBUG__` : '__DEBUG__';

  return (prefix: string, message: string, data?: unknown) => {
    if (
      typeof window !== 'undefined' &&
      (window as unknown as Record<string, unknown>)[windowKey]
    ) {
      if (data !== undefined) {
        // eslint-disable-next-line no-console
        console.debug(prefix, message, data);
      } else {
        // eslint-disable-next-line no-console
        console.debug(prefix, message);
      }
    }
  };
}
