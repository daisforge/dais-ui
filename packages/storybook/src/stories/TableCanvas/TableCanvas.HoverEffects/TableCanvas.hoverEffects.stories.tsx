/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row as TableRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { StoryHint } from '@df-storybook/utils/StoryHint';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui-kit/components/Select';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type HoverEffectsConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/HoverEffects',
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

// Варианты значения tableConfig.hoverEffects для playground:
// выключено / подсветка строки (цвета темы) / подсветка строки со своим цветом.
type HoverEffectsOption = 'disabled' | 'row' | 'row-custom-color';

const HOVER_EFFECTS_OPTIONS: readonly HoverEffectsOption[] = [
  'row',
  'row-custom-color',
  'disabled',
];

const HOVER_EFFECTS_BY_OPTION: Record<HoverEffectsOption, HoverEffectsConfig> =
  {
    disabled: {},
    row: { row: true },
    'row-custom-color': { row: { color: '#FFF6E5' } },
  };

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

const COLUMN_CONFIG: readonly ColumnConfig<TableRow>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];

const getRowSelectionKey = (row: TableRow) => row.id + row.issueType;

const preCode = `
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type HoverEffectsConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

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
 * Playground: hoverEffects.row (подсветка строки под курсором) вместе с
 * селектингом и highlightActiveType. Hover — самый нижний визуальный слой:
 * выделение ячеек/строк и «залипшая» активная строка рисуются поверх и
 * перекрывают его. Служебные колонки hovered-строки темнеют голубым (как при
 * селектинге), checkbox-строки под курсором темнеют целиком (как hover шапки).
 */
export const HoverEffectsPlayground: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [hoverOption, setHoverOption] = useState<HoverEffectsOption>('row');
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const [rows] = useState(createRows);

    const selectingStateAndSetter = useState<ReadonlySet<string | number>>(
      () =>
        new Set(
          rows
            .filter((row) => [3, 5].includes(Number(row.id)))
            .map(getRowSelectionKey),
        ),
    );

    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(
      () => COLUMN_CONFIG,
      [],
    );

    return (
      <>
        <div
          style={{ display: 'grid', gap: 12, maxWidth: 420, marginBottom: 16 }}
        >
          <div>
            hoverEffects (эффекты при наведении)
            <Select
              value={hoverOption}
              onChange={(value) => setHoverOption(value as HoverEffectsOption)}
              items={HOVER_EFFECTS_OPTIONS.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </div>

          <div>
            highlightActiveType (залипшая активная строка)
            <Select
              value={highlightActiveType}
              onChange={(value) =>
                setHighlightActiveType(value as HighlightActiveType)
              }
              items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </div>

          <div>
            cellsSelection.mode (режим выделения)
            <Select
              value={selectionMode}
              onChange={(value) =>
                setSelectionMode(value as CellsSelectionMode)
              }
              items={SELECTION_MODE_OPTIONS.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </div>
        </div>

        <StoryHint>
          Водите мышью по строкам — data-ячейки подсвечиваются серым, служебные
          колонки (нумерация/чекбокс) — голубым, как при селектинге.
          Checkbox-строки (3 и 5) под курсором темнеют целиком. Клик по строке
          (активная строка / выделение) рисуется <b>поверх</b> hover-подсветки и
          перекрывает её; после сброса выделения hover снова виден.
        </StoryHint>

        <TableCanvas
          key={[hoverOption, highlightActiveType, selectionMode].join('-')}
          tableConfig={{
            containerStyle: { height: '700px', maxWidth: 980 },
            hoverEffects: HOVER_EFFECTS_BY_OPTION[hoverOption],
            highlightActiveType,
            cellsSelection: { mode: selectionMode },
            rowMarkers: { startIndex: 1 },
            selecting: {
              state: selectingStateAndSetter,
              rowKeyGetter: getRowSelectionKey,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};

/**
 * Минимальное включение: `tableConfig.hoverEffects: { row: true }` —
 * hover-подсветка строки цветами из темы, без остальных фич.
 */
export const HoverEffectsRowSimple: Story = {
  name: 'Минимальное включение',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<TableRow>[]>(
      () => COLUMN_CONFIG,
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '600px' },
          hoverEffects: { row: true },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
