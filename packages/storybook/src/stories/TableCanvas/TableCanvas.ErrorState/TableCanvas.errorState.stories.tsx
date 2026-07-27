/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnOrColumnGroupConfig,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import type { ErrorPageProps } from '@ui-kit/layouts/ErrorPage';
import React, { ReactNode, useEffect, useState } from 'react';

type Row = {
  id: string;
  name: string;
  status: string;
  team: string;
};

type ErrorStateStoryConfig = {
  enabled: boolean;
  custom?: ReactNode;
} & Partial<ErrorPageProps>;

type Story = StoryObj;

const TABLE_HEIGHT = 700;
const LOADING_DELAY_MS = 1200;
const EMPTY_ROWS: Row[] = [];

const flatColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'name',
    name: 'Сотрудник'
  },
  {
    key: 'status',
    name: 'Статус'
  },
  {
    key: 'team',
    name: 'Команда'
  }
];

const groupedColumnConfig: readonly ColumnOrColumnGroupConfig<Row>[] = [
  {
    key: 'employee-group',
    name: 'Сотрудник',
    children: [
      {
        key: 'id',
        name: 'ID'
      },
      {
        key: 'name',
        name: 'ФИО'
      }
    ]
  },
  {
    key: 'meta-group',
    name: 'Статус и команда',
    children: [
      {
        key: 'status',
        name: 'Статус'
      },
      {
        key: 'team',
        name: 'Команда'
      }
    ]
  }
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

    return () => {
      clearTimeout(timeoutId);
    };
  }, [finalColumns, initialColumns]);

  return { columnConfig, isLoading };
}

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ErrorState',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Все demo-сценарии специально проходят через loading, чтобы в Storybook не было промежуточного broken-image кадра у ErrorPage/EmptyState.'
      }
    }
  }
};

export default meta;

const preCode = `
import type { ErrorPageProps } from '@dais-ui/ui-kit';
import {
  ColumnOrColumnGroupConfig,
  TableCanvas,
} from '@dais-ui/ui-kit/components/TableCanvas';
import React, { ReactNode, useEffect, useState } from 'react';

type Row = {
  id: string;
  name: string;
  status: string;
  team: string;
};

type ErrorStateStoryConfig =
  {
    enabled: boolean;
    custom?: ReactNode;
  } & Partial<ErrorPageProps>;

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

export const DefaultErrorState: Story = {
  name: 'Default Error State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      flatColumnConfig,
      flatColumnConfig
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5
          },
          loadingOverlay: {
            active: isLoading,
            subtitle: 'Имитируем запрос перед переходом к errorState.'
          },
          errorState: isLoading ? undefined : { enabled: true }
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  }
};

export const CustomErrorState: Story = {
  name: 'Custom Error State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      flatColumnConfig,
      flatColumnConfig
    );

    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      statusCode: 503,
      customStatuses: {
        503: {
          title: 'Не удалось получить актуальные данные',
          description: 'Проверьте подключение или повторите попытку позже.',
          button: {
            label: 'Повторить',
            view: 'accent'
          }
        }
      },
      buttonHandler: () => undefined
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5
          },
          loadingOverlay: {
            active: isLoading,
            subtitle: 'Сначала показываем loading, затем кастомный errorState.'
          },
          errorState: isLoading ? undefined : errorState
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  }
};

export const GroupedColumnsErrorState: Story = {
  name: 'Grouped Columns Error State',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      groupedColumnConfig,
      groupedColumnConfig
    );

    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      statusCode: 502,
      customStatuses: {
        502: {
          title: 'Сервис временно недоступен',
          description:
            'Grouped headers остаются на месте, а ошибка показывается только в контентной области.'
        }
      }
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5
          },
          loadingOverlay: {
            active: isLoading,
            subtitle:
              'Проверяем переход loading -> errorState при группировке колонок.'
          },
          errorState: isLoading ? undefined : errorState
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  }
};

export const FullContentErrorStateWithoutHeaders: Story = {
  name: 'Full Content Error State Without Headers',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      emptyColumns,
      emptyColumns
    );

    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      unknownStatus: {
        title: 'Не удалось получить схему таблицы',
        description:
          'Колонки не пришли с бэкенда, поэтому после loading errorState занимает всю content-область без заголовков.'
      }
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5
          },
          loadingOverlay: {
            active: isLoading,
            subtitle:
              'Сначала ждём схему колонок с бэкенда, затем показываем full-content errorState.'
          },
          errorState: isLoading ? undefined : errorState
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  }
};

export const ErrorStateWithControlBlockAndPagination: Story = {
  name: 'Error State With Control Block And Pagination',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const { columnConfig, isLoading } = useLoadingColumns(
      flatColumnConfig,
      flatColumnConfig
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

    const errorState: ErrorStateStoryConfig = {
      enabled: true,
      statusCode: 503,
      customStatuses: {
        503: {
          title: 'Не удалось получить список сотрудников',
          description:
            'Проверяем, что errorState не ломает control block, пагинацию и настройку размера строк.',
          button: {
            label: 'Повторить',
            view: 'accent'
          }
        }
      },
      buttonHandler: () => undefined
    };

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: TABLE_HEIGHT },
          rowSize: {
            default: 'big',
            showInControl: true
          },
          controlBlock: {
            rightSideInner: [
              {
                text: 'Экспорт',
                view: 'linkAccent',
                onClick: () => undefined
              }
            ]
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
            }
          },
          isLoading: {
            boolean: isLoading,
            skeletonRowsCount: 5
          },
          loadingOverlay: {
            active: isLoading,
            subtitle:
              'Сначала показываем loading, затем проверяем errorState в окружении control block и pagination.'
          },
          errorState: isLoading ? undefined : errorState
        }}
        columnConfig={columnConfig}
        rows={EMPTY_ROWS}
      />
    );
  }
};
