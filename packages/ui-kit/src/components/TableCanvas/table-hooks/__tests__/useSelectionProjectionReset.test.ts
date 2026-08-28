import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  projectionChanged,
  resolveDataRevision,
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
