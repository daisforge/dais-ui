import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useState } from 'react';

import type {
  GlideProps,
  CellsSelectionMode,
  ProjectionResetSignal,
} from '../../types';

const EMPTY_SELECTION: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined,
};

interface UseNativeGridSelectionParams {
  cellsSelectionMode: CellsSelectionMode;
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
  /** Сброс при смене проекции данных (только uncontrolled-режим). */
  projectionResetSignal?: ProjectionResetSignal;
}

export function useNativeGridSelection({
  cellsSelectionMode,
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  onSelectionEmit,
  projectionResetSignal,
}: UseNativeGridSelectionParams) {
  const [gridSelectionInternal, setGridSelectionInternal] =
    useState<GridSelection>(EMPTY_SELECTION);

  const isControlled = gridSelectionExternal !== undefined;
  const selection = gridSelectionExternal ?? gridSelectionInternal;

  // Проекция данных изменилась: применяем nextSelection (по умолчанию пустое).
  // В controlled-режиме сброс уже сделан сеттером потребителя выше по дереву.
  useEffect(() => {
    if (projectionResetSignal === undefined || isControlled) return;
    const next = projectionResetSignal.nextSelection ?? EMPTY_SELECTION;
    setGridSelectionInternal(next);
    onSelectionEmit?.(next);
    // Реагируем только на новый сигнал, не на смену режима/колбэка.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectionResetSignal]);

  // Храним glide selection как источник истины нативного выделения. В controlled-
  // режиме значение владеется снаружи (onGridSelectionChange — сеттер), иначе —
  // внутренний state. Параллельно ВСЕГДА отдаём выделение в onSelectionEmit (copy).
  const handleGridSelectionChange = useCallback(
    (next: GridSelection) => {
      if (isControlled) {
        onGridSelectionChangeExternal?.(next);
      } else {
        setGridSelectionInternal(next);
      }
      onSelectionEmit?.(next);
    },
    [isControlled, onGridSelectionChangeExternal, onSelectionEmit]
  );

  const handleSelectionCleared = useCallback(() => {
    // Двухступенчатая очистка (Esc, клик вне таблицы): сначала диапазон и оси
    // сводятся к одной активной ячейке, повторная очистка снимает и её.
    const { current } = selection;
    const hasMoreThanActiveCell =
      current !== undefined &&
      (current.range.width > 1 ||
        current.range.height > 1 ||
        current.rangeStack.length > 0 ||
        selection.columns.length > 0 ||
        selection.rows.length > 0);

    const next: GridSelection = hasMoreThanActiveCell
      ? {
          columns: CompactSelection.empty(),
          rows: CompactSelection.empty(),
          current: {
            cell: current.cell,
            range: {
              x: current.cell[0],
              y: current.cell[1],
              width: 1,
              height: 1,
            },
            rangeStack: [],
          },
        }
      : EMPTY_SELECTION;

    if (isControlled) {
      onGridSelectionChangeExternal?.(next);
    } else {
      setGridSelectionInternal(next);
    }
    onSelectionEmit?.(next);
  }, [selection, isControlled, onGridSelectionChangeExternal, onSelectionEmit]);

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
