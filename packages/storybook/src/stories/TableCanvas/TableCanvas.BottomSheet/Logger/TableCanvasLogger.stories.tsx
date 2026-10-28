/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import type {
  TableCanvasLoggerFilterValue,
  TableCanvasLoggerProps,
  TableCanvasLoggerStatus,
} from '@ui-kit/components/TableCanvas';
import {
  getTableCanvasLoggerGroupIds,
  isTableCanvasLoggerMessage,
  TableCanvasLogger,
  TableCanvasLoggerFilters,
  TableCanvasLoggerGroup,
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerItem,
  TableCanvasLoggerItems,
  TableCanvasLoggerList,
  TableCanvasLoggerMessage,
  TableCanvasLoggerProvider,
  useTableCanvasLogger,
} from '@ui-kit/components/TableCanvas';
import { BodyXS, TextXS } from '@ui-kit/components/Typography';
import { IconCloudDownloadOutline, IconSyncError } from '@ui-kit/icons';
import {
  textNegative,
  textPositive,
  textTertiary,
  textWarning,
} from '@ui-kit/tokens';
import React, { useState } from 'react';

import { GROUPED_ITEMS, PLAIN_ITEMS } from './TableCanvasLogger.data';
import { TableCanvasLoggerInTableExample } from './TableCanvasLogger.inTable';
import { declareSource } from './TableCanvasLogger.source';

const meta: Meta<TableCanvasLoggerProps> = {
  title: 'Локальные компоненты/TableCanvas/BottomSheet/Logger',
  component: TableCanvasLogger,
  tags: ['!autodocs'],
  parameters: { docs: { layout: 'padded' } },
  argTypes: {
    items: { control: false },
    maxHeight: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 720 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<TableCanvasLoggerProps>;

const STATUS_COLORS: Record<TableCanvasLoggerStatus, () => string> = {
  error: () => textNegative,
  warning: () => textWarning,
  success: () => textPositive,
  info: () => textTertiary,
};

// Код в сниппетах собирается из тех же данных, что и рендер
const GROUPED_SRC = declareSource(
  'items',
  'TableCanvasLoggerItem[]',
  GROUPED_ITEMS,
);
const PLAIN_SRC = declareSource(
  'items',
  'TableCanvasLoggerItem[]',
  PLAIN_ITEMS,
);

const TABLE_CANVAS_LOGGER_IMPORT = `import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`;

// prettier-ignore
const IN_TABLE_CODE = `
import { TableCanvas, TableCanvasLogger, type TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import React, { useState } from 'react';

${GROUPED_SRC}

${getFuncAsString('packages/storybook/src/stories/TableCanvas/TableCanvas.BottomSheet/Logger/TableCanvasLogger.inTable.tsx', 'TableCanvasLoggerInTableExample')}

<TableCanvasLoggerInTableExample items={items} />;
`;

export const InTable: Story = {
  ...storySourceDoc({ type: 'code', code: IN_TABLE_CODE }),
  name: 'В нижней панели таблицы',
  render: () => <TableCanvasLoggerInTableExample items={GROUPED_ITEMS} />,
};

export const Default: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: TABLE_CANVAS_LOGGER_IMPORT,
    code: `${GROUPED_SRC}

export const Example = () => <TableCanvasLogger items={items} defaultOpen />;`,
  }),
  name: 'Базовый пример',
  args: { items: GROUPED_ITEMS, defaultOpen: true },
};

