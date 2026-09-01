import { ObjectForExtending } from '@ui-kit/components/TableCanvas/types';
import { CtxsType } from '@ui-kit/components/TableCanvas/types/ctxs.type';
import type { ColumnGlideLast } from '@ui-kit/components/TableGlide';

import { COLUMN_GROUPS_SYMBOL } from '../../../feature-columns-grouping/columnGroupSymbol';
import { getSymbolFromObj } from '../../../utils/getSymbolFromObj';
import type { CellInfoGlideInstance, ColumnGlideInstance } from '../../type';
import { adaptRenderHeaderCell } from './adaptRenderHeaderCell';
import { adaptCellTooltip, adaptHeaderCellTooltip } from './adaptTooltipConfig';

/**
 * Входные параметры для адаптации колонки
 */
export interface AdaptColumnInput<R extends ObjectForExtending, SR = unknown> {
  /**
   * Колонка в формате ColumnGlideInstance (с key, name)
   */
  column: ColumnGlideInstance<R, SR>;
  /**
   * Название группы (если есть) - приоритет над Symbol
   */
  group?: string;
  /**
   * Увеличивает счетчик frozen колонок (side effect)
   */
  onFrozen?: () => void;
  // КОММЕНТИРУЮ, МОЖЕТ БЫТЬ ПОНАДОБИТСЯ В БУДУЩЕМ
  // Больше не нужны — форк glide сам учитывает глобальные min/maxColumnWidth.
  // tableConfigMaxColumnWidth: number | undefined;
  // tableConfigMinColumnWidth: number | undefined;
}

/**
 * Результат адаптации колонки
 */
export interface AdaptedColumn<R extends ObjectForExtending, SR> {
  /**
   * Колонка в формате ColumnGlideLast (для Glide)
   */
  column: ColumnGlideLast<R, SR>;
  /**
   * Была ли колонка frozen
   */
  wasFrozen: boolean;
  /**
   * Длина массива групп (для вычисления groupMaxLength)
   */
  groupLength: number;
}

/**
 * Адаптирует колонку из формата ColumnGlideInstance в ColumnGlideLast.
 * Включает адаптацию renderHeaderCell и другие преобразования.
 * Поддерживает Symbol-based группы через COLUMN_GROUPS_SYMBOL.
 *
 * @param input - Параметры адаптации
 * @returns Адаптированная колонка для Glide
 *
 * @example
 * ```ts
 * const { column: glideColumn, wasFrozen, groupLength } = adaptColumn({
 *   column: userColumn,
 *   group: 'Group Name',
 *   onFrozen: () => frozenCount++
 * });
 * ```
 */
