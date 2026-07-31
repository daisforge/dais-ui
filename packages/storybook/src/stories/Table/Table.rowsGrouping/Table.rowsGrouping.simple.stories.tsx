/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import { Stories } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

import { createRowsForGrouping, type RowForGrouping } from '../dataRowGrouping';
import TableRowsGroupingSimpleMdx from './Table.rowsGrouping.simple.mdx';

const meta: Meta = {
  title:
    'Локальные компоненты/Table/RowsGrouping/API и пример простой реализации',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <TableRowsGroupingSimpleMdx />
          <Stories />
        </>
      ),
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
  name: 'Группировка строк - Группировка данных - Агрегация данных',

  render: () => {
    const [rows] = useState(createRowsForGrouping);

    const [groupByArr, setGroupByArr] = useState<string[]>([]);

    const columnConfig = useMemo<readonly ColumnConfig<RowForGrouping>[]>(
      () => [
        {
          key: 'athlete',
          name: 'Athlete',
          rowsGrouping: {
            columnGroupLabel: 'Athlete',
          },
        },
        {
          key: 'sport',
          name: 'Sport',

          rowsGrouping: {
            columnGroupLabel: 'Sport',
          },
        },
        {
          key: 'country',
          name: 'Country',

          rowsGrouping: {
            columnGroupLabel: 'Country',
          },
        },
        {
          key: 'year',
          name: 'Year',

          rowsGrouping: {
            columnGroupLabel: 'Year',
          },
        },

        {
          key: 'gold',
          name: 'Gold',
          rowsGrouping: {
            groupByColumn: false,
            columnGroupLabel: 'Gold',
            renderGroupCell({ childRows }) {
              return childRows.reduce((prev, { gold }) => prev + gold, 0);
            },
          },
        },
      ],
      [],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: {
            enable: true,
          },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],

            groupButton: {
              defaultCustomItems: [
                { value: 'gold', label: 'Gold as custom option' },
              ],
            },
            groupedColumnProps: {
              maxWidth: 500,
              width: 350,
              minWidth: 250,
              renderCell: (props) => {
                if (props.parentGroupKey === 'Russian Federation') {
                  return 'Russia last lvl';
                }
                return props.parentGroupKey;
              },
              rowsGrouping: {
                renderGroupCell(props) {
                  if (props.groupKey === 'Russian Federation') {
                    return 'Russia';
                  }
                  return props.groupKey;
                },
              },
            },
            // groupRowReplaceTo(groupRow) {
            //   if (
            //     groupRow.groupKey === 'Russian Federation' &&
            //     groupRow.childRows[0]
            //   ) {
            //     return groupRow.childRows[0];
            //   }
            //   return groupRow;
            // },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
