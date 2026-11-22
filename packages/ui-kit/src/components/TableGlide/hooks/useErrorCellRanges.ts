import type { Rectangle } from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type {
  ColumnGlideLast,
  ObjectForExtending,
  RowErrorsSummary,
} from '../types';

interface UseErrorCellRangesParams<R extends ObjectForExtending, SR> {
  columns: readonly ColumnGlideLast<R, SR>[];
  rows: readonly R[];
  /** Число закреплённых колонок: они видимы всегда и входят в окно пересчёта. */
  freezeColumns?: number;
  /** Ошибка всей строки: рамка на всю строку вместо поячеечных. */
  isErrorRow?: (row: R) => boolean;
  /** Собирать сводку ошибок по строкам окна (обход всех колонок строки). */
  collectRowErrors?: boolean;
}

export interface ErrorRangesResult {
  /** Поячеечные регионы ошибок. Ячейки строк с ошибкой всей строки не входят. */
  errorCellRanges: readonly Rectangle[];
  /** Индексы строк с ошибкой всей строки. */
  errorRowIndexes: readonly number[];
  /** Сводка ошибок по индексу строки. Пустая, если сводка не собирается. */
  rowErrorsByIndex: ReadonlyMap<number, RowErrorsSummary>;
}

const EMPTY_RESULT: ErrorRangesResult = {
  errorCellRanges: [],
  errorRowIndexes: [],
  rowErrorsByIndex: new Map(),
};

/**
 * Регионы ошибок (красные рамки невалидных значений) для highlightRegions.
 *
 * Полный обход таблицы (колонки x строки) на больших данных стоит секунды,
 * поэтому проверка isErrorCell гоняется только по окну: видимая область плюс
 * запас в размер вьюпорта с каждой стороны. Окно сдвигается, только когда
 * видимая область подошла к его краю ближе чем на пол-запаса (гистерезис),
 * события скролла схлопываются в один пересчёт за кадр (rAF). Рамка рисуется
 * и у ячеек внутри выделения — поверх него (регион с drawAboveSelection).
 *
 * Два дополнения к поячеечным рамкам:
 * - `isErrorRow` помечает строку целиком: у такой строки поячеечные регионы не
 *   строятся, вместо них наружу отдаётся индекс строки (одна рамка на строку);
 * - `collectRowErrors` собирает сводку по строкам окна: число ячеек с ошибкой
 *   и ключи их колонок. Для точного числа обходятся ВСЕ колонки строки, а не
 *   только попавшие в окно по горизонтали, поэтому включается только когда
 *   сводка нужна (столбец-индикатор). Стоимость: строки окна x колонки с
 *   isErrorCell, пересчёт только при сдвиге окна или смене данных.
 *
 * Возвращает:
 * - `errorCellRanges`, `errorRowIndexes`, `rowErrorsByIndex`, см.
 *   {@link ErrorRangesResult};
 * - `trackVisibleRegion` — вызывать из onVisibleRegionChanged таблицы.
 */
