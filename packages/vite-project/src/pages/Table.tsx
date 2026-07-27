import {
  EmbedIconButton,
  LinkButton,
  Switch,
  TextField,
  Tooltip,
  Table,
} from '@daisforge/ui';
import { IconRefresh, IconResetOutline, IconSber } from '@daisforge/ui/icons';
import type {
  ColumnConfig,
  RenderSubRowCell,
  SortColumn,
} from '@daisforge/ui';

import { useCallback, useMemo, useState } from 'react';

import { createRows, type Row } from '../data/tableData';

/** Пример конфигурации с подключением множественных функциональных возможностей' **/
export const TableExample = () => {
  const [bool, setBool] = useState(false);
  const columnsCC = useMemo(
    (): readonly ColumnConfig<Row>[] => [
      {
        key: 'task',
        name: 'Task',
        minWidth: 200,
        sortingType: 'stringSort',

        resizable: true,

        renderSummaryCell: () => 'Итого',
        editingCell: {
          component: 'inputString',
          editedSuccessfully: { value: (row) => row.done },
        },
        subRow: {
          isColumnWithArrow: ({ keyText }) => {
            if (keyText.toLowerCase().startsWith('key')) {
              return false;
            }
            return true;
          },
          keyOfColumnInSubRow: 'task',
          renderSubRowCell: ((renderCellProps, lvl) => (
            <span
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {renderCellProps.row.task}
              lvl={lvl}
            </span>
          )) as RenderSubRowCell<Row>,
          editingCell: {
            component: 'select',
            options: {
              type: 'constant',
              options: [
                { text: 'kek', value: 'kek' },
                { text: 'mek', value: 'mek' },
              ],
            },
          },
        },

        keyText: {
          key: 'id',
          name: 'Ключ - Task',
          renderCell: ({ row }) => row.id,
          subRow: {
            keyOfColumnInSubRow: 'id',
            isColumnWithArrow: ({ keyText }) => {
              if (keyText.toLowerCase().startsWith('key')) {
                return true;
              }
              return false;
            },
          },
        },
        rowsGrouping: {
          columnGroupLabel: 'Task',
        },
      },
      ...(bool
        ? ([
            {
              key: 'priority',
              name: 'Priority',
              resizable: true,
              sortingType: 'stringSort',
              subRow: {
                keyOfColumnInSubRow: 'issueType',
                editingCell: { component: 'inputString' },
              },
              filtering: {
                component: 'select',
                keyInFilterState: 'priority',
                valueInRow: (r) => r.priority,
                filter: {
                  typeOfValue: 'single',
                  filteringType: (fv, rv) => (fv !== 'All' ? rv === fv : true),
                },
                selectOptions: {
                  type: 'constant',
                  options: [
                    { value: 'All', text: 'All' },
                    { value: 'High', text: 'High' },
                    {
                      value: 'Critical',
                      text: 'Critical',
                    },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' },
                  ],
                },
              },
              editingCell: {
                component: 'select',
                options: {
                  type: 'constant',
                  options: [
                    { value: 'High', text: 'High' },
                    {
                      value: 'Critical',
                      text: 'Critical',
                    },
                    { value: 'Medium', text: 'Medium' },
                    { value: 'Low', text: 'Low' },
                  ],
                },
              },
            },
          ] as readonly ColumnConfig<Row>[])
        : []),

      {
        key: 'issueType',
        name: 'issueType',
        sortingType: 'stringSort',
        resizable: true,
        filtering: {
          component: 'select',
          selectOptions: {
            type: 'stateInHeaderContext',
            optionsKeyInHeaderContext: 'issueTypeOptions',
          },
          keyInFilterState: 'issueType',
          valueInRow: (r) => r.issueType,
          filter: {
            typeOfValue: 'multiple',
            filteringType: (fv, rv) =>
              !fv.length || fv.some((fvCurr) => fvCurr === rv),
          },
        },
        editingCell: {
          component: 'select',
          options: {
            type: 'stateInRowContext',
            optionsKeyInRowContext: 'issueTypeOptions',
          },
        },
        subRow: {
          keyOfColumnInSubRow: 'issueType',
          editingCell: { component: 'inputString' },
        },
        rowsGrouping: {
          columnGroupLabel: 'issueType',
        },
      },
      {
        key: 'developer',
        name: 'Developer',
        resizable: true,
        sortingType: 'stringSort',
        filtering: {
          component: 'input',
          keyInFilterState: 'developer',
          valueInRow: (r) => r.developer,
          filter: 'startWith',
        },
        editingCell: { component: 'inputString' },
      },
      {
        key: 'complete',
        name: '% Complete',
        resizable: true,
        sortingType: 'numberSort',
        filtering: {
          component: 'input',
          keyInFilterState: 'complete',
          valueInRow: (r) => r.complete,
          filter: (fv, rv) => (+rv || 0) >= (+fv || 0),
        },
        editingCell: {
          component: 'inputNumber',
          error: { value: (row) => row.done },
        },
        subRow: {
          keyOfColumnInSubRow: 'complete',
          editingCell: { component: 'inputNumber' },
        },
      },
      {
        key: 'tr',
        resizable: true,
        name: 'tr.kkk',
        sortingType: 'stringSort',
        // editingCell: { component: 'inputString' },
      },
    ],
    [bool],
  );
  const [rows, setRows] = useState(createRows);
  const [groupByArr, setGroupByArr] = useState<string[]>([]);

  const filteringStateAndSetter = useState({
    task: '',
    priority: 'All',
    issueType: [],
    developer: '',
    complete: undefined,
    globalTask: '',
  });

  const sortingStateAndSetter = useState<readonly SortColumn[]>([]);

  const selectingRowStateAndSetter = useState(
    (): ReadonlySet<string> => new Set(),
  );

  const headerContextValue = useMemo(
    () => ({
      issueTypeOptions: [
        { text: 'Bug', value: 'Bug1' },
        { text: 'Improvement', value: 'Improvement' },
        { text: 'Epic', value: 'Epic' },
        {
          text: 'Story',
          value: 'Story',
        },
      ],
    }),
    [],
  );
  const rowContextValue = useMemo(
    () => ({
      issueTypeOptions: [
        { text: 'Bug', value: 'Bug' },
        { text: 'Improvement', value: 'Improvement' },
        { text: 'Epic', value: 'Epic' },
        { text: 'Story', value: 'Story' },
      ],
    }),
    [],
  );
  const [controlBlock, setControlBlock] = useState(true);
  const [isCustomFeatureActive, setIsCustomFeatureActive] = useState(false);
  const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] = useState(false);

  const rowKeyGetter = useCallback((r: Row) => `${r.id}`, []);

  const tableConfigSubRows = useMemo(
    () => ({
      rowKeyGetter,
      getSubRows: (r: Row) => r.subRows,
    }),
    [rowKeyGetter],
  );

  return (
    <div>
      <Switch
        style={{ width: 'fit-content' }}
        label={isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'}
        checked={isVisibleLoadingOverlay}
        onChange={() => setIsVisibleLoadingOverlay((prev) => !prev)}
      />
      <Switch
        style={{ width: 'fit-content' }}
        label="Включить колонки Title и Priority"
        checked={bool}
        onChange={() => setBool((prev) => !prev)}
      />
      <Switch
        style={{ width: 'fit-content' }}
        label="Включить блок управления"
        checked={controlBlock}
        onChange={() => setControlBlock((prev) => !prev)}
      />
      <Table
        tableConfig={{
          css: `
              & .rdg-control-block-container {
                background-color: red;
                min-height: 200px;
              }
            `,
          loadingOverlay: {
            active: isVisibleLoadingOverlay,
            showSubtitleDelay: 5000,
            subtitle:
              'Данные обрабатываются, обычно это занимает не более 10 секунд',
          },
          containerStyle: { height: '80vh' },
          fullScreenEnabled: {
            showInControl: true,
            domMetadata: {
              className: 'someClassForFullScreenEnabled',
              dataAttributes: {
                'data-test-fullscreen-enabled': 'test-fullscreen-enabled',
              },
            },
          },
          columnsControl: {
            enable: true,
            pinnedDefault: ['task', 'developer'],
          },
          rowSize: {
            showInControl: true,
            domMetadata: {
              className: 'someTestClassForRowSize',
              dataAttributes: {
                'data-test-row-size': 'test-row-size',
              },
            },
          },
          keyText: {
            showInControl: true,
            controlBlock: {
              domMetadata: {
                className: 'someTestClassForKeyTextInControlBlock',
                dataAttributes: {
                  'data-test-key-text-control-block':
                    'test-key-text-control-block',
                },
              },
            },
            sidebar: {
              domMetadata: {
                className: 'someTestClassForKeyTextInSidebar',
                dataAttributes: {
                  'data-test-key-text-sidebar': 'test-key-text-sidebar',
                },
              },
            },
          },
          summaryRows: {
            showDefault: true,
            showInControl: true,
            domMetadata: {
              className: 'someTestClassForSummaryRows',
              dataAttributes: {
                'data-test-summary-rows': 'test-summary-rows',
              },
            },
          },
          searching: {
            enabled: true,
            searchClasses: 'someClassForSearch',
            debounceDelay: 400,
            domMetadata: {
              className: 'someTestClassForSearch',
              dataAttributes: {
                'data-test-searching': 'test-searching',
              },
            },
          },
          controlBlock: {
            show: controlBlock,
            leftSideInner: [
              {
                text: 'Label',
                contentLeft: <IconSber color="inherit" />,
                dropdown: {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onItemSelect: (item, _) => alert(item.value),
                  items: [
                    {
                      value: 'Some label 1',
                      label: 'Some label 1',
                      items: [
                        {
                          value: 'some-inner-label1',
                          label: 'some-inner-label1',
                        },
                      ],
                    },
                    {
                      value: 'Some label 2',
                      label: 'Some label 2',
                    },
                  ],
                },
                'data-test-id': 'Label left 1',
              },
              {
                text: 'Label2',
                contentLeft: <IconSber color="inherit" />,
                view: 'linkAccent',
                onClick: () => alert('Label2'),
              },
            ],
            rightSideInner: [
              {
                text: 'Label',
                contentLeft: <IconSber color="inherit" />,
                view: 'linkAccent',
                className: 'test',
                'data-test-id': 'Label right 1',
              },
              {
                text: 'Скачать',
                contentLeft: <IconSber color="inherit" />,
                className: 'test2',
                'data-test-id': 'store2',
              },
              {
                text: 'Выгрузить',
                contentLeft: <IconSber color="inherit" />,
              },
            ],
            customFeatures: [
              {
                value: 'customFeatureRefresh',
                CustomIconRender: () => (
                  <Tooltip
                    text="Кастомная фича обновить"
                    trigger="hover"
                    mouseEnterDelay={750}
                    usePortal
                    animated
                    target={
                      <EmbedIconButton
                        size="m"
                        onClick={() => {
                          // eslint-disable-next-line no-alert
                          alert(
                            'Click on customFeatureRefresh in ControlBlock',
                          );
                        }}
                      >
                        <IconRefresh size="s" />
                      </EmbedIconButton>
                    }
                  />
                ),
                details: {
                  type: 'button',
                  label: 'Обновить',
                  onClick: () =>
                    // eslint-disable-next-line no-alert
                    alert('Click for customFeatureRefresh in Sidebar'),
                  icon: <IconRefresh size="s" />,
                  'data-test-id': 'store3',
                },
              },
              {
                value: 'customFeature1',
                CustomIconRender: () => (
                  <EmbedIconButton
                    size="m"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Click on customFeature1 in ControlBlock');
                    }}
                  >
                    <IconSber size="s" />
                  </EmbedIconButton>
                ),
                details: {
                  type: 'button',
                  label: 'Label1',
                  onClick: () =>
                    // eslint-disable-next-line no-alert
                    alert('Click for customFeature1 in Sidebar'),
                  icon: <IconSber size="s" />,
                },
              },
              {
                value: 'Label2',
                label: 'Label2',
                CustomIconRender: () => (
                  <EmbedIconButton
                    size="m"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Click on customFeatureLabel2 in ControlBlock');
                    }}
                    title="custom feature 2"
                  >
                    <IconSber size="s" />
                  </EmbedIconButton>
                ),
                details: {
                  type: 'button',
                  label: 'Label2',
                  onClick: () =>
                    // eslint-disable-next-line no-alert
                    alert('Click for customFeatureLabel2 in sidebar'),
                  icon: <IconSber size="s" />,
                },
              },
              {
                value: 'Label3',
                label: 'Label3',
                CustomIconRender: () => (
                  <EmbedIconButton
                    size="m"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Click on customFeatureLabel3 in ControlBlock');
                    }}
                    title="custom feature 3"
                  >
                    <IconSber size="s" />
                  </EmbedIconButton>
                ),
                details: {
                  type: 'button',
                  label: 'Label3',
                  onClick: () =>
                    // eslint-disable-next-line no-alert
                    alert('Click for customFeatureLabel3 in Sidebar'),
                  icon: <IconSber size="s" />,
                },
              },
              {
                value: 'statusSelect',
                CustomIconRender: () => (
                  <EmbedIconButton
                    size="m"
                    onClick={() => {
                      // eslint-disable-next-line no-alert
                      alert('Click on customFeatureStatus in ControlBlock');
                    }}
                    title="custom feature status"
                  >
                    <IconSber size="s" />
                  </EmbedIconButton>
                ),
                details: {
                  type: 'select',
                  label: 'Статус',
                  icon: <IconSber size="s" />,
                  value: isCustomFeatureActive ? 'active' : 'inactive',
                  options: [
                    { value: 'active', label: 'Активный' },
                    { value: 'inactive', label: 'Неактивный Неактивный' },
                  ],
                  onChange: (value) =>
                    setIsCustomFeatureActive(value === 'active'),
                  'data-test-id': 'store4',
                },
              },
            ],
          },
          rowsGrouping: {
            rowKeyGetter: (r) => r.id,
            groupByState: [groupByArr, setGroupByArr],
            groupedColumnProps: {
              name: <>моя группировка</>,
              resizable: true,
            },
            domMetadata: {
              className: 'someTestClassForRowsGroupingButton',
              dataAttributes: {
                // 'data-test-rows-grouping': 'test-rows-grouping',
              },
            },
          },
          view: {
            type: 'both-types',
            typeCardsRender: <>121212</>,
            domMetadata: {
              className: 'testClassForView',
              dataAttributes: {
                'data-test-view-mode': 'test-view-mode',
              },
            },
          },
          filtering: {
            state: filteringStateAndSetter,
            filtersInfo: {
              task: {
                label: 'task',
                clearedValue: '',
              },
              priority: {
                label: 'Some Label',
                clearedValue: 'All',
              },
              issueType: {
                label: 'issueType',
                clearedValue: [],
              },
              complete: {
                label: 'complete',
                clearedValue: undefined,
              },
              developer: {
                label: 'Developer',
                clearedValue: '',
              },
              globalTask: {
                label: 'Global',
                clearedValue: '',
              },
            },
            sidebarConfig: {
              items: {
                globalTask: {
                  label: 'some global',
                  customRenderFn: (filters, setFilters) => (
                    <TextField
                      value={filters['globalTask']}
                      onChange={(e) => {
                        setFilters((prev) => ({
                          ...prev,
                          globalTask: e.target.value,
                        }));
                      }}
                    />
                  ),
                },
              },
            },
            chipStyle: (group, item) => {
              if (
                'groupLabel' in group &&
                group?.groupLabel === 'issueType' &&
                item &&
                item.label === 'Bug'
              ) {
                return {
                  background: 'red',
                };
              }
              return {};
            },
            renderGroupLabel: (group) => {
              if (group.groupLabel === 'issueType') {
                return 'issueTypeCustomLabel';
              }
              return group.groupLabel;
            },
            renderChipLabel: (group, item) => {
              if (group) {
                if (group.groupLabel === 'issueType') {
                  return item.id.toString();
                }
              }
              return item.label.toString();
            },
          },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter,
            selectingRules: {
              levels: 'all',
            },
            showDefault: false,
            controlBlock: {
              domMetadata: {
                className: 'customClassForSelectingInControlBlock',
                dataAttributes: {
                  'data-test-selecting': 'test-selecting',
                },
              },
            },
            sidebar: {
              domMetadata: {
                className: 'customClassForSelectingInSidebar',
                dataAttributes: {
                  'data-test-selecting-sidebar': 'test-selecting-sidebar',
                },
              },
            },
          },
          sorting: {
            state: sortingStateAndSetter,
          },
          editing: {
            onRowsChange: setRows,
            rowKeyGetter,
            domMetadata: {
              className: 'editingCustomClass',
              dataAttributes: {
                'data-test-editing': 'test-editing',
              },
            },
          },
          subRows: tableConfigSubRows,
          resizableColumn: true,
          sidebarConfig: {
            defaultTabs: [
              {
                id: 'tableSettings',
                domMetadata: {
                  className: 'someClassForTableSettingsInSidebar',
                  dataAttributes: {
                    'data-test-table-settings': 'test-table-setting',
                  },
                },
                customGeneralSettingsSlot: (
                  <div>Some custom render for tableSettings</div>
                ),
                titleRightSlot: (
                  <LinkButton
                    contentLeft={<IconResetOutline size="xs" />}
                    view="secondary"
                    onClick={() => alert('Вид по умолчанию')}
                    size="xs"
                  >
                    Вид по умолчанию
                  </LinkButton>
                ),
              },
              {
                id: 'filtering',
                domMetadata: {
                  className: 'someClassForTableFilteringInSidebar',
                  dataAttributes: {
                    'data-test-table-filtering': 'test-table-filtering',
                  },
                },
              },
              {
                id: 'columns',
                domMetadata: {
                  className: 'someClassForTableColumnsInSidebar',
                  dataAttributes: {
                    'data-test-table-columns': 'test-table-columns',
                  },
                },
              },
            ],
          },
        }}
        columnConfig={columnsCC}
        rows={rows}
        topSummaryRows={[0]}
        bottomSummaryRows={[0]}
        headerContextValue={headerContextValue}
        rowContextValue={rowContextValue}
      />
    </div>
  );
};
