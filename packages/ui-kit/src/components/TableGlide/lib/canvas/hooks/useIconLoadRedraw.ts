import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useEffect } from 'react';

import { onAnyIconLoad } from '../cells';
import {
  createRafUpdate,
  updateGridCells,
  type VisibleRows,
} from './gridUpdateUtils';

interface UseIconLoadRedrawParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
  /** Видимые строки на момент перерисовки; без них перерисовываются первые строки */
  getVisibleRows?: () => VisibleRows | null;
}

export function useIconLoadRedraw({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
  getVisibleRows,
}: UseIconLoadRedrawParams): void {
  useEffect(() => {
    const redraw = createRafUpdate(() => {
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
        visibleRows: getVisibleRows?.() ?? null,
      });
    });

    return onAnyIconLoad(redraw);
  }, [
    dataEditorRef,
    rowCount,
    columnCount,
    headerAndGroupHeaderRowsCount,
    getVisibleRows,
  ]);
}
