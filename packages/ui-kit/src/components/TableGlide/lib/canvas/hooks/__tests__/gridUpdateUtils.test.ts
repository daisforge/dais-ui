import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { describe, expect, it, vi } from 'vitest';

import { updateGridCells } from '../gridUpdateUtils';

const setup = () => {
  const updateCells = vi.fn();
  const dataEditorRef = {
    current: { updateCells } as unknown as DataEditorRef,
  };
  return { updateCells, dataEditorRef };
};

const rowsOf = (updateCells: ReturnType<typeof vi.fn>) =>
  new Set(
    (updateCells.mock.calls[0]![0] as Array<{ cell: [number, number] }>).map(
      ({ cell }) => cell[1],
    ),
  );

describe('updateGridCells', () => {
  it('без видимой области перерисовывает шапку и первые строки', () => {
    const { updateCells, dataEditorRef } = setup();
    updateGridCells({
      dataEditorRef,
      rowCount: 1000,
      columnCount: 2,
      headerAndGroupHeaderRowsCount: 1,
    });
    const rows = rowsOf(updateCells);
    expect(rows.has(-1)).toBe(true);
    expect(rows.has(0)).toBe(true);
    expect(rows.has(29)).toBe(true);
    expect(rows.has(30)).toBe(false);
  });

  it('с видимой областью перерисовывает строки на экране, а не начало таблицы', () => {
    const { updateCells, dataEditorRef } = setup();
    updateGridCells({
      dataEditorRef,
      rowCount: 1000,
      columnCount: 2,
      headerAndGroupHeaderRowsCount: 2,
      visibleRows: { from: 500, to: 520 },
    });
    const rows = rowsOf(updateCells);
    expect(rows.has(-2)).toBe(true);
    expect(rows.has(-1)).toBe(true);
    expect(rows.has(0)).toBe(false);
    expect(rows.has(500)).toBe(true);
    expect(rows.has(520)).toBe(true);
    expect(rows.has(521)).toBe(false);
  });

  it('видимая область за концом таблицы обрезается по числу строк', () => {
    const { updateCells, dataEditorRef } = setup();
    updateGridCells({
      dataEditorRef,
      rowCount: 10,
      columnCount: 1,
      headerAndGroupHeaderRowsCount: 1,
      visibleRows: { from: 5, to: 40 },
    });
    const rows = rowsOf(updateCells);
    expect(Math.max(...rows)).toBe(9);
  });

  it('прилипшие строки вне видимой области тоже перерисовываются', () => {
    const { updateCells, dataEditorRef } = setup();
    updateGridCells({
      dataEditorRef,
      rowCount: 200,
      columnCount: 1,
      headerAndGroupHeaderRowsCount: 1,
      visibleRows: { from: 100, to: 110 },
      getPinnedRows: () => [0, 105, 500],
    });
    const cells = (
      updateCells.mock.calls[0]![0] as Array<{ cell: [number, number] }>
    ).map(({ cell }) => cell[1]);
    expect(cells).toContain(0);
    // Прилипшая строка внутри области не дублируется, за концом таблицы не берётся
    expect(cells.filter((row) => row === 105)).toHaveLength(1);
    expect(cells).not.toContain(500);
  });
});
