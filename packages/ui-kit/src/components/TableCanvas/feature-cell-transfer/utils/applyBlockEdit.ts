import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';
import { resolveBlock } from './resolveBlockOrigin';

/**
 * Правка ячейки блока: одно значение пишется во все ячейки блока. Новые копии
 * строк кладутся в `targetRows` (общий массив-накопитель, чтобы правки в пачке
 * складывались). Возвращает номера изменённых строк; если ячейка не в блоке — null.
 */
export function applyBlockEdit<R extends ObjectForExtending>({
  colInd,
  rowInd,
  columns,
  rows,
  editedRow,
  editedValue,
  targetRows,
}: {
  colInd: number;
  rowInd: number;
  columns: readonly TransferColumnConfig[];
  rows: readonly R[];
  /** Строка с уже применённой правкой (основа для строки rowInd). */
  editedRow: R;
  /** Значение, которое уходит во все ячейки блока. */
  editedValue: unknown;
  /** Массив-накопитель (изменяемая копия rows). */
  targetRows: R[];
}): number[] | null {
  const block = resolveBlock(colInd, rowInd, columns, rows);
  if (!block) return null;

  const indexes: number[] = [];
  for (let ri = block.startRow; ri <= block.endRow; ri += 1) {
    const base = ri === rowInd ? editedRow : targetRows[ri];
    if (base) {
      const updated: ObjectForExtending = { ...base };
      for (let ci = block.startCol; ci <= block.endCol; ci += 1) {
        const key = columns[ci]?.key;
        if (key !== undefined) {
          updated[key] = editedValue;
        }
      }
      indexes.push(ri);
      targetRows[ri] = updated as R;
    }
  }
  return indexes;
}
