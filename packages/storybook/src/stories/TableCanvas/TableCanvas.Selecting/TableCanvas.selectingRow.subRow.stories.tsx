/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SelectingRow/WithSubRows',
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

export const SelectingRow: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Многоуровневая таблица',
  render: () => {
    const [rows] = useState(createRows);

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
          key: 'issueType',
          name: 'issue',
          subRow: {
            keyOfColumnInSubRow: 'issueType'
          }
        },
        {
          key: 'developer',
          name: 'Developer'
        }
      ],
      []
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === 1;

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
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id + r.issueType,
            showDefault: true,
            selectingRules: { levels: 'all' },
            rowCheckboxDisabled,
            rowShowCheckbox
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
