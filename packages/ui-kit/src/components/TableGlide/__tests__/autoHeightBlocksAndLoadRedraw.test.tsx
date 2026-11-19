import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { AutoRowHeightStore } from '../hooks/autoRowHeight/AutoRowHeightStore';
import { updateGridCells } from '../lib/canvas/hooks/gridUpdateUtils';
import { TableGlide } from '../TableGlide';
import type { ColumnGlideLast } from '../types';

type EditorProps = {
  className?: string;
  getCellContent?: (cell: [number, number]) => unknown;
  onVisibleRegionChanged?: (...args: unknown[]) => void;
};

const editorProps = vi.hoisted(() => ({ current: {} as EditorProps }));
const fontOptions = vi.hoisted(() => ({
  current: {} as Parameters<typeof updateGridCells>[0] & {
    getVisibleRows?: () => { from: number; to: number } | null;
  },
}));

vi.mock('../lib/canvas/hooks/useFontLoadRedraw', () => ({
  useFontLoadRedraw: (options: typeof fontOptions.current) => {
    fontOptions.current = options;
  },
}));
vi.mock('../lib/canvas/hooks/fontsLoaded', () => ({
  subscribeFontsLoaded: () => () => {},
}));
vi.mock('../styled', async (importOriginal) => {
  const { forwardRef } = await import('react');
  const MockDataEditor = forwardRef<HTMLDivElement, EditorProps>(
    (props, _ref) => {
      editorProps.current = props;
      return <div className={props.className} />;
    },
  );
  MockDataEditor.displayName = 'MockDataEditor';
  return {
    ...(await importOriginal<typeof import('../styled')>()),
    StyledGlideDataEditor: MockDataEditor,
  };
});

type Row = { id: number; text: string };

const rowsOf = (count: number): Row[] =>
  Array.from({ length: count }, (_, id) => ({ id, text: '' }));

const column = (
  extra: Partial<ColumnGlideLast<Row, unknown>> = {},
): ColumnGlideLast<Row, unknown> =>
  ({
    id: 'text',
    key: 'text',
    title: 'text',
    width: 100,
    renderCell: () => '',
    ...extra,
  } as unknown as ColumnGlideLast<Row, unknown>);

describe('TableGlide: автовысота блоков и перерисовка после догрузки', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('повторный запрос ячейки большого блока не обходит его строки заново', () => {
    const size = 100_000;
    render(
      <TableGlide
        rows={rowsOf(size)}
        columns={[column({ rowSpan: () => [0, size - 1] })]}
        rowHeight="auto"
      />,
    );
    const reporter = vi.spyOn(AutoRowHeightStore.prototype, 'reporter');

    editorProps.current.getCellContent?.([0, 0]);
    const first = reporter.mock.calls.length;
    editorProps.current.getCellContent?.([0, 0]);

    expect(first).toBeGreaterThan(size);
    expect(reporter.mock.calls.length - first).toBeLessThan(10);
  });

  it('догрузка шрифта перерисовывает и прилипшую строку вне видимой области', () => {
    render(
      <TableGlide rows={rowsOf(200)} columns={[column()]} stickyRows={[0]} />,
    );
    editorProps.current.onVisibleRegionChanged?.(
      { x: 0, y: 100, width: 1, height: 10 },
      0,
      0,
      {},
    );
    const updateCells = vi.fn();
    (fontOptions.current.dataEditorRef as { current: unknown }).current = {
      updateCells,
    };

    updateGridCells({
      ...fontOptions.current,
      visibleRows: fontOptions.current.getVisibleRows?.() ?? null,
    });

    const rows = (
      updateCells.mock.calls[0]![0] as Array<{ cell: [number, number] }>
    ).map(({ cell }) => cell[1]);
    expect(rows).toContain(0);
    expect(rows).toContain(100);
  });
});
