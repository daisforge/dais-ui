/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  SplitIconButton,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { TableTabs } from '@ui-kit/components/TableTabs';
import { IconPlus, IconRefresh, IconSb, IconStar } from '@ui-kit/icons';
import { surfaceAccentMinor, surfaceInfo } from '@ui-kit/tokens';
import React, { useCallback, useMemo, useState } from 'react';

import { useStarFeature } from './_lib/starFeature';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ControlBlock',
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj;

const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui';
import { TableTabs } from '@daisforge/ui';
`;

const useBaseSetup = () => {
  const [rows, setRows] = useState(createRows);
  const rowKeyGetter = useCallback((r: Row) => `${r.id}`, []);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      {
        key: 'id',
        name: 'ID',
        sortingType: 'numberSort',
        resizable: true,
        keyText: {
          key: 'idKey',
          name: 'Ключ - ID',
          renderCell: ({ row }) => `KEY-${row.id}`
        }
      },
      {
        key: 'task',
        name: 'Task',
        sortingType: 'stringSort',
        resizable: true,
        rowsGrouping: { columnGroupLabel: 'Task' }
      },
      {
        key: 'priority',
        name: 'Priority',
        sortingType: 'stringSort',
        resizable: true,
        rowsGrouping: { columnGroupLabel: 'Priority' }
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        resizable: true,
        rowsGrouping: { columnGroupLabel: 'Issue Type' }
      },
      {
        key: 'developer',
        name: 'Developer',
        resizable: true,
        rowsGrouping: { columnGroupLabel: 'Developer' }
      },
      {
        key: 'complete',
        name: '% Complete',
        sortingType: 'numberSort',
        resizable: true,
        rowsGrouping: { groupByColumn: false, columnGroupLabel: '% Complete' }
      }
    ],
    []
  );

  return { rows, setRows, rowKeyGetter, columnConfig };
};

// Пример кастомного слота: прямоугольная синяя рамка с текстом. Так в
// сториях показываем, что в rightSlot и слоты коллапсинга можно положить
// любой свой контент.
const CustomRightSlot = () => (
  <div
    style={{
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${surfaceInfo}`,
      color: surfaceInfo,
      backgroundColor: surfaceAccentMinor,
      padding: '0 8px',
      fontSize: 12,
      lineHeight: '18px',
      whiteSpace: 'nowrap'
    }}
  >
    кастомный слот
  </div>
);

const EditModeLeftPanel = () => (
  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
    {/* Два одинаковых элемента подряд, чтобы наблюдать за компрессией
        широкого левого слота в режиме редактирования */}
    <SplitIconButton
      icon={<IconSb size="s" />}
      size="m"
      chevronSize="xs"
      onIconClick={() => alert('Icon click')}
      items={[
        { value: 'copy', label: 'Копировать' },
        { value: 'paste', label: 'Вставить' }
      ]}
      onItemSelect={(item) => alert(`Edit: ${item.label}`)}
      domMetadata={{ 'data-test-id': 'edit-mode-compound-btn' }}
    />
    <SplitIconButton
      icon={<IconSb size="s" />}
      size="m"
      chevronSize="xs"
      onIconClick={() => alert('Icon click 2')}
      items={[
        { value: 'copy', label: 'Копировать' },
        { value: 'paste', label: 'Вставить' }
      ]}
      onItemSelect={(item) => alert(`Edit 2: ${item.label}`)}
      domMetadata={{ 'data-test-id': 'edit-mode-compound-btn-2' }}
    />
  </div>
);

/**
 * ### 1. Все фичи: Collapsing (above) + TableTabs + ControlBlock
 *
 * Демонстрация максимальной конфигурации:
 * - Коллапсинг above с rightSlot
 * - TableTabs с rightSlot и коллапсингом
 * - ControlBlock со всеми фичами: editing с editModeLeftSlot, search,
 *   rightSideInner, customFeatures с dividerLeft, keyText, rowSize, fullScreen
 */