export function useErrorCellRanges<R extends ObjectForExtending, SR>({
  columns,
  rows,
  freezeColumns,
  isErrorRow,
  collectRowErrors = false,
}: UseErrorCellRangesParams<R, SR>) {
  const [scanWindow, setScanWindow] = useState<Rectangle | null>(null);
  const scanWindowRef = useRef(scanWindow);
  scanWindowRef.current = scanWindow;
  const lastVisibleRegionRef = useRef<Rectangle | null>(null);
  const rafRef = useRef(0);

  const hasErrorColumns = useMemo(
    () => columns.some((c) => !c.isServiceColumn && c.isErrorCell),
    [columns]
  );
  const scanEnabled = hasErrorColumns || isErrorRow !== undefined;
  const totalsRef = useRef({ cols: 0, rows: 0, freeze: 0 });
  totalsRef.current = {
    cols: columns.length,
    rows: rows.length,
    freeze: freezeColumns ?? 0,
  };

  const scheduleWindowUpdate = useCallback(() => {
    if (rafRef.current) {
      return;
    }
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const visible = lastVisibleRegionRef.current;
      if (!visible) {
        return;
      }
      const { cols: totalCols, rows: totalRows, freeze } = totalsRef.current;
      const gapX = Math.max(visible.width, 1);
      const gapY = Math.max(visible.height, 1);
      const current = scanWindowRef.current;
      if (current) {
        const currentRight = current.x + current.width;
        const currentBottom = current.y + current.height;
        // Края у границ таблицы считаем безопасными: окно туда уже упёрлось.
        const nearLeft = current.x > 0 && visible.x - current.x < gapX / 2;
        const nearTop = current.y > 0 && visible.y - current.y < gapY / 2;
        const nearRight =
          currentRight < totalCols &&
          currentRight - (visible.x + visible.width) < gapX / 2;
        const nearBottom =
          currentBottom < totalRows &&
          currentBottom - (visible.y + visible.height) < gapY / 2;
        if (!nearLeft && !nearTop && !nearRight && !nearBottom) {
          return;
        }
      }
      // Закреплённые колонки видимы всегда: окно тянем от нулевой колонки,
      // иначе их error-рамки пропадали бы при скролле вправо.
      const x = freeze > 0 ? 0 : Math.max(0, visible.x - gapX);
      const y = Math.max(0, visible.y - gapY);
      const right = Math.min(totalCols, visible.x + visible.width + gapX);
      const bottom = Math.min(totalRows, visible.y + visible.height + gapY);
      setScanWindow({ x, y, width: right - x, height: bottom - y });
    });
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    },
    []
  );

  // Включение режима редактирования (появились error-колонки): строим окно
  // сразу, не дожидаясь скролла.
  useEffect(() => {
    if (scanEnabled) {
      scheduleWindowUpdate();
    }
  }, [scanEnabled, scheduleWindowUpdate]);

  const trackVisibleRegion = useCallback(
    (visible: Rectangle) => {
      lastVisibleRegionRef.current = visible;
      scheduleWindowUpdate();
    },
    [scheduleWindowUpdate]
  );

  // Тяжёлый проход по ячейкам окна.
  const result = useMemo((): ErrorRangesResult => {
    if (!scanEnabled) {
      return EMPTY_RESULT;
    }

    // Пока таблица не сообщила видимую область (первый рендер) — первый экран
    // с запасом, чтобы рамки не мигали до прихода окна.
    const win = scanWindow ?? {
      x: 0,
      y: 0,
      width: Math.min(columns.length, 60),
      height: Math.min(rows.length, 300),
    };
    const colStart = Math.max(0, win.x);
    const colEnd = Math.min(columns.length, win.x + win.width);
    const rowStart = Math.max(0, win.y);
    const rowEnd = Math.min(rows.length, win.y + win.height);

    // Колонки с проверкой ошибки: для сводки все, иначе только попавшие в окно.
    const errorColumns: {
      colInd: number;
      id: string;
      isErrorCell: (row: R) => boolean;
    }[] = [];
    const scanColStart = collectRowErrors ? 0 : colStart;
    const scanColEnd = collectRowErrors ? columns.length : colEnd;
    for (let colInd = scanColStart; colInd < scanColEnd; colInd += 1) {
      const column = columns[colInd];
      if (column && !column.isServiceColumn && column.isErrorCell) {
        errorColumns.push({
          colInd,
          id: column.id,
          isErrorCell: column.isErrorCell,
        });
      }
    }

    const errorCellRanges: Rectangle[] = [];
    const errorRowIndexes: number[] = [];
    const rowErrorsByIndex = new Map<number, RowErrorsSummary>();

    for (let rowInd = rowStart; rowInd < rowEnd; rowInd += 1) {
      const row = rows[rowInd];
      if (row === undefined) {
        continue;
      }
      const rowIsError = isErrorRow?.(row) ?? false;
      if (rowIsError) {
        errorRowIndexes.push(rowInd);
      }
      // Без сводки у строки с ошибкой всей строки ячейки не проверяем: рамка
      // одна на строку, поячеечные не рисуются.
      if (rowIsError && !collectRowErrors) {
        continue;
      }

      let errorCellsCount = 0;
      const errorColumnKeys: string[] = [];
      for (const { colInd, id, isErrorCell } of errorColumns) {
        if (!isErrorCell(row)) {
          continue;
        }
        errorCellsCount += 1;
        if (collectRowErrors) {
          errorColumnKeys.push(id);
        }
        if (!rowIsError && colInd >= colStart && colInd < colEnd) {
          errorCellRanges.push({ x: colInd, y: rowInd, width: 1, height: 1 });
        }
      }

      if (collectRowErrors && (rowIsError || errorCellsCount > 0)) {
        rowErrorsByIndex.set(rowInd, {
          errorCellsCount,
          errorColumnKeys,
          isErrorRow: rowIsError,
        });
      }
    }

    return { errorCellRanges, errorRowIndexes, rowErrorsByIndex };
  }, [columns, rows, scanWindow, scanEnabled, isErrorRow, collectRowErrors]);

  return { ...result, trackVisibleRegion };
}
