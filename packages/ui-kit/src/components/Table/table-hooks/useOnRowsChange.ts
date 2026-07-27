import { useMemo } from 'react';
import { DataGridProps } from 'react-data-grid';

import { SUBROWS_KEY, TREE_ID_KEY } from '../feature-tree/constants';
import { ObjectForExtending, TableConfig } from '../types';
import { getValueInObj, setValueInObj } from '../utils/setValueInObj';

const getCopy = <T>(v: T): T => {
  if (typeof v === 'object') {
    return Array.isArray(v) ? ([...v] as T) : { ...v };
  }
  return v;
};

function isFinded<R extends ObjectForExtending | undefined>(
  row: R,
  index: number
): row is NonNullable<R> {
  return index !== -1;
}

export const useOnRowsChange = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  rows,
  tableConfig
}: {
  rows: readonly RowType[];
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
}) => {
  const tableConfigEditing = tableConfig.editing;
  const tableConfigOnRowsChange = tableConfigEditing?.onRowsChange;

  const subRowsKey = tableConfigEditing?.subRowsKey;

  const tableConfigEditingBoolean =
    !!tableConfigEditing &&
    !!tableConfigOnRowsChange &&
    !!tableConfigEditing.rowKeyGetter;

  const onRowsChangeLastVersion = useMemo(() => {
    if (!tableConfigEditingBoolean) {
      return undefined;
    }

    return ((rowsFromCb, data) => {
      const copyOfRows = [...rows];

      const copyOfData: typeof data & {
        rows: { before: RowType; after: RowType }[];
      } = {
        column: data.column,
        indexes: [],
        rows: []
      };

      // для каждой измененной строки...
      data.indexes.forEach((i) => {
        const changedRow = rowsFromCb[i] as RowType & {
          [TREE_ID_KEY]?: string;
          [SUBROWS_KEY]?: RowType[];
        };
        const changedRowPrev = copyOfRows[i] as RowType & {
          [TREE_ID_KEY]?: string;
          [SUBROWS_KEY]?: RowType[];
        };

        const { treeId, ...restChangedRow } = changedRow;

        // under - changing of subRows
        if (treeId) {
          let roadToChangedSubRow = treeId.split('.');
          /* 
            Если дочерние строки переданы не под ключом subRows, то 
            перед попыткой изменить дочернюю строку, нужно найти правильный путь до нее. (roadToChangedSubRow)
          */
          if (subRowsKey) {
            const subRowsKeyArr = subRowsKey.split('.');

            roadToChangedSubRow = roadToChangedSubRow
              .map((str) => {
                if (str === SUBROWS_KEY) {
                  return [subRowsKeyArr];
                }
                return str;
              })
              .flat(1) as string[];
          }

          const indexOfParentInRows = copyOfRows.findIndex(
            (el) =>
              tableConfigEditing.rowKeyGetter(el) === roadToChangedSubRow[0]
          );
          const curr = copyOfRows[indexOfParentInRows];

          if (isFinded(curr, indexOfParentInRows)) {
            const path = roadToChangedSubRow.slice(1).join('.');

            const before = getValueInObj(curr, path) as RowType;
            const after = restChangedRow as RowType;

            copyOfData.rows.push({ before: getCopy(before), after });
            copyOfData.indexes.push(indexOfParentInRows);

            setValueInObj(curr, path, after);
          }
          return;
        }
        // under - changing of rows without subrows
        const indexInRows = copyOfRows.findIndex(
          (el) =>
            tableConfigEditing.rowKeyGetter(el) ===
            // changedRowPrev - важно, для случаев rowKeyGetter = (r) => r.task + r.complete. и каждый из ключей меняется
            tableConfigEditing.rowKeyGetter(changedRowPrev)
        );

        if (indexInRows >= 0) {
          const before = copyOfRows[indexInRows] as RowType;
          const after = changedRow as RowType;

          copyOfData.indexes.push(indexInRows);
          copyOfData.rows.push({ before: getCopy(before), after });

          copyOfRows[indexInRows] = after;
        }
      });

      // main action of cb for changing state
      tableConfigOnRowsChange(copyOfRows, copyOfData);
      //
    }) as DataGridProps<RowType, SummaryRowType, RowIdType>['onRowsChange'];

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, tableConfigEditingBoolean, tableConfigOnRowsChange]);

  return { onRowsChangeLastVersion };
};
