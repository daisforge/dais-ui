import type { GridColumn } from '@daisforge/glide-data-grid';
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
  onColumnResizeStart?: (
    column: GridColumn,
    newSize: number,
    columnIndex: number,
    newSizeWithGrow: number,
  ) => void;
  onColumnResizeEnd?: (
    column: GridColumn,
    newSize: number,
    columnIndex: number,
    newSizeWithGrow: number,
  ) => void;
};

vi.mock('../styled', async (importOriginal) => {
  const { forwardRef } = await import('react');
  const MockDataEditor = forwardRef<HTMLDivElement, EditorProps>(
    (props, _ref) => (
      <div className={props.className} data-testid="data-editor">
        <output data-testid="column-widths">
          {props.columns
            ?.map((column) => ('width' in column ? column.width : undefined))
            .join(',')}
        </output>
        {props.columns?.map((column, columnIndex) => (
          <React.Fragment key={column.id}>
            <button
              type="button"
              aria-label={`начать изменение колонки ${column.id}`}
              onClick={() =>
                props.onColumnResizeStart?.(
                  column,
                  'width' in column ? column.width : 100,
                  columnIndex,
                  'width' in column ? column.width : 100,
                )
              }
            />
            <button
              type="button"
              aria-label={`начать изменение колонки ${column.id} с другим индексом`}
              onClick={() =>
                props.onColumnResizeStart?.(
                  column,
                  'width' in column ? column.width : 100,
                  columnIndex + 1,
                  'width' in column ? column.width : 100,
                )
              }
            />
            {[150, 160, 220].map((width) => (
              <button
                key={width}
                type="button"
                aria-label={`изменить колонку ${column.id} на ${width}px`}
                onClick={() =>
                  props.onColumnResize?.(column, width, columnIndex, width)
                }
              />
            ))}
            <button
              type="button"
              aria-label={`завершить изменение колонки ${column.id}`}
              onClick={() =>
                props.onColumnResizeEnd?.(
                  column,
                  'width' in column ? column.width : 100,
                  columnIndex,
                  'width' in column ? column.width : 100,
                )
              }
            />
          </React.Fragment>
        ))}
      </div>
    ),
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

function ControlledTableWithWidthLimit() {
  const [columns, setColumns] = useState(createColumns);

  const handleColumnResize: NonNullable<
    TableGlideProps<Row, unknown>['onColumnResize']
  > = (resizedColumn, width) => {
    if (resizedColumn.id !== 'a') return;

    // Имитируем потребителя, который ограничивает ширину колонки сверху.
    setColumns((current) =>
      current.map((column) =>
        column.id === 'a' ? { ...column, width: Math.min(width, 150) } : column,
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

  it('сохраняет локальную ширину после скрытия и повторного показа колонки', () => {
    const columns = createColumns();
    const { rerender } = render(
      <TableGlide columns={columns} rows={[]} resizableColumn />,
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'изменить колонку a на 150px' }),
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('150,100,100');

    rerender(
      <TableGlide columns={columns.slice(1)} rows={[]} resizableColumn />,
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('100,100');

    rerender(<TableGlide columns={columns} rows={[]} resizableColumn />);
    expect(screen.getByTestId('column-widths').textContent).toBe('150,100,100');
  });

  it('находит исходную ширину по id, если индекс колонки не совпал', () => {
    const columns = createColumns().map((column) =>
      column.id === 'b' ? { ...column, width: 120 } : column,
    );
    render(<TableGlide columns={columns} rows={[]} resizableColumn />);

    fireEvent.click(
      screen.getByRole('button', {
        name: 'начать изменение колонки a с другим индексом',
      }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'изменить колонку a на 150px' }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'завершить изменение колонки a' }),
    );

    expect(screen.getByTestId('column-widths').textContent).toBe('150,120,100');
  });

  it('после окончания resize показывает ширину, ограниченную потребителем', () => {
    render(<ControlledTableWithWidthLimit />);

    fireEvent.click(
      screen.getByRole('button', { name: 'начать изменение колонки a' }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'изменить колонку a на 160px' }),
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('160,100,100');

    fireEvent.click(
      screen.getByRole('button', { name: 'завершить изменение колонки a' }),
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('150,100,100');
  });

  it('не применяет промежуточные props до окончания drag', () => {
    const initialColumns = createColumns();
    const { rerender } = render(
      <TableGlide columns={initialColumns} rows={[]} resizableColumn />,
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'начать изменение колонки a' }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'изменить колонку a на 160px' }),
    );

    rerender(
      <TableGlide
        columns={initialColumns.map((column, index) =>
          index === 0 ? { ...column, width: 140 } : column,
        )}
        rows={[]}
        resizableColumn
      />,
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('160,100,100');

    fireEvent.click(
      screen.getByRole('button', { name: 'завершить изменение колонки a' }),
    );
    expect(screen.getByTestId('column-widths').textContent).toBe('140,100,100');
  });

  it('сохраняет внешние callbacks начала и конца изменения ширины', () => {
    const columns = createColumns();
    const onResizeStart = vi.fn();
    const onResizeEnd = vi.fn();

    render(
      <TableGlide
        columns={columns}
        rows={[]}
        onColumnResizeStart={onResizeStart}
        onColumnResizeEnd={onResizeEnd}
        resizableColumn
      />,
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'начать изменение колонки a' }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'завершить изменение колонки a' }),
    );

    expect(onResizeStart).toHaveBeenCalledOnce();
    expect(onResizeEnd).toHaveBeenCalledOnce();
  });
});
