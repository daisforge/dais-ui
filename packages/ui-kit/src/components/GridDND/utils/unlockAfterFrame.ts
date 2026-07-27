/**
 * Разблокирует состояние после завершения текущего кадра рендеринга
 *
 * Используется для временной блокировки изменений layout во время
 * критических операций (например, смена breakpoint). Разблокировка
 * происходит после завершения текущего кадра, что предотвращает
 * конфликты между различными обновлениями состояния.
 *
 * @param set - функция для установки значения (обычно setState)
 *
 * @example
 * // Блокируем layout
 * setIsLayoutLocked(true);
 *
 * // Выполняем критическую операцию...
 *
 * // Разблокируем после кадра
 * unlockAfterFrame(setIsLayoutLocked);
 */
export const unlockAfterFrame = (set: (value: boolean) => void) => {
  if (typeof requestAnimationFrame === 'function') {
    // Используем requestAnimationFrame для синхронизации с браузерным рендерингом
    requestAnimationFrame(() => set(false));
  } else {
    // Fallback для серверного рендеринга или старых браузеров
    setTimeout(() => set(false), 0);
  }
};
