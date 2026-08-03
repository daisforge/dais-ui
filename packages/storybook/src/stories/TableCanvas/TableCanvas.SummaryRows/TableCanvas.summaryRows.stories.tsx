/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  SummaryCellInfoGlideInstance,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SummaryRows',
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  tags: ['!autodocs'],
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

type Story = StoryObj;

type TSummaryRowData = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

export const SummaryRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

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
            }`,
          },
        ],
      },
    ];

    const renderCommonSummaryCell = useCallback(
      (props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) =>
        props.row.values.find((el) => el.columnId === props.column.key)
          ?.value ?? '',
      [],
    );

    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          renderSummaryCell: renderCommonSummaryCell,
        },
        {
          key: 'task',
          name: 'Title',
          renderSummaryCell: renderCommonSummaryCell,
        },
        {
          key: 'priority',
          name: 'Priority',
          renderSummaryCell: (props) => {
            const { row, theme } = props;

            return (
              <Canvas.Container
                padding={{
                  left: theme.cellHorizontalPadding,
                  right: theme.cellHorizontalPadding,
                }}
              >
                <Canvas.Text color={row.type === 'top' ? 'red' : 'orange'}>
                  {renderCommonSummaryCell(props)}
                </Canvas.Text>
              </Canvas.Container>
            );
          },
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
      [renderCommonSummaryCell],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          summaryRows: {
            showDefault: true,
            showInControl: true,
          },
        }}
        columnConfig={columnConfig}
        bottomSummaryRows={bottomSummaryRowsData}
        rows={rows}
      />
    );
  },
};
