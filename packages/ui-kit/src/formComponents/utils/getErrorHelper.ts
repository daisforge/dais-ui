import type { FieldError } from 'react-hook-form';

/**
 * Текст ошибки показывается вместо подсказки. Пустой текст ошибки тоже
 * заменяет подсказку: остаётся только подсветка поля.
 */
export const getErrorHelper = <THelper>(
  error: Pick<FieldError, 'message'> | undefined,
  helper: THelper,
): THelper | string | undefined => (error ? error.message ?? helper : helper);
