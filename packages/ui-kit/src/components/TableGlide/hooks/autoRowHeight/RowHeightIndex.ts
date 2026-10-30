/** Строку по этому индексу ещё не искали. Высоты целые и меньше него */
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

  /** Все высоты придётся искать заново */
  reset(): void {
    this.heights.fill(UNRESOLVED);
  }

  /** Строки `from..to`, для которых `isStale`, придётся искать заново */
  forget(from: number, to: number, isStale: (row: R) => boolean): void {
    const last = Math.min(to, this.rows.length - 1);
    for (let i = Math.max(from, 0); i <= last; i += 1) {
      if (isStale(this.rows[i]!)) this.heights[i] = UNRESOLVED;
    }
  }

  /** Обновляет высоту, если строка `row` всё ещё стоит по этому индексу */
  set(rowIndex: number, row: R, height: number): void {
    if (this.rows[rowIndex] === row) this.heights[rowIndex] = height;
  }
}
