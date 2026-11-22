import { type GridSelection } from '@glideappsfinal/glide-data-grid';
import { cleanup, render, screen } from '@testing-library/react';
import React, { useRef, useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { EMPTY_SELECTION } from '../hooks/selection/useNativeGridSelection';
import { TableGlide } from '../TableGlide';
import type { GlideProps, SelectionSnapshot } from '../types';

vi.mock('../styled', async (original) => {
  const { forwardRef } = await import('react');
  const Editor = forwardRef<HTMLDivElement, GlideProps>((props, _ref) => (
    <div
      data-testid="editor"
      data-regions={props.highlightRegions?.length ?? 0}
    >
      {JSON.stringify(props.gridSelection?.current?.cell ?? null)}
    </div>
  ));
  Editor.displayName = 'TestEditor';
  return {
    ...(await original<typeof import('../styled')>()),
    StyledGlideDataEditor: Editor,
  };
});

const rows = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const columns = [
  { id: 'a', title: 'А', width: 100 },
  { id: 'b', title: 'Б', width: 100 },
];
const withService = [
  { id: 'errors', title: '', width: 32, isServiceColumn: true },
  ...columns,
];
const initial: GridSelection = {
  ...EMPTY_SELECTION,
  current: {
    cell: [0, 1],
    range: { x: 0, y: 1, width: 1, height: 2 },
    rangeStack: [{ x: 1, y: 0, width: 1, height: 1 }],
  },
};
const rowKey = (row: (typeof rows)[number]) => row.id;

function Table({
  page = 1,
  mounted = true,
  loading = false,
  sorted = false,
  service = false,
  sync,
  external,
  emit,
}: {
  page?: number;
  external?: GridSelection;
  emit?: (selection: GridSelection) => void;
  mounted?: boolean;
  loading?: boolean;
  sorted?: boolean;
  service?: boolean;
  sync: (value: GridSelection) => void;
}) {
  const history = useRef<SelectionSnapshot<(typeof rows)[number]>>();
  const [selection, setSelection] = useState(initial);
  const records = sorted ? [...rows].reverse() : rows;
  return mounted ? (
    <TableGlide
      rows={records}
      columns={service ? withService : columns}
      gridSelection={external ?? selection}
      onGridSelectionChange={setSelection}
      onSelectionSync={sync}
      onSelectionEmit={emit}
      cellsSelectionMode="multi-range-cell"
      outlineEachRange
      selectionView={{
        history,
        criteria: {},
        page,
        loading,
        rows: records,
        rowKey,
      }}
    />
  ) : null;
}

describe('TableGlide при смене представления', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('после замены грида оверлеем очищает выделение и адрес вставки на другой странице', () => {
    const sync = vi.fn();
    const table = render(<Table sync={sync} />);
    expect(screen.getByTestId('editor').textContent).toBe('[0,1]');
    table.rerender(<Table sync={sync} mounted={false} page={2} />);
    table.rerender(<Table sync={sync} page={2} />);
    expect(screen.getByTestId('editor').textContent).toBe('null');
    expect(sync).toHaveBeenLastCalledWith(EMPTY_SELECTION);
  });

  it('при возврате грида принимает внешний выбор в новых координатах со служебной колонкой', () => {
    const sync = vi.fn();
    const table = render(<Table sync={sync} />);
    table.rerender(<Table sync={sync} mounted={false} />);
    const target: GridSelection = {
      ...EMPTY_SELECTION,
      current: {
        cell: [2, 0],
        range: { x: 2, y: 0, width: 1, height: 1 },
        rangeStack: [],
      },
    };
    const emit = vi.fn();
    table.rerender(<Table sync={sync} external={target} emit={emit} service />);
    expect(emit).not.toHaveBeenCalled();
    expect(screen.getByTestId('editor').textContent).toBe('[2,0]');
    expect(sync).toHaveBeenLastCalledWith(target);
  });

  it('при загрузке скрывает контуры, после ответа переносит запись и колонку ровно один раз', () => {
    const sync = vi.fn();
    const table = render(<Table sync={sync} />);
    expect(
      Number(screen.getByTestId('editor').dataset['regions']),
    ).toBeGreaterThan(0);
    table.rerender(<Table sync={sync} loading service />);
    expect(screen.getByTestId('editor').textContent).toBe('null');
    expect(screen.getByTestId('editor').dataset['regions']).toBe('0');
    table.rerender(<Table sync={sync} sorted service />);
    expect(screen.getByTestId('editor').textContent).toBe('[1,2]');
    expect(sync.mock.lastCall?.[0].current?.cell).toEqual([1, 2]);
  });
});
