import type { GridCell } from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import type { MutableRefObject } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { createCanvasCell } from '../../lib/canvas/cells';
import type { GlideThemeForRender } from '../../theming/types';
import {
  type AutoRowHeightSource,
  MAX_AUTO_ROW_HEIGHT,
  useAutoRowHeight,
} from '../useAutoRowHeight';

let resolveFonts: () => void = () => {};
vi.mock('../../lib/canvas/hooks/fontUtils', () => ({
  subscribeFontsLoaded: (onLoaded: () => void) => {
    resolveFonts = onLoaded;
    return () => {};
  },
}));

type Row = { id: number; content: number };

const BASE = 20;
const PADDING = 4;
const THEME = {
  baseFontStyle: '12px',
  cellVerticalPadding: PADDING,
} as unknown as GlideThemeForRender;

const rowsOf = (contents: number[]): Row[] =>
  contents.map((content, id) => ({ id, content }));

/** Источник измерения: высота содержимого ячейки равна row.content */
const sourceOf = (
  rows: () => readonly Row[],
  widths: number[] = [100],
  measured = vi.fn(),
): MutableRefObject<AutoRowHeightSource | null> => ({
  current: {
    columns: widths.map((width, index) => ({ id: `c${index}`, width })),
    getCell: ([, rowIndex]) =>
      createCanvasCell(
        () => ({}),
        undefined,
        undefined,
        undefined,
        () => {
          const row = rows()[rowIndex]!;
          measured(row.id);
          return row.content;
        },
      ) as GridCell,
    theme: THEME,
  },
});

const setup = (rows: Row[], sourceRef = sourceOf(() => rows)) =>
  renderHook(
    (props: { rows: readonly Row[]; enabled: boolean }) =>
      useAutoRowHeight({ ...props, sourceRef }),
    { initialProps: { rows, enabled: true } },
  );

beforeAll(() => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
    {} as CanvasRenderingContext2D,
  );
});

