import {
  ColumnConfig,
  ObjectForExtending,
  Prettify,
  TableConfig
} from '../TableCanvas/types';

export function StoryTableCanvasConfigComp<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  p: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >
) {
  return null;
}

export type StoryTableCanvasConfigCompType = TableConfig<
  ObjectForExtending,
  unknown,
  string,
  ObjectForExtending
>;

export type StoryColumnConfigTableCanvasCompType = Prettify<
  ColumnConfig<ObjectForExtending, unknown>
>;

export function StoryColumnConfigTableCanvasComp<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  p: Prettify<ColumnConfig<RowType, SummaryRowType>>
) {
  return null;
}
