import { ColumnConfig } from './column-config.type';
import { ColumnDefault, DefaultOmittedKeys } from './data-grid.type';
import { ObjectForExtending } from './utils.type';

export type ColumnConfigInternal<
  Row extends ObjectForExtending,
  SummRow = unknown
> = ColumnConfig<Row, SummRow> &
  Pick<ColumnDefault<Row, SummRow>, DefaultOmittedKeys>;
