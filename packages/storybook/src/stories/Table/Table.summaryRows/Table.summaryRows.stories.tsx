/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Button } from '@ui-kit/components/Button';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import { BodyS } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { textNegative, textSecondary, textWarning } from '@ui-kit/tokens';
import React, { useCallback, useMemo, useState } from 'react';
import { RenderSummaryCellProps } from 'react-data-grid';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SummaryRows',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
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

type TSummaryRowData = {
  type: 'top' | 'bottom';
  values: Array<{ columnId: string; value: string }>;
};

export const SummaryRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const [rows] = useState(createRows);

    const topSummaryRowsData: TSummaryRowData[] = [
      {
        type: 'top',
        values: [
          {
            columnId: 'id',
            value: 'Итого',
          },
          {
            columnId: 'priority',
            value: `Критичных приоритетов ${
              rows.filter((el) => el.priority === 'Critical').length
            }`,
          },
        ],
      },
      {
        type: 'top',
        values: [
          {
            columnId: 'id',
            value: 'Итого',
          },
          {
            columnId: 'priority',
            value: `Высоких приоритетов ${
              rows.filter((el) => el.priority === 'High').length
            }`,
          },
        ],
      },
    ];

    const bottomSummaryRowsData: TSummaryRowData[] = [
      {
        type: 'bottom',
        values: [
          { columnId: 'id', value: 'Итого' },
          { columnId: 'task', value: `Всего тасков ${rows.length}` },
          {
            columnId: 'priority',
            value: `Средних приоритетов ${
              rows.filter((el) => el.priority === 'Medium').length
            }`,
          },
        ],
      },
    ];

    const renderCommonSummaryCell = useCallback(
      (props: RenderSummaryCellProps<unknown, Row>) =>
        (props.row as TSummaryRowData).values.find(
          (el) => el.columnId === props.column.key,
        )?.value,
      [],
    );

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          renderSummaryCell: renderCommonSummaryCell,
        },
        {
          key: 'task',
          name: 'Title',
          renderSummaryCell: renderCommonSummaryCell,
        },
        {
          key: 'priority',
          name: 'Priority',
          renderSummaryCell: (props) => {
            const rowData = props.row as TSummaryRowData;
            return (
              <div
                style={{
                  color: rowData.type === 'top' ? textNegative : textWarning,
                }}
              >
                {renderCommonSummaryCell(props)}
              </div>
            );
          },
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
      [renderCommonSummaryCell],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          summaryRows: {
            showDefault: true,
            showInControl: true,
          },
        }}
        columnConfig={columnConfig}
        topSummaryRows={topSummaryRowsData}
        bottomSummaryRows={bottomSummaryRowsData}
        rows={rows}
      />
    );
  },
};

const SUMMARY_ROWS_STORAGE_KEY = 'storybook:table:summary-rows';

// data-testid элементов, по которым play-функция находит их в DOM
const TEST_ID = {
  settingsTab: 'summary-rows-settings-tab',
  switch: 'summary-rows-switch',
  remount: 'summary-rows-remount',
  reset: 'summary-rows-reset',
  log: 'summary-rows-log',
} as const;

const readSavedSummaryRows = () => {
  try {
    return localStorage.getItem(SUMMARY_ROWS_STORAGE_KEY) !== 'false';
  } catch {
    return true;
  }
};

