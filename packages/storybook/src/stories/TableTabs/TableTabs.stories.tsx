/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import type { Meta, StoryObj } from '@storybook/react';
import { RectSkeleton } from '@ui-kit/components/Skeleton';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import {
  ColumnConfig as CanvasColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { TableTabs } from '@ui-kit/components/TableTabs';
import { surfaceInfo, surfaceSolidCard } from '@ui-kit/tokens';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableTabs',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
      toc: true,
    },
  },
};

export default meta;

/**
 * ##### Базовый пример
 *
 * Несколько обычных таблиц (`Table`) в табах.
 */
export const BasicWithTable: StoryObj = {
  name: 'Table в табах',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'complete', name: '% Complete' },
      ],
      [],
    );

    const [activeTabId, setActiveTabId] = useState('1');

    return (
      <TableTabs
        activeTabIdState={[activeTabId, setActiveTabId]}
        tabs={[
          { tabId: '1', label: 'Таб 1' },
          { tabId: '2', label: 'Таб 2' },
          { tabId: '3', label: 'Скелетон' },
        ]}
      >
        <TableTabs.TabPanel tabId="1">
          <Table
            tableConfig={{ containerStyle: { height: 700 } }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="2">
          <Table
            tableConfig={{ containerStyle: { height: 700 } }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="3">
          <RectSkeleton width="100%" height={600} />
        </TableTabs.TabPanel>
      </TableTabs>
    );
  },
};

/**
 * ##### TableCanvas в табах
 *
 * Несколько канвасных таблиц (`TableCanvas`) в табах.
 */
export const BasicWithTableCanvas: StoryObj = {
  name: 'TableCanvas в табах',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly CanvasColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' },
      ],
      [],
    );

    const [activeTabId, setActiveTabId] = useState('1');

    return (
      <TableTabs
        activeTabIdState={[activeTabId, setActiveTabId]}
        tabs={[
          { tabId: '1', label: 'Таб 1' },
          { tabId: '2', label: 'Таб 2' },
          { tabId: '3', label: 'Скелетон' },
        ]}
      >
        <TableTabs.TabPanel tabId="1">
          <TableCanvas
            tableConfig={{
              containerStyle: { height: 700 },
              fullScreenEnabled: true,
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="2">
          <TableCanvas
            tableConfig={{
              containerStyle: { height: 700 },
              fullScreenEnabled: true,
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="3">
          <RectSkeleton width="100%" height={600} />
        </TableTabs.TabPanel>
      </TableTabs>
    );
  },
};

/**
 * ##### TableTabs в колонке, если не задан статичный размер для таблицы
 *
 * Сценарий для страниц, где над табами есть дополнительный
 * контент и не задан статичный размер таблицы(px, рассчитан через calc),
 * а область с панелями должна занять всё оставшееся пространство.
 */
export const FillAvailableHeightWithTableCanvas: StoryObj = {
  name: 'TableCanvas без заданого статичного размера, на доступную высоту',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly CanvasColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID', width: 90 },
        { key: 'task', name: 'Title', width: 280 },
        { key: 'priority', name: 'Priority', width: 160 },
        { key: 'issueType', name: 'Issue Type', width: 160 },
        { key: 'developer', name: 'Developer' },
      ],
      [],
    );

    const [activeTabId, setActiveTabId] = useState('all');

    return (
      <div
        style={{
          height: 760,
          padding: 24,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          minHeight: 0,
          background: surfaceInfo,
        }}
      >
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              lineHeight: '36px',
              color: surfaceSolidCard,
            }}
          >
            Реестр документов
          </div>
          <div
            style={{
              fontSize: 14,
              lineHeight: '20px',
              color: surfaceSolidCard,
            }}
          >
            Пример композиции, в которой TableTabs занимает доступную высоту
            страницы, а TableCanvas и sidebar остаются внутри своей области.
          </div>
        </div>

        <TableTabs
          activeTabIdState={[activeTabId, setActiveTabId]}
          tabs={[
            { tabId: 'all', label: 'Все документы' },
            { tabId: 'drafts', label: 'Черновики' },
          ]}
          tabsAndPanelsContainerCss={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
            minWidth: 0,
            width: '100%',
            '& .rdg__tabs-container': {
              flexShrink: 0,
            },
            '& .rdg__tab-panel': {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              minHeight: 0,
              minWidth: 0,
              width: '100%',
              overflow: 'hidden',
            },
          }}
        >
          <TableTabs.TabPanel tabId="all" unmountOnClose={false}>
            <TableCanvas
              tableConfig={{
                containerStyle: { height: '100%' },
                fullScreenEnabled: true,
                columnsControl: {
                  enable: true,
                },
              }}
              columnConfig={columnConfig}
              rows={rows}
            />
          </TableTabs.TabPanel>

          <TableTabs.TabPanel tabId="drafts" unmountOnClose={false}>
            <TableCanvas
              tableConfig={{
                containerStyle: { height: '100%' },
                fullScreenEnabled: true,
                columnsControl: {
                  enable: true,
                },
              }}
              columnConfig={columnConfig}
              rows={rows.slice(0, 40)}
            />
          </TableTabs.TabPanel>
        </TableTabs>
      </div>
    );
  },
};

/**
 * ##### Table + TableCanvas
 *
 * Демонстрация использования общего компонента `TableTabs` с двумя разными
 * таблицами: обычной `Table` и канвасной `TableCanvas`. Оба компонента
 * корректно подхватывают контекст табов.
 */
export const MixedTableAndCanvas: StoryObj = {
  name: 'Table + TableCanvas',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'complete', name: '% Complete' },
      ],
      [],
    );

    const canvasColumnConfig = useMemo<readonly CanvasColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' },
      ],
      [],
    );

    const [activeTabId, setActiveTabId] = useState('table');

    return (
      <TableTabs
        activeTabIdState={[activeTabId, setActiveTabId]}
        tabs={[
          { tabId: 'table', label: 'Table (обычная)' },
          { tabId: 'canvas', label: 'TableCanvas (канвасная)' },
        ]}
      >
        <TableTabs.TabPanel tabId="table">
          <Table
            tableConfig={{
              containerStyle: { height: 700 },
              fullScreenEnabled: true,
            }}
            columnConfig={columnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="canvas">
          <TableCanvas
            tableConfig={{
              containerStyle: { height: 700 },
              fullScreenEnabled: true,
            }}
            columnConfig={canvasColumnConfig}
            rows={rows}
          />
        </TableTabs.TabPanel>
        <TableTabs.TabPanel tabId="canvas1">
          <div>test</div>
        </TableTabs.TabPanel>
      </TableTabs>
    );
  },
};
