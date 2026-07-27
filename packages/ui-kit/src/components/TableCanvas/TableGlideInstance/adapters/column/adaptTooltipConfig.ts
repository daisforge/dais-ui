import type { ColumnGlideLast } from '@ui-kit/components/TableGlide';

import type { CtxsType } from '../../../types/ctxs.type';
import type { ObjectForExtending } from '../../../types/utils.type';
import type { ColumnGlideInstance } from '../../type';

/**
 * Адаптирует cellTooltip из ColumnGlideInstance в формат ColumnGlideLast.
 * Если cellTooltip — функция, оборачивает её, подставляя оригинальную column из Instance.
 */
export function adaptCellTooltip<R extends ObjectForExtending, SR>(
  cellTooltip: ColumnGlideInstance<R, SR>['cellTooltip'],
  column: ColumnGlideInstance<R, SR>
): ColumnGlideLast<R, SR>['cellTooltip'] {
  if (!cellTooltip) return undefined;

  if (typeof cellTooltip !== 'function') return cellTooltip;

  return (context) =>
    cellTooltip({ ...context, column, ctxs: context.ctxs as CtxsType });
}

/**
 * Адаптирует headerCellTooltip из ColumnGlideInstance в формат ColumnGlideLast.
 * Логика аналогична adaptCellTooltip, но контекст без row/rowInd.
 */
export function adaptHeaderCellTooltip<R extends ObjectForExtending, SR>(
  headerCellTooltip: ColumnGlideInstance<R, SR>['headerCellTooltip'],
  column: ColumnGlideInstance<R, SR>
): ColumnGlideLast<R, SR>['headerCellTooltip'] {
  if (!headerCellTooltip) return undefined;

  if (typeof headerCellTooltip !== 'function') return headerCellTooltip;

  return (context) =>
    headerCellTooltip({
      ...context,
      column,
      ctxs: context.ctxs as CtxsType
    });
}
