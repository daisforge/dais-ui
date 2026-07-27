/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  BLOCKS,
  createRows,
  createRowsTree,
  PRODUCTS,
  type Row,
  type TreeRow,
  TRIBES
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui-kit/components/Select';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { useEffect, useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Copy-Paste-Fill',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  }
};

export default meta;

type Story = StoryObj;

// highlightActiveType — только подсветка строки: 'row' | 'disabled'.
// 'cell'/'range-cell' устарели (режим выделения ячеек задаёт cellsSelection.mode).
const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: Array<{
  label: string;
  value: HighlightActiveType;
}> = [
  { label: 'row', value: 'row' },
  { label: 'disabled', value: 'disabled' }
];

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'cell', value: 'cell' },
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'disabled', value: 'disabled' }
];

export const ClipboardFullDemo: Story = {
  name: 'Полный пример (все возможности)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    useEffect(() => {
      (
        window as unknown as Record<string, boolean>
      ).__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
    }, []);

    const [rows, setRows] = useState(() => createRowsTree());
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');

    const columns = useMemo(
      (): readonly ColumnConfig<TreeRow>[] => [
        {
          key: 'block',
          name: 'Блок',
          editingCell: {
            editable: (r) => r.block === BLOCKS[1],
            component: 'select',
            options: {
              type: 'constant',
              options: BLOCKS.map((i) => ({ text: i, value: i }))
            }
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
              inputProps: { placeholder: 'Введите значение' }
            },
            isColumnWithArrow: true
          }
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
          editingCell: { component: 'inputString' },
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge
                text={row.blockActivity}
                view={row.blockActivity === 'Активный' ? 'positive' : 'warning'}
                size="s"
              />
            </Canvas.Container>
          ),
          copyData: (row: TreeRow) => row.blockActivity ?? '',
          subRow: {
            keyOfColumnInSubRow: 'blockActivity',
            editingCell: { component: 'inputString' }
          }
        },
        {
          key: 'tribe',
          name: 'Трайб',
          editingCell: {
            component: 'select',
            options: {
              type: 'stateInRowContext',
              optionsKeyInRowContext: 'tribeOptions'
            }
          },
          renderCell: ({ row, theme }) => (
            <Canvas.Container padding={8}>
              <Canvas.Text color={theme.textDark}>{row.tribe}</Canvas.Text>
            </Canvas.Container>
          ),
          copyData: (row: TreeRow) => row.tribe ?? '',
          subRow: {
            keyOfColumnInSubRow: 'tribe',
            editingCell: { component: 'inputString' }
          }
        },
        {
          key: 'product',
          name: 'Продукт',
          editingCell: {
            component: 'select',
            options: {
              type: 'stateInRowContext',
              optionsKeyInRowContext: 'productOptions'
            }
          },
          subRow: {
            keyOfColumnInSubRow: 'product',
            editingCell: { component: 'inputString' }
          }
        },
        {
          key: 'q1',
          name: 'Q1',
          editingCell: { component: 'inputNumber' },
          contentFormat: {
            type: 'number',
            decimalSeparator: ',',
            thousandSeparator: ' ',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          },
          subRow: {
            keyOfColumnInSubRow: 'q1',
            editingCell: { component: 'inputNumber' }
          }
        },
        {
          key: 'q2',
          name: 'Q2',
          contentFormat: 'number',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q2',
            editingCell: { component: 'inputNumber' }
          }
        },
        {
          key: 'q3',
          name: 'Q3',
          contentFormat: 'number',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q3',
            editingCell: { component: 'inputNumber' }
          }
        },
        {
          key: 'q4',
          name: 'Q4',
          contentFormat: 'number',
          editingCell: { component: 'inputNumber' },
          subRow: {
            keyOfColumnInSubRow: 'q4',
            editingCell: { component: 'inputNumber' }
          }
        }
      ],
      []
    );

    const rowContextValue = useMemo(
      () => ({
        tribeOptions: TRIBES.map((i) => ({ text: i, value: i })),
        productOptions: PRODUCTS.map((i) => ({ text: i, value: i }))
      }),
      []
    );

    const savedRowsRef = useRef<null | typeof rows>(null);

    return (
      <div>
        <div
          style={{ display: 'flex', gap: 12, maxWidth: 760, marginBottom: 12 }}
        >
          <Select
            label="Режим выделения"
            value={selectionMode}
            onChange={(value) => setSelectionMode(value as CellsSelectionMode)}
            items={SELECTION_MODE_OPTIONS}
          />
          <Select
            label="highlightActiveType (подсветка)"
            value={highlightActiveType}
            onChange={(value) =>
              setHighlightActiveType(value as HighlightActiveType)
            }
            items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS}
          />
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>Copy:</b> работает всегда (Ctrl+C). <b>Paste/Fill:</b> только в
          режиме редактирования.
          <br />
          <b>Выделение строк:</b> клик/драг по колонке нумерации — строка(и);{' '}
          <b>Ctrl/Cmd+клик</b> по номерам — набор отдельных строк (группа).
          Скопированное (Ctrl+C) можно вставить (Ctrl+V) на выделенные строки.
          <br />
          <b>Выделение колонок:</b> клик по шапке (Ctrl/Shift — мультивыбор),
          copy/paste по колонкам.
          <br />
          <b>Колонки:</b> Блок (select, readonly часть), Активность
          (Canvas.Badge + copyData), Трайб (Canvas.Text + copyData + select),
          Продукт (select), Q1 (число + contentFormat), Q2-Q4 (число).
          <br />
          <b>Debug:</b> логи включены (DevTools → Verbose).
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '700px' },
            // Подсветка строки — отдельная визуальная ось (Фаза 2+).
            highlightActiveType,
            // Нумерация строк: клик/драг по ней выделяет строку(и); Ctrl/Meta —
            // накопительный выбор отдельных строк. Copy/Paste работают по строкам.
            rowMarkers: { startIndex: 1 },
            // Режим выделения ячеек: по нему работают copy/paste и рамка.
            // Выделение колонок по клику на шапку (по умолчанию включено).
            cellsSelection: {
              mode: selectionMode,
              enableColumnSelection: true
            },
            rowSize: { showInControl: true, default: 'big' },
            editing: {
              onEnableEditing(enableEditorMode) {
                savedRowsRef.current = JSON.parse(JSON.stringify(rows));
                enableEditorMode();
              },
              onCancel(disableEditorMode) {
                if (savedRowsRef.current) setRows(savedRowsRef.current);
                disableEditorMode();
              },
              onSave(disableEditorMode) {
                savedRowsRef.current = null;
                disableEditorMode();
              },
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              rowEditable: (r) => r.block !== BLOCKS[1]
            },
            subRows: {
              getSubRows: (row) => row?.subRows,
              rowKeyGetter: (row) => row.id
            },
            resizableColumn: true
          }}
          columnConfig={columns}
          rows={rows}
          rowContextValue={rowContextValue}
        />
      </div>
    );
  }
};

