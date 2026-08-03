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

const DIRECTIONS = ['row', 'column'] as const;
const ALIGN_ITEMS = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
const JUSTIFY = ['flex-start', 'center', 'flex-end', 'space-between'] as const;

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer',
  tags: ['!autodocs'],
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'composite',
    name: 'Композиция',
    width: 500,
    renderCell: () => (
      <Canvas.Container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={8}
        padding={8}
      >
        <Canvas.Badge text="Badge" view="accent" size="s" />
        <Canvas.Text>Text</Canvas.Text>
        <Canvas.Button view="accent" size="xs">Button</Canvas.Button>
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
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    padding: 8,
    width: 0,
    height: 0,
    backgroundColor: '',
  },
  argTypes: {
    direction: { control: 'select', options: DIRECTIONS },
    alignItems: { control: 'select', options: ALIGN_ITEMS },
    justifyContent: { control: 'select', options: JUSTIFY },
    gap: { control: { type: 'range', min: 0, max: 24, step: 2 } },
    padding: { control: { type: 'range', min: 0, max: 24, step: 2 } },
    width: { control: { type: 'range', min: 0, max: 500, step: 10 } },
    height: { control: { type: 'range', min: 0, max: 200, step: 10 } },
    backgroundColor: { control: 'color' },
  },
  render: (args) => {
    const {
      direction,
      alignItems,
      justifyContent,
      gap,
      padding,
      width,
      height,
      backgroundColor,
    } = args as {
      direction: (typeof DIRECTIONS)[number];
      alignItems: (typeof ALIGN_ITEMS)[number];
      justifyContent: (typeof JUSTIFY)[number];
      gap: number;
      padding: number;
      width: number;
      height: number;
      backgroundColor: string;
    };

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'container',
          name: 'Container',
          width: 500,
          renderCell: () => (
            <Canvas.Container
              direction={direction}
              alignItems={alignItems}
              justifyContent={justifyContent}
              gap={gap}
              padding={padding}
              style={{
                ...(width > 0 ? { width } : {}),
                ...(height > 0 ? { height } : {}),
              }}
              backgroundColor={backgroundColor || 'gray'}
            >
              <Canvas.Badge text="Badge" view="accent" size="s" />
              <Canvas.Text>Text</Canvas.Text>
              <Canvas.Button view="accent" size="xs">
                Button
              </Canvas.Button>
            </Canvas.Container>
          ),
        },
      ],
      [
        direction,
        alignItems,
        justifyContent,
        gap,
        padding,
        width,
        height,
        backgroundColor,
      ],
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '200px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
