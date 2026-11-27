import type { GridSelection } from '@daisforge/glide-data-grid';
import { useCallback, useEffect, useMemo } from 'react';

import type { useSelectionGeometry } from './useSelectionGeometry';
import type { useTableSelectionSystem } from './useTableSelectionSystem';

type AxisSelection = Pick<
  ReturnType<typeof useTableSelectionSystem>,
  | 'selectedColumnKeysAll'
  | 'selectedColumnIndexes'
  | 'selectedColumnSet'
  | 'headerSelectedRowIndexes'
>;

interface SelectionHeadersParams {
  axes: AxisSelection;
  hideAxes: boolean;
  geometry: ReturnType<typeof useSelectionGeometry>;
  rangeStack?: NonNullable<GridSelection['current']>['rangeStack'];
  onColumnSelectionChange?: (keys: string[]) => void;
}

// Пока выбор скрыт, шапка, нумерация и панель управления получают пустые наборы.
// Постоянные ссылки сохраняют мемоизацию отрисовки и исключают повторные уведомления.
const EMPTY_INDEXES: number[] = [];
const EMPTY_COLUMN_KEYS: string[] = [];
const EMPTY_COLUMN_SET = new Set<number>();

/** Определяет видимые выделенные строки и колонки для шапки, нумерации и команд таблицы. */
export function useSelectionHeaders({
  axes,
  hideAxes,
  geometry,
  rangeStack,
  onColumnSelectionChange,
}: SelectionHeadersParams) {
  const selectedColumnIndexes = hideAxes
    ? EMPTY_INDEXES
    : axes.selectedColumnIndexes;
  const headerSelectedRowIndexes = hideAxes
    ? EMPTY_INDEXES
    : axes.headerSelectedRowIndexes;
  const selectedColumnSet = hideAxes
    ? EMPTY_COLUMN_SET
    : axes.selectedColumnSet;
  const columnKeys = hideAxes ? EMPTY_COLUMN_KEYS : axes.selectedColumnKeysAll;

  useEffect(() => {
    onColumnSelectionChange?.(columnKeys);
  }, [columnKeys, onColumnSelectionChange]);

  // Основной диапазон уже учтён геометрией. При Ctrl-выборе подсвечиваем также
  // шапки над предыдущими диапазонами. Набор вычисляется один раз для всех шапок.
  const { firstDataColumnIndex, isActiveHeaderColumn } = geometry;
  const stackedColumns = useMemo(() => {
    if (!rangeStack?.length) return EMPTY_COLUMN_SET;
    const indexes = new Set<number>();
    for (const range of rangeStack) {
      const start = Math.max(range.x, firstDataColumnIndex);
      for (let col = start; col < range.x + range.width; col += 1) {
        indexes.add(col);
      }
    }
    return indexes;
  }, [rangeStack, firstDataColumnIndex]);

  const isColumnInSelection = useCallback(
    (index: number) =>
      isActiveHeaderColumn(index) ||
      selectedColumnSet.has(index) ||
      stackedColumns.has(index),
    [isActiveHeaderColumn, selectedColumnSet, stackedColumns],
  );

  // Выделение целой строки затемняет все шапки, но кнопки сортировки и фильтра
  // показываем только для колонок, явно вошедших в выбор.
  return {
    selectedColumnIndexes,
    selectedColumnSet,
    headerSelectedRowIndexes,
    hasSelectedRows: headerSelectedRowIndexes.length > 0,
    isColumnInSelection,
  };
}
