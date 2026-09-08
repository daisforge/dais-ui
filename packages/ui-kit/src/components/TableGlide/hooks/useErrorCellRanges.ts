import type { Rectangle } from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { ColumnGlideLast, ObjectForExtending } from '../types';
import { rectContainsCell } from './selection';

interface UseErrorCellRangesParams<R extends ObjectForExtending, SR> {
  columns: readonly ColumnGlideLast<R, SR>[];
  rows: readonly R[];
  /** Число закреплённых колонок: они видимы всегда и входят в окно пересчёта. */
  freezeColumns?: number;
  /** Активный диапазон выделения: у выбранной ячейки error-рамка не рисуется. */
  selectedRange?: Rectangle;
}

/**
 * Регионы error-ячеек (красные рамки невалидных значений) для highlightRegions.
 *
 * Полный обход таблицы (колонки x строки) на больших данных стоит секунды,
 * поэтому проверка isErrorCell гоняется только по окну: видимая область плюс
 * запас в размер вьюпорта с каждой стороны. Окно сдвигается, только когда
 * видимая область подошла к его краю ближе чем на пол-запаса (гистерезис),
 * события скролла схлопываются в один пересчёт за кадр (rAF). Выделение на
 * тяжёлый проход не влияет: вырез выбранной ячейки — дешёвый фильтр готового
 * списка.
 *
 * Возвращает:
 * - `errorCellRanges` — регионы для отрисовки;
 * - `trackVisibleRegion` — вызывать из onVisibleRegionChanged таблицы.
 */
export function useErrorCellRanges<R extends ObjectForExtending, SR>({
  columns,
  rows,
  freezeColumns,
  selectedRange,
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
    if (hasErrorColumns) {
      scheduleWindowUpdate();
    }
  }, [hasErrorColumns, scheduleWindowUpdate]);

  const trackVisibleRegion = useCallback(
    (visible: Rectangle) => {
      lastVisibleRegionRef.current = visible;
      scheduleWindowUpdate();
    },
    [scheduleWindowUpdate]
  );

  // Тяжёлый проход по ячейкам окна. Выделение в зависимостях отсутствует
  // намеренно: иначе обход повторялся бы на каждый сдвиг рамки при драге.
  const allRanges = useMemo(() => {
    const regions: Rectangle[] = [];

    if (!hasErrorColumns) {
      return regions;
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

    for (let colInd = colStart; colInd < colEnd; colInd += 1) {
      const column = columns[colInd];
      const { isErrorCell } = column ?? {};
      if (!column || column.isServiceColumn || !isErrorCell) {
        continue;
      }
      for (let rowInd = rowStart; rowInd < rowEnd; rowInd += 1) {
        const row = rows[rowInd];
        if (row !== undefined && isErrorCell(row)) {
          regions.push({ x: colInd, y: rowInd, width: 1, height: 1 });
        }
      }
    }

    return regions;
  }, [columns, rows, scanWindow, hasErrorColumns]);

  // у выбранной ячейки error-outline не рисуем: дешёвый фильтр готового списка.
  const errorCellRanges = useMemo(() => {
    if (!selectedRange || allRanges.length === 0) {
      return allRanges;
    }
    return allRanges.filter(
      (region) => !rectContainsCell(selectedRange, region.x, region.y)
    );
  }, [allRanges, selectedRange]);

  return { errorCellRanges, trackVisibleRegion };
}
