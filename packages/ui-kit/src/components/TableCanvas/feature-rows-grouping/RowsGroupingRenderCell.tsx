import { isCanvasContent, isGlideGridCellObj } from '../TableGlideInstance';
import type {
  CellContent,
  CellInfoGlideInstance
} from '../TableGlideInstance/type';
import { ColumnConfig, ObjectForExtending } from '../types';
import { KEY_GROUPED_COL } from './constants';
import { isGroupRow } from './typeGuards';
import { ColumnRowsGrouping, RowsGrouping } from './types';

export const RowsGroupingRenderCell = <
  RowType extends ObjectForExtending,
  SummaryRowType
>({
  rowsGrouping,
  renderCellProps,
  groupByArr,
  groupedColRenderers,
  col
}: {
  col: ColumnConfig<RowType, SummaryRowType>;
  rowsGrouping:
    | ColumnRowsGrouping<RowType, ColumnConfig<RowType, SummaryRowType>>
    | undefined;
  renderCellProps: CellInfoGlideInstance<RowType, SummaryRowType>;
  groupByArr: string[];
  groupedColRenderers: Partial<
    Pick<
      NonNullable<
        RowsGrouping<
          RowType,
          SummaryRowType,
          ColumnConfig<RowType, SummaryRowType>
        >['groupedColumnProps']
      >,
      'renderCell' | 'rowsGrouping'
    >
  >;
}): CellContent => {
  const { row, column } = renderCellProps;
  // сгруппированная колонка
  if (col.key === KEY_GROUPED_COL) {
    if (isGroupRow(row)) {
      const { groupKey } = row;
      // кастомный рендер сгруппированной колонки (НЕ последний уровень вложенности)
      if (groupedColRenderers?.rowsGrouping?.renderGroupCell) {
        const groupRowData = row;

        const result = groupedColRenderers.rowsGrouping.renderGroupCell({
          ...groupRowData,
          column,
          tabIndex: 0
        });

        if (isCanvasContent(result) || isGlideGridCellObj(result)) {
          return result;
        }

        return '';
      }
      if (typeof groupKey !== 'undefined') {
        return String(groupKey);
      }
      return '';
    }
    const rowId = row[groupByArr[groupByArr.length - 1] ?? 0] as string;
    // кастомный рендер сгруппированной колонки (последний уровень вложенности)
    if (groupedColRenderers?.renderCell) {
      const result = groupedColRenderers.renderCell({
        ...renderCellProps,
        parentGroupKey: rowId,
        groupByArr
      } as never);
      if (isCanvasContent(result) || isGlideGridCellObj(result)) {
        return result;
      }
      return '';
    }
    if (typeof rowId !== 'undefined') {
      return String(rowId);
    }
    return '';
  }
  // остальные колонки
  if (isGroupRow(row)) {
    if (!rowsGrouping) {
      return '';
    }
    const groupRowData = row;

    if (!rowsGrouping.renderGroupCell) {
      return '';
    }

    const result = rowsGrouping.renderGroupCell({
      ...groupRowData,
      column,
      tabIndex: 0
    });
    if (isCanvasContent(result) || isGlideGridCellObj(result)) {
      return result;
    }
    return '';
  }

  // Для обычных строк используем renderCell если есть, иначе форматируем значение
  if (col.renderCell) {
    const result = col.renderCell(renderCellProps);
    if (isCanvasContent(result) || isGlideGridCellObj(result)) {
      return result;
    }
    return '';
  }

  return row[col.key];
};