export const InterceptCopyPaste: Story = {
  name: 'Перехват onBeforeCopy / onBeforePaste',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          width: 90,
          editingCell: { component: 'inputNumber' }
        },
        {
          key: 'task',
          name: 'Title',
          width: 260,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'priority',
          name: 'Priority',
          width: 180,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          width: 180,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'complete',
          name: '% Complete',
          width: 160,
          editingCell: { component: 'inputNumber' }
        }
      ],
      []
    );

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>onBeforeCopy:</b> при Ctrl+C в консоль выводятся скопированные
          данные, колонки и rawValue каждой ячейки.
          <br />
          <b>onBeforePaste:</b> при Ctrl+V выводятся вставляемые данные и info о
          target-ячейках. Если вставляется больше 5 строк, вставка блокируется
          (return false).
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '500px' },
            rowSize: { default: 'medium', showInControl: true },
            cellTransfer: {
              onBeforeCopy: (data, meta) => {
                console.log('[onBeforeCopy] data:', data);
                console.log(
                  '[onBeforeCopy] колонки:',
                  meta.cells[0]?.map((c) => c.column.key)
                );
                console.log(
                  '[onBeforeCopy] rawValues:',
                  meta.cells.map((row) => row.map((c) => c.rawValue))
                );
                return data;
              },
              onBeforePaste: (data, meta) => {
                console.log('[onBeforePaste] data:', data);
                console.log('[onBeforePaste] target:', meta.target);
                console.log(
                  '[onBeforePaste] targetCells:',
                  meta.targetCells.map((row) =>
                    row.map(
                      (c) =>
                        `${c.column.key} (${
                          c.column.editingCell ? 'editable' : 'readonly'
                        })`
                    )
                  )
                );
                if (data.length > 5) {
                  console.warn('[onBeforePaste] Блокировка: больше 5 строк');
                  return false;
                }
                return data;
              }
            },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true
            },
            resizableColumn: true
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

