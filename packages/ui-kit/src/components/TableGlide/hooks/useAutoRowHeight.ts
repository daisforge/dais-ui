import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { GridCell, Rectangle } from '@glideappsfinal/glide-data-grid';

import { isCanvasCell } from '../lib/canvas/cells';
import type { CanvasCellData } from '../lib/canvas/cells/types';
import { subscribeFontsLoaded } from '../lib/canvas/hooks/fontsLoaded';
import type { GlideThemeForRender } from '../theming/types';

/** Строк сверх видимых, которые измеряются заранее */
const MEASURE_OVERSCAN_ROWS = 6;
/** Строк, измеряемых до первого сообщения о видимой области */
const INITIAL_MEASURE_ROWS = 50;
/** Потолок высоты строки: текст длиннее обрезается, строка не растёт бесконечно */
export const MAX_AUTO_ROW_HEIGHT = 480;

/** Значение в массиве высот для строки, которую ещё не измеряли */
const UNMEASURED = -1;
/** Значение в массиве высот для строки, которую ещё не искали в кеше */
const UNRESOLVED = -2;

interface HeightsStore<R> {
  rows: readonly R[];
  heights: Float64Array;
}

const emptyStore = <R>(): HeightsStore<R> => ({
  rows: [],
  heights: new Float64Array(0),
});

export interface AutoRowHeightSource {
  columns: readonly { id: string; width?: number }[];
  getCell: (
    cell: [number, number],
    options?: { applyCanvasEditorActivation?: boolean },
  ) => GridCell;
  theme: GlideThemeForRender;
}

interface Params<R extends object> {
  enabled: boolean;
  rows: readonly R[];
  sourceRef: MutableRefObject<AutoRowHeightSource | null>;
}

const spanWidth = (
  columns: AutoRowHeightSource['columns'],
  [from, to]: readonly [number, number],
) => {
  let width = 0;
  for (let index = from; index <= to; index += 1) {
    width += columns[index]?.width ?? 0;
  }
  return width;
};

/** Ячейка — часть блока, объединённого на несколько строк */
export const spansSeveralRows = (
  spanRows: readonly [number, number] | null | undefined,
) => !!spanRows && spanRows[1] > spanRows[0];

/**
 * Высота ячейки с её вертикальными отступами (своими у колонки через themeOverride
 * или из темы). undefined — ячейка строку не растит: не canvas, блок на несколько
 * строк или не первая колонка блока на несколько колонок (он меряется по ширине блока).
 */
const measureCell = (
  source: AutoRowHeightSource,
  ctx: CanvasRenderingContext2D,
  colIndex: number,
  rowIndex: number,
): number | undefined => {
  const width = source.columns[colIndex]?.width;
  if (!width) return undefined;

  const cell = source.getCell([colIndex, rowIndex], {
    applyCanvasEditorActivation: false,
  });
  const { span, spanRows, themeOverride } = cell;
  if (!isCanvasCell(cell) || spansSeveralRows(spanRows)) return undefined;
  if (span && span[0] !== colIndex) return undefined;

  const content = (cell.data as CanvasCellData).measureHeight?.(
    ctx,
    span ? spanWidth(source.columns, span) : width,
    source.theme,
  );
  if (content === undefined) return undefined;

  const padding =
    themeOverride?.cellVerticalPadding ?? source.theme.cellVerticalPadding ?? 0;
  return content + padding * 2;
};

let measureCtx: CanvasRenderingContext2D | null = null;
const getMeasureCtx = () => {
  if (!measureCtx && typeof document !== 'undefined') {
    measureCtx = document.createElement('canvas').getContext('2d');
  }
  return measureCtx;
};

/**
 * Высота строк по содержимому ячеек (`rowHeight: 'auto'`).
 *
 * Glide запрашивает высоту по индексу для всех строк и до отрисовки, поэтому высота считается
 * измерением дерева ячейки при ширине колонки (`measureHeight`), к ней добавляются вертикальные
 * отступы темы. Точно измеряются строки видимой
 * области с запасом; остальные получают базовую высоту, их точная высота появится при прокрутке
 * (строки выше видимой области при этом могут сдвинуть контент). Высота не больше `MAX_AUTO_ROW_HEIGHT`.
 * Ячейка, объединённая на несколько строк, строку не растит; объединённая на несколько колонок
 * меряется по ширине блока.
 *
 * Кеш привязан к объекту строки и живёт, пока не меняются ширины колонок, шрифт и отступы темы:
 * содержимое, изменившееся без смены объекта строки, не перемеряется. После загрузки шрифтов кеш
 * сбрасывается — до неё строки измерены запасным шрифтом.
 *
 * Glide обходит все строки на каждом кадре прокрутки, поэтому высоты читаются из плоского массива
 * по индексу (`HeightsStore`). `WeakMap` по объекту строки хранит измерения между сменами массива строк:
 * массив при этом собирается заново, но строки не измеряются повторно.
 */
