import { act, renderHook } from '@testing-library/react';
import type { PointerEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useGridInteractionGuard } from './useGridInteractionGuard';

const rows = [{ id: 10 }, { id: 20 }];
const columns = [{ id: 'name' }, { id: 'id' }];
const data = {
  rows,
  rowKey: (row: (typeof rows)[number]) => row.id,
  criteria: {},
  loading: false,
};
const view = { rows, columns, data };

describe('обновление грида во время взаимодействия', () => {
  it('оставляет редактор на той же записи, блокирует запись после замены записи под ним', () => {
    const onCellsEdited = vi.fn();
    const editor = { current: [0, 0] as readonly [number, number] | undefined };
    const { result, rerender } = renderHook(
      (v) => useGridInteractionGuard(v, editor, { onCellsEdited }),
      { initialProps: view },
    );
    rerender({ ...view, rows: rows.map((row) => ({ ...row })) });
    result.current.handlers.onCellsEdited([]);
    expect(onCellsEdited).toHaveBeenCalledTimes(1);
    rerender({ ...view, rows: [...rows].reverse() });
    expect(result.current.handlers.onCellsEdited([])).toBe(true);
    expect(onCellsEdited).toHaveBeenCalledTimes(1);
  });

  it('прерывает действующую протяжку при перестановке, не затрагивает законченный жест', async () => {
    const onSelectionCleared = vi.fn();
    const editor = { current: undefined };
    const { result, rerender } = renderHook(
      (v) => useGridInteractionGuard(v, editor, { onSelectionCleared }),
      { initialProps: view },
    );
    const target = document.createElement('div');
    target.className = 'gdg-table';
    const down = () =>
      act(() =>
        result.current.beginGesture({
          target,
          button: 0,
          pointerId: 7,
        } as unknown as PointerEvent<HTMLDivElement>),
      );
    down();
    rerender({ ...view, columns: [...columns].reverse() });
    result.current.handlers.onSelectionCleared();
    expect(onSelectionCleared).not.toHaveBeenCalled();
    down();
    act(() =>
      window.dispatchEvent(
        Object.assign(new Event('pointerup'), { pointerId: 7 }),
      ),
    );
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 0);
    });
    rerender(view);
    result.current.handlers.onSelectionCleared();
    expect(onSelectionCleared).toHaveBeenCalledTimes(1);
  });
});