export const ControlledState: Story = {
  name: 'Управляемое состояние',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { useState } from 'react';
import { Button } from '@daisforge/ui';
import { getTableCanvasLoggerGroupIds, TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerFilterValue, TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `${GROUPED_SRC}

export const Example = () => {
  // Открыта ли панель
  const [open, setOpen] = useState(true);
  // Активный фильтр: 'all' | 'error' | 'warning' | 'info' | 'success'. При закрытии панели сбрасывается на 'all'
  const [filter, setFilter] = useState<TableCanvasLoggerFilterValue>('all');
  // id раскрытых групп и сообщений с открытыми подробностями
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button size="xs" view="secondary" text={open ? 'Закрыть' : 'Открыть'} onClick={() => setOpen(!open)} />
        <Button
          size="xs"
          view="secondary"
          text="Только ошибки"
          onClick={() => {
            setFilter('error');
            setOpen(true);
          }}
        />
        <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getTableCanvasLoggerGroupIds(items))} />
        <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
      </div>
      <TableCanvasLogger
        items={items}
        open={open}
        onOpenChange={setOpen}
        filter={filter}
        onFilterChange={setFilter}
        expandedIds={expanded}
        onExpandedIdsChange={setExpanded}
      />
    </div>
  );
};`,
  }),
  render: () => {
    const [open, setOpen] = useState(true);
    const [filter, setFilter] = useState<TableCanvasLoggerFilterValue>('all');
    const [expanded, setExpanded] = useState<string[]>([]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            size="xs"
            view="secondary"
            text={open ? 'Закрыть' : 'Открыть'}
            onClick={() => setOpen(!open)}
          />
          <Button
            size="xs"
            view="secondary"
            text="Только ошибки"
            onClick={() => {
              setFilter('error');
              setOpen(true);
            }}
          />
          <Button
            size="xs"
            view="secondary"
            text="Развернуть группы"
            onClick={() =>
              setExpanded(getTableCanvasLoggerGroupIds(GROUPED_ITEMS))
            }
          />
          <Button
            size="xs"
            view="secondary"
            text="Свернуть группы"
            onClick={() => setExpanded([])}
          />
        </div>
        <TableCanvasLogger
          items={GROUPED_ITEMS}
          open={open}
          onOpenChange={setOpen}
          filter={filter}
          onFilterChange={setFilter}
          expandedIds={expanded}
          onExpandedIdsChange={setExpanded}
        />
      </div>
    );
  },
};

export const ListOnly: Story = {
  name: 'Только список (TableCanvasLoggerList)',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { TableCanvasLoggerList } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `${GROUPED_SRC}

// TableCanvasLoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <TableCanvasLoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);`,
  }),
  render: () => (
    <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
      <TableCanvasLoggerList
        items={GROUPED_ITEMS}
        defaultExpandedIds={['excel']}
        maxHeight={360}
      />
    </div>
  ),
};

export const CustomActions: Story = {
  name: 'Свои действия сообщений',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,
    code: `export const Example = () => {
  const [log, setLog] = useState<string[]>([]);
  const items: TableCanvasLoggerItem[] = [
    {
      id: 'download',
      status: 'error',
      title: 'Не удалось выгрузить отчёт',
      description: 'Превышено время ожидания ответа от сервиса выгрузки',
      date: new Date(2025, 0, 1, 11, 30, 0),
      // Свои кнопки показываются после «Подробнее» и «Скопировать ID»
      actions: [
        // Кнопка с текстом
        {
          id: 'retry',
          text: 'Повторить',
          onClick: (item) => setLog((prev) => [...prev, \`Повтор: \${item.id}\`]),
        },
        // Кнопка только с иконкой: title нужен для подсказки и доступности
        {
          id: 'download',
          title: 'Скачать лог',
          icon: <IconCloudDownloadOutline size="xs" />,
          onClick: (item) => setLog((prev) => [...prev, \`Скачивание лога: \${item.id}\`]),
        },
        // Неактивная кнопка
        { id: 'disabled', text: 'Недоступно', disabled: true },
      ],
    },
  ];

  return (
    <>
      <TableCanvasLogger items={items} defaultOpen />
      <BodyXS>
        Вызовы onClick:{' '}
        {log.length ? log.join(' → ') : 'пока нет, нажмите «Повторить» или иконку скачивания'}
      </BodyXS>
    </>
  );
};`,
  }),
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const items: TableCanvasLoggerItem[] = [
      {
        id: 'download',
        status: 'error',
        title: 'Не удалось выгрузить отчёт',
        description: 'Превышено время ожидания ответа от сервиса выгрузки',
        date: new Date(2025, 0, 1, 11, 30, 0),
        actions: [
          {
            id: 'retry',
            text: 'Повторить',
            onClick: (item) =>
              setLog((prev) => [...prev, `Повтор: ${item.id}`]),
          },
          {
            id: 'download',
            title: 'Скачать лог',
            icon: <IconCloudDownloadOutline size="xs" />,
            onClick: (item) =>
              setLog((prev) => [...prev, `Скачивание лога: ${item.id}`]),
          },
          { id: 'disabled', text: 'Недоступно', disabled: true },
        ],
      },
    ];

    return (
      <>
        <TableCanvasLogger items={items} defaultOpen />
        <BodyXS>
          Вызовы onClick:{' '}
          {log.length
            ? log.join(' → ')
            : 'пока нет, нажмите «Повторить» или иконку скачивания'}
        </BodyXS>
      </>
    );
  },
};

