import { Button } from '@ui-kit/components/Button';
import { type ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { BodyS } from '@ui-kit/components/Typography';
import {
  IconBookOpenOutline,
  IconDocumentOutline,
  IconInfo,
  IconSettings,
} from '@ui-kit/icons';
import React, { useState } from 'react';

export function createSidebarData() {
  type Row = { id: number; task: string; priority: string };
  const priorities = ['Critical', 'High', 'Medium', 'Low'];
  const rows: Row[] = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    task: `Task ${index + 1}`,
    priority: priorities[index % priorities.length] ?? 'Low',
  }));
  const columnConfig: ColumnConfig<Row>[] = [
    { key: 'id', name: 'ID', width: 100 },
    { key: 'task', name: 'Title', width: 300 },
    { key: 'priority', name: 'Priority', width: 180 },
  ];
  return { rows, columnConfig };
}

export function WithCustomTabExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [filters, setFilters] = useState({});

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 480 },
        rightSidebarConfig: {
          customTabs: [
            {
              id: 'customInfo',
              label: 'Информация',
              icon: <IconInfo size="s" />,
              content: (
                <>
                  <p>Всего строк: {rows.length}</p>
                  <p>Выбрано строк: {selectedRows.size}</p>
                </>
              ),
              title: 'Информация',
              showInSidebar: true,
            },
          ],
        },
        selecting: {
          state: [selectedRows, setSelectedRows],
          rowKeyGetter: (row) => row.id.toString(),
        },
        filtering: {
          state: [filters, setFilters],
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

export function DefaultOpenExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 480 },
        rightSidebarConfig: {
          defaultOpen: true,
          defaultActiveTabId: 'customInfo',
          customTabs: [
            {
              id: 'customInfo',
              label: 'Информация',
              icon: <IconInfo size="s" />,
              content: <p>Всего строк: {rows.length}</p>,
              title: 'Информация',
              showInSidebar: true,
            },
          ],
        },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
}

export function ControlledActiveTabExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const openTab = (id: string) => {
    setActiveTab(id);
    setIsOpen(true);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button onClick={() => openTab('customInfo')}>Инфо</Button>
        <Button onClick={() => openTab('customSettings')}>Настройки</Button>
        <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
      </div>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 480 },
          rightSidebarConfig: {
            openState: [isOpen, setIsOpen],
            activeTabState: [activeTab, setActiveTab],
            customTabs: [
              {
                id: 'customInfo',
                label: 'Информация',
                icon: <IconInfo size="s" />,
                content: <p>Вкладка «Информация».</p>,
                title: 'Информация',
                showInSidebar: true,
              },
              {
                id: 'customSettings',
                label: 'Настройки',
                icon: <IconSettings size="s" />,
                content: <p>Вкладка «Настройки».</p>,
                title: 'Настройки',
                showInSidebar: true,
              },
            ],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    </>
  );
}

export function ActiveTabCallbackExample() {
  const [{ rows, columnConfig }] = useState(createSidebarData);
  const [currentTab, setCurrentTab] = useState<string | null>(null);

  return (
    <>
      <p style={{ marginBottom: 12 }}>
        Активная вкладка: <b>{currentTab ?? 'нет (сайдбар закрыт)'}</b>
      </p>
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 480 },
          rightSidebarConfig: {
            onActiveTabChange: (tabId, tab) =>
              setCurrentTab(tab?.title ?? tabId),
            customTabs: [
              {
                id: 'customInfo',
                label: 'Информация',
                icon: <IconInfo size="s" />,
                content: <p>Вкладка «Информация».</p>,
                title: 'Информация',
                showInSidebar: true,
              },
              {
                id: 'customSettings',
                label: 'Настройки',
                icon: <IconSettings size="s" />,
                content: <p>Вкладка «Настройки».</p>,
                title: 'Настройки',
                showInSidebar: true,
              },
            ],
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    </>
  );
}

export function LeftSidebarExample() {
  const [width, setWidth] = useState<string | number>(300);
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');
  const onActiveTabChange = (id: string | null) => {
    if (id === 'reports') setWidth(300);
    if (id === 'books') setWidth('35%');
  };
  const rows = [
    { id: 1, report: 'Финансовый отчёт' },
    { id: 2, report: 'Итоги квартала' },
  ];

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button size="xs" view="secondary" onClick={() => setWidth(360)}>
          360px
        </Button>
        <Button size="xs" view="secondary" onClick={() => setWidth('25%')}>
          25%
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setOpen((value) => !value)}
        >
          Переключить панель
        </Button>
      </div>
      <TableCanvas
        rows={rows}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          leftSidebarConfig: {
            width,
            openState: [open, setOpen],
            defaultActiveTabId: 'reports',
            onActiveTabChange,
            customTabs: [
              {
                id: 'reports',
                label: 'Отчёты',
                icon: <IconDocumentOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <TextFieldSearch
                      size="xs"
                      aria-label="Поиск отчёта"
                      placeholder="Поиск отчёта"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      onClear={() => setQuery('')}
                    />
                    {rows
                      .filter((row) =>
                        row.report.toLowerCase().includes(query.toLowerCase()),
                      )
                      .map((row) => (
                        <BodyS key={row.id} style={{ marginTop: 16 }}>
                          {row.report}
                        </BodyS>
                      ))}
                  </div>
                ),
              },
              {
                id: 'books',
                label: 'Книги',
                icon: <IconBookOpenOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <BodyS>Книги отчётов</BodyS>
                    <Button
                      size="xs"
                      view="secondary"
                      style={{ marginTop: 16 }}
                    >
                      Отчётность 2026
                    </Button>
                  </div>
                ),
              },
            ],
          },
        }}
      />
    </div>
  );
}

export function RightSidebarExample() {
  const [width, setWidth] = useState<string | number>(400);
  const onActiveTabChange = (id: string | null) => {
    if (id === 'reports') setWidth(400);
    if (id === 'books') setWidth('35%');
  };

  return (
    <div style={{ padding: 16 }}>
      <TableCanvas
        rows={[
          { id: 1, report: 'Финансовый отчёт' },
          { id: 2, report: 'Итоги квартала' },
        ]}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          rightSidebarConfig: {
            width,
            defaultOpen: true,
            defaultActiveTabId: 'reports',
            onActiveTabChange,
            defaultTabs: [
              { id: 'tableSettings', showInSidebar: false },
              { id: 'columns', showInSidebar: false },
              { id: 'filtering', showInSidebar: false },
            ],
            customTabs: [
              {
                id: 'reports',
                label: 'Отчёты',
                icon: <IconDocumentOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <BodyS>Сведения об отчёте</BodyS>
                    <BodyS style={{ marginTop: 16 }}>
                      Данные по подразделениям за 2026 год.
                    </BodyS>
                  </div>
                ),
              },
              {
                id: 'books',
                label: 'Книги',
                icon: <IconBookOpenOutline size="s" />,
                content: (
                  <div style={{ padding: 16 }}>
                    <BodyS>Книги отчётов</BodyS>
                    <Button
                      size="xs"
                      view="secondary"
                      style={{ marginTop: 16 }}
                    >
                      Отчётность 2026
                    </Button>
                  </div>
                ),
              },
            ],
          },
        }}
      />
    </div>
  );
}
