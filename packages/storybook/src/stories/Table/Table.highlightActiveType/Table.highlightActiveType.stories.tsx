/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui-kit/components/Select';
import {
  ColumnConfig,
  HighlightActiveType,
  Table
} from '@ui-kit/components/Table';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { DataGridHandle } from 'react-data-grid';

const meta: Meta = {
  title: 'Локальные компоненты/Table/HighlightActiveType',
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
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`;

export const HighlightActiveTypeTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'hidden'
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              id
            </div>
          )
        },
        {
          key: 'task',
          name: 'Title'
        },
        {
          key: 'priority',
          name: 'Priority'
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
      []
    );
    const refTable = useRef<DataGridHandle>(null);

    useEffect(() => {
      setTimeout(() => {
        refTable.current?.selectCell({ idx: 0, rowIdx: 1 });
      }, 1000);
    }, []);

    return (
      <>
        Выбрать тип выделения
        <Select
          value={highlightActiveType}
          onChange={(v) => setHighlightActiveType(v as HighlightActiveType)}
          items={['row', 'cell', 'disabled'].map((i) => ({
            label: i,
            value: i
          }))}
        />
        <br />
        <Table
          tableConfig={{
            containerStyle: { height: 700 },
            highlightActiveType
          }}
          refTable={refTable}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  }
};
