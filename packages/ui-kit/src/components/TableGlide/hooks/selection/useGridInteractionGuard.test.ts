import { act, renderHook } from '@testing-library/react';
import type { PointerEvent } from 'react';
import { describe, expect, it } from 'vitest';
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
    const editor = { current: [0, 0] as readonly [number, number] | undefined };
    const { result, rerender } = renderHook(
      (v) => useGridInteractionGuard(v, editor),
      { initialProps: view },
    );
    rerender({ ...view, rows: rows.map((row) => ({ ...row })) });
    expect(result.current.staleEditor.current).toBe(false);
    rerender({ ...view, rows: [...rows].reverse() });
    expect(result.current.staleEditor.current).toBe(true);
  });

  it('прерывает действующую протяжку при перестановке, не затрагивает законченный жест', async () => {
    const { result, rerender } = renderHook(
      (v) => useGridInteractionGuard(v, { current: undefined }),
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
    expect(result.current.staleGesture.current).toBe(true);
    down();
    act(() =>
      window.dispatchEvent(
        Object.assign(new Event('pointerup'), { pointerId: 7 }),
      ),
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    rerender(view);
    expect(result.current.staleGesture.current).toBe(false);
  });
});
