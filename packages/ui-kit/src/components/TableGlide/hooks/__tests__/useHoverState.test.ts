import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { type ResolveHoverRows, useHoverState } from '../useHoverState';

const dataEditorRef = { current: null };

const renderHover = (initialResolve?: ResolveHoverRows) =>
  renderHook(
    ({ resolveHoverRows }: { resolveHoverRows?: ResolveHoverRows }) =>
      useHoverState({
        isRowHoverEnabled: true,
        dataEditorRef,
        columnsCount: 2,
        rowsCount: 5,
        resolveHoverRows,
      }),
    { initialProps: { resolveHoverRows: initialResolve } },
  );

describe('useHoverState: строки под курсором', () => {
  it('без функции поиска блока подсвечивается строка под мышью', () => {
    const { result } = renderHover();

    act(() => result.current.onHoverRowChange?.([0, 4]));

    expect(result.current.hoverRows).toEqual({ from: 4, to: 4 });
  });

  it('уход курсора с ячеек сбрасывает строки', () => {
    const { result } = renderHover(() => ({ from: 0, to: 4 }));

    act(() => result.current.onHoverRowChange?.([0, 4]));
    act(() => result.current.onHoverRowChange?.(undefined));

    expect(result.current.hoverRows).toBeUndefined();
  });

  it('данные обновились без движения мыши: блок ищется заново от ячейки под мышью', () => {
    // Курсор в пятой строке блока 1-5, новые данные разделяют его на 1-2 и 3-5.
    const blockOf = (row: number) =>
      row < 2 ? { from: 0, to: 1 } : { from: 2, to: 4 };
    const calls: Array<[number, number]> = [];
    const { result, rerender } = renderHover(() => ({ from: 0, to: 4 }));

    act(() => result.current.onHoverRowChange?.([0, 4]));
    expect(result.current.hoverRows).toEqual({ from: 0, to: 4 });

    rerender({
      resolveHoverRows: (col, row) => {
        calls.push([col, row]);
        return blockOf(row);
      },
    });

    expect(calls.at(-1)).toEqual([0, 4]);
    expect(result.current.hoverRows).toEqual({ from: 2, to: 4 });
  });
});
