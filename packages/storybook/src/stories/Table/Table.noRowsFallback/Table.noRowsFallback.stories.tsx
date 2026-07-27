/* eslint-disable react-hooks/rules-of-hooks */
import { type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@ui-kit/components/Table';
import { IconSber } from '@ui-kit/icons';
import React, { ComponentProps, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/No Rows Fallback/Simple',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
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

type Story = StoryObj<
  Pick<ComponentProps<typeof Table>, 'columnConfig'> & {
    noRowsFallback: boolean;
  }
>;

export const NoRowsFallback: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Нет данных',
  args: {
    noRowsFallback: true,
    columnConfig: [
      {
        key: 'id',
        name: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            id
            <IconSber size="xs" color="inherit" />
          </div>
        )
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
        key: 'complete',
        name: '% Complete'
      }
    ]
  },
  argTypes: {
    noRowsFallback: {
      control: 'boolean'
    }
  },
  render: ({ noRowsFallback, columnConfig }) => {
    const [rows] = useState<Row[]>([]);

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          noRowsFallback
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
