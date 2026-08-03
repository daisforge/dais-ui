import {
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  ObjectForExtending,
} from '../types';
import { FlattenedColumnOrColumnGroupConfig } from './types';

export function isNotGroupColumn<Row extends ObjectForExtending, SummRow>(
  column: ColumnOrColumnGroupConfig<Row, SummRow>,
): column is ColumnConfig<Row, SummRow> {
  return (column as { children: unknown }).children === undefined;
}

const addOnlyDeepest = <Row extends ObjectForExtending, SummRow>(
  col: ColumnOrColumnGroupConfig<Row, SummRow>,
  arrForPush: ColumnConfig<Row, SummRow>[],
) => {
  if (isNotGroupColumn(col)) {
    arrForPush.push({ ...col });
    return;
  }
  col.children.forEach((child) => {
    addOnlyDeepest(child, arrForPush);
  });
};

export function getDeepestChildren<Row extends ObjectForExtending, SummRow>(
  cols: readonly ColumnOrColumnGroupConfig<Row, SummRow>[],
): readonly ColumnConfig<Row, SummRow>[] {
  if (!cols.length) {
    return cols as ColumnConfig<Row, SummRow>[];
  }
  const deepest: ColumnConfig<Row, SummRow>[] = [];

  cols.forEach((col) => {
    addOnlyDeepest(col, deepest);
  });

  return deepest;
}

export const flattenCols = <RowType extends ObjectForExtending, SummaryRowType>(
  arr: readonly ColumnOrColumnGroupConfig<RowType, SummaryRowType>[],
  getChildren: (
    col: ColumnOrColumnGroupConfig<RowType, SummaryRowType>,
  ) => ColumnOrColumnGroupConfig<RowType, SummaryRowType>[] | undefined,
  getParent: (
    item: ColumnOrColumnGroupConfig<RowType, SummaryRowType>,
  ) => ColumnOrColumnGroupConfig<RowType, SummaryRowType> | null,
  level?: number,
  parent?: ColumnOrColumnGroupConfig<RowType, SummaryRowType> | null,
): Array<FlattenedColumnOrColumnGroupConfig<RowType, SummaryRowType>> =>
  Array.prototype.concat.apply(
    arr?.map((x) => {
      const l = level || 1;
      const p = parent || null;
      return {
        ...x,
        level: l,
        parent: p,
      };
    }),
    arr?.map((x) =>
      flattenCols(
        getChildren(x) || [],
        getChildren,
        getParent,
        (level || 1) + 1,
        getParent(x) ?? null,
      ),
    ),
  );