export const CustomLabelsAndIcons: Story = {
  name: 'Свои тексты и иконки',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconSyncError } from '@daisforge/ui/icons';
import { textNegative } from '@daisforge/ui/tokens';`,
    code: `${PLAIN_SRC}

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // Заголовок панели
    title="System messages"
    // Любые тексты компонента. Незаданные остаются по умолчанию
    labels={{
      all: 'All',
      details: 'Details',
      hide: 'Hide',
      copyTraceId: 'Copy ID',
      copied: 'Copied',
      empty: 'No messages',
    }}
    // Замена иконки отдельных статусов
    statusIcons={{ error: <IconSyncError size="xs" color={textNegative} /> }}
    // Формат даты. Вернуть null, чтобы скрыть дату
    formatDate={(date) => new Date(date).toLocaleString('en-GB')}
  />
);`,
  }),
  render: () => (
    <TableCanvasLogger
      items={PLAIN_ITEMS}
      defaultOpen
      title="System messages"
      labels={{
        all: 'All',
        details: 'Details',
        hide: 'Hide',
        copyTraceId: 'Copy ID',
        copied: 'Copied',
        empty: 'No messages',
      }}
      statusIcons={{ error: <IconSyncError size="xs" color={textNegative} /> }}
      formatDate={(date) => new Date(date).toLocaleString('en-GB')}
    />
  ),
};

export const CustomMessageRender: Story = {
  name: 'Свой рендер сообщения',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem, TableCanvasLoggerStatus } from '@daisforge/ui/components/TableCanvas';
import { textNegative, textPositive, textTertiary, textWarning } from '@daisforge/ui/tokens';`,
    code: `${PLAIN_SRC}

const STATUS_COLORS: Record<TableCanvasLoggerStatus, () => string> = {
  error: () => textNegative,
  warning: () => textWarning,
  success: () => textPositive,
  info: () => textTertiary,
};

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // renderMessage заменяет отрисовку сообщения.
    // defaultRender() возвращает стандартный вид, его можно обернуть
    renderMessage={({ item, defaultRender }) => (
      <div
        style={{
          borderLeft: \`3px solid \${STATUS_COLORS[item.status]()}\`,
          paddingLeft: 12,
        }}
      >
        {defaultRender()}
      </div>
    )}
  />
);`,
  }),
  render: () => (
    <TableCanvasLogger
      items={PLAIN_ITEMS}
      defaultOpen
      renderMessage={({ item, defaultRender }) => (
        <div
          style={{
            borderLeft: `3px solid ${STATUS_COLORS[item.status]()}`,
            paddingLeft: 12,
          }}
        >
          {defaultRender()}
        </div>
      )}
    />
  ),
};

export const CustomGroupRender: Story = {
  name: 'Свой рендер группы',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `${GROUPED_SRC}

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    defaultExpandedIds={['excel']}
    // renderGroup заменяет отрисовку группы.
    // open: раскрыта ли группа, toggle: переключить, children: уже отрисованные вложенные сообщения
    renderGroup={({ item, open, toggle, children }) => (
      <section
        style={{
          border: '1px dashed rgba(0,0,0,0.2)',
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Button
          size="xxs"
          view="clear"
          text={\`\${open ? '▼' : '▶'} \${item.title} (\${item.items.length})\`}
          onClick={toggle}
        />
        {open && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              paddingTop: 8,
            }}
          >
            {children}
          </div>
        )}
      </section>
    )}
  />
);`,
  }),
  render: () => (
    <TableCanvasLogger
      items={GROUPED_ITEMS}
      defaultOpen
      defaultExpandedIds={['excel']}
      renderGroup={({ item, open, toggle, children }) => (
        <section
          style={{
            border: '1px dashed rgba(0,0,0,0.2)',
            borderRadius: 8,
            padding: 8,
          }}
        >
          <Button
            size="xxs"
            view="clear"
            text={`${open ? '▼' : '▶'} ${item.title} (${item.items.length})`}
            onClick={toggle}
          />
          {open && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                paddingTop: 8,
              }}
            >
              {children}
            </div>
          )}
        </section>
      )}
    />
  ),
};

