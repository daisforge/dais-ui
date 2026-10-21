import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useLayoutEffect } from 'react';

import { subscribeFontsLoaded } from './fontUtils';
import { createRafUpdate, updateGridCells } from './gridUpdateUtils';

interface UseFontLoadRedrawParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
}

export function useFontLoadRedraw({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
}: UseFontLoadRedrawParams): void {
  useLayoutEffect(() => {
    const redraw = createRafUpdate(() => {
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
      });
    });

    return subscribeFontsLoaded(redraw);
  }, [dataEditorRef, rowCount, columnCount, headerAndGroupHeaderRowsCount]);
}
