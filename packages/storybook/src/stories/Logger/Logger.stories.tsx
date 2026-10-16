/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import type { LoggerFilterValue, LoggerProps } from '@ui-kit/components/Logger';
import {
  getLoggerGroupIds,
  isLoggerMessage,
  Logger,
  LoggerFilters,
  LoggerGroup,
  LoggerGroupItem,
  LoggerItem,
  LoggerItems,
  LoggerList,
  LoggerMessage,
  LoggerProvider,
  LoggerStatusIcon,
  useLogger,
} from '@ui-kit/components/Logger';
import { BodyXS, TextXS } from '@ui-kit/components/Typography';
import { IconCloudDownloadOutline, IconSyncError } from '@ui-kit/icons';
import React, { useState } from 'react';

import { GROUPED_ITEMS, MANY_ITEMS, PLAIN_ITEMS } from './Logger.data';
import { declareSource } from './Logger.source';

const meta: Meta<LoggerProps> = {
  title: 'Локальные компоненты/Logger',
  component: Logger,
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

type Story = StoryObj<LoggerProps>;

const STATUS_COLORS = {
  error: '#E31227',
  warning: '#FA5F05',
  success: '#108E26',
  info: '#707C84',
} as const;

// Код в сниппетах собирается из тех же данных, что и рендер
const GROUPED_SRC = declareSource('items', 'LoggerItem[]', GROUPED_ITEMS);
const PLAIN_SRC = declareSource('items', 'LoggerItem[]', PLAIN_ITEMS);

const LOGGER_IMPORT = `import { Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`;

export const Default: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${GROUPED_SRC}

export const Example = () => <Logger items={items} defaultOpen />;`,
  }),
  name: 'Базовый пример',
  args: { items: GROUPED_ITEMS, defaultOpen: true },
};

export const Collapsed: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${GROUPED_SRC}

// Панель свёрнута: видна только шапка со счётчиками. Клик по шапке открывает её
export const Example = () => <Logger items={items} />;`,
  }),
  name: 'Свёрнутый',
  args: { items: GROUPED_ITEMS, defaultOpen: false },
};

export const WithoutGroups: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${PLAIN_SRC}

export const Example = () => <Logger items={items} defaultOpen />;`,
  }),
  name: 'Плоский список',
  args: { items: PLAIN_ITEMS, defaultOpen: true },
};

export const FilteredByStatus: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${GROUPED_SRC}

// defaultFilter выбирает начальный фильтр, defaultExpandedIds раскрывает группы.
// Группа остаётся в списке, если в ней есть сообщение нужного статуса
export const Example = () => (
  <Logger items={items} defaultOpen defaultFilter="warning" defaultExpandedIds={['validation']} />
);`,
  }),
  name: 'Фильтр по статусу',
  args: {
    items: GROUPED_ITEMS,
    defaultOpen: true,
    defaultFilter: 'warning',
    defaultExpandedIds: ['validation'],
  },
};

export const Empty: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `// Без сообщений показывается текст «Сообщений нет».
// Его можно заменить: labels={{ empty: '...' }} или emptyContent={<MyEmpty />}
export const Example = () => <Logger items={[]} defaultOpen />;`,
  }),
  name: 'Нет сообщений',
  args: { items: [], defaultOpen: true },
};

export const ManyMessages: Story = {
  ...storySourceDoc({
    type: 'code',
    preCode: `import { Logger } from '@daisforge/ui';
import type { LoggerItem, LoggerStatus } from '@daisforge/ui';`,
    code: `const STATUS_CYCLE: LoggerStatus[] = ['info', 'error', 'warning', 'success'];

const items: LoggerItem[] = Array.from({ length: 40 }, (_, index) => ({
  id: \`many-\${index}\`,
  status: STATUS_CYCLE[index % STATUS_CYCLE.length] ?? 'info',
  title: \`Сообщение №\${index + 1}\`,
  description: index % 3 === 0 ? \`Подробности сообщения №\${index + 1}\` : undefined,
  date: new Date(2025, 0, 1, 12, Math.floor(index / 60), index % 60),
}));

// maxHeight ограничивает высоту списка, дальше появляется прокрутка (по умолчанию 50vh)
export const Example = () => <Logger items={items} defaultOpen maxHeight={280} />;`,
  }),
  name: 'Много сообщений (прокрутка)',
  args: { items: MANY_ITEMS, defaultOpen: true, maxHeight: 280 },
};

