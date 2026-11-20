import type { TransferColumnConfig } from '../types';

/**
 * Выбирает поле подстроки для отображения, редактирования и переноса данных.
 * При включённом parentKeyAsDefault все три операции используют ключ родительской колонки.
 */
export function resolveSubRowKey(
  column: {
    key: string;
    subRow?: Pick<
      NonNullable<TransferColumnConfig['subRow']>,
      'parentKeyAsDefault' | 'keyOfColumnInSubRow'
    >;
  },
  lvl: number,
): string | number | undefined {
  if (lvl === 0 || !column.subRow) return undefined;

  const { keyOfColumnInSubRow, parentKeyAsDefault } = column.subRow;

  if (parentKeyAsDefault) return column.key;
  if (keyOfColumnInSubRow !== undefined) {
    return typeof keyOfColumnInSubRow === 'function'
      ? keyOfColumnInSubRow(lvl)
      : keyOfColumnInSubRow;
  }

  return undefined;
}

export function getColumnField(column: TransferColumnConfig, lvl: number) {
  return lvl > 0 ? resolveSubRowKey(column, lvl) : column.key;
}
