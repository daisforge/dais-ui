import { afterEach, describe, expect, it, vi } from 'vitest';

import { glideCellRenderer } from '../cellRenderer';
import { Canvas, CellCanvasRoot } from '../lib/canvas';
import type { CanvasCell, CanvasCellData } from '../lib/canvas/cells/types';
import type { CellInfo, GlideThemeForRender, ObjectForExtending } from '../types';

afterEach(() => {
  vi.restoreAllMocks();
});

const createCtx = () => {
  const calls: string[] = [];
  const ctx = {
    canvas: { getBoundingClientRect: () => ({ left: 0, top: 0 }) },
    save: () => calls.push('save'),
    restore: () => calls.push('restore'),
    beginPath: () => calls.push('beginPath'),
    rect: (...args: number[]) => calls.push(`rect(${args.join(',')})`),
    clip: () => calls.push('clip'),
  };
  return { ctx: ctx as unknown as CanvasRenderingContext2D, calls };
};

const renderCell = (ctx: CanvasRenderingContext2D) => {
  const row = { id: 1 };
  const cell = glideCellRenderer({
    jsxElement: <Canvas.Container backgroundColor="gray" />,
    canvasCellCache: new WeakMap(),
    cellInfo: {
      row,
      column: { id: 'col' },
      colInd: 0,
      rowInd: 0,
      ctxs: {},
    } as unknown as CellInfo<ObjectForExtending, unknown>,
    options: { data: undefined },
  });
  ((cell as CanvasCell).data as CanvasCellData).render(
    ctx,
    { x: 10, y: 20, width: 100, height: 40 },
    {} as GlideThemeForRender,
    undefined,
    undefined,
  );
};

describe('glideCellRenderer: обрезка по ячейке', () => {
  it('не заходит на левый и верхний пиксель — там линии сетки и рамка выделения соседа', () => {
    const { ctx, calls } = createCtx();
    const paint = vi
      .spyOn(CellCanvasRoot.prototype, 'render')
      .mockImplementation(() => {
        calls.push('paint');
        return undefined as never;
      });

    renderCell(ctx);

    expect(paint).toHaveBeenCalledTimes(1);
    expect(calls).toEqual([
      'save',
      'beginPath',
      'rect(11,21,99,39)',
      'clip',
      'paint',
      'restore',
    ]);
  });
});
