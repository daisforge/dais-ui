import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';
import { resolveSubRowKey } from './resolveSubRowKey';

/**
 * Текстовое представление ячейки для копирования в clipboard.
 *
 * Приоритет источников:
 * 1. `column.copyData` (строка или функция от row)
 * 2. subRow-поле (через `keyOfColumnInSubRow` / `parentKeyAsDefault`)
 * 3. `row[column.key]?.toString()`
 */
export function getCellText<R extends ObjectForExtending>(
  row: R,
  column: TransferColumnConfig,
  lvl: number
): string {
  if (column.copyData !== undefined) {
    return typeof column.copyData === 'function'
      ? column.copyData(row) ?? ''
      : column.copyData;
  }

  if (lvl > 0) {
    const subKey = resolveSubRowKey(column, lvl);
    if (subKey === undefined) return '';
    return row[subKey]?.toString?.() ?? '';
  }

  return row[column.key]?.toString?.() ?? '';
}
