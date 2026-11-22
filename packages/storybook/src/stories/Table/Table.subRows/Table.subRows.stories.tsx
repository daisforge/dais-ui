/* eslint-disable react-hooks/rules-of-hooks */
import { createRowsTree, TreeRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui-kit/components/Badge';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { ColumnConfig, Table } from '@ui-kit/components/Table';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Локальные компоненты/Table/SubRows',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

const preCode = `
import React, { useMemo, useState } from 'react';
import { Badge, ColumnConfig, Table } from '@daisforge/ui';
`;

export const SubRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Иерархичный вид',
  render: () => {
    const [rows] = useState(() => createRowsTree());

    const columns = useMemo(
      (): readonly ColumnConfig<TreeRow>[] => [
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
            hideHeaderExpandAllArrow: false,
          },
          resizable: true,
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
        },
        {
          key: '',
          minWidth: 170,

          name: 'Локация трайба',
          subRow: {
            renderSubRowCell: (props, lvl) => {
              if (lvl === 1) {
                return (
                  <Badge view="accent" size="m">
                    {props.row?.tribeZone}
                  </Badge>
                );
              }
              return null;
            },
          },
        },
        {
          key: 'q1',
          name: 'Q1',

          subRow: {
            parentKeyAsDefault: true,
          },
        },

        {
          key: 'q2',
          name: 'Q2',
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
        {
          key: 'q3',
          name: 'Q3',
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
        {
          key: 'q4',
          name: 'Q4',
          subRow: {
            keyOfColumnInSubRow: 'q1',
          },
        },
      ],
      [],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: '700px' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id,
          },
          resizableColumn: true,
        }}
        columnConfig={columns}
        rows={rows}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Ленивая подгрузка детей группы («Показать ещё»)
// ---------------------------------------------------------------------------

// Сколько дочерних строк догружается за один клик.
const LAZY_STEP = 10;

type LazyKind = 'group' | 'child' | 'loadMore';

type LazyRow = {
  id: string;
  kind: LazyKind;
  name?: string;
  activity?: string;
  location?: string;
  amount?: string;
  /** Группа: сколько всего детей на «сервере». */
  total?: number;
  /** Группа: сколько детей уже загружено и показано. */
  loaded?: number;
  isLoading?: boolean;
  /** Группа: загруженные дети + служебная строка «Показать ещё» в конце. */
  subRows?: LazyRow[];
  /** Служебная строка: id родительской группы. */
  parentId?: string;
  [key: string]: unknown;
};

const LAZY_CITIES = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];

const makeLazyChild = (groupId: string, i: number): LazyRow => ({
  id: `${groupId}-c-${i}`,
  kind: 'child',
  name: `Элемент ${i + 1}`,
  activity: i % 2 === 0 ? 'Активен' : 'Неактивен',
  location: LAZY_CITIES[i % LAZY_CITIES.length],
  amount: `${(1000 + i * 7).toLocaleString('ru-RU')} ₽`,
});

// Дети группы для таблицы: загруженные + одна служебная строка, пока есть что грузить.
const buildLazySubRows = (group: LazyRow): LazyRow[] => {
  const loaded = group.loaded ?? 0;
  const total = group.total ?? 0;
  const children = Array.from({ length: loaded }, (_, i) =>
    makeLazyChild(group.id, i),
  );

  if (loaded < total) {
    children.push({
      id: `${group.id}-more`,
      kind: 'loadMore',
      parentId: group.id,
      // Пустые значения, чтобы остальные колонки служебной строки не писали «NOT FOUND».
      activity: '',
      location: '',
      amount: '',
      loaded,
      total,
      isLoading: group.isLoading,
    });
  }

  return children;
};

const makeLazyGroup = (i: number): LazyRow => {
  // Первые две группы маленькие: видно, что служебная строка исчезает, когда всё
  // загружено. Остальные «большие», чтобы кнопка не кончалась.
  const total = [8, 3][i] ?? 124_000;
  const group: LazyRow = {
    id: `g-${i}`,
    kind: 'group',
    name: `Группа ${i + 1}`,
    activity: `${total.toLocaleString('ru-RU')} элементов`,
    location: '—',
    amount: '—',
    total,
    loaded: Math.min(LAZY_STEP, total),
    isLoading: false,
  };
  group.subRows = buildLazySubRows(group);
  return group;
};

const createLazyGroups = (n: number): LazyRow[] =>
  Array.from({ length: n }, (_, i) => makeLazyGroup(i));

