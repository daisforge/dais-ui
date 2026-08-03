/* eslint-disable react-hooks/rules-of-hooks */
import {
  BLOCKS,
  createRowsTree,
  PRODUCTS,
  TreeRow,
  TRIBES,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalDF } from '@ui-kit/components/ModalDF';
import {
  autoFocusAndSelect,
  ColumnConfig,
  SIZES,
  Table,
  useRowContext,
} from '@ui-kit/components/Table';
import { TextField } from '@ui-kit/components/TextField';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Editing',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
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

export const Editing: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows, setRows] = useState(() => createRowsTree());

    const columns = useMemo(
      (): readonly ColumnConfig<TreeRow>[] => [
        {
          key: 'block',
          name: 'Блок',
          editingCell: {
            editable: (r) => r.block === BLOCKS[1],
            error: {
              value: (r) => r.block === BLOCKS[0],
            },
            component: 'select',
            options: {
              type: 'constant',
              options: BLOCKS.map((i) => ({ text: i, value: i })),
            },
          },
          subRow: {
            keyOfColumnInSubRow: (lvl) => {
              switch (lvl) {
                case 0:
                  return 'block';
                case 1:
                  return 'tribe';
                case 2:
                  return 'product';
                default:
                  return 'block';
              }
            },
            editingCell: {
              component: 'inputString',
              inputProps: {
                placeholder: 'Введите значение',
              },
            },

            isColumnWithArrow: true,
            hideHeaderExpandAllArrow: false,
          },
          resizable: true,
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
          editingCell: { component: 'inputString' },
        },
        {
          key: 'tribe',
          name: 'Трайб',
          editingCell: {
            component: 'select',
            options: {
              type: 'stateInRowContext',
              optionsKeyInRowContext: 'tribeOptions',
            },
            selectProps: {
              listMaxHeight: '210px',
            },
          },
        },
        {
          key: 'product',
          name: 'Продукт',
          editingCell: {
            component: 'select',
            options: {
              type: 'stateInRowContext',
              optionsKeyInRowContext: 'productOptions',
            },
          },
        },
        {
          key: 'q1',
          name: 'Q1',
          editingCell: {
            component: 'inputNumber',
            inputProps: {
              placeholder: 'Введите значение',
            },
          },
          contentFormat: {
            type: 'number',
            decimalSeparator: ',',
            thousandSeparator: ' ',
            alignContent: 'right',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          subRow: {
            keyOfColumnInSubRow: 'q1',
            editingCell: { component: 'inputNumber' },
          },
        },
        {
          key: 'q2',
          name: 'Q2',
          editingCell: {
            component: ({ row, onRowChange, onClose }) => {
              const { rowSize } = useRowContext();

              return (
                <TextField
                  ref={autoFocusAndSelect}
                  value={row.q2}
                  type="number"
                  size={SIZES[rowSize].input}
                  onChange={(e) => {
                    onRowChange({
                      ...row,
                      q2: +e.target.value,
                    });
                  }}
                  onBlur={() => onClose(true, false)}
                />
              );
            },
          },
          subRow: {
            keyOfColumnInSubRow: 'q2',
            editingCell: { component: 'inputNumber' },
          },
        },
        {
          key: 'q3',
          name: 'Q3',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q3',

            editingCell: {
              component: 'inputNumber',
              error: {
                value(_row, _treeLvl) {
                  return true;
                },
              },
            },
          },
        },
        {
          key: 'q4',
          name: 'Q4',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q4',
            editingCell: { component: 'inputNumber' },
          },
        },
      ],
      [],
    );

    const rowContextValue = useMemo(
      () => ({
        tribeOptions: TRIBES.map((i) => ({ text: i, value: i })),
        productOptions: PRODUCTS.map((i) => ({ text: i, value: i })),
      }),
      [],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          fullScreenEnabled: true,
          rowSize: {
            showInControl: true,
            default: 'big',
          },
          editing: {
            onRowsChange: setRows,
            rowKeyGetter: (r) => `${r.id}`,
            rowEditable: (r) => r.block !== BLOCKS[1],
          },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id,
          },
          resizableColumn: true,
        }}
        columnConfig={columns}
        rows={rows}
        rowContextValue={rowContextValue}
      />
    );
  },
};

