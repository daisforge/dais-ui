import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
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
  it.each(['inline', 'readonly', 'reorder', 'selection'] as const)(
    'проверяет актуальную цель после чтения буфера (%s)',
    async (action) => {
      let resolveRead!: (text: string) => void;
      vi.stubGlobal('navigator', {
        clipboard: {
          readText: () =>
            new Promise<string>((resolve) => {
              resolveRead = resolve;
            }),
        },
      });
      const rows = [{ name: 'before', qty: '1' }];
      const oldHandler = vi.fn();
      const newHandler = vi.fn();
      const { result, rerender } = renderHook(
        ({ updated }) => {
          const columns = ['name', 'qty'].map((key) => ({
            key,
            name: key,
            editable: !(updated && action === 'readonly'),
            editingCell: { component: 'inputString' as const },
          }));
          const x = updated && action === 'selection' ? 1 : 0;
          const current: GridSelection = {
            rows: CompactSelection.empty(),
            columns: CompactSelection.empty(),
            current: {
              cell: [x, 0],
              range: { x, y: 0, width: 1, height: 1 },
              rangeStack: [],
            },
          };
          return usePaste({
            editModeEnabled: true,
            flattenedRows: rows,
            columns:
              updated && action === 'reorder' ? columns.reverse() : columns,
            selectionRef: { current },
            onRowsChange: updated ? newHandler : oldHandler,
          });
        },
        { initialProps: { updated: false } },
      );
      const pending = result.current.handlePaste();
      rerender({ updated: true });
      resolveRead('fresh');
      await pending;
      expect(oldHandler).not.toHaveBeenCalled();
      if (action === 'inline') {
        expect(newHandler).toHaveBeenCalledWith(
          [{ name: 'fresh', qty: '1' }],
          expect.objectContaining({ type: 'paste' }),
        );
      } else {
        expect(newHandler).not.toHaveBeenCalled();
      }
    },
  );

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
