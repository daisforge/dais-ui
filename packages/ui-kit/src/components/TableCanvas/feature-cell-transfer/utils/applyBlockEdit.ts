import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';
import { resolveBlock } from './resolveBlockOrigin';

/**
 * Правка ячейки слитого блока: значение пишется во все ячейки блока (паритет
 * с paste/fill). Обновлённые копии строк кладутся в `targetRows` — общий
 * аккумулятор батча, поэтому несколько правок компонуются. Возвращает индексы
 * затронутых строк; не блок — null, правка идёт обычным путём.
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
  /** Видимые строки — по ним резолвится геометрия блока. */
  rows: readonly R[];
  /** Строка с уже применённой правкой (база для строки rowInd). */
  editedRow: R;
  /** Отредактированное значение — оно уходит во все ячейки блока. */
  editedValue: unknown;
  /** Аккумулятор батча (мутируемая копия rows). */
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
