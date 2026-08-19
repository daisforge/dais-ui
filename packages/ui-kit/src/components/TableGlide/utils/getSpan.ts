import type { CellInfo, ColSpan, ObjectForExtending } from '../types';

export const getSpan = <R extends ObjectForExtending, SR = unknown>(
  colSpan: ColSpan<R, SR> | null | undefined,
  cellInfo: CellInfo<R, SR>
) => {
  if (colSpan === undefined || colSpan === null) return null;

  const resultColSpan =
    typeof colSpan === 'number' ? colSpan : colSpan(cellInfo);

  // colSpan <= 0 = нет горизонтального объединения. НЕ ставим span=[c,c]: иначе
  // одиночная ячейка считается «слитой» шириной 1 и ломает чисто-вертикальный
  // merge (spanRows). Пусть рендер идёт по обычному пути / только по spanRows.
  if (resultColSpan <= 0) return null;

  return [cellInfo.colInd, cellInfo.colInd + resultColSpan] as readonly [
    number,
    number
  ];
};
