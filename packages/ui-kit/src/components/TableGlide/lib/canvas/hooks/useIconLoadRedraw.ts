import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useEffect } from 'react';

import { onAnyIconLoad } from '../cells';
import { createRafUpdate, updateGridCells } from './gridUpdateUtils';

interface UseIconLoadRedrawParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
}

export function useIconLoadRedraw({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
}: UseIconLoadRedrawParams): void {
  useEffect(() => {
    const redraw = createRafUpdate(() => {
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
      });
    });

    return onAnyIconLoad(redraw);
  }, [dataEditorRef, rowCount, columnCount, headerAndGroupHeaderRowsCount]);
}
