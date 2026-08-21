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
import React, { useMemo } from 'react';

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
