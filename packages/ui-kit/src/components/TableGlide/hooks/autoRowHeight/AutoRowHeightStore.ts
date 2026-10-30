import type { CellHeightReporter } from '../../cellRenderer';
import type { VisibleRows } from './anchorShift';
import { ColumnHeights } from './ColumnHeights';
import { RowHeightIndex } from './RowHeightIndex';

/** Потолок высоты строки по умолчанию: текст длиннее обрезается */
export const MAX_AUTO_ROW_HEIGHT = 480;

/** Выше не хранит `RowHeightIndex`: `0xFFFF` там — «строку ещё не искали» */
const MAX_STORED_ROW_HEIGHT = 0xfffe;

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

  private maxHeight = MAX_AUTO_ROW_HEIGHT;

  /** Строки на экране: их устаревшая высота пересчитывается из ячеек */
  private visible: VisibleRows = { from: 0, to: 0 };

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

  /** Индекс хранит высоты не ниже базовой: с новой базовой их придётся искать заново */
  setBaseHeight(height: number): void {
    if (height === this.baseHeight) return;
    this.baseHeight = height;
    this.index.reset();
  }

  /**
   * Строки `from..to` на экране. Их устаревшие высоты пересчитываются коммитом, а не при запросе:
   * glide кеширует позиции строк по `rowHeight` и узнает о новых высотах только через `onChange`.
   */
  setVisibleRows(from: number, to: number): void {
    if (from === this.visible.from && to === this.visible.to) return;
    this.visible = { from, to };
    this.refreshStaleVisible();
  }

  get visibleRows(): VisibleRows {
    return this.visible;
  }

  /**
   * Потолок применяется к уже известным высотам всех строк, и видимых, и за экраном:
   * ячейки не перемеряются. Не выше `MAX_STORED_ROW_HEIGHT`; NaN — `MAX_AUTO_ROW_HEIGHT`.
   */
  setMaxHeight(height: number): void {
    const max = Number.isNaN(height)
      ? MAX_AUTO_ROW_HEIGHT
      : Math.ceil(Math.min(Math.max(height, 0), MAX_STORED_ROW_HEIGHT));
    if (max === this.maxHeight) return;
    this.maxHeight = max;
    this.index.reset();
  }

  /** Вызывается на каждый рендер и замер ячейки: тот же массив отсекается по ссылке */
  setColumns(ids: readonly string[]): void {
    if (ids === this.columnIds) return;
    const changed = !sameIds(ids, this.columnIds);
    this.columnIds = ids;
    if (!changed) return;

    this.cells.retain(ids);
    this.generation += 1;
    this.forgetStaleVisible();
  }

  /**
   * Замеры колонок `columnIds` (по умолчанию всех) устарели — сменились тема, шрифт или
   * рендер колонки: ячейки перемеряются при следующей отрисовке, до этого высоты строк прежние.
   */
  invalidate(columnIds?: readonly string[]): void {
    this.cells.invalidate(columnIds);
  }

  /** Высота строки по индексу, не ниже базовой; undefined — индекса нет */
  heightAt(rows: readonly R[], rowIndex: number): number | undefined {
    const cached = this.index.get(rows, rowIndex);
    if (cached !== null) return cached;

    const row = rows[rowIndex]!;
    const visible =
      rowIndex >= this.visible.from && rowIndex <= this.visible.to;
    const height = Math.max(this.rowHeight(row, visible), this.baseHeight);
    this.index.set(rowIndex, row, height);
    return height;
  }

  /**
   * Устаревшие высоты видимых строк убираются из индекса: следующий запрос пересчитает их из ячеек.
   * Только когда glide и так переспросит все высоты — при смене колонок.
   */
  private forgetStaleVisible(): void {
    this.index.forget(this.visible.from, this.visible.to, (row) =>
      this.isStale(row),
    );
  }

  /** Устаревшие высоты видимых строк ждут коммита: изменившиеся уйдут в `onChange` */
  private refreshStaleVisible(): void {
    this.index.each(this.visible.from, this.visible.to, (row, rowIndex) => {
      if (this.isStale(row)) this.markPending(row, rowIndex);
    });
  }

  private isStale(row: R): boolean {
    const known = this.rows.get(row);
    return known !== undefined && known.generation !== this.generation;
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
      this.refreshStaleVisible();
    }
    const changes = [...this.pending].map(([row, rowIndex]) => ({
      rowIndex,
      delta: this.commitRow(row, rowIndex),
    }));
    this.pending.clear();

    if (changes.some(({ delta }) => delta !== 0)) this.onChange(changes);
  }

  /** @returns на сколько изменилась высота строки для glide */
  private commitRow(row: R, rowIndex: number): number {
    const before = Math.min(this.rows.get(row)?.height ?? 0, this.maxHeight);
    const after = this.computeRowHeight(row);
    this.index.set(rowIndex, row, Math.max(after, this.baseHeight));
    return Math.max(after, this.baseHeight) - Math.max(before, this.baseHeight);
  }

  /** Высота строки под потолком; с `fresh` устаревшая пересчитывается из высот ячеек */
  private rowHeight(row: R, fresh: boolean): number {
    const known = this.rows.get(row);
    if (!known) return 0;
    if (!fresh || known.generation === this.generation) {
      return Math.min(known.height, this.maxHeight);
    }
    return this.computeRowHeight(row);
  }

  /** Хранит высоту по содержимому без потолка, чтобы смена потолка обходилась без перемера */
  private computeRowHeight(row: R): number {
    const height = Math.ceil(this.cells.maxHeight(row, this.columnIds));
    this.rows.set(row, { height, generation: this.generation });
    return Math.min(height, this.maxHeight);
  }
}
