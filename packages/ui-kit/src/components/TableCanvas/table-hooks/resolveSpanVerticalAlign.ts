import type { EditingCellInfo, ObjectForExtending } from '../types';
import type { ColumnConfigInternal } from '../types/column-config-internal.type';
import type { MergedCellsAlign } from '../types/merged-cells.type';

/** Вертикальное выравнивание объединённого блока для редактируемой ячейки. */
export const resolveSpanVerticalAlign = <R extends ObjectForExtending, SR>(
  spanAlign: ColumnConfigInternal<R, SR>['spanAlign'],
  info: EditingCellInfo<R, SR>,
): MergedCellsAlign['vertical'] => {
  // Функции выравнивания нужны строка и её индекс, они есть в данных редактора.
  const align =
    typeof spanAlign === 'function'
      ? (spanAlign as (cellInfo: unknown) => MergedCellsAlign | undefined)(info)
      : spanAlign;
  return align?.vertical;
};
