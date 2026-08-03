import { useMemo, useState } from 'react';

import { ObjectForExtending, TableConfig } from '../types';
import { groupsToArr, rowGrouper } from './data-handlers';
import { GroupRowsOrRows } from './types';

export function useGroupedRows<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig = {},
  rows,
}: {
  tableConfig?: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
  >;
  rows: readonly RowType[];
}) {
  const { rowsGrouping } = tableConfig;
  const rowsGroupingIsActiveInConfig = !!rowsGrouping;

  // состояния для видимости лейбла и счетчика в ControlBlock
  const [isRowsGroupingLabelVisible, setIsRowsGroupingLabelVisible] =
    useState(true);
  const [isRowsGroupingCounterVisible, setIsRowsGroupingCounterVisible] =
    useState(true);

  const [groupByArr, setGroupByArr] = rowsGrouping?.groupByState ?? [];

  // rowsGrouping
  const [groupedRows] = useMemo(() => {
    if (
      !rowsGroupingIsActiveInConfig ||
      !groupByArr ||
      groupByArr.length === 0
    ) {
      return [rows, rows.length];
    }

    type ReturnRows = Readonly<GroupRowsOrRows<RowType>>;
    const groupRows = (
      rows: readonly RowType[],
      [groupByKey, ...remainingGroupByKeys]: readonly string[],
      startRowIndex: number,
      groupParents: string,
    ): [ReturnRows, number] => {
      if (typeof groupByKey === 'undefined') return [rows, rows.length];

      let groupRowsCount = 0;
      const groups: ObjectForExtending = {};
      const groupsChildRows: ObjectForExtending = {};

      const arr = Object.entries(rowGrouper(rows, groupByKey));

      // eslint-disable-next-line no-restricted-syntax
      for (const [key, childRows] of arr) {
        // Recursively group each parent group
        const [childGroups, childRowsCount] =
          remainingGroupByKeys.length === 0
            ? [childRows, childRows.length]
            : groupRows(
                childRows,
                remainingGroupByKeys,
                startRowIndex + groupRowsCount + 1, // 1 for parent row
                `${groupParents ? `${groupParents}-$$$-` : ''}${key}`,
              );

        groups[key] = childGroups;
        groupsChildRows[key] = childRows;

        groupRowsCount += childRowsCount + 1; // 1 for parent row
      }

      return [
        groupsToArr(groups, rowsGrouping.groupRowReplaceTo, {
          additionalPropertiesForGroup: (key) => ({
            groupKey: key,
            groupByKey,
            childRows: groupsChildRows?.[key] as RowType[],
            groupParents,
          }),
        }) as unknown as ReturnRows,
        groupRowsCount,
      ];
    };

    return groupRows(rows, groupByArr, 0, '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupByArr, rows, rowsGroupingIsActiveInConfig]);

  return {
    groupedRows,
    groupedCols: groupByArr,
    setGroupedCols: setGroupByArr,
    rowsGroupingIsActiveInConfig,
    isRowsGroupingLabelVisible,
    setIsRowsGroupingLabelVisible,
    isRowsGroupingCounterVisible,
    setIsRowsGroupingCounterVisible,
  };
}
