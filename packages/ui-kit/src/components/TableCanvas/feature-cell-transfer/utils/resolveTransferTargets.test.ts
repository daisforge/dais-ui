import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { describe, expect, it } from 'vitest';

import type { Rectangle, TransferColumnConfig } from '../types';
import { resolveTransferTargets } from './resolveTransferTargets';

/** Колонки: первые `serviceCount` — служебные (firstDataCol === serviceCount). */
const cols = (serviceCount = 1, total = 6): readonly TransferColumnConfig[] =>
  Array.from({ length: total }, (_, i) => ({
    isServiceColumn: i < serviceCount,
  })) as unknown as readonly TransferColumnConfig[];

/** Мок GridSelection с нативным current.range (+ опционально rangeStack). */
const sel = (range: Rectangle, stack: Rectangle[] = []): GridSelection =>
  ({
    current: {
      cell: [range.x, range.y],
      range,
      rangeStack: stack,
    },
    columns: undefined,
    rows: undefined,
  } as unknown as GridSelection);

const rect = (x: number, y: number, width = 1, height = 1): Rectangle => ({
  x,
  y,
  width,
  height,
});

describe('resolveTransferTargets — нет выделения', () => {
  it('null → empty', () => {
    expect(resolveTransferTargets(null, cols(), 10)).toEqual({
      status: 'empty',
    });
  });
});

describe('resolveTransferTargets — ячейки (current.range)', () => {
  it('одиночная ячейка → ok kind=cells', () => {
    const res = resolveTransferTargets(sel(rect(2, 3)), cols(1), 10);
    expect(res.status).toBe('ok');
    if (res.status !== 'ok') return;
    expect(res.targets.kind).toBe('cells');
    expect(res.targets.rowTargets).toEqual([3]);
    expect(res.targets.colTargets).toEqual([2]);
    expect(res.targets.contiguousRows).toBe(true);
    expect(res.targets.contiguousCols).toBe(true);
  });

  it('прямоугольный диапазон → colTargets/rowTargets развёрнуты', () => {
    const res = resolveTransferTargets(sel(rect(1, 0, 2, 3)), cols(1), 10);
    expect(res.status).toBe('ok');
    if (res.status !== 'ok') return;
    expect(res.targets.kind).toBe('cells');
    expect(res.targets.colTargets).toEqual([1, 2]);
    expect(res.targets.rowTargets).toEqual([0, 1, 2]);
  });

  it('диапазон, заехавший на служебную колонку, клампится к данным', () => {
    // firstDataCol = 1, выделение с x=0 ширины 3 → остаётся x=1, ширина 2
    const res = resolveTransferTargets(sel(rect(0, 0, 3, 1)), cols(1), 10);
    expect(res.status).toBe('ok');
    if (res.status !== 'ok') return;
    expect(res.targets.range.x).toBe(1);
    expect(res.targets.colTargets).toEqual([1, 2]);
  });
});

describe('resolveTransferTargets — multi-range (Ctrl, rangeStack)', () => {
  it('одна колонка, разрозненные строки → схлопывание строк', () => {
    const res = resolveTransferTargets(
      sel(rect(1, 0), [rect(1, 2)]),
      cols(1),
      10,
    );
    expect(res.status).toBe('ok');
    if (res.status !== 'ok') return;
    expect(res.targets.kind).toBe('cell-ranges');
    expect(res.targets.colTargets).toEqual([1]);
    expect(res.targets.rowTargets).toEqual([0, 2]);
    expect(res.targets.contiguousRows).toBe(false);
    expect(res.targets.contiguousCols).toBe(true);
  });

  it('одна строка, разрозненные колонки → схлопывание колонок', () => {
    const res = resolveTransferTargets(
      sel(rect(1, 0), [rect(3, 0)]),
      cols(1),
      10,
    );
    expect(res.status).toBe('ok');
    if (res.status !== 'ok') return;
    expect(res.targets.kind).toBe('cell-ranges');
    expect(res.targets.rowTargets).toEqual([0]);
    expect(res.targets.colTargets).toEqual([1, 3]);
    expect(res.targets.contiguousCols).toBe(false);
  });

  it('2D-разброс с дырой (L-образный) → unsupported scattered-2d', () => {
    const res = resolveTransferTargets(
      sel(rect(1, 0), [rect(2, 1)]),
      cols(1),
      10,
    );
    expect(res).toEqual({ status: 'unsupported', reason: 'scattered-2d' });
  });

  it('2D сплошной прямоугольник без дыр → ok единый диапазон (cells)', () => {
    // (1,0)+(2,0)+(1,1)+(2,1) = заполненный 2×2
    const res = resolveTransferTargets(
      sel(rect(1, 0), [rect(2, 0), rect(1, 1), rect(2, 1)]),
      cols(1),
      10,
    );
    expect(res.status).toBe('ok');
    if (res.status !== 'ok') return;
    expect(res.targets.kind).toBe('cells');
    expect(res.targets.range).toEqual({ x: 1, y: 0, width: 2, height: 2 });
    expect(res.targets.colTargets).toEqual([1, 2]);
    expect(res.targets.rowTargets).toEqual([0, 1]);
    expect(res.targets.contiguousRows).toBe(true);
    expect(res.targets.contiguousCols).toBe(true);
  });
});