export const ControlledState: Story = {
  name: 'Управляемое состояние',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { useState } from 'react';
import { Button, getLoggerGroupIds, Logger } from '@daisforge/ui';
import type { LoggerFilterValue, LoggerItem } from '@daisforge/ui';`,
    code: `${GROUPED_SRC}

export const Example = () => {
  // Открыта ли панель
  const [open, setOpen] = useState(true);
  // Активный фильтр: 'all' | 'error' | 'warning' | 'info' | 'success' | null
  const [filter, setFilter] = useState<LoggerFilterValue | null>('all');
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
        <Button size="xs" view="secondary" text="Развернуть группы" onClick={() => setExpanded(getLoggerGroupIds(items))} />
        <Button size="xs" view="secondary" text="Свернуть группы" onClick={() => setExpanded([])} />
      </div>
      <Logger
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
    const [filter, setFilter] = useState<LoggerFilterValue | null>('all');
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
            onClick={() => setExpanded(getLoggerGroupIds(GROUPED_ITEMS))}
          />
          <Button
            size="xs"
            view="secondary"
            text="Свернуть группы"
            onClick={() => setExpanded([])}
          />
        </div>
        <Logger
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
  name: 'Только список (LoggerList)',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { LoggerList } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,
    code: `${GROUPED_SRC}

// LoggerList: только список без шапки. Подходит для модалки, drawer или своей панели
export const Example = () => (
  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
    <LoggerList items={items} defaultExpandedIds={['excel']} maxHeight={360} />
  </div>
);`,
  }),
  render: () => (
    <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12 }}>
      <LoggerList
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
import { BodyXS, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,
    code: `export const Example = () => {
  const [log, setLog] = useState<string[]>([]);
  const items: LoggerItem[] = [
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
      <Logger items={items} defaultOpen />
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
    const items: LoggerItem[] = [
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
        <Logger items={items} defaultOpen />
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
    preCode: `import { Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconSyncError } from '@daisforge/ui/icons';`,
    code: `${PLAIN_SRC}

export const Example = () => (
  <Logger
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
    statusIcons={{ error: <IconSyncError size="xs" color="#E31227" /> }}
    // Формат даты. Вернуть null, чтобы скрыть дату
    formatDate={(date) => new Date(date).toLocaleString('en-GB')}
  />
);`,
  }),
  render: () => (
    <Logger
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
      statusIcons={{ error: <IconSyncError size="xs" color="#E31227" /> }}
      formatDate={(date) => new Date(date).toLocaleString('en-GB')}
    />
  ),
};

export const CustomMessageRender: Story = {
  name: 'Свой рендер сообщения',
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${PLAIN_SRC}

const STATUS_COLORS = {
  error: '#E31227',
  warning: '#FA5F05',
  success: '#108E26',
  info: '#707C84',
} as const;

export const Example = () => (
  <Logger
    items={items}
    defaultOpen
    // renderMessage заменяет отрисовку сообщения.
    // defaultRender() возвращает стандартный вид, его можно обернуть
    renderMessage={({ item, defaultRender }) => (
      <div
        style={{
          borderLeft: \`3px solid \${STATUS_COLORS[item.status]}\`,
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
    <Logger
      items={PLAIN_ITEMS}
      defaultOpen
      renderMessage={({ item, defaultRender }) => (
        <div
          style={{
            borderLeft: `3px solid ${STATUS_COLORS[item.status]}`,
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
    preCode: `import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,
    code: `${GROUPED_SRC}

export const Example = () => (
  <Logger
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
    <Logger
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
    preCode: `import { Button, Logger, TextXS } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,
    code: `// meta: любые ваши данные, они доступны во всех render-функциях
${declareSource('items', 'LoggerItem[]', ITEMS_WITH_META)}

export const Example = () => (
  <Logger
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
    <Logger
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
import { BodyXS, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,
    code: `${PLAIN_SRC}

export const Example = () => {
  const [events, setEvents] = useState<string[]>([]);

  return (
    <>
      <Logger
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
        <Logger
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
    preCode: `import { Button, Logger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';
import { IconCloudDownloadOutline } from '@daisforge/ui/icons';`,
    code: `${PLAIN_SRC}

export const Example = () => (
  <Logger
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
    <Logger
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

export const ExternalCounts: Story = {
  name: 'Внешние счётчики',
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${PLAIN_SRC}

// По умолчанию счётчики считаются по items. Если загружена только часть данных,
// передайте итоговые значения: они перекроют вычисленные
export const Example = () => (
  <Logger items={items} defaultOpen counts={{ error: 128, warning: 12, info: 1043, success: 5 }} />
);`,
  }),
  args: {
    items: PLAIN_ITEMS,
    defaultOpen: true,
    counts: { error: 128, warning: 12, info: 1043, success: 5 },
  },
};

