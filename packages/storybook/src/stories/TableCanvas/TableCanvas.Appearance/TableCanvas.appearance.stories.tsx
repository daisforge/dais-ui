/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui-kit/components/Select';
import { Switch } from '@ui-kit/components/Switch';
import {
  type AppearanceVariant,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type SortColumn,
  type SummaryCellInfoGlideInstance,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconSb } from '@ui-kit/icons';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Appearance',
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

// «Чистый» вид и зебра включаются в tableConfig.appearance:
// appearance: { variant: 'clean', zebra: true }
`;

type Story = StoryObj;

type TSummaryRowData = {
  type: 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: Array<{
  label: string;
  value: HighlightActiveType;
}> = [
  { label: 'row', value: 'row' },
  { label: 'disabled', value: 'disabled' },
];

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' },
];

const PER_PAGE = 15;

type LeafColumnKey =
  | 'id'
  | 'task'
  | 'priority'
  | 'issueType'
  | 'developer'
  | 'complete';

/**
 * Таблица с блоком управления, фильтрами, пагинацией, группировкой шапки и
 * итоговой строкой. Переключатели над таблицей включают чистый вид и зебру.
 */
export const Appearance: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Чистый вид и зебра (прототип)',
  render: () => {
    const [rows, setRows] = useState(createRows);

    const [variant, setVariant] = useState<AppearanceVariant>('clean');
    const [zebra, setZebra] = useState(true);
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');

    const [showPagination, setShowPagination] = useState(true);
    const [showControlBlock, setShowControlBlock] = useState(true);
    const [showSummaryRow, setShowSummaryRow] = useState(true);
    const [showColumnsGrouping, setShowColumnsGrouping] = useState(true);
    const [fillWidth, setFillWidth] = useState(true);

    // Колонка без width получает grow и растягивается: таблица сначала
    // подбирает ширину по содержимому, затем один раз делит остаток места
    // поровну. Число становится нижней границей ширины. С fillWidth=false
    // ширина фиксированная, справа остаётся пустое место.
    const columnWidth = useCallback(
      (px: number) => (fillWidth ? { minWidth: px } : { width: px }),
      [fillWidth],
    );

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(PER_PAGE);

    const renderSummaryCell = useCallback(
      (props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) =>
        props.row.values.find((el) => el.columnId === props.column.key)
          ?.value ?? '',
      [],
    );

    // Листовые колонки одни и те же, группировка лишь оборачивает их в
    // верхний уровень шапки.
    const leafColumns = useMemo<
      Record<LeafColumnKey, ColumnConfig<Row, TSummaryRowData>>
    >(
      () => ({
        id: {
          key: 'id',
          name: 'ID',
          ...columnWidth(90),
          sortingType: 'numberSort',
          resizable: true,
          renderSummaryCell,
        },
        task: {
          key: 'task',
          name: 'Title',
          ...columnWidth(220),
          sortingType: 'stringSort',
          resizable: true,
          editingCell: { component: 'inputString' },
          renderSummaryCell,
        },
        priority: {
          key: 'priority',
          name: 'Priority',
          ...columnWidth(140),
          sortingType: 'stringSort',
          resizable: true,
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'All', text: 'All' },
                { value: 'High', text: 'High' },
                { value: 'Critical', text: 'Critical' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' },
              ],
            },
            keyInFilterState: 'priority',
            valueInRow: (r) => r.priority,
            filter: {
              typeOfValue: 'single',
              filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true),
            },
          },
        },
        issueType: {
          key: 'issueType',
          name: 'Issue Type',
          ...columnWidth(150),
          sortingType: 'stringSort',
          resizable: true,
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'Bug', text: 'Bug' },
                { value: 'Improvement', text: 'Improvement' },
                { value: 'Epic', text: 'Epic' },
                { value: 'Story', text: 'Story' },
              ],
            },
            keyInFilterState: 'issueType',
            valueInRow: (r) => r.issueType,
            filter: {
              typeOfValue: 'multiple',
              filteringType: (fv, rv) =>
                !fv.length || fv.some((fvCurr) => fvCurr === rv),
            },
          },
        },
        developer: {
          key: 'developer',
          name: 'Developer',
          ...columnWidth(180),
          sortingType: 'stringSort',
          resizable: true,
          editingCell: { component: 'inputString' },
          filtering: {
            component: 'input',
            keyInFilterState: 'developer',
            valueInRow: (r) => r.developer,
            filter: 'startWith',
          },
        },
        complete: {
          key: 'complete',
          name: '% Complete',
          ...columnWidth(140),
          sortingType: 'numberSort',
          resizable: true,
          editingCell: { component: 'inputString' },
        },
      }),
      [renderSummaryCell, columnWidth],
    );

    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(
      () =>
        showColumnsGrouping
          ? [
              leafColumns.id,
              leafColumns.task,
              {
                key: 'params',
                name: 'Параметры',
                children: [leafColumns.priority, leafColumns.issueType],
              },
              {
                key: 'progress',
                name: 'Выполнение',
                children: [leafColumns.developer, leafColumns.complete],
              },
            ]
          : [
              leafColumns.id,
              leafColumns.task,
              leafColumns.priority,
              leafColumns.issueType,
              leafColumns.developer,
              leafColumns.complete,
            ],
      [leafColumns, showColumnsGrouping],
    );

    // Фильтр по типу задачи задан сразу: так на стенде с самого начала видна
    // строка активных фильтров под блоком управления.
    const filteringStateAndSetter = useState({
      priority: 'All',
      issueType: ['Bug', 'Story', 'Epic', 'Improvement'],
      developer: '',
      globalFilter: '',
    });
    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );

    const rowKeyGetter = useCallback((r: Row) => `${r.id}`, []);

    const bottomSummaryRows = useMemo<TSummaryRowData[]>(
      () => [
        {
          type: 'bottom',
          values: [
            { columnId: 'id', value: 'Итого' },
            { columnId: 'task', value: `Всего задач: ${rows.length}` },
          ],
        },
      ],
      [rows],
    );

    return (
      <div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            marginBottom: 12,
          }}
        >
          <Select
            label="cellsSelection.mode"
            value={selectionMode}
            onChange={(value) => setSelectionMode(value as CellsSelectionMode)}
            items={SELECTION_MODE_OPTIONS}
            style={{ width: 200 }}
          />
          <Select
            label="highlightActiveType"
            value={highlightActiveType}
            onChange={(value) =>
              setHighlightActiveType(value as HighlightActiveType)
            }
            items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS}
            style={{ width: 180 }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 12,
          }}
        >
          <Switch
            label="appearance.variant = 'clean'"
            checked={variant === 'clean'}
            onChange={() =>
              setVariant((prev) => (prev === 'clean' ? 'default' : 'clean'))
            }
          />
          <Switch
            label="appearance.zebra"
            checked={zebra}
            onChange={() => setZebra((prev) => !prev)}
          />
          <Switch
            label="Блок управления"
            checked={showControlBlock}
            onChange={() => setShowControlBlock((prev) => !prev)}
          />
          <Switch
            label="Пагинация"
            checked={showPagination}
            onChange={() => setShowPagination((prev) => !prev)}
          />
          <Switch
            label="Итоговая строка"
            checked={showSummaryRow}
            onChange={() => setShowSummaryRow((prev) => !prev)}
          />
          <Switch
            label="Группировка шапки"
            checked={showColumnsGrouping}
            onChange={() => setShowColumnsGrouping((prev) => !prev)}
          />
          <Switch
            label="Колонки на всю ширину"
            checked={fillWidth}
            onChange={() => setFillWidth((prev) => !prev)}
          />
        </div>

        <TableCanvas
          // растягивание колонок срабатывает один раз при первой раскладке,
          // поэтому при переключении таблица пересоздаётся
          key={fillWidth ? 'fill' : 'fixed'}
          tableConfig={{
            appearance: { variant, zebra },
            containerStyle: { height: '80vh' },
            fullScreenEnabled: true,
            resizableColumn: true,
            editing: {
              onRowsChange: setRows,
              rowKeyGetter,
            },
            rowSize: {
              default: 'big',
              showInControl: true,
            },
            cellsSelection: { mode: selectionMode },
            highlightActiveType,
            searching: {
              enabled: true,
              debounceDelay: 400,
            },
            summaryRows: {
              showDefault: showSummaryRow,
              showInControl: true,
            },
            columnsControl: {
              enable: true,
              hiding: true,
              pinning: true,
              reorderingAside: true,
              reorderingHeader: true,
              pinnedDefault: ['id'],
            },
            rowMarkers: {
              startIndex: 1,
            },
            subRows: {
              getSubRows: (row) => row?.subRows,
              rowKeyGetter: (row) => row.id,
            },
            ...(showPagination && {
              pagination: {
                value: page,
                perPage,
                count: rows.length,
                onChangePageValue(value, scrollToTop) {
                  setPage(value ?? 1);
                  scrollToTop();
                },
                onChange(value, pageSize, scrollToTop) {
                  setPage(
                    pageSize !== undefined && pageSize !== perPage
                      ? 1
                      : value ?? 1,
                  );
                  setPerPage(pageSize ?? perPage);
                  scrollToTop();
                },
              },
            }),
            controlBlock: {
              show: showControlBlock,
              rightSideInner: [
                {
                  text: 'Скачать',
                  contentLeft: <IconSb color="inherit" />,
                  'data-test-id': 'download',
                },
              ],
              massActionPanel: {
                buttons: [
                  {
                    type: 'button',
                    view: 'secondary',
                    text: 'Действие',
                    contentLeft: <IconSb color="inherit" />,
                    'data-test-id': 'mass-action',
                  },
                ],
              },
            },
            filtering: {
              state: filteringStateAndSetter,
              filtersInfo: {
                priority: {
                  label: 'Priority',
                  clearedValue: 'All',
                },
                issueType: {
                  label: 'Issue Type',
                  clearedValue: [],
                },
                developer: {
                  label: 'Developer',
                  clearedValue: '',
                },
                globalFilter: {
                  label: 'Global filter',
                  clearedValue: '',
                },
              },
            },
            selecting: {
              state: selectingRowStateAndSetter,
              rowKeyGetter,
              showDefault: true,
            },
            sorting: {
              state: sortingStateAndSetter,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
          bottomSummaryRows={bottomSummaryRows}
        />
      </div>
    );
  },
};
