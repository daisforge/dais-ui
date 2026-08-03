/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

import { sortingMock } from './mock/sorting.mock';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Sorting/Simple',
  tags: ['!autodocs'],
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui';

`;

type Story = StoryObj;

type MockRow = (typeof sortingMock.results)[number] & { _rowId: string };

const mockRows: MockRow[] = sortingMock.results.map((r, i) => ({
  ...r,
  _rowId: String(i),
}));

export const Sorting: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',

          sortingType: 'numberSort',
        },
        {
          key: 'task',
          name: 'Title',
          sortingType: 'stringSort',
        },
        {
          key: 'priority',
          name: 'Priority',
          // custom sorting
          sortingType: (a: Row, b: Row) => {
            const values = {
              Critical: 2,
              High: 3,
              Medium: 4,
              Low: 5,
            };
            const aValue = values[a.priority as keyof typeof values] ?? 0;
            const bValue = values[b.priority as keyof typeof values] ?? 0;
            return aValue - bValue;
          },
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          sortingType: 'stringSort',
        },
        {
          key: 'complete',
          name: '% Complete',

          sortingType: 'numberSort',
        },
      ],
      [],
    );

    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          sorting: {
            state: sortingStateAndSetter,
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const StringSort: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'stringSort',
  render: () => {
    const [rows] = useState(mockRows);
    const columnConfig = useMemo<readonly ColumnConfig<MockRow>[]>(
      () => [
        { key: 'UVE0367', name: 'Ключ инициативы', sortingType: 'stringSort' },
        { key: 'UVE0367_TEXT', name: 'Инициатива', sortingType: 'stringSort' },
        {
          key: 'UVE0230_TEXT',
          name: 'Направление ПАО',
          sortingType: 'stringSort',
        },
        { key: 'ZSERVICE_TEXT', name: 'АС/ФП', sortingType: 'stringSort' },
        { key: 'ZSERVICE', name: 'Код сервиса', sortingType: 'stringSort' },
        { key: 'UVE0209_TEXT', name: 'Программа', sortingType: 'stringSort' },
        { key: 'UVE0499_TEXT', name: 'AI', sortingType: 'stringSort' },
        { key: 'UVE0500_TEXT', name: 'Источник', sortingType: 'stringSort' },
      ],
      [],
    );
    const sortingState = useState<readonly SortColumn[]>([]);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          sorting: { state: sortingState },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const MixedComparators: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'numberSort + stringSort',
  render: () => {
    const [rows] = useState(mockRows);
    const columnConfig = useMemo<readonly ColumnConfig<MockRow>[]>(
      () => [
        { key: 'UVE0367', name: 'Ключ инициативы', sortingType: 'numberSort' },
        { key: 'UVE0230', name: 'Код направления', sortingType: 'numberSort' },
        { key: 'ZSERVICE', name: 'Код сервиса', sortingType: 'numberSort' },
        { key: 'UVE0367_TEXT', name: 'Инициатива', sortingType: 'stringSort' },
        {
          key: 'UVE0230_TEXT',
          name: 'Направление ПАО',
          sortingType: 'stringSort',
        },
        { key: 'ZSERVICE_TEXT', name: 'АС/ФП', sortingType: 'stringSort' },
        { key: 'UVE0209_TEXT', name: 'Программа', sortingType: 'stringSort' },
        { key: 'UVE0499_TEXT', name: 'AI', sortingType: 'stringSort' },
        { key: 'UVE0500_TEXT', name: 'Источник', sortingType: 'stringSort' },
      ],
      [],
    );
    const sortingState = useState<readonly SortColumn[]>([]);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          sorting: { state: sortingState },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
