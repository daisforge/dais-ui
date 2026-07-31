/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRows,
  createRowsTree,
  type Row,
  type TreeRow,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/RowMarkers',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

const TREE_SUB_ROWS_CONFIG = {
  getSubRows: (row: TreeRow) => row?.subRows,
  rowKeyGetter: (row: TreeRow) => row.id,
};

function useFlatColumns(): readonly ColumnConfig<Row>[] {
  return useMemo(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Task' },
      { key: 'priority', name: 'Priority' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );
}

function useTreeColumns(): readonly ColumnConfig<TreeRow>[] {
  return useMemo(
    () => [
      {
        key: 'block',
        name: 'Блок / Трайб / Продукт',
        subRow: {
          keyOfColumnInSubRow: (lvl) => {
            switch (lvl) {
              case 0:
                return 'block';
              case 1:
                return 'tribe';
              case 2:
                return 'product';
              default:
                return 'block';
            }
          },
          isColumnWithArrow: true,
        },
      },
      { key: 'blockActivity', name: 'Активность блока' },
    ],
    [],
  );
}

const preCode = `
const TREE_SUB_ROWS_CONFIG = {
  getSubRows: (row: TreeRow) => row?.subRows,
  rowKeyGetter: (row: TreeRow) => row.id,
};

function useFlatColumns(): readonly ColumnConfig<Row>[] {
  return useMemo(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Task' },
      { key: 'priority', name: 'Priority' },
      { key: 'complete', name: '% Complete' },
    ],
    []
  );
}

function useTreeColumns(): readonly ColumnConfig<TreeRow>[] {
  return useMemo(
    () => [
      {
        key: 'block',
        name: 'Блок / Трайб / Продукт',
        subRow: {
          keyOfColumnInSubRow: (lvl) => {
            switch (lvl) {
              case 0: return 'block';
              case 1: return 'tribe';
              case 2: return 'product';
              default: return 'block';
            }
          },
          isColumnWithArrow: true,
        },
      },
      { key: 'blockActivity', name: 'Активность блока' },
    ],
    []
  );
}
`;

export const SimpleRowMarkers: Story = {
  name: 'Простая нумерация',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useFlatColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const CustomStartIndex: Story = {
  name: 'Стартовый индекс 100',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Task' },
        { key: 'priority', name: 'Priority' },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 100,
            width: 60,
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const WithSubRows: Story = {
  name: 'С subRows (root-only по умолчанию)',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
          },
          subRows: TREE_SUB_ROWS_CONFIG,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const CustomGetRowMarkerRootDash: Story = {
  name: 'getRowMarker: корневые — номер, subRows — прочерк',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
            getRowMarker: ({ isSubRow, flatIndex }) => {
              if (isSubRow) {
                return '—';
              }
              return flatIndex + 1;
            },
          },
          subRows: TREE_SUB_ROWS_CONFIG,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const StableIndexWithCollapsed: Story = {
  name: 'Стабильная нумерация (учёт скрытых строк)',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
            getRowMarker: ({ flatIndex }) => flatIndex + 1,
          },
          subRows: TREE_SUB_ROWS_CONFIG,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const UnstableFlatIndex: Story = {
  name: 'getRowMarker: нестабильная нумерация (rowIndex)',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
            getRowMarker: ({ rowIndex }) => rowIndex + 1,
          },
          subRows: TREE_SUB_ROWS_CONFIG,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const WithCheckboxes: Story = {
  name: 'Нумерация + чекбоксы',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useFlatColumns();
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
          },
          selecting: {
            state: selectingRowStateAndSetter,
            rowKeyGetter: (r) => r.id,
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

const RICH_TREE_ROWS: TreeRow[] = [
  {
    id: 'b1',
    block: 'Реклама',
    blockActivity: 'В стоп-листе',
    tribe: '',
    tribeZone: '',
    product: '',
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    subRows: [
      {
        id: 't1',
        block: '',
        blockActivity: '',
        tribe: 'Digital',
        tribeZone: '',
        product: '',
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        subRows: [
          {
            id: 'p1',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'Портал планирования',
            q1: 10,
            q2: 20,
            q3: 30,
            q4: 40,
          },
          {
            id: 'p2',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'Баннерная система',
            q1: 5,
            q2: 15,
            q3: 25,
            q4: 35,
          },
        ],
      },
      {
        id: 't2',
        block: '',
        blockActivity: '',
        tribe: 'Офлайн',
        tribeZone: '',
        product: '',
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        subRows: [
          {
            id: 'p3',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'Листовки',
            q1: 1,
            q2: 2,
            q3: 3,
            q4: 4,
          },
        ],
      },
    ],
  } as TreeRow,
  {
    id: 'b2',
    block: 'Технологии',
    blockActivity: 'Активный',
    tribe: '',
    tribeZone: '',
    product: '',
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    subRows: [
      {
        id: 't3',
        block: '',
        blockActivity: '',
        tribe: 'Backend',
        tribeZone: '',
        product: '',
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        subRows: [
          {
            id: 'p4',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'API Gateway',
            q1: 100,
            q2: 200,
            q3: 300,
            q4: 400,
          },
          {
            id: 'p5',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'База данных',
            q1: 50,
            q2: 60,
            q3: 70,
            q4: 80,
          },
        ],
      },
      {
        id: 't4',
        block: '',
        blockActivity: '',
        tribe: 'Frontend',
        tribeZone: '',
        product: '',
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        subRows: [
          {
            id: 'p6',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'React UI',
            q1: 11,
            q2: 22,
            q3: 33,
            q4: 44,
          },
          {
            id: 'p7',
            block: '',
            blockActivity: '',
            tribe: '',
            tribeZone: '',
            product: 'Vue Dashboard',
            q1: 12,
            q2: 23,
            q3: 34,
            q4: 45,
          },
        ],
      },
    ],
  } as TreeRow,
  {
    id: 'b3',
    block: 'Маркетинг',
    blockActivity: 'Планирование',
    tribe: '',
    tribeZone: '',
    product: '',
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
  } as TreeRow,
];

export const TwoLevelNumbering: Story = {
  name: 'Двухуровневая нумерация (1, 1.1, 1.2, 2)',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState(() => createRowsTree());
    const columnConfig = useTreeColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
            size: 'm',
            getRowMarker: ({ siblingPath }) =>
              siblingPath.map((i) => i + 1).join('.'),
          },
          subRows: TREE_SUB_ROWS_CONFIG,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const HierarchicalNumberingRich: Story = {
  name: 'Иерархическая нумерация (богатые данные)',
  ...storySourceDoc({ preCode }),
  render: () => {
    const [rows] = useState<TreeRow[]>(() => RICH_TREE_ROWS);
    const columnConfig = useTreeColumns();

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          rowMarkers: {
            startIndex: 1,
            size: 'm',
            getRowMarker: ({ siblingPath }) =>
              siblingPath.map((i) => i + 1).join('.'),
          },
          subRows: TREE_SUB_ROWS_CONFIG,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
