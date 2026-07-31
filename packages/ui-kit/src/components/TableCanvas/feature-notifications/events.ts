import type { TableNotification } from './types';

/**
 * Фабрики стандартных событий — держим тексты и коды в одном месте, чтобы
 * useCopy/usePaste не дублировали строки. Потребитель может игнорировать
 * `message` и показывать свой текст по `type`/`code`.
 */
export const notifications = {
  copyMultiRangeScattered: (): TableNotification => ({
    type: 'copy',
    level: 'error',
    code: 'multi-range-scattered',
    message:
      'Нельзя скопировать разрозненный выбор сразу по разным строкам и колонкам.',
  }),

  pasteMultiRangeScattered: (): TableNotification => ({
    type: 'paste',
    level: 'error',
    code: 'multi-range-scattered',
    message:
      'Нельзя вставить в разрозненный выбор сразу по разным строкам и колонкам.',
  }),

  pasteReadonlyAbort: (): TableNotification => ({
    type: 'paste',
    level: 'error',
    code: 'readonly-abort',
    message: 'Вставка отменена: в области вставки есть нередактируемые ячейки.',
  }),

  pasteOverflowAbort: (): TableNotification => ({
    type: 'paste',
    level: 'error',
    code: 'overflow-abort',
    message: 'Вставка отменена: данные не помещаются в границы таблицы.',
  }),

  pasteValidationSkipped: (count: number): TableNotification => ({
    type: 'paste',
    level: 'warning',
    code: 'validation-skipped',
    message: `Часть значений пропущена (${count}): не соответствуют типу ячеек.`,
    meta: { count },
  }),

  fillReadonlyAbort: (): TableNotification => ({
    type: 'fill',
    level: 'error',
    code: 'readonly-abort',
    message:
      'Автозаполнение отменено: в области заполнения есть нередактируемые ячейки.',
  }),

  fillValidationSkipped: (count: number): TableNotification => ({
    type: 'fill',
    level: 'warning',
    code: 'validation-skipped',
    message: `Часть значений пропущена (${count}): не соответствуют типу ячеек.`,
    meta: { count },
  }),

  pinNoSelection: (): TableNotification => ({
    type: 'pin',
    level: 'warning',
    code: 'no-selection',
    message: 'Выберите, что закрепить',
  }),
};
