/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { Select } from '@ui-kit/components/Select';
import { Switch } from '@ui-kit/components/Switch';
import {
  Canvas,
  CellsSelectionMode,
  ColumnConfig,
  HighlightActiveType,
  SortColumn,
  SummaryCellInfoGlideInstance,
  TableCanvas,
  TableFilterSelectListItem
} from '@ui-kit/components/TableCanvas';
import { IconInfo, IconRefresh, IconSb, IconStar } from '@ui-kit/icons';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/MultipleFeatures',
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

type Story = StoryObj;

type TSummaryRowData = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

// highlightActiveType — только подсветка строки ('row'/'disabled').
// 'cell'/'range-cell' устарели: режим выделения задаёт cellsSelection.mode.
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
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' }
];

export const MultipleFeatures: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  name: 'Пример конфигурации с подключением множественных функциональных возможностей',
  render: () => {
    const [rows] = useState(createRows);
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('row');
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');

    const renderCommonSummaryCell = useCallback(
      (props: SummaryCellInfoGlideInstance<Row, TSummaryRowData>) =>
        props.row.values.find((el) => el.columnId === props.column.key)
          ?.value ?? '',
      []
    );

    const columnConfig = useMemo<readonly ColumnConfig<Row, TSummaryRowData>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          sortingType: 'numberSort',
          resizable: true,
          renderSummaryCell: renderCommonSummaryCell,
          keyText: {
            key: 'idKey',
            name: 'Ключ - ID',
            renderCell: ({ row }) => `KEY-${row.id}`
          }
        },
        {
          key: 'task',
          name: 'Title',
          sortingType: 'stringSort',
          resizable: true,
          renderSummaryCell: renderCommonSummaryCell
        },
        {
          key: 'priority',
          name: 'Priority',
          sortingType: 'stringSort',
          resizable: true,
          renderSummaryCell: (props) => {
            const { row, theme } = props;
            return (
              <Canvas.Container
                padding={{
                  left: theme.cellHorizontalPadding,
                  right: theme.cellHorizontalPadding
                }}
              >
                <Canvas.Text color={row.type === 'top' ? 'red' : 'orange'}>
                  {renderCommonSummaryCell(props)}
                </Canvas.Text>
              </Canvas.Container>
            );
          },
          filtering: {
            component: 'select',
            selectOptions: {
              type: 'constant',
              options: [
                { value: 'All', text: 'All' },
                { value: 'High', text: 'High' },
                { value: 'Critical', text: 'Critical' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Low', text: 'Low' }
              ]
            },
            keyInFilterState: 'priority',
            valueInRow: (r) => r.priority,
            filter: {
              typeOfValue: 'single',
              filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true)
            }
          }
        },
        {
          key: 'issueType',
          name: 'Issue Type',
          sortingType: 'stringSort',
          resizable: true,
          filtering: {
            beforeList(props) {
              return (
                <TableFilterSelectListItem
                  $size={props.headerContextState.rowSize}
                >
                  custom beforeList
                </TableFilterSelectListItem>
              );
            },
            component: 'select',
            selectOptions: {
              type: 'stateInHeaderContext',
              optionsKeyInHeaderContext: 'issueTypeOptions'
            },
            keyInFilterState: 'issueType',
            valueInRow: (r) => r.issueType,
            filter: {
              typeOfValue: 'multiple',
              filteringType: (fv, rv) =>
                !fv.length || fv.some((fvCurr) => fvCurr === rv)
            }
          }
        },
        {
          key: 'developer',
          name: 'Developer',
          sortingType: 'stringSort',
          resizable: true,
          filtering: {
            component: 'input',
            keyInFilterState: 'developer',
            valueInRow: (r) => r.developer,
            filter: 'startWith'
          }
        },
        {
          key: 'complete',
          name: '% Complete',
          sortingType: 'numberSort',
          resizable: true,
          filtering: {
            component: 'input',
            keyInFilterState: 'complete',
            valueInRow: (r) => r.complete,
            filter: (fv, rv) => (+rv || 0) >= (+fv || 0)
          }
        }
      ],
      [renderCommonSummaryCell]
    );

    const filteringStateAndSetter = useState({
      priority: 'All',
      issueType: [],
      developer: '',
      complete: '',
      globalFilter: ''
    });

    const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set()
    );

    const headerContextValue = useMemo(
      () => ({
        issueTypeOptions: [
          { text: 'Bug', value: 'Bug' },
          { text: 'Improvement', value: 'Improvement' },
          { text: 'Epic', value: 'Epic' },
          { text: 'Story', value: 'Story' }
        ]
      }),
      []
    );

    const rowKeyGetter = useCallback((r: Row) => `${r.id}`, []);

    const [isCustomFeatureActive, setIsCustomFeatureActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(true);
    const [controlBlock, setControlBlock] = useState(true);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] =
      useState(false);
    const [unstickyHeader, setUnstickyHeader] = useState(false);

    const bottomSummaryRowsData: TSummaryRowData[] = useMemo(
      () => [
        {
          type: 'bottom' as const,
          values: [
            { columnId: 'id', value: 'Итого' },
            { columnId: 'task', value: `Всего тасков: ${rows.length}` },
            {
              columnId: 'priority',
              value: `Средних: ${
                rows.filter((el) => el.priority === 'Medium').length
              }`
            }
          ]
        }
      ],
      [rows]
    );

    const CustomInfoTab = () => (
      <>
        <p>Всего строк: {rows.length}</p>
        <p>Выбрано строк: {selectingRowStateAndSetter[0].size}</p>
      </>
    );

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
            label="highlightActiveType (подсветка строки)"
            value={highlightActiveType}
            onChange={(value) =>
              setHighlightActiveType(value as HighlightActiveType)
            }
            items={HIGHLIGHT_ACTIVE_TYPE_OPTIONS}
          />
        </div>

        <Switch
          style={{ width: 'fit-content' }}
          label={
            isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'
          }
          checked={isVisibleLoadingOverlay}
          onChange={() => setIsVisibleLoadingOverlay((prev) => !prev)}
        />
        <Switch
          style={{ width: 'fit-content' }}
          label="Включить блок управления"
          checked={controlBlock}
          onChange={() => setControlBlock((prev) => !prev)}
        />
        <Switch
          style={{ width: 'fit-content' }}
          label="Открепить шапку (unsticky header)"
          checked={unstickyHeader}
          onChange={() => setUnstickyHeader((prev) => !prev)}
        />
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '80vh' },
            unstickyHeader,
            fullScreenEnabled: true,
            resizableColumn: true,
            loadingOverlay: {
              active: isVisibleLoadingOverlay,
              showSubtitleDelay: 5000,
              subtitle:
                'Данные обрабатываются, обычно это занимает не более 10 секунд'
            },
            rowSize: {
              default: 'big',
              showInControl: true
            },
            cellsSelection: { mode: selectionMode },
            highlightActiveType,
            searching: {
              enabled: true,
              debounceDelay: 400
            },
            keyText: {
              showInControl: true,
              controlBlock: {},
              sidebar: {}
            },
            summaryRows: {
              showDefault: true,
              showInControl: true
            },
            columnsControl: {
              enable: true,
              hiding: true,
              pinning: true,
              reorderingAside: true,
              reorderingHeader: true,
              disableHiding: ['id'],
              disablePinning: ['developer'],
              columnsLabel: {
                task: 'Задачи'
              },
              pinnedDefault: ['id']
            },
            rowMarkers: {
              startIndex: 1
            },
            sidebarConfig: {
              customTabs: [
                {
                  id: 'customInfo',
                  label: 'Информация',
                  icon: <IconInfo size="s" />,
                  content: <CustomInfoTab />,
                  title: 'Информация',
                  showInSidebar: true
                }
              ]
            },
            controlBlock: {
              show: controlBlock,
              rightSideInner: [
                {
                  text: 'Label',
                  contentLeft: <IconSb color="inherit" />,
                  view: 'linkAccent',
                  'data-test-id': 'Label right 1'
                },
                {
                  text: 'Скачать',
                  contentLeft: <IconSb color="inherit" />,
                  'data-test-id': 'store2'
                }
              ],
              customFeatures: [
                {
                  value: 'favorite',
                  label: 'Удалить из избранного',
                  Icon: IconStar,
                  onClick: () => {},
                  mandatory: true,
                  details: {
                    type: 'switch',
                    label: 'В избранном',
                    checked: isFavorite,
                    onChange: (e) => setIsFavorite(e.target.checked)
                  }
                },
                {
                  value: 'customFeatureRefresh',
                  CustomIconRender: () => (
                    <EmbedIconButton
                      size="m"
                      onClick={() => {
                        alert('Click on customFeatureRefresh in ControlBlock');
                      }}
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconRefresh size="s" />
                    </EmbedIconButton>
                  ),
                  details: {
                    type: 'button',
                    label: 'Обновить',
                    onClick: () =>
                      alert('Click for customFeatureRefresh in Sidebar'),
                    // Иконка в дропдауне мельче на маленьком rowSize
                    icon: ({ rowSize, isInDropdown }) => (
                      <IconRefresh
                        size={isInDropdown && rowSize === 'small' ? 'xs' : 's'}
                      />
                    )
                  }
                },
                {
                  value: 'statusSelect',
                  CustomIconRender: () => (
                    <EmbedIconButton
                      size="m"
                      onClick={() => {
                        alert('Click on statusSelect in ControlBlock');
                      }}
                      title="custom feature status"
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconSb size="s" />
                    </EmbedIconButton>
                  ),
                  details: {
                    type: 'select',
                    label: 'Статус',
                    // Иконка в дропдауне мельче на маленьком rowSize
                    icon: ({ rowSize, isInDropdown }) => (
                      <IconSb
                        size={isInDropdown && rowSize === 'small' ? 'xs' : 's'}
                      />
                    ),
                    value: isCustomFeatureActive ? 'active' : 'inactive',
                    options: [
                      { value: 'active', label: 'Активный' },
                      { value: 'inactive', label: 'Неактивный' }
                    ],
                    onChange: (value) =>
                      setIsCustomFeatureActive(value === 'active')
                  }
                }
              ],
              massActionPanel: {
                buttons: [
                  {
                    type: 'button',
                    view: 'secondary',
                    text: 'Label',
                    contentLeft: <IconSb color="inherit" />,
                    dropdown: {
                      onItemSelect: (item, _) => alert(item.value),
                      items: [
                        {
                          value: 'Some label 1',
                          label: 'Some label 1',
                          items: [
                            {
                              value: 'some-inner-label1',
                              label: 'some-inner-label1'
                            }
                          ]
                        },
                        {
                          value: 'Some label 2',
                          label: 'Some label 2'
                        }
                      ]
                    },
                    'data-test-id': 'Label left 1'
                  },
                  {
                    type: 'button',
                    view: 'accent',
                    text: 'Label',
                    contentLeft: <IconSb color="inherit" />,
                    dropdown: {
                      onItemSelect: (item, _) => alert(item.value),
                      items: [
                        {
                          value: 'Some label 1',
                          label: 'Some label 1'
                        },
                        {
                          value: 'Some label 2',
                          label: 'Some label 2'
                        }
                      ]
                    },
                    'data-test-id': 'Label left 2'
                  }
                ]
              }
            },
            filtering: {
              state: filteringStateAndSetter,
              filtersInfo: {
                priority: {
                  label: 'Priority',
                  clearedValue: 'All'
                },
                issueType: {
                  label: 'Issue Type',
                  clearedValue: []
                },
                developer: {
                  label: 'Developer',
                  clearedValue: ''
                },
                complete: {
                  label: '% Complete',
                  clearedValue: ''
                },
                globalFilter: {
                  label: 'Global filter',
                  clearedValue: ''
                }
              }
            },
            selecting: {
              state: selectingRowStateAndSetter,
              rowKeyGetter,
              showDefault: false
            },
            sorting: {
              state: sortingStateAndSetter
            },
            onCellClicked: (cell, info) => {
              // eslint-disable-next-line no-console
              console.debug('[onCellClicked]', cell, info);
            }
          }}
          columnConfig={columnConfig}
          rows={rows}
          bottomSummaryRows={bottomSummaryRowsData}
          headerContextValue={headerContextValue}
        />
      </div>
    );
  }
};
