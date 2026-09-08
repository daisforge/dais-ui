import { findBlockOrigin } from '../../../TableGlide/utils/findBlockOrigin';
import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';

// Геометрия блоков для copy/paste/fill: находим левый верхний угол блока и его
// границы. Координаты — прямые индексы в columns/rows.

// colSpan/rowSpan ждут CellInfo; для геометрии хватает rowInd/colInd/row.
function spanCellInfo<R extends ObjectForExtending>(
  rows: readonly R[],
  colInd: number,
  rowInd: number,
) {
  return { rowInd, colInd, row: rows[rowInd] };
}

/** Сколько дополнительных колонок объединяет colSpan (0 — нет объединения). */
export function readColSpanExtra<R extends ObjectForExtending>(
  column: TransferColumnConfig | undefined,
  rows: readonly R[],
  colInd: number,
  rowInd: number,
): number {
  const { colSpan } = column ?? {};
  if (typeof colSpan === 'number') return colSpan;
  if (typeof colSpan === 'function') {
    const info = spanCellInfo(rows, colInd, rowInd);
    return colSpan(info as unknown as Parameters<typeof colSpan>[0]);
  }
  return 0;
}

/** Диапазон строк блока колонки [начало, конец] или null. */
export function readRowSpanBlock<R extends ObjectForExtending>(
  column: TransferColumnConfig | undefined,
  rows: readonly R[],
  colInd: number,
  rowInd: number,
): readonly [number, number] | null {
  const { rowSpan } = column ?? {};
  if (typeof rowSpan !== 'function') return null;
  const info = spanCellInfo(rows, colInd, rowInd);
  return rowSpan(info as unknown as Parameters<typeof rowSpan>[0]) ?? null;
}

/** Левый верхний угол блока для ячейки. */
export function resolveBlockOrigin<R extends ObjectForExtending>(
  colIndex: number,
  rowIndex: number,
  columns: readonly TransferColumnConfig[],
  rows: readonly R[],
): readonly [number, number] {
  return findBlockOrigin(
    colIndex,
    rowIndex,
    (c, r) => {
      const extra = readColSpanExtra(columns[c], rows, c, r);
      return extra > 0 ? ([c, c + extra] as const) : null;
    },
    (c, r) => readRowSpanBlock(columns[c], rows, c, r),
  );
}

/** Прямоугольник блока в индексах columns/rows. */
export interface BlockRect {
  startCol: number;
  endCol: number;
  startRow: number;
  endRow: number;
}

/** Границы блока ячейки или null, если ячейка одиночная. */
export function resolveBlock<R extends ObjectForExtending>(
  colIndex: number,
  rowIndex: number,
  columns: readonly TransferColumnConfig[],
  rows: readonly R[],
): BlockRect | null {
  const [oCol, oRow] = resolveBlockOrigin(colIndex, rowIndex, columns, rows);
  const originCol = columns[oCol];
  if (!originCol) return null;

  const endCol = oCol + readColSpanExtra(originCol, rows, oCol, oRow);
  const rowBlock = readRowSpanBlock(originCol, rows, oCol, oRow);
  const endRow = rowBlock ? rowBlock[1] : oRow;

  // Одиночная ячейка — не блок.
  if (endCol <= oCol && endRow <= oRow) return null;
  return { startCol: oCol, endCol, startRow: oRow, endRow };
}
