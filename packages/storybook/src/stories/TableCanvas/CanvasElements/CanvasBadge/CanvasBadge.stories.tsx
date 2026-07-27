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
  'positive',
  'warning',
  'negative',
  'dark',
  'light'
] as const;

const SIZES = ['xs', 's', 'm', 'l'] as const;

type ViewRow = { id: string; view: (typeof VIEWS)[number] };

const rows: ViewRow[] = VIEWS.map((view) => ({ id: view, view }));

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasBadge',
  tags: ['!autodocs']
};

export default meta;

const customColorsCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'status',
    name: 'Статус',
    width: 200,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge
          text={row.status}
          view="default"
          customColor="#FFFFFF"
          customBackgroundColor="#0B7ECB"
        />
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

const defaultCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@dais-ui/ui-kit/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'status',
    name: 'Статус',
    width: 120,
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.status} view="accent" size="s" />
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '400px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

export const CustomColors: StoryObj = {
  name: 'Custom Colors',
  ...storySourceDoc({ code: customColorsCode, previewSource: 'shown' }),
  render: () => {
    type CustomRow = { id: string; label: string; bg: string; text: string };

    const customRows: CustomRow[] = [
      { id: '1', label: 'Info', bg: '#0B7ECB', text: '#FFFFFF' },
      { id: '2', label: 'Custom green', bg: '#108E26', text: '#FFFFFF' },
      {
        id: '3',
        label: 'Transparent custom',
        bg: 'rgba(11, 126, 203, 0.12)',
        text: '#0B7ECB'
      },
      { id: '4', label: 'Orange', bg: '#FA5F05', text: '#FFFFFF' },
      { id: '5', label: 'Default view', bg: '', text: '' }
    ];

    const columnConfig = useMemo<readonly ColumnConfig<CustomRow>[]>(
      () => [
        { key: 'id', name: 'ID', width: 60 },
        {
          key: 'solid',
          name: 'Solid',
          width: 200,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge
                text={row.label}
                view="default"
                customColor={row.text || undefined}
                customBackgroundColor={row.bg || undefined}
              />
            </Canvas.Container>
          )
        },
        {
          key: 'pilled',
          name: 'Pilled',
          width: 200,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge
                text={row.label}
                view="default"
                pilled
                customColor={row.text || undefined}
                customBackgroundColor={row.bg || undefined}
              />
            </Canvas.Container>
          )
        },
        {
          key: 'transparent',
          name: 'Transparent',
          width: 200,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge
                text={row.label}
                view="default"
                transparent
                customColor={row.text || undefined}
                customBackgroundColor={row.bg || undefined}
              />
            </Canvas.Container>
          )
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '300px' } }}
        columnConfig={columnConfig}
        rows={customRows}
      />
    );
  }
};

export const Default: StoryObj = {
  ...storySourceDoc({ code: defaultCode, previewSource: 'shown' }),
  args: {
    text: 'Badge',
    transparent: false,
    clear: false,
    pilled: false
  },
  argTypes: {
    text: { control: 'text' },
    transparent: { control: 'boolean' },
    clear: { control: 'boolean' },
    pilled: { control: 'boolean' }
  },
  render: (args) => {
    const { text, transparent, clear, pilled } = args as {
      text: string;
      transparent: boolean;
      clear: boolean;
      pilled: boolean;
    };

    const columnConfig = useMemo<readonly ColumnConfig<ViewRow>[]>(
      () =>
        SIZES.map((size) => ({
          key: size,
          name: size,
          width: 120,
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge
                text={text}
                view={row.view}
                size={size}
                transparent={transparent}
                clear={clear}
                pilled={pilled}
              />
            </Canvas.Container>
          )
        })),
      [text, transparent, clear, pilled]
    );

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: '400px' } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