// Сколько колонок в таблице: на столько растягивается служебная строка.
const LAZY_COLS = 4;

const LoadMoreBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-secondary);
`;

const LoadMoreRow = ({
  row,
  onLoadMore,
}: {
  row: LazyRow;
  onLoadMore: (parentId: string) => void;
}) => {
  const loaded = row.loaded ?? 0;
  const total = row.total ?? 0;
  const step = Math.min(LAZY_STEP, total - loaded);

  return (
    <LoadMoreBar>
      {row.isLoading ? (
        <span>Загрузка…</span>
      ) : (
        <LinkButton
          size="s"
          view="accent"
          onClick={() => onLoadMore(row.parentId as string)}
        >
          Показать ещё {step}
        </LinkButton>
      )}
      <span>
        Показано {loaded.toLocaleString('ru-RU')} из{' '}
        {total.toLocaleString('ru-RU')}
      </span>
    </LoadMoreBar>
  );
};

const LAZY_LOAD_CODE = `
const STEP = 10; // сколько детей догружаем за клик
const COLS = 4; // число колонок — на столько растягиваем служебную строку

// Дети группы для таблицы: загруженные + служебная строка «Показать ещё», пока есть что грузить.
const buildSubRows = (group) => {
  const children = Array.from({ length: group.loaded }, (_, i) => makeChild(group.id, i));
  if (group.loaded < group.total) {
    children.push({ id: \`\${group.id}-more\`, kind: 'loadMore', parentId: group.id, ...group });
  }
  return children;
};

export const Example = () => {
  const [groups, setGroups] = useState(createGroups);

  // Догрузка следующей пачки детей: сначала состояние загрузки, потом «ответ сервера».
  const handleLoadMore = useCallback((groupId) => {
    setGroups((prev) => prev.map((g) => (g.id === groupId ? withSubRows({ ...g, isLoading: true }) : g)));
    setTimeout(() => {
      setGroups((prev) =>
        prev.map((g) =>
          g.id === groupId
            ? withSubRows({ ...g, loaded: Math.min(g.loaded + STEP, g.total), isLoading: false })
            : g,
        ),
      );
    }, 700);
  }, []);

  const columns = useMemo(
    () => [
      {
        key: 'name',
        name: 'Группа / Элемент',
        // служебная строка занимает все колонки
        colSpan: (args) => (args.type === 'ROW' && args.row.kind === 'loadMore' ? COLS : undefined),
        cellClass: (row) => (row.kind === 'loadMore' ? 'df-load-more' : undefined),
        renderCell: ({ row }) => row.name,
        subRow: {
          isColumnWithArrow: true,
          renderSubRowCell: ({ row }) =>
            row.kind === 'loadMore' ? <LoadMoreRow row={row} onLoadMore={handleLoadMore} /> : row.name,
        },
      },
      { key: 'activity', name: 'Активность', subRow: { keyOfColumnInSubRow: 'activity' } },
      { key: 'location', name: 'Локация', subRow: { keyOfColumnInSubRow: 'location' } },
      { key: 'amount', name: 'Сумма', subRow: { keyOfColumnInSubRow: 'amount' } },
    ],
    [handleLoadMore],
  );

  return (
    <Table
      tableConfig={{
        containerStyle: { height: 640 },
        subRows: { getSubRows: (r) => r.subRows, rowKeyGetter: (r) => r.id },
        // фон объединённой строки «Показать ещё»
        css: \`
          & .rdg-cell.df-load-more { background: var(--surface-transparent-secondary); }
          & .rdg-cell.df-load-more .cell-content.cell-subrow { width: 100%; }
        \`,
      }}
      columnConfig={columns}
      rows={groups}
    />
  );
};
`;

/**
 * ### Ленивая подгрузка детей группы («Показать ещё»)
 *
 * Детей у группы может быть очень много, и грузить их все сразу нельзя. Таблица
 * ничего об этом не знает: подгрузка собирается из трёх штатных возможностей.
 *
 * 1. **Дерево.** `subRows.getSubRows` возвращает то, что потребитель сам положил в
 *    строку: загруженные дети плюс одна служебная строка `loadMore` в конце.
 * 2. **Строка во всю ширину.** `colSpan` первой колонки для служебной строки
 *    возвращает число колонок, и ячейка растягивается на всю строку.
 * 3. **Свой вид и клик.** `renderSubRowCell` для служебной строки рисует кнопку
 *    «Показать ещё N» и счётчик «Показано X из Y». По клику потребитель догружает
 *    следующую порцию и пересобирает `subRows` группы. Когда всё загружено,
 *    служебная строка исчезает сама.
 *
 * Пагинация внизу работает по корневым строкам (группам), подгрузка — внутри
 * каждой группы независимо. Тот же приём для TableCanvas — в разделе
 * TableCanvas / SubRows.
 */
export const LazyLoadChildren: Story = {
  ...storySourceDoc({
    preCode,
    code: LAZY_LOAD_CODE,
    type: 'code',
    previewSource: 'shown',
  }),
  name: 'Ленивая подгрузка детей группы',
  render: () => {
    const [allGroups, setAllGroups] = useState<LazyRow[]>(() =>
      createLazyGroups(45),
    );
    const [perPage, setPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    // Пагинация по корневым строкам (группам).
    const pageRows = useMemo(
      () => allGroups.slice((currentPage - 1) * perPage, currentPage * perPage),
      [allGroups, currentPage, perPage],
    );

    // Догрузка следующей пачки детей группы: сначала состояние загрузки на
    // служебной строке, потом имитация ответа сервера.
    const handleLoadMore = useCallback((groupId: string) => {
      setAllGroups((prev) =>
        prev.map((g) => {
          if (g.id !== groupId) return g;
          const loading = { ...g, isLoading: true };
          loading.subRows = buildLazySubRows(loading);
          return loading;
        }),
      );

      setTimeout(() => {
        setAllGroups((prev) =>
          prev.map((g) => {
            if (g.id !== groupId) return g;
            const loaded = Math.min((g.loaded ?? 0) + LAZY_STEP, g.total ?? 0);
            const next = { ...g, loaded, isLoading: false };
            next.subRows = buildLazySubRows(next);
            return next;
          }),
        );
      }, 700);
    }, []);

    const columns = useMemo(
      (): readonly ColumnConfig<LazyRow>[] => [
        {
          key: 'name',
          name: 'Группа / Элемент',
          minWidth: 280,
          resizable: true,
          // Служебная строка занимает все колонки.
          colSpan: (args) =>
            args.type === 'ROW' && (args.row as LazyRow).kind === 'loadMore'
              ? LAZY_COLS
              : undefined,
          // Класс для фона служебной строки, стили в tableConfig.css.
          cellClass: (row) =>
            (row as LazyRow).kind === 'loadMore' ? 'df-load-more' : undefined,
          renderCell: (props) => (props.row as LazyRow).name,
          subRow: {
            isColumnWithArrow: true,
            renderSubRowCell: (props) => {
              const row = props.row as LazyRow;
              if (row.kind === 'loadMore') {
                return <LoadMoreRow row={row} onLoadMore={handleLoadMore} />;
              }
              return row.name;
            },
          },
        },
        {
          key: 'activity',
          name: 'Активность',
          minWidth: 160,
          subRow: { keyOfColumnInSubRow: 'activity' },
        },
        {
          key: 'location',
          name: 'Локация',
          minWidth: 160,
          subRow: { keyOfColumnInSubRow: 'location' },
        },
        {
          key: 'amount',
          name: 'Сумма',
          minWidth: 140,
          subRow: { keyOfColumnInSubRow: 'amount' },
        },
      ],
      [handleLoadMore],
    );

    return (
      <Table
        tableConfig={{
          containerStyle: { height: 640 },
          subRows: {
            getSubRows: (r) => r.subRows,
            rowKeyGetter: (r) => r.id,
          },
          resizableColumn: true,
          controlBlock: { show: true },

          pagination: {
            count: allGroups.length,
            perPage,
            value: currentPage,
            responsiveSlots: true,
            onChangePageValue(page, scrollToTop) {
              if (typeof page === 'number') {
                setCurrentPage(page);
                scrollToTop();
              }
            },
            onChange(page, pp, scrollToTop) {
              if (typeof page === 'number' && typeof pp === 'number') {
                setCurrentPage(page);
                setPerPage(pp);
                scrollToTop();
              }
            },
          },

          // Фон объединённой строки «Показать ещё» на всю ширину.
          css: `
            & .rdg-cell.df-load-more {
              background: var(--surface-transparent-secondary);
            }
            & .rdg-cell.df-load-more .cell-content.cell-subrow {
              width: 100%;
            }
          `,
        }}
        columnConfig={columns}
        rows={pageRows}
      />
    );
  },
};
