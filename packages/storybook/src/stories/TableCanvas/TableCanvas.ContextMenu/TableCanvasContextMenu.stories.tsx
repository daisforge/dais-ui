/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { LineSkeleton, RectSkeleton } from '@ui-kit/components/Skeleton';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ContextMenu',
  component: TableCanvas,
  parameters: {
    docs: {
      // page is not needed here as we will link it via autodocs or mdx
    },
  },
  tags: ['!autodocs'],
};

export default meta;

function ExampleHeaderDropdown() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onHeaderContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column }) => [
            {
              value: `lvl1 ${column.name}`,
              label: `${column.name} lvl1`,
              items: [
                {
                  value: `lvl1_inside ${column.key}`,
                  label: `${column.key} lvl1 inside`,
                },
              ],
            },
            {
              value: `lvl2 ${column.key}`,
              label: `${column.key} lvl2`,
            },
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onHeaderContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          },
        },
        onHeaderContextMenu: (colIndex, event, tableInfo) => {
          console.debug(
            'Логика внешнего onHeaderContextMenu',
            colIndex,
            event,
            tableInfo,
          );
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleHeaderHandler() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onHeaderContextMenu: (colIndex, event, context) =>
          console.debug(colIndex, event, context),
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleCellDropdown() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column, row }) => {
            console.debug(
              column,
              row,
              'getDropdownItems for onCellContextMenuDropdown',
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
            console.group('onItemSelect for onCellContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context', context);
            console.debug(event, 'event');
            console.groupEnd();
            // Пример вызова каких-то действий
            // eslint-disable-next-line no-alert
            alert(`Selected ${item.label} for row ${context.row.id}`);
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleCellHandler() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenu: (args, event, context) => {
          console.debug(args, event, context, 'onCellContextMenu');
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleAllFeatures() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenu: (args, event, context) => {
          console.debug(args, event, context, 'onCellContextMenu');
        },
        onCellContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column }) => [
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
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onCellContextMenuDropdown');
            console.debug(item, 'item');
            console.debug(context, 'context');
            console.debug(event, 'event');
            console.groupEnd();
          },
        },
        onHeaderContextMenu: (colIndex, event, context) =>
          console.debug(colIndex, event, context),
        onHeaderContextMenuDropdown: {
          type: 'dropdown',
          getDropdownItems: ({ column }) => [
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
          ],
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect for onHeaderContextMenuDropdown');
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
}

// Кастомные свойства Dropdown: size, listWidth, closeOnSelect
function ExampleCustomDropdownProps() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'tr1', name: 'TR' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        onCellContextMenuDropdown: {
          type: 'dropdown',
          size: 's',
          listWidth: '580px',
          closeOnSelect: true,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getDropdownItems: ({ column, row }) => [
            {
              value: 'clone',
              label: `Клонировать "${row.task}"`,
            },
            {
              value: 'edit',
              label: 'Редактировать',
            },
            {
              value: 'nested',
              label: 'Вложенные действия',
              items: [
                { value: 'nested_1', label: 'Действие 1' },
                { value: 'nested_2', label: 'Действие 2' },
              ],
            },
            {
              value: 'delete',
              label: 'Удалить',
            },
          ],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onItemSelect: (item, context, event) => {
            console.group('onItemSelect (custom props)');
            console.debug('item:', item);
            console.debug('row:', context.row);
            console.groupEnd();
          },
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

const headerDropdownPreCode = `
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx',
  'ExampleHeaderDropdown',
)}
`;

const headerHandlerPreCode = `
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx',
  'ExampleHeaderHandler',
)}
`;

const cellDropdownPreCode = `
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx',
  'ExampleCellDropdown',
)}
`;

const cellHandlerPreCode = `
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx',
  'ExampleCellHandler',
)}
`;

export const ContextOnHeaderMenuDropdownStory: StoryObj = {
  name: 'Контекстное меню Dropdown (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerDropdownPreCode,
  }),
  render: ExampleHeaderDropdown,
};

export const ContextOnHeaderMenuStory: StoryObj = {
  name: 'Контекстное меню, функция обработчик (шапка таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: headerHandlerPreCode,
  }),
  render: ExampleHeaderHandler,
};

export const ContextOnCellMenuDropdownStory: StoryObj = {
  name: 'Контекстное меню Dropdown (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellDropdownPreCode,
  }),
  render: ExampleCellDropdown,
};

export const ContextOnCellMenuStory: StoryObj = {
  name: 'Контекстное меню, функция обработчик (cell таблицы)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: cellHandlerPreCode,
  }),
  render: ExampleCellHandler,
};

const customDropdownPreCode = `
import { createRows, type Row } from './data/tableData';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx',
  'ExampleCustomDropdownProps',
)}
`;

export const ContextMenuCustomDropdownPropsStory: StoryObj = {
  name: 'Кастомные свойства Dropdown (size, listWidth, closeOnSelect)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: customDropdownPreCode,
  }),
  render: ExampleCustomDropdownProps,
};

// Демо «все возможности» (без play — визуальный тест вынесен в *.visual.stories).
export const ContextOnCellAndOnHeaderMenuStory: StoryObj = {
  name: 'Контекстное меню (все возможности)',
  render: ExampleAllFeatures,
};

// --- Асинхронная подгрузка пунктов меню ----------------------------------
// Запросом и состоянием владеет потребитель: onOpen стартует загрузку, а
// getDropdownItems читается реактивно (скелетоны → реальные пункты / ошибка).

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
    <TableCanvas
      tableConfig={{
        onCellContextMenuDropdown: {
          type: 'dropdown',
          listWidth: '240px',
          onOpen: ({ row, column }) => load(row, `${row.id}:${column.name}`),
          getDropdownItems: ({ row, column }) => {
            if (menu.key !== `${row.id}:${column.name}`) return [];
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
          onItemSelect: (item) => {
            if (String(item.value).startsWith('__skeleton')) return;
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
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.ContextMenu/TableCanvasContextMenu.stories.tsx',
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
