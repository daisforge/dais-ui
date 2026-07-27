import { useCallback, useEffect, useMemo, useState } from 'react';

import { SUBROWS_KEY, TREE_ID_KEY } from '../feature-tree/constants';
import { ObjectForExtending, TableConfig } from '../types';

const getRecursivelyRowAndOpenedSubRows = <
  RowType,
  RowIdType extends string | number
>({
  r,
  parentId,
  getRowIsExpanded,
  rowKeyGetter,
  getSubRows
}: {
  r: RowType;
  getRowIsExpanded: (key: string | number) => boolean;
  rowKeyGetter: ((row: RowType) => RowIdType) | undefined;
  getSubRows: ((row: RowType) => RowType[] | undefined) | undefined;
  parentId?: string;
}) => {
  const subRows = getSubRows?.(r);
  const hasChildren = !!subRows?.length;
  const rowAndAllOpenedSubRows = [
    {
      ...r,
      ...(parentId && {
        [TREE_ID_KEY]: `${parentId}`
      })
    }
  ] as RowType[];

  if (!hasChildren) {
    return rowAndAllOpenedSubRows;
  }
  if (!rowKeyGetter) {
    return rowAndAllOpenedSubRows;
  }

  const keyOfRow = rowKeyGetter(r);

  if (!keyOfRow) {
    return rowAndAllOpenedSubRows;
  }

  const rowIsExpanded = getRowIsExpanded(keyOfRow);

  if (!rowIsExpanded) {
    return rowAndAllOpenedSubRows;
  }

  subRows.forEach((subRow, i) => {
    const arr2 = getRecursivelyRowAndOpenedSubRows({
      r: subRow,
      getRowIsExpanded,
      rowKeyGetter,
      getSubRows,
      parentId: `${
        parentId ? `${parentId}` : `${keyOfRow.toString()}`
      }.${SUBROWS_KEY}.${i}`
    });
    rowAndAllOpenedSubRows.push(...arr2);
  });

  return rowAndAllOpenedSubRows;
};

export const useFlattenedRows = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  rows,
  tableConfig,
  groupedCols
}: {
  rows: readonly RowType[];

  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  groupedCols: string[] | undefined;
}) => {
  const localExpandedRowsIdsStateAndSetter = useState(
    new Set<string | number>()
  );
  const expandedRowsIdsStateAndSetter =
    tableConfig.subRows?.expandedIdsState ?? localExpandedRowsIdsStateAndSetter;

  const [expandedRowsIds, setExpandedRowsIds] = expandedRowsIdsStateAndSetter;

  // reseting expanded after reGrouping Cols
  useEffect(() => {
    if (groupedCols) {
      setExpandedRowsIds(new Set());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupedCols]);

  const tableConfigSubRowsBoolean = !!tableConfig.subRows;

  const expandedAllRowsIds = useMemo(() => {
    if (!tableConfigSubRowsBoolean) {
      return null;
    }
    const rowKeyGetter = tableConfig.subRows?.rowKeyGetter;
    const getSubRows = tableConfig.subRows?.getSubRows;

    return rows.reduce((acc, currRow) => {
      const rowAndAllOpenedSubRows = getRecursivelyRowAndOpenedSubRows({
        r: currRow,
        getRowIsExpanded: () => true,
        rowKeyGetter,
        getSubRows
      });

      rowAndAllOpenedSubRows.forEach((r) => {
        const rowKey = rowKeyGetter?.(r);
        if (rowKey) {
          acc.add(rowKey);
        }
      });

      return acc;
    }, new Set<string | number>());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    rows,
    // tableConfig.subRows?.getSubRows, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    // tableConfig.subRows?.rowKeyGetter, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    tableConfigSubRowsBoolean
  ]);

  const flattenedRows = useMemo(() => {
    if (!tableConfigSubRowsBoolean || expandedRowsIds.size === 0) {
      return rows;
    }
    const rowKeyGetter = tableConfig.subRows?.rowKeyGetter;
    const getSubRows = tableConfig.subRows?.getSubRows;

    return rows.reduce((acc, currRow) => {
      const rowAndAllOpenedSubRows = getRecursivelyRowAndOpenedSubRows({
        r: currRow,
        getRowIsExpanded(keyOfRow) {
          return expandedRowsIds.has(keyOfRow);
        },
        rowKeyGetter,
        getSubRows
      });

      acc.push(...rowAndAllOpenedSubRows);

      return acc;
    }, [] as RowType[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    expandedRowsIds,
    rows,
    // tableConfig.subRows?.getSubRows, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    // tableConfig.subRows?.rowKeyGetter, - вместо данного стейта вписан в зависимости tableConfigSubRowsBoolean
    tableConfigSubRowsBoolean
  ]);

  const isExpandedAllRows =
    tableConfigSubRowsBoolean &&
    !!expandedAllRowsIds &&
    expandedAllRowsIds.size === flattenedRows.length;

  const externalIsExpandedAllRows = useMemo(() => {
    const getExpandedAll = tableConfig.rowsGrouping?.expandAllBtn?.expandedAll;
    if (!(tableConfigSubRowsBoolean && getExpandedAll)) {
      return null;
    }
    return getExpandedAll({
      allRowsIds: expandedAllRowsIds,
      shownRows: flattenedRows,
      expandedRowsIds
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    expandedAllRowsIds,
    flattenedRows,
    // tableConfig.rowsGrouping?.expandAllBtn?.expandedAll, // функция должна быть чистой, поэтому ее можно не актуализировать
    tableConfigSubRowsBoolean
  ]);

  const resultExpandedAll = externalIsExpandedAllRows ?? isExpandedAllRows;

  const toggleExpandAllButton = useCallback(() => {
    if (resultExpandedAll) {
      setExpandedRowsIds(new Set());
      return;
    }

    if (expandedAllRowsIds) {
      setExpandedRowsIds(expandedAllRowsIds);
    }
  }, [expandedAllRowsIds, resultExpandedAll, setExpandedRowsIds]);

  return {
    flattenedRows,
    expandedRowsIdsStateAndSetter,
    expandedRowsIds,
    isExpandedAllRows: resultExpandedAll,
    toggleExpandAllButton
  };
};
