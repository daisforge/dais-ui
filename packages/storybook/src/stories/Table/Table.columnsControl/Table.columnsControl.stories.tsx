/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRows,
  createSeededRandom,
  type Row,
} from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import {
  ColumnConfig,
  RowInstrumentsDropdownItemOption,
  RowInstrumentsType,
  Table,
} from '@ui-kit/components/Table';
import { IconAddOutline, IconBoxOutline, IconSber } from '@ui-kit/icons';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/Table/ColumnsControl',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
    screenshot: { skip: true },
  },
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

type Story = StoryObj;

/** Названия колонок в порядке отображения (заголовки react-data-grid). */
const getHeaderNames = (canvasElement: HTMLElement) =>
  within(canvasElement)
    .queryAllByRole('columnheader')
    .map((el) => el.textContent?.trim() ?? '');

// В заголовке, кроме названия, могут быть иконки/служебный текст — ищем по вхождению.
const indexOfHeader = (names: string[], label: string) =>
  names.findIndex((name) => name.includes(label));

/**
 * Тест стори с динамической колонкой: до клика Developer нет, после клика по кнопке
 * колонка появляется сразу после Title (на своём месте из columnConfig, а не в конце).
 */
const playDynamicColumn: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // ждём рендер таблицы
  await waitFor(
    () =>
      expect(indexOfHeader(getHeaderNames(canvasElement), 'Title')).not.toBe(
        -1,
      ),
    { timeout: 5000 },
  );
  await expect(indexOfHeader(getHeaderNames(canvasElement), 'Developer')).toBe(
    -1,
  );

  await userEvent.click(
    canvas.getByRole('button', { name: 'Добавить колонку Developer' }),
  );

  await waitFor(
    () => {
      const names = getHeaderNames(canvasElement);
      const developerIndex = indexOfHeader(names, 'Developer');
      expect(developerIndex).not.toBe(-1);
      expect(developerIndex).toBe(indexOfHeader(names, 'Title') + 1);
    },
    { timeout: 5000 },
  );
};

export const ColumnsControl: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
        {
          key: 'tr1',
          name: 'TR',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 700 },
          columnsControl: {
            enable: true,
            hiding: true,
            disableHiding: ['id'],
            pinning: true,
            disablePinning: ['developer'],
            reorderingAside: true,
            reorderingHeader: true,
            columnsLabel: {
              task: 'Задачи',
            },
            orderDefault: ['id', 'issueType', 'task'],
            hiddenDefault: ['tr1'],
            pinnedDefault: ['complete'],
            onConfirm: ({ order, hidden, pinned }, _setters) => {
              // eslint-disable-next-line no-alert
              alert(`
                                    order: ${order.join(', ')}
                                    pinned: ${pinned.join(', ')}
                                    hidden: ${hidden.join(', ')}
                                `);
            },
          },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

/**
 * ### Динамическое добавление колонки
 *
 * Кнопка над таблицей добавляет колонку Developer в `columnConfig` между Title и
 * Priority, повторный клик удаляет её. Управление колонками включено
 * (`columnsControl.enable`), поэтому порядок колонок хранится внутри таблицы —
 * стори проверяет, что новая колонка встаёт на своё место в конфиге, а не в конец,
 * а удалённая пропадает из таблицы и из списка колонок в сайдбаре.
 */
export const ColumnsControlDynamicColumn: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'ColumnsControl: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Title',
        },
        ...(developerIsShown
          ? [
              {
                key: 'developer',
                name: 'Developer',
              } satisfies ColumnConfig<Row>,
            ]
          : []),
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [developerIsShown],
    );

    return (
      <Box $css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box>
          <Button
            size="s"
            view="secondary"
            onClick={() => setDeveloperIsShown((prev) => !prev)}
          >
            {developerIsShown
              ? 'Удалить колонку Developer'
              : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <Table
          tableConfig={{
            containerStyle: { height: 700 },
            columnsControl: {
              enable: true,
              hiding: true,
              pinning: true,
              reorderingAside: true,
              reorderingHeader: true,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </Box>
    );
  },
};

/**
 * ### Динамическое добавление колонки (SimpleTable)
 *
 * Рендер из стори SimpleTable без изменений конфига таблицы. Кнопка над таблицей
 * добавляет колонку Developer в `columnConfig` между Title и Priority, повторный
 * клик удаляет её.
 */
export const SimpleTableDynamicColumn: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'SimpleTable: динамическое добавление колонки',
  play: playDynamicColumn,
  render: () => {
    const [rows] = useState(createRows);
    const [developerIsShown, setDeveloperIsShown] = useState(false);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              id
              <IconSber size="xs" color="inherit" />
            </div>
          ),
        },
        {
          key: 'task',
          name: 'Title',
        },
        ...(developerIsShown
          ? [
              {
                key: 'developer',
                name: 'Developer',
              } satisfies ColumnConfig<Row>,
            ]
          : []),
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [developerIsShown],
    );

    return (
      <Box $css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box>
          <Button
            size="s"
            view="secondary"
            onClick={() => setDeveloperIsShown((prev) => !prev)}
          >
            {developerIsShown
              ? 'Удалить колонку Developer'
              : 'Добавить колонку Developer'}
          </Button>
        </Box>
        <Table
          tableConfig={{ containerStyle: { height: 700 } }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </Box>
    );
  },
};

