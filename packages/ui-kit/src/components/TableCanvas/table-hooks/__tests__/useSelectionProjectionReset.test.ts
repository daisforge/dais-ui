import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  buildRestoredSelection,
  projectionChanged,
  resolveDataRevision,
  type SavedActiveCell,
  useSelectionProjectionReset,
} from '../useSelectionProjectionReset';

// Контракт сброса выделения: рамка сбрасывается только при смене проекции данных
// (сортировка/фильтры/поиск/группировка/версия данных), не на маунте и не на
// обычных ре-рендерах.

describe('projectionChanged', () => {
  it('одинаковые сигналы (по ссылке) — false', () => {
    const sort = ['a'];
    expect(projectionChanged([sort, 1], [sort, 1])).toBe(false);
  });

  it('смена одного сигнала — true', () => {
    const sort = ['a'];
    expect(projectionChanged([sort, 1], [['a'], 1])).toBe(true);
    expect(projectionChanged([sort, 1], [sort, 2])).toBe(true);
  });
});

describe('resolveDataRevision', () => {
  const rows = [{ id: 1 }];

  it('передан dataRevision — identity rows игнорируется', () => {
    expect(resolveDataRevision('page-1', rows)).toBe('page-1');
    expect(resolveDataRevision(0, rows)).toBe(0);
    expect(resolveDataRevision(null, rows)).toBe(null);
  });

  it('без dataRevision — версия равна самому массиву строк', () => {
    expect(resolveDataRevision(undefined, rows)).toBe(rows);
  });
});

type HookProps = {
  parts: readonly unknown[];
  setter?: (s: unknown) => void;
};

const setup = (initial: HookProps) =>
  renderHook(
    ({ parts, setter }: HookProps) =>
      useSelectionProjectionReset({
        projectionParts: parts,
        controlledSetter: setter as never,
      }),
    { initialProps: initial },
  );

describe('useSelectionProjectionReset — uncontrolled', () => {
  const parts = (rev: unknown) => ['sort', 'filters', 'search', 'group', rev];

  it('маунт не даёт сигнала', () => {
    const { result } = setup({ parts: parts(1) });
    expect(result.current.projectionResetSignal).toBeUndefined();
  });

  it('ре-рендер с теми же сигналами — без сигнала', () => {
    const p = parts(1);
    const { result, rerender } = setup({ parts: p });
    rerender({ parts: [...p] }); // новый массив, те же элементы
    expect(result.current.projectionResetSignal).toBeUndefined();
  });

  it('смена сигнала — токен растёт на каждую смену', () => {
    const { result, rerender } = setup({ parts: parts(1) });
    rerender({ parts: parts(2) });
    expect(result.current.projectionResetSignal?.token).toBe(1);
    rerender({ parts: parts(2) });
    expect(result.current.projectionResetSignal?.token).toBe(1);
    rerender({ parts: parts(3) });
    expect(result.current.projectionResetSignal?.token).toBe(2);
  });
});

describe('useSelectionProjectionReset — controlled', () => {
  const parts = (rev: unknown) => ['sort', 'filters', 'search', 'group', rev];

  it('смена сигнала зовёт сеттер потребителя ровно один раз, сигнал вниз не идёт', () => {
    const setter = vi.fn();
    const { result, rerender } = setup({ parts: parts(1), setter });
    expect(setter).not.toHaveBeenCalled();

    rerender({ parts: parts(2), setter });
    expect(setter).toHaveBeenCalledTimes(1);
    expect(setter).toHaveBeenCalledWith(
      expect.objectContaining({ current: undefined }),
    );
    expect(result.current.projectionResetSignal).toBeUndefined();
  });

  it('смена identity сеттера без смены сигналов — не сброс', () => {
    const parts1 = parts(1);
    const setterA = vi.fn();
    const setterB = vi.fn();
    const { rerender } = setup({ parts: parts1, setter: setterA });
    rerender({ parts: parts1, setter: setterB });
    expect(setterA).not.toHaveBeenCalled();
    expect(setterB).not.toHaveBeenCalled();
  });
});

// --- Восстановление активной ячейки ------------------------------------------

type Row = { id: number; dept?: string };

const restoreEnv = (rows: Row[]) => ({
  rows,
  renderColKeys: ['a', 'b', 'c'],
  columns: [{ key: 'a' }, { key: 'b' }, { key: 'c' }] as never,
  rowKeyGetter: (r: Row) => r.id,
});

