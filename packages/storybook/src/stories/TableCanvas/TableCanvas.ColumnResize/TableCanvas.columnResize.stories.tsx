/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Column Resize',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

export const MinMaxWidth: Story = {
  name: 'minWidth / maxWidth',
  ...storySourceDoc({
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          width: 80,
        },
        {
          key: 'task',
          name: 'Title (min 150, max 400)',
          width: 250,
          minWidth: 150,
          maxWidth: 400,
        },
        {
          key: 'priority',
          name: 'Priority (min 120, max 300)',
          width: 200,
          minWidth: 120,
          maxWidth: 300,
        },
        {
          key: 'loremIpsum',
          name: 'Issue Type (max 200)',
          width: 150,
          maxWidth: 200,
        },
        {
          key: 'complete',
          name: '% Complete',
          width: 150,
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const MaxAutoWidthBasic: Story = {
  name: 'maxAutoWidth — базовый',
  ...storySourceDoc({
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID (maxAutoWidth: 120)',
          maxAutoWidth: 120,
        },
        {
          key: 'task',
          name: 'Task (maxAutoWidth: 400)',
          maxAutoWidth: 400,
        },
        {
          key: 'priority',
          name: 'Priority (без ограничений)',
        },
        {
          key: 'loremIpsum',
          name: 'Issue Type (maxAutoWidth: 200)',
          maxAutoWidth: 200,
        },
        {
          key: 'complete',
          name: '% Complete (фикс 130px)',
          width: 130,
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          resizableColumn: true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const MaxAutoWidthVsMaxWidth: Story = {
  name: 'maxAutoWidth + maxWidth (комбинация)',
  ...storySourceDoc({
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID (maxAutoWidth: 150, maxWidth: 200)',
          maxAutoWidth: 150,
          maxWidth: 200,
        },
        {
          key: 'task',
          name: 'Task (maxAutoWidth: 400)',
          maxAutoWidth: 400,
        },
        {
          key: 'priority',
          name: 'Priority (maxAutoWidth: 180, maxWidth: 180)',
          maxAutoWidth: 180,
          maxWidth: 180,
        },
        {
          key: 'loremIpsum',
          name: 'Issue (без ограничений)',
        },
        {
          key: 'complete',
          name: '% Complete (фикс 130px)',
          width: 130,
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          resizableColumn: true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const MaxAutoWidthGlobal: Story = {
  name: 'maxColumnAutoWidth (глобальный)',
  ...storySourceDoc({
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Task',
        },
        {
          key: 'priority',
          name: 'Priority (maxAutoWidth: 250 — перебивает глобальный)',
          maxAutoWidth: 250,
        },
        {
          key: 'loremIpsum',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          resizableColumn: true,
          maxColumnAutoWidth: 300,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ManualResizeBypassesMaxAutoWidth: Story = {
  name: 'maxAutoWidth не ограничивает ручной ресайз',
  ...storySourceDoc({
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID (maxAutoWidth: 100)',
          maxAutoWidth: 100,
        },
        {
          key: 'task',
          name: 'Task (maxAutoWidth: 250, maxWidth: 500)',
          maxAutoWidth: 250,
          maxWidth: 500,
        },
        {
          key: 'priority',
          name: 'Priority (maxAutoWidth: 200)',
          maxAutoWidth: 200,
        },
        {
          key: 'loremIpsum',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete (фикс 150px)',
          width: 150,
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          resizableColumn: true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
