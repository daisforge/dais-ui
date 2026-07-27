/* eslint-disable react-hooks/rules-of-hooks */
import { createRowsTree, TreeRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SubRows',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;

type Story = StoryObj;

const preCode = `
import React, { useMemo, useState } from 'react';
import { Badge, ColumnConfig, Table } from '@daisforge/ui';
`;

export const SubRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Иерархичный вид',
  render: () => {
    const [rows] = useState(() => createRowsTree());

    const columns = useMemo(
      (): readonly ColumnConfig<TreeRow>[] => [
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
            },

            isColumnWithArrow: true,
            hideHeaderExpandAllArrow: false
          },
          resizable: true
        },
        {
          key: 'blockActivity',
          name: 'Активность блока'
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
            parentKeyAsDefault: true
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
          resizableColumn: true
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
