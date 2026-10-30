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
  /** Высота строки по размеру строк: ниже строка не бывает */
  baseHeight: number;
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
  baseHeight,
}: Params<R>) {
  const [version, setVersion] = useState(0);
  const anchorShiftRef = useRef(0);
  const [store] = useState(() => {
    const created = new AutoRowHeightStore<R>((changes) => {
      anchorShiftRef.current += anchorShiftOf(changes, created.visibleRows);
      flushSync(() => setVersion((value) => value + 1));
    });
    created.setVisibleRows(0, INITIAL_VISIBLE_ROWS);
    return created;
  });

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

  store.setMaxHeight(maxHeight);
  store.setBaseHeight(baseHeight);
  store.setColumns(columnIds);

  // Glide зовёт для всех строк при каждой смене высот: найденная высота читается из индекса store
  const heightOf = useCallback(
    (rowIndex: number): number => store.heightAt(rows, rowIndex) ?? baseHeight,
    // maxHeight, columnIds, version: высоты в store изменились, glide должен спросить их заново
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, rows, baseHeight, columnIds, maxHeight, version]
  );

  const trackVisibleRegion = useCallback(
    (range: Rectangle) => store.setVisibleRows(range.y, range.y + range.height),
    [store]
  );

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
