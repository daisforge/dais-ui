import { act, renderHook } from '@testing-library/react';
import { StrictMode, useState } from 'react';
import { describe, expect, it } from 'vitest';

import type { TableCanvasEditedCells } from '../types';
import { useEditedCells } from './useEditedCells';

const row = { id: 7 };
const rowKey = (item: typeof row) => item.id;
const changes = [{ rowId: row.id, columnKey: 'price' }];

describe('отметки изменённых ячеек', () => {
  it('помнит повторную правку до выхода из режима и начинает новую сессию с нуля', () => {
    const { result, rerender } = renderHook(
      ({ enabled }) => useEditedCells(enabled, rowKey),
      { initialProps: { enabled: true } },
    );
    act(() => {
      result.current.markEditedCells(changes);
      result.current.markEditedCells([{ rowId: row.id, columnKey: 'name' }]);
      result.current.markEditedCells(changes);
    });
    expect(result.current.isCellEdited?.({ ...row }, 'price')).toBe(true);
    expect(result.current.isCellEdited?.(row, 'name')).toBe(true);
    expect(result.current.isCellEdited?.(row, 'qty')).toBe(false);
    rerender({ enabled: false });
    rerender({ enabled: true });
    expect(result.current.isCellEdited).toBeUndefined();
  });

  it.each(['save', 'cancel', 'unmount'] as const)(
    'при закрытии модали (%s) внешний набор очищается к повторному открытию',
    async (reason) => {
      const store = renderHook(() =>
        useState<TableCanvasEditedCells<number>>(
          () => new Map([[7, new Set(['price'])]]),
        ),
      );
      const open = () =>
        renderHook(() => useEditedCells(true, rowKey, store.result.current), {
          wrapper: StrictMode,
        });
      const table = open();
      await act(async () => {
        await Promise.resolve();
      });
      expect(store.result.current[0].size).toBe(1);
      await act(async () => {
        if (reason !== 'unmount') table.result.current.clearSession();
        table.unmount();
      });
      expect(store.result.current[0].size).toBe(0);
      expect(open().result.current.isCellEdited).toBeUndefined();
    },
  );

  it('очищает первую правку, если onRowsChange сразу размонтирует таблицу', async () => {
    const store = renderHook(() =>
      useState<TableCanvasEditedCells<number>>(() => new Map()),
    );
    const table = renderHook(() =>
      useEditedCells(true, rowKey, store.result.current),
    );
    await act(async () => {
      table.result.current.markEditedCells(changes);
      table.unmount();
    });
    expect(store.result.current[0].size).toBe(0);
  });

  it('отложенная очистка сохраняет внешний набор, переданный следующей таблице', async () => {
    const store = renderHook(() =>
      useState<TableCanvasEditedCells<number>>(
        () => new Map([[7, new Set(['price'])]]),
      ),
    );
    const table = renderHook(() =>
      useEditedCells(true, rowKey, store.result.current),
    );
    const next = new Map([[8, new Set(['qty'])]]);
    await act(async () => {
      table.unmount();
      store.result.current[1](next);
    });
    expect(store.result.current[0]).toBe(next);
  });

  it('оставляет подстроку без ID без отметки, когда корневая строка подсвечена', () => {
    type DocumentRow = { treeId?: string; document?: { id: number } };
    const getter = (r: DocumentRow) => (r.document as { id: number }).id;
    const { result } = renderHook(() => useEditedCells(true, getter));
    act(() => result.current.markEditedCells(changes));
    expect(
      result.current.isCellEdited?.({ document: { id: 7 } }, 'price'),
    ).toBe(true);
    expect(
      result.current.isCellEdited?.({ treeId: '7.subRows.0' }, 'price'),
    ).toBe(false);
  });

  it('сохраняет явно переданную карту для следующей сессии при выключении режима', () => {
    const next = new Map([[8, new Set(['qty'])]]);
    const { result } = renderHook(() => {
      const [enabled, setEnabled] = useState(true);
      const state = useState<TableCanvasEditedCells<number>>(() => new Map());
      return { ...useEditedCells(enabled, rowKey, state), state, setEnabled };
    });
    act(() => result.current.markEditedCells(changes));
    act(() => {
      result.current.setEnabled(false);
      result.current.state[1](next);
    });
    expect(result.current.state[0]).toBe(next);
    act(() => result.current.setEnabled(true));
    expect(result.current.isCellEdited?.({ id: 8 }, 'qty')).toBe(true);
  });

  it('переносит предыдущие отметки при изменении ключа строки', () => {
    const { result } = renderHook(() => useEditedCells(true, rowKey));
    act(() => result.current.markEditedCells(changes));
    act(() =>
      result.current.markEditedCells(
        [{ rowId: 8, columnKey: 'id' }],
        new Map([[7, 8]]),
      ),
    );
    expect(result.current.isCellEdited?.({ id: 8 }, 'price')).toBe(true);
    expect(result.current.isCellEdited?.(row, 'price')).toBe(false);
  });

  it('принимает внешние отметки и очищает внешний набор в конце сессии', () => {
    const { result, rerender } = renderHook(
      ({ enabled }) => {
        const state = useState<TableCanvasEditedCells<number>>(() => new Map());
        return {
          ...useEditedCells(enabled, rowKey, enabled ? state : undefined),
          state,
        };
      },
      { initialProps: { enabled: true } },
    );
    act(() => result.current.markEditedCells(changes));
    expect(result.current.state[0].get(7)).toEqual(new Set(['price']));
    act(() => result.current.state[1](new Map([[7, new Set(['qty'])]])));
    expect(result.current.isCellEdited?.(row, 'qty')).toBe(true);
    expect(result.current.isCellEdited?.(row, 'price')).toBe(false);
    rerender({ enabled: false });
    expect(result.current.state[0].size).toBe(0);
  });
});
