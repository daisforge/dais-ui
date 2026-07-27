/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import React, { useMemo } from 'react';

interface Row {
  id: number;
}

const rows: Row[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasCheckbox',
  tags: ['!autodocs']
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'select',
    name: '',
    width: 50,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Checkbox checked={row.selected} />
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
    checked: false,
    indeterminate: false,
    disabled: false
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  render: (args) => {
    const { checked, indeterminate, disabled } = args as {
      checked: boolean;
      indeterminate: boolean;
      disabled: boolean;
    };

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'checkbox',
          name: 'Checkbox',
          width: 300,
          renderCell: () => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Checkbox
                checked={checked}
                indeterminate={indeterminate}
                disabled={disabled}
              />
            </Canvas.Container>
          )
        }
      ],
      [checked, indeterminate, disabled]
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
