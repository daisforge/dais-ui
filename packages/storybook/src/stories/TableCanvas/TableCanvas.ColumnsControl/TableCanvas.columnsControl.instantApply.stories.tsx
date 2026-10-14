/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@ui-kit/components/Switch';
import { type ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
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

// ПРОТОТИП: правки в правом сайдбаре применяются к таблице сразу,
// кнопок «Отменить / Применить» нет:
// columnsControl: { enable: true, applyImmediately: true }
`;

type Story = StoryObj;

/** Строка с дополнительными колонками, чтобы таблица была заметно шире контейнера. */
type WideRow = Row & {
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  team: string;
  status: string;
  comment: string;
};

const TEAMS = ['Платформа', 'Кредиты', 'Депозиты', 'Карты', 'Инвестиции'];
const STATUSES = ['В работе', 'На ревью', 'Готово', 'Отложено'];

const createWideRows = (): WideRow[] =>
  createRows().map((row, i) => ({
    ...row,
    budget: 100_000 + ((i * 7919) % 900_000),
    spent: 10_000 + ((i * 104_729) % 500_000),
    startDate: `${String((i % 28) + 1).padStart(2, '0')}.0${(i % 9) + 1}.2026`,
    endDate: `${String(((i * 3) % 28) + 1).padStart(2, '0')}.1${i % 3}.2026`,
    team: TEAMS[i % TEAMS.length],
    status: STATUSES[i % STATUSES.length],
    comment: row.loremIpsum.slice(0, 60),
  }));

/**
 * ### ColumnsControl: мгновенное применение (прототип)
 *
 * Временный флаг `columnsControl.applyImmediately`: скрытие колонки свитчем и
 * перетаскивание в списке правого сайдбара сразу перестраивают таблицу, кнопок
 * «Отменить / Применить» нет. Колонок нарочно больше, чем помещается в ширину
 * контейнера, а часть из них широкие: так видно, как скачет горизонтальный
 * скролл, закреплённые колонки и ширины при каждом переключении. Стенд для
 * обсуждения с дизайнерами, не для продакшена.
 */
export const ColumnsControlInstantApply: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'ColumnsControl: мгновенное применение (прототип)',
  render: () => {
    const [rows] = useState(createWideRows);
    const [applyImmediately, setApplyImmediately] = useState(true);
    const [narrow, setNarrow] = useState(false);

    const columnConfig = useMemo<readonly ColumnConfig<WideRow>[]>(
      () => [
        { key: 'id', name: 'ID', width: 90 },
        { key: 'task', name: 'Задача', width: 260 },
        { key: 'status', name: 'Статус', width: 130 },
        { key: 'priority', name: 'Приоритет', width: 130 },
        { key: 'issueType', name: 'Тип', width: 140 },
        { key: 'developer', name: 'Исполнитель', width: 180 },
        { key: 'team', name: 'Команда', width: 150 },
        { key: 'startDate', name: 'Начало', width: 120 },
        { key: 'endDate', name: 'Окончание', width: 120 },
        { key: 'budget', name: 'Бюджет, ₽', width: 150 },
        { key: 'spent', name: 'Потрачено, ₽', width: 150 },
        { key: 'complete', name: '% выполнения', width: 140 },
        { key: 'inspiredDay', name: 'Дней в работе', width: 140 },
        { key: 'tr', name: 'TR', width: 110 },
        { key: 'comment', name: 'Комментарий', width: 420 },
        { key: 'loremIpsum', name: 'Описание', width: 600 },
      ],
      [],
    );

    return (
      <>
        <div
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <Switch
            label="Применять сразу (без кнопки «Применить»)"
            checked={applyImmediately}
            onChange={() => setApplyImmediately((prev) => !prev)}
          />
          <Switch
            label="Узкий контейнер (800px)"
            checked={narrow}
            onChange={() => setNarrow((prev) => !prev)}
          />
        </div>
        <TableCanvas
          // ключ пересоздаёт таблицу при смене режима, чтобы локальные правки
          // сайдбара не «зависали» между режимами
          key={String(applyImmediately)}
          tableConfig={{
            containerStyle: {
              height: 600,
              width: narrow ? 800 : undefined,
            },
            columnsControl: {
              enable: true,
              applyImmediately,
              hiding: true,
              pinning: true,
              reorderingAside: true,
              reorderingHeader: true,
              disableHiding: ['id'],
              pinnedDefault: ['id'],
            },
            rightSidebarConfig: {
              defaultOpen: true,
              defaultActiveTabId: 'columns',
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};
