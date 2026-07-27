/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import { textNegative, textWarning } from '@ui-kit/tokens';
import React, { useCallback, useMemo, useState } from 'react';
import { RenderSummaryCellProps } from 'react-data-grid';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SummaryRows',
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
} from '@dais-ui/ui-kit';
import { IconAddOutline, IconBoxOutline, IconSber } from '@dais-ui/ui-kit/icons';
`;

type Story = StoryObj;

type TSummaryRowData = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

export const SummaryRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const [rows] = useState(createRows);

    const topSummaryRowsData: TSummaryRowData[] = [
      {
        type: 'top',
        values: [
          {
            columnId: 'id',
            value: 'Итого'
          },
          {
            columnId: 'priority',
            value: `Критичных приоритетов ${
              rows.filter((el) => el.priority === 'Critical').length
            }`
          }
        ]
      },
      {
        type: 'top',
        values: [
          {
            columnId: 'id',
            value: 'Итого'
          },
          {
            columnId: 'priority',
            value: `Высоких приоритетов ${
              rows.filter((el) => el.priority === 'High').length
            }`
          }
        ]
      }
    ];

    const bottomSummaryRowsData: TSummaryRowData[] = [
      {
        type: 'bottom',
        values: [
          { columnId: 'id', value: 'Итого' },
          { columnId: 'task', value: `Всего тасков ${rows.length}` },
          {
            columnId: 'priority',
            value: `Средних приоритетов ${
              rows.filter((el) => el.priority === 'Medium').length
            }`
          }
        ]
      }
    ];

    const renderCommonSummaryCell = useCallback(
      (props: RenderSummaryCellProps<unknown, Row>) =>
        (props.row as TSummaryRowData).values.find(
          (el) => el.columnId === props.column.key
        )?.value,
      []
    );

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          renderSummaryCell: renderCommonSummaryCell
        },
        {
          key: 'task',
          name: 'Title',
          renderSummaryCell: renderCommonSummaryCell
        },
        {
          key: 'priority',
          name: 'Priority',
          renderSummaryCell: (props) => {
            const rowData = props.row as TSummaryRowData;
            return (
              <div
                style={{
                  color: rowData.type === 'top' ? textNegative : textWarning
                }}
              >
                {renderCommonSummaryCell(props)}
              </div>
            );
          }
        },
        {
          key: 'issueType',
          name: 'Issue Type'
        },
        {
          key: 'complete',
          name: '% Complete'
        }
      ],
      [renderCommonSummaryCell]
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          summaryRows: {
            showDefault: true,
            showInControl: true
          }
        }}
        columnConfig={columnConfig}
        topSummaryRows={topSummaryRowsData}
        bottomSummaryRows={bottomSummaryRowsData}
        rows={rows}
      />
    );
  }
};
