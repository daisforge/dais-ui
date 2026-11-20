import { getLvlOfRow } from '../../feature-tree/handlers';
import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig, WrittenCell } from '../types';
import { getColumnField } from './resolveSubRowKey';

/**
 * Возвращает адреса ячеек, значения которых изменились за операцию.
 *
 * Для обычных строк при вставке и протяжке достаточно проверить записанные колонки.
 * У подстроки несколько колонок могут читать одно поле, поэтому проверяем каждую привязку.
 */
export function collectEditedFields<R extends ObjectForExtending>(
  before: readonly R[],
  after: readonly R[],
  indexes: readonly number[],
  columns: readonly TransferColumnConfig[],
  rootColumns = columns,
): WrittenCell[] {
  const cells: WrittenCell[] = [];
  for (const rowIndex of new Set(indexes)) {
    const previous = before[rowIndex];
    const next = after[rowIndex];
    if (previous && next && previous !== next) {
      const lvl = getLvlOfRow(previous);
      for (const column of lvl ? columns : rootColumns) {
        const field = getColumnField(column, lvl);
        if (
          !column.isServiceColumn &&
          field !== undefined &&
          !Object.is(previous[field], next[field])
        ) {
          cells.push({ rowIndex, columnKey: column.key });
        }
      }
    }
  }
  return cells;
}
