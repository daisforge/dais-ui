import {
  CompactSelection,
  type GridSelection,
} from '@daisforge/glide-data-grid';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TableGlide } from '../TableGlide';
import type { ColumnGlideLast } from '../types';

type EditorProps = {
  className?: string;
  drawHeader?: (args: unknown, drawContent: () => void) => void;
  getGroupDetails?: (name: string) => unknown;
};

const editorProps = vi.hoisted(() => ({ current: {} as EditorProps }));

vi.mock('../styled', async (importOriginal) => {
  const { forwardRef } = await import('react');
  const MockDataEditor = forwardRef<HTMLDivElement, EditorProps>(
    (props, _ref) => {
      editorProps.current = props;
      return <div className={props.className} data-testid="editor" />;
    },
  );
  MockDataEditor.displayName = 'MockDataEditor';
  return {
    ...(await importOriginal<typeof import('../styled')>()),
    StyledGlideDataEditor: MockDataEditor,
  };
});

type Row = Record<string, unknown>;

const HEADER_BG = '#ffffff';

const drawHeaderOf = (columnIndex: number) => {
  const ctx = {
    fillRect: vi.fn(),
    globalAlpha: 1,
    fillStyle: '',
  } as unknown as CanvasRenderingContext2D;
  const drawContent = vi.fn();
  editorProps.current.drawHeader?.(
    {
      ctx,
      rect: { x: 0, y: 0, width: 100, height: 36 },
      columnIndex,
      hoverAmount: 0,
      isHovered: false,
      theme: { bgHeader: HEADER_BG, bgHeaderHovered: HEADER_BG },
    },
    drawContent,
  );
};

describe('TableGlide: тема шапки выделенной колонки', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('подсвечивает шапки основного и дополнительного диапазонов, оставляя промежуточную колонку без заливки', () => {
    const themes: Array<{ col: string; bgHeader?: string }> = [];
    const col = (id: string) =>
      ({
        id,
        key: id,
        title: id,
        width: 100,
        renderHeaderCell: ({
          drawArgs,
        }: {
          drawArgs: { theme: { bgHeader?: string } };
        }) => {
          themes.push({ col: id, bgHeader: drawArgs.theme.bgHeader });
          return null;
        },
      } as unknown as ColumnGlideLast<Row, unknown>);
    const selection: GridSelection = {
      current: {
        cell: [0, 0],
        range: { x: 0, y: 0, width: 1, height: 1 },
        rangeStack: [{ x: 2, y: 1, width: 1, height: 1 }],
      },
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    };

    render(
      <TableGlide
        rows={[{ a: 1 }, { b: 2 }]}
        columns={[col('a'), col('b'), col('c')]}
        cellsSelectionMode="multi-range-cell"
        gridSelection={selection}
        onGridSelectionChange={vi.fn()}
      />,
    );
    drawHeaderOf(0);
    drawHeaderOf(1);
    drawHeaderOf(2);

    expect(themes).toHaveLength(3);
    expect(themes[0]!.bgHeader).not.toBe(HEADER_BG);
    expect(themes[0]!.bgHeader).toBeTruthy();
    expect(themes[1]!.bgHeader).toBe(HEADER_BG);
    expect(themes[2]!.bgHeader).toBe(themes[0]!.bgHeader);
  });

  it('drawHeader и getGroupDetails не пересоздаются от клика, getGroupDetails меняется со сменой выделенных групп', () => {
    const col = (id: string) =>
      ({
        id,
        key: id,
        title: id,
        width: 100,
        group: 'G',
      } as unknown as ColumnGlideLast<Row, unknown>);
    const columns = [col('a'), col('b')];
    const rows = [{ a: 1 }, { a: 2 }];
    const onGridSelectionChange = vi.fn();
    const select = (range: {
      x: number;
      y: number;
      width: number;
      height: number;
    }): GridSelection => ({
      current: { cell: [range.x, range.y], range, rangeStack: [] },
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    });
    const view = (selection: GridSelection) => (
      <TableGlide
        rows={rows}
        columns={columns}
        gridSelection={selection}
        onGridSelectionChange={onGridSelectionChange}
      />
    );

    const { rerender } = render(
      view(select({ x: 0, y: 0, width: 1, height: 1 })),
    );
    const first = editorProps.current;
    // клик ниже в той же колонке: группа выделена не целиком, шапку перерисовывать незачем
    rerender(view(select({ x: 0, y: 1, width: 1, height: 1 })));
    expect(editorProps.current.drawHeader).toBe(first.drawHeader);
    expect(editorProps.current.getGroupDetails).toBe(first.getGroupDetails);
    // диапазон на обе колонки: группа выделена целиком, новая функция перерисует шапку
    rerender(view(select({ x: 0, y: 0, width: 2, height: 1 })));
    expect(editorProps.current.drawHeader).toBe(first.drawHeader);
    expect(editorProps.current.getGroupDetails).not.toBe(first.getGroupDetails);
  });
});
