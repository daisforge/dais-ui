/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import React, { useCallback, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/InfinityScroll',
  component: TableCanvas,
  parameters: {
    docs: {},
    screenshot: {
      skip: true
    }
  },
  tags: ['!autodocs']
};

export default meta;

function loadMoreRows<RowType>(props?: {
  indexForStart?: number;
  countOfNewRows?: number;
  timeout?: number;
}): Promise<RowType[]> {
  const {
    indexForStart = 0,
    countOfNewRows = 200,
    timeout = 1000
  } = props ?? {};
  return new Promise((resolve) => {
    const newRows = createRows(indexForStart, countOfNewRows) as RowType[];

    setTimeout(() => resolve(newRows), timeout);
  });
}

const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'task',
    name: 'Title',
    renderCell: ({ row }) => <Canvas.Text>{row.task ?? '—'}</Canvas.Text>
  },
  {
    key: 'priority',
    name: 'Priority',
    renderCell: ({ row }) => <Canvas.Text>{row.priority ?? '—'}</Canvas.Text>
  },
  {
    key: 'issueType',
    name: 'Issue Type',
    renderCell: ({ row }) => <Canvas.Text>{row.issueType ?? '—'}</Canvas.Text>
  },
  {
    key: 'developer',
    name: 'Developer',
    renderCell: ({ row }) => <Canvas.Text>{row.developer ?? '—'}</Canvas.Text>
  }
];

function ExampleRegionMode() {
  const [rows, setRows] = useState(() => createRows(0, 50));
  const [isLoading, setIsLoading] = useState(false);

  const onTrigger = useCallback(
    async (currentRows: Row[]) => {
      if (isLoading) return;
      setIsLoading(true);

      const newData = await loadMoreRows<Row>({
        indexForStart: currentRows.length,
        countOfNewRows: 50,
        timeout: 2000
      });

      setRows((prev) => [...prev, ...newData]);
      setIsLoading(false);
    },
    [isLoading]
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 700 },
        infinityScroll: {
          rowThreshold: 5,
          onTrigger,
          isLoading,
          hasMore: rows.length < 6000
        }
      }}
      columnConfig={columns}
      rows={rows}
    />
  );
}

const regionModePreCode = `
import { createRows, type Row } from '@df-storybook/data/tableData';
import { Canvas, ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useCallback, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.InfinityScroll/TableCanvasInfinityScroll.stories.tsx',
  'ExampleRegionMode'
)}
`;

export const RegionModeStory: StoryObj = {
  name: 'Region Mode (default)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: regionModePreCode
  }),
  render: ExampleRegionMode
};
