/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, RenderCellProps, Table } from '@ui-kit/components/Table';
import { TextField } from '@ui-kit/components/TextField';
import { IconSber } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SimpleTable',
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

export const SimpleTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Simple Table',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
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
      [],
    );

    return (
      <Table
        tableConfig={{ containerStyle: { height: 700 } }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

function renderCoordinates(props: RenderCellProps<number, any>) {
  return `${props.column.key}×${props.row}`;
}

export const MillionCells: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'MillionCells',
  render: () => {
    const [rowsCount, setRowsCount] = useState(5000000);
    const [columnsCount, setColumnsCount] = useState(30);
    const rows: any[] = useMemo(
      () => Array.from({ length: rowsCount }, (_, i) => i),
      [rowsCount],
    );

    const columns = useMemo(() => {
      const columns: ColumnConfig<any>[] = [];

      for (let i = 0; i < columnsCount; i += 1) {
        const key = String(i);
        columns.push({
          key,
          name: key,

          width: 150,
          resizable: true,
          renderCell: renderCoordinates,
        });
      }
      return columns;
    }, [columnsCount]);

    return (
      <>
        <div style={{ display: 'flex', gap: 8 }}>
          columnsCount
          <TextField
            value={columnsCount}
            min={1}
            width={300}
            type="number"
            onChange={(e) => setColumnsCount(+e.target.value)}
          />
          rowsCount
          <TextField
            value={rowsCount}
            min={1}
            width={300}
            type="number"
            onChange={(e) => setRowsCount(+e.target.value)}
          />
        </div>

        <Table
          tableConfig={{
            containerStyle: { height: '80dvh' },
            fullScreenEnabled: true,
          }}
          columnConfig={columns}
          rows={rows}
        />
      </>
    );
  },
};
