import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  headerCellsToRedraw,
  paintActiveHeaderBackground,
  useActiveHeadersRedraw,
} from '../useActiveHeadersRedraw';

const cols = (cells: Array<{ cell: [number, number] }>) => cells.map((c) => c.cell[0]);

describe('headerCellsToRedraw', () => {
  it('закреплённые колонки и видимые с запасом в колонку, все в строке шапки', () => {
    const cells = headerCellsToRedraw({ x: 10, y: 0, width: 5, height: 20 }, 1000, 2);
    expect(cols(cells)).toEqual([0, 1, 9, 10, 11, 12, 13, 14, 15, 16]);
    expect(cells.every((c) => c.cell[1] === -1)).toBe(true);
  });

  it('без известной области ограничивает число колонок, границы таблицы не превышает', () => {
    expect(headerCellsToRedraw(null, 1000, 0)).toHaveLength(200);
    expect(cols(headerCellsToRedraw({ x: 3, y: 0, width: 10, height: 1 }, 5, 0))).toEqual([2, 3, 4]);
  });
});

describe('paintActiveHeaderBackground', () => {
  it('заливает шапку активным цветом, оставляя пиксель на линию слева, под курсором темнит с прозрачностью', () => {
    const calls: string[] = [];
    const ctx = {
      globalAlpha: 1,
      fillStyle: '',
      fillRect: (...args: number[]) => calls.push(`${ctx.fillStyle}@${ctx.globalAlpha}:${args.join(',')}`),
    } as unknown as CanvasRenderingContext2D;
    const rect = { x: 100, y: 0, width: 50, height: 36 };
    paintActiveHeaderBackground(ctx, rect, 3, 0, { active: 'act', hovered: 'hov' });
    expect(calls).toEqual(['act@1:101,0,49,36']);
    calls.length = 0;
    paintActiveHeaderBackground(ctx, { ...rect, x: 0 }, 0, 0.5, { active: 'act', hovered: 'hov' });
    expect(calls).toEqual(['act@1:0,0,50,36', 'hov@0.5:0,0,50,36']);
    expect(ctx.globalAlpha).toBe(1);
  });
});

describe('useActiveHeadersRedraw', () => {
  it('первый рендер молчит, смена признака дорисовывает шапки видимых колонок', () => {
    const updateCells = vi.fn();
    const dataEditorRef = { current: { updateCells } as unknown as DataEditorRef };
    const visibleRegionRef = { current: { x: 4, y: 0, width: 3, height: 10 } };
    const none = new Set<number>();
    const five = new Set([5]);
    const hook = renderHook(
      ({ selectedColumns, hasSelectedRows }: { selectedColumns: Set<number>; hasSelectedRows: boolean }) =>
        useActiveHeadersRedraw({
          selectedColumns,
          hasSelectedRows,
          dataEditorRef,
          visibleRegionRef,
          columnsCount: 100,
          freezeColumns: 1,
        }),
      { initialProps: { selectedColumns: none, hasSelectedRows: false } },
    );
    expect(updateCells).not.toHaveBeenCalled();

    hook.rerender({ selectedColumns: five, hasSelectedRows: false });
    expect(updateCells).toHaveBeenCalledTimes(1);
    expect(cols(updateCells.mock.calls[0]![0])).toEqual([0, 3, 4, 5, 6, 7, 8]);

    hook.rerender({ selectedColumns: five, hasSelectedRows: false });
    expect(updateCells).toHaveBeenCalledTimes(1);

    hook.rerender({ selectedColumns: five, hasSelectedRows: true });
    expect(updateCells).toHaveBeenCalledTimes(2);
  });

  it('новый массив прилипших колонок с теми же колонками шапки не перерисовывает', () => {
    const updateCells = vi.fn();
    const dataEditorRef = { current: { updateCells } as unknown as DataEditorRef };
    const visibleRegionRef = { current: { x: 4, y: 0, width: 3, height: 10 } };
    const five = new Set([5]);
    const hook = renderHook(
      ({ stickyColumns }: { stickyColumns: number[] }) =>
        useActiveHeadersRedraw({
          selectedColumns: five,
          hasSelectedRows: false,
          dataEditorRef,
          visibleRegionRef,
          columnsCount: 100,
          freezeColumns: 1,
          stickyColumns,
        }),
      { initialProps: { stickyColumns: [20] } },
    );
    hook.rerender({ stickyColumns: [20] });
    hook.rerender({ stickyColumns: [20] });
    expect(updateCells).not.toHaveBeenCalled();
  });
});

describe('headerCellsToRedraw: прилипшие колонки', () => {
  it('шапка прилипшей колонки вне области перерисовывается один раз', () => {
    const cells = headerCellsToRedraw({ x: 10, y: 0, width: 3, height: 5 }, 100, 1, [1, 7, 11]);
    const cols = cells.map(({ cell }) => cell[0]);
    expect(cols).toEqual([0, 1, 7, 11, 9, 10, 12, 13, 14]);
  });
});
