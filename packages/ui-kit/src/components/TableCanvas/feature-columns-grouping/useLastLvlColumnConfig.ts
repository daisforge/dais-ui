import { useMemo } from 'react';

import type {
  ColumnGroupConfig,
  ColumnOrColumnGroupConfig,
  ObjectForExtending
} from '../types';
import {
  COLUMN_GROUPS_MAP_SYMBOL,
  COLUMN_GROUPS_SYMBOL
} from './columnGroupSymbol';
import { flattenCols, getDeepestChildren } from './fromTreeToLastLvl';

const pushAllParentsRecursive = <R extends ObjectForExtending, SR>(
  allParentsArrForPush: string[],
  allParentsMapForPush: Map<string, ColumnGroupConfig<R, SR>>,
  parentCol: ColumnGroupConfig<R, SR> | undefined | null,
  allColsParentsFlattenedMap: Map<
    string,
    ColumnGroupConfig<R, SR> | null | undefined
  >
) => {
  if (!parentCol) return;

  // unshift - для glide важен порядок родителей
  allParentsArrForPush.unshift(parentCol.key);
  allParentsMapForPush.set(parentCol.key, parentCol);

  const nextLvlParentCol = allColsParentsFlattenedMap.get?.(parentCol.key);

  pushAllParentsRecursive(
    allParentsArrForPush,
    allParentsMapForPush,
    nextLvlParentCol,
    allColsParentsFlattenedMap
  );
};

export const useLastLvlColumnConfig = <
  RowType extends ObjectForExtending,
  SummaryRowType
>(
  columnMaybeTreeConfig: readonly ColumnOrColumnGroupConfig<
    RowType,
    SummaryRowType
  >[]
) =>
  useMemo(() => {
    const lastLvlColumnsConfig = getDeepestChildren(columnMaybeTreeConfig);
    const allColsFlattened = flattenCols(
      columnMaybeTreeConfig,
      (c) => (c as { children?: (typeof c)[] })?.children,
      (c) => c
    );
    const allColsParentsFlattenedMap = new Map(
      allColsFlattened.map((el) => [
        el.key,
        el?.parent as ColumnGroupConfig<RowType, SummaryRowType> | null
      ])
    );
    let maxLevelOfGroups = 0;

    const allGroupsMap = new Map<
      string,
      ColumnGroupConfig<RowType, SummaryRowType>
    >();

    const lastLvlColumnsConfigWithColumnGroups = lastLvlColumnsConfig.map(
      (el) => {
        const allParents: string[] = [];
        const parentCol = allColsParentsFlattenedMap.get(el.key);
        // собираем всех родителей в массив
        pushAllParentsRecursive(
          allParents,
          allGroupsMap,
          parentCol,
          allColsParentsFlattenedMap
        );

        if (maxLevelOfGroups < allParents.length) {
          maxLevelOfGroups = allParents.length;
        }

        return {
          ...el,
          [COLUMN_GROUPS_SYMBOL]: allParents,
          [COLUMN_GROUPS_MAP_SYMBOL]: allGroupsMap
        };
      }
    );

    const columnsGroupingIsActive =
      lastLvlColumnsConfig.length > 0 &&
      lastLvlColumnsConfig.length !== allColsFlattened.length;

    return {
      columnConfig: lastLvlColumnsConfigWithColumnGroups,
      allColsFlattened,
      allGroupsMap,
      columnsGroupingIsActive,
      maxLevelOfGroups
    };
  }, [columnMaybeTreeConfig]);
