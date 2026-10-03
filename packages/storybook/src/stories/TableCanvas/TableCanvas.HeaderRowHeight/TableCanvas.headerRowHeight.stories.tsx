/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '@ui-kit/components/Slider';
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/HeaderRowHeight',
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
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
`;

const rows = createRows(0, 40);

type Story = StoryObj;

// Объединённая шапка в 3 уровня: 2 уровня групп + листовой ряд.
const threeLevelColumns: ColumnOrColumnGroupConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  {
    key: 'metrics',
    name: 'Показатели',
    children: [
      {
        key: 'work',
        name: 'Работа',
        children: [
          { key: 'task', name: 'Задача', width: 180 },
          { key: 'priority', name: 'Приоритет', width: 140 },
        ],
      },
      {
        key: 'progress',
        name: 'Прогресс',
        children: [
          { key: 'developer', name: 'Исполнитель', width: 160 },
          { key: 'complete', name: '% Готовности', width: 140 },
        ],
      },
    ],
  },
];

/**
 * Ползунок динамически меняет `tableConfig.headerRowHeight` на
 * объединённой шапке в 3 уровня (2 уровня групп + листовой ряд). Значение
 * применяется к каждому уровню одновременно, поэтому итоговая высота шапки
 * равна headerRowHeight * (1 + число уровней групп).
 */
export const Playground: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  name: 'Высота шапки (3 уровня)',
  render: () => {
    const [headerRowHeight, setHeaderRowHeight] = useState<number>(33);

    // 2 уровня групп + листовой ряд => всего 3 уровня.
    const levels = 3;
    const total = useMemo(() => headerRowHeight * levels, [headerRowHeight]);

    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 16,
            maxWidth: 520,
          }}
        >
          <div style={{ flex: 1 }}>
            <Slider
              value={headerRowHeight}
              onChange={setHeaderRowHeight}
              min={24}
              max={96}
              step={1}
            />
          </div>
          <span style={{ whiteSpace: 'nowrap' }}>
            headerRowHeight: {headerRowHeight}px
          </span>
          <span style={{ whiteSpace: 'nowrap', opacity: 0.7 }}>
            итог: {headerRowHeight} × {levels} = {total}px
          </span>
        </div>
        <TableCanvas
          tableConfig={{ containerStyle: { height: 420 }, headerRowHeight }}
          columnConfig={threeLevelColumns}
          rows={rows}
        />
      </div>
    );
  },
};
