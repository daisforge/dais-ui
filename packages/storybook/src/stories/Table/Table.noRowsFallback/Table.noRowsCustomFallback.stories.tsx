/* eslint-disable react-hooks/rules-of-hooks */
import { type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import { Table } from '@ui-kit/components/Table';
import { IconSber } from '@ui-kit/icons';
import React, { ComponentProps, ReactNode, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/No Rows Fallback/Custom',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
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

const CustomFallback = (
  <Box
    $css={{
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Нет данных
  </Box>
);

type Story = StoryObj<
  Pick<ComponentProps<typeof Table>, 'columnConfig'> & {
    noRowsFallback: { custom: ReactNode };
  }
>;

export const NoRowsCustomFallback: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Кастомизация контента "Нет данных"',
  args: {
    noRowsFallback: { custom: CustomFallback },
    columnConfig: [
      {
        key: 'id',
        name: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            id
            <IconSber size="xs" color="inherit" />
          </div>
        ),
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
  },
  render: ({ columnConfig, noRowsFallback }) => {
    const [rows] = useState<Row[]>([]);

    return (
      <Table
        tableConfig={{
          noRowsFallback,

          containerStyle: { height: 500 },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
