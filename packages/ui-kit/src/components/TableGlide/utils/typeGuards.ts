import type { GridCell } from '@glideappsfinal/glide-data-grid';
import { isValidElement } from 'react';

import { CanvasEl, CellContent } from '../types';

export function isGlideGridCellObj(cell: CellContent): cell is GridCell {
  const cellTyped = cell as GridCell;
  return !!cellTyped?.kind;
}

export function isObject(value: unknown) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Проверяет, является ли значение примитивом (не объект и не массив, или null)
 */
export function isPrimitive(
  value: unknown
): value is number | string | boolean | null | undefined {
  return (typeof value !== 'object' && !Array.isArray(value)) || value === null;
}

/**
 * Проверяет, должно ли значение рендериться как пустая ячейка.
 * (null, undefined и boolean значения не должны отображаться как текст)
 */
export function isValueEmpty(
  value: unknown
): value is boolean | null | undefined {
  return value === null || value === undefined || typeof value === 'boolean';
}

export const isCanvasEl = (element: unknown): element is CanvasEl => {
  if (!element) {
    return false;
  }

  if (!isValidElement(element)) {
    return false;
  }
  const elementType = element.type;
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-explicit-any
  const isHaveCanvasType = !!(elementType as any)?.__canvasType;
  return isHaveCanvasType;
};
export const isCanvasString = (element: unknown): element is string =>
  typeof element === 'string';

export const isCanvasContent = (
  element: unknown
): element is CanvasEl | string => {
  if (isCanvasString(element)) {
    return true;
  }

  return isCanvasEl(element);
};

export const isGlideCellObj = (element: unknown): element is GridCell => {
  if (isCanvasString(element)) {
    return true;
  }

  return isCanvasEl(element);
};
