/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { BodyS, BodyXS, H5 } from '@ui-kit/components/Typography';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Cell Preview',
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj;

export const RenderCellPreview: Story = {
  name: 'renderCellPreview',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState<Row[]>(() => createRows(0, 15));

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        {
          key: 'id',
          name: 'ID',
          width: 80
        },
        {
          key: 'priority',
          name: 'Приоритет',
          width: 200,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              alignItems="center"
            >
              <Canvas.Badge text={row.priority} />
            </Canvas.Container>
          ),
          renderCellPreview: ({ row, cellWidth, theme }) => (
            <div
              style={{
                padding: theme.cellHorizontalPadding,
                minWidth: Math.max(cellWidth, 250),
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}
            >
              <H5>Приоритет</H5>
              <BodyS>{row.priority}</BodyS>
              <BodyXS style={{ opacity: 0.6 }}>Задача: {row.task}</BodyXS>
            </div>
          )
        },
        {
          key: 'developer',
          name: 'Разработчик',
          width: 200,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              alignItems="center"
            >
              <Canvas.Text>{row.developer}</Canvas.Text>
            </Canvas.Container>
          ),
          renderCellPreview: ({ row, cellWidth, theme }) => (
            <div
              style={{
                padding: theme.cellHorizontalPadding,
                minWidth: Math.max(cellWidth, 200),
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}
            >
              <H5>Разработчик</H5>
              <BodyS>{row.developer}</BodyS>
              <BodyXS style={{ marginTop: 4, opacity: 0.6 }}>
                Задача: {row.task}
              </BodyXS>
            </div>
          )
        },
        {
          key: 'task',
          name: 'Задача (без preview)',
          width: 220
        },
        {
          key: 'complete',
          name: 'Прогресс',
          contentFormat: 'number',
          width: 120
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '500px' }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const CellEditorAsPreview: Story = {
  name: 'cellEditorAsPreview',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState<Row[]>(() => createRows(0, 15));

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        {
          key: 'id',
          name: 'ID',
          width: 80
        },
        {
          key: 'priority',
          name: 'Приоритет (cellEditorAsPreview)',
          width: 250,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              padding={{
                left: theme.cellHorizontalPadding,
                right: theme.cellHorizontalPadding
              }}
              alignItems="center"
            >
              <Canvas.Badge text={row.priority} />
            </Canvas.Container>
          ),
          editingCell: {
            editable: false,
            component: 'inputString'
          },
          renderCellPreview: 'cellEditorAsPreview'
        },
        {
          key: 'task',
          name: 'Задача',
          width: 220
        },
        {
          key: 'complete',
          name: 'Прогресс',
          contentFormat: 'number',
          width: 120
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          editing: {
            onRowsChange: setRows,
            rowKeyGetter: (row) => row.id,
            defaultEnabled: true
          },
          containerStyle: { height: '500px' }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const DisablePreview: Story = {
  name: "renderCellPreview: 'none'",
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState<Row[]>(() => createRows(0, 15));

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        {
          key: 'id',
          name: 'ID',
          width: 80
        },
        {
          key: 'task',
          name: "Задача (preview: 'none')",
          width: 250,
          renderCellPreview: 'none'
        },
        {
          key: 'developer',
          name: 'Разработчик (стандартный preview)',
          width: 250
        },
        {
          key: 'complete',
          name: 'Прогресс',
          contentFormat: 'number',
          width: 120
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '500px' }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
