/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, dataObj, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
  tableCanvasFonts,
  tableCanvasTheme,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ColumnsGrouping',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

const preCode = `
import {
  Canvas,
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@sber-digital-finance-ui/ui-kit/components/TableCanvas';
`;

const spanRows = createRows(0, 40);

type Story = StoryObj;

/**
 * Базовая группировка: вложенная структура шапки через `children`. Первая группа —
 * с кастомным `name` (canvas-элемент). Уровень вложенности задаётся аргом `headerTreeLvl`.
 */
export const SimpleTable: StoryObj<{ headerTreeLvl: keyof typeof dataObj }> = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  args: {
    headerTreeLvl: 'lvl3',
  },
  argTypes: {
    headerTreeLvl: {
      description: 'Уровни вложенности шапки таблицы',
      control: { type: 'radio' },
      options: Object.keys(dataObj),
    },
  },
  name: 'Базовая группировка',
  render: ({ headerTreeLvl }) => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
      () => [
        ...(dataObj[headerTreeLvl] ?? []).map((el, i) =>
          i === 0
            ? {
                ...el,
                name: (
                  <Canvas.Container padding={{ left: 8, right: 8 }}>
                    <Canvas.Text
                      color={tableCanvasTheme.accentColor}
                      font={tableCanvasFonts.bodyXSBold}
                    >
                      кастомный name
                    </Canvas.Text>
                  </Canvas.Container>
                ),
              }
            : el,
        ),
      ],
      [headerTreeLvl],
    );

    return (
      <TableCanvas
        key={headerTreeLvl}
        tableConfig={{
          containerStyle: { height: 360 },
          columnsControl: { enable: true },
          resizableColumn: true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

/**
 * Листовая колонка (без группы) со слитной шапкой стоит рядом с обычной группой.
 * `spanGroupHeader: true` рисует её заголовок одной ячейкой на всю высоту шапки —
 * без пустой полосы над ним и без горизонтального шва.
 */
export const LeafSpanNextToGroup: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Слитая листовая колонка',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      { key: 'id', name: 'ID', width: 80, spanGroupHeader: true },
      {
        key: 'taskGroup',
        name: 'Задача',
        children: [
          { key: 'task', name: 'Название', width: 220 },
          { key: 'priority', name: 'Приоритет', width: 140 },
        ],
      },
      {
        key: 'complete',
        name: '% Выполнено',
        width: 150,
        spanGroupHeader: true,
      },
    ];

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: 320 } }}
        columnConfig={columnConfig}
        rows={spanRows}
      />
    );
  },
};

/**
 * Табличный дефолт: `tableConfig.spanGroupHeader: true` включает слияние сразу у
 * ВСЕХ листовых колонок (без группы). Колонки внутри группы проп не трогает.
 */
export const TableDefaultSpan: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Слияние всех листьев',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      { key: 'id', name: 'ID', width: 80 },
      { key: 'developer', name: 'Исполнитель', width: 180 },
      {
        key: 'taskGroup',
        name: 'Задача',
        children: [
          { key: 'task', name: 'Название', width: 220 },
          { key: 'priority', name: 'Приоритет', width: 140 },
        ],
      },
      { key: 'complete', name: '% Выполнено', width: 150 },
    ];

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: 320 }, spanGroupHeader: true }}
        columnConfig={columnConfig}
        rows={spanRows}
      />
    );
  },
};

/**
 * Матрица выравнивания заголовка в слитной ячейке: `spanGroupHeaderAlign`
 * задаёт horizontal (left/center/right) и vertical (top/center/bottom).
 */
export const AlignmentMatrix: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Выравнивание заголовка',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      {
        key: 'id',
        name: 'top-left',
        width: 120,
        spanGroupHeader: true,
        spanGroupHeaderAlign: { horizontal: 'left', vertical: 'top' },
      },
      {
        key: 'developer',
        name: 'center',
        width: 120,
        spanGroupHeader: true,
        spanGroupHeaderAlign: { horizontal: 'center', vertical: 'center' },
      },
      {
        key: 'complete',
        name: 'bottom-right',
        width: 120,
        spanGroupHeader: true,
        spanGroupHeaderAlign: { horizontal: 'right', vertical: 'bottom' },
      },
      {
        key: 'taskGroup',
        name: 'Задача',
        children: [
          { key: 'task', name: 'Название', width: 220 },
          { key: 'priority', name: 'Приоритет', width: 140 },
        ],
      },
    ];

    return (
      <TableCanvas
        tableConfig={{ containerStyle: { height: 320 } }}
        columnConfig={columnConfig}
        rows={spanRows}
      />
    );
  },
};

/**
 * Трёхуровневая шапка + слитые (spanGroupHeader) одиночные колонки по краям +
 * реордер колонок за шапку (columnsControl.reorderingHeader).
 */
export const ThreeLevelSpanReorder: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Группы + реордер',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      {
        key: 'id',
        name: 'ID',
        width: 90,
        spanGroupHeader: true,
        resizable: true,
      },
      {
        key: 'metrics',
        name: 'Показатели',
        children: [
          {
            key: 'sales',
            name: 'Продажи',
            children: [
              { key: 'task', name: 'План', width: 150, resizable: true },
              { key: 'priority', name: 'Факт', width: 130, resizable: true },
            ],
          },
          {
            key: 'grade',
            name: 'Оценка',
            children: [
              { key: 'issueType', name: 'Инд', width: 120, resizable: true },
              { key: 'developer', name: 'Кол', width: 120, resizable: true },
              { key: 'complete', name: 'Итог', width: 120, resizable: true },
            ],
          },
        ],
      },
      {
        key: 'tr',
        name: 'TR',
        width: 110,
        spanGroupHeader: true,
        resizable: true,
      },
    ];

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 320 },
          columnsControl: { enable: true },
          resizableColumn: true,
        }}
        columnConfig={columnConfig}
        rows={spanRows}
      />
    );
  },
};
