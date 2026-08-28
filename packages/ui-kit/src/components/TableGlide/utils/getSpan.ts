import type { CellInfo, ColSpan, ObjectForExtending } from '../types';

export const getSpan = <R extends ObjectForExtending, SR = unknown>(
  colSpan: ColSpan<R, SR> | null | undefined,
  cellInfo: CellInfo<R, SR>
) => {
  if (colSpan === undefined || colSpan === null) return null;

  const resultColSpan =
    typeof colSpan === 'number' ? colSpan : colSpan(cellInfo);

  // Нет объединения по горизонтали. Возвращаем null, а не [c, c], чтобы одиночная
  // ячейка не считалась слитой и не ломала вертикальный merge.
  if (resultColSpan <= 0) return null;

  return [cellInfo.colInd, cellInfo.colInd + resultColSpan] as readonly [
    number,
    number
  ];
};
