import React from 'react';
import { RenderCellProps } from 'react-data-grid';

import { CLASS } from '../renders/constants';
import { ColumnConfig, ObjectForExtending } from '../types';
import { KEY_GROUPED_COL } from './constants';
import { isGroupRow } from './typeGuards';
import {
  ColumnRowsGrouping,
  RenderGroupCellProps,
  RowsGrouping,
} from './types';

const SpanWithTooltip = ({ text }: { text: string }) => (
  <span className={CLASS.cellContent} title={text}>
    {text}
  </span>
);

export const RowsGroupingRenderCell = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>({
  rowsGrouping,
  renderCellProps,
  groupByArr,
  groupedColRenderers,
  col,
}: {
  col: ColumnConfig<RowType, SummaryRowType>;
  rowsGrouping: ColumnRowsGrouping<RowType, SummaryRowType> | undefined;
  renderCellProps: RenderCellProps<RowType, SummaryRowType>;
  groupByArr: string[];
  groupedColRenderers: Partial<
    Pick<
      NonNullable<RowsGrouping<RowType>['groupedColumnProps']>,
      'renderCell' | 'rowsGrouping'
    >
  >;
}) => {
  const { row, column, tabIndex } = renderCellProps;
  // сгруппированная колонка
  if (col.key === KEY_GROUPED_COL) {
    if (isGroupRow(row)) {
      const { groupKey } = row;
      // кастомный рендер сгруппированной колонки (НЕ последний уровень вложенности)
      if (groupedColRenderers?.rowsGrouping?.renderGroupCell) {
        const groupRowData = row;
        return groupedColRenderers?.rowsGrouping?.renderGroupCell({
          ...groupRowData,
          column,
          tabIndex,
        } as unknown as RenderGroupCellProps<RowType>);
      }
      if (typeof groupKey !== 'undefined') {
        return <SpanWithTooltip text={groupKey} />;
      }
      return null;
    }
    const rowId = row[groupByArr[groupByArr.length - 1] ?? 0] as string;
    // кастомный рендер сгруппированной колонки (последний уровень вложенности)
    if (groupedColRenderers?.renderCell) {
      return groupedColRenderers.renderCell({
        ...renderCellProps,
        parentGroupKey: rowId,
        groupByArr,
      } as never);
    }
    if (typeof rowId !== 'undefined') {
      return <SpanWithTooltip text={rowId} />;
    }
    return null;
  }
  // остальные колонки
  if (isGroupRow(row)) {
    if (!rowsGrouping) {
      return null;
    }
    const groupRowData = row;

    if (!rowsGrouping.renderGroupCell) {
      return null;
    }

    return rowsGrouping.renderGroupCell({
      ...groupRowData,
      column,
      tabIndex,
    });
  }

  return col.renderCell ? col.renderCell(renderCellProps) : row[col.key];
};
