/** Строку по этому индексу ещё не искали. Высоты целые и не больше `MAX_AUTO_ROW_HEIGHT` */
const UNRESOLVED = 0xffff;

/**
 * Высоты строк по индексу в текущем массиве строк. Glide читает высоты всех
 * строк на каждом кадре, поэтому чтение — из плоского массива. Новый массив
 * строк (сортировка, подгрузка) начинает индекс заново.
 */
export class RowHeightIndex<R> {
  private rows: readonly R[] = [];

  private heights = new Uint16Array(0);

  /** Высота по индексу; null — ещё не искали, undefined — индекса нет */
  get(rows: readonly R[], rowIndex: number): number | null | undefined {
    if (rows !== this.rows) {
      this.rows = rows;
      this.heights = new Uint16Array(rows.length).fill(UNRESOLVED);
    }
    const height = this.heights[rowIndex];
    return height === UNRESOLVED ? null : height;
  }

  /** Обновляет высоту, если строка `row` всё ещё стоит по этому индексу */
  set(rowIndex: number, row: R, height: number): void {
    if (this.rows[rowIndex] === row) this.heights[rowIndex] = height;
  }
}
