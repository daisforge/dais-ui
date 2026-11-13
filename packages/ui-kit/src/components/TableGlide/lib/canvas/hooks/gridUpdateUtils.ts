import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject } from 'react';

import type { RowRange } from '../../../hooks/visibleRows';

/** Если видимая область ещё неизвестна (первый кадр), перерисовываются первые строки */
const ROWS_WITHOUT_REGION = 30;

interface GridUpdateParams {
  dataEditorRef: RefObject<DataEditorRef>;
  rowCount: number;
  columnCount: number;
  headerAndGroupHeaderRowsCount: number;
  /** Видимые строки: шрифт или иконка догрузились, перерисовать нужно экран, а не начало таблицы */
  visibleRows?: RowRange | null;
}

export function updateGridCells({
  dataEditorRef,
  rowCount,
  columnCount,
  headerAndGroupHeaderRowsCount,
  visibleRows = null,
}: GridUpdateParams): void {
  const ref = dataEditorRef.current;
  if (!ref) {
    return;
  }

  const firstRow = visibleRows ? Math.max(visibleRows.from, 0) : 0;
  const lastRow = visibleRows
    ? Math.min(visibleRows.to, rowCount - 1)
    : Math.min(ROWS_WITHOUT_REGION, rowCount) - 1;
  const numCols = columnCount;
  const cells: Array<{ cell: [number, number] }> = [];
  /* строки от -headerAndGroupHeaderRowsCount: шапка и шапки групп тоже перерисовываются */
  for (let row = 0 - headerAndGroupHeaderRowsCount; row < 0; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      cells.push({ cell: [col, row] });
    }
  }
  for (let row = firstRow; row <= lastRow; row += 1) {
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
