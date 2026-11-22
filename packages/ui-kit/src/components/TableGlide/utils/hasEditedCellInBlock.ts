/** Весь блок подсвечивается, если отмечена хотя бы одна из входящих в него ячеек данных. */
function hasEditedCellInBlock<R>(
  rows: readonly R[],
  columns: readonly { id: string; isServiceColumn?: boolean }[],
  blockRows: readonly [number, number],
  blockCols: readonly [number, number],
  isCellEdited: (row: R, key: string) => boolean,
): boolean {
  const lastRow = Math.min(blockRows[1], rows.length - 1);
  const lastCol = Math.min(blockCols[1], columns.length - 1);
  for (let r = blockRows[0]; r <= lastRow; r += 1) {
    const row = rows[r];
    if (row !== undefined) {
      for (let c = blockCols[0]; c <= lastCol; c += 1) {
        const column = columns[c];
        if (column && !column.isServiceColumn && isCellEdited(row, column.id))
          return true;
      }
    }
  }
  return false;
}

export function createBlockEditedLookup<R>(
  rows: readonly R[],
  columns: readonly { id: string; isServiceColumn?: boolean }[],
  isCellEdited: (row: R, key: string) => boolean,
) {
  const cache = new Map<
    number,
    { lastRow: number; lastCol: number; edited: boolean }
  >();
  return (
    blockRows: readonly [number, number],
    blockCols: readonly [number, number],
  ) => {
    const origin = blockRows[0] * columns.length + blockCols[0];
    const previous = cache.get(origin);
    if (
      previous &&
      previous.lastRow === blockRows[1] &&
      previous.lastCol === blockCols[1]
    )
      return previous.edited;
    const edited = hasEditedCellInBlock(
      rows,
      columns,
      blockRows,
      blockCols,
      isCellEdited,
    );
    cache.set(origin, { lastRow: blockRows[1], lastCol: blockCols[1], edited });
    return edited;
  };
}