export const AllFeaturesWithTabs: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: '1. Все фичи: Collapsing + TableTabs + ControlBlock',
  render: () => {
    const { rows, setRows, rowKeyGetter, columnConfig } = useBaseSetup();
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const selectingState = useState(
      (): ReadonlySet<string | number> => new Set()
    );
    const editingEnabled = useState(false);
    const activeTabState = useState<string | number>('tab1');
    const [isFavorite, setIsFavorite] = useState(false);
    const starFeature = useStarFeature();

    return (
      <TableTabs
        tabs={[
          { tabId: 'tab1', label: 'Основная' },
          { tabId: 'tab2', label: 'Архив' },
          { tabId: 'tab3', label: 'Аналитика' }
        ]}
        activeTabIdState={activeTabState}
        rightSlot={<CustomRightSlot />}
        collapsing={{
          enabled: true,
          collapseText: 'Свернуть таблицу',
          expandText: 'Развернуть таблицу',
          rightSlot: <CustomRightSlot />
        }}
      >
        <TableTabs.TabPanel tabId="tab1">
          <TableCanvas
            tableConfig={{
              containerStyle: { height: '60vh' },
              fullScreenEnabled: true,
              resizableColumn: true,
              rowSize: { default: 'big', showInControl: true },
              searching: { enabled: true },
              keyText: { showInControl: true, controlBlock: {}, sidebar: {} },
              rowsGrouping: {
                rowKeyGetter,
                groupByState: [groupByArr, setGroupByArr]
              },
              selecting: {
                state: selectingState,
                rowKeyGetter
              },
              editing: {
                onRowsChange: (newRows) => setRows(newRows as Row[]),
                rowKeyGetter,
                enabled: editingEnabled,
                showButtons: true,
                editModeLeftSlot: <EditModeLeftPanel />
              },
              controlBlock: {
                show: true,
                size: 'm',
                rightSideInner: [
                  {
                    text: 'Загрузить',
                    contentLeft: <IconSb color="inherit" />,
                    // Пользовательская кнопка сама подгоняет иконку под
                    // дропдаун: мельче на маленьком rowSize. Готовый
                    // contentLeft мы не трогаем, размер задаёт автор кнопки.
                    dropdownIconRender: (ctx) => (
                      <IconSb
                        color="inherit"
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                      />
                    )
                  },
                  {
                    text: 'Выгрузить',
                    contentLeft: <IconSb color="inherit" />,
                    dropdownIconRender: (ctx) => (
                      <IconSb
                        color="inherit"
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                      />
                    )
                  },
                  {
                    text: 'Экспорт',
                    contentLeft: <IconSb color="inherit" />,
                    dropdownIconRender: (ctx) => (
                      <IconSb
                        color="inherit"
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                      />
                    ),
                    dropdown: {
                      items: [
                        { value: 'csv', label: 'CSV' },
                        { value: 'xlsx', label: 'Excel' },
                        { value: 'pdf', label: 'PDF' }
                      ],
                      onItemSelect: (item: any) =>
                        alert(`Экспорт: ${item.label}`)
                    }
                  }
                ],
                customFeatures: [
                  {
                    value: 'refresh',
                    label: 'Обновить',
                    Icon: IconRefresh,
                    onClick: () => alert('Обновить'),
                    dividerLeft: true
                  },
                  {
                    value: 'favorite',
                    label: 'Избранное',
                    Icon: IconStar,
                    onClick: () => alert('Избранное'),
                    mandatory: true,
                    details: {
                      type: 'switch',
                      label: 'В избранном',
                      checked: isFavorite,
                      onChange: (e) => setIsFavorite(e.target.checked)
                    }
                  },
                  {
                    value: 'add-row',
                    label: 'Добавить строку',
                    Icon: IconPlus,
                    onClick: () => alert('Добавить строку'),
                    dividerLeft: true,
                    // Pinned-фича: НЕ уходит в overflow-дропдаун при сжатии,
                    // всегда остаётся видимой в правой части
                    canBeCompressedInToolsMenu: false
                  },
                  starFeature
                ]
              }
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="tab2">
          <div style={{ padding: 24 }}>Архивные данные</div>
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="tab3">
          <div style={{ padding: 24 }}>Аналитика</div>
        </TableTabs.TabPanel>
      </TableTabs>
    );
  }
};

/**
 * ### 2. TableTabs + ControlBlock (без коллапсинга)
 *
 * TableTabs с кастомным слотом справа, без коллапсинга.
 */
export const TabsWithoutCollapsing: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: '2. TableTabs + ControlBlock (без коллапсинга)',
  render: () => {
    const { rows, columnConfig } = useBaseSetup();
    const activeTabState = useState<string | number>('tab1');
    const starFeature = useStarFeature();

    return (
      <TableTabs
        tabs={[
          { tabId: 'tab1', label: 'Данные' },
          { tabId: 'tab2', label: 'Настройки' }
        ]}
        activeTabIdState={activeTabState}
        rightSlot={<CustomRightSlot />}
      >
        <TableTabs.TabPanel tabId="tab1">
          <TableCanvas
            tableConfig={{
              containerStyle: { height: '60vh' },
              fullScreenEnabled: true,
              rowSize: { default: 'big', showInControl: true },
              searching: { enabled: true },
              keyText: { showInControl: true, controlBlock: {}, sidebar: {} },
              controlBlock: {
                show: true,
                size: 'm',
                rightSideInner: [
                  {
                    text: 'Экспорт',
                    contentLeft: <IconSb color="inherit" />,
                    dropdownIconRender: (ctx) => (
                      <IconSb
                        color="inherit"
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                      />
                    ),
                    dropdown: {
                      items: [
                        { value: 'csv', label: 'CSV' },
                        { value: 'xlsx', label: 'Excel' },
                        { value: 'pdf', label: 'PDF' }
                      ],
                      onItemSelect: (item: any) =>
                        alert(`Экспорт: ${item.label}`)
                    }
                  }
                ],
                customFeatures: [
                  {
                    value: 'refresh',
                    label: 'Обновить',
                    Icon: IconRefresh,
                    onClick: () => alert('Обновить')
                  },
                  starFeature
                ]
              }
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="tab2">
          <div style={{ padding: 24 }}>Настройки</div>
        </TableTabs.TabPanel>
      </TableTabs>
    );
  }
};

/**
 * ### 3. Collapsing (above) + ControlBlock (без табов)
 *
 * Коллапсинг с rightSlot над таблицей, без TableTabs.
 */
export const CollapsingAboveNoTabs: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: '3. Collapsing above + ControlBlock (без табов)',
  render: () => {
    const { rows, columnConfig } = useBaseSetup();
    const starFeature = useStarFeature();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          fullScreenEnabled: true,
          rowSize: { default: 'big', showInControl: true },
          searching: { enabled: true },
          keyText: { showInControl: true, controlBlock: {}, sidebar: {} },
          controlBlock: {
            show: true,
            size: 'm',
            rightSideInner: [
              {
                text: 'Загрузить',
                contentLeft: <IconSb color="inherit" />,
                dropdownIconRender: (ctx) => (
                  <IconSb
                    color="inherit"
                    size={ctx.rowSize === 'small' ? 'xs' : 's'}
                  />
                )
              },
              {
                text: 'Экспорт',
                contentLeft: <IconSb color="inherit" />,
                dropdownIconRender: (ctx) => (
                  <IconSb
                    color="inherit"
                    size={ctx.rowSize === 'small' ? 'xs' : 's'}
                  />
                ),
                dropdown: {
                  items: [
                    { value: 'csv', label: 'CSV' },
                    { value: 'xlsx', label: 'Excel' },
                    { value: 'pdf', label: 'PDF' }
                  ],
                  onItemSelect: (item: any) => alert(`Экспорт: ${item.label}`)
                }
              }
            ],
            customFeatures: [starFeature]
          },
          collapsing: {
            enableCollapse: true,
            collapseButtonPlacement: 'above',
            collapseButtonAboveRightSlot: <CustomRightSlot />
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

/**
 * ### 4. ControlBlock inline collapsing (без табов, без above)
 *
 * Коллапсинг inline — кнопка внутри controlBlock.
 */
export const InlineCollapsing: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: '4. ControlBlock с inline collapsing',
  render: () => {
    const { rows, rowKeyGetter, columnConfig } = useBaseSetup();
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const starFeature = useStarFeature();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          fullScreenEnabled: true,
          rowSize: { default: 'big', showInControl: true },
          searching: { enabled: true },
          keyText: { showInControl: true, controlBlock: {}, sidebar: {} },
          rowsGrouping: {
            rowKeyGetter,
            groupByState: [groupByArr, setGroupByArr]
          },
          controlBlock: {
            show: true,
            size: 'm',
            rightSideInner: [
              {
                text: 'Обновить',
                contentLeft: <IconRefresh color="inherit" />,
                dropdownIconRender: (ctx) => (
                  <IconRefresh
                    color="inherit"
                    size={ctx.rowSize === 'small' ? 'xs' : 's'}
                  />
                )
              },
              {
                text: 'Экспорт',
                contentLeft: <IconSb color="inherit" />,
                dropdownIconRender: (ctx) => (
                  <IconSb
                    color="inherit"
                    size={ctx.rowSize === 'small' ? 'xs' : 's'}
                  />
                ),
                dropdown: {
                  items: [
                    { value: 'csv', label: 'CSV' },
                    { value: 'xlsx', label: 'Excel' },
                    { value: 'pdf', label: 'PDF' }
                  ],
                  onItemSelect: (item: any) => alert(`Экспорт: ${item.label}`)
                }
              }
            ],
            customFeatures: [starFeature]
          },
          collapsing: {
            enableCollapse: true,
            collapseButtonPlacement: 'inside'
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

/**
 * ### 5. Title above (через collapsing API, без коллапсинга)
 *
 * Заголовок таблицы через `collapsing.titleText` + `collapseButtonPlacement: 'above'`, без enableCollapse.
 */
export const TitleBlockStory: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: '5. Title above (заголовок без коллапсинга)',
  render: () => {
    const { rows, columnConfig } = useBaseSetup();
    const starFeature = useStarFeature();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          fullScreenEnabled: true,
          rowSize: { default: 'big', showInControl: true },
          searching: { enabled: true },
          collapsing: {
            collapseButtonPlacement: 'above',
            titleText: 'Реестр задач',
            collapseButtonAboveRightSlot: <CustomRightSlot />
          },
          controlBlock: {
            show: true,
            size: 'm',
            rightSideInner: [
              {
                text: 'Экспорт',
                contentLeft: <IconSb color="inherit" />,
                dropdownIconRender: (ctx) => (
                  <IconSb
                    color="inherit"
                    size={ctx.rowSize === 'small' ? 'xs' : 's'}
                  />
                ),
                dropdown: {
                  items: [
                    { value: 'csv', label: 'CSV' },
                    { value: 'xlsx', label: 'Excel' },
                    { value: 'pdf', label: 'PDF' }
                  ],
                  onItemSelect: (item: any) => alert(`Экспорт: ${item.label}`)
                }
              }
            ],
            customFeatures: [starFeature]
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

/**
 * ### 5b. Title inline (заголовок внутри controlBlock)
 *
 * `collapsing.titleText` без `collapseButtonPlacement` (default='inside') — заголовок внутри controlBlock слева.
 */
export const TitleBlockInline: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: '5b. Title inline (заголовок внутри controlBlock)',
  render: () => {
    const { rows, columnConfig } = useBaseSetup();
    const starFeature = useStarFeature();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          fullScreenEnabled: true,
          rowSize: { default: 'big', showInControl: true },
          searching: { enabled: true },
          collapsing: {
            titleText: 'Реестр задач'
          },
          controlBlock: {
            show: true,
            size: 'm',
            rightSideInner: [
              {
                text: 'Экспорт',
                contentLeft: <IconSb color="inherit" />,
                dropdownIconRender: (ctx) => (
                  <IconSb
                    color="inherit"
                    size={ctx.rowSize === 'small' ? 'xs' : 's'}
                  />
                ),
                dropdown: {
                  items: [
                    { value: 'csv', label: 'CSV' },
                    { value: 'xlsx', label: 'Excel' },
                    { value: 'pdf', label: 'PDF' }
                  ],
                  onItemSelect: (item: any) => alert(`Экспорт: ${item.label}`)
                }
              }
            ],
            customFeatures: [starFeature]
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
