import { isCanvasContent } from '@ui-kit/components/TableGlide';
import React from 'react';

import type { CellContent } from '../type';

/**
 * Конвертирует ReactNode или любое значение в CellContent (Canvas элемент или строку)
 * @param value - Значение для конвертации
 * @returns CellContent - Canvas элемент, строка или GridCell объект
 */
export const convertToCellContent = (value: unknown): CellContent => {
  // Если уже Canvas элемент или строка, возвращаем как есть
  if (isCanvasContent(value)) {
    return value;
  }

  // Если null или undefined, возвращаем пустую строку
  if (value === null || value === undefined) {
    return '';
  }

  // Если примитив (string, number, boolean), конвертируем в строку
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  // Если React элемент, возвращаем пустую строку, так как они не поддерживаются в Canvas
  if (React.isValidElement(value)) {
    return '';
  }

  // Если объект, пытаемся конвертировать в строку через JSON.stringify
  if (typeof value === 'object') {
    try {
      // Пытаемся найти строковое представление объекта
      if ('toString' in value && typeof value.toString === 'function') {
        const str = value.toString();
        // Если toString возвращает [object Object], используем JSON.stringify
        if (str === '[object Object]') {
          return JSON.stringify(value);
        }
        return str;
      }
      return JSON.stringify(value);
    } catch {
      return '';
    }
  }

  // Для остальных случаев конвертируем в строку
  return String(value);
};
