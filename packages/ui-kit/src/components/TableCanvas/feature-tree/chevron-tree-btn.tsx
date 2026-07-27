import React from 'react';

import { useExpandedRowsContext } from '../contexts';
import { ObjectForExtending, TableConfig } from '../types';
import { CellExpandFormatter } from './cell-expand-formatter';
import { SUBROWS_KEY } from './constants';

export function ChevronTreeBtn<
  RowType extends ObjectForExtending,
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  SummaryRowType = unknown
>({
  tabIndex,
  tableConfigSubRows,
  row,
  className
}: {
  tabIndex: number | undefined;
  tableConfigSubRows: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
  >[typeof SUBROWS_KEY];
  row: RowType;
  className: string;
}) {
  const { expandedRowsIds, setExpandedRowsIds } = useExpandedRowsContext();

  const rowExpandId = tableConfigSubRows?.rowKeyGetter?.(row) ?? 'trololo';

  const expanded = !!expandedRowsIds?.has(rowExpandId);

  return (
    <CellExpandFormatter
      className={className}
      tabIndex={tabIndex}
      expanded={!!expanded}
      onCellExpand={() => {
        setExpandedRowsIds?.((prev) => {
          const copy = new Set(prev);
          if (expanded) {
            copy.delete(rowExpandId);
          } else {
            copy.add(rowExpandId);
          }
          return copy;
        });
      }}
    />
  );
}
