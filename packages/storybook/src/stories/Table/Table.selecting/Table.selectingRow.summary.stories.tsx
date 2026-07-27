/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SelectingRow/Общий Checkbox "Выбрано"',
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

export const SelectingRowSummary: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Общий Checkbox "Выбрано"',
  render: () => {
    const [rows] = useState(createRows);

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          resizable: true,
          subRow: {
            keyOfColumnInSubRow: 'id',
            isColumnWithArrow: true
          }
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
    const [_, setSelectedRows] = selectingRowStateAndSetter;
    const rowShowCheckbox = (r: Row) => r.id !== 2;
    const rowCheckboxDisabled = (r: Row) => r.id === 1;

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },
          resizableColumn: true,
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id + r.issueType,
            showDefault: true,
            selectingRules: { levels: [1, 2] },
            rowShowCheckbox,
            rowCheckboxDisabled,
            summaryChecked: {
              checked: ({ rows, selectedRowsIds }) =>
                // Любая логика для включения Checkbox
                // ...
                selectedRowsIds.size === rows.length,
              indeterminate: ({ rows, selectedRowsIds, checkedAll }) => {
                // Любая логика для отображения indeterminate у Checkbox
                // ...
                const isIndet =
                  rows.length > 0 && selectedRowsIds.size > 0 && !checkedAll;

                return isIndet;
              },
              onChange: ({ selectedRowsIds }) => {
                // Любая логика для обработки события изменения состояния выбора строки
                // ...
                setSelectedRows(selectedRowsIds);
              },
              getCountOfChecked: ({ selectedRowsIds }) =>
                // Любая логика для отображения количества выбранных строк
                // ...
                selectedRowsIds.size
            }
          }
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  }
};
