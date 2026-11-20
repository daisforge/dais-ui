import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';
import { getColumnField } from './resolveSubRowKey';

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
  const key = getColumnField(column, lvl);
  if (key === undefined) return row;
  return { ...row, [key]: value };
}
