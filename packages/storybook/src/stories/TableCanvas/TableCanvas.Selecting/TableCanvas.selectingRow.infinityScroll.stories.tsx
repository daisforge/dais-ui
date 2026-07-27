/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/SelectingRow/WithSubRowsAndInfinityScroll',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

function loadMoreRows(props?: {
  indexForStart?: number;
  countOfNewRows?: number;
  timeout?: number;
}): Promise<Row[]> {
  const {
    indexForStart = 0,
    countOfNewRows = 30,
    timeout = 1000
  } = props ?? {};
  return new Promise((resolve) => {
    const newRows = createRows(indexForStart, countOfNewRows);
    setTimeout(() => resolve(newRows), timeout);
  });
}

export const SelectingWithInfinityScroll: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'SubRows + InfinityScroll + Selecting',
  render: () => {
    const [rows, setRows] = useState(() => createRows(0, 30));
    const [isLoading, setIsLoading] = useState(false);
    const hasMore = rows.length < 200;

    const onTrigger = useCallback(
      async (currentRows: Row[]) => {
        if (isLoading) return;
        setIsLoading(true);

        const newData = await loadMoreRows({
          indexForStart: currentRows.length,
          countOfNewRows: 30,
          timeout: 1500
        });

        setRows((prev) => [...prev, ...newData]);
        setIsLoading(false);
      },
      [isLoading]
    );

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          subRow: {
            keyOfColumnInSubRow: 'id',
            isColumnWithArrow: true
          },
          resizable: true
        },
        {
          key: 'task',
          name: 'Task',
          subRow: { keyOfColumnInSubRow: 'task' },
          renderCell: ({ row }) => <Canvas.Text>{row.task}</Canvas.Text>
        },
        {
          key: 'priority',
          name: 'Priority',
          renderCell: ({ row }) => (
            <Canvas.Text>{row.priority ?? '—'}</Canvas.Text>
          )
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          renderCell: ({ row }) => (
            <Canvas.Text>{row.issueType ?? '—'}</Canvas.Text>
          )
        }
      ],
      []
    );

    const selectingState = useState(
      (): ReadonlySet<string | number> => new Set()
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          resizableColumn: true,
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },
          selecting: {
            state: selectingState,
            rowKeyGetter: (r) => r.id,
            showDefault: true,
            selectingRules: { levels: 'all' }
          },
          controlBlock: {
            show: true,
            massActionPanel: {
              buttons: [
                {
                  type: 'button' as const,
                  text: 'Действие',
                  view: 'secondary' as const
                }
              ]
            }
          },
          infinityScroll: {
            rowThreshold: 5,
            onTrigger,
            isLoading,
            hasMore
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
