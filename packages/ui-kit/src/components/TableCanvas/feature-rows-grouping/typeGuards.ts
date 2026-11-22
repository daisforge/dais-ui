import type { GroupRow } from './types';

export function isGroupRow<RowType>(
  row: RowType | GroupRow<RowType>,
): row is GroupRow<RowType> {
  const currRow = row as GroupRow<RowType>;
  return (
    Array.isArray(currRow?.childGroups) &&
    Array.isArray(currRow.childRows) &&
    typeof currRow.groupKey === 'string'
  );
}
export function isNotGroupRow<RowType>(
  row: RowType | GroupRow<RowType>,
): row is RowType {
  return !isGroupRow(row);
}
