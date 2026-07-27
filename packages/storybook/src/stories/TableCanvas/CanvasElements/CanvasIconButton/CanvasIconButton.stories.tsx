/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { IconSearch } from '@ui-kit/icons';
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
  'white'
] as const;

const SIZES = ['xs', 's', 'm', 'l'] as const;

type ViewRow = { id: string; view: (typeof VIEWS)[number] };

const rows: ViewRow[] = VIEWS.map((view) => ({ id: view, view }));

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasIconButton',
  tags: ['!autodocs']
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';
import { IconSearch } from '@dais-ui/ui-kit/icons';

const icon = Canvas.icon(<IconSearch />);

const columnConfig: ColumnConfig[] = [
  {
    key: 'action',
    name: '',
    width: 80,
    renderCell: () => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.IconButton icon={icon} view="accent" buttonSize="m" />
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
    disabled: false
  },
  argTypes: {
    disabled: { control: 'boolean' }
  },
  render: (args) => {
    const { disabled } = args as { disabled: boolean };
    const icon = Canvas.icon(<IconSearch />);

    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
      () =>
        SIZES.map((size) => ({
          key: size,
          name: size,
          width: 80,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.IconButton
                icon={icon}
                view={row.view}
                buttonSize={size}
                disabled={disabled}
              />
            </Canvas.Container>
          )
        })),
      [disabled, icon]
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '700px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
