/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Tooltip',
  component: TableCanvas,
  parameters: {
    docs: {},
  },
  tags: ['!autodocs'],
};

export default meta;

function ExampleDefaultTooltip() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleColumnTooltipString() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title',
        headerCellTooltip: 'Колонка: Title',
        cellTooltip: ({ row, column }) => `Ячейка: ${column.name} — ${row.id}`,
      },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      {
        key: 'developer',
        name: 'Developer',
        headerCellTooltip: 'Колонка: Developer',
        cellTooltip: ({ row }) =>
          row.developer ? `Разработчик: ${row.developer}` : null,
      },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleColumnTooltipObject() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      {
        key: 'complete',
        name: '% Complete',
        cellTooltip: ({ row }) => {
          const pct = row.complete ?? 0;
          const isHigh = typeof pct === 'number' && pct >= 80;
          return {
            text: isHigh ? `${pct}% — почти готово!` : `Прогресс: ${pct}%`,
            placement: isHigh ? ('top' as const) : ('bottom' as const),
            minWidth: 15,
          };
        },
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleButtonWithTooltip() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      {
        key: 'action',
        name: 'Действие',
        renderCell: () => (
          <Canvas.Container direction="row" gap={8}>
            <Canvas.Button
              portalHoverEnabled
              tooltip="Нажмите для перехода в карточку"
              variant="secondary"
              onClick={() => {}}
            >
              Подробнее
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return <TableCanvas columnConfig={columnConfig} rows={rows} />;
}

const defaultTooltipPreCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx',
  'ExampleDefaultTooltip',
)}
`;

const columnStringPreCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx',
  'ExampleColumnTooltipString',
)}
`;

const columnObjectPreCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx',
  'ExampleColumnTooltipObject',
)}
`;

const buttonTooltipPreCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Tooltip/TableCanvasTooltip.stories.tsx',
  'ExampleButtonWithTooltip',
)}
`;

export const DefaultTooltipStory: StoryObj = {
  name: 'Встроенный тултип — hover на drag-иконку (⠿) в шапке колонки',
  ...storySourceDoc({
    previewSource: 'shown',
    code: defaultTooltipPreCode,
  }),
  render: ExampleDefaultTooltip,
};

export const ColumnTooltipStringStory: StoryObj = {
  name: 'cellTooltip (строка) — hover на ячейки Title / Developer',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnStringPreCode,
  }),
  render: ExampleColumnTooltipString,
};

export const ColumnTooltipObjectStory: StoryObj = {
  name: 'cellTooltip (объект) — hover на ячейки % Complete',
  ...storySourceDoc({
    previewSource: 'shown',
    code: columnObjectPreCode,
  }),
  render: ExampleColumnTooltipObject,
};

export const ButtonWithTooltipStory: StoryObj = {
  name: 'Canvas.Button tooltip — hover на кнопку «Подробнее»',
  ...storySourceDoc({
    previewSource: 'shown',
    code: buttonTooltipPreCode,
  }),
  render: ExampleButtonWithTooltip,
};
