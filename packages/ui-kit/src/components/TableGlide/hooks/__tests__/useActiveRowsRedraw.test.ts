import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  changedActiveRanges,
  rowsToRedraw,
  useActiveRowsRedraw,
} from '../useActiveRowsRedraw';

const range = (from: number, to: number) => ({ from, to });

describe('changedActiveRanges: строки, у которых сменилась активность', () => {
  it('смена подсвеченной строки даёт прежнюю и новую', () => {
    expect(
      changedActiveRanges(
        { activeRow: 2, activeRowsRange: undefined },
        { activeRow: 5, activeRowsRange: undefined },
      ),
    ).toEqual([range(2, 2), range(5, 5)]);
    expect(
      changedActiveRanges(
        { activeRow: undefined, activeRowsRange: undefined },
        { activeRow: 5, activeRowsRange: undefined },
      ),
    ).toEqual([range(5, 5)]);
  });

  it('у диапазона меняются только вошедшие и вышедшие строки', () => {
    expect(
      changedActiveRanges(
        { activeRow: undefined, activeRowsRange: range(3, 5) },
        { activeRow: undefined, activeRowsRange: range(4, 6) },
      ),
    ).toEqual([range(3, 3), range(6, 6)]);
    // Диапазон сузился с обеих сторон
    expect(
      changedActiveRanges(
        { activeRow: undefined, activeRowsRange: range(0, 9) },
        { activeRow: undefined, activeRowsRange: range(3, 5) },
      ),
    ).toEqual([range(0, 2), range(6, 9)]);
    // Диапазоны не пересекаются
    expect(
      changedActiveRanges(
        { activeRow: undefined, activeRowsRange: range(0, 1) },
        { activeRow: undefined, activeRowsRange: range(5, 6) },
      ),
    ).toEqual([range(0, 1), range(5, 6)]);
  });

  it('протяжка на всю колонку в миллион строк: один кусок, строки не перебираются', () => {
    expect(
      changedActiveRanges(
        { activeRow: undefined, activeRowsRange: range(0, 999_998) },
        { activeRow: undefined, activeRowsRange: range(0, 999_999) },
      ),
    ).toEqual([range(999_999, 999_999)]);
  });

  it('тот же диапазон другим объектом и та же строка: пусто', () => {
    expect(
      changedActiveRanges(
        { activeRow: 3, activeRowsRange: range(3, 4) },
        { activeRow: 3, activeRowsRange: range(3, 4) },
      ),
    ).toEqual([]);
  });
});

describe('rowsToRedraw: только видимые строки', () => {
  it('режет по видимой области с запасом в строку, без повторов и по возрастанию', () => {
    expect(
      rowsToRedraw(
        [
          range(0, 0),
          range(9, 10),
          range(20, 20),
          range(31, 32),
          range(10, 10),
        ],
        { y: 10, height: 20 },
      ),
    ).toEqual([9, 10, 20, 31]);
  });

  it('огромный кусок разворачивается только в видимые строки', () => {
    expect(
      rowsToRedraw([range(0, 999_999)], { y: 500_000, height: 2 }),
    ).toEqual([499_999, 500_000, 500_001, 500_002, 500_003]);
  });

  it('без известной области ограничивает число строк', () => {
    expect(rowsToRedraw([range(0, 999)], null)).toHaveLength(200);
  });
});

describe('useActiveRowsRedraw', () => {
  type Props = {
    activeRow?: number;
    activeRowsRange?: { from: number; to: number };
  };
  const setup = (pinnedRows?: readonly number[]) => {
    const damageRows = vi.fn();
    const visibleRowsRef = { current: { y: 0, height: 50 } };
    const hook = renderHook(
      ({
        activeRow,
        activeRowsRange,
        pinned,
      }: Props & { pinned?: readonly number[] }) =>
        useActiveRowsRedraw({
          activeRow,
          activeRowsRange,
          damageRows,
          visibleRowsRef,
          pinnedRows: pinned,
        }),
      {
        initialProps: { pinned: pinnedRows } as Props & {
          pinned?: readonly number[];
        },
      },
    );
    return { hook, damageRows, visibleRowsRef };
  };

  it('первый рендер ничего не дорисовывает, смена строки дорисовывает прежнюю и новую', () => {
    const { hook, damageRows } = setup();
    expect(damageRows).not.toHaveBeenCalled();

    hook.rerender({ activeRow: 4, activeRowsRange: range(4, 4) });
    expect(damageRows).toHaveBeenCalledTimes(1);
    expect(damageRows.mock.calls[0]).toEqual([4]);

    hook.rerender({ activeRow: 8, activeRowsRange: range(8, 8) });
    expect(damageRows.mock.calls[1]).toEqual([4, 8]);
  });

  it('тот же диапазон другим объектом: дорисовки нет; строки за видимой областью отбрасываются', () => {
    const { hook, damageRows, visibleRowsRef } = setup();
    hook.rerender({ activeRow: 4, activeRowsRange: range(4, 4) });
    hook.rerender({ activeRow: 4, activeRowsRange: range(4, 4) });
    expect(damageRows).toHaveBeenCalledTimes(1);

    // прежняя строка 4 и новая 500 вне видимых строк 100..110, остаётся только 105
    visibleRowsRef.current = { y: 100, height: 10 };
    hook.rerender({ activeRow: 105, activeRowsRange: range(105, 105) });
    expect(damageRows.mock.calls[1]).toEqual([105]);
    hook.rerender({ activeRow: 105, activeRowsRange: range(105, 106) });
    expect(damageRows.mock.calls[2]).toEqual([106]);
  });

  it('новый массив прилипших строк с теми же строками дорисовки не вызывает', () => {
    const { hook, damageRows } = setup([0]);
    hook.rerender({ activeRow: 4, activeRowsRange: range(4, 4), pinned: [0] });
    expect(damageRows).toHaveBeenCalledTimes(1);
    hook.rerender({ activeRow: 4, activeRowsRange: range(4, 4), pinned: [0] });
    expect(damageRows).toHaveBeenCalledTimes(1);
  });
});

describe('rowsToRedraw: прилипшие строки', () => {
  it('прилипшая строка вне области остаётся в списке', () => {
    expect(
      rowsToRedraw(
        [range(0, 0), range(3, 3), range(50, 51), range(90, 90)],
        { y: 48, height: 5 },
        [0, 90],
      ),
    ).toEqual([0, 50, 51, 90]);
  });
});
