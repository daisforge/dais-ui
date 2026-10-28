interface SpanHeight {
  width: number;
  height: number;
}

/**
 * Высоты ячеек одной колонки при ширине `width` (undefined — ещё не мерили).
 * Числа по объекту строки — объект на ячейку стоил бы памяти на каждую строку.
 * Блоки на несколько колонок редкие и зависят от ширины соседей, поэтому
 * хранятся со своей шириной.
 */
interface ColumnEntry {
  width?: number;
  cells: WeakMap<object, number>;
  spans: WeakMap<object, SpanHeight>;
}

/** Высоты ячеек по колонкам: что сообщили ячейки при отрисовке */
export class ColumnHeights {
  private readonly columns = new Map<string, ColumnEntry>();

  /** Высоты ячейки при этой ширине ещё нет */
  needsHeight(
    row: object,
    columnId: string,
    width: number,
    isSpan: boolean,
  ): boolean {
    const column = this.columns.get(columnId);
    if (!column) return true;
    return isSpan
      ? column.spans.get(row)?.width !== width
      : column.width !== width || !column.cells.has(row);
  }

  /**
   * Запоминает высоту ячейки. Замер другого вида (блок ↔ обычная ячейка) для этой строки
   * отбрасывается: ячейку объединили или разъединили, прежняя высота неактуальна.
   * @returns true — у колонки новая ширина, прежние высоты её ячеек отброшены
   */
  set(
    row: object,
    columnId: string,
    width: number,
    isSpan: boolean,
    height: number,
  ): boolean {
    const column = this.entry(columnId);
    if (isSpan) {
      column.cells.delete(row);
      column.spans.set(row, { width, height });
      return false;
    }

    column.spans.delete(row);
    const resized = column.width !== undefined && column.width !== width;
    if (column.width !== width) {
      column.width = width;
      column.cells = new WeakMap();
    }
    column.cells.set(row, height);
    return resized;
  }

  /** Наибольшая известная высота ячеек строки в колонках `columnIds` */
  maxHeight(row: object, columnIds: readonly string[]): number {
    return columnIds.reduce((max, id) => {
      const column = this.columns.get(id);
      return Math.max(
        max,
        column?.cells.get(row) ?? 0,
        column?.spans.get(row)?.height ?? 0,
      );
    }, 0);
  }

  /** Отбрасывает высоты колонок, которых больше нет */
  retain(columnIds: readonly string[]): void {
    const actual = new Set(columnIds);
    [...this.columns.keys()]
      .filter((id) => !actual.has(id))
      .forEach((id) => this.columns.delete(id));
  }

  clear(): void {
    this.columns.clear();
  }

  private entry(id: string): ColumnEntry {
    const existing = this.columns.get(id);
    if (existing) return existing;

    const created: ColumnEntry = { cells: new WeakMap(), spans: new WeakMap() };
    this.columns.set(id, created);
    return created;
  }
}
