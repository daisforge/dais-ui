import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject } from 'react';

interface GridUpdateParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
}

export function updateGridCells({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
}: GridUpdateParams): void {
  const ref = dataEditorRef.current;
  if (!ref) {
    return;
  }

  const numRows = Math.min(30, rowCount);
  const numCols = columnCount;
  const cells: Array<{ cell: [number, number] }> = [];
  /* row = 0 - headerAndGroupHeaderRowsCount ---- для того, чтобы иконки в header and groupheader тоже были загружены и обновлены */
  for (let row = 0 - headerAndGroupHeaderRowsCount; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      cells.push({ cell: [col, row] });
    }
  }

  if (cells.length > 0) {
    ref.updateCells(cells);
  }
}

export function createRafUpdate(fn: () => void): () => void {
  let pendingFrame: number | null = null;

  return () => {
    if (pendingFrame !== null) {
      return;
    }

    pendingFrame = requestAnimationFrame(() => {
      pendingFrame = null;
      fn();
    });
  };
}
