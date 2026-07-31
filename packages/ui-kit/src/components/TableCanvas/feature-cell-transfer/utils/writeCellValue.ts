import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';
import { resolveSubRowKey } from './resolveSubRowKey';

/**
 * Записывает значение в ячейку строки с учётом subRow-конфига.
 * Возвращает shallow copy строки с обновлённым полем.
 *
 * Зеркально к `getCellText`: если для subrow-ячейки ключ не определён
 * (нет `keyOfColumnInSubRow` и `parentKeyAsDefault`), строка не меняется.
 */
export function writeCellValue<R extends ObjectForExtending>(
  row: R,
  column: TransferColumnConfig,
  lvl: number,
  value: string | number,
): R {
  if (lvl > 0) {
    const subKey = resolveSubRowKey(column, lvl);
    if (subKey === undefined) return row;
    return { ...row, [subKey]: value };
  }

  return { ...row, [column.key]: value };
}
