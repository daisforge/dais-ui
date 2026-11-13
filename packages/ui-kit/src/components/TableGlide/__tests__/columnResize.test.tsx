import type { GridColumn } from '@glideappsfinal/glide-data-grid';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TableGlide } from '../TableGlide';
import type { TableGlideProps } from '../types';

type EditorProps = {
  className?: string;
  columns?: GridColumn[];
  onColumnResize?: (
    column: GridColumn,
    newSize: number,
    columnIndex: number,
    newSizeWithGrow: number,
  ) => void;
};

vi.mock('../styled', async (importOriginal) => {
  const { forwardRef } = await import('react');
  const MockDataEditor = forwardRef<HTMLDivElement, EditorProps>(
    (props, _ref) => {
      return (
        <div className={props.className} data-testid="data-editor">
          <output data-testid="column-widths">
            {props.columns
              ?.map((column) => ('width' in column ? column.width : undefined))
              .join(',')}
          </output>
          {props.columns?.map((column, columnIndex) =>
            [150, 220].map((width) => (
              <button
                key={`${column.id}-${width}`}
                type="button"
                aria-label={`изменить колонку ${column.id} на ${width}px`}
                onClick={() =>
                  props.onColumnResize?.(column, width, columnIndex, width)
                }
              />
            )),
          )}
        </div>
      );
    },
  );
  MockDataEditor.displayName = 'MockDataEditor';

  return {
    ...(await importOriginal<typeof import('../styled')>()),
    StyledGlideDataEditor: MockDataEditor,
  };
});

type Row = Record<string, unknown>;
type Column = TableGlideProps<Row, unknown>['columns'][number];

const createColumns = (): Column[] =>
  [
    { id: 'a', title: 'A', width: 100 },
    { id: 'b', title: 'B', width: 100 },
    { id: 'c', title: 'C', width: 100 },
  ] as Column[];

function ControlledTableWithSelectedColumns() {
  const [columns, setColumns] = useState(createColumns);
  const selectedColumnIndexes = [0, 1];

  const handleColumnResize: NonNullable<
    TableGlideProps<Row, unknown>['onColumnResize']
  > = (_column, width) => {
    // Имитируем массовый resize потребителя: обновляются все выбранные колонки.
    setColumns((current) =>
      current.map((column, index) =>
        selectedColumnIndexes.includes(index) ? { ...column, width } : column,
      ),
    );
  };

  return (
    <TableGlide
      columns={columns}
      rows={[]}
      onColumnResize={handleColumnResize}
      resizableColumn
    />
  );
}

describe('TableGlide — обновление ширины выбранных колонок', () => {
  beforeEach(() => {
    // jsdom не рисует canvas; тест проверяет связь callback и обновлённых props.
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('после повторного resize отображает последние ширины всего выбранного набора', () => {
    render(<ControlledTableWithSelectedColumns />);

    fireEvent.click(
      screen.getByRole('button', { name: 'изменить колонку a на 150px' }),
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('150,150,100');

    fireEvent.click(
      screen.getByRole('button', { name: 'изменить колонку b на 220px' }),
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('220,220,100');
  });
});