const ITEMS_WITH_META = PLAIN_ITEMS.map((item) => ({
  ...item,
  meta: { source: 'AE Data' },
}));

export const CustomActionsSlot: Story = {
  name: 'Расширение строки действий и описания',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { Button, TextXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `// meta: любые ваши данные, они доступны во всех render-функциях
${declareSource('items', 'TableCanvasLoggerItem[]', ITEMS_WITH_META)}

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // Добавить кнопку к стандартным: defaults это «Подробнее», «Скопировать ID», код и ваши actions
    renderActions={(_item, defaults) => (
      <>
        {defaults}
        <Button size="xxs" view="secondary" text="Создать тикет" />
      </>
    )}
    // Свой вид блока подробностей
    renderDescription={(item) => (
      <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: 12 }}>
        {String(item.description)}
      </pre>
    )}
    // Дополнительная строка под заголовком сообщения
    renderMessageExtra={(item) => <TextXS>Источник: {String(item.meta?.source)}</TextXS>}
  />
);`,
  }),
  render: () => (
    <TableCanvasLogger
      items={ITEMS_WITH_META}
      defaultOpen
      renderActions={(_item, defaults) => (
        <>
          {defaults}
          <Button size="xxs" view="secondary" text="Создать тикет" />
        </>
      )}
      renderDescription={(item) => (
        <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: 12 }}>
          {String(item.description)}
        </pre>
      )}
      renderMessageExtra={(item) => (
        <TextXS>Источник: {String(item.meta?.source)}</TextXS>
      )}
    />
  ),
};

export const CopyHandlers: Story = {
  name: 'Обработка копирования и кода',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { useState } from 'react';
import { BodyXS } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `${PLAIN_SRC}

export const Example = () => {
  const [events, setEvents] = useState<string[]>([]);

  return (
    <>
      <TableCanvasLogger
        items={items}
        defaultOpen
        // Необязательно: свой способ копирования вместо navigator.clipboard
        copyToClipboard={() => undefined}
        // Вызывается после успешного копирования. kind: 'traceId' или 'description'
        onCopy={(kind, value) => setEvents((prev) => [...prev, \`copy:\${kind}:\${value}\`])}
        // Клик по кнопке с кодом, например открыть документацию по коду ошибки
        onCodeClick={(code) => setEvents((prev) => [...prev, \`code:\${code}\`])}
      />
      <BodyXS>
        Вызовы колбэков: {events.join(' | ') || 'пока нет, нажмите «Скопировать ID» или код'}
      </BodyXS>
    </>
  );
};`,
  }),
  render: () => {
    const [events, setEvents] = useState<string[]>([]);

    return (
      <>
        <TableCanvasLogger
          items={PLAIN_ITEMS}
          defaultOpen
          copyToClipboard={() => undefined}
          onCopy={(kind, value) =>
            setEvents((prev) => [...prev, `copy:${kind}:${value}`])
          }
          onCodeClick={(code) => setEvents((prev) => [...prev, `code:${code}`])}
        />
        <BodyXS>
          Вызовы колбэков:{' '}
          {events.join(' | ') || 'пока нет, нажмите «Скопировать ID» или код'}
        </BodyXS>
      </>
    );
  },
};

export const HeaderCustomization: Story = {
  name: 'Шапка: заголовок, иконка, доп. контент',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { Button } from '@daisforge/ui';
import { TableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,
    code: `${PLAIN_SRC}

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    title="Журнал загрузки"
    icon={<IconCloudDownloadOutline size="xs" />}
    // Контент справа в шапке. stopPropagation, чтобы клик не сворачивал панель
    headerExtra={
      <Button size="xxs" view="clear" text="Очистить" onClick={(e) => e.stopPropagation()} />
    }
    // Показывать чипсы статусов, даже если сообщений такого статуса нет
    showEmptyFilters
  />
);`,
  }),
  render: () => (
    <TableCanvasLogger
      items={PLAIN_ITEMS}
      defaultOpen
      title="Журнал загрузки"
      icon={<IconCloudDownloadOutline size="xs" />}
      headerExtra={
        <Button
          size="xxs"
          view="clear"
          text="Очистить"
          onClick={(e) => e.stopPropagation()}
        />
      }
      showEmptyFilters
    />
  ),
};

