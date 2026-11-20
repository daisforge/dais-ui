/** Подстроку можно сохранить по treeId, даже когда rowKeyGetter рассчитан только на корневые строки. */
export function getSubRowEditId<R, Id>(
  row: R,
  rowKeyGetter: (row: R) => Id,
): Id | undefined {
  try {
    return rowKeyGetter(row) ?? undefined;
  } catch {
    return undefined;
  }
}