describe('useAutoRowHeight', () => {
  it('выключен — базовая высота без измерения', () => {
    const measured = vi.fn();
    const rows = rowsOf([100]);
    const { result } = renderHook(() =>
      useAutoRowHeight({
        enabled: false,
        rows,
        sourceRef: sourceOf(() => rows, [100], measured),
      }),
    );

    expect(result.current.heightOf(0, BASE)).toBe(BASE);
    expect(measured).not.toHaveBeenCalled();
  });

  it('высота по содержимому с вертикальными отступами, не ниже базовой', () => {
    const { result } = setup(rowsOf([50, 5]));

    expect(result.current.heightOf(0, BASE)).toBe(50 + PADDING * 2);
    expect(result.current.heightOf(1, BASE)).toBe(BASE);
  });

  it('высота — максимум по колонкам', () => {
    const rows = rowsOf([30]);
    const { result } = setup(
      rows,
      sourceOf(() => rows, [100, 200]),
    );

    expect(result.current.heightOf(0, BASE)).toBe(30 + PADDING * 2);
  });

  it('высота не выше потолка', () => {
    const { result } = setup(rowsOf([10_000]));

    expect(result.current.heightOf(0, BASE)).toBe(MAX_AUTO_ROW_HEIGHT);
  });

  it('строки вне видимой области получают базовую высоту и измеряются при прокрутке', () => {
    const rows = rowsOf(Array.from({ length: 200 }, () => 40));
    const { result } = setup(rows);

    expect(result.current.heightOf(150, BASE)).toBe(BASE);

    const versionBefore = result.current.version;
    act(() => {
      result.current.trackVisibleRegion({ x: 0, y: 140, width: 1, height: 20 });
    });

    expect(result.current.version).toBe(versionBefore + 1);
    expect(result.current.heightOf(150, BASE)).toBe(40 + PADDING * 2);
  });

  it('строка измеряется один раз, в том числе после смены массива строк', () => {
    const measured = vi.fn();
    let rows = rowsOf([30, 60]);
    const sourceRef = sourceOf(() => rows, [100], measured);
    const { result, rerender } = setup(rows, sourceRef);

    expect(result.current.heightOf(0, BASE)).toBe(30 + PADDING * 2);
    expect(result.current.heightOf(1, BASE)).toBe(60 + PADDING * 2);
    expect(measured).toHaveBeenCalledTimes(2);

    // Подгрузили строку сверху: те же объекты сдвинулись на индекс
    rows = [{ id: 2, content: 10 }, ...rows];
    rerender({ rows, enabled: true });

    expect(result.current.heightOf(1, BASE)).toBe(30 + PADDING * 2);
    expect(result.current.heightOf(2, BASE)).toBe(60 + PADDING * 2);
    expect(measured).toHaveBeenCalledTimes(2);
  });

  describe('объединённые ячейки', () => {
    /** Две колонки; первая — блок с заданным span/spanRows, высота по ширине замера */
    const mergedSourceOf = (
      options: { span?: [number, number]; spanRows?: [number, number] },
      measuredWidths: number[] = [],
    ): MutableRefObject<AutoRowHeightSource | null> => ({
      current: {
        columns: [
          { id: 'c0', width: 100 },
          { id: 'c1', width: 50 },
        ],
        getCell: () =>
          createCanvasCell(
            () => ({}),
            undefined,
            undefined,
            options,
            (_ctx, width) => {
              measuredWidths.push(width);
              return 60;
            },
          ) as GridCell,
        theme: THEME,
      },
    });

    it('ячейка на несколько строк не растит строку', () => {
      const rows = rowsOf([0, 0]);
      const { result } = setup(rows, mergedSourceOf({ spanRows: [0, 1] }));

      expect(result.current.heightOf(0, BASE)).toBe(BASE);
    });

    it('ячейка на несколько колонок меряется один раз по ширине блока', () => {
      const widths: number[] = [];
      const rows = rowsOf([0]);
      const { result } = setup(rows, mergedSourceOf({ span: [0, 1] }, widths));

      expect(result.current.heightOf(0, BASE)).toBe(60 + PADDING * 2);
      expect(widths).toEqual([150]);
    });
  });

  it('после загрузки шрифтов строки перемеряются', async () => {
    const measured = vi.fn();
    const rows = rowsOf([30]);
    const { result } = setup(
      rows,
      sourceOf(() => rows, [100], measured),
    );

    result.current.heightOf(0, BASE);
    expect(measured).toHaveBeenCalledTimes(1);

    const versionBefore = result.current.version;
    await act(async () => {
      resolveFonts();
    });

    expect(result.current.version).toBe(versionBefore + 1);
    result.current.heightOf(0, BASE);
    expect(measured).toHaveBeenCalledTimes(2);
  });

  it('смена ширины колонок сбрасывает измерения', () => {
    const measured = vi.fn();
    const rows = rowsOf([30]);
    const sourceRef = sourceOf(() => rows, [100], measured);
    const { result } = setup(rows, sourceRef);

    result.current.heightOf(0, BASE);
    expect(measured).toHaveBeenCalledTimes(1);

    sourceRef.current = {
      ...sourceRef.current!,
      columns: [{ id: 'c0', width: 50 }],
    };
    result.current.heightOf(0, BASE);

    expect(measured).toHaveBeenCalledTimes(2);
  });

  it('отступы ячейки из themeOverride учитываются в высоте строки', () => {
    const OWN_PADDING = 24;
    const rows = rowsOf([50]);
    const sourceRef: MutableRefObject<AutoRowHeightSource | null> = {
      current: {
        columns: [
          { id: 'c0', width: 100 },
          { id: 'c1', width: 100 },
        ],
        getCell: ([colIndex]) =>
          createCanvasCell(
            () => ({}),
            undefined,
            undefined,
            colIndex === 1
              ? { themeOverride: { cellVerticalPadding: OWN_PADDING } }
              : undefined,
            () => 50,
          ) as GridCell,
        theme: THEME,
      },
    };
    const { result } = setup(rows, sourceRef);

    expect(result.current.heightOf(0, BASE)).toBe(50 + OWN_PADDING * 2);
  });
});
