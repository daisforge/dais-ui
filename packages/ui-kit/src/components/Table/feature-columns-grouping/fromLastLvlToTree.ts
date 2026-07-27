import { isRowInstrumentsColumn } from '../feature-row-instruments';
import { KEY_GROUPED_COL } from '../feature-rows-grouping';
import { CHECKBOX_COLUMN_KEY } from '../feature-select-row';
import { ColumnConfig, ColumnGroupConfig, ObjectForExtending } from '../types';
import { ColumnConfigInternal } from '../types/column-config-internal.type';
import { isNotGroupColumn } from './fromTreeToLastLvl';
import { FlattenedColumnOrColumnGroupConfig } from './types';

export const getSeparatedColWithAllParents = <
  RowType extends ObjectForExtending,
  SummaryRowType
>(
  col: ColumnConfigInternal<RowType, SummaryRowType>,
  allColsMap: Map<
    string,
    FlattenedColumnOrColumnGroupConfig<RowType, SummaryRowType>
  >,
  lastLvlColsMap: Map<string, ColumnConfigInternal<RowType, SummaryRowType>>
) => {
  if (
    isRowInstrumentsColumn(col.key) ||
    col.key === CHECKBOX_COLUMN_KEY ||
    col.key === KEY_GROUPED_COL
  ) {
    return col;
  }
  type ColGroup = ColumnGroupConfig<RowType, SummaryRowType>;
  type Col = ColumnConfig<RowType, SummaryRowType>;

  const colInMap = allColsMap.get(col.key);

  if (!colInMap) {
    return col;
  }
  let colWithAllParentsObj: Col | ColGroup | null = null;

  const pushColAndAllParents = (column: typeof colInMap) => {
    const colForPushing = (
      isNotGroupColumn(column)
        ? // чтобы на последнем уровне вложенности была колонка со всеми фичами (в просто column потеряны все фичевые ключи)
          lastLvlColsMap.get(column.key) ?? column
        : column
    ) as typeof column;

    // pushing (добавляем как матрешку: colWithAllParentsObj внутренняя матрешка, column - внешняя. После обновляем colWithAllParentsObj на полученную матрешку) ----------------------------------------------------------------
    colWithAllParentsObj = colWithAllParentsObj
      ? { ...column, children: [colWithAllParentsObj] }
      : colForPushing;
    // pushing ----------------------------------------------------------------

    if (!column.parent) {
      return;
    }
    const { parent } = column;

    const parentInFlattened = allColsMap.get(parent.key);

    if (!parentInFlattened) {
      return;
    }
    pushColAndAllParents(parentInFlattened);
  };
  pushColAndAllParents(colInMap);

  return colWithAllParentsObj as unknown as Col | ColGroup;
};

/**
 * Мутирует переданный первым аргументом массив
 * @param array
 */
export const mergeSameCloselyLocatedCols = <
  RowType extends ObjectForExtending,
  SummaryRowType,
  ColGroup extends ColumnGroupConfig<RowType, SummaryRowType>
>(
  array: (ColumnConfig<RowType, SummaryRowType> | ColGroup)[]
) => {
  array.forEach((_, ind, arr) => {
    if (ind >= arr.length - 1) {
      return;
    }

    let nextIsSame = true;
    const nextColInd = ind + 1;
    while (nextIsSame) {
      const col = arr[ind] as typeof _;
      const nextCol = arr[nextColInd];
      const isSame = col.key === nextCol?.key;

      if (nextColInd > arr.length - 1) {
        nextIsSame = false;
        return;
      }
      if (!isSame) {
        nextIsSame = false;
        return;
      }

      const newCol = {
        ...col,
        ...nextCol,
        children: [
          ...((col as ColGroup)?.children ?? []),
          ...((nextCol as ColGroup)?.children ?? [])
        ]
      };

      if (newCol.children.length > 0) {
        mergeSameCloselyLocatedCols(newCol.children);
      }

      arr[ind] = newCol;
      arr.splice(nextColInd, 1);
    }
  });
};
