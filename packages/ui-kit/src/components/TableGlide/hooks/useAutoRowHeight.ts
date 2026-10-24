import type { Rectangle } from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { CellHeightReporter } from '../cellRenderer';
import { subscribeFontsLoaded } from '../lib/canvas/hooks/fontsLoaded';
import { anchorShiftOf } from './autoRowHeight/anchorShift';
import { AutoRowHeightStore } from './autoRowHeight/AutoRowHeightStore';

export { MAX_AUTO_ROW_HEIGHT } from './autoRowHeight/AutoRowHeightStore';

/** Строк в окне до первого сообщения glide о видимой области */
const INITIAL_VISIBLE_ROWS = 50;

interface Params<R extends object> {
  enabled: boolean;
  rows: readonly R[];
  columns: readonly { id: string }[];
  fontFamily?: string;
}

/**
 * Высота строк по содержимому ячеек (`rowHeight: 'auto'`).
 *
 * Отдельного замера нет: ячейка сообщает высоту содержимого, когда glide её рисует
 * (`reporterFor`), а glide рисует только видимые ячейки. Строка, которую ещё не
 * рисовали, первый кадр показывается с базовой высотой и дорастает на следующем.
 * После загрузки шрифта таблицы высоты сбрасываются — до неё ячейки измерены
 * запасным шрифтом.
 */
export function useAutoRowHeight<R extends object>({
  enabled,
  rows,
  columns,
  fontFamily,
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
        setVersion((value) => value + 1);
      }),
  );
  const fontFamilyRef = useRef(fontFamily);
  fontFamilyRef.current = fontFamily;

  useEffect(() => {
    if (!enabled) return undefined;
    return subscribeFontsLoaded(() => store.clear(), {
      fontFamily: () => fontFamilyRef.current,
    });
  }, [enabled, store]);

  const columnIds = useMemo(
    () => columns.map((column) => column.id),
    [columns],
  );

  const heightOf = useCallback(
    (rowIndex: number, baseHeight: number): number => {
      store.setBaseHeight(baseHeight);
      store.setColumns(columnIds);
      const { from, to } = visibleRowsRef.current;
      const height = store.heightAt(
        rows,
        rowIndex,
        rowIndex >= from && rowIndex <= to,
      );
      return Math.max(baseHeight, height ?? 0);
    },
    [store, rows, columnIds],
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
