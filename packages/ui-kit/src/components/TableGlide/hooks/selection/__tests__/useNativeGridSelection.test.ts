import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { ProjectionResetSignal } from '../../../types';
import { useNativeGridSelection } from '../useNativeGridSelection';

// Приём сигнала сброса проекции: uncontrolled-выделение сбрасывается по новому
// token, controlled-режим сигнал игнорирует (его сбрасывает сеттер потребителя).

const someSelection: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: {
    cell: [1, 2],
    range: { x: 1, y: 2, width: 2, height: 2 },
    rangeStack: [],
  },
};

type HookProps = {
  signal?: ProjectionResetSignal;
  controlled?: GridSelection;
  onChange?: (s: GridSelection) => void;
  onEmit?: (s: GridSelection) => void;
};

const setup = (initial: HookProps = {}) =>
  renderHook(
    ({ signal, controlled, onChange, onEmit }: HookProps) =>
      useNativeGridSelection({
        cellsSelectionMode: 'range-cell',
        gridSelection: controlled,
        onGridSelectionChange: onChange,
        onSelectionEmit: onEmit,
        projectionResetSignal: signal,
      }),
    { initialProps: initial },
  );

describe('useNativeGridSelection — projectionResetSignal', () => {
  it('uncontrolled: новый token сбрасывает выделение и эмитит пустое', () => {
    const onEmit = vi.fn();
    const { result, rerender } = setup({ onEmit });

    act(() => result.current.handleGridSelectionChange(someSelection));
    expect(result.current.selection.current).toBeDefined();

    rerender({ onEmit, signal: { token: 1 } });
    expect(result.current.selection.current).toBeUndefined();
    expect(onEmit).toHaveBeenLastCalledWith(
      expect.objectContaining({ current: undefined }),
    );
  });

  it('uncontrolled: nextSelection из сигнала применяется вместо пустого', () => {
    const { result, rerender } = setup({});
    rerender({ signal: { token: 1, nextSelection: someSelection } });
    expect(result.current.selection.current?.cell).toEqual([1, 2]);
  });

  it('тот же сигнал (та же ссылка) повторно не сбрасывает', () => {
    const onEmit = vi.fn();
    const signal: ProjectionResetSignal = { token: 1 };
    const { result, rerender } = setup({ onEmit, signal });
    onEmit.mockClear();

    act(() => result.current.handleGridSelectionChange(someSelection));
    rerender({ onEmit, signal });
    expect(result.current.selection.current).toBeDefined();
  });

  it('controlled: сигнал игнорируется, сеттер потребителя не зовётся', () => {
    const onChange = vi.fn();
    const onEmit = vi.fn();
    const { result, rerender } = setup({
      controlled: someSelection,
      onChange,
      onEmit,
    });

    rerender({
      controlled: someSelection,
      onChange,
      onEmit,
      signal: { token: 1 },
    });
    expect(result.current.selection).toBe(someSelection);
    expect(onChange).not.toHaveBeenCalled();
    expect(onEmit).not.toHaveBeenCalled();
  });
});
