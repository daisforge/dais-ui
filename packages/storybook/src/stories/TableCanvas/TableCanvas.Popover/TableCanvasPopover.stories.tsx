/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconInfoCircleOutline } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Popover',
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
  const issueTypes = ['Bug', 'Story', 'Epic', 'Improvement'];
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    task: `Task ${index + 1}`,
    priority: priorities[index % priorities.length] ?? '',
    issueType: issueTypes[(index * 3) % issueTypes.length] ?? '',
    developer: `Разработчик ${(index % 7) + 1}`,
    complete: (index * 17) % 101,
  }));
}

type Row = ReturnType<typeof createRows>[number];

function ExampleNodePopover() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'developer', name: 'Developer' },
      {
        key: 'action',
        name: 'Действие',
        width: 160,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.Button
              view="secondary"
              popover={{
                renderContent: ({ close }) => (
                  <div style={{ width: 240 }}>
                    <div style={{ marginBottom: 12 }}>
                      Задача «{row.task}», приоритет {row.priority}.
                    </div>
                    <Button
                      size="s"
                      view="secondary"
                      text="Закрыть"
                      onClick={close}
                    />
                  </div>
                ),
              }}
            >
              Подробнее
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        fullScreenEnabled: true,
        rowSize: { showInControl: true, default: 'big' },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExampleGlobalDefaults() {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title',
        width: 200,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.task}</Canvas.Text>
            <Canvas.Icon
              icon={<IconInfoCircleOutline />}
              size={16}
              popover={{
                content: <div style={{ width: 200 }}>Задача: {row.task}</div>,
              }}
            />
          </Canvas.Container>
        ),
      },
      {
        key: 'priority',
        name: 'Priority',
        width: 200,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.priority}</Canvas.Text>
            {/* Свой placement важнее глобального */}
            <Canvas.Icon
              icon={<IconInfoCircleOutline />}
              size={16}
              popover={{
                placement: 'bottom',
                content: (
                  <div style={{ width: 160 }}>Приоритет: {row.priority}</div>
                ),
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
        popover: {
          placement: 'right',
          hasTail: true,
          offset: 8,
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

function ExamplePopoverWithCallbacks() {
  const [rows] = useState(createRows);
  const [log, setLog] = useState<string[]>([]);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      {
        key: 'action',
        name: 'Действие',
        width: 160,
        renderCell: ({ row }) => (
          <Canvas.Container direction="row" alignItems="center" padding={8}>
            <Canvas.IconButton
              icon={<IconInfoCircleOutline />}
              popover={{
                hasTail: true,
                placement: 'left',
                closeOnScroll: false,
                onOpen: () => setLog((prev) => [...prev, `открыт: ${row.id}`]),
                onClose: () => setLog((prev) => [...prev, `закрыт: ${row.id}`]),
                content: <div style={{ width: 180 }}>Строка {row.id}</div>,
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
      <div>Журнал: {log.slice(-5).join(', ') || 'пусто'}</div>
    </div>
  );
}

function ExampleClickAndHoverPopover({
  fullScreen = false,
}: {
  fullScreen?: boolean;
}) {
  const [rows] = useState(createRows);
  const [lastAction, setLastAction] = useState('');

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID', width: 60 },
      { key: 'task', name: 'Title', width: 160 },
      {
        key: 'priority',
        name: 'Priority (наведение на иконку)',
        width: 220,
        renderCell: ({ row }) => (
          <Canvas.Container
            direction="row"
            alignItems="center"
            padding={8}
            gap={8}
          >
            <Canvas.Text>{row.priority}</Canvas.Text>
            {/* В поповер по наведению можно перевести курсор и нажать кнопку */}
            <Canvas.Icon
              icon={<IconInfoCircleOutline />}
              size={16}
              popover={{
                trigger: 'hover',
                placement: 'top',
                hasTail: true,
                renderContent: ({ close }) => (
                  <div style={{ width: 220 }}>
                    <div style={{ marginBottom: 12 }}>
                      Приоритет задачи {row.id}: {row.priority}.
                    </div>
                    <Button
                      size="s"
                      view="secondary"
                      text="Повысить"
                      onClick={() => {
                        setLastAction(`повысить приоритет: ${row.id}`);
                        close();
                      }}
                    />
                  </div>
                ),
              }}
            />
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
              popover={{
                renderContent: ({ close }) => (
                  <div style={{ width: 240 }}>
                    <div style={{ marginBottom: 12 }}>
                      Задача «{row.task}», приоритет {row.priority}.
                    </div>
                    <Button
                      size="s"
                      view="secondary"
                      text="Закрыть"
                      onClick={close}
                    />
                  </div>
                ),
              }}
            >
              Подробнее
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
          rowSize: { showInControl: true, default: 'big' },
          fullScreenEnabled: fullScreen ? { defaultOpened: true } : true,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
      <div>Последнее действие: {lastAction || 'нет'}</div>
    </div>
  );
}

const demoDataCode = `
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx',
  'createRows',
)}

type Row = ReturnType<typeof createRows>[number];
`;

const nodePopoverPreCode = `
import { Button } from '@daisforge/ui/components/Button';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx',
  'ExampleNodePopover',
)}
`;

const globalDefaultsPreCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconInfoCircleOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx',
  'ExampleGlobalDefaults',
)}
`;

const callbacksPreCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconInfoCircleOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx',
  'ExamplePopoverWithCallbacks',
)}
`;

const clickAndHoverPreCode = `
import { Button } from '@daisforge/ui/components/Button';
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import { IconInfoCircleOutline } from '@daisforge/ui/icons';
import React, { useMemo, useState } from 'react';
${demoDataCode}
${getFuncAsString(
  'packages/storybook/src/stories/TableCanvas/TableCanvas.Popover/TableCanvasPopover.stories.tsx',
  'ExampleClickAndHoverPopover',
)}
`;

export const NodePopoverStory: StoryObj = {
  name: 'popover на Canvas-элементе',
  ...storySourceDoc({
    previewSource: 'shown',
    code: nodePopoverPreCode,
  }),
  render: ExampleNodePopover,
};

export const ClickAndHoverStory: StoryObj = {
  name: 'Клик и наведение (trigger)',
  ...storySourceDoc({
    previewSource: 'shown',
    code: clickAndHoverPreCode,
  }),
  render: () => <ExampleClickAndHoverPopover />,
};

// Сразу в полноэкранном режиме. На странице Docs не показываем: оверлей
// полноэкранного режима закрыл бы остальные примеры.
export const ClickAndHoverFullScreenStory: StoryObj = {
  name: 'Клик и наведение: полноэкранный режим',
  tags: ['!autodocs'],
  parameters: {
    docs: { disable: true },
    // Тот же пример, что «Клик и наведение»; отдельный эталон не нужен.
    screenshot: { skip: true },
  },
  render: () => <ExampleClickAndHoverPopover fullScreen />,
};

export const GlobalDefaultsStory: StoryObj = {
  name: 'Дефолты в tableConfig.popover',
  ...storySourceDoc({
    previewSource: 'shown',
    code: globalDefaultsPreCode,
  }),
  render: ExampleGlobalDefaults,
};

export const CallbacksStory: StoryObj = {
  name: 'onOpen, onClose и closeOnScroll',
  ...storySourceDoc({
    previewSource: 'shown',
    code: callbacksPreCode,
  }),
  render: ExamplePopoverWithCallbacks,
};
