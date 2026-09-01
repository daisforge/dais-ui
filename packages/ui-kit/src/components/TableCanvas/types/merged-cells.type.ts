/** Выравнивание контента в объединённой ячейке тела таблицы. */
export type MergedCellsAlign = {
  /** По горизонтали. @default из `contentAlign` колонки, иначе 'left' */
  horizontal?: 'left' | 'center' | 'right';
  /** По вертикали. @default 'center' */
  vertical?: 'top' | 'center' | 'bottom';
};
