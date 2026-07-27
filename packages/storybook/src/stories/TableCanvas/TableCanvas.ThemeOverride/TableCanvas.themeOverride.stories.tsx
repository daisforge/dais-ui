/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRows,
  createRowsTree,
  Row,
  TreeRow
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import React, { ComponentProps, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Theme Override',
  parameters: {
    docs: {
      page: DocStoryTemplate
    }
  },
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<ComponentProps<typeof TableCanvas>>;

export const ThemeOverrideBgCell: Story = {
  name: 'Переопределение фона ячейки (bgCell)',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        { key: 'id', name: 'ID' },
        {
          key: 'task',
          name: 'Задача',
          themeOverride: ({ row }) => {
            const id = Number(row.id);
            if (id % 2 === 0) {
              return { bgCell: 'rgba(46, 170, 220, 0.15)' };
            }
            return undefined;
          }
        },
        { key: 'priority', name: 'Приоритет' },
        { key: 'developer', name: 'Разработчик' }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '400px' },
          rowSize: { default: 'medium', showInControl: false }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const ThemeOverridePadding: Story = {
  name: 'Переопределение паддингов ячейки',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        { key: 'id', name: 'ID' },
        {
          key: 'task',
          name: 'Задача (padding 32px)',
          themeOverride: () => ({ cellHorizontalPadding: 32 })
        },
        {
          key: 'priority',
          name: 'Приоритет (стандартный)'
        },
        {
          key: 'developer',
          name: 'Разработчик (padding 4px)',
          themeOverride: () => ({ cellHorizontalPadding: 4 })
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '400px' },
          rowSize: { default: 'medium', showInControl: false }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const ThemeOverrideCustomRenderNoPadding: Story = {
  name: 'Кастомный renderCell без лишних паддингов',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));

    const render: ColumnConfig<Row>['renderCell'] = ({
      column,
      row,
      theme
    }) => {
      const value = String(row[column.key as keyof Row] ?? '');

      return (
        <Canvas.Container
          padding={{
            left: theme.cellHorizontalPadding,
            right: theme.cellHorizontalPadding
          }}
          alignItems="center"
        >
          <Canvas.Text>{value}</Canvas.Text>
        </Canvas.Container>
      );
    };

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Задача (дефолт)' },
        {
          key: 'priority',
          name: 'Приоритет (renderCell)',
          renderCell: render
        },
        { key: 'developer', name: 'Разработчик (дефолт)' }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '400px' },
          rowSize: { default: 'small', showInControl: true }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const ThemeOverrideSubRowsLvl: Story = {
  name: 'Subrows: переопределение по уровню (lvl)',
  render: () => {
    const [rows] = useState(() => createRowsTree());

    const columnConfig = useMemo(
      (): ColumnConfig<TreeRow>[] => [
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
            isColumnWithArrow: true
          },
          // На tree-колонке левый край считается формулой: padding + offset шеврона + offset по lvl.
          themeOverride: (_cellInfo, lvl) => {
            if (lvl === 1) return { bgCell: 'rgba(46, 170, 220, 0.12)' };
            if (lvl === 2) return { bgCell: 'rgba(255, 170, 60, 0.18)' };
            return undefined;
          }
        },
        {
          key: 'q1',
          name: 'Q1 (padding override 64 — применяется на всех уровнях)',
          contentFormat: 'number',
          subRow: { parentKeyAsDefault: true },
          // На обычной колонке padding применяется ровно на всех уровнях.
          themeOverride: (_cellInfo, lvl) => ({
            bgCell:
              lvl === 0
                ? 'rgba(120, 200, 120, 0.12)'
                : lvl === 1
                ? 'rgba(120, 200, 120, 0.20)'
                : 'rgba(120, 200, 120, 0.30)',
            cellHorizontalPadding: 64
          })
        },
        {
          key: 'q2',
          name: 'Q2',
          contentFormat: 'number',
          subRow: { keyOfColumnInSubRow: 'q2' }
        }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '500px' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id
          },
          rowSize: { default: 'medium', showInControl: false }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};

export const ThemeOverrideBgAndCustomRender: Story = {
  name: 'Фон + кастомный renderCell',
  render: () => {
    const [rows] = useState<Row[]>(createRows(0, 10));

    const columnConfig = useMemo(
      (): ColumnConfig<Row>[] => [
        { key: 'id', name: 'ID' },
        {
          key: 'task',
          name: 'Задача',
          themeOverride: ({ row }) => {
            const id = Number(row.id);
            if (id % 3 === 0) {
              return { bgCell: 'rgba(255, 100, 100, 0.15)' };
            }
            if (id % 3 === 1) {
              return { bgCell: 'rgba(100, 255, 100, 0.15)' };
            }
            return undefined;
          },
          renderCell: ({ column, row, theme }) => {
            const value = String(row[column.key as keyof Row] ?? '');
            return (
              <Canvas.Container
                padding={{
                  left: theme.cellHorizontalPadding,
                  right: theme.cellHorizontalPadding
                }}
                alignItems="center"
              >
                <Canvas.Badge view="accent" text={value} />
              </Canvas.Container>
            );
          }
        },
        { key: 'priority', name: 'Приоритет' }
      ],
      []
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '400px' },
          rowSize: { default: 'medium', showInControl: false }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
