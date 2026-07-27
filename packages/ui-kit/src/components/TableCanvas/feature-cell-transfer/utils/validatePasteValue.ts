import { ContentFormat } from '../../TableGlideInstance/type';
import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';

type SelectOption = { value: string | number; text: string | number };

type ValidationCtx = {
  rowContextValue?: ObjectForExtending;
  headerContextValue?: ObjectForExtending;
};

/**
 * Проверяет, можно ли вставить строку `value` в ячейку колонки `column`.
 * Вызывается только при `paste.validation: 'type-check'`.
 *
 * Правила:
 * - `inputNumber` или `contentFormat.type === 'number'` — значение должно
 *   парситься в число с учётом разделителей колонки;
 * - `select` — значение должно быть в `options` (по `value` или `text`);
 * - `inputString` и всё остальное — валидно;
 * - нет `editingCell` — невалидно (readonly-колонка, до сюда доходить не должно).
 */
export function validatePasteValue(
  value: string,
  column: TransferColumnConfig,
  ctxs: ValidationCtx
): boolean {
  const { editingCell, contentFormat } = column;
  if (!editingCell) return false;

  const component =
    typeof editingCell.component === 'string'
      ? editingCell.component
      : undefined;

  if (component === 'inputNumber') {
    return isParsableNumber(value, contentFormat);
  }

  const isNumberFormat =
    contentFormat === 'number' ||
    (typeof contentFormat === 'object' &&
      'type' in contentFormat &&
      contentFormat.type === 'number');

  if (isNumberFormat && component !== 'select') {
    return isParsableNumber(value, contentFormat);
  }

  if (component === 'select' && 'options' in editingCell) {
    const options = resolveSelectOptions(editingCell.options, ctxs);
    if (!options) return true;
    return options.some(
      (opt) => String(opt.value) === value || String(opt.text) === value
    );
  }

  return true;
}

/**
 * Извлекает разделители из contentFormat.
 */
function getNumberSeparators(contentFormat?: ContentFormat): {
  decimalSep: string;
  thousandSep: string;
} {
  let decimalSep = '.';
  let thousandSep = '';

  if (
    typeof contentFormat === 'object' &&
    'type' in contentFormat &&
    contentFormat.type === 'number'
  ) {
    if (contentFormat.decimalSeparator)
      decimalSep = contentFormat.decimalSeparator;
    if (contentFormat.thousandSeparator)
      thousandSep = contentFormat.thousandSeparator;
  }

  return { decimalSep, thousandSep };
}

/**
 * Убирает разделители тысяч и приводит десятичный разделитель к `.`.
 */
function stripFormatting(
  value: string,
  decimalSep: string,
  thousandSep: string
): string {
  let normalized = value;
  if (thousandSep) normalized = normalized.split(thousandSep).join('');
  if (decimalSep !== '.') normalized = normalized.replace(decimalSep, '.');
  return normalized;
}

/**
 * Парсится ли `value` в число с учётом разделителей из `contentFormat`.
 * Локаль намеренно не используется: поведение должно быть предсказуемым
 * и зависеть только от явной настройки колонки.
 */
function isParsableNumber(
  value: string,
  contentFormat?: ContentFormat
): boolean {
  if (value.trim() === '') return false;
  const { decimalSep, thousandSep } = getNumberSeparators(contentFormat);
  const normalized = stripFormatting(value, decimalSep, thousandSep);
  return !Number.isNaN(Number(normalized));
}

/**
 * Нормализует вставляемое значение для числовых колонок.
 * Убирает разделители тысяч, заменяет десятичный разделитель на `.`,
 * и конвертирует в число, чтобы поведение paste совпадало с ручным вводом
 * через CellEditorNumberFormat (который сохраняет `floatValue`, а не сырую строку).
 *
 * Для нечисловых колонок возвращает значение как есть.
 */
export function normalizePasteValue(
  value: string,
  column: TransferColumnConfig
): string | number {
  const { editingCell, contentFormat } = column;
  if (!editingCell) return value;

  const component =
    typeof editingCell.component === 'string'
      ? editingCell.component
      : undefined;

  const isNumberColumn =
    component === 'inputNumber' ||
    (component !== 'select' &&
      (contentFormat === 'number' ||
        (typeof contentFormat === 'object' &&
          'type' in contentFormat &&
          contentFormat.type === 'number')));

  if (!isNumberColumn) return value;

  const { decimalSep, thousandSep } = getNumberSeparators(contentFormat);
  const normalized = stripFormatting(value, decimalSep, thousandSep);
  const num = Number(normalized);
  return Number.isNaN(num) ? value : num;
}

/**
 * Извлекает плоский массив опций select-а из `editingCell.options`.
 * Поддерживает три источника: `constant`, `stateInRowContext`,
 * `stateInHeaderContext`. Возвращает `null` если достать опции не удалось
 * (тогда валидация пропускается, чтобы не блокировать вставку).
 */
function resolveSelectOptions(
  config: unknown,
  ctxs: ValidationCtx
): SelectOption[] | null {
  if (!config || typeof config !== 'object' || !('type' in config)) return null;

  const cfg = config as {
    type: string;
    options?: SelectOption[];
    optionsKeyInRowContext?: string;
    optionsKeyInHeaderContext?: string;
  };

  if (cfg.type === 'constant' && cfg.options) return cfg.options;

  if (cfg.type === 'stateInRowContext' && cfg.optionsKeyInRowContext) {
    const options = ctxs.rowContextValue?.[cfg.optionsKeyInRowContext];
    return Array.isArray(options) ? options : null;
  }

  if (cfg.type === 'stateInHeaderContext' && cfg.optionsKeyInHeaderContext) {
    const options = ctxs.headerContextValue?.[cfg.optionsKeyInHeaderContext];
    return Array.isArray(options) ? options : null;
  }

  return null;
}
