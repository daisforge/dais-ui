/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo } from 'react';

interface Row {
  id: number;
}

const rows: Row[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasSkeleton',
  tags: ['!autodocs'],
  parameters: {
    screenshot: {
      skip: true,
    },
  },
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'name',
    name: 'Название',
    width: 200,
    renderCell: () => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Skeleton width={120} height={16} roundness={8} animated />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '300px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

export const Default: StoryObj = {
  ...storySourceDoc({ code, previewSource: 'shown' }),
  args: {
    width: 120,
    height: 16,
    roundness: 8,
    lighter: false,
    animated: true,
  },
  argTypes: {
    width: { control: { type: 'range', min: 40, max: 300, step: 10 } },
    height: { control: { type: 'range', min: 8, max: 40, step: 2 } },
    roundness: {
      control: 'select',
      options: [0, 8, 12, 14, 16, 18, 20, 24, 28, 32, 250],
    },
    lighter: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
  render: (args) => {
    const { width, height, roundness, lighter, animated } = args as {
      width: number;
      height: number;
      roundness: number;
      lighter: boolean;
      animated: boolean;
    };

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'skeleton',
          name: 'Skeleton',
          width: 300,
          renderCell: () => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Skeleton
                width={width}
                height={height}
                roundness={roundness}
                lighter={lighter}
                animated={animated}
              />
            </Canvas.Container>
          ),
        },
      ],
      [width, height, roundness, lighter, animated],
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '300px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
