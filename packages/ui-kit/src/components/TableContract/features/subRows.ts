import { useMemo } from 'react';

import { getRowKeyGetter } from '../lib/getRowKeyGetter';
import { recursGetV } from '../lib/recursiveGetV';
import { ContractTableConfig, InstanceTableConfig } from '../types';

type SubRowConfigProp = Pick<InstanceTableConfig, 'subRows'> | null;

export function useSubRowsConfig(
  tableConfigSubRows: ContractTableConfig['subRows']
): SubRowConfigProp {
  const { subRowsKey, rowUniqIdKey } = tableConfigSubRows ?? {};
  const enabled = !!tableConfigSubRows;
  return useMemo((): SubRowConfigProp => {
    if (!enabled || subRowsKey === undefined || rowUniqIdKey === undefined) {
      return null;
    }

    return {
      subRows: {
        getSubRows(row) {
          let keys = [subRowsKey];
          if (subRowsKey.includes('.')) {
            keys = subRowsKey.split('.');
          }
          const v = recursGetV(row, keys);
          return Array.isArray(v) ? v : undefined;
        },
        rowKeyGetter: getRowKeyGetter(rowUniqIdKey)
      }
    };
  }, [enabled, rowUniqIdKey, subRowsKey]);
}
