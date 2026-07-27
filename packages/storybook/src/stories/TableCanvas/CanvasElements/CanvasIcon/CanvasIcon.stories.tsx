/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { IconChevronLeft, IconPlasma, IconSearch } from '@ui-kit/icons';
import React, { useMemo } from 'react';

const ICON_MAP: Record<string, string> = {
  search: Canvas.icon(<IconSearch />),
  plasma: Canvas.icon(<IconPlasma />),
  chevron: Canvas.icon(<IconChevronLeft />)
};

const ICON_NAMES = Object.keys(ICON_MAP);

interface Row {
  id: number;
}

const rows: Row[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasIcon',
  tags: ['!autodocs']
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSearch } from '@daisforge/ui/icons';

const icon = Canvas.icon(<IconSearch />);

const columnConfig: ColumnConfig[] = [
  {
    key: 'icon',
    name: 'Иконка',
    width: 80,
    renderCell: () => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Icon icon={icon} size={20} color="#0B7ECB" />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '200px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

export const Default: StoryObj = {
  ...storySourceDoc({ code, previewSource: 'shown' }),
  args: {
    icon: 'search',
    size: 20,
    color: '#0B7ECB'
  },
  argTypes: {
    icon: { control: 'select', options: ICON_NAMES },
    size: { control: { type: 'range', min: 12, max: 40, step: 2 } },
    color: { control: 'color' }
  },
  render: (args) => {
    const { icon, size, color } = args as {
      icon: string;
      size: number;
      color: string;
    };

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'icon',
          name: 'Icon',
          width: 300,
          renderCell: () => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Icon icon={ICON_MAP[icon]} size={size} color={color} />
            </Canvas.Container>
          )
        }
      ],
      [icon, size, color]
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '200px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
