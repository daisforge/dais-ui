export type SubRows<RowType, RowIdType> = {
  getSubRows: (row: RowType) => RowType[] | undefined;
  rowKeyGetter: (row: RowType) => RowIdType;
  expandedIdsState?: [
    Set<string | number>,
    (
      newV:
        | Set<string | number>
        | ((prev: Set<string | number>) => Set<string | number>),
    ) => void,
  ];
};
