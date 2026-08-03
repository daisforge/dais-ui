import { ObjectForExtending } from '../types';

/* eslint-disable @typescript-eslint/naming-convention */
export function isAtBottom({
  event: { currentTarget, target },
  scrollThreshold = 100,
}: {
  event: React.UIEvent<HTMLElement>;
  scrollThreshold: number | undefined;
}): boolean {
  const neededTarget = target as typeof currentTarget;
  return (
    neededTarget.scrollTop + scrollThreshold >=
    neededTarget.scrollHeight - neededTarget.clientHeight
  );
}
export const SKELETON_ROW_KEY = 'skeletonXXXXXXXXX';
export const SKELETON_CELLS_KEY = 'SKELETON_CELLS_XXXXXXXXX';
export const SKELETON_ROW = { [SKELETON_ROW_KEY]: true } as const;
export type SkeletonCells = Set<string>;
export const addSkeletonToCellInRow = <
  RowType extends ObjectForExtending = ObjectForExtending,
>(
  row: RowType,
  columnKeyForSkeleton: string,
) => {
  const currentSkeletonCells = row?.[SKELETON_CELLS_KEY] as
    | Set<string>
    | undefined;
  if (!currentSkeletonCells) {
    return { ...row, [SKELETON_CELLS_KEY]: new Set([columnKeyForSkeleton]) };
  }

  currentSkeletonCells.add(columnKeyForSkeleton);
  return { ...row, [SKELETON_CELLS_KEY]: currentSkeletonCells };
};

export const deleteSkeletonCellFromRow = <
  RowType extends ObjectForExtending = ObjectForExtending,
>(
  row: RowType,
  columnKeyWithSkeleton: string,
) => {
  const currentSkeletonCells = row?.[SKELETON_CELLS_KEY] as
    | Set<string>
    | undefined;
  if (!currentSkeletonCells) return row;
  const newRow = { ...row };
  if (currentSkeletonCells.has(columnKeyWithSkeleton)) {
    currentSkeletonCells.delete(columnKeyWithSkeleton);
    // удаляем вовсе ключ
    if (currentSkeletonCells.size === 0) {
      delete newRow?.[SKELETON_CELLS_KEY];
    }
    return newRow;
  }

  return newRow;
};

export const addSkeletonToRow = <
  RowType extends ObjectForExtending = ObjectForExtending,
>(
  row: RowType,
) => ({ ...row, [SKELETON_ROW_KEY]: true });
export const deleteSkeletonFromRow = <
  RowType extends ObjectForExtending = ObjectForExtending,
>(
  row: RowType,
) => {
  const newRow = { ...row };
  delete newRow?.[SKELETON_ROW_KEY];

  return newRow;
};
