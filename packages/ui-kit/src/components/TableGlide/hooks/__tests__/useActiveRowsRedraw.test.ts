import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  changedActiveRows,
  rowsToRedraw,
  useActiveRowsRedraw,
} from '../useActiveRowsRedraw';

const set = (...rows: number[]) => new Set(rows);
const NONE = new Set<number>();

describe('changedActiveRows: строки, у которых сменилась активность', () => {
  it('смена подсвеченной строки даёт прежнюю и новую', () => {
    expect(
      changedActiveRows(
        { activeRow: 2, activeRows: NONE },
        { activeRow: 5, activeRows: NONE },
      ),
    ).toEqual([2, 5]);
    expect(
      changedActiveRows(
        { activeRow: undefined, activeRows: NONE },
        { activeRow: 5, activeRows: NONE },
      ),
    ).toEqual([5]);
  });

  it('у диапазона меняются только вошедшие и вышедшие строки', () => {
    expect(
      changedActiveRows(
        { activeRow: undefined, activeRows: set(3, 4, 5) },
        { activeRow: undefined, activeRows: set(4, 5, 6) },
      ),
    ).toEqual([3, 6]);
  });

  it('без изменений пусто, одинаковые строки не дублируются', () => {
    const rows = set(3, 4);
    expect(
      changedActiveRows(
        { activeRow: 3, activeRows: rows },
        { activeRow: 3, activeRows: rows },
      ),
    ).toEqual([]);
    expect(
      changedActiveRows(
        { activeRow: 3, activeRows: set(3) },
        { activeRow: 7, activeRows: set(7) },
      ),
    ).toEqual([3, 7]);
  });
});

describe('rowsToRedraw: только видимые строки', () => {
  it('режет по видимой области с запасом в строку', () => {
    expect(rowsToRedraw([0, 9, 10, 20, 31, 32, 500], { y: 10, height: 20 })).toEqual([
      9, 10, 20, 31,
    ]);
  });

  it('без известной области ограничивает число строк', () => {
    const many = Array.from({ length: 1000 }, (_, i) => i);
    expect(rowsToRedraw(many, null)).toHaveLength(200);
  });
});

describe('useActiveRowsRedraw', () => {
  const setup = () => {
    const damageRows = vi.fn();
    const visibleRowsRef = { current: { y: 0, height: 50 } };
    const hook = renderHook(
      ({ activeRow, activeRows }: { activeRow?: number; activeRows: Set<number> }) =>
        useActiveRowsRedraw({ activeRow, activeRows, damageRows, visibleRowsRef }),
      { initialProps: { activeRow: undefined, activeRows: NONE } },
    );
    return { hook, damageRows, visibleRowsRef };
  };

  it('первый рендер ничего не дорисовывает, смена строки дорисовывает прежнюю и новую', () => {
    const { hook, damageRows } = setup();
    expect(damageRows).not.toHaveBeenCalled();

    hook.rerender({ activeRow: 4, activeRows: set(4) });
    expect(damageRows).toHaveBeenCalledTimes(1);
    expect(damageRows.mock.calls[0]).toEqual([4]);

    hook.rerender({ activeRow: 8, activeRows: set(8) });
    expect(damageRows.mock.calls[1]).toEqual([4, 8]);
  });

  it('тот же набор строк другим объектом: дорисовки нет; строки за видимой областью отбрасываются', () => {
    const { hook, damageRows, visibleRowsRef } = setup();
    hook.rerender({ activeRow: 4, activeRows: set(4) });
    hook.rerender({ activeRow: 4, activeRows: set(4) });
    expect(damageRows).toHaveBeenCalledTimes(1);

    // прежняя строка 4 и новая 500 вне видимых строк 100..110, остаётся только 105
    visibleRowsRef.current = { y: 100, height: 10 };
    hook.rerender({ activeRow: 500, activeRows: set(500, 105) });
    expect(damageRows.mock.calls[1]).toEqual([105]);
    hook.rerender({ activeRow: 500, activeRows: set(500, 105, 106) });
    expect(damageRows.mock.calls[2]).toEqual([106]);
  });
});

describe('rowsToRedraw: прилипшие строки', () => {
  it('прилипшая строка вне области остаётся в списке', () => {
    expect(rowsToRedraw([0, 3, 50, 51, 90], { y: 48, height: 5 }, [0, 90])).toEqual(
      [0, 50, 51, 90],
    );
  });
});