export const EditingInModal: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows, setRows] = useState(() => createRowsTree());

    const columns = useMemo(
      (): readonly ColumnConfig<TreeRow>[] => [
        {
          key: 'block',
          name: 'Блок',
          editingCell: {
            editable: (r) => r.block === BLOCKS[1],
            error: {
              value: (r) => r.block === BLOCKS[0],
            },
            component: 'select',
            options: {
              type: 'constant',
              options: BLOCKS.map((i) => ({ text: i, value: i })),
            },
          },
          subRow: {
            keyOfColumnInSubRow: (lvl) => {
              switch (lvl) {
                case 0:
                  return 'block';
                case 1:
                  return 'tribe';
                case 2:
                  return 'product';
                default:
                  return 'block';
              }
            },
            editingCell: {
              component: 'inputString',
              inputProps: {
                placeholder: 'Введите значение',
              },
            },

            isColumnWithArrow: true,
            hideHeaderExpandAllArrow: false,
          },
          resizable: true,
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
          editingCell: { component: 'inputString' },
        },
        {
          key: 'tribe',
          name: 'Трайб',
          editingCell: {
            component: 'select',
            options: {
              type: 'stateInRowContext',
              optionsKeyInRowContext: 'tribeOptions',
            },
            selectProps: {
              listMaxHeight: '210px',
            },
          },
        },
        {
          key: 'product',
          name: 'Продукт',
          editingCell: {
            component: 'select',
            options: {
              type: 'stateInRowContext',
              optionsKeyInRowContext: 'productOptions',
            },
          },
        },
        {
          key: 'q1',
          name: 'Q1',
          editingCell: {
            component: 'inputNumber',
            inputProps: {
              placeholder: 'Введите значение',
            },
          },
          contentFormat: {
            type: 'number',
            decimalSeparator: ',',
            thousandSeparator: ' ',
            alignContent: 'right',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          subRow: {
            keyOfColumnInSubRow: 'q1',
            editingCell: { component: 'inputNumber' },
          },
        },
        {
          key: 'q2',
          name: 'Q2',
          editingCell: {
            component: ({ row, onRowChange, onClose }) => {
              const { rowSize } = useRowContext();

              return (
                <TextField
                  ref={autoFocusAndSelect}
                  value={row.q2}
                  type="number"
                  size={SIZES[rowSize].input}
                  onChange={(e) => {
                    onRowChange({
                      ...row,
                      q2: +e.target.value,
                    });
                  }}
                  onBlur={() => onClose(true, false)}
                />
              );
            },
          },
          subRow: {
            keyOfColumnInSubRow: 'q2',
            editingCell: { component: 'inputNumber' },
          },
        },
        {
          key: 'q3',
          name: 'Q3',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q3',

            editingCell: {
              component: 'inputNumber',
              error: {
                value(_row, _treeLvl) {
                  return true;
                },
              },
            },
          },
        },
        {
          key: 'q4',
          name: 'Q4',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q4',
            editingCell: { component: 'inputNumber' },
          },
        },
      ],
      [],
    );

    const rowContextValue = useMemo(
      () => ({
        tribeOptions: TRIBES.map((i) => ({ text: i, value: i })),
        productOptions: PRODUCTS.map((i) => ({ text: i, value: i })),
      }),
      [],
    );
    const [modalOpened, setModalOpened] = useState(false);

    return (
      <ModalDF opened={modalOpened} onClose={() => setModalOpened(false)}>
        <ModalDF.Main>
          <ModalDF.Header />
          <ModalDF.Content>
            <Table
              tableConfig={{
                containerStyle: { height: '700px', width: '700px' },
                fullScreenEnabled: true,
                rowSize: {
                  showInControl: true,
                  default: 'big',
                },
                editing: {
                  onRowsChange: setRows,
                  rowKeyGetter: (r) => `${r.id}`,
                  rowEditable: (r) => r.block !== BLOCKS[1],
                },
                subRows: {
                  getSubRows: (row) => row?.subRows,
                  rowKeyGetter: (row) => row.id,
                },
                resizableColumn: true,
              }}
              columnConfig={columns}
              rows={rows}
              rowContextValue={rowContextValue}
            />
          </ModalDF.Content>
        </ModalDF.Main>
      </ModalDF>
    );
  },
};
