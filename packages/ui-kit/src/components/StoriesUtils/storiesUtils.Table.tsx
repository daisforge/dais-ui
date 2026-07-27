import {
  ColumnConfig,
  ObjectForExtending,
  Prettify,
  TableConfig
} from '../Table/types';

export function StoryTableConfigComp<
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

export function StoryColumnConfigComp<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  p: Prettify<ColumnConfig<RowType, SummaryRowType>>
) {
  return null;
}
