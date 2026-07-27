import type { CellInfo, ColSpan, ObjectForExtending } from '../types';

export const getSpan = <R extends ObjectForExtending, SR = unknown>(
  colSpan: ColSpan<R, SR> | null | undefined,
  cellInfo: CellInfo<R, SR>
) => {
  if (colSpan === undefined || colSpan === null) return null;

  const resultColSpan =
    typeof colSpan === 'number' ? colSpan : colSpan(cellInfo);

  return [cellInfo.colInd, cellInfo.colInd + resultColSpan] as readonly [
    number,
    number
  ];
};
