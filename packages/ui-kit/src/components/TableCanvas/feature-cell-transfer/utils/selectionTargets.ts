import type { GridSelection } from '@glideappsfinal/glide-data-grid';

import type { TransferColumnConfig } from '../types';

/**
 * Разбор выделения для copy/paste. Эти хелперы переиспользуются в useCopy и
 * usePaste, чтобы не дублировать классификацию выделения и извлечение индексов.
 *
 * Приоритет осей (как и в самих хуках): сначала ячейки (current), затем колонки,
 * затем строки. Колонки и строки приходят к нам через onGridSelectionChange из
 * TableGlide (selection.columns / selection.rows), current — нативный glide.
 */

/** Выбраны только КОЛОНКИ (нет current, есть непустой columns). */
export const hasColumnsOnlySelection = (
  selection: GridSelection | null,
): boolean =>
  !selection?.current && !!selection?.columns && selection.columns.length > 0;

/** Выбраны только СТРОКИ (нет current, нет колонок, есть непустой rows). */
export const hasRowsOnlySelection = (
  selection: GridSelection | null,
): boolean =>
  !selection?.current &&
  !hasColumnsOnlySelection(selection) &&
  !!selection?.rows &&
  selection.rows.length > 0;

/**
 * Индексы выделенных колонок данных (по возрастанию, без сервисных колонок).
 */
export const getSelectedDataColumnIndexes = (
  selection: GridSelection | null,
  columns: readonly TransferColumnConfig[],
): number[] =>
  (selection?.columns?.toArray() ?? [])
    .filter((colInd) => !columns[colInd]?.isServiceColumn)
    .sort((a, b) => a - b);

/** Индексы выделенных строк (по возрастанию). */
export const getSelectedRowIndexes = (
  selection: GridSelection | null,
): number[] => (selection?.rows?.toArray() ?? []).sort((a, b) => a - b);

/**
 * Непрерывен ли отсортированный набор индексов (нет разрывов).
 * Несмежный набор (Ctrl) → false: его нельзя описать одним прямоугольником,
 * вставка/копирование идут по явному списку индексов.
 */
export const isContiguousIndexes = (sorted: number[]): boolean => {
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  if (first === undefined || last === undefined) return false;
  return last - first + 1 === sorted.length;
};
