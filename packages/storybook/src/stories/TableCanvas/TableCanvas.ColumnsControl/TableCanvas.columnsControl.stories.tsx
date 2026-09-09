/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ui-kit/components/Box';
import {
  Canvas,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconDone, IconPinListOutline } from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ColumnsControl',
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

`;

type Story = StoryObj;

// Плоский набор колонок для стори индикатора скрытых столбцов.
const INDICATOR_COLS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 140 },
  { key: 'task', name: 'Title', width: 160 },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'developer', name: 'Developer', width: 160 },
  { key: 'tr1', name: 'TR', width: 120 },
  { key: 'complete', name: '% Complete', width: 140 },
];

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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          renderCell(cellInfo) {
            return (
              <Canvas.Button
                id="header-tooltip-drag"
                portalHoverEnabled
                onClick={() => {}}
              >
                123
              </Canvas.Button>
            );
          },
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
      <TableCanvas
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

/**
 * ### Доп. пункты меню закрепления (pinningMenu)
 *
 * Та же таблица, что и выше, но продукт (напр. команда APE) расширяет меню
 * закрепления своими пунктами через `controlBlock.pinningMenu.items`: порядок
 * задаётся `order`, разделитель — `dividerAfter`, состояние/иконку контролирует
 * продукт. «Закрепить шапку» реально переключает залипание шапки через
 * `tableConfig.unstickyHeader` (по умолчанию закреплена — галочка есть; клик
 * откепляет, и при скролле шапка уезжает вверх). «Закрепить строки» — демо-пункт
 * без реального эффекта (иконка синеет по стейту), показывает, что пункт можно
 * добавить.
 */
export const ColumnsControlPinningMenu: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'ColumnsControl: доп. пункты меню закрепления',
  render: () => {
    const [rows] = useState(createRows);
    // Шапка по умолчанию закреплена (unstickyHeader=false) → галочка есть.
    const [isHeaderPinned, setIsHeaderPinned] = useState(true);
    const [isRowsPinned, setIsRowsPinned] = useState(false);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' },
        { key: 'complete', name: '% Complete' },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          // Реальное залипание шапки — «Закрепить шапку» переключает его.
          unstickyHeader: !isHeaderPinned,
          // Клик «Закрепить столбцы» без выделения → событие pin/no-selection.
          notifications: {
            onNotification: (e) => {
              // eslint-disable-next-line no-alert
              alert(e.message);
            },
          },
          columnsControl: {
            enable: true,
            pinning: true,
            disablePinning: ['developer'],
            pinnedDefault: ['complete'],
          },
          controlBlock: {
            pinningMenu: {
              // Мёржатся с нативными (Открепить всё order=100, Закрепить
              // столбцы order=200). Итог: … → Закрепить строки → divider →
              // Закрепить шапку.
              items: [
                {
                  value: 'pin-rows',
                  label: 'Закрепить строки',
                  order: 300,
                  dividerAfter: true,
                  icon: (ctx) => (
                    <IconPinListOutline
                      size={ctx.rowSize === 'small' ? 'xs' : 's'}
                      color={isRowsPinned ? textInfo : 'inherit'}
                    />
                  ),
                  onClick: () => setIsRowsPinned((prev) => !prev),
                },
                {
                  value: 'pin-header',
                  label: 'Закрепить шапку',
                  order: 400,
                  icon: (ctx) => (
                    <Box
                      $css={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        visibility: isHeaderPinned ? 'visible' : 'hidden',
                      }}
                    >
                      <IconDone
                        size={ctx.rowSize === 'small' ? 'xs' : 's'}
                        color={textInfo}
                      />
                    </Box>
                  ),
                  onClick: () => setIsHeaderPinned((prev) => !prev),
                },
              ],
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

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );

    return (
      <TableCanvas
        tableConfig={{
          selecting: {
            rowCheckboxDisabled: (row) => row.id === 2,
            rowShowCheckbox: (row) => row.id !== 3,
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id + r.issueType,
            showDefault: false,
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
    );
  },
};

/**
 * Индикатор скрытых столбцов: скрытые через настройку столбцов колонки подсвечиваются
 * в шапке синей полосатой линией на границе. Наведите курсор на линию, появится тултип;
 * двойной клик раскрывает весь скрытый промежуток. Ресайз соседней колонки за эту же
 * границу продолжает работать.
 *
 * Здесь скрыты Priority (одна колонка) и Developer + TR (две подряд, линия одна на
 * весь промежуток).
 */
export const HiddenColumnsIndicator: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов',
  render: () => {
    const [rows] = useState(createRows);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenDefault: ['priority', 'developer', 'tr1'],
          },
        }}
        columnConfig={INDICATOR_COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор по бокам таблицы: скрыты первый (ID) и последний (% Complete) столбцы,
 * линия прижимается к левому и правому краю. Title закреплён и уезжает в начало
 * вместе со своей границей.
 */
export const HiddenColumnsIndicatorEdges: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов по бокам',
  render: () => {
    const [rows] = useState(createRows);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            pinning: true,
            pinnedDefault: ['task'],
            hiddenDefault: ['id', 'complete'],
          },
        }}
        columnConfig={INDICATOR_COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор выключен: hiddenColumnsIndicator: false, столбцы скрываются как раньше,
 * без подсветки границ.
 */
export const HiddenColumnsIndicatorDisabled: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов выключен',
  render: () => {
    const [rows] = useState(createRows);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenColumnsIndicator: false,
            hiddenDefault: ['priority'],
          },
        }}
        columnConfig={INDICATOR_COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор в сгруппированной шапке. Полоса живёт только в обычном (листовом) ряду
 * и не залезает на ячейки групп. Скрыты Факт (внутри группы «Показатели») и Инд
 * (внутри группы «Оценка»).
 */
export const HiddenColumnsIndicatorGrouped: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов в группе',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      { key: 'id', name: 'ID', width: 120 },
      {
        key: 'metrics',
        name: 'Показатели',
        children: [
          { key: 'task', name: 'План', width: 130 },
          { key: 'priority', name: 'Факт', width: 130 },
          { key: 'issueType', name: 'Прогноз', width: 130 },
        ],
      },
      {
        key: 'grade',
        name: 'Оценка',
        children: [
          { key: 'developer', name: 'Инд', width: 130 },
          { key: 'complete', name: 'Итог', width: 130 },
        ],
      },
    ];

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenDefault: ['priority', 'developer'],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

/**
 * Индикатор в скваш-колонках (высокая слитая шапка). Глубокая группа делает шапку
 * высокой, мелкая группа схлопывается в высокую ячейку. Подряд скрыты лист подгруппы
 * (B1) и большая колонка (Ср): в промежутке есть большая колонка, поэтому полоса одна
 * на весь промежуток и на всю высоту, тултип сверху, двойной клик раскрывает обе.
 */
export const HiddenColumnsIndicatorSquashed: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'ColumnsControl: индикатор скрытых столбцов в скваш-колонках',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      { key: 'id', name: 'ID', width: 100 },
      {
        key: 'deep',
        name: 'Глубокая',
        children: [
          {
            key: 'sub',
            name: 'Подгруппа',
            children: [
              { key: 'task', name: 'A', width: 110 },
              { key: 'priority', name: 'B', width: 110 },
              { key: 'issueType', name: 'B1', width: 110 },
            ],
          },
        ],
      },
      { key: 'developer', name: 'Ср', width: 130 },
      {
        key: 'shallow',
        name: 'Мелкая',
        children: [{ key: 'complete', name: 'C', width: 160 }],
      },
    ];

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          columnsGrouping: { squashEmptyCells: true },
          columnsControl: {
            enable: true,
            hiding: true,
            hiddenDefault: ['issueType', 'developer'],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
