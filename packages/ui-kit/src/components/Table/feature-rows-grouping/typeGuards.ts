import { GroupRow } from './types';

export function isGroupRow<RowType>(
  row: RowType | GroupRow<RowType>,
): row is GroupRow<RowType> {
  const currRow = row as GroupRow<RowType>;
  return !!(currRow.childGroups && currRow.childRows && currRow.groupKey);
}
export function isNotGroupRow<RowType>(
  row: RowType | GroupRow<RowType>,
): row is RowType {
  return !isGroupRow(row);
}
