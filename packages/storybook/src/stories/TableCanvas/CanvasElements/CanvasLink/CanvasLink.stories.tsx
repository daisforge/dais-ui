/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import React, { useMemo } from 'react';

const VIEWS = [
  'default',
  'accent',
  'secondary',
  'tertiary',
  'paragraph',
  'positive',
  'warning',
  'negative',
  'clear'
] as const;

type ViewRow = { id: string; view: (typeof VIEWS)[number] };

const rows: ViewRow[] = VIEWS.map((view) => ({ id: view, view }));

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasLink',
  tags: ['!autodocs']
};

export default meta;

const code = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'name',
    name: 'Название',
    width: 200,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Link view="accent" href={'/details/' + row.id} target="_blank">
          {row.name}
        </Canvas.Link>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '600px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

export const Default: StoryObj = {
  ...storySourceDoc({ code, previewSource: 'shown' }),
  args: {
    text: 'Link text',
    href: 'https://example.com',
    disabled: false
  },
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  render: (args) => {
    const { text, href, disabled } = args as {
      text: string;
      href: string;
      disabled: boolean;
    };

    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
      () => [
        {
          key: 'view',
          name: 'View',
          width: 100,
          renderCell: ({ row }) => (
            <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text>{row.view}</Canvas.Text>
            </Canvas.Container>
          )
        },
        {
          key: 'link',
          name: 'Link',
          width: 200,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Link
                view={row.view}
                href={href}
                target="_blank"
                disabled={disabled}
              >
                {text}
              </Canvas.Link>
            </Canvas.Container>
          )
        }
      ],
      [text, href, disabled]
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '600px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
