import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';

/**
 * Геометрия объединённых блоков в слое cell-transfer.
 *
 * colSpan/rowSpan объявляются потребителем только на origin-колонке, поэтому по
 * ним находим origin блока и его границы. Нужно, чтобы copy/fill брали значение
 * origin (как отрисовано на экране), а paste/fill нормализовали запись к origin
 * и писали весь блок.
 *
 * Координаты — прямые индексы в columns/rows (форк уже снял rowMarkerOffset).
 */

// colSpan/rowSpan ждут CellInfo; для геометрии достаточно rowInd/colInd/row.
function spanCellInfo<R extends ObjectForExtending>(
  rows: readonly R[],
  colInd: number,
  rowInd: number,
) {
  return { rowInd, colInd, row: rows[rowInd] };
}

/** Сколько ДОПОЛНИТЕЛЬНЫХ колонок объединяет colSpan колонки (0 — нет объединения). */
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

/** Диапазон строк rowSpan-блока колонки `[start, end]` или null. */
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

/**
 * Резолв ячейки к origin её блока (левый верхний угол видимой части). colSpan
 * объявлен только на origin-колонке, поэтому покрытые колонки ищем сканированием
 * влево; вертикаль берём по rowSpan origin-колонки.
 */
export function resolveBlockOrigin<R extends ObjectForExtending>(
  colIndex: number,
  rowIndex: number,
  columns: readonly TransferColumnConfig[],
  rows: readonly R[],
): readonly [number, number] {
  // Горизонталь: слева ищем колонку, ОБЪЯВИВШУЮ colSpan, который накрывает colIndex.
  let originCol = colIndex;
  for (let c = colIndex; c >= 0; c -= 1) {
    const declaresColSpan = columns[c]?.colSpan != null;
    if (
      declaresColSpan &&
      c + readColSpanExtra(columns[c], rows, c, rowIndex) >= colIndex
    ) {
      originCol = c;
      break;
    }
  }

  // Вертикаль: на origin-колонке берём верх блока по rowSpan.
  const rowBlock = readRowSpanBlock(columns[originCol], rows, originCol, rowIndex);
  const originRow = rowBlock ? rowBlock[0] : rowIndex;

  return [originCol, originRow];
}

/** Прямоугольник объединённого блока в индексах columns/rows. */
export interface BlockRect {
  startCol: number;
  endCol: number;
  startRow: number;
  endRow: number;
}

/**
 * Границы блока, которому принадлежит ячейка, или null если ячейка одиночная.
 * origin находим через resolveBlockOrigin, затем на origin-колонке читаем правую
 * границу (colSpan) и нижнюю (rowSpan).
 */
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
