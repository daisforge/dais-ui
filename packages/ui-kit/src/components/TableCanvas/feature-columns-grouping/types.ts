import { ColumnOrColumnGroupConfig, ObjectForExtending } from '../types';

export type FlattenedColumnOrColumnGroupConfig<
  RowType extends ObjectForExtending,
  SummaryRowType,
> = ColumnOrColumnGroupConfig<RowType, SummaryRowType> & {
  level: number;
  parent: ColumnOrColumnGroupConfig<RowType, SummaryRowType> | null;
};
