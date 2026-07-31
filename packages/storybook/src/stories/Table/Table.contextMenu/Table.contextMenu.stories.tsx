/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { LineSkeleton, RectSkeleton } from '@ui-kit/components/Skeleton';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/ContextMenu',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

const preCode = `
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  ColumnConfig,
  ColumnOrColumnGroupConfig,
  RenderCellProps,
  RowHeightFunc,
  SIZES,
  Select,
  Switch,
  Table,
  TextField,
} from '@daisforge/ui';
import { IconAddOutline, IconBoxOutline, IconSber } from '@daisforge/ui/icons';
`;

export const ContextOnHeaderMenuDropDownStory: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Контекстное меню DropDown (шапка таблицы)',

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

    return (
      <Table
        tableConfig={{
          onHeaderContextMenuDropDown: {
            type: 'dropdown',
            getDropDownItems: ({ columnLabel }) => [
              {
                value: `lvl1 ${columnLabel}`,
                label: `${columnLabel} lvl1`,
                items: [
                  {
                    value: `lvl1_inside ${columnLabel}`,
                    label: `${columnLabel} lvl1 inside`,
                  },
                ],
              },
              {
                value: `lvl2 ${columnLabel}`,
                label: `${columnLabel} lvl2`,
              },
            ],
            onItemSelect: (item, context, event) => {
              console.group('onItemSelect for onCellContextMenuDropDown');
              console.debug(item, 'item');
              console.debug(context, 'context');
              console.debug(event, 'event');
              console.groupEnd();
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ContextOnHeaderMenuStory: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',

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

    return (
      <Table
        tableConfig={{
          onHeaderContextMenu: (e, columnLabel, closestTarget) =>
            console.debug(e, columnLabel, closestTarget),
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ContextOnCellMenuDropDownStory: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Контекстное меню DropDown (cell таблицы)',

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

    return (
      <Table
        tableConfig={{
          onCellContextMenuDropDown: {
            type: 'dropdown',
            getDropDownItems: ({ column, row }) => {
              console.debug(
                column,
                row,
                'getDropDownItems for onCellContextMenuDropDown',
              );
              return [
                {
                  value: `lvl1 ${column.name}`,
                  label: `${column.name} lvl1`,
                  items: [
                    {
                      value: `lvl1_inside ${column.name}`,
                      label: `${column.name} lvl1 inside`,
                    },
                  ],
                },
                {
                  value: `lvl2 ${column.name}`,
                  label: `${column.name} lvl2`,
                },
              ];
            },
            onItemSelect: (item, context, event) => {
              console.group('onItemSelect for onCellContextMenuDropDown');
              console.debug(item, 'item');
              console.debug(context, 'context', context.row);
              console.debug(event, 'event');
              console.groupEnd();
              context.selectCell();
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ContextOnCellMenuStory: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Контекстное меню, функция обработчик (cell таблицы)',

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

    return (
      <Table
        tableConfig={{
          onCellContextMenu: (args, event) => {
            console.debug(args, event, 'onCellContextMenu');
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const ContextOnCellAndOnHeaderMenuStory: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Контекстное меню, all features (cell / header таблицы)',

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

    return (
      <Table
        tableConfig={{
          onCellContextMenu: (args, event) => {
            console.debug(args, event, 'onCellContextMenu');
          },
          onCellContextMenuDropDown: {
            type: 'dropdown',
            getDropDownItems: ({ column, row }) => {
              console.debug(
                column,
                row,
                'getDropDownItems for onCellContextMenuDropDown',
              );
              return [
                {
                  value: `lvl1 ${column.name}`,
                  label: `${column.name} lvl1`,
                  items: [
                    {
                      value: `lvl1_inside ${column.name}`,
                      label: `${column.name} lvl1 inside`,
                    },
                  ],
                },
                {
                  value: `lvl2 ${column.name}`,
                  label: `${column.name} lvl2`,
                },
              ];
            },
            onItemSelect: (item, context, event) => {
              console.group('onItemSelect for onCellContextMenuDropDown');
              console.debug(item, 'item');
              console.debug(context, 'context');
              console.debug(event, 'event');
              console.groupEnd();
            },
          },
          onHeaderContextMenu: (e, closestTarget) =>
            console.debug(e, closestTarget),
          onHeaderContextMenuDropDown: {
            type: 'dropdown',
            getDropDownItems: ({ columnLabel }) => [
              {
                value: `lvl1 ${columnLabel}`,
                label: `${columnLabel} lvl1`,
                items: [
                  {
                    value: `lvl1_inside ${columnLabel}`,
                    label: `${columnLabel} lvl1 inside`,
                  },
                ],
              },
              {
                value: `lvl2 ${columnLabel}`,
                label: `${columnLabel} lvl2`,
              },
            ],
            onItemSelect: (item, context, event) => {
              console.group('onItemSelect for onCellContextMenuDropDown');
              console.debug(item, 'item');
              console.debug(context, 'context');
              console.debug(event, 'event');
              console.groupEnd();
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

// --- Асинхронная подгрузка пунктов меню ----------------------------------
// Запросом и состоянием владеет потребитель: onOpen стартует загрузку, а
// getDropDownItems читается реактивно (скелетоны → реальные пункты / ошибка).

const SKELETON_ITEMS = [0, 1, 2, 3].map((i) => ({
  value: `__skeleton_${i}`,
  label: '',
}));

const SkeletonRow = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
    }}
  >
    <RectSkeleton width={16} height={16} roundness={4} />
    <div style={{ width: 150 }}>
      <LineSkeleton size="bodyS" />
    </div>
  </div>
);

type AsyncMenuState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  items: { value: string; label: string }[];
  key: string | null;
  row: Row | null;
};

function AsyncCellDropdownExample({ shouldFail }: { shouldFail: boolean }) {
  const [rows] = useState(createRows);
  const [menu, setMenu] = useState<AsyncMenuState>({
    status: 'idle',
    items: [],
    key: null,
    row: null,
  });
  // В демо-режиме ошибки: падаем на первой попытке, на «Обновить» отдаём успех
  const attempts = useRef(0);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'developer', name: 'Developer' },
    ],
    [],
  );

  const load = useCallback(
    (row: Row, key: string) => {
      setMenu({ status: 'loading', items: [], key, row });
      const willFail = shouldFail && attempts.current === 0;
      attempts.current += 1;

      new Promise<{ value: string; label: string }[]>((resolve, reject) => {
        setTimeout(() => {
          if (willFail) {
            reject(new Error('network'));
            return;
          }
          resolve([
            { value: 'copy', label: `Копировать «${row.task}»` },
            { value: 'edit', label: 'Редактировать' },
            { value: 'delete', label: 'Удалить' },
          ]);
        }, 1200);
      }).then(
        (items) =>
          setMenu((prev) =>
            prev.key === key ? { ...prev, status: 'success', items } : prev,
          ),
        () =>
          setMenu((prev) =>
            prev.key === key ? { ...prev, status: 'error', items: [] } : prev,
          ),
      );
    },
    [shouldFail],
  );

  return (
    <Table
      tableConfig={{
        onCellContextMenuDropDown: {
          type: 'dropdown',
          listWidth: '240px',
          onOpen: ({ row, column }) => load(row, `${row.id}:${column.key}`),
          getDropDownItems: ({ row, column }) => {
            if (menu.key !== `${row.id}:${column.key}`) return [];
            if (menu.status === 'loading') return SKELETON_ITEMS;
            return menu.items;
          },
          renderItem: menu.status === 'loading' ? SkeletonRow : undefined,
          beforeList:
            menu.status === 'error' && menu.row ? (
              <div style={{ width: 240, padding: 8 }}>
                <EmptyState
                  size="s"
                  variant="no-content"
                  title="Не удалось загрузить"
                  subtitle="Проверьте соединение и повторите"
                  buttons={[
                    {
                      type: 'button',
                      props: {
                        text: 'Обновить',
                        view: 'secondary',
                        onClick: () =>
                          menu.row && menu.key && load(menu.row, menu.key),
                      },
                    },
                  ]}
                />
              </div>
            ) : undefined,
          onItemSelect: (item, context) => {
            if (String(item.value).startsWith('__skeleton')) return;
            context.selectCell();
            // eslint-disable-next-line no-alert
            alert(`Выбрано: ${item.label}`);
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

const code = `
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, Table } from '@sber-digital-finance-ui/ui-kit';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/Table/Table.contextMenu/Table.contextMenu.stories.tsx',
  'AsyncCellDropdownExample',
)}`;

export const ContextOnCellMenuAsyncSuccessStory: StoryObj = {
  name: 'Async-подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code,
  }),
  render: () => <AsyncCellDropdownExample shouldFail={false} />,
};

export const ContextOnCellMenuAsyncErrorStory: StoryObj = {
  name: 'Async-подгрузка пунктов (ошибка + ретрай)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code,
  }),
  render: () => <AsyncCellDropdownExample shouldFail />,
};
