/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/RowSize',
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

export const RowSize: Story = {
  name: 'Высота строк',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
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
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          rowSize: {
            showInControl: true,
            default: 'small',
            available: ['small', 'medium', 'big'],
            onRowSizeChange: (size) => {
              // eslint-disable-next-line no-console
              console.debug('rowSize changed:', size);
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