const playSummaryRowsOnChange: Story['play'] = async ({
  canvasElement,
  step,
}) => {
  const canvas = within(canvasElement);
  const getSavedValue = () => localStorage.getItem(SUMMARY_ROWS_STORAGE_KEY);
  const hasSummaryRow = () => canvas.queryByText('Итого') !== null;

  const toggleSummaryRows = async () => {
    // Сайдбар закрыт — открываем вкладку настроек
    if (!canvas.queryByTestId(TEST_ID.switch)) {
      await userEvent.click(await canvas.findByTestId(TEST_ID.settingsTab));
    }
    const switchBlock = await canvas.findByTestId(TEST_ID.switch);
    await userEvent.click(within(switchBlock).getByText('Итоговые строки'));
  };

  await step('Сброс сохранённого выбора', async () => {
    await userEvent.click(await canvas.findByTestId(TEST_ID.reset));
    await waitFor(() => expect(hasSummaryRow()).toBe(true));
    await expect(getSavedValue()).toBeNull();
    await expect(canvas.getByTestId(TEST_ID.log)).toHaveTextContent(
      'onChange ещё не вызывался',
    );
  });

  await step('Выключение тогла вызывает onChange(false)', async () => {
    await toggleSummaryRows();
    await waitFor(() => expect(hasSummaryRow()).toBe(false));
    await expect(canvas.getByTestId(TEST_ID.log)).toHaveTextContent(
      'onChange: false',
    );
    await expect(getSavedValue()).toBe('false');
  });

  await step(
    'После перемонтирования выбор восстановлен, onChange не вызывается',
    async () => {
      await userEvent.click(canvas.getByTestId(TEST_ID.remount));
      await waitFor(() =>
        expect(canvas.getByTestId(TEST_ID.log)).toHaveTextContent(
          'onChange ещё не вызывался',
        ),
      );
      await expect(hasSummaryRow()).toBe(false);
    },
  );

  await step('Включение тогла вызывает onChange(true)', async () => {
    await toggleSummaryRows();
    await waitFor(() => expect(hasSummaryRow()).toBe(true));
    await expect(canvas.getByTestId(TEST_ID.log)).toHaveTextContent(
      'onChange: true',
    );
    await expect(getSavedValue()).toBe('true');
  });
};

export const SummaryRowsOnChange: Story = {
  name: 'Сохранение выбора (onChange)',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  play: playSummaryRowsOnChange,
  render: () => {
    const [rows] = useState(createRows);
    // showDefault читается только при монтировании, поэтому для применения
    // сохранённого значения перемонтируем таблицу через key
    const [tableKey, setTableKey] = useState(0);
    const [showDefault, setShowDefault] = useState(readSavedSummaryRows);
    const [log, setLog] = useState<boolean[]>([]);

    const bottomSummaryRowsData: TSummaryRowData[] = [
      {
        type: 'bottom',
        values: [
          { columnId: 'id', value: 'Итого' },
          { columnId: 'task', value: `Всего тасков ${rows.length}` },
        ],
      },
    ];

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'ID',
          renderSummaryCell: (props) =>
            (props.row as TSummaryRowData).values.find(
              (el) => el.columnId === props.column.key,
            )?.value,
        },
        {
          key: 'task',
          name: 'Title',
          renderSummaryCell: (props) =>
            (props.row as TSummaryRowData).values.find(
              (el) => el.columnId === props.column.key,
            )?.value,
        },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
      ],
      [],
    );

    const handleSummaryRowsChange = (checked: boolean) => {
      try {
        localStorage.setItem(SUMMARY_ROWS_STORAGE_KEY, String(checked));
      } catch {
        // localStorage недоступен — просто не сохраняем
      }
      setLog((prev) => [...prev, checked]);
    };

    // Имитация перезагрузки страницы: читаем сохранённое значение
    // и монтируем таблицу заново
    const handleRemount = () => {
      setShowDefault(readSavedSummaryRows());
      setLog([]);
      setTableKey((prev) => prev + 1);
    };

    const handleReset = () => {
      try {
        localStorage.removeItem(SUMMARY_ROWS_STORAGE_KEY);
      } catch {
        // localStorage недоступен
      }
      handleRemount();
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: s.x4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: s.x4 }}>
          <Button
            size="xs"
            view="secondary"
            onClick={handleRemount}
            data-testid={TEST_ID.remount}
          >
            Перемонтировать таблицу
          </Button>
          <Button
            size="xs"
            view="secondary"
            onClick={handleReset}
            data-testid={TEST_ID.reset}
          >
            Сбросить сохранённый выбор
          </Button>
          <BodyS color={textSecondary} data-testid={TEST_ID.log}>
            {log.length
              ? `onChange: ${log.join(', ')}`
              : 'onChange ещё не вызывался'}
          </BodyS>
        </div>
        <Table
          key={tableKey}
          tableConfig={{
            containerStyle: { height: '600px' },
            summaryRows: {
              showDefault,
              showInControl: true,
              onChange: handleSummaryRowsChange,
              domMetadata: {
                dataAttributes: { 'data-testid': TEST_ID.switch },
              },
            },
            sidebarConfig: {
              defaultTabs: [
                {
                  id: 'tableSettings',
                  domMetadata: {
                    dataAttributes: { 'data-testid': TEST_ID.settingsTab },
                  },
                },
              ],
            },
          }}
          columnConfig={columnConfig}
          bottomSummaryRows={bottomSummaryRowsData}
          rows={rows}
        />
      </div>
    );
  },
};
