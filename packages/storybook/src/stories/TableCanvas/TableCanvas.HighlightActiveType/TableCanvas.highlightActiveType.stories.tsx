/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row as TableRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Select } from '@ui-kit/components/Select';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type SIZE_GLIDE_INSTANCE as RowSize,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/HighlightActiveType',
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj;

// highlightActiveType теперь только подсветка строки: 'row' | 'disabled'.
// 'cell'/'range-cell' устарели (режим выделения задаёт cellsSelection.mode).
const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: readonly HighlightActiveType[] = [
  'row',
  'disabled'
];

const SELECTION_MODE_OPTIONS: readonly CellsSelectionMode[] = [
  'range-cell',
  'multi-range-cell',
  'cell',
  'disabled'
];

const ROW_SIZE_OPTIONS: readonly RowSize[] = ['big', 'medium', 'small'];

const ROW_MARKER_WIDTH_BY_SIZE: Record<RowSize, number> = {
  big: 48,
  medium: 32,
  small: 24
};

const COLUMN_CONFIG: readonly ColumnConfig<TableRow>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 }
];

const getRowSelectionKey = (row: TableRow) => row.id + row.issueType;

const preCode = `
import {
  type ColumnConfig,
  type HighlightActiveType,
  type CellsSelectionMode,
  type SIZE_GLIDE_INSTANCE as RowSize,
  TableCanvas,
} from '@dais-ui/ui-kit/components/TableCanvas';

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: readonly HighlightActiveType[] = [
  'row',
  'disabled',
];
const SELECTION_MODE_OPTIONS: readonly CellsSelectionMode[] = [
  'range-cell',
  'multi-range-cell',
  'cell',
  'disabled',
];
const ROW_SIZE_OPTIONS: readonly RowSize[] = ['big', 'medium', 'small'];
const ROW_MARKER_WIDTH_BY_SIZE: Record<RowSize, number> = {
  big: 48,
  medium: 32,
  small: 24,
};
const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];
const getRowSelectionKey = (row: Row) => row.id + row.issueType;

`;

/**
 * Playground: highlightActiveType (подсветка строки 'row'/'disabled') и
 * cellsSelection.mode (режим выделения ячеек) — независимые оси. Подсветка строки
 * «залипает» на кликнутой строке и темнеет, если строка выбрана чекбоксом.
 */
export const HighlightActiveTypePlayground: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const [rowSize, setRowSize] = useState<RowSize>('medium');
    const [rows] = useState(createRows);

    const selectingStateAndSetter = useState<ReadonlySet<string | number>>(
      () =>
        new Set(
          rows
            .filter((row) => [3, 5].includes(Number(row.id)))
            .map(getRowSelectionKey)
        )
    );

    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(
      () => COLUMN_CONFIG,
      []
    );

    return (
      <>
        <div
          style={{ display: 'grid', gap: 12, maxWidth: 420, marginBottom: 16 }}
        >
          <div>
            cellsSelection.mode (режим выделения)
            <Select
              value={selectionMode}
              onChange={(value) =>
                setSelectionMode(value as CellsSelectionMode)
              }
              items={SELECTION_MODE_OPTIONS.map((item) => ({
                label: item,
                value: item
              }))}
            />
          </div>

          <div>
            highlightActiveType (подсветка строки)
            <Select
              value={highlightActiveType}
              onChange={(value) =>
                setHighlightActiveType(value as HighlightActiveType)
              }
              items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map((item) => ({
                label: item,
                value: item
              }))}
            />
          </div>

          <div>
            Размер строки
            <Select
              value={rowSize}
              onChange={(value) => setRowSize(value as RowSize)}
              items={ROW_SIZE_OPTIONS.map((item) => ({
                label: item,
                value: item
              }))}
            />
          </div>
        </div>

        <TableCanvas
          key={[
            highlightActiveType,
            selectionMode,
            rowSize,
            'row-markers',
            'summary-checkbox'
          ].join('-')}
          tableConfig={{
            containerStyle: { height: '700px', maxWidth: 980 },
            rowSize: {
              default: rowSize,
              showInControl: false
            },
            cellsSelection: { mode: selectionMode },
            highlightActiveType,
            rowMarkers: {
              startIndex: 1,
              width: ROW_MARKER_WIDTH_BY_SIZE[rowSize]
            },
            selecting: {
              state: selectingStateAndSetter,
              rowKeyGetter: getRowSelectionKey
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  }
};

/**
 * Подсветкой активной строки можно управлять снаружи (controlled) через
 * state-кортеж `tableConfig.highlightActiveRow.state` ([value, setter]).
 * Значение — индекс строки (0-based) или undefined (нет подсветки).
 */
export const HighlightActiveRowControlled: Story = {
  name: 'Контролируемая подсветка строки (controlled)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(
      () => COLUMN_CONFIG,
      []
    );

    const highlightActiveRowState = useState<number | undefined>(undefined);
    const [highlightActiveRow, setHighlightActiveRow] = highlightActiveRowState;

    return (
      <>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 12
          }}
        >
          <Button onClick={() => setHighlightActiveRow(2)}>
            Подсветить строку №3
          </Button>
          <Button onClick={() => setHighlightActiveRow(undefined)}>
            Сбросить подсветку строки
          </Button>
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Подсветка активной строки — <b>controlled</b> через{' '}
          <code>tableConfig.highlightActiveRow.state</code>. Кнопки
          задают/сбрасывают внешний стейт; клик по строке тоже обновляет его.
          Подсвеченная строка: <b>{highlightActiveRow ?? '—'}</b>.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            highlightActiveType: 'row',
            rowMarkers: { startIndex: 1 },
            highlightActiveRow: { state: highlightActiveRowState }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  }
};
