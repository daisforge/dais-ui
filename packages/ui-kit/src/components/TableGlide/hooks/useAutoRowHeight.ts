import type { Rectangle } from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import type { CellHeightReporter } from '../cellRenderer';
import { subscribeFontsLoaded } from '../lib/canvas/hooks/fontsLoaded';
import { anchorShiftOf } from './autoRowHeight/anchorShift';
import {
  AutoRowHeightStore,
  MAX_AUTO_ROW_HEIGHT,
} from './autoRowHeight/AutoRowHeightStore';

export { MAX_AUTO_ROW_HEIGHT };

/** Строк в окне до первого сообщения glide о видимой области */
const INITIAL_VISIBLE_ROWS = 50;

interface Params<R extends object> {
  enabled: boolean;
  rows: readonly R[];
  columns: readonly { id: string; renderCell?: unknown }[];
  /** Тема таблицы (шрифты, отступы; меняется вместе с `rowSize`) */
  theme?: object;
  /** Потолок высоты строки, по умолчанию `MAX_AUTO_ROW_HEIGHT` */
  maxHeight?: number;
}

/**
 * Высота строк по содержимому ячеек (`rowHeight: 'auto'`).
 *
 * Отдельного замера нет: ячейка сообщает высоту содержимого, когда glide её рисует
 * (`reporterFor`), а glide рисует только видимые ячейки. Строку, которую ещё не
 * рисовали, glide сначала рисует с базовой высотой; коммит замеров рендерится синхронно
 * (`flushSync`), и таблица перерисовывается до показа кадра — базовая высота не мелькает.
 * Смена темы или рендера колонки и загрузка любого шрифта помечают замеры устаревшими:
 * ячейки перемеряются при следующей отрисовке, до этого строки держат прежнюю высоту.
 */
export function useAutoRowHeight<R extends object>({
  enabled,
  rows,
  columns,
  theme,
  maxHeight = MAX_AUTO_ROW_HEIGHT,
}: Params<R>) {
  const [version, setVersion] = useState(0);
  const visibleRowsRef = useRef({ from: 0, to: INITIAL_VISIBLE_ROWS });
  const anchorShiftRef = useRef(0);
  const [store] = useState(
    () =>
      new AutoRowHeightStore<R>((changes) => {
        anchorShiftRef.current += anchorShiftOf(
          changes,
          visibleRowsRef.current,
        );
        flushSync(() => setVersion((value) => value + 1));
      }),
  );

  // Шрифт у Canvas.Text может быть свой, не из темы: ждём загрузки любого семейства
  useEffect(() => {
    if (!enabled) return undefined;
    return subscribeFontsLoaded(() => {
      store.invalidate();
      setVersion((value) => value + 1);
    });
  }, [enabled, store]);

  // Сверяем во время рендера: glide рисует ячейки раньше эффектов TableGlide
  const prevRef = useRef({ theme, columns });
  const prev = prevRef.current;
  if (prev.theme !== theme) {
    store.invalidate();
  } else if (prev.columns !== columns) {
    const renderCellOf = new Map(prev.columns.map((c) => [c.id, c.renderCell]));
    store.invalidate(
      columns
        .filter(
          (c) =>
            renderCellOf.has(c.id) && renderCellOf.get(c.id) !== c.renderCell,
        )
        .map((c) => c.id),
    );
  }
  prevRef.current = { theme, columns };

  const columnIds = useMemo(
    () => columns.map((column) => column.id),
    [columns],
  );

  const heightOf = useCallback(
    (rowIndex: number, baseHeight: number): number => {
      store.setBaseHeight(baseHeight);
      store.setMaxHeight(maxHeight);
      store.setColumns(columnIds);
      const { from, to } = visibleRowsRef.current;
      const height = store.heightAt(
        rows,
        rowIndex,
        rowIndex >= from && rowIndex <= to,
      );
      return Math.max(baseHeight, height ?? 0);
    },
    [store, rows, columnIds, maxHeight],
  );

  const trackVisibleRegion = useCallback((range: Rectangle) => {
    visibleRowsRef.current = {
      from: range.y,
      to: range.y + range.height,
    };
  }, []);

  const reporterFor = useCallback(
    (
      row: R,
      rowIndex: number,
      columnId: string,
      isSpan: boolean,
    ): CellHeightReporter => {
      store.setColumns(columnIds);
      return store.reporter(row, rowIndex, columnId, isSpan);
    },
    [store, columnIds],
  );

  /** Накопленный с прошлого вызова сдвиг прокрутки, который держит видимое содержимое на месте */
  const takeAnchorShift = useCallback(() => {
    const shift = anchorShiftRef.current;
    anchorShiftRef.current = 0;
    return shift;
  }, []);

  return useMemo(
    () => ({
      heightOf,
      trackVisibleRegion,
      reporterFor,
      takeAnchorShift,
      version,
    }),
    [heightOf, trackVisibleRegion, reporterFor, takeAnchorShift, version],
  );
}
