/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@ui-kit/components/Switch';
import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/IsLoading',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
    screenshot: {
      skip: true,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const IsLoading: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'IsLoading',
  render: () => {
    const [rows] = useState(createRows);
    const [isVisibleLoadingOverlay, setIsVisibleLoadingOverlay] =
      useState(false);
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
      ],
      [],
    );

    return (
      <>
        <Switch
          style={{ width: 'fit-content' }}
          label={
            isVisibleLoadingOverlay ? 'Скрыть overlay' : 'Показать overlay'
          }
          checked={isVisibleLoadingOverlay}
          onChange={() => setIsVisibleLoadingOverlay((prev) => !prev)}
        />
        <TableCanvas
          tableConfig={{
            containerStyle: { height: 500 },
            isLoading: { boolean: true, skeletonRowsCount: 5 },
            loadingOverlay: {
              active: isVisibleLoadingOverlay,
              showSubtitleDelay: 3000,
              subtitle:
                'Данные обрабатываются, обычно это занимает не более 10 секунд',
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};

const coverPreCode = `
import { Switch } from '@daisforge/ui/components/Switch';
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';
import React, { useMemo, useRef, useState } from 'react';

`;

export const CoverOverlay: StoryObj = {
  ...storySourceDoc({
    preCode: coverPreCode,
    previewSource: 'shown',
  }),
  name: 'Оверлей поверх таблицы (mode: cover)',
  render: () => {
    const [rows, setRows] = useState(createRows);
    const selectingRowStateAndSetter = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    const [selectedRows, setSelectedRows] = selectingRowStateAndSetter;
    const [isUpdating, setIsUpdating] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'developer', name: 'Developer' },
      ],
      [],
    );

    // Имитация запроса на удаление: пока он идёт, таблица закрыта оверлеем,
    // но не размонтируется — прокрутка и выделение остаются на месте.
    const deleteSelected = () => {
      setIsUpdating(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setRows((prev) => prev.filter((row) => !selectedRows.has(row.id)));
        setSelectedRows(new Set());
        setIsUpdating(false);
      }, 3000);
    };

    return (
      <>
        <Switch
          style={{ width: 'fit-content' }}
          label="Показать оверлей"
          checked={isUpdating}
          onChange={() => setIsUpdating((prev) => !prev)}
        />
        <TableCanvas
          tableConfig={{
            containerStyle: { height: 500 },
            fullScreenEnabled: true,
            selecting: {
              state: selectingRowStateAndSetter,
              rowKeyGetter: (row) => row.id,
            },
            controlBlock: {
              massActionPanel: {
                buttons: [
                  {
                    type: 'button',
                    text: 'Удалить выбранные',
                    view: 'secondary',
                    onClick: deleteSelected,
                  },
                ],
              },
            },
            loadingOverlay: {
              mode: 'cover',
              active: isUpdating,
              showSubtitleDelay: 1000,
              subtitle: 'Обычно это занимает не более 10 секунд',
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </>
    );
  },
};
