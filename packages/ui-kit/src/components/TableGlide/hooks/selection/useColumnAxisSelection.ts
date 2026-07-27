import { CompactSelection } from '@glideappsfinal/glide-data-grid';
import { useCallback, useMemo, useRef, useState } from 'react';

import type { ColumnGlideLast, ObjectForExtending } from '../../types';

interface UseColumnAxisSelectionParams<
  R extends ObjectForExtending,
  SR = unknown
> {
  columns: readonly ColumnGlideLast<R, SR>[];
}

/**
 * Ось выделения КОЛОНОК по клику на шапку (независимая от glide selection).
 *
 * Выделенные колонки храним ОТДЕЛЬНО от glide `selection.columns`: иначе glide
 * красит шапку accentColor поверх нашего мягкого цвета. Здесь — только состояние
 * и производные индексы; сама логика клика по шапке (одиночный/Shift/Ctrl,
 * select-all) живёт в оркестраторе `useTableSelectionSystem`, который владеет
 * взаимоисключением осей.
 */
export function useColumnAxisSelection<
  R extends ObjectForExtending,
  SR = unknown
>({ columns }: UseColumnAxisSelectionParams<R, SR>) {
  const [selectedColumns, setSelectedColumns] = useState<CompactSelection>(() =>
    CompactSelection.empty()
  );

  // Источник для подсветки и copy; без сервисных колонок.
  const selectedColumnIndexes = useMemo(
    () =>
      selectedColumns
        .toArray()
        .filter((columnIndex) => !columns[columnIndex]?.isServiceColumn),
    [selectedColumns, columns]
  );

  const selectedColumnSet = useMemo(
    () => new Set(selectedColumnIndexes),
    [selectedColumnIndexes]
  );

  // Последняя кликнутая по шапке колонка — якорь для shift-диапазона.
  const lastSelectedColumnRef = useRef<number | undefined>(undefined);

  // true, когда текущее нативное выделение — синтетический range колонки
  // (клик по шапке). Нужен, чтобы погасить focus-ring на якоре колонки (иначе
  // glide рисует яркую верхнюю ячейку).
  const [isNativeColumnSelection, setIsNativeColumnSelection] = useState(false);

  const clearColumnSelection = useCallback(() => {
    setSelectedColumns(CompactSelection.empty());
  }, []);

  return {
    selectedColumns,
    setSelectedColumns,
    selectedColumnIndexes,
    selectedColumnSet,
    lastSelectedColumnRef,
    isNativeColumnSelection,
    setIsNativeColumnSelection,
    clearColumnSelection,
  };
}
