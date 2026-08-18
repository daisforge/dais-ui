/* eslint-disable no-underscore-dangle */
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Объединение ячеек',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'cell', value: 'cell' },
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'disabled', value: 'disabled' },
];

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: Array<{
  label: string;
  value: HighlightActiveType;
}> = [
  { label: 'row', value: 'row' },
  { label: 'disabled', value: 'disabled' },
];

// Базовый rowSpan: role/dept ПОВТОРЯЮТСЯ в данных по блоку из 3 строк (объединение —
// чистый UI-фасад над повторяющимися значениями), period/plan/fact — свои у строки.
export const RowSpanBasic: Story = {
  name: 'Базовый rowSpan (повторяющиеся данные)',
  render: () => {
    type MRow = {
      id: number;
      role: string;
      dept: string;
      period: string;
      plan: number;
      fact: number;
    };
    const GROUPS = [
      { role: 'Аналитик', dept: 'Отдел A' },
      { role: 'Разработчик', dept: 'Отдел B' },
      { role: 'Тестировщик', dept: 'Отдел C' },
      { role: 'Менеджер', dept: 'Отдел D' },
    ];
    const PERIODS = ['Q1', 'Q2', 'Q3'];
    const initialRows: MRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (const p of PERIODS) {
        initialRows.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          period: p,
          plan: counter * 10,
          fact: counter * 8,
        });
        counter += 1;
      }
    }

    const [rows, setRows] = useState<MRow[]>(initialRows);
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('disabled');

    // Блок = 3 строки одной группы. Диапазон ОДИНАКОВ для всех ячеек блока.
    const rowSpanByThree = (rowInd: number): readonly [number, number] => {
      const start = Math.floor(rowInd / 3) * 3;
      return [start, start + 2];
    };

    const columns = useMemo<readonly ColumnConfig<MRow>[]>(
      () => [
        {
          key: 'role',
          name: 'Роль (merge ×3)',
          width: 220,
          rowSpan: (ci) => rowSpanByThree(ci.rowInd),
        },
        {
          key: 'dept',
          name: 'Отдел (custom + merge ×3)',
          width: 220,
          rowSpan: (ci) => rowSpanByThree(ci.rowInd),
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              padding={8}
              alignItems="center"
              justifyContent="center"
            >
              <Canvas.Text color={theme.textDark}>{row.dept}</Canvas.Text>
            </Canvas.Container>
          ),
          copyData: (row) => row.dept,
        },
        {
          key: 'period',
          name: 'Период',
          width: 120,
          editingCell: { component: 'inputString' },
        },
        {
          key: 'plan',
          name: 'План',
          width: 120,
          editingCell: { component: 'inputNumber' },
        },
        {
          key: 'fact',
          name: 'Факт',
          width: 120,
          editingCell: { component: 'inputNumber' },
        },
      ],
      [],
    );

    return (
      <div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
          <label>
            Режим выделения:{' '}
            <select
              value={selectionMode}
              onChange={(e) =>
                setSelectionMode(e.target.value as CellsSelectionMode)
              }
            >
              {SELECTION_MODE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Highlight active:{' '}
            <select
              value={highlightActiveType}
              onChange={(e) =>
                setHighlightActiveType(e.target.value as HighlightActiveType)
              }
            >
              {HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>Роль</b> и <b>Отдел</b> слиты блоками по 3 строки. Значения РЕАЛЬНО
          повторяются в данных (Аналитик×3, Отдел A×3) — объединение только
          UI-фасад, скрытых других значений нет. Период/План/Факт — свои у строки.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            highlightActiveType,
            rowMarkers: { startIndex: 1 },
            rowSize: { default: 'medium', showInControl: true },
            cellsSelection: {
              mode: selectionMode,
              enableColumnSelection: true,
            },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
            resizableColumn: true,
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Colspan: строки-заголовки секций, первая колонка спанит всю ширину.
export const Colspan: Story = {
  name: 'Colspan (заголовок секции на всю ширину)',
  render: () => {
    type MRow = {
      id: number;
      kind: 'header' | 'data';
      label: string;
      a: string;
      b: string;
    };
    const initialRows: MRow[] = [];
    let id = 1;
    for (let s = 0; s < 3; s += 1) {
      initialRows.push({
        id: id++,
        kind: 'header',
        label: `Секция ${s + 1}`,
        a: '',
        b: '',
      });
      for (let r = 0; r < 3; r += 1) {
        initialRows.push({
          id: id++,
          kind: 'data',
          label: `Строка ${r + 1}`,
          a: `A${s}${r}`,
          b: `B${s}${r}`,
        });
      }
    }

    const [rows, setRows] = useState<MRow[]>(initialRows);

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'label',
        name: 'Заголовок / Строка',
        width: 220,
        // header-строка: colSpan=2 → спан 3 колонки (label, a, b).
        colSpan: (ci) => (ci.row.kind === 'header' ? 2 : 0),
        editingCell: { component: 'inputString' },
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="center">
            <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'a',
        name: 'A',
        width: 200,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'b',
        name: 'B',
        width: 200,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Строки-заголовки секций: первая колонка через <code>colSpan</code>{' '}
          спанит все 3 колонки. Данные-строки — обычные. Редактирование/протяжка/
          копирование включены — проверяем overlay-редактор и перенос на merged.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Прямоугольный блок: colSpan + rowSpan на ОДНОЙ origin-ячейке = блок cols×rows.
export const Rectangular: Story = {
  name: 'Прямоугольный блок (colSpan + rowSpan)',
  render: () => {
    type MRow = { id: number; a: string; b: string; c: string; d: string };
    const initialRows: MRow[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      a: `A·${i}`,
      b: `B·${i}`,
      c: `C·${i}`,
      d: `D·${i}`,
    }));

    const [rows, setRows] = useState<MRow[]>(initialRows);

    // Блок 2×3: колонки A,B × строки 1..3. На origin-колонке 'a' для этих строк:
    // colSpan=1 (2 колонки A,B) + rowSpan=[1,3] (3 строки).
    const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'a',
        name: 'A (origin)',
        width: 160,
        colSpan: (ci) => (inBlock(ci.rowInd) ? 1 : 0),
        rowSpan: (ci) => (inBlock(ci.rowInd) ? [1, 3] : null),
        editingCell: { component: 'inputString' },
        renderCell: ({ rowInd, theme }) => (
          <Canvas.Container
            padding={8}
            alignItems="center"
            justifyContent={inBlock(rowInd) ? 'center' : 'flex-start'}
          >
            <Canvas.Text color={theme.textDark}>
              {inBlock(rowInd) ? 'Блок 2×3' : `A·${rowInd}`}
            </Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'b',
        name: 'B',
        width: 160,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'c',
        name: 'C',
        width: 160,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'd',
        name: 'D',
        width: 160,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Прямоугольный блок 2×3 (колонки A,B × строки 2–4) — через{' '}
          <code>colSpan</code> + <code>rowSpan</code> на origin-ячейке A.
          Редактирование/протяжка/копирование включены — проверяем overlay на
          блоке и перенос.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};
