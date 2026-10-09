export type StickyColumnsConfig<ColumnType> =
  | readonly string[]
  | ((column: ColumnType) => boolean);

export type StickyRowsConfig<RowType> =
  | readonly number[]
  | ((row: RowType, rowIndex: number) => boolean);
