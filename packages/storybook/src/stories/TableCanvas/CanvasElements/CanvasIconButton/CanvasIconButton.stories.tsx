/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconSearch } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const VIEWS = [
  'default',
  'accent',
  'secondary',
  'clear',
  'success',
  'warning',
  'critical',
  'dark',
  'black',
  'white',
] as const;

const SIZES = ['xs', 's', 'm', 'l'] as const;

type ViewRow = { id: string; view: (typeof VIEWS)[number] };

const rows: ViewRow[] = VIEWS.map((view) => ({ id: view, view }));

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasIconButton',
  tags: ['!autodocs'],
};

export default meta;

function Example(args: unknown) {
  const { disabled } = args as { disabled: boolean };

  const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
    () =>
      SIZES.map((size) => ({
        key: size,
        name: size,
        width: 80,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.IconButton
              icon={<IconSearch />}
              view={row.view}
              buttonSize={size}
              disabled={disabled}
            />
          </Canvas.Container>
        ),
      })),
    [disabled],
  );

  return (
    <TableCanvas
      tableConfig={{ containerStyle: { height: '800px' }, rowHeight: 80 }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx',
  'Example',
)}
`;

export const Default: StoryObj = {
  ...storySourceDoc({ code, previewSource: 'shown' }),
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
  render: Example,
};

type TaskRow = { id: number; task: string };

const TASK_ROWS: TaskRow[] = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  task: `Задача ${index + 1}`,
}));

function InteractionExample() {
  const [log, setLog] = useState<string[]>([]);
  const pushLog = (message: string) =>
    setLog((prev) => [message, ...prev].slice(0, 5));

  const columnConfig = useMemo<readonly ColumnConfig<TaskRow>[]>(
    () => [
      { key: 'task', name: 'Задача', width: 120 },
      {
        key: 'normal',
        name: 'Без interaction',
        width: 150,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.IconButton
              icon={<IconSearch />}
              view="clear"
              buttonSize="xs"
              onClick={() =>
                pushLog(`кнопка без interaction, строка ${row.id}`)
              }
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'keep',
        name: 'С interaction',
        width: 150,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.IconButton
              icon={<IconSearch />}
              view="clear"
              buttonSize="xs"
              interaction={{ selection: 'keep', cellClick: 'stop' }}
              onClick={() => pushLog(`кнопка с interaction, строка ${row.id}`)}
            />
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return (
    <div>
      <p style={{ minHeight: 100, fontSize: 13, marginBottom: 8 }}>
        {log.length === 0
          ? 'событий пока нет'
          : log.map((line, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={index} style={{ display: 'block' }}>
                {line}
              </span>
            ))}
      </p>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '400px' },
          onCellClicked: ([col, row]) =>
            pushLog(`onCellClicked: колонка ${col}, строка ${row + 1}`),
        }}
        columnConfig={columnConfig}
        rows={TASK_ROWS}
      />
    </div>
  );
}

const interactionCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/CanvasElements/CanvasIconButton/CanvasIconButton.stories.tsx',
  'InteractionExample',
)}
`;

/**
 * `interaction` у кнопки в ячейке: клик по ней не переносит выделение и не доходит до
 * `onCellClicked`, как у шеврона дерева или действия в строке.
 */
export const Interaction: StoryObj = {
  name: 'Клик без выделения ячейки (interaction)',
  ...storySourceDoc({ code: interactionCode, previewSource: 'shown' }),
  render: () => <InteractionExample />,
};
