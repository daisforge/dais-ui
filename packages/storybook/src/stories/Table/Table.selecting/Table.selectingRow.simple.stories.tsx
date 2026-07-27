/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SelectingRow/Простой пример',
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

export const SelectingRow: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Простой пример',
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'issueType',
          name: 'issue'
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

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          selecting: {
            rowCheckboxDisabled: (row) => row.id === 2,
            rowShowCheckbox: (row) => row.id !== 3,
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id + r.issueType
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
