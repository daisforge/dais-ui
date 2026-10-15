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

// Правки в настройках столбцов применяются к таблице сразу,
// без кнопок «Отменить / Применить»:
// columnsControl: { enable: true, applyImmediately: true, onConfirm }
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
 * ### ColumnsControl: применение без кнопок
 *
 * `columnsControl.applyImmediately: true` убирает кнопки «Отменить» и
 * «Применить»: скрытие, закрепление и порядок колонок меняются в таблице сразу.
 * `onConfirm` вызывается после каждой правки, последний вызов показан над
 * таблицей. Колонок больше, чем помещается по ширине, чтобы было видно, как
 * таблица перестраивается при каждом переключении.
 */
export const ColumnsControlInstantApply: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'ColumnsControl: применение без кнопок',
  render: () => {
    const [rows] = useState(createWideRows);
    const [applyImmediately, setApplyImmediately] = useState(true);
    const [narrow, setNarrow] = useState(false);
    const [lastConfirm, setLastConfirm] = useState('ещё не вызывался');

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
            label="applyImmediately"
            checked={applyImmediately}
            onChange={() => setApplyImmediately((prev) => !prev)}
          />
          <Switch
            label="Узкий контейнер (800px)"
            checked={narrow}
            onChange={() => setNarrow((prev) => !prev)}
          />
        </div>
        <p style={{ margin: '0 0 12px' }}>
          Последний вызов onConfirm: {lastConfirm}
        </p>
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
              onConfirm: ({ changed, hidden, pinned }) =>
                setLastConfirm(
                  `изменено: ${Object.keys(changed).join(', ')}; ` +
                    `скрыты: ${hidden.join(', ') || 'нет'}; ` +
                    `закреплены: ${pinned.join(', ') || 'нет'}`,
                ),
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
