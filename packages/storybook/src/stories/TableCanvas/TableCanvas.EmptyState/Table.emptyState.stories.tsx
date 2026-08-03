/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import type { EmptyStateProps } from '@ui-kit/components/EmptyState';
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { ReactNode, useEffect, useState } from 'react';

type Row = {
  id: string;
  name: string;
  status: string;
  team: string;
};

type EmptyStateStoryConfig = {
  enabled: boolean;
  custom?: ReactNode;
} & Partial<EmptyStateProps>;

type Story = StoryObj;

const TABLE_HEIGHT = 700;
const LOADING_DELAY_MS = 1200;
const EMPTY_ROWS: Row[] = [];

const flatColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  {
    key: 'id',
    name: 'ID',
  },
  {
    key: 'name',
    name: 'Сотрудник',
  },
  {
    key: 'status',
    name: 'Статус',
  },
  {
    key: 'team',
    name: 'Команда',
  },
];

const groupedColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  {
    key: 'employee-group',
    name: 'Сотрудник',
    children: [
      {
        key: 'id',
        name: 'ID',
      },
      {
        key: 'name',
        name: 'ФИО',
      },
    ],
  },
  {
    key: 'meta-group',
    name: 'Статус и команда',
    children: [
      {
        key: 'status',
        name: 'Статус',
      },
      {
        key: 'team',
        name: 'Команда',
      },
    ],
  },
];

const emptyColumns: readonly ColumnOrColumnGroupConfig<Row>[] = [];

function useLoadingColumns(
  initialColumns: readonly ColumnOrColumnGroupConfig<Row>[],
  finalColumns: readonly ColumnOrColumnGroupConfig<Row>[],
) {
  const [isLoading, setIsLoading] = useState(true);
  const [columnConfig, setColumnConfig] = useState(initialColumns);

  useEffect(() => {
    setIsLoading(true);
    setColumnConfig(initialColumns);

    const timeoutId = setTimeout(() => {
      setColumnConfig(finalColumns);
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [finalColumns, initialColumns]);

  return { columnConfig, isLoading };
}

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/EmptyState',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у EmptyState.',
      },
    },
  },
};

export default meta;

const preCode = `
import type { EmptyStateProps } from '@daisforge/ui';
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';
import React, { ReactNode, useEffect, useState } from 'react';

type Row = {
  id: string;
  name: string;
  status: string;
  team: string;
};

type EmptyStateStoryConfig =
  {
    enabled: boolean;
    custom?: ReactNode;
  } & Partial<EmptyStateProps>;

const TABLE_HEIGHT = 480;
const LOADING_DELAY_MS = 1200;
const EMPTY_ROWS: Row[] = [];

const flatColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Сотрудник' },
  { key: 'status', name: 'Статус' },
  { key: 'team', name: 'Команда' },
];

const groupedColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  {
    key: 'employee-group',
    name: 'Сотрудник',
    children: [
      { key: 'id', name: 'ID' },
      { key: 'name', name: 'ФИО' },
    ],
  },
  {
    key: 'meta-group',
    name: 'Статус и команда',
    children: [
      { key: 'status', name: 'Статус' },
      { key: 'team', name: 'Команда' },
    ],
  },
];

const emptyColumns: readonly ColumnOrColumnGroupConfig<Row>[] = [];

function useLoadingColumns(
  initialColumns: readonly ColumnOrColumnGroupConfig<Row>[],
  finalColumns: readonly ColumnOrColumnGroupConfig<Row>[]
) {
  const [isLoading, setIsLoading] = useState(true);
  const [columnConfig, setColumnConfig] = useState(initialColumns);

  useEffect(() => {
    setIsLoading(true);
    setColumnConfig(initialColumns);

    const timeoutId = setTimeout(() => {
      setColumnConfig(finalColumns);
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [finalColumns, initialColumns]);

  return { columnConfig, isLoading };
}
`;

export const DefaultEmptyState: Story = {
  name: 'Default Empty State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      flatColumnConfig,
      flatColumnConfig,
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5,
          },
          loadingOverlay: {
            active: isLoading,
            subtitle: 'Имитируем загрузку перед переходом к emptyState.',
          },
          emptyState: isLoading ? undefined : { enabled: true },
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  },
};

export const CustomEmptyState: Story = {
  name: 'Custom Empty State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      flatColumnConfig,
      flatColumnConfig,
    );

    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Нет заявок для выбранного периода',
      subtitle: 'Измените фильтры или создайте новую заявку.',
      variant: 'no-content',
      buttons: [
        {
          type: 'button',
          props: {
            children: 'Создать заявку',
            view: 'accent',
            onClick: () => undefined,
          },
        },
      ],
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5,
          },
          loadingOverlay: {
            active: isLoading,
            subtitle: 'Сначала показываем loading, затем кастомный emptyState.',
          },
          emptyState: isLoading ? undefined : emptyState,
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  },
};

export const GroupedColumnsEmptyState: Story = {
  name: 'Grouped Columns Empty State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      groupedColumnConfig,
      groupedColumnConfig,
    );

    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Нет результатов по выбранным фильтрам',
      subtitle:
        'Grouped headers остаются видимыми, а empty state отображается ниже шапки таблицы.',
      variant: 'not-result',
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5,
          },
          loadingOverlay: {
            active: isLoading,
            subtitle:
              'Проверяем переход loading -> emptyState при группировке колонок.',
          },
          emptyState: isLoading ? undefined : emptyState,
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  },
};

export const FullContentEmptyStateWithoutHeaders: Story = {
  name: 'Full Content Empty State Without Headers',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      emptyColumns,
      emptyColumns,
    );

    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Не удалось получить схему таблицы',
      subtitle:
        'Колонки не пришли с бэкенда, поэтому после loading emptyState занимает всю content-область без заголовков.',
      variant: 'not-result',
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5,
          },
          loadingOverlay: {
            active: isLoading,
            subtitle:
              'Сначала ждём схему колонок с бэкенда, затем показываем full-content emptyState.',
          },
          emptyState: isLoading ? undefined : emptyState,
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  },
};

export const EmptyStateWithControlBlockAndPagination: Story = {
  name: 'Empty State With Control Block And Pagination',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      flatColumnConfig,
      flatColumnConfig,
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

    const emptyState: EmptyStateStoryConfig = {
      enabled: true,
      title: 'Нет записей на текущей странице',
      subtitle:
        'Проверяем, что состояние не ломает control block, пагинацию и настройку размера строк.',
      variant: 'not-result',
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          rowSize: {
            default: 'big',
            showInControl: true,
          },
          controlBlock: {
            rightSideInner: [
              {
                text: 'Экспорт',
                view: 'linkAccent',
                onClick: () => undefined,
              },
            ],
          },
          pagination: {
            count: 48,
            perPage,
            value: currentPage,
            responsiveSlots: true,
            onChangePageValue(page, scrollToTop) {
              if (typeof page === 'number') {
                setCurrentPage(page);
                scrollToTop();
              }
            },
            async onChange(page, nextPerPage, scrollToTop) {
              if (typeof page === 'number' && typeof nextPerPage === 'number') {
                setCurrentPage(page);
                setPerPage(nextPerPage);
                scrollToTop();
              }
            },
          },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5,
          },
          loadingOverlay: {
            active: isLoading,
            subtitle:
              'Сначала показываем loading, затем проверяем emptyState в окружении control block и pagination.',
          },
          emptyState: isLoading ? undefined : emptyState,
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  },
};
