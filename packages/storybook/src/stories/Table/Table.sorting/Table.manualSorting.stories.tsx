/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useEffect, useMemo, useState } from 'react';
import { SortColumn } from 'react-data-grid';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Sorting/Manual',
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

export const ManualSorting: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const rows = useMemo(() => createRows(), []);
    const [sortedRows, setSortedRows] = useState(rows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          sortingType: 'numberSort'
        },
        {
          key: 'task',
          name: 'Title',
          sortingType: 'stringSort'
        },
        {
          key: 'priority',
          name: 'Priority',
          sortingType: 'stringSort'
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          sortingType: 'stringSort'
        },
        {
          key: 'complete',
          name: '% Complete',
          sortingType: 'numberSort'
        }
      ],
      []
    );

    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    const [state] = sortingStateAndSetter;

    useEffect(() => {
      const sortColState = state[0];
      if (!sortColState) {
        setSortedRows(rows);
        return;
      }
      const sortRows = [...rows].sort((a, b) => {
        const aValue = a[sortColState.columnKey as keyof Row];
        const bValue = b[sortColState.columnKey as keyof Row];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortColState.direction === 'ASC'
            ? aValue - bValue
            : bValue - aValue;
        }

        if (
          typeof aValue === 'string' &&
          typeof bValue === 'string' &&
          aValue[0] &&
          bValue[0]
        ) {
          return sortColState.direction === 'ASC'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        return 0;
      });

      setSortedRows(sortRows);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          sorting: {
            state: sortingStateAndSetter,
            manualSorting: true
          }
        }}
        columnConfig={columnConfig}
        rows={sortedRows}
      />
    );
  }
};
