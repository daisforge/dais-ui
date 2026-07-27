/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/InfinityScroll',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    },
    screenshot: {
      skip: true
    }
  }
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

function loadMoreRows<RowType>(props?: {
  indexForStart?: number;
  countOfNewRows?: number;
  timeout?: number;
}): Promise<RowType[]> {
  const {
    indexForStart = 0,
    countOfNewRows = 200,
    timeout = 1000
  } = props ?? {};
  return new Promise((resolve) => {
    const newRows = createRows(indexForStart, countOfNewRows) as RowType[];

    setTimeout(() => resolve(newRows), timeout);
  });
}

type Story = StoryObj;

export const InfinityScroll: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const columns: readonly ColumnConfig<Row>[] = useMemo(
      () => [
        {
          key: 'id',
          name: 'ID'
        },

        {
          key: 'task',
          name: 'Title'
        },

        {
          key: 'priority',
          name: 'Priority'
        },

        {
          key: 'issueType',
          name: 'Issue Type'
        },
        {
          key: 'developer',
          name: 'Developer'
        }
      ],
      []
    );
    const [rows, setRows] = useState(() => createRows(0, 50));

    const [isLoading, setIsLoading] = useState(false);

    const onTrigger = useCallback(
      async (rows: Row[]) => {
        if (isLoading) {
          return;
        }
        setIsLoading(true);

        const newData = await loadMoreRows<Row>({
          indexForStart: rows.length,
          countOfNewRows: 50,
          timeout: 2000
        });

        setRows((prev) => [...prev, ...newData]);
        setIsLoading(false);
      },
      [isLoading]
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },

          infinityScroll: {
            scrollThreshold: 50,
            onTrigger,
            isLoading,
            hasMore: rows.length < 6000
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
