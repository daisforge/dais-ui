/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { IconButtonProps } from '@ui-kit/components/IconButton';
import { StoryTableConfigComp } from '@ui-kit/components/StoriesUtils';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import { useRefTableContext } from '@ui-kit/components/Table/contexts';
import { inputStopPropagation } from '@ui-kit/components/Table/feature-filtering';
import { TextField } from '@ui-kit/components/TextField';
import {
  IconMinusSquareFill,
  IconPlusSquareFill,
  IconSber,
} from '@ui-kit/icons';
import React, { ComponentType, useMemo, useState } from 'react';

const ICONS_PROP = {
  closed: <IconPlusSquareFill color="inherit" />,
  opened: <IconMinusSquareFill color="inherit" />,
  iconButtonProps: {
    view: 'success',
  } as IconButtonProps,
};

const meta: Meta = {
  title: 'Локальные компоненты/Table/RowDetailPanel/Simple',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  component: StoryTableConfigComp as ComponentType<unknown>,
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

export const RowDetailPanel: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Row detail panel',
  render: () => {
    const [rows, setRows] = useState(createRows);

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
        tableConfig={{
          containerStyle: { height: 700 },
          editing: {
            onRowsChange: setRows,
            rowKeyGetter: (r) => r.id,
          },

          rowDetailPanel: {
            rowKeyGetter: (r) => r.id,
            isRowWithDetail: (r) => r.id === 2 || r.id === 3,
            renderRowDetail: ({ row, onRowChange, tabIndex, rowIdx }) => {
              const tableRef = useRefTableContext();
              const [value, setValue] = useState(row.complete);

              const applyChanging = () => {
                onRowChange({
                  ...row,
                  complete: value,
                });

                if (tableRef) {
                  tableRef.current?.selectCell({
                    idx: 4,
                    rowIdx: rowIdx - 1,
                  });
                }
              };

              return (
                <div>
                  complete {value}
                  <br />
                  <TextField
                    tabIndex={tabIndex}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(+e.target.value)}
                    onKeyDown={inputStopPropagation}
                  />
                  <br />
                  <Button onClick={applyChanging}>применить изменения</Button>
                </div>
              );
            },
            expandButtonColumnKey: 'issueType',
            detailHeight: 300,
            icons: ICONS_PROP,
          },
          enableVirtualization: false,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