describe('buildRestoredSelection — активная ячейка в новой проекции', () => {
  const saved: SavedActiveCell = { rowKey: 2, colKey: 'b' };

  it('строка найдена: выделение 1x1 на новом индексе', () => {
    const built = buildRestoredSelection({
      saved,
      ...restoreEnv([{ id: 3 }, { id: 2 }, { id: 1 }]),
    });
    expect(built?.cell).toEqual([1, 1]);
    expect(built?.selection.current?.range).toEqual({
      x: 1,
      y: 1,
      width: 1,
      height: 1,
    });
  });

  it('строки нет (фильтр/другая страница) — null', () => {
    const built = buildRestoredSelection({
      saved,
      ...restoreEnv([{ id: 3 }, { id: 1 }]),
    });
    expect(built).toBeNull();
  });

  it('колонки нет (скрыта) — null', () => {
    const built = buildRestoredSelection({
      saved: { rowKey: 2, colKey: 'hidden' },
      ...restoreEnv([{ id: 2 }]),
    });
    expect(built).toBeNull();
  });

  it('ячейка в слитом блоке нормализуется к его левому верхнему углу', () => {
    const rows: Row[] = [{ id: 10 }, { id: 11 }, { id: 12 }];
    // Колонка b слита по строкам 0..2: восстановление на строке 12 уводит к origin.
    const columns = [
      { key: 'a' },
      { key: 'b', rowSpan: () => [0, 2] as const },
      { key: 'c' },
    ] as never;
    const built = buildRestoredSelection({
      saved: { rowKey: 12, colKey: 'b' },
      rows,
      renderColKeys: ['a', 'b', 'c'],
      columns,
      rowKeyGetter: (r: Row) => r.id,
    });
    expect(built?.cell).toEqual([1, 0]);
  });
});

describe('useSelectionProjectionReset — восстановление активной ячейки', () => {
  const gridSelectionAt = (col: number, row: number) => ({
    columns: { hasIndex: () => false },
    rows: { hasIndex: () => false },
    current: {
      cell: [col, row] as [number, number],
      range: { x: col, y: row, width: 1, height: 1 },
      rangeStack: [],
    },
  });

  const fullSetup = (
    rowsRef: { current: Row[] },
    setter?: (s: unknown) => void,
  ) => {
    const scrollTo = vi.fn();
    const hook = renderHook(
      ({ parts }: { parts: readonly unknown[] }) =>
        useSelectionProjectionReset<Row>({
          projectionParts: parts,
          controlledSetter: setter as never,
          rowKeyGetter: (r) => r.id,
          flattenedRowsRef: rowsRef,
          renderColKeysRef: { current: ['a', 'b'] },
          columns: [{ key: 'a' }, { key: 'b' }],
          scrollTo,
        }),
      { initialProps: { parts: ['s', 1] as readonly unknown[] } },
    );
    return { ...hook, scrollTo };
  };

  it('uncontrolled: сигнал несёт восстановленное выделение, вызван scrollTo', () => {
    const rowsRef = { current: [{ id: 1 }, { id: 2 }] as Row[] };
    const { result, rerender, scrollTo } = fullSetup(rowsRef);

    // Пользователь встал на ячейку (колонка b, строка id=1).
    result.current.captureActiveCell(gridSelectionAt(1, 0) as never);

    // Смена проекции: строка id=1 теперь внизу.
    rowsRef.current = [{ id: 2 }, { id: 1 }];
    rerender({ parts: ['s', 2] });

    const signal = result.current.projectionResetSignal;
    expect(signal?.nextSelection?.current?.cell).toEqual([1, 1]);
    expect(scrollTo).toHaveBeenCalledWith(1, 1);
  });

  it('строка исчезла: пустой сброс, scrollTo не вызван', () => {
    const rowsRef = { current: [{ id: 1 }, { id: 2 }] as Row[] };
    const { result, rerender, scrollTo } = fullSetup(rowsRef);

    result.current.captureActiveCell(gridSelectionAt(1, 0) as never);
    rowsRef.current = [{ id: 2 }];
    rerender({ parts: ['s', 2] });

    expect(result.current.projectionResetSignal?.nextSelection).toBeUndefined();
    expect(scrollTo).not.toHaveBeenCalled();
  });

  it('controlled: сеттер получает восстановленное выделение', () => {
    const rowsRef = { current: [{ id: 1 }, { id: 2 }] as Row[] };
    const setter = vi.fn();
    const { result, rerender } = fullSetup(rowsRef, setter);

    result.current.captureActiveCell(gridSelectionAt(0, 1) as never);
    rowsRef.current = [{ id: 2 }, { id: 1 }];
    rerender({ parts: ['s', 2] });

    expect(setter).toHaveBeenCalledTimes(1);
    const arg = setter.mock.calls[0]?.[0];
    expect(arg.current?.cell).toEqual([0, 0]);
  });

  it('снятие выделения забывает активную ячейку', () => {
    const rowsRef = { current: [{ id: 1 }, { id: 2 }] as Row[] };
    const { result, rerender, scrollTo } = fullSetup(rowsRef);

    result.current.captureActiveCell(gridSelectionAt(1, 0) as never);
    result.current.captureActiveCell({ current: undefined } as never);
    rerender({ parts: ['s', 2] });

    expect(result.current.projectionResetSignal?.nextSelection).toBeUndefined();
    expect(scrollTo).not.toHaveBeenCalled();
  });
});
