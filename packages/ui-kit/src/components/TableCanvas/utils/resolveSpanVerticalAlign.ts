import type { CellInfo } from '../../TableGlide';
import type { ObjectForExtending } from '../types';
import type { ColumnConfigInternal } from '../types/column-config-internal.type';
import type { MergedCellsAlign } from '../types/merged-cells.type';

/**
 * Вертикальное выравнивание объединённого блока для редактируемой ячейки.
 * Функции выравнивания читают строку и её индекс, их и передаём.
 */
export const resolveSpanVerticalAlign = <R extends ObjectForExtending, SR>(
  spanAlign: ColumnConfigInternal<R, SR>['spanAlign'],
  info: Pick<CellInfo<R, SR>, 'row' | 'rowInd'>,
): MergedCellsAlign['vertical'] => {
  const align =
    typeof spanAlign === 'function'
      ? (spanAlign as (cellInfo: unknown) => MergedCellsAlign | undefined)(info)
      : spanAlign;
  return align?.vertical;
};
