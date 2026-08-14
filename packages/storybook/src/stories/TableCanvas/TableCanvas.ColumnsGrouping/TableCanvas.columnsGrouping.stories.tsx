/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@ui-kit/components/Switch';
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
 * Playground группировки. `tableConfig.columnsGrouping.squashEmptyCells` (по умолчанию
 * включено) схлопывает пустые ячейки шапки: одиночная колонка без группы тянется вверх,
 * «мелкая» группа (у которой под шапкой нет более глубоких подгрупп) тянется вниз.
 * Переключатель включает и выключает поведение, видно, как появляются и исчезают пустые
 * полосы. Также здесь: кастомный `name` группы (canvas-элемент), реордер колонок за шапку.
 */
export const Playground: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Группировка (squash)',
  render: () => {
    const [rows] = useState(createRows);
    const [squash, setSquash] = useState(true);

    const columnConfig = useMemo<ColumnOrColumnGroupConfig<Row>[]>(
      () => [
        // Одиночная колонка без группы: при squash её шапка тянется вверх.
        { key: 'id', name: 'ID', width: 90, resizable: true },
        // Глубокая группа (3 уровня) для реордера.
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
        // «Мелкая» группа с кастомным canvas-name: при squash тянется вниз
        // (под шапкой нет подгрупп, иначе была бы пустая полоса).
        {
          key: 'pppp',
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
          children: [{ key: 'tr', name: 'TR', width: 130, resizable: true }],
        },
      ],
      [],
    );

    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}
        >
          <Switch
            checked={squash}
            onChange={(e) => setSquash(e.target.checked)}
            label="columnsGrouping.squashEmptyCells"
          />
        </div>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: 340 },
            columnsGrouping: { squashEmptyCells: squash },
            columnsControl: { enable: true },
            resizableColumn: true,
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

/**
 * Выравнивание текста в слитой ячейке шапки через `squashedHeaderAlign` (horizontal:
 * left/center/right, vertical: top/center/bottom). Задаётся точечно на колонке (лист) и
 * на группе. Действует, когда шапка слита (squash включён по умолчанию).
 */
export const HeaderAlign: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Выравнивание заголовка',
  render: () => {
    const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
      // Лист без группы: выравнивание на колонке. Имя короткое, колонка широкая,
      // чтобы было видно позицию текста.
      {
        key: 'id',
        name: 'top-left',
        width: 200,
        squashedHeaderAlign: { horizontal: 'left', vertical: 'top' },
      },
      // Глубокая группа задаёт третий уровень, чтобы соседняя группа стала «мелкой».
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
            ],
          },
        ],
      },
      // Мелкая группа (сливается вниз): выравнивание на группе. Колонка широкая,
      // чтобы короткое имя было видно прижатым вниз-вправо.
      {
        key: 'shallow',
        name: 'bottom-right',
        squashedHeaderAlign: { horizontal: 'right', vertical: 'bottom' },
        children: [{ key: 'complete', name: 'C', width: 240 }],
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