export function useAutoRowHeight<R extends object>({
  enabled,
  rows,
  sourceRef,
}: Params<R>) {
  const [version, setVersion] = useState(0);
  const windowRef = useRef({ from: 0, to: INITIAL_MEASURE_ROWS });
  const cacheKeyRef = useRef('');
  const keyInputsRef = useRef<{ columns: unknown; theme: unknown } | null>(
    null,
  );
  const cacheRef = useRef(new WeakMap<object, number>());
  const storeRef = useRef<HeightsStore<R>>(emptyStore());

  // Высота строки из массива; из кеша по объекту строки она подтягивается при первом обращении,
  // поэтому новый массив строк (подгрузка чанка) не обходит все строки.
  const cachedHeightAt = useCallback(
    (list: readonly R[], rowIndex: number): number | undefined => {
      let store = storeRef.current;
      if (store.rows !== list) {
        store = {
          rows: list,
          heights: new Float64Array(list.length).fill(UNRESOLVED),
        };
        storeRef.current = store;
      }
      const height = store.heights[rowIndex];
      if (height !== UNRESOLVED) return height;
      const resolved = cacheRef.current.get(list[rowIndex]!) ?? UNMEASURED;
      store.heights[rowIndex] = resolved;
      return resolved;
    },
    [],
  );

  const clearMeasurements = useCallback(() => {
    cacheRef.current = new WeakMap();
    storeRef.current = emptyStore();
  }, []);

  const resetIfStale = useCallback(() => {
    const source = sourceRef.current;
    if (!source) return;
    const inputs = keyInputsRef.current;
    if (
      inputs &&
      inputs.columns === source.columns &&
      inputs.theme === source.theme
    )
      return;
    keyInputsRef.current = { columns: source.columns, theme: source.theme };
    const { baseFontStyle, cellVerticalPadding } = source.theme;
    const key = `${baseFontStyle}|${cellVerticalPadding}|${source.columns
      .map((column) => column.width ?? '-')
      .join(',')}`;
    if (key !== cacheKeyRef.current) {
      cacheKeyRef.current = key;
      clearMeasurements();
    }
  }, [sourceRef, clearMeasurements]);

  // Строки, измеренные до загрузки шрифтов, измерены запасным шрифтом — перемеряем
  useEffect(() => {
    if (!enabled) return undefined;
    return subscribeFontsLoaded(() => {
      clearMeasurements();
      setVersion((value) => value + 1);
    });
  }, [enabled, clearMeasurements]);

  const measureRow = useCallback(
    (row: R, rowIndex: number): number | undefined => {
      const source = sourceRef.current;
      if (!source) return undefined;
      const ctx = getMeasureCtx();
      if (!ctx) return undefined;
      const cellHeights = source.columns.map(
        (_, colIndex) => measureCell(source, ctx, colIndex, rowIndex) ?? 0,
      );
      const total = Math.min(Math.max(0, ...cellHeights), MAX_AUTO_ROW_HEIGHT);
      cacheRef.current.set(row, total);
      const store = storeRef.current;
      if (store.rows[rowIndex] === row) store.heights[rowIndex] = total;

      return total;
    },
    [sourceRef],
  );

  const heightOf = useCallback(
    (rowIndex: number, baseHeight: number): number => {
      if (!enabled) return baseHeight;

      resetIfStale();

      const cached = cachedHeightAt(rows, rowIndex);
      if (cached === undefined) return baseHeight;
      if (cached !== UNMEASURED) return Math.max(baseHeight, cached);

      const row = rows[rowIndex]!;

      const { from, to } = windowRef.current;
      if (rowIndex < from || rowIndex > to) return baseHeight;

      const measured = measureRow(row, rowIndex);

      return measured === undefined
        ? baseHeight
        : Math.max(baseHeight, measured);
    },
    [enabled, rows, resetIfStale, measureRow, cachedHeightAt],
  );

  const trackVisibleRegion = useCallback(
    (range: Rectangle) => {
      if (!enabled) return;
      const from = Math.max(0, range.y - MEASURE_OVERSCAN_ROWS);
      const to = Math.min(
        range.y + range.height + MEASURE_OVERSCAN_ROWS,
        rows.length - 1,
      );

      windowRef.current = { from, to };

      resetIfStale();

      let measuredAny = false;
      for (let index = from; index <= to; index += 1) {
        const row = rows[index];
        if (row && cachedHeightAt(rows, index) === UNMEASURED) {
          measureRow(row, index);
          measuredAny = true;
        }
      }

      if (measuredAny) setVersion((value) => value + 1);
    },
    [enabled, rows, resetIfStale, measureRow, cachedHeightAt],
  );

  return useMemo(
    () => ({ heightOf, trackVisibleRegion, version }),
    [heightOf, trackVisibleRegion, version],
  );
}
