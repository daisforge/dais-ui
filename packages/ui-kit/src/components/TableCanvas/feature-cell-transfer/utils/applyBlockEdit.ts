import { getLvlOfRow } from '../../feature-tree/handlers';
import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';
import { resolveBlock } from './resolveBlockOrigin';
import { getColumnField } from './resolveSubRowKey';

/**
 * Распространяет правку на весь объединённый блок и возвращает индексы затронутых строк.
 *
 * В каждой строке значение записывается в поля, привязанные к колонкам на её уровне.
 * Копии строк остаются в targetRows для следующих правок той же операции.
 * Если правку нужно обработать как обычное редактирование ячейки, возвращает null.
 */
export function applyBlockEdit<R extends ObjectForExtending>({
  colInd,
  rowInd,
  columns,
  rows,
  editedRow,
  targetRows,
}: {
  colInd: number;
  rowInd: number;
  columns: readonly TransferColumnConfig[];
  rows: readonly R[];
  /** Строка с уже применённой правкой (основа для строки rowInd). */
  editedRow: R;
  /** Массив-накопитель (изменяемая копия rows). */
  targetRows: R[];
}): number[] | null {
  const block = resolveBlock(colInd, rowInd, columns, rows);
  if (!block) return null;

  const column = columns[colInd];
  const source = rows[rowInd];
  if (!column || !source) return null;
  const sourceKey = getColumnField(column, getLvlOfRow(source));
  if (sourceKey === undefined) return null;
  const editedValue = editedRow[sourceKey];
  const indexes: number[] = [];
  for (let ri = block.startRow; ri <= block.endRow; ri += 1) {
    const base = ri === rowInd ? editedRow : targetRows[ri];
    if (base) {
      const updated: ObjectForExtending = { ...base };
      const lvl = getLvlOfRow(base);
      for (let ci = block.startCol; ci <= block.endCol; ci += 1) {
        const target = columns[ci];
        const key =
          target && !target.isServiceColumn
            ? getColumnField(target, lvl)
            : undefined;
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
