/** Выравнивание контента в объединённой ячейке тела таблицы. */
export type MergedCellsAlign = {
  /** По горизонтали. @default из `contentFormat.alignContent` колонки, иначе 'left' */
  horizontal?: 'left' | 'center' | 'right';
  /**
   * По вертикали. @default 'top' у блока в несколько строк (подпись прилипает к
   * верху видимой части при прокрутке), иначе 'center'
   */
  vertical?: 'top' | 'center' | 'bottom';
};
