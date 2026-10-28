import type { CellHeightReporter } from '../../cellRenderer';
import { ColumnHeights } from './ColumnHeights';
import { RowHeightIndex } from './RowHeightIndex';

/** Потолок высоты строки: текст длиннее обрезается */
export const MAX_AUTO_ROW_HEIGHT = 480;

interface RowHeight {
  height: number;
  /** Поколение замеров, на котором высота посчитана */
  generation: number;
}

export type ScheduleCommit = (commit: () => void) => void;

/** Строка, измеренная в коммите, и изменение её высоты для glide (0 — не изменилась) */
export interface RowHeightChange {
  rowIndex: number;
  delta: number;
}

const sameIds = (a: readonly string[], b: readonly string[]) =>
  a.length === b.length && a.every((id, i) => id === b[i]);

/**
 * Высоты строк для `rowHeight: 'auto'` из высот ячеек, которые ячейки сообщают
 * при отрисовке (`CellHeightReporter`). Высота строки — максимум по известным
 * ячейкам: glide рисует только видимые, остальные домериваются при прокрутке.
 *
 * Glide рисует кадр колонка за колонкой и для каждой спрашивает высоты строк,
 * поэтому высоты меняются только коммитом после кадра (`scheduleCommit`): внутри
 * кадра все колонки видят одни и те же высоты.
 *
 * Ресайз и смена набора колонок поднимают поколение: высоты строк считаются
 * заново из ячеек, когда строка снова на экране, а до тех пор — прежние.
 */
export class AutoRowHeightStore<R extends object> {
  private readonly cells = new ColumnHeights();

  private readonly index = new RowHeightIndex<R>();

  private readonly rows = new WeakMap<object, RowHeight>();

  private columnIds: readonly string[] = [];

  private generation = 0;

  /** Ниже базовой высоты строка не бывает: изменения под ней glide не видит */
  private baseHeight = 0;

  /** Строки с новыми высотами ячеек, ждущие коммита, и их индексы */
  private readonly pending = new Map<R, number>();

  /** В кадре у какой-то колонки сменилась ширина — поколение поднимется при коммите */
  private resizedInFrame = false;

  /**
   * @param onChange после коммита высота какой-то строки изменилась для glide: все измеренные в коммите
   * строки
   * @param scheduleCommit когда применить замеры кадра; по умолчанию — сразу после него
   */
  constructor(
    private readonly onChange: (changes: readonly RowHeightChange[]) => void,
    private readonly scheduleCommit: ScheduleCommit = (commit) =>
      queueMicrotask(commit),
  ) {}

  setBaseHeight(height: number): void {
    this.baseHeight = height;
  }

  /** Вызывается на каждый запрос высоты: тот же массив отсекается по ссылке */
  setColumns(ids: readonly string[]): void {
    if (ids === this.columnIds) return;
    const changed = !sameIds(ids, this.columnIds);
    this.columnIds = ids;
    if (!changed) return;

    this.cells.retain(ids);
    this.generation += 1;
  }

  /**
   * Замеры колонок `columnIds` (по умолчанию всех) устарели — сменились тема, шрифт или
   * рендер колонки: ячейки перемеряются при следующей отрисовке, до этого высоты строк прежние.
   */
  invalidate(columnIds?: readonly string[]): void {
    this.cells.invalidate(columnIds);
  }

  /**
   * Высота строки по индексу; undefined — индекса нет. `visible` — строка на экране:
   * её устаревшая высота пересчитывается из ячеек.
   */
  heightAt(
    rows: readonly R[],
    rowIndex: number,
    visible: boolean,
  ): number | undefined {
    const cached = this.index.get(rows, rowIndex);
    if (cached === undefined) return undefined;
    if (cached !== null && !visible) return cached;

    const row = rows[rowIndex]!;
    const height = this.rowHeight(row, visible);
    this.index.set(rowIndex, row, height);
    return height;
  }

  /** Приёмник высоты ячейки строки `row` в колонке `columnId` */
  reporter(
    row: R,
    rowIndex: number,
    columnId: string,
    isSpan: boolean,
  ): CellHeightReporter {
    return {
      needsHeight: (width) =>
        this.cells.needsHeight(row, columnId, width, isSpan),
      report: (width, height) => {
        if (this.cells.set(row, columnId, width, isSpan, height)) {
          this.resizedInFrame = true;
        }
        this.markPending(row, rowIndex);
      },
    };
  }

  private markPending(row: R, rowIndex: number): void {
    if (this.pending.size === 0) this.scheduleCommit(() => this.commit());
    this.pending.set(row, rowIndex);
  }

  /** Применяет замеры кадра: пересчитывает высоты строк, где появились новые ячейки */
  private commit(): void {
    if (this.resizedInFrame) {
      this.resizedInFrame = false;
      this.generation += 1;
    }
    const changes = [...this.pending]
      .map(([row, rowIndex]) => ({
        rowIndex,
        delta: this.commitRow(row, rowIndex),
      }))
    this.pending.clear();

    if (changes.some(({ delta }) => delta !== 0)) this.onChange(changes);
  }

  /** @returns на сколько изменилась высота строки для glide */
  private commitRow(row: R, rowIndex: number): number {
    const before = this.rows.get(row)?.height ?? 0;
    const after = this.computeRowHeight(row);
    this.index.set(rowIndex, row, after);
    return Math.max(after, this.baseHeight) - Math.max(before, this.baseHeight);
  }

  /** Высота строки; с `fresh` устаревшая пересчитывается из высот ячеек */
  private rowHeight(row: R, fresh: boolean): number {
    const known = this.rows.get(row);
    if (!known) return 0;
    if (!fresh || known.generation === this.generation) return known.height;
    return this.computeRowHeight(row);
  }

  private computeRowHeight(row: R): number {
    const height = Math.ceil(
      Math.min(this.cells.maxHeight(row, this.columnIds), MAX_AUTO_ROW_HEIGHT),
    );
    this.rows.set(row, { height, generation: this.generation });
    return height;
  }
}
