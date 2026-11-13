import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useLayoutEffect } from 'react';

import { subscribeFontsLoaded } from './fontsLoaded';
import type { RowRange } from '../../../hooks/visibleRows';
import { createRafUpdate, updateGridCells } from './gridUpdateUtils';

interface UseFontLoadRedrawParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
  /** Видимые строки на момент перерисовки; без них перерисовываются первые строки */
  getVisibleRows?: () => RowRange | null;
}

export function useFontLoadRedraw({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
  getVisibleRows,
}: UseFontLoadRedrawParams): void {
  useLayoutEffect(() => {
    const redraw = createRafUpdate(() => {
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
        visibleRows: getVisibleRows?.() ?? null,
      });
    });

    return subscribeFontsLoaded(redraw);
  }, [
    dataEditorRef,
    rowCount,
    columnCount,
    headerAndGroupHeaderRowsCount,
    getVisibleRows,
  ]);
}
