import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useLayoutEffect, useRef } from 'react';

import { subscribeFontsLoaded } from './fontsLoaded';
import { createRafUpdate, updateGridCells } from './gridUpdateUtils';

interface UseFontLoadRedrawParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
  fontFamily?: string;
}

export function useFontLoadRedraw({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
  fontFamily,
}: UseFontLoadRedrawParams): void {
  const fontFamilyRef = useRef(fontFamily);
  fontFamilyRef.current = fontFamily;

  useLayoutEffect(() => {
    const redraw = createRafUpdate(() => {
      updateGridCells({
        dataEditorRef,
        rowCount,
        columnCount,
        headerAndGroupHeaderRowsCount,
      });
    });

    return subscribeFontsLoaded(redraw, {
      fontFamily: () => fontFamilyRef.current,
    });
  }, [dataEditorRef, rowCount, columnCount, headerAndGroupHeaderRowsCount]);
}
