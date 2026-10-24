import type { RowHeightChange } from './AutoRowHeightStore';

export interface VisibleRows {
  from: number;
  to: number;
}

const rangeOf = ({ from, to }: VisibleRows) =>
  Array.from(
    { length: Math.max(to - from + 1, 0) },
    (_, index) => from + index,
  );

/**
 * На сколько прокрутить таблицу, чтобы видимое содержимое не сдвинулось после коммита высот.
 *
 * Якорь — первая видимая строка, которую в коммите не измеряли: её высота уже была известна.
 * Всё, что выросло выше неё (строки над экраном и только что измеренные строки у верхнего
 * края, даже если часть из них не выросла), компенсируется прокруткой. Если измерены все
 * видимые строки (первая отрисовка, прыжок в конец таблицы), держаться не за что — сдвига нет.
 */
export function anchorShiftOf(
  changes: readonly RowHeightChange[],
  visible: VisibleRows,
): number {
  const measured = new Set(changes.map(({ rowIndex }) => rowIndex));
  const anchor = rangeOf(visible).find((rowIndex) => !measured.has(rowIndex));
  if (anchor === undefined) return 0;
  return changes
    .filter(({ rowIndex }) => rowIndex < anchor)
    .reduce((shift, { delta }) => shift + delta, 0);
}
