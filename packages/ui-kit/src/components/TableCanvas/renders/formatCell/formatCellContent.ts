import {
  ContentFormat,
  NumberFormatOptions
} from '../../TableGlideInstance/type';

/**
 * Безопасное приведение значения к строке
 * @param value - Значение для преобразования
 * @returns Строковое представление значения
 */
function safeStringFormat(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') {
    return value.toString();
  }
  return JSON.stringify(value);
}

/**
 * Форматирует число с учетом локали и кастомных разделителей
 * @param value - Значение для форматирования
 * @param options - Настройки форматирования
 * @returns Отформатированная строка числа
 */
function formatNumber(
  value: unknown,
  options: Partial<NumberFormatOptions> = {}
): string {
  if (value === null || value === undefined) return '';

  const num = Number(value);
  if (Number.isNaN(num)) return safeStringFormat(value);

  const formatter = new Intl.NumberFormat(options.locales ?? 'ru-RU', {
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
    maximumFractionDigits: options.maximumFractionDigits ?? 2,
    useGrouping: options.useGrouping ?? true
  });

  // Если не нужно заменять разделители - возвращаем как есть
  if (!options.thousandSeparator && !options.decimalSeparator) {
    return formatter.format(num);
  }

  // Разбираем на части и заменяем только разделители
  return formatter
    .formatToParts(num)
    .map((part) => {
      if (part.type === 'group' && options.thousandSeparator) {
        return { ...part, value: options.thousandSeparator };
      }
      if (part.type === 'decimal' && options.decimalSeparator) {
        return { ...part, value: options.decimalSeparator };
      }
      return part;
    })
    .map((part) => part.value)
    .join('');
}

/**
 * Форматирует значение ячейки согласно указанному формату
 * @param value - Значение для форматирования
 * @param format - Настройки форматирования
 * @returns Отформатированное значение (строка или ReactNode)
 */
export const formatCellValue = (
  value: unknown,
  format?: ContentFormat
): string => {
  if (format === undefined) return safeStringFormat(value);

  // Кастомное форматирование имеет приоритет
  if (typeof format === 'object' && 'customFormat' in format) {
    if (typeof format.customFormat === 'function') {
      // TODO в типах format.customFormat должен возвращать string
      const v = format.customFormat(safeStringFormat(value));

      if (typeof v !== 'string') {
        throw new Error('format.customFormat должен возвращать string');
      }
      return v;
    }
    return safeStringFormat(value);
  }

  // Базовые типы форматирования
  if (format === 'number')
    return formatNumber(value, {
      locales: 'ru-RU',
      thousandSeparator: ' ',
      decimalSeparator: ','
    });

  // Расширенные варианты форматирования
  if (typeof format === 'object') {
    if ('type' in format && format.type === 'number') {
      return formatNumber(value, {
        decimalSeparator: format.decimalSeparator,
        thousandSeparator: format.thousandSeparator,
        locales: format.locales,
        minimumFractionDigits: format.minimumFractionDigits,
        maximumFractionDigits: format.maximumFractionDigits,
        useGrouping: format.useGrouping
      });
    }
  }

  return safeStringFormat(value);
};
