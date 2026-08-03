/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import { IconInfo, IconSettings } from '@ui-kit/icons';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/Sidebar',
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  tags: ['!autodocs'],
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

export const WithCustomTab: StoryObj = {
  name: 'С кастомной вкладкой',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(
      new Set(),
    );
    const [filters, setFilters] = useState({});

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
      ],
      [],
    );

    const CustomInfoTab = () => (
      <>
        <p>Всего строк: {rows.length}</p>
        <p>Выбрано строк: {selectedRows.size}</p>
      </>
    );

    return (
      <Table
        tableConfig={{
          sidebarConfig: {
            customTabs: [
              {
                id: 'customInfo',
                label: 'Информация',
                icon: <IconInfo size="s" />,
                content: <CustomInfoTab />,
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
  },
};

export const DefaultOpen: StoryObj = {
  name: 'Открыт по умолчанию на кастомной вкладке',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
      ],
      [],
    );

    return (
      <Table
        tableConfig={{
          sidebarConfig: {
            defaultOpen: true,
            defaultActiveTabId: 'customInfo',
            customTabs: [
              {
                id: 'customInfo',
                label: 'Информация',
                icon: <IconInfo size="s" />,
                content: <p>Эта вкладка открыта сразу при первом рендере.</p>,
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
  },
};

export const ControlledActiveTab: StoryObj = {
  name: 'Внешнее управление активной вкладкой',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
      ],
      [],
    );

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
        <Table
          tableConfig={{
            sidebarConfig: {
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
  },
};

export const ActiveTabCallback: StoryObj = {
  name: 'Колбэк активной вкладки',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);
    const [currentTab, setCurrentTab] = useState<string | null>(null);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
      ],
      [],
    );

    return (
      <>
        <p style={{ marginBottom: 12 }}>
          Активная вкладка: <b>{currentTab ?? 'нет (сайдбар закрыт)'}</b>
        </p>
        <Table
          tableConfig={{
            sidebarConfig: {
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
  },
};
