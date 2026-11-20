import { isStructuredCloneSupported } from '@ui-kit/utils';
import { useMemo } from 'react';

import type { WrittenCell } from '../feature-cell-transfer/types';
import { SUBROWS_KEY, TREE_ID_KEY } from '../feature-tree/constants';
import type {
  ObjectForExtending,
  RowsChangeData,
  TableCanvasChangedCell,
  TableConfig,
} from '../types';
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
  markEditedCells,
}: {
  rows: readonly RowType[];
  markEditedCells: (
    cells: readonly TableCanvasChangedCell<RowIdType>[],
    renamed: ReadonlyMap<RowIdType, RowIdType>,
  ) => void;
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
      data: Omit<
        RowsChangeData<RowType, SummaryRowType, RowIdType>,
        'rows' | 'changedCells'
      > & {
        writtenCells?: WrittenCell[];
      },
    ) => {
      const copyOfRows = [...rows];

      const committedIds = new Map<number, RowIdType>();
      const renamed = new Map<RowIdType, RowIdType>();
      const recordRow = (index: number, before: RowType, after: RowType) => {
        const oldId = tableConfigEditing.rowKeyGetter(before);
        const newId = tableConfigEditing.rowKeyGetter(after);
        committedIds.set(index, newId);
        if (oldId !== newId) renamed.set(oldId, newId);
      };
      const copyOfData: RowsChangeData<RowType, SummaryRowType, RowIdType> = {
        column: data.column,
        indexes: [],
        rows: [],
        type: data.type ?? 'edit',
        ...(data.fillMeta !== undefined && { fillMeta: data.fillMeta }),
        ...(data.fillResult !== undefined && { fillResult: data.fillResult }),
      };

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

        if (treeId) {
          let roadToChangedSubRow = treeId.split('.');
          // В treeId каждый уровень обозначен subRows. В данных приложения
          // массив детей может лежать глубже, например в data.children.
          if (subRowsKey) {
            const subRowsKeyArr = subRowsKey.split('.');

            roadToChangedSubRow = roadToChangedSubRow.flatMap((segment) =>
              segment === SUBROWS_KEY ? subRowsKeyArr : [segment],
            );
          }

          // В treeId ключ родителя записан строкой, даже если rowKeyGetter возвращает число.
          const indexOfParentInRows = copyOfRows.findIndex(
            (el) =>
              String(tableConfigEditing.rowKeyGetter(el)) ===
              String(roadToChangedSubRow[0]),
          );
          const curr = copyOfRows[indexOfParentInRows];

          if (isFinded(curr, indexOfParentInRows)) {
            // Для замороженных данных deepCloneRows создаёт копию родителя
            // вместе с дочерними строками, которые обновляет setValueInObj.
            const writableCurr = deepCloneRows ? deepCloneRow(curr) : curr;
            const path = roadToChangedSubRow.slice(1).join('.');

            const before = getValueInObj(writableCurr, path) as
              | RowType
              | undefined;
            if (!before) return;
            const after = restChangedRow as RowType;

            copyOfData.rows.push({ before: getCopy(before), after });
            copyOfData.indexes.push(indexOfParentInRows);
            recordRow(i, before, after);

            setValueInObj(writableCurr, path, after);
            if (deepCloneRows) {
              copyOfRows[indexOfParentInRows] = writableCurr;
            }
          }
          return;
        }
        // Ищем строку по прежнему ключу, потому что сама правка могла изменить её ключ.
        const indexInRows = copyOfRows.findIndex(
          (el) =>
            tableConfigEditing.rowKeyGetter(el) ===
            tableConfigEditing.rowKeyGetter(changedRowPrev),
        );

        if (indexInRows >= 0) {
          const before = copyOfRows[indexInRows] as RowType;
          const after = changedRow as RowType;

          copyOfData.indexes.push(indexInRows);
          recordRow(i, before, after);
          copyOfData.rows.push({ before: getCopy(before), after });

          copyOfRows[indexInRows] = after;
        }
      });

      const changedCells: TableCanvasChangedCell<RowIdType>[] = [];
      const seen = new Map<RowIdType, Set<string>>();
      data.writtenCells?.forEach(({ rowIndex, columnKey }) => {
        const rowId = committedIds.get(rowIndex);
        if (rowId === undefined) return;
        const keys = seen.get(rowId) ?? new Set<string>();
        if (keys.has(columnKey)) return;
        keys.add(columnKey);
        seen.set(rowId, keys);
        changedCells.push({ rowId, columnKey });
      });
      copyOfData.changedCells = changedCells;
      markEditedCells(changedCells, renamed);

      tableConfigOnRowsChange(copyOfRows, copyOfData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    rows,
    tableConfigEditingBoolean,
    flattenedRowsRef,
    tableConfigOnRowsChange,
    deepCloneRows,
    subRowsKey,
    tableConfigEditing?.rowKeyGetter,
    markEditedCells,
  ]);

  return { onRowsChangeLastVersion };
};
