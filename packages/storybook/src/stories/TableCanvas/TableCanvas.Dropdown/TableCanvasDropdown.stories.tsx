/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { LineSkeleton, RectSkeleton } from '@ui-kit/components/Skeleton';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import {
  IconDotsVerticalCenteredOutline,
  IconSettingsOutline,
} from '@ui-kit/icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Dropdown',
  component: TableCanvas,
  parameters: {
    docs: {},
  },
  tags: ['!autodocs'],
};

export default meta;

/** Данные примеров: локальные, чтобы показанный код запускался как есть. */
function createRows() {
  const priorities = ['Low', 'Medium', 'High', 'Critical'];
  const statuses = ['Новая', 'В работе', 'Готово'];
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    task: `Task ${index + 1}`,
    priority: priorities[index % priorities.length] ?? '',
    status: statuses[index % statuses.length] ?? '',
    developer: `Разработчик ${(index % 7) + 1}`,
  }));
}

type Row = ReturnType<typeof createRows>[number];

function ExampleNodeDropdown() {
  const [rows] = useState(createRows);
  const [lastAction, setLastAction] = useState('');

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Title' },
      { key: 'status', name: 'Status' },
      { key: 'developer', name: 'Developer' },
      {
        key: 'action',
        name: 'Действие',
        width: 80,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            justifyContent="center"
            padding={8}
          >
            <Canvas.IconButton
              icon={<IconDotsVerticalCenteredOutline />}
              dropdown={{
                items: [
                  { value: 'open', label: 'Открыть' },
                  { value: 'copy', label: 'Копировать ссылку' },
                  { value: 'assign', label: 'Назначить', dividerAfter: true },
                  { value: 'delete', label: 'Удалить' },
                ],
                onItemSelect: (item) =>
                  setLastAction(`${item.label}: ${row.task}`),
              }}
            />
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TableCanvas
        tableConfig={{
          fullScreenEnabled: true,
          rowSize: { showInControl: true, default: 'big' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
      <div>Последнее действие: {lastAction || 'нет'}</div>
    </div>
  );
}

function ExampleClickAndHoverDropdown() {
  const [rows] = useState(createRows);
  const [lastAction, setLastAction] = useState('');

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Title', width: 160 },
      {
        key: 'priority',
        name: 'Priority (наведение на кнопку)',
        width: 240,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.priority}</Canvas.Text>
            {/* Список по наведению: курсор можно перевести на пункты */}
            <Canvas.Button
              view="secondary"
              dropdown={{
                trigger: 'hover',
                items: ['Low', 'Medium', 'High', 'Critical'].map((value) => ({
                  value,
                  label: value,
                  disabled: value === row.priority,
                })),
                onItemSelect: (item) =>
                  setLastAction(`приоритет ${item.label}: ${row.task}`),
              }}
            >
              Изменить
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      {
        key: 'action',
        name: 'Действие (клик по кнопке)',
        width: 200,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              dropdown={{
                items: [
                  { value: 'open', label: 'Открыть' },
                  { value: 'copy', label: 'Копировать ссылку' },
                  { value: 'delete', label: 'Удалить' },
                ],
                onItemSelect: (item) =>
                  setLastAction(`${item.label}: ${row.task}`),
              }}
            >
              Действия
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      { key: 'developer', name: 'Developer' },
    ],
    [],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TableCanvas
        tableConfig={{
          fullScreenEnabled: true,
          rowSize: { showInControl: true, default: 'big' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
      <div>Последнее действие: {lastAction || 'нет'}</div>
    </div>
  );
}

// --- Асинхронная подгрузка пунктов ----------------------------------------
// getItems возвращает промис: пока он не разрешился, список показывает
// loadingItems (здесь скелетоны через renderItem), при ошибке renderError.

const SKELETON_ITEMS = [0, 1, 2].map((i) => ({
  value: `__skeleton_${i}`,
  label: '',
  disabled: true,
}));

function SkeletonRow() {
  return (
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
}

function ExampleAsyncDropdown({ shouldFail }: { shouldFail: boolean }) {
  const [rows] = useState(createRows);
  const [lastAction, setLastAction] = useState('');
  // В режиме ошибки первая попытка падает, повтор по кнопке успешен.
  const attempts = useRef(0);

  const loadActions = useCallback(
    (row: Row) =>
      new Promise<{ value: string; label: string }[]>((resolve, reject) => {
        const willFail = shouldFail && attempts.current === 0;
        attempts.current += 1;
        setTimeout(() => {
          if (willFail) {
            reject(new Error('Сервер недоступен'));
            return;
          }
          resolve([
            { value: 'open', label: `Открыть ${row.task}` },
            { value: 'assign', label: `Назначить на ${row.developer}` },
            { value: 'delete', label: 'Удалить' },
          ]);
        }, 1200);
      }),
    [shouldFail],
  );

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Title' },
      { key: 'developer', name: 'Developer' },
      {
        key: 'action',
        name: 'Действие',
        width: 80,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            justifyContent="center"
            padding={8}
          >
            <Canvas.IconButton
              icon={<IconDotsVerticalCenteredOutline />}
              dropdown={{
                getItems: () => loadActions(row),
                loadingItems: SKELETON_ITEMS,
                renderItem: (item) =>
                  String(item.value).startsWith('__skeleton') ? (
                    <SkeletonRow />
                  ) : (
                    item.label
                  ),
                renderError: ({ error, retry }) => (
                  <div style={{ padding: 12, width: 220 }}>
                    <div style={{ marginBottom: 8 }}>
                      {(error as Error).message}
                    </div>
                    <Button
                      size="s"
                      view="secondary"
                      text="Повторить"
                      onClick={retry}
                    />
                  </div>
                ),
                onItemSelect: (item) => setLastAction(item.label),
              }}
            />
          </Canvas.Container>
        ),
      },
    ],
    [loadActions],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TableCanvas
        tableConfig={{
          fullScreenEnabled: true,
          rowSize: { showInControl: true, default: 'big' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
      <div>Последнее действие: {lastAction || 'нет'}</div>
    </div>
  );
}

function ExampleGlobalDefaults() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      {
        key: 'task',
        name: 'Title',
        width: 220,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.task}</Canvas.Text>
            <Canvas.Icon
              icon={<IconSettingsOutline />}
              size={16}
              dropdown={{
                items: [
                  { value: 'rename', label: 'Переименовать' },
                  { value: 'archive', label: 'В архив' },
                ],
              }}
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'status',
        name: 'Status',
        width: 200,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.status}</Canvas.Text>
            {/* Свой placement важнее глобального */}
            <Canvas.Icon
              icon={<IconSettingsOutline />}
              size={16}
              dropdown={{
                placement: 'bottom',
                items: [
                  { value: 'new', label: 'Новая' },
                  { value: 'progress', label: 'В работе' },
                  { value: 'done', label: 'Готово' },
                ],
              }}
            />
          </Canvas.Container>
        ),
      },
      { key: 'developer', name: 'Developer' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        fullScreenEnabled: true,
        rowSize: { showInControl: true, default: 'big' },
        dropdown: {
          placement: 'right',
          listWidth: 200,
          variant: 'tight',
          closeOnSelect: false,
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

// --- Все варианты на одной таблице -------------------------------------------
// Стенд для ручной проверки: каждая колонка свой сценарий, внизу журнал
// событий onOpen / onClose / onItemSelect.

const ACTIONS = [
  { value: 'open', label: 'Открыть' },
  { value: 'copy', label: 'Копировать ссылку' },
  { value: 'delete', label: 'Удалить' },
];

const NESTED_ACTIONS = [
  { value: 'open', label: 'Открыть' },
  {
    value: 'move',
    label: 'Переместить в...',
    items: [
      { value: 'backlog', label: 'Бэклог' },
      { value: 'sprint', label: 'Спринт' },
      { value: 'archive', label: 'Архив' },
    ],
  },
  { value: 'assign', label: 'Назначить', dividerAfter: true },
  { value: 'delete', label: 'Удалить', disabled: true },
];

function ExampleAllVariants() {
  const [rows] = useState(createRows);
  const [log, setLog] = useState<{ id: number; text: string }[]>([]);
  const attempts = useRef<Record<number, number>>({});
  const counter = useRef(0);

  const note = useCallback((text: string) => {
    counter.current += 1;
    const id = counter.current;
    setLog((prev) => [...prev.slice(-9), { id, text }]);
  }, []);

  const events = useCallback(
    (name: string, row: Row) => ({
      onOpen: () => note(`${name} #${row.id}: открыт`),
      onClose: () => note(`${name} #${row.id}: закрыт`),
      onItemSelect: (item: { label: string }) =>
        note(`${name} #${row.id}: выбран «${item.label}»`),
    }),
    [note],
  );

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID', width: 56 },
      { key: 'task', name: 'Title', width: 110 },
      {
        key: 'click',
        name: 'Клик',
        width: 130,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              dropdown={{ items: ACTIONS, ...events('Клик', row) }}
            >
              Действия
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      {
        key: 'nested',
        name: 'Вложенные',
        width: 100,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            justifyContent="center"
            padding={8}
          >
            <Canvas.IconButton
              icon={<IconDotsVerticalCenteredOutline />}
              dropdown={{
                items: NESTED_ACTIONS,
                listWidth: 220,
                ...events('Вложенные', row),
              }}
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'hover',
        name: 'Наведение',
        width: 130,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              dropdown={{
                trigger: 'hover',
                items: ACTIONS,
                ...events('Наведение', row),
              }}
            >
              Наведи
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      {
        key: 'hoverIcon',
        name: 'Наведение (иконка)',
        width: 150,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.priority}</Canvas.Text>
            <Canvas.Icon
              icon={<IconSettingsOutline />}
              size={16}
              dropdown={{
                trigger: 'hover',
                placement: 'right',
                variant: 'tight',
                items: ['Low', 'Medium', 'High', 'Critical'].map((value) => ({
                  value,
                  label: value,
                  disabled: value === row.priority,
                })),
                ...events('Иконка', row),
              }}
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'async',
        name: 'Async',
        width: 90,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            justifyContent="center"
            padding={8}
          >
            <Canvas.IconButton
              icon={<IconDotsVerticalCenteredOutline />}
              dropdown={{
                getItems: () =>
                  new Promise((resolve) => {
                    setTimeout(
                      () =>
                        resolve([
                          { value: 'open', label: `Открыть ${row.task}` },
                          {
                            value: 'assign',
                            label: `Назначить ${row.developer}`,
                          },
                        ]),
                      1000,
                    );
                  }),
                ...events('Async', row),
              }}
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'asyncError',
        name: 'Async: ошибка',
        width: 120,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            justifyContent="center"
            padding={8}
          >
            <Canvas.IconButton
              icon={<IconDotsVerticalCenteredOutline />}
              dropdown={{
                // Первая попытка в каждой строке падает, повтор успешен
                getItems: () =>
                  new Promise((resolve, reject) => {
                    const n = attempts.current[row.id] ?? 0;
                    attempts.current[row.id] = n + 1;
                    setTimeout(() => {
                      if (n === 0) reject(new Error('Сервер недоступен'));
                      else resolve(ACTIONS);
                    }, 800);
                  }),
                renderError: ({ error, retry }) => (
                  <div style={{ padding: 12, width: 220 }}>
                    <div style={{ marginBottom: 8 }}>
                      {(error as Error).message}
                    </div>
                    <Button
                      size="s"
                      view="secondary"
                      text="Повторить"
                      onClick={retry}
                    />
                  </div>
                ),
                ...events('Async-ошибка', row),
              }}
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'keepOpen',
        name: 'closeOnSelect: false',
        width: 170,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              dropdown={{
                items: ACTIONS,
                closeOnSelect: false,
                ...events('Без закрытия', row),
              }}
            >
              Несколько
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      {
        key: 'noOutside',
        name: 'Без клика мимо и Esc',
        width: 180,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              dropdown={{
                items: ACTIONS,
                closeOnOutsideClick: false,
                closeOnEsc: false,
                placement: 'top',
                ...events('Только toggle', row),
              }}
            >
              Только toggle
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      {
        key: 'popover',
        name: 'Поповер рядом',
        width: 140,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              popover={{
                content: (
                  <div style={{ width: 180 }}>Поповер строки {row.id}</div>
                ),
                onOpen: () => note(`Поповер #${row.id}: открыт`),
                onClose: () => note(`Поповер #${row.id}: закрыт`),
              }}
            >
              Поповер
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
      { key: 'developer', name: 'Developer', width: 140 },
    ],
    [events, note],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          fullScreenEnabled: true,
          // Переключатель размера строк в блоке управления
          rowSize: { showInControl: true, default: 'big' },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <div>Журнал (последние 10):</div>
        {log.length === 0 ? (
          <div>пусто</div>
        ) : (
          log.map((line) => <div key={line.id}>{line.text}</div>)
        )}
      </div>
    </div>
  );
}

const demoDataCode = `
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx',
  'createRows',
)}

type Row = ReturnType<typeof createRows>[number];
`;

const nodeDropdownPreCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx',
  'ExampleNodeDropdown',
)}
`;

const clickAndHoverPreCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx',
  'ExampleClickAndHoverDropdown',
)}
`;

const asyncPreCode = `
import { Button } from '@daisforge/ui/components/Button';
import { LineSkeleton, RectSkeleton } from '@daisforge/ui/components/Skeleton';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconDotsVerticalCenteredOutline } from '@daisforge/ui/icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';
${demoDataCode}
const SKELETON_ITEMS = [0, 1, 2].map((i) => ({
  value: \`__skeleton_\${i}\`,
  label: '',
  disabled: true,
}));

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx',
  'SkeletonRow',
)}

${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx',
  'ExampleAsyncDropdown',
)}
`;

const globalDefaultsPreCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconSettingsOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Dropdown/TableCanvasDropdown.stories.tsx',
  'ExampleGlobalDefaults',
)}
`;

export const NodeDropdownStory: StoryObj = {
  name: 'dropdown на Canvas-элементе',
  ...storySourceDoc({
    previewSource: 'shown',
    code: nodeDropdownPreCode,
  }),
  render: ExampleNodeDropdown,
};

export const ClickAndHoverStory: StoryObj = {
  name: 'Клик и наведение (trigger)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: clickAndHoverPreCode,
  }),
  render: ExampleClickAndHoverDropdown,
};

export const AsyncSuccessStory: StoryObj = {
  name: 'Асинхронная подгрузка пунктов (успех)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: asyncPreCode,
  }),
  render: () => <ExampleAsyncDropdown shouldFail={false} />,
};

export const AsyncErrorStory: StoryObj = {
  name: 'Асинхронная подгрузка пунктов (ошибка и повтор)',
  ...storySourceDoc({
    previewSource: 'hidden',
    code: asyncPreCode,
  }),
  parameters: {
    // Тот же пример, что «успех»; отдельный эталон не нужен.
    screenshot: { skip: true },
  },
  render: () => <ExampleAsyncDropdown shouldFail />,
};

export const GlobalDefaultsStory: StoryObj = {
  name: 'Дефолты в tableConfig.dropdown',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalDefaultsPreCode,
  }),
  render: ExampleGlobalDefaults,
};

export const AllVariantsStory: StoryObj = {
  name: 'Все варианты (стенд)',
  parameters: {
    docs: { disable: true },
    screenshot: { skip: true },
  },
  render: ExampleAllVariants,
};
