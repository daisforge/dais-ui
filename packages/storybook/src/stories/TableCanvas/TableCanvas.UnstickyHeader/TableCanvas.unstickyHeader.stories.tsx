/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, dataObj, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/UnstickyHeader',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const SimpleUnstickyHeader: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Simple (без группировки)',
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
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
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
          unstickyHeader: true,
          containerStyle: { height: '70vh' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const WithColumnGroups: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'С группировкой колонок',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
      () => [
        {
          key: 'group-main',
          name: 'Основные',
          children: [
            {
              key: 'id',
              name: 'ID',
            },
            {
              key: 'task',
              name: 'Title',
            },
          ],
        },
        {
          key: 'group-details',
          name: 'Детали',
          children: [
            {
              key: 'priority',
              name: 'Priority',
            },
            {
              key: 'issueType',
              name: 'Issue Type',
            },
            {
              key: 'complete',
              name: '% Complete',
            },
          ],
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          unstickyHeader: true,
          containerStyle: { height: '70vh' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const WithMultiLevelGroups: StoryObj<{
  headerTreeLvl: keyof typeof dataObj;
}> = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Многоуровневая группировка',
  args: {
    headerTreeLvl: 'lvl3',
  },
  argTypes: {
    headerTreeLvl: {
      description: 'Уровни вложенности шапки таблицы',
      control: { type: 'radio' },
      options: Object.keys(dataObj),
    },
  },
  render: ({ headerTreeLvl }) => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
      () => [...(dataObj[headerTreeLvl] ?? [])],
      [headerTreeLvl],
    );

    return (
      <TableCanvas
        key={headerTreeLvl}
        tableConfig={{
          unstickyHeader: true,
          containerStyle: { height: '70vh' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const StickyVsUnstickyComparison: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Сравнение sticky vs unsticky',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
      () => [
        {
          key: 'group-main',
          name: 'Основные',
          children: [
            {
              key: 'id',
              name: 'ID',
            },
            {
              key: 'task',
              name: 'Title',
            },
          ],
        },
        {
          key: 'group-details',
          name: 'Детали',
          children: [
            {
              key: 'priority',
              name: 'Priority',
            },
            {
              key: 'complete',
              name: '% Complete',
            },
          ],
        },
      ],
      [],
    );

    return (
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: 8 }}>Sticky (по умолчанию)</h3>
          <TableCanvas
            tableConfig={{
              containerStyle: { height: '60vh' },
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: 8 }}>Unsticky</h3>
          <TableCanvas
            tableConfig={{
              unstickyHeader: true,
              containerStyle: { height: '60vh' },
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </div>
      </div>
    );
  },
};
