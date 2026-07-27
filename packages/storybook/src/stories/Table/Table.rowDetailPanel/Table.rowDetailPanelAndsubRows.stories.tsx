/* eslint-disable react-hooks/rules-of-hooks */
import { createRowsTree, TreeRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { StoryTableConfigComp } from '@ui-kit/components/StoriesUtils';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { ComponentType, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/RowDetailPanel/WithSubRows',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  component: StoryTableConfigComp as ComponentType<unknown>
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

export const RowDetailAndSubRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'RowDetailAndSubRows',

  render: () => {
    const [rows] = useState(() => createRowsTree());

    const columns = useMemo<readonly ColumnConfig<TreeRow>[]>(
      () => [
        {
          key: 'block',
          name: 'Блок / Трайб / Продукт',

          subRow: {
            keyOfColumnInSubRow: (lvl) => {
              switch (lvl) {
                case 0:
                  return 'block';
                case 1:
                  return 'tribe';
                case 2:
                  return 'product';
                default:
                  return 'block';
              }
            }
          },
          resizable: true
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',

          title: '123',
          subRow: {
            isColumnWithArrow: true
          }
        },
        {
          key: '',
          minWidth: 170,

          name: 'Локация трайба',
          subRow: {
            renderSubRowCell: (props, lvl) => {
              if (lvl === 1) {
                return (
                  <Badge view="accent" size="m">
                    {props.row?.tribeZone}
                  </Badge>
                );
              }
              return null;
            }
          }
        },
        {
          key: 'q1',
          name: 'Q1',

          subRow: {
            keyOfColumnInSubRow: 'q1'
          }
        },

        {
          key: 'q2',
          name: 'Q2',
          subRow: {
            keyOfColumnInSubRow: 'q1'
          }
        },
        {
          key: 'q3',
          name: 'Q3',
          subRow: {
            keyOfColumnInSubRow: 'q1'
          }
        },
        {
          key: 'q4',
          name: 'Q4',
          subRow: {
            keyOfColumnInSubRow: 'q1'
          }
        }
      ],
      []
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },

          rowDetailPanel: {
            rowKeyGetter: (r) => r.id,
            isRowWithDetail: (r) =>
              r.id === 2 ||
              r.id === '2tribe' ||
              r.id === '2product' ||
              r.id === 3,
            renderRowDetail: ({ row }) => <div>rowDetail {row.id}</div>,
            expandButtonColumnKey: 'blockActivity',
            detailHeight: 500
          },
          resizableColumn: true
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
