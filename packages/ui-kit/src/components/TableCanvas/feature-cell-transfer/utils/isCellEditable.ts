import type { ObjectForExtending } from '../../types';
import type { TransferColumnConfig } from '../types';

/**
 * Можно ли редактировать ячейку.
 *
 * Разворачивает union `boolean | ((row) => boolean) | undefined` из
 * `column.editable`. Логика subRow-уровней, tableConfig.editing и
 * прочие проверки уже вычислены в `useColumns` и записаны в computed
 * `editable` на колонке — здесь просто unwrap.
 */
export function isCellEditable<R extends ObjectForExtending>(
  column: TransferColumnConfig,
  row: R
): boolean {
  const { editable } = column;
  if (editable === undefined) return false;
  if (typeof editable === 'function') return editable(row);
  return editable;
}