export const CustomStyling: Story = {
  name: 'Стилизация: classes и $css',
  ...storySourceDoc({
    type: 'code',
    preCode: TABLE_CANVAS_LOGGER_IMPORT,
    code: `${PLAIN_SRC}

export const Example = () => (
  <TableCanvasLogger
    items={items}
    defaultOpen
    // Классы отдельных слотов: root, header, filters, filter, list, group, groupHeader,
    // groupBody, message, messageIcon, messageTitle, messageActions, messageDate, messageDescription
    // classes={{ message: 'my-message' }}
    // Стили корня: строка, объект или css\`\`
    $css={{ padding: 16, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12 }}
  />
);`,
  }),
  args: {
    items: PLAIN_ITEMS,
    defaultOpen: true,
    $css: {
      padding: 16,
      border: '1px solid rgba(0,0,0,0.12)',
      borderRadius: 12,
    },
  },
};

export const Headless: Story = {
  name: 'Headless: useTableCanvasLogger + собственная вёрстка',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { TableCanvasLoggerFilters, TableCanvasLoggerItems, TableCanvasLoggerProvider, useTableCanvasLogger } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `${PLAIN_SRC}

export const Example = () => {
  // useTableCanvasLogger хранит состояние: фильтр, раскрытые элементы, счётчики, отфильтрованный список
  const logger = useTableCanvasLogger({ items, defaultFilter: 'all' });

  return (
    // TableCanvasLoggerProvider нужен вложенным частям (иконки, тексты, раскрытие)
    <TableCanvasLoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
      {/* Своя вёрстка: любые обёртки, шапки и расположение */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TableCanvasLoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
        <TableCanvasLoggerItems items={logger.visibleItems} />
      </div>
    </TableCanvasLoggerProvider>
  );
};`,
  }),
  render: () => {
    const logger = useTableCanvasLogger({
      items: PLAIN_ITEMS,
      defaultFilter: 'all',
    });

    return (
      <TableCanvasLoggerProvider
        expandedIds={logger.expandedIds}
        toggleExpanded={logger.toggleExpanded}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TableCanvasLoggerFilters
            counts={logger.counts}
            value={logger.filter}
            onChange={logger.setFilter}
            showEmpty
          />
          <TableCanvasLoggerItems items={logger.visibleItems} />
        </div>
      </TableCanvasLoggerProvider>
    );
  },
};

const singleMessage = PLAIN_ITEMS.find(isTableCanvasLoggerMessage);
const singleGroup = GROUPED_ITEMS.find(
  (item): item is TableCanvasLoggerGroupItem => item.id === 'validation',
);

export const SingleParts: Story = {
  name: 'Отдельные части: TableCanvasLoggerMessage и TableCanvasLoggerGroup',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { TableCanvasLoggerGroup, TableCanvasLoggerMessage } from '@daisforge/ui/components/TableCanvas';
import type { TableCanvasLoggerGroupItem, TableCanvasLoggerMessageItem } from '@daisforge/ui/components/TableCanvas';`,
    code: `${declareSource(
      'message',
      'TableCanvasLoggerMessageItem',
      singleMessage,
    )}

${declareSource('group', 'TableCanvasLoggerGroupItem', singleGroup)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <TableCanvasLoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <TableCanvasLoggerGroup item={group} open>
      <TableCanvasLoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </TableCanvasLoggerGroup>
  </div>
);`,
  }),
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {singleMessage && <TableCanvasLoggerMessage item={singleMessage} />}
      {singleGroup && (
        <TableCanvasLoggerGroup item={singleGroup} open>
          <TableCanvasLoggerMessage
            item={{
              id: 'standalone-2',
              status: 'warning',
              title: 'Вложенное сообщение',
            }}
          />
        </TableCanvasLoggerGroup>
      )}
    </div>
  ),
};