export const adaptColumn = <R extends ObjectForExtending, SR = unknown>({
  column,
  group: _groupProp,
  onFrozen,
}: AdaptColumnInput<R, SR>): AdaptedColumn<R, SR> => {
  const {
    key,
    name,
    width,
    renderCell,
    renderHeaderCell,
    renderSummaryCell,
    editable,
    frozen,
    isServiceColumn,
    isErrorCell,
    colSpan,
    rowSpan,
    spanAlign,
    squashedHeaderAlign,
    minWidth,
    maxWidth,
    cellTooltip,
    headerCellTooltip,
    contentAlign,
    maxAutoWidth,
    copyData,
    columnThemeOverride,
    renderCellPreview,
  } = column;

  const isHaveExternalWidth = typeof width === 'number';

  // КОММЕНТИРУЮ, МОЖЕТ БЫТЬ ПОНАДОБИТСЯ В БУДУЩЕМ
  // internalWidth (70% диапазона) — теперь форк glide сам вычисляет
  // начальную ширину через auto-sizing + grow-once распределение.
  // const isHaveMaxWidth = typeof maxWidth === 'number';
  // const isHaveMinWidth = typeof minWidth === 'number';
  // const internalWidth = isHaveExternalWidth
  //   ? width
  //   : (() => {
  //       if (!isHaveMaxWidth && !isHaveMinWidth) return undefined;
  //       const max =
  //         maxWidth ?? tableConfigMaxColumnWidth ?? DEFAULT_MAX_COLUMN_WIDTH;
  //       const min =
  //         minWidth ?? tableConfigMinColumnWidth ?? DEFAULT_MIN_COLUMN_WIDTH;
  //       return Math.floor(min + (max - min) * INITIAL_WIDTH_RATIO);
  //     })();
  // const isHaveInternalWidth = typeof internalWidth === 'number';
  // const isHaveWidth = isHaveExternalWidth || isHaveInternalWidth;

  const wasFrozen = !!frozen;

  if (wasFrozen && onFrozen) {
    onFrozen();
  }

  // Получаем группу из Symbol (как у разработчика)
  const group = getSymbolFromObj<string | string[]>(
    column,
    COLUMN_GROUPS_SYMBOL,
  );

  // Вычисляем длину группы для groupMaxLength
  const groupLength = Array.isArray(group) ? group.length : 0;

  // Адаптируем renderHeaderCell (если есть)
  const adaptedRenderHeaderCell = renderHeaderCell
    ? adaptRenderHeaderCell({
        column,
      })
    : undefined;

  const adaptedCellTooltip = adaptCellTooltip(cellTooltip, column);
  const adaptedHeaderCellTooltip = adaptHeaderCellTooltip(
    headerCellTooltip,
    column,
  );

  type GlideCellInfo = Parameters<
    NonNullable<ColumnGlideLast<R, SR>['renderCell']>
  >[0];

  const adaptCellInfo = (
    cellInfo: GlideCellInfo,
  ): CellInfoGlideInstance<R, SR> => ({
    ...cellInfo,
    column,
    ctxs: cellInfo.ctxs as CtxsType,
  });

  // Формируем объект колонки для Glide
  const glideColumn: ColumnGlideLast<R, SR> = {
    id: key,
    title: typeof name === 'string' ? name : key,
    editable,
    copyData,
    contentAlign,
    ...(isServiceColumn && { isServiceColumn: true }),
    ...(isErrorCell && { isErrorCell }),
    ...(group && { group }),
    ...(isHaveExternalWidth && { width }),
    ...(minWidth && { minWidth }),
    ...(maxWidth && { maxWidth }),
    ...(maxAutoWidth !== undefined && { maxAutoWidth }),
    grow: isHaveExternalWidth ? 0 : 1,
    colSpan: colSpan as ColumnGlideLast<R, SR>['colSpan'],
    rowSpan: rowSpan as ColumnGlideLast<R, SR>['rowSpan'],
    ...(spanAlign && {
      spanAlign: spanAlign as ColumnGlideLast<R, SR>['spanAlign'],
    }),
    ...(squashedHeaderAlign && { spanGroupHeaderAlign: squashedHeaderAlign }),
    renderHeaderCell: adaptedRenderHeaderCell,
    renderSummaryCell: renderSummaryCell
      ? (summCellInfo) =>
          renderSummaryCell({
            ...summCellInfo,
            column,
            ctxs: summCellInfo.ctxs as CtxsType,
          })
      : undefined,
    renderCell: renderCell
      ? (cellInfo) => renderCell(adaptCellInfo(cellInfo))
      : undefined,
    ...(adaptedCellTooltip && { cellTooltip: adaptedCellTooltip }),
    ...(adaptedHeaderCellTooltip && {
      headerCellTooltip: adaptedHeaderCellTooltip,
    }),
    ...(renderCellPreview === 'none'
      ? { hasPreview: 'none' as const }
      : renderCellPreview && { hasPreview: true }),
  };

  // Если это делать выше, в объекте glideColumn, то будут ошибки ts с width и типами number | undefined из-за conditional spread похоже слишком сложный union стал
  if (columnThemeOverride) {
    glideColumn.columnThemeOverride = (cellInfo) =>
      columnThemeOverride(adaptCellInfo(cellInfo));
  }

  return {
    column: glideColumn,
    wasFrozen,
    groupLength,
  };
};
