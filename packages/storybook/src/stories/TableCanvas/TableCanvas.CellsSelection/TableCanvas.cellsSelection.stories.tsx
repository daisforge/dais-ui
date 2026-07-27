/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Select } from '@ui-kit/components/Select';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  CompactSelection,
  type GridSelection,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CellsSelection',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;

type Story = StoryObj;

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' }
];

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty()
};

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 }
];

const preCode = `
import {
  type ColumnConfig,
  CompactSelection,
  type GridSelection,
  type CellsSelectionMode,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

const SELECTION_MODE_OPTIONS: Array<{ label: string; value: CellsSelectionMode }> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' },
];

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];

`;

/**
 * cellsSelection.mode — режим фактического (нативного) выделения ячеек.
 * cell / range-cell (по умолчанию) / disabled. По нему работают copy/paste,
 * рамка, fill-handle, затемнение шапки/нумерации.
 */
export const SelectionModes: Story = {
  name: 'Режимы выделения (cellsSelection.mode)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);

    return (
      <div>
        <div style={{ maxWidth: 320, marginBottom: 12 }}>
          <Select
            label="Режим выделения"
            value={selectionMode}
            onChange={(value) => setSelectionMode(value as CellsSelectionMode)}
            items={SELECTION_MODE_OPTIONS}
          />
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>range-cell</b> — тянем мышкой диапазон ячеек.{' '}
          <b>multi-range-cell</b> — то же + Ctrl/Cmd копит несколько диапазонов.{' '}
          <b>cell</b> — одиночная ячейка. <b>disabled</b> — выделение ячеек
          отключено.
          <br />
          Клик/драг по колонке нумерации → выделение строки (Ctrl — группа).
          Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно).
          Copy/Paste (Ctrl+C/V) работают по выделению.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: selectionMode },
            rowMarkers: { startIndex: 1 },
            editing: {
              onRowsChange: () => undefined,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

/**
 * Controlled-режим выделения: значение и сеттер живут снаружи (state-кортеж
 * tableConfig.cellsSelection.state). Можно программно задать/сбросить выделение.
 */
export const Controlled: Story = {
  name: 'Контролируемое выделение извне (controlled)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);

    const gridSelectionState = useState<GridSelection>(EMPTY_SELECTION);
    const [gridSelection, setGridSelection] = gridSelectionState;

    const summary = gridSelection.current
      ? `x=${gridSelection.current.range.x} y=${gridSelection.current.range.y} w=${gridSelection.current.range.width} h=${gridSelection.current.range.height}`
      : 'нет выделения';

    return (
      <div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 12
          }}
        >
          <Button onClick={() => setGridSelection(EMPTY_SELECTION)}>
            Сбросить выделение
          </Button>
          <Button
            onClick={() =>
              setGridSelection({
                current: {
                  cell: [1, 0],
                  range: { x: 1, y: 0, width: 2, height: 3 },
                  rangeStack: []
                },
                rows: CompactSelection.empty(),
                columns: CompactSelection.empty()
              })
            }
          >
            Выделить Title:Priority (строки 1–3)
          </Button>
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Выделение — <b>controlled</b> через{' '}
          <code>tableConfig.cellsSelection.state</code> ([value, setter]).
          Кнопки задают/сбрасывают внешний стейт, таблица реагирует.
          Контролируется нативная ось (ячейки/диапазон/смежные строки и
          колонки); несмежный Ctrl-выбор — внутренний.
          <br />
          Текущее выделение: <b>{summary}</b>.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: 'range-cell', state: gridSelectionState },
            rowMarkers: { startIndex: 1 }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

/**
 * multi-range-cell — как range-cell, но Ctrl/Cmd докидывает несколько
 * прямоугольных диапазонов. Copy — для разрозненного выбора в
 * пределах одной колонки или одной строки (промежутки схлопываются).
 */
export const MultiRangeSelect: Story = {
  name: 'Мультивыбор диапазонов (multi-range-cell)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>multi-range-cell</b>: тяни мышкой диапазон, затем <b>Ctrl/Cmd</b> +
          клик/драг — докидывай ещё диапазоны. У всех выделенных — заливка и
          рамка.
          <br />
          <b>Copy (Ctrl+C):</b> работает, если разрозненный выбор в пределах{' '}
          <b>одной колонки</b> или <b>одной строки</b> — промежутки схлопываются
          (значения копируются подряд). Разброс сразу по строкам и колонкам не
          копируется.
          <br />
          <b>Paste</b> со схлопыванием промежутков — в режиме редактирования,
          см. <b>Copy-Paste-Fill</b>.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: 'multi-range-cell' },
            rowMarkers: { startIndex: 1 }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

/**
 * enableColumnSelection / enableRowSelection — независимое включение/выключение
 * осей выделения колонок (по шапке) и строк (по нумерации). Выделение ячеек
 * (cellsSelection.mode) этими флагами не управляется.
 */
export const EnableToggles: Story = {
  name: 'Включение/выключение колонок и строк',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [enableColumnSelection, setEnableColumnSelection] = useState(true);
    const [enableRowSelection, setEnableRowSelection] = useState(true);

    return (
      <div>
        <div style={{ display: 'flex', gap: 20, marginBottom: 12 }}>
          <Checkbox
            checked={enableColumnSelection}
            onChange={(e) => setEnableColumnSelection(e.target.checked)}
            label={<div>enableColumnSelection</div>}
          />
          <Checkbox
            checked={enableRowSelection}
            onChange={(e) => setEnableRowSelection(e.target.checked)}
            label={<div>enableRowSelection</div>}
          />
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Сними галочку — клик по шапке (колонки) или по колонке нумерации
          (строки) перестанет выделять. Выделение ячеек мышью при этом
          продолжает работать.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: {
              mode: 'range-cell',
              enableColumnSelection,
              enableRowSelection
            },
            rowMarkers: { startIndex: 1 }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};
