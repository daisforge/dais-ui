/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

/**
 * Универсальный стенд состояний цветов таблицы: hover строки, выделение
 * (диапазон/колонка/строка), highlightActiveType, чекбокс-строки,
 * редактируемые ячейки, ячейки с ошибкой и статусные цвета потребителя.
 * Темы переключаются глобальным тулбаром Storybook.
 */

type ColoringArgs = {
  hoverRow: boolean;
  highlightActiveType: HighlightActiveType;
  cellsSelectionMode: CellsSelectionMode;
  checkboxSelecting: boolean;
  editingEnabled: boolean;
  rowMarkers: boolean;
};

const meta: Meta<ColoringArgs> = {
  title: 'Локальные компоненты/TableCanvas/ColoringStates',
  tags: ['!autodocs'],
  args: {
    hoverRow: true,
    highlightActiveType: 'row',
    cellsSelectionMode: 'range-cell',
    checkboxSelecting: true,
    editingEnabled: true,
    rowMarkers: true,
  },
  argTypes: {
    hoverRow: {
      name: 'hoverEffects.row',
      control: 'boolean',
    },
    highlightActiveType: {
      name: 'highlightActiveType',
      control: 'inline-radio',
      options: ['row', 'disabled'],
    },
    cellsSelectionMode: {
      name: 'cellsSelection.mode',
      control: 'inline-radio',
      options: ['range-cell', 'multi-range-cell', 'cell', 'disabled'],
    },
    checkboxSelecting: {
      name: 'selecting (чекбоксы)',
      control: 'boolean',
    },
    editingEnabled: {
      name: 'editing (редактирование)',
      control: 'boolean',
    },
    rowMarkers: {
      name: 'rowMarkers (нумерация)',
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<ColoringArgs>;

// Итоговая строка (bottomSummaryRows): контент ячеек отдаёт renderSummaryCell.
type SummaryRow = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};
const renderSummaryCell = ({
  row,
  column,
}: {
  row: SummaryRow;
  column: { key: string };
}) => row.values.find((v) => v.columnId === column.key)?.value ?? '';

// Статусный цвет ячейки по приоритету. Цвет берётся из темы таблицы, а не
// задаётся фиксированным hex: так он подстраивается под каждую тему (в
// тёмной теме — тёмный). Его состояния (hover, выделение) таблица считает
// сама формулой (fill-states.ts) — это путь «свой цвет потребителя».
const PRIORITY_THEME_KEY = {
  Critical: 'bgCellNegative',
  High: 'bgCellWarning',
  Medium: 'bgCellInfo',
  Low: 'bgCellPositive',
} as const;

const priorityBgCell = (
  priority: string,
  theme: Record<
    (typeof PRIORITY_THEME_KEY)[keyof typeof PRIORITY_THEME_KEY],
    string
  >,
) => {
  const key = PRIORITY_THEME_KEY[priority as keyof typeof PRIORITY_THEME_KEY];
  return key ? { bgCell: theme[key] } : undefined;
};

export const ColoringStates: Story = {
  name: 'Состояния цветов (универсальный)',
  render: (args) => {
    const [rows, setRows] = useState<Row[]>(() => createRows(0, 40));
    const selectingState = useState<ReadonlySet<string | number>>(
      () => new Set(),
    );

    // Итоговая строка: красится bgHeader, hover/подсветку не получает.
    const bottomSummaryRows = useMemo(
      (): SummaryRow[] => [
        {
          type: 'bottom',
          values: [
            { columnId: 'id', value: 'Итого' },
            { columnId: 'task', value: `строк: ${rows.length}` },
          ],
        },
      ],
      [rows.length],
    );

    const columnConfig = useMemo(
      (): ColumnConfig<Row, SummaryRow>[] => [
        { key: 'id', name: 'ID', width: 70, renderSummaryCell },
        {
          key: 'task',
          name: 'Задача (редактируемая, ошибка на id % 7 = 0)',
          width: 320,
          renderSummaryCell,
          editingCell: {
            component: 'inputString',
            editable: true,
            error: { value: (row) => Number(row.id) % 7 === 0 },
          },
        },
        {
          key: 'priority',
          name: 'Приоритет (статусный цвет)',
          width: 220,
          themeOverride: ({ row, theme }) =>
            priorityBgCell(row.priority, theme),
        },
        {
          key: 'complete',
          name: '% (редактируемая)',
          width: 160,
          editingCell: {
            component: 'inputNumber',
            editable: true,
          },
        },
        { key: 'issueType', name: 'Тип', width: 140 },
        { key: 'developer', name: 'Разработчик', width: 220 },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '560px' },
          hoverEffects: { row: args.hoverRow },
          summaryRows: { showDefault: true, showInControl: false },
          highlightActiveType: args.highlightActiveType,
          cellsSelection: { mode: args.cellsSelectionMode },
          ...(args.rowMarkers && { rowMarkers: { startIndex: 1 } }),
          ...(args.checkboxSelecting && {
            selecting: {
              state: selectingState,
              rowKeyGetter: (r: Row) => r.id,
            },
          }),
          ...(args.editingEnabled && {
            editing: {
              onRowsChange: (newRows: Row[]) => setRows([...newRows]),
              rowKeyGetter: (r: Row) => r.id,
              defaultEnabled: true,
            },
          }),
        }}
        columnConfig={columnConfig}
        bottomSummaryRows={bottomSummaryRows}
        rows={rows}
      />
    );
  },
};
