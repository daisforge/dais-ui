/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo } from 'react';

const VIEWS = [
  'default',
  'primary',
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
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasButton',
  tags: ['!autodocs'],
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'action',
    name: 'Действие',
    width: 160,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Button view="accent" size="m" onClick={() => console.log(row)}>
          Click me
        </Canvas.Button>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '700px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

export const Default: StoryObj = {
  ...storySourceDoc({ code, previewSource: 'shown' }),
  args: {
    text: 'Click me',
    disabled: false,
  },
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  render: (args) => {
    const { text, disabled } = args as {
      text: string;
      disabled: boolean;
    };

    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
      () =>
        SIZES.map((size) => ({
          key: size,
          name: size,
          width: 160,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Button view={row.view} size={size} disabled={disabled}>
                {text}
              </Canvas.Button>
            </Canvas.Container>
          ),
        })),
      [text, disabled],
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '700px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
