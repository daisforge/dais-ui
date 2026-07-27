import type { ObjectForExtending } from '../../types';
import type { Rectangle, TransferColumnConfig } from '../types';
import { isCellEditable } from './isCellEditable';

/**
 * Причина, по которой ячейка пропускается при paste или fill.
 * `null` в `shouldSkipCell` означает "ячейку НЕ пропускать".
 */
export type SkipReason =
  | 'inside-source'
  | 'service'
  | 'no-row'
  | 'sub-row-disallowed'
  | 'not-editable';

/**
 * Единый фильтр, можно ли записать значение в ячейку.
 * Используется в paste и fill handle, проверки идут в порядке дешевизны.
 * Для fill handle передаётся `source` — ячейки внутри source range
 * пропускаются (они и так источник).
 */
export function shouldSkipCell<R extends ObjectForExtending>(params: {
  rowIndex: number;
  colIndex: number;
  row: R | undefined;
  column: TransferColumnConfig | undefined;
  lvl: number;
  allowSubRows: boolean;
  /** Source range (только для fill handle) */
  source?: Rectangle;
}): SkipReason | null {
  const { rowIndex, colIndex, row, column, lvl, allowSubRows, source } = params;

  if (!row || !column) return 'no-row';
  if (column.isServiceColumn) return 'service';

  if (source) {
    const insideSource =
      colIndex >= source.x &&
      colIndex < source.x + source.width &&
      rowIndex >= source.y &&
      rowIndex < source.y + source.height;
    if (insideSource) return 'inside-source';
  }

  if (lvl > 0 && !allowSubRows) return 'sub-row-disallowed';
  if (!isCellEditable(column, row)) return 'not-editable';

  return null;
}
