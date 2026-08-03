/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SelectingRow/Simple',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const SelectingRow: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Простой пример',
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'issueType',
          name: 'issue',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
      ],
      [],
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );

    return (
      <div>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '700px' },
            selecting: {
              rowCheckboxDisabled: (row) => row.id === 2,
              rowShowCheckbox: (row) => row.id !== 3,
              state: selectingRowStateAndSetter,
              rowKeyGetter: (r) => r.id + r.issueType,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};
