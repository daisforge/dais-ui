import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useLayoutEffect } from 'react';

import { invalidateTextCache } from '../primitives/CanvasText';
import { waitForFonts } from './fontUtils';
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
      invalidateTextCache();
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
      });
    });

    waitForFonts().then(redraw);
  }, [dataEditorRef, rowCount, columnCount, headerAndGroupHeaderRowsCount]);
}
