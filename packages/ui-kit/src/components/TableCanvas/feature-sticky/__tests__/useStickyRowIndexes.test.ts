import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SKELETON_ROW } from '../../feature-infinity-scroll';
import { useStickyRowIndexes } from '../useStickyRowIndexes';

type Row = { id: number; meta: { subtotal: boolean } };

const row = (id: number, subtotal = false): Row => ({
  id,
  meta: { subtotal },
});

const isSubtotal = (current: Row, _rowIndex: number) => current.meta.subtotal;

const render = (
  rows: readonly Row[],
  stickyRows: Parameters<typeof useStickyRowIndexes<Row>>[1],
) =>
  renderHook(
    ({ rows: currentRows, stickyRows: currentSticky }) =>
      useStickyRowIndexes(currentRows, currentSticky),
    { initialProps: { rows, stickyRows } },
  );

describe('useStickyRowIndexes', () => {
  it('без конфига — undefined', () => {
    expect(render([row(0)], undefined).result.current).toBeUndefined();
  });

  it('индексы уходят как есть, без вызова по строкам', () => {
    const indexes = [0, 5, 100];
    expect(render([row(0)], indexes).result.current).toBe(indexes);
  });

  it('предикат: индексы строк, для которых он вернул true', () => {
    const rows = [row(0), row(1, true), row(2), row(3, true)];
    expect(render(rows, isSubtotal).result.current).toEqual([1, 3]);
  });

  it('передаёт в предикат индекс отображаемой строки', () => {
    const predicate = vi.fn(() => false);
    render([row(0), row(1)], predicate);
    expect(predicate.mock.calls).toEqual([
      [row(0), 0],
      [row(1), 1],
    ]);
  });

  it('заглушки загрузки и строки групп в предикат не попадают и липкими не становятся', () => {
    const groupRow = {
      groupKey: 'region',
      groupLabel: 'Центр',
      childGroups: [],
      childRows: [row(1, true)],
    } as unknown as Row;
    const skeleton = SKELETON_ROW as unknown as Row;
    const predicate = vi.fn(isSubtotal);

    const { result } = render(
      [groupRow, row(1, true), skeleton, skeleton],
      predicate,
    );

    expect(result.current).toEqual([1]);
    expect(predicate).toHaveBeenCalledTimes(1);
  });

  it('догрузка: предикат вызывается только для новых строк', () => {
    const firstChunk = [row(0), row(1, true)];
    const predicate = vi.fn(isSubtotal);
    const view = render(firstChunk, predicate);
    predicate.mockClear();

    view.rerender({
      rows: [...firstChunk, row(2), row(3, true)],
      stickyRows: predicate,
    });

    expect(view.result.current).toEqual([1, 3]);
    expect(predicate.mock.calls.map(([, index]) => index)).toEqual([2, 3]);
  });

  it('изменённая строка проверяется заново', () => {
    const unchanged = row(1, true);
    const predicate = vi.fn(isSubtotal);
    const view = render([row(0), unchanged], predicate);
    predicate.mockClear();

    view.rerender({ rows: [row(0, true), unchanged], stickyRows: predicate });

    expect(view.result.current).toEqual([0, 1]);
    expect(predicate).toHaveBeenCalledTimes(1);
  });

  it('новый предикат сбрасывает кеш', () => {
    const rows = [row(0), row(1, true)];
    const view = render(rows, isSubtotal);
    const everyRow = vi.fn(() => true);

    view.rerender({ rows, stickyRows: everyRow });

    expect(view.result.current).toEqual([0, 1]);
    expect(everyRow).toHaveBeenCalledTimes(2);
  });
});
