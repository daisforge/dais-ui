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

// Статусные цвета потребителя (hex — состояния hover/active считаются формулой)
const PRIORITY_COLORS: Record<string, string> = {
  Critical: '#FFE0E3',
  High: '#FEE2D2',
  Medium: '#CFECFF',
  Low: '#9EFAAF',
};

export const ColoringStates: Story = {
  name: 'Состояния цветов (универсальный)',
  render: (args) => {
    const [rows, setRows] = useState<Row[]>(() => createRows(0, 40));
    const selectingState = useState<ReadonlySet<string | number>>(
      () => new Set(),
    );

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        { key: 'id', name: 'ID', width: 70 },
        {
          key: 'task',
          name: 'Задача (редактируемая, ошибка на id % 7 = 0)',
          width: 320,
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
          themeOverride: ({ row }) => {
            const bgCell = PRIORITY_COLORS[row.priority];
            return bgCell ? { bgCell } : undefined;
          },
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
        rows={rows}
      />
    );
  },
};
