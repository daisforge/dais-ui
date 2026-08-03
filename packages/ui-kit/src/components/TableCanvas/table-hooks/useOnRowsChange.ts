import { isStructuredCloneSupported } from '@ui-kit/utils';
import { useMemo } from 'react';

import { SUBROWS_KEY, TREE_ID_KEY } from '../feature-tree/constants';
import { ObjectForExtending, RowsChangeData, TableConfig } from '../types';
import { getValueInObj, setValueInObj } from '../utils/setValueInObj';

const getCopy = <T>(v: T): T => {
  if (typeof v === 'object') {
    return Array.isArray(v) ? ([...v] as T) : { ...v };
  }
  return v;
};

const deepCloneRow = <T>(v: T): T =>
  isStructuredCloneSupported
    ? structuredClone(v)
    : JSON.parse(JSON.stringify(v));

function isFinded<R extends ObjectForExtending | undefined>(
  row: R,
  index: number,
): row is NonNullable<R> {
  return index !== -1;
}

export const useOnRowsChange = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  rows,
  tableConfig,
  flattenedRowsRef,
}: {
  rows: readonly RowType[];
  flattenedRowsRef: React.MutableRefObject<readonly RowType[]>;
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

  const deepCloneRows = tableConfigEditing?.deepCloneRows;

  const tableConfigEditingBoolean =
    !!tableConfigEditing &&
    !!tableConfigOnRowsChange &&
    !!tableConfigEditing.rowKeyGetter;

  const onRowsChangeLastVersion = useMemo(() => {
    if (!tableConfigEditingBoolean) {
      return undefined;
    }

    return ((
      rowsFromCb: RowType[],
      data: RowsChangeData<RowType, SummaryRowType>,
    ) => {
      const copyOfRows = [...rows];

      const copyOfData: typeof data & {
        rows: { before: RowType; after: RowType }[];
      } = {
        column: data.column,
        indexes: [],
        rows: [],
        type: data.type ?? 'edit',
        ...(data.fillMeta !== undefined && { fillMeta: data.fillMeta }),
        ...(data.fillResult !== undefined && { fillResult: data.fillResult }),
      };

      // для каждой измененной строки...
      data.indexes.forEach((i: number) => {
        const changedRow = rowsFromCb[i] as RowType & {
          [TREE_ID_KEY]?: string;
          [SUBROWS_KEY]?: RowType[];
        };

        const changedRowPrev = flattenedRowsRef.current[i] as RowType & {
          [TREE_ID_KEY]?: string;
          [SUBROWS_KEY]?: RowType[];
        };

        const { treeId = undefined, ...restChangedRow } = changedRow;

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

          // roadToChangedSubRow[0] — это сегмент treeId, который строится в
          // useFlattenedRows через `.toString()`, поэтому он всегда строка.
          // Нормализуем обе стороны к строке, иначе числовой ключ не сматчится
          // (123 === '123' → false) и правка под-строки молча потеряется.
          const indexOfParentInRows = copyOfRows.findIndex(
            (el) =>
              String(tableConfigEditing.rowKeyGetter(el)) ===
              String(roadToChangedSubRow[0]),
          );
          const curr = copyOfRows[indexOfParentInRows];

          if (isFinded(curr, indexOfParentInRows)) {
            // Запись под-строки идёт ВНУТРЬ объекта родителя (setValueInObj
            // мутирует curr.subRows). Если строки заморожены (Immer/RTK), это
            // упадёт с "Cannot assign to read only property". По флагу
            // deepCloneRows клонируем поддерево родителя — structuredClone
            // глубокий, поэтому весь subRows-подграф становится размороженным.
            const writableCurr = deepCloneRows ? deepCloneRow(curr) : curr;
            const path = roadToChangedSubRow.slice(1).join('.');

            const before = getValueInObj(writableCurr, path) as RowType;
            const after = restChangedRow as RowType;

            copyOfData.rows.push({ before: getCopy(before), after });
            copyOfData.indexes.push(indexOfParentInRows);

            setValueInObj(writableCurr, path, after);
            if (deepCloneRows) {
              copyOfRows[indexOfParentInRows] = writableCurr;
            }
          }
          return;
        }
        // under - changing of rows without subrows
        const indexInRows = copyOfRows.findIndex(
          (el) =>
            tableConfigEditing.rowKeyGetter(el) ===
            // changedRowPrev - важно, для случаев rowKeyGetter = (r) => r.task + r.complete. и каждый из ключей меняется
            tableConfigEditing.rowKeyGetter(changedRowPrev),
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    rows,
    tableConfigEditingBoolean,
    flattenedRowsRef,
    tableConfigOnRowsChange,
    deepCloneRows,
  ]);

  return { onRowsChangeLastVersion };
};
