import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { usePaste } from './usePaste';

const selection: GridSelection['current'] = {
  cell: [0, 0],
  range: { x: 0, y: 0, width: 1, height: 1 },
  rangeStack: [],
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('отложенное чтение буфера', () => {
  it.each(['cancel', 'reopen', 'unmount', 'refresh'] as const)(
    'завершение сессии (%s) аннулирует ожидающую вставку',
    async (action) => {
      let resolveRead!: (text: string) => void;
      const readText = vi.fn(
        () =>
          new Promise<string>((resolve) => {
            resolveRead = resolve;
          }),
      );
      vi.stubGlobal('navigator', { clipboard: { readText } });
      const onRowsChange = vi.fn();
      const columns = [
        {
          key: 'name',
          name: 'Название',
          editable: true,
          editingCell: { component: 'inputString' as const },
        },
      ];
      const initialRows = [{ name: 'before' }];
      const { result, rerender, unmount } = renderHook(
        ({ enabled, rows }) =>
          usePaste({
            editModeEnabled: enabled,
            cellTransferConfig: { enabled: true },
            columns,
            flattenedRows: rows,
            selectionRef: { current: { current: selection } as GridSelection },
            onRowsChange,
          }),
        { initialProps: { enabled: true, rows: initialRows } },
      );
      const pending = result.current.handlePaste();
      expect(readText).toHaveBeenCalledOnce();
      if (action === 'refresh')
        rerender({ enabled: true, rows: [{ name: 'updated' }] });
      else if (action === 'unmount') unmount();
      else {
        rerender({ enabled: false, rows: initialRows });
        if (action === 'reopen') rerender({ enabled: true, rows: initialRows });
      }
      resolveRead('stale');
      await pending;
      expect(onRowsChange).not.toHaveBeenCalled();
      if (action === 'reopen') {
        await result.current.handlePaste('fresh');
        expect(onRowsChange).toHaveBeenCalledWith(
          [{ name: 'fresh' }],
          expect.objectContaining({ type: 'paste' }),
        );
      }
    },
  );
});
