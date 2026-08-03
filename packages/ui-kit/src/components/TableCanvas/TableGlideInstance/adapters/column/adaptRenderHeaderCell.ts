import type {
  ColumnGlideLast,
  HeaderCellInfo,
} from '@ui-kit/components/TableGlide';

import type { ObjectForExtending } from '../../../types/utils.type';
import type { HeaderCellInfoGlideInstance } from '../../type';
import type { AdaptRenderHeaderCellInput } from './types';

/**
 * Адаптер для renderHeaderCell.
 */
export const adaptRenderHeaderCell =
  <R extends ObjectForExtending, SR = unknown>({
    column,
  }: AdaptRenderHeaderCellInput<R, SR>): ColumnGlideLast<
    R,
    SR
  >['renderHeaderCell'] =>
  (cellInfo: HeaderCellInfo<R, SR>) => {
    // Если у колонки нет renderHeaderCell, возвращаем пустую строку
    if (typeof column?.renderHeaderCell === 'undefined') {
      return '';
    }

    // Адаптируем cellInfo для передачи в пользовательский renderHeaderCell
    const adaptedHeaderCellInfo: HeaderCellInfoGlideInstance<R, SR> = {
      ...cellInfo,
      column,
      // ctxs уже есть в cellInfo и имеет правильный тип
      ctxs: cellInfo.ctxs as HeaderCellInfoGlideInstance<R, SR>['ctxs'],
    };

    return column.renderHeaderCell(adaptedHeaderCellInfo);
  };
