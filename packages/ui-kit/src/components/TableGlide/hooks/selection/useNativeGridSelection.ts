import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useCallback, useMemo, useState } from 'react';

import type { GlideProps, CellsSelectionMode } from '../../types';

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
}

export function useNativeGridSelection({
  cellsSelectionMode,
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
