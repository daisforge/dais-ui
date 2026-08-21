/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRows,
  createSeededRandom,
  type Row,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  RowInstrumentsDropdownItemOption,
  RowInstrumentsType,
  Table,
} from '@ui-kit/components/Table';
import { IconAddOutline, IconBoxOutline } from '@ui-kit/icons';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/ColumnsControl',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
    screenshot: { skip: true },
  },
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

type Story = StoryObj;

export const ColumnsControl: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
        {
          key: 'tr1',
          name: 'TR',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: {
            enable: true,
            hiding: true,
            disableHiding: ['id'],
            pinning: true,
            disablePinning: ['developer'],
            reorderingAside: true,
            reorderingHeader: true,
            columnsLabel: {
              task: 'Задачи',
            },
            orderDefault: ['id', 'issueType', 'task'],
            hiddenDefault: ['tr1'],
            pinnedDefault: ['complete'],
            onConfirm: ({ order, hidden, pinned }, _setters) => {
              // eslint-disable-next-line no-alert
              alert(`
                                    order: ${order.join(', ')}
                                    pinned: ${pinned.join(', ')}
                                    hidden: ${hidden.join(', ')}
                                `);
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ColumnsControlWithServiceColumnsForTest: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Title',
          keyText: {
            key: 'kek',
            name: 'Ключ - Title',
            renderCell: ({ row }) => row.id,
          },
        },
        {
          key: 'priority',
          name: 'Priority',
          rowsGrouping: {
            groupByColumn: true,
          },
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
        {
          key: 'tr1',
          name: 'TR',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );
    const [value, setValue] = useState(1);

    const getRowDropdownConfig = useCallback<RowInstrumentsType<Row>>(
      ({ row, rowIdx }) => ({
        items: [
          ...(rowIdx === 0
            ? [
                {
                  label: 'Увеличить счетчик',
                  value: 'counter',
                  onItemSelect: (_, e) => {
                    e.preventDefault();
                    setValue((prev) => prev + (rowIdx || 1));
                  },
                  dividerAfter: true,
                } as RowInstrumentsDropdownItemOption,
              ]
            : []),
          {
            label: 'Удалить строку',
            value: 'delete row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];

                  newV.splice(index, 1);
                  return newV;
                });
              }
            },
            contentLeft: <IconBoxOutline color="inherit" />,
          },
          {
            label: 'Добавить строку вниз',
            value: 'add row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];
                  const newRow: Row = {
                    id: createSeededRandom(rows.length)() * 1000 + rows.length,
                    task: '',
                    priority: '',
                    issueType: '',
                    developer: '',
                    complete: 0,
                    tr: '',
                    loremIpsum: '',
                  } as Row;
                  newV.splice(index + 1, 0, newRow);

                  return newV;
                });
              }
            },
            contentLeft: <IconAddOutline color="inherit" />,
          },
        ],
      }),
      [rows],
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    return (
      <>
        <div>{value}</div>
        <Table
          tableConfig={{
            keyText: true,
            selecting: {
              rowCheckboxDisabled: (row) => row.id === 2,
              rowShowCheckbox: (row) => row.id !== 3,
              state: selectingRowStateAndSetter,
              rowKeyGetter: (r) => r.id + r.issueType,
            },
            rowsGrouping: {
              rowKeyGetter: (r) => r.id,
              groupByState: [groupByArr, setGroupByArr],
            },
            rowInstruments: {
              getRowDropdownConfig,
              defaultOpened: true,
            },
            containerStyle: { height: 700 },
            columnsControl: {
              enable: true,
              hiding: true,
              disableHiding: ['id'],
              pinning: true,
              disablePinning: ['developer'],
              reorderingAside: true,
              reorderingHeader: true,
              columnsLabel: {
                task: 'Задачи',
              },
              orderDefault: ['id', 'issueType', 'task'],
              hiddenDefault: ['tr1'],
              pinnedDefault: ['complete'],
              onConfirm: ({ order, hidden, pinned }, _setters) => {
                // eslint-disable-next-line no-alert
                alert(`
                                    order: ${order.join(', ')}
                                    pinned: ${pinned.join(', ')}
                                    hidden: ${hidden.join(', ')}
                                `);
              },
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};
