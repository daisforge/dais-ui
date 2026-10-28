import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { GlideProps, CellsSelectionMode } from '../../types';
import { findFirstDataColumnIndex } from './rectGeometry';

const EMPTY_SELECTION: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined,
};

/**
 * Сдвигает индексы колонок в выделении на `delta`. Возвращает исходный объект,
 * если сдвигать нечего или после сдвига выделение ушло бы в отрицательные
 * индексы.
 */
export const shiftSelectionColumns = (
  selection: GridSelection,
  delta: number,
): GridSelection => {
  const { current } = selection;
  const hasColumns = selection.columns.length > 0;
  if (delta === 0 || (current === undefined && !hasColumns)) {
    return selection;
  }
  const minColumn = Math.min(
    current?.cell[0] ?? Infinity,
    current?.range.x ?? Infinity,
    ...(current?.rangeStack.map((r) => r.x) ?? []),
    ...(hasColumns ? [selection.columns.first() ?? Infinity] : []),
  );
  if (minColumn + delta < 0) {
    return selection;
  }
  return {
    ...selection,
    columns: hasColumns ? selection.columns.offset(delta) : selection.columns,
    current:
      current === undefined
        ? undefined
        : {
            ...current,
            cell: [current.cell[0] + delta, current.cell[1]],
            range: { ...current.range, x: current.range.x + delta },
            rangeStack: current.rangeStack.map((r) => ({
              ...r,
              x: r.x + delta,
            })),
          },
  };
};

interface UseNativeGridSelectionParams {
  cellsSelectionMode: CellsSelectionMode;
  /**
   * Колонки грида в текущем порядке. Нужны, чтобы при появлении и исчезновении
   * ведущих служебных колонок сдвигать индексы выделения.
   */
  columns: readonly { isServiceColumn?: boolean }[];
  /** Controlled-значение нативного выделения (current/rows/columns). */
  gridSelection?: GridSelection;
  /** Controlled-сеттер нативного выделения (вызывается только в controlled-режиме). */
  onGridSelectionChange?: (newSelection: GridSelection) => void;
  /**
   * Канал для copy/paste (selectionRef потребителя) — вызывается ВСЕГДА на любое
   * изменение выделения, отдельно от controlled-сеттера. Несёт полную картину
   * (включая own-state колонок/строк, которые в gridSelection не пишутся).
   */
  onSelectionEmit?: (selection: GridSelection) => void;
}

export function useNativeGridSelection({
  cellsSelectionMode,
  columns,
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  onSelectionEmit,
}: UseNativeGridSelectionParams) {
  const [gridSelectionInternal, setGridSelectionInternal] =
    useState<GridSelection>(EMPTY_SELECTION);

  const isControlled = gridSelectionExternal !== undefined;
  const selection = gridSelectionExternal ?? gridSelectionInternal;

  // Храним glide selection как источник истины нативного выделения. В controlled-
  // режиме значение владеется снаружи (onGridSelectionChange — сеттер), иначе —
  // внутренний state. Наружу (onSelectionEmit) — ровно один раз за изменение;
  // `emitted` — итог, если он не совпадает с нативным (несмежные колонки/строки
  // рисует оверлей, нативное при этом пустое).
  const handleGridSelectionChange = useCallback(
    (next: GridSelection, emitted: GridSelection = next) => {
      if (isControlled) {
        onGridSelectionChangeExternal?.(next);
      } else {
        setGridSelectionInternal(next);
      }
      onSelectionEmit?.(emitted);
    },
    [isControlled, onGridSelectionChangeExternal, onSelectionEmit],
  );

  // Выделение в glide хранится по индексам колонок. Когда ведущих служебных
  // колонок становится больше или меньше (столбец ошибок появляется вместе с
  // режимом правки и при первых ошибках), колонки данных сдвигаются, а индексы
  // выделения нет: активной оказалась бы соседняя ячейка. Сдвигаем выделение
  // на ту же разницу, чтобы оно осталось на той же ячейке данных.
  const leadingServiceColumnsCount = findFirstDataColumnIndex(columns);
  const prevLeadingCountRef = useRef(leadingServiceColumnsCount);
  const selectionRef = useRef(selection);
  selectionRef.current = selection;
  useEffect(() => {
    const delta = leadingServiceColumnsCount - prevLeadingCountRef.current;
    prevLeadingCountRef.current = leadingServiceColumnsCount;
    if (delta === 0) {
      return;
    }
    const shifted = shiftSelectionColumns(selectionRef.current, delta);
    if (shifted === selectionRef.current) {
      return;
    }
    if (isControlled) {
      onGridSelectionChangeExternal?.(shifted);
    } else {
      setGridSelectionInternal(shifted);
    }
    onSelectionEmit?.(shifted);
  }, [
    leadingServiceColumnsCount,
    isControlled,
    onGridSelectionChangeExternal,
    onSelectionEmit,
  ]);

  const handleSelectionCleared = useCallback(
    () => handleGridSelectionChange(EMPTY_SELECTION),
    [handleGridSelectionChange],
  );

  const rangeSelect = useMemo<GlideProps['rangeSelect']>(() => {
    // range-cell → нативный rect-selection; multi-range-cell → несколько
    // диапазонов через Ctrl (rangeStack); cell → одиночная ячейка;
    // disabled → выделение ячеек отключено.
    if (cellsSelectionMode === 'range-cell') return 'rect';
    if (cellsSelectionMode === 'multi-range-cell') return 'multi-rect';
    if (cellsSelectionMode === 'disabled') return 'none';
    return 'cell';
  }, [cellsSelectionMode]);

  return {
    selection,
    handleGridSelectionChange,
    handleSelectionCleared,
    rangeSelect,
  };
}
