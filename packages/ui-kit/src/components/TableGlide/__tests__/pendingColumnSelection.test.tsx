import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TableGlide } from '../TableGlide';
import type { ColumnGlideLast } from '../types';

vi.mock('../styled', async (importOriginal) => {
  const { forwardRef } = await import('react');
  const MockDataEditor = forwardRef<HTMLDivElement, { className?: string }>(
    (props, _ref) => <div className={props.className} data-testid="editor" />,
  );
  MockDataEditor.displayName = 'MockDataEditor';
  return {
    ...(await importOriginal<typeof import('../styled')>()),
    StyledGlideDataEditor: MockDataEditor,
  };
});

type Row = Record<string, unknown>;
const col = (id: string, isServiceColumn = false) =>
  ({
    id,
    key: id,
    title: id,
    width: 100,
    isServiceColumn,
  } as unknown as ColumnGlideLast<Row, unknown>);

const MARKERS = col('row-markers', true);
const ROWS: Row[] = [{ a: 1 }, { a: 2 }, { a: 3 }];

describe('TableGlide: выделение колонок по ключам после закрепления', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('пока порядок колонок меняется, наружу уходит один onChange с итоговыми индексами', () => {
    const onSelectionEmit = vi.fn();
    const applied = vi.fn();
    const before = [MARKERS, col('a'), col('b'), col('c'), col('d')];
    const after = [MARKERS, col('c'), col('a'), col('b'), col('d')];
    const props = {
      rows: ROWS,
      onSelectionEmit,
      onColumnSelectionApplied: applied,
    };

    const { rerender } = render(
      <TableGlide
        {...props}
        columns={before}
        pendingColumnSelectionKeys={null}
      />,
    );
    rerender(
      <TableGlide
        {...props}
        columns={before}
        pendingColumnSelectionKeys={['c']}
      />,
    );
    // Порядок после пина приходит следующим рендером
    rerender(
      <TableGlide
        {...props}
        columns={after}
        pendingColumnSelectionKeys={['c']}
      />,
    );
    act(() => {
      vi.runAllTimers();
    });

    expect(onSelectionEmit.mock.calls.map(([s]) => s.current?.range)).toEqual([
      { x: 1, y: 0, width: 1, height: 3 },
    ]);
    expect(applied).toHaveBeenCalledTimes(1);
  });

  it('новый массив колонок с тем же порядком и новый колбэк не откладывают применение', () => {
    const onSelectionEmit = vi.fn();
    const columns = [MARKERS, col('a'), col('b')];
    const props = {
      rows: ROWS,
      onSelectionEmit,
      pendingColumnSelectionKeys: ['b'],
    };
    const { rerender } = render(
      <TableGlide
        {...props}
        columns={columns}
        onColumnSelectionApplied={vi.fn()}
      />,
    );
    const timeoutSpy = vi.spyOn(globalThis, 'setTimeout');
    const applied = vi.fn();
    for (let i = 0; i < 3; i += 1) {
      rerender(
        <TableGlide
          {...props}
          columns={[...columns]}
          onColumnSelectionApplied={applied}
        />,
      );
    }
    // Таймер применения не перезапускался
    expect(timeoutSpy).not.toHaveBeenCalled();
    act(() => {
      vi.runAllTimers();
    });

    expect(onSelectionEmit.mock.calls.map(([s]) => s.current?.range)).toEqual([
      { x: 2, y: 0, width: 1, height: 3 },
    ]);
    expect(applied).toHaveBeenCalledTimes(1);
  });
});
