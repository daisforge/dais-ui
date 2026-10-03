/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SelectingRow/CounterMaxCount',
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

/**
 * tableConfig.selecting.summaryCounterMaxCount ограничивает отображаемое число в
 * счётчике выбранных строк. Здесь выбрано 200 строк, а maxCount = 99 — счётчик
 * (и в шапке, и в панели массовых действий) показывает «99+». Снимите часть
 * выделения, чтобы увидеть точное число, когда оно станет ≤ 99.
 */
export const CounterMaxCount: StoryObj = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Ограничение счётчика (99+)',
  render: () => {
    const [rows] = useState(() => createRows()); // 200 строк

    const columns = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Задача' },
        { key: 'priority', name: 'Приоритет' },
      ],
      [],
    );

    // Изначально выбираем все строки, чтобы счётчик сразу показал «99+».
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(rows.map((r) => r.id)),
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '700px' },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id,
            // 👇 то, ради чего пример: при > 99 выбранных счётчик покажет «99+»
            summaryCounterMaxCount: 99,
          },
          controlBlock: {
            massActionPanel: {
              buttons: [
                {
                  type: 'button',
                  text: 'Экспорт',
                  view: 'secondary',
                  onClick: () => alert('Экспорт выбранных строк'),
                },
              ],
            },
          },
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  },
};
