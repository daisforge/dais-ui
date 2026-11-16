/** Короткие предметные синонимы для сущностей с техническими английскими именами. */
export const FEATURE_SEARCH_HINTS: Record<string, string> = {
  ColumnsGrouping:
    'группировка группировки колонок столбцов column grouping grouped columns',
  RowsGrouping: 'группировка группировки строк rows grouping grouped rows',
  InfinityScroll:
    'бесконечная прокрутка прокрутки строк подгрузка infinite scroll lazy loading',
};
export const TYPE_SEARCH_HINTS: Record<string, string> = {
  NumberFormatOptions:
    'формат форматирование числа чисел колонке колонках столбце number column format formatting decimal precision',
  ContentFormat:
    'формат форматирование содержимого ячеек колонке столбце cell content column format',
};
export const COMPONENT_SEARCH_HINTS: Record<string, string> = {
  FormDatePicker: 'поле ввода даты дата форме формы form date input picker',
  FormDatePickerRange: 'диапазон дат даты форме формы form date range picker',
};

/** Несколько совпавших слов важнее единичного совпадения в длинной документации. */
export function scoreSearchHints(
  hints: string | undefined,
  tokens: string[],
): number {
  const words = new Set((hints || '').split(/\s+/));
  const hits = new Set(tokens.filter((token) => words.has(token))).size;
  return hits >= 2 ? hits * 18 : hits * 4;
}
