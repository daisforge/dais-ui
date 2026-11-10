import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CellEditorTextAreaInternal } from '../../feature-edit';
import { TREE_LVL_KEY } from '../../feature-tree/constants';
import type { ColumnConfig, EditingCellInfo } from '../../types';
import { RenderEditCell } from '../renderEditCell';

vi.mock('../../contexts', () => ({
  useRowContext: () => ({ rowSize: 'medium' }),
}));
vi.mock('../../feature-row-detail/ctx', () => ({
  useRowDetailHandlerContext: () => ({
    handleExpandRowDetail: () => undefined,
    expandButtonColumnKey: undefined,
  }),
}));
vi.mock('../../feature-edit', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../../feature-edit')>()),
  CellEditorTextAreaInternal: vi.fn(() => null),
}));

type Row = { name: string; [TREE_LVL_KEY]: number };

const editorMock = vi.mocked(CellEditorTextAreaInternal);
const editorColumn = () =>
  editorMock.mock.lastCall?.[0].column as { hasOwnRenderCell?: boolean };

const renderSubRowEditor = (subRowHasOwnRenderCell: boolean | undefined) => {
  const column = {
    key: 'name',
    subRow: {
      parentKeyAsDefault: true,
      editingCell: { component: 'inputString' },
      // Группировка ставит свою отрисовку подстрок каждой колонке.
      renderSubRowCell: () => '',
    },
    ...(subRowHasOwnRenderCell !== undefined && { subRowHasOwnRenderCell }),
  } as unknown as ColumnConfig<Row>;
  const row: Row = { name: 'a', [TREE_LVL_KEY]: 1 };
  render(
    <RenderEditCell
      editingCellInfo={{ row, column } as EditingCellInfo<Row, unknown>}
      column={column}
      tableConfigSubRows={{ getSubRows: () => undefined } as never}
      tableConfigRowDetailPanel={undefined}
      currIndex={0}
      indexZeroColKey={undefined}
      keyText="key"
    />,
  );
};

afterEach(() => {
  cleanup();
  editorMock.mockClear();
});

describe('RenderEditCell: своя отрисовка ячейки подстроки', () => {
  it('признак берётся из колонки, а не из наличия renderSubRowCell', () => {
    renderSubRowEditor(false);
    expect(editorMock).toHaveBeenCalled();
    expect(editorColumn().hasOwnRenderCell).toBe(false);
  });

  it('своя отрисовка в настройках: редактор узнаёт о ней', () => {
    renderSubRowEditor(true);
    expect(editorColumn().hasOwnRenderCell).toBe(true);
  });

  it('признака нет: своей отрисовки нет', () => {
    renderSubRowEditor(undefined);
    expect(editorColumn().hasOwnRenderCell).toBe(false);
  });
});