export const CustomStyling: Story = {
  name: 'Стилизация: classes и $css',
  ...storySourceDoc({
    type: 'code',
    preCode: LOGGER_IMPORT,
    code: `${PLAIN_SRC}

export const Example = () => (
  <Logger
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
  name: 'Headless: useLogger + собственная вёрстка',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { LoggerFilters, LoggerItems, LoggerProvider, useLogger } from '@daisforge/ui';
import type { LoggerItem } from '@daisforge/ui';`,
    code: `${PLAIN_SRC}

export const Example = () => {
  // useLogger хранит состояние: фильтр, раскрытые элементы, счётчики, отфильтрованный список
  const logger = useLogger({ items, defaultFilter: 'all' });

  return (
    // LoggerProvider нужен вложенным частям (иконки, тексты, раскрытие)
    <LoggerProvider expandedIds={logger.expandedIds} toggleExpanded={logger.toggleExpanded}>
      {/* Своя вёрстка: любые обёртки, шапки и расположение */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <LoggerFilters counts={logger.counts} value={logger.filter} onChange={logger.setFilter} showEmpty />
        <LoggerItems items={logger.visibleItems} />
      </div>
    </LoggerProvider>
  );
};`,
  }),
  render: () => {
    const logger = useLogger({ items: PLAIN_ITEMS, defaultFilter: 'all' });

    return (
      <LoggerProvider
        expandedIds={logger.expandedIds}
        toggleExpanded={logger.toggleExpanded}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <LoggerFilters
            counts={logger.counts}
            value={logger.filter}
            onChange={logger.setFilter}
            showEmpty
          />
          <LoggerItems items={logger.visibleItems} />
        </div>
      </LoggerProvider>
    );
  },
};

export const StatusIcons: Story = {
  name: 'Иконки статусов',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { LoggerStatusIcon } from '@daisforge/ui';`,
    code: `// Иконка статуса из логгера. Статус: 'error' | 'warning' | 'info' | 'success'
export const Example = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    {(['error', 'success', 'warning', 'info'] as const).map((status) => (
      <LoggerStatusIcon key={status} status={status} />
    ))}
  </div>
);`,
  }),
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      {(['error', 'success', 'warning', 'info'] as const).map((status) => (
        <LoggerStatusIcon key={status} status={status} />
      ))}
    </div>
  ),
};

const singleMessage = PLAIN_ITEMS.find(isLoggerMessage);
const singleGroup = GROUPED_ITEMS.find(
  (item): item is LoggerGroupItem => item.id === 'validation',
);

export const SingleParts: Story = {
  name: 'Отдельные части: LoggerMessage и LoggerGroup',
  ...storySourceDoc({
    type: 'code',
    preCode: `import { LoggerGroup, LoggerMessage } from '@daisforge/ui';
import type { LoggerGroupItem, LoggerMessageItem } from '@daisforge/ui';`,
    code: `${declareSource('message', 'LoggerMessageItem', singleMessage)}

${declareSource('group', 'LoggerGroupItem', singleGroup)}

// Части можно использовать отдельно, без панели
export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <LoggerMessage item={message} />

    {/* open управляет раскрытием, вложенные сообщения передаются как children */}
    <LoggerGroup item={group} open>
      <LoggerMessage item={{ id: 'standalone-2', status: 'warning', title: 'Вложенное сообщение' }} />
    </LoggerGroup>
  </div>
);`,
  }),
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {singleMessage && <LoggerMessage item={singleMessage} />}
      {singleGroup && (
        <LoggerGroup item={singleGroup} open>
          <LoggerMessage
            item={{
              id: 'standalone-2',
              status: 'warning',
              title: 'Вложенное сообщение',
            }}
          />
        </LoggerGroup>
      )}
    </div>
  ),
};
