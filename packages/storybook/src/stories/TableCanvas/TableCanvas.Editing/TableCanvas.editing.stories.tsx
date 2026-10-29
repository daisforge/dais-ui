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
import { Button } from '@ui-kit/components/Button';
import { ModalDF } from '@ui-kit/components/ModalDF';
import {
  CellEditorNumberFormat,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Editing',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

export const Editing: Story = {
  ...storySourceDoc({
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
          contentFormat: 'number',
          editingCell: {
            component: ({
              row,
              onRowChange,
              column,
              cellHeight,
              cellWidth,
              initialValue,
            }) => {
              const initialValueAsNumber =
                initialValue && !Number.isNaN(+initialValue)
                  ? +initialValue
                  : null;

              const [v, setV] = useState<string | number>(
                initialValueAsNumber ??
                  (row?.[column.key as keyof typeof row] as unknown as number),
              );

              const handleChange = (
                _event?: React.ChangeEvent<HTMLInputElement>,
                values?: {
                  floatValue: number | undefined;
                  formattedValue: string;
                  value: string;
                },
              ) => {
                if (values) {
                  const resultValue =
                    values.floatValue ?? values.formattedValue;
                  setV(resultValue);
                  onRowChange({
                    ...row,
                    [column.key]: resultValue,
                  });
                }
              };
              return (
                <CellEditorNumberFormat
                  cellHeight={cellHeight}
                  cellWidth={cellWidth}
                  autoFocusType={
                    initialValueAsNumber === null
                      ? 'autoFocusAndSelect'
                      : 'autoFocus'
                  }
                  value={v}
                  onChange={handleChange}
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
          contentFormat: 'number',

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
          contentFormat: 'number',

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
    const savedRowsRef = useRef<null | typeof rows>(null);

    return (
      <TableCanvas
        tableConfig={{
          enableLowDprHairline: true,
          containerStyle: { height: '700px' },
          rowSize: {
            showInControl: true,
            default: 'big',
          },
          editing: {
            onEnableEditing(enableEditorMode) {
              savedRowsRef.current = JSON.parse(JSON.stringify(rows));
              enableEditorMode();
            },
            onCancel(disableEditorMode) {
              if (savedRowsRef.current) {
                setRows(savedRowsRef.current);
              }
              disableEditorMode();
            },
            onSave(disableEditorMode) {
              savedRowsRef.current = null;
              disableEditorMode();
            },
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

type SimpleRow = { id: string; name: string; value: number };

export const EditingButtonsControl: Story = {
  ...storySourceDoc({
    previewSource: 'shown',
  }),
  name: 'Buttons Control (disabled, isLoading)',
  render: () => {
    const [rows, setRows] = useState<SimpleRow[]>([
      { id: '1', name: 'Альфа', value: 100 },
      { id: '2', name: 'Бета', value: 200 },
      { id: '3', name: 'Гамма', value: 300 },
    ]);
    const [isSaving, setIsSaving] = useState(false);
    const savedRowsRef = useRef<SimpleRow[] | null>(null);

    const columnConfig = useMemo(
      (): ColumnConfig<SimpleRow>[] => [
        {
          key: 'name',
          name: 'Название',
          editingCell: { component: 'inputString' },
        },
        {
          key: 'value',
          name: 'Значение',
          contentFormat: 'number',
          editingCell: { component: 'inputNumber' },
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '400px' },
          editing: {
            onRowsChange: setRows,
            rowKeyGetter: (r) => r.id,
            buttons: {
              save: {
                disabled: isSaving,
                isLoading: isSaving,
              },
              cancel: {
                disabled: isSaving,
              },
            },
            onEnableEditing(enableEditorMode) {
              savedRowsRef.current = [...rows];
              enableEditorMode();
            },
            onSave(disableEditorMode) {
              setIsSaving(true);
              setTimeout(() => {
                setIsSaving(false);
                savedRowsRef.current = null;
                disableEditorMode();
              }, 2000);
            },
            onCancel(disableEditorMode) {
              if (savedRowsRef.current) {
                setRows(savedRowsRef.current);
              }
              disableEditorMode();
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const EditingInModal: Story = {
  ...storySourceDoc({
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
          contentFormat: 'number',
          editingCell: {
            component: ({
              row,
              onRowChange,
              column,
              cellHeight,
              cellWidth,
              initialValue,
            }) => {
              const initialValueAsNumber =
                initialValue && !Number.isNaN(+initialValue)
                  ? +initialValue
                  : null;

              const [v, setV] = useState<string | number>(
                initialValueAsNumber ??
                  (row?.[column.key as keyof typeof row] as unknown as number),
              );

              const handleChange = (
                _event?: React.ChangeEvent<HTMLInputElement>,
                values?: {
                  floatValue: number | undefined;
                  formattedValue: string;
                  value: string;
                },
              ) => {
                if (values) {
                  const resultValue =
                    values.floatValue ?? values.formattedValue;
                  setV(resultValue);
                  onRowChange({
                    ...row,
                    [column.key]: resultValue,
                  });
                }
              };
              return (
                <CellEditorNumberFormat
                  cellHeight={cellHeight}
                  cellWidth={cellWidth}
                  autoFocusType={
                    initialValueAsNumber === null
                      ? 'autoFocusAndSelect'
                      : 'autoFocus'
                  }
                  value={v}
                  onChange={handleChange}
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
          contentFormat: 'number',

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
          contentFormat: 'number',

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
    const savedRowsRef = useRef<null | typeof rows>(null);
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button type="button" onClick={() => setOpened((prev) => !prev)}>
          Toggle Modal
        </Button>
        <ModalDF opened={opened} onClose={() => setOpened(false)}>
          <ModalDF.Main>
            <ModalDF.Header
              title="Режим редактирования внутри модальных окон"
              badge={{ text: `tableConfig.editorOverlayPortal: 'inside'` }}
            />
            <ModalDF.Content>
              <TableCanvas
                tableConfig={{
                  // КЛЮЧЕВОЕ СВОЙСТВО ДЛЯ КОРРЕКТНОЙ РАБОТЫ РЕЖИМА РЕДАКТИРОВАНИЯ ВНУТРИ МОДАЛЬНЫХ ОКОН
                  editorOverlayPortal: 'inside',
                  //
                  containerStyle: {
                    height: '60vh',
                    width: '80vw',
                  },
                  rowSize: {
                    showInControl: true,
                    default: 'big',
                  },
                  editing: {
                    defaultEnabled: true,
                    onEnableEditing(enableEditorMode) {
                      savedRowsRef.current = JSON.parse(JSON.stringify(rows));
                      enableEditorMode();
                    },
                    onCancel(disableEditorMode) {
                      if (savedRowsRef.current) {
                        setRows(savedRowsRef.current);
                      }
                      disableEditorMode();
                    },
                    onSave(disableEditorMode) {
                      savedRowsRef.current = null;
                      disableEditorMode();
                    },
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
      </>
    );
  },
};

type InvoiceRow = {
  id: string;
  name: string;
  amount: number;
  limit: number;
  status: 'new' | 'approved' | 'rejected';
};

const INVOICE_ROWS: InvoiceRow[] = [
  {
    id: '1',
    name: 'Аренда офиса',
    amount: 120000,
    limit: 150000,
    status: 'approved',
  },
  { id: '2', name: '', amount: 48000, limit: 50000, status: 'new' },
  { id: '3', name: 'Канцелярия', amount: 9000, limit: 5000, status: 'new' },
  {
    id: '4',
    name: 'Командировка',
    amount: 70000,
    limit: 40000,
    status: 'rejected',
  },
  { id: '5', name: '', amount: 99000, limit: 30000, status: 'new' },
  {
    id: '6',
    name: 'Обучение',
    amount: 15000,
    limit: 20000,
    status: 'approved',
  },
];

const rowErrorsCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { useState } from 'react';

type InvoiceRow = {
  id: string;
  name: string;
  amount: number;
  limit: number;
  status: 'new' | 'approved' | 'rejected';
};

const columnConfig: ColumnConfig<InvoiceRow>[] = [
  {
    key: 'name',
    name: 'Назначение',
    editingCell: {
      component: 'inputString',
      error: {
        value: (row) => row.name.trim() === '',
        // Тултип считается только при наведении на ячейку с ошибкой.
        tooltip: () => 'Назначение платежа не заполнено',
      },
    },
  },
  {
    key: 'amount',
    name: 'Сумма',
    contentFormat: 'number',
    editingCell: {
      component: 'inputNumber',
      error: {
        value: (row) => row.amount > row.limit,
        tooltip: (row) => ({
          text: \`Сумма превышает лимит \${row.limit}\`,
          placement: 'right',
          maxWidth: 240,
        }),
      },
    },
  },
  { key: 'limit', name: 'Лимит', contentFormat: 'number' },
  { key: 'status', name: 'Статус' },
];

const App = () => {
  const [rows, setRows] = useState<InvoiceRow[]>(initialRows);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '400px' },
        rowMarkers: {},
        rowSize: { showInControl: true, default: 'big' },
        editing: {
          defaultEnabled: true,
          onRowsChange: setRows,
          rowKeyGetter: (r) => r.id,
          rowErrors: {
            // Отклонённая строка подсвечивается целиком, одной рамкой.
            isErrorRow: (row) => row.status === 'rejected',
            // Свой текст тултипа индикатора. Без этой функции будет
            // «Ошибок в строке: N» для поячеечных ошибок и ничего для строки.
            tooltip: ({ isErrorRow, errorCellsCount }) =>
              isErrorRow
                ? 'Строка отклонена'
                : \`Ошибок в строке: \${errorCellsCount}\`,
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};
`;

export const EditingRowErrors: Story = {
  ...storySourceDoc({
    code: rowErrorsCode,
    type: 'code',
  }),
  name: 'Row Errors (индикатор и ошибка всей строки)',
  render: () => {
    const [rows, setRows] = useState<InvoiceRow[]>(INVOICE_ROWS);
    const [indicatorColumn, setIndicatorColumn] = useState(true);
    const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(
      () => new Set(),
    );

    const columnConfig = useMemo(
      (): ColumnConfig<InvoiceRow>[] => [
        {
          key: 'name',
          name: 'Назначение',
          editingCell: {
            component: 'inputString',
            error: {
              value: (row) => row.name.trim() === '',
              tooltip: () => 'Назначение платежа не заполнено',
            },
          },
        },
        {
          key: 'amount',
          name: 'Сумма',
          contentFormat: 'number',
          editingCell: {
            component: 'inputNumber',
            error: {
              value: (row) => row.amount > row.limit,
              tooltip: (row) => ({
                text: `Сумма превышает лимит ${row.limit}`,
                placement: 'right',
                maxWidth: 240,
              }),
            },
          },
        },
        {
          key: 'limit',
          name: 'Лимит',
          contentFormat: 'number',
          editingCell: { component: 'inputNumber' },
        },
        {
          key: 'status',
          name: 'Статус',
          editingCell: {
            component: 'select',
            options: {
              type: 'constant',
              options: [
                { text: 'Новая', value: 'new' },
                { text: 'Согласована', value: 'approved' },
                { text: 'Отклонена', value: 'rejected' },
              ],
            },
          },
        },
      ],
      [],
    );

    return (
      <>
        <Button
          size="s"
          view="secondary"
          style={{ marginBottom: 12 }}
          onClick={() => setIndicatorColumn((v) => !v)}
        >
          {indicatorColumn
            ? 'Скрыть столбец-индикатор'
            : 'Показать столбец-индикатор'}
        </Button>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '400px' },
            rowMarkers: {},
            rowSize: { showInControl: true, default: 'big' },
            selecting: {
              state: [selectedRows, setSelectedRows],
              rowKeyGetter: (r) => r.id,
            },
            editing: {
              defaultEnabled: true,
              onRowsChange: setRows,
              rowKeyGetter: (r) => r.id,
              rowErrors: {
                indicatorColumn,
                isErrorRow: (row) => row.status === 'rejected',
                tooltip: ({ isErrorRow, errorCellsCount }) =>
                  isErrorRow
                    ? 'Строка отклонена'
                    : `Ошибок в строке: ${errorCellsCount}`,
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