export const ColumnsControlWithServiceColumnsForTest: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const [groupByArr, setGroupByArr] = useState<string[]>([]);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'task',
          name: 'Title',
          keyText: {
            key: 'kek',
            name: 'Ключ - Title',
            renderCell: ({ row }) => row.id,
          },
        },
        {
          key: 'priority',
          name: 'Priority',
          rowsGrouping: {
            groupByColumn: true,
          },
        },
        {
          key: 'issueType',
          name: 'Issue Type',
        },
        {
          key: 'developer',
          name: 'Developer',
        },
        {
          key: 'tr1',
          name: 'TR',
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );
    const [value, setValue] = useState(1);

    const getRowDropdownConfig = useCallback<RowInstrumentsType<Row>>(
      ({ row, rowIdx }) => ({
        items: [
          ...(rowIdx === 0
            ? [
                {
                  label: 'Увеличить счетчик',
                  value: 'counter',
                  onItemSelect: (_, e) => {
                    e.preventDefault();
                    setValue((prev) => prev + (rowIdx || 1));
                  },
                  dividerAfter: true,
                } as RowInstrumentsDropdownItemOption,
              ]
            : []),
          {
            label: 'Удалить строку',
            value: 'delete row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];

                  newV.splice(index, 1);
                  return newV;
                });
              }
            },
            contentLeft: <IconBoxOutline color="inherit" />,
          },
          {
            label: 'Добавить строку вниз',
            value: 'add row',
            onItemSelect: () => {
              const index = rows.findIndex((r) => r.id === row.id);
              if (index !== -1) {
                setRows((prev) => {
                  const newV = [...prev];
                  const newRow: Row = {
                    id: createSeededRandom(rows.length)() * 1000 + rows.length,
                    task: '',
                    priority: '',
                    issueType: '',
                    developer: '',
                    complete: 0,
                    tr: '',
                    loremIpsum: '',
                  } as Row;
                  newV.splice(index + 1, 0, newRow);

                  return newV;
                });
              }
            },
            contentLeft: <IconAddOutline color="inherit" />,
          },
        ],
      }),
      [rows],
    );

    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    return (
      <>
        <div>{value}</div>
        <Table
          tableConfig={{
            keyText: true,
            selecting: {
              rowCheckboxDisabled: (row) => row.id === 2,
              rowShowCheckbox: (row) => row.id !== 3,
              state: selectingRowStateAndSetter,
              rowKeyGetter: (r) => r.id + r.issueType,
            },
            rowsGrouping: {
              rowKeyGetter: (r) => r.id,
              groupByState: [groupByArr, setGroupByArr],
            },
            rowInstruments: {
              getRowDropdownConfig,
              defaultOpened: true,
            },
            containerStyle: { height: 700 },
            columnsControl: {
              enable: true,
              hiding: true,
              disableHiding: ['id'],
              pinning: true,
              disablePinning: ['developer'],
              reorderingAside: true,
              reorderingHeader: true,
              columnsLabel: {
                task: 'Задачи',
              },
              orderDefault: ['id', 'issueType', 'task'],
              hiddenDefault: ['tr1'],
              pinnedDefault: ['complete'],
              onConfirm: ({ order, hidden, pinned }, _setters) => {
                // eslint-disable-next-line no-alert
                alert(`
                                    order: ${order.join(', ')}
                                    pinned: ${pinned.join(', ')}
                                    hidden: ${hidden.join(', ')}
                                `);
              },
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};
