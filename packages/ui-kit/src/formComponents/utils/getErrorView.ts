import type { FieldError } from 'react-hook-form';

/**
 * Поле подсвечивается при любой ошибке, даже если у неё нет текста
 * (например, `required: true` без сообщения).
 */
export const getErrorView = <TView extends string>(
  error: FieldError | undefined,
  view: TView | undefined,
): TView | 'negative' | 'default' => (error ? 'negative' : view ?? 'default');
