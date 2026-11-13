import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useEffect } from 'react';

import { onAnyIconLoad } from '../cells';
import type { RowRange } from '../../../hooks/visibleRows';
import { createRafUpdate, updateGridCells } from './gridUpdateUtils';

interface UseIconLoadRedrawParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
  /** Видимые строки на момент перерисовки; без них перерисовываются первые строки */
  getVisibleRows?: () => RowRange | null;
  /** Прилипшие строки: перерисовываются и вне видимой области */
  getPinnedRows?: () => readonly number[] | undefined;
}

export function useIconLoadRedraw({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
  getVisibleRows,
  getPinnedRows,
}: UseIconLoadRedrawParams): void {
  useEffect(() => {
    const redraw = createRafUpdate(() => {
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
        visibleRows: getVisibleRows?.() ?? null,
        getPinnedRows,
      });
    });

    return onAnyIconLoad(redraw);
  }, [
    dataEditorRef,
    rowCount,
    columnCount,
    headerAndGroupHeaderRowsCount,
    getVisibleRows,
    getPinnedRows,
  ]);
}
