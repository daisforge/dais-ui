/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';
import { SortColumn } from 'react-data-grid';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Sorting/Simple',
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  tags: ['!autodocs'],
};

export default meta;

const preCode = `
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`;

type Story = StoryObj;

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
      <Table
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
