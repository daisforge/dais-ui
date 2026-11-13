import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TableGlide } from '../TableGlide';
import type { ColumnGlideLast } from '../types';

type EditorProps = {
  className?: string;
  drawHeader?: (args: unknown, drawContent: () => void) => void;
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

  it('renderHeaderCell выделенной колонки получает цвет выделения в теме, остальные прежнюю тему', () => {
    const themes: Array<{ col: string; bgHeader?: string }> = [];
    const col = (id: string) =>
      ({
        id,
        key: id,
        title: id,
        width: 100,
        renderHeaderCell: ({ drawArgs }: { drawArgs: { theme: { bgHeader?: string } } }) => {
          themes.push({ col: id, bgHeader: drawArgs.theme.bgHeader });
          return null;
        },
      } as unknown as ColumnGlideLast<Row, unknown>);
    const selection: GridSelection = {
      current: {
        cell: [0, 0],
        range: { x: 0, y: 0, width: 1, height: 1 },
        rangeStack: [],
      },
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
    };

    render(
      <TableGlide
        rows={[{ a: 1 }, { b: 2 }]}
        columns={[col('a'), col('b')]}
        gridSelection={selection}
        onGridSelectionChange={vi.fn()}
      />,
    );
    drawHeaderOf(0);
    drawHeaderOf(1);

    expect(themes).toHaveLength(2);
    expect(themes[0]!.bgHeader).not.toBe(HEADER_BG);
    expect(themes[0]!.bgHeader).toBeTruthy();
    expect(themes[1]!.bgHeader).toBe(HEADER_BG);
  });
});
