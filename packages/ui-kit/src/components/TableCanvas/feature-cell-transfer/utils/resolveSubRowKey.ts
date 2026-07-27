import type { TransferColumnConfig } from '../types';

/**
 * Определяет, в какое поле row писать/откуда читать значение для subrow.
 * Возвращает `undefined` если для уровня lvl=0 (не subrow) или если subRow-конфиг
 * не указывает на какое-то поле.
 */
export function resolveSubRowKey(
  column: TransferColumnConfig,
  lvl: number
): string | number | undefined {
  if (lvl === 0 || !column.subRow) return undefined;

  const { keyOfColumnInSubRow, parentKeyAsDefault } = column.subRow;

  if (keyOfColumnInSubRow !== undefined) {
    return typeof keyOfColumnInSubRow === 'function'
      ? keyOfColumnInSubRow(lvl)
      : keyOfColumnInSubRow;
  }

  if (parentKeyAsDefault) return column.key;

  return undefined;
}
