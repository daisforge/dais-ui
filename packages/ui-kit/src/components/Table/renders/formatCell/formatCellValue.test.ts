import { describe, expect, it, vi } from 'vitest';

import type { ContentFormat } from '../../types';
import { formatCellValue } from './formatCellContent';

describe('formatCellValue', () => {
  // Тесты для базовых случаев
  it('should return empty string for null/undefined', () => {
    expect(formatCellValue(null)).toBe('');
    expect(formatCellValue(undefined)).toBe('');
  });

  it('should return string as is for string format', () => {
    expect(formatCellValue('test')).toBe('test');
    expect(formatCellValue('123')).toBe('123');
  });

  // Тесты для числового форматирования
  it('should format numbers with default options', () => {
    expect(
      formatCellValue(1234.567, {
        type: 'number',
        thousandSeparator: ' ',
        decimalSeparator: ',',
      }),
    ).toBe('1 234,57');
    expect(
      formatCellValue(1000, { type: 'number', thousandSeparator: ' ' }),
    ).toBe('1 000');
  });

  // Тесты для кастомного форматирования
  it('should pass raw value to customFormat', () => {
    const customFormat = vi.fn((val: string) => `$${val}`);
    const result = formatCellValue(1000, {
      customFormat,
    });

    // customFormat получает "1000" (без форматирования)
    expect(customFormat).toHaveBeenCalledWith('1000');
    // и добавляет $ → "$1000"
    expect(result).toBe('$1000');
  });

  it('should pass string value directly to customFormat', () => {
    const customFormat = vi.fn((val: string) => val.toUpperCase());
    const result = formatCellValue('hello', {
      customFormat,
    });

    expect(customFormat).toHaveBeenCalledWith('hello');
    expect(result).toBe('HELLO');
  });

  it('should ignore invalid customFormat', () => {
    const result = formatCellValue(1000, {
      customFormat: 'not-a-function',
    } as unknown as ContentFormat);

    expect(result).toBe('1000');
  });

  // Тесты для расширенных параметров форматирования
  describe('number formatting options', () => {
    it('should respect custom separators', () => {
      const result = formatCellValue(1234.56, {
        type: 'number',
        thousandSeparator: ',',
        decimalSeparator: '.',
      });

      expect(result).toBe('1,234.56');
    });

    it('should respect fraction digits settings', () => {
      const result = formatCellValue(1234.5678, {
        type: 'number',
        thousandSeparator: ' ',
        decimalSeparator: ',',
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      });

      expect(result).toBe('1 234,5678');
    });

    it('should disable grouping when useGrouping=false', () => {
      const result = formatCellValue(1234.56, {
        type: 'number',
        useGrouping: false,
      });

      expect(result).toBe('1234,56');
    });
  });

  // Тесты для разных типов данных
  it('should format boolean values correctly', () => {
    expect(formatCellValue(true)).toBe('true');
    expect(formatCellValue(false)).toBe('false');
  });

  it('should format objects with JSON.stringify', () => {
    const obj = { a: 1 };
    expect(formatCellValue(obj)).toBe(JSON.stringify(obj));
  });

  // Тесты для edge cases
  it('should handle NaN values', () => {
    expect(formatCellValue(NaN, 'number')).toBe('NaN');
  });

  it('should use default string formatting for unknown format types', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(formatCellValue(1234.56, 'unknown' as any)).toBe('1234.56');
  });

  // Тест для кастомного форматирования нечисловых значений
  it('should apply customFormat to non-number values', () => {
    const customFormat = vi.fn((val: string) => val.toUpperCase());
    const result = formatCellValue('test', {
      type: 'string',
      customFormat,
    } as ContentFormat);

    expect(result).toBe('TEST');
    expect(customFormat).toHaveBeenCalledWith('test');
  });

  // Тест для локалей
  it('should respect different locales', () => {
    const result = formatCellValue(1234.56, {
      type: 'number',
      locales: 'en-US',
    });

    // Ожидаемый результат зависит от среды выполнения,
    // но обычно для en-US используется точка как десятичный разделитель
    expect(result).toMatch(/1[, ]234\.56/);
  });
});
