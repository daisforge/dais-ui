/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, SortColumn, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/ColumnResizing',
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

type Story = StoryObj;

export const ColumnResizing: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Изменение ширины колонки',
  render: () => {
    const [rows] = useState(createRows);

    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          resizable: true,
          minWidth: 200,
          width: 300,
          maxWidth: 500,
          sortingType: 'stringSort'
        },
        {
          key: 'task',
          name: 'Title',
          resizable: true,
          minWidth: 200,
          sortingType: 'stringSort'
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          sortingType: 'stringSort',
          resizable: true
        },
        {
          key: 'priority',
          name: 'Priority',
          sortingType: 'stringSort',
          resizable: false
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          columnsControl: {
            enable: true,
            pinnedDefault: ['task']
          },
          resizableColumn: true,
          sorting: {
            state: sortingStateAndSetter
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