export const CopyDataExample: Story = {
  name: 'copyData для кастомных ячеек',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          width: 80,
          editingCell: { component: 'inputNumber' }
        },
        {
          key: 'task',
          name: 'Title',
          width: 240,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'priority',
          name: 'Priority (Badge + copyData)',
          width: 220,
          editingCell: { component: 'inputString' },
          renderCell: ({ row }) => (
            <Canvas.Container direction="row" alignItems="center" padding={8}>
              <Canvas.Badge
                text={row.priority}
                view={row.priority === 'Critical' ? 'negative' : 'default'}
                size="s"
              />
            </Canvas.Container>
          ),
          copyData: (row: Row) => row.priority ?? ''
        },
        {
          key: 'issueType',
          name: 'Type (Text + copyData)',
          width: 200,
          editingCell: { component: 'inputString' },
          renderCell: ({ row, theme }) => (
            <Canvas.Container padding={8}>
              <Canvas.Text color={theme.textDark}>{row.issueType}</Canvas.Text>
            </Canvas.Container>
          ),
          copyData: (row: Row) => row.issueType ?? ''
        },
        {
          key: 'complete',
          name: '% Complete',
          width: 140,
          editingCell: { component: 'inputNumber' }
        }
      ],
      []
    );

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>Priority</b> — Canvas.Badge с <code>copyData</code>. <b>Type</b> —
          Canvas.Text с <code>copyData</code>.
          <br />
          Выделите ячейку Priority → Ctrl+C → вставьте в блокнот: скопируется
          текст бейджа (например &quot;Critical&quot;), а не пустая строка.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '400px' },
            rowSize: { default: 'medium', showInControl: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

export const TypeCheckValidation: Story = {
  name: 'Валидация типов при вставке',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    useEffect(() => {
      (
        window as unknown as Record<string, boolean>
      ).__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
    }, []);

    const [rows, setRows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID', width: 80 },
        {
          key: 'task',
          name: 'Title (строка)',
          width: 240,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'priority',
          name: 'Priority (select)',
          width: 180,
          editingCell: {
            component: 'select',
            options: {
              type: 'constant',
              options: [
                { value: 'Critical', text: 'Critical' },
                { value: 'High', text: 'High' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' }
              ]
            }
          }
        },
        {
          key: 'complete',
          name: '% Complete (число)',
          width: 180,
          editingCell: { component: 'inputNumber' },
          contentFormat: {
            type: 'number',
            decimalSeparator: ',',
            thousandSeparator: ' '
          }
        }
      ],
      []
    );

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>Priority</b> — select (Critical / High / Medium / Low). Вставка
          &quot;Unknown&quot; пропустится.
          <br />
          <b>% Complete</b> — число. Вставка &quot;hello&quot; пропустится.
          <br />
          <b>Title</b> — строка, принимает всё.
          <br />
          Debug логи включены — смотрите{' '}
          <code>[TableCanvas/paste] skipped by validation</code> в консоли.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '400px' },
            rowSize: { default: 'medium', showInControl: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

export const FillHandleWithSourceRow: Story = {
  name: 'Fill Handle — доступ к source row (onBeforeFill)',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const savedRowsRef = useRef<Row[] | null>(null);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          width: 80,
          editingCell: { component: 'inputNumber' }
        },
        {
          key: 'task',
          name: 'Title',
          width: 260,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'priority',
          name: 'Priority',
          width: 180,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          width: 180,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'complete',
          name: '% Complete',
          width: 160,
          editingCell: { component: 'inputNumber' }
        }
      ],
      []
    );

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Выделите ячейку в колонке <b>% Complete</b> и перетащите fill handle
          вниз.
          <br />
          <b>onRowsChange</b> получает <code>type: &apos;fill&apos;</code> и{' '}
          <code>fillMeta</code> с source row, что позволяет дополнительно
          скопировать <b>priority</b> из исходной строки.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '500px' },
            highlightActiveType: 'range-cell',
            rowSize: { default: 'medium', showInControl: true },
            cellTransfer: {
              fillHandle: true,
              onBeforeFill: (data, meta) => {
                console.log(
                  '[onBeforeFill] source row:',
                  meta.sourceCells[0]?.[0]?.row
                );
                console.log('[onBeforeFill] data:', data);
                return data;
              }
            },
            editing: {
              onEnableEditing(enableEditorMode) {
                savedRowsRef.current = JSON.parse(JSON.stringify(rows));
                enableEditorMode();
              },
              onCancel(disableEditorMode) {
                if (savedRowsRef.current) {
                  setRows(savedRowsRef.current);
                  savedRowsRef.current = null;
                }
                disableEditorMode();
              },
              onRowsChange: (newRows, { indexes, column, type, fillMeta }) => {
                if (type === 'fill' && fillMeta && column.key === 'complete') {
                  const sourceRow = fillMeta.sourceCells[0]?.[0]?.row as
                    | Row
                    | undefined;

                  if (sourceRow) {
                    const updated = newRows.map((row, i) =>
                      indexes.includes(i)
                        ? { ...row, priority: sourceRow.priority }
                        : row
                    );
                    setRows(updated);
                    return;
                  }
                }

                setRows(newRows);
              },
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: false
            },
            resizableColumn: true
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};

export const CustomHotkeys: Story = {
  name: 'Кастомные хоткеи',
  ...storySourceDoc({
    previewSource: 'shown'
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          width: 80,
          editingCell: { component: 'inputNumber' }
        },
        {
          key: 'task',
          name: 'Title',
          width: 260,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'priority',
          name: 'Priority',
          width: 180,
          editingCell: { component: 'inputString' }
        },
        {
          key: 'complete',
          name: '% Complete',
          width: 160,
          editingCell: { component: 'inputNumber' }
        }
      ],
      []
    );

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Copy: <b>Ctrl+Alt+C</b>. Paste: <b>Ctrl+Alt+V</b>.
          <br />
          Обычные Ctrl+C / Ctrl+V для этой таблицы не работают — хук блокирует
          дефолт, когда задан кастомный хоткей.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '400px' },
            rowSize: { default: 'medium', showInControl: true },
            cellTransfer: {
              hotkeys: {
                copy: { code: 'KeyC', ctrl: true, alt: true },
                paste: { code: 'KeyV', ctrl: true, alt: true }
              }
            },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  }
};
