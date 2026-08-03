import { useMemo } from 'react';

import { ColumnConfig, ObjectForExtending } from '../types';
import { getKeyTextCol } from './handlers';
import { KeyText, KeyTextMap } from './types';

export const useColsWithKeyTextMap = <
  RowType extends ObjectForExtending,
  SummaryRowType,
>({
  tableConfigKeyTextBoolean,
  columnConfig,
  keyText,
}: {
  tableConfigKeyTextBoolean: boolean;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  keyText: KeyText;
}) =>
  useMemo(() => {
    if (!tableConfigKeyTextBoolean) {
      return new Map() as KeyTextMap;
    }

    return columnConfig.reduce((acc, curr) => {
      if (curr.keyText) {
        const newLocal = {
          keyKey: getKeyTextCol(curr.keyText, keyText).key,
          textKey: curr.key,
        };
        acc.set(newLocal.keyKey, newLocal);
        acc.set(newLocal.textKey, newLocal);
      }

      return acc;
    }, new Map() as KeyTextMap);
  }, [columnConfig, keyText, tableConfigKeyTextBoolean]);
