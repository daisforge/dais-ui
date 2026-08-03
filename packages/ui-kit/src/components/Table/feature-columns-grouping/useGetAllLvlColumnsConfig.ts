import { useMemo } from 'react';

import { getKeyTextCol } from '../feature-key-text';
import { ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import {
  getSeparatedColWithAllParents,
  mergeSameCloselyLocatedCols,
} from './fromLastLvlToTree';
import { isNotGroupColumn } from './fromTreeToLastLvl';
import { FlattenedColumnOrColumnGroupConfig } from './types';

export const useGetAllLvlColumnsConfig = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  reorderedColumns: readonly ColumnConfigInternal<RowType, SummaryRowType>[],
  allColsFlattened: FlattenedColumnOrColumnGroupConfig<
    RowType,
    SummaryRowType
  >[],
  columnsGroupingIsActive: boolean,
) =>
  useMemo(() => {
    if (!columnsGroupingIsActive) {
      return { columnsWithParentGroups: reorderedColumns };
    }

    const allColsMap = new Map(
      allColsFlattened.reduce((acc, curr) => {
        acc.push([curr.key, curr]);
        // добавление keyText ключей в allColsMap (добавляются только здесь)
        if (isNotGroupColumn(curr) && curr.keyText) {
          const keyCol = getKeyTextCol(curr.keyText, 'key');
          const keyColWithParent = {
            ...keyCol,
            ...(curr.parent && { parent: curr.parent }),
          } as typeof curr;

          acc.push([keyCol.key, keyColWithParent]);
        }
        return acc;
      }, [] as [string, (typeof allColsFlattened)[number]][]),
    );

    const lastLvlColsMap = new Map(reorderedColumns.map((c) => [c.key, c]));

    const separatedColsWithAllParents = reorderedColumns.map((c) =>
      getSeparatedColWithAllParents(c, allColsMap, lastLvlColsMap),
    );
    // mutate separatedColsWithAllParents
    mergeSameCloselyLocatedCols(separatedColsWithAllParents);

    return { columnsWithParentGroups: separatedColsWithAllParents };
  }, [allColsFlattened, columnsGroupingIsActive, reorderedColumns]);
