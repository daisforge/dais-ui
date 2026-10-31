/* eslint-disable react-hooks/rules-of-hooks */
import { createRaggedRowsTree, TreeRow } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/SubRows',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

type Story = StoryObj;

export const SubRows: Story = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Иерархичный вид',
  render: () => {
    // Разная глубина и число детей у строк — «рваная лестница» отступов
    const [rows] = useState(() => createRaggedRowsTree());

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
                default:
                  return 'product';
              }
            },

            isColumnWithArrow: true,
            hideHeaderExpandAllArrow: false,
          },
        },
        {
          key: 'blockActivity',
          name: 'Активность блока',
        },
        {
          key: ' ',
          name: 'Локация трайба',
          subRow: {
            renderSubRowCell: (props, lvl) => {
              if (lvl === 1) {
                return (
                  <Canvas.Container
                    alignItems="center"
                    padding={{ left: 8 }}
                    style={{ width: '100%' }}
                  >
                    <Canvas.Badge
                      id="kek"
                      text={props.row?.tribeZone}
                      view="accent"
                      size="m"
                    />
                  </Canvas.Container>
                );
              }
              return '';
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
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '85vh' },
          subRows: {
            getSubRows: (row) => row?.subRows,
            rowKeyGetter: (row) => row.id,
          },
          // Отступ уровня зависит от размера строки: big 16/66/116,
          // medium 6/42/78, small 4/32/60 px
          rowSize: { showInControl: true, default: 'big' },
          fullScreenEnabled: true,
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

// Колонки таблицы: служебная строка объединяется на все.
const LAZY_COL_KEYS = ['name', 'activity', 'location', 'amount'];

const LAZY_LOAD_CODE = `
const STEP = 10; // сколько детей догружаем за клик
const COL_KEYS = ['name', 'activity', 'location', 'amount'];

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

  // Служебная строка каждой группы объединяется на все колонки. Строка ищется
  // по ключу среди раскрытых; у свёрнутой группы регион просто не рисуется.
  const regions = useMemo(
    () =>
      groups
        .filter((g) => g.loaded < g.total)
        .map((g) => ({ rowKeys: [\`\${g.id}-more\`], colKeys: COL_KEYS })),
    [groups],
  );

  const columns = useMemo(
    () => [
      {
        key: 'name',
        name: 'Группа / Элемент',
        renderCell: ({ row }) => row.name,
        // фон служебной строки
        themeOverride: ({ row, theme }) => (row.kind === 'loadMore' ? { bgCell: theme.bgZebraRow } : undefined),
        subRow: {
          isColumnWithArrow: true,
          renderSubRowCell: ({ row, theme }) => {
            if (row.kind !== 'loadMore') return row.name;
            const step = Math.min(STEP, row.total - row.loaded);
            return (
              <Canvas.Container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                padding={{ right: 12 }}
                style={{ width: '100%', height: '100%' }}
              >
                {row.isLoading ? (
                  <Canvas.Text color={theme.textMedium}>Загрузка…</Canvas.Text>
                ) : (
                  <Canvas.Container alignItems="center" style={{ cursor: 'pointer', height: '100%' }} onClick={() => handleLoadMore(row.parentId)}>
                    <Canvas.Text color={theme.accentColor}>{\`Показать ещё \${step}\`}</Canvas.Text>
                  </Canvas.Container>
                )}
                <Canvas.Text color={theme.textMedium}>{\`Показано \${row.loaded} из \${row.total}\`}</Canvas.Text>
              </Canvas.Container>
            );
          },
        },
      },
      { key: 'activity', name: 'Активность', subRow: { keyOfColumnInSubRow: 'activity' } },
      { key: 'location', name: 'Локация', subRow: { keyOfColumnInSubRow: 'location' } },
      { key: 'amount', name: 'Сумма', subRow: { keyOfColumnInSubRow: 'amount' } },
    ],
    [handleLoadMore],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 640 },
        appearance: { variant: 'clean' },
        subRows: { getSubRows: (r) => r.subRows, rowKeyGetter: (r) => r.id },
        mergeCells: { mergedCellsRegions: regions, rowKeyGetter: (r) => r.id },
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
 * 2. **Строка во всю ширину.** `mergeCells.mergedCellsRegions`: для каждой служебной
 *    строки задан регион на все колонки. Регион ищется по ключу среди раскрытых
 *    строк, у свёрнутой группы он просто не рисуется.
 * 3. **Свой вид и клик.** `renderSubRowCell` для служебной строки возвращает
 *    `Canvas.Container` со ссылкой «Показать ещё N» и счётчиком
 *    «Показано X из Y». По клику потребитель догружает следующую порцию и
 *    пересобирает `subRows` группы. Когда всё загружено, служебная строка
 *    исчезает сама. Фон строки задаётся через `themeOverride`.
 *
 * Вид чистый (`appearance: { variant: 'clean' }`), колонки без `width` растягиваются
 * на всю ширину.
 *
 * Пагинация внизу работает по корневым строкам (группам), подгрузка — внутри
 * каждой группы независимо. Тот же приём для legacy Table — в разделе
 * Table / SubRows.
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

    // Служебная строка каждой группы объединяется на все колонки.
    const regions = useMemo(
      () =>
        pageRows
          .filter((g) => (g.loaded ?? 0) < (g.total ?? 0))
          .map((g) => ({ rowKeys: [`${g.id}-more`], colKeys: LAZY_COL_KEYS })),
      [pageRows],
    );

    const columns = useMemo(
      (): readonly ColumnConfig<LazyRow>[] => [
        {
          key: 'name',
          name: 'Группа / Элемент',
          // Без width колонка растягивается на свободное место, minWidth — нижняя граница.
          minWidth: 320,
          renderCell: ({ row }) => row.name ?? '',
          // Фон служебной строки.
          themeOverride: ({ row, theme }) =>
            row.kind === 'loadMore' ? { bgCell: theme.bgZebraRow } : undefined,
          subRow: {
            isColumnWithArrow: true,
            renderSubRowCell: ({ row, theme }) => {
              const lazyRow = row as LazyRow;
              if (lazyRow.kind !== 'loadMore') {
                return lazyRow.name ?? '';
              }
              const loaded = lazyRow.loaded ?? 0;
              const total = lazyRow.total ?? 0;
              const step = Math.min(LAZY_STEP, total - loaded);

              return (
                <Canvas.Container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  padding={{ right: 12 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  {lazyRow.isLoading ? (
                    <Canvas.Text color={theme.textMedium}>
                      Загрузка…
                    </Canvas.Text>
                  ) : (
                    <Canvas.Container
                      alignItems="center"
                      style={{ cursor: 'pointer', height: '100%' }}
                      onClick={() => handleLoadMore(lazyRow.parentId as string)}
                    >
                      <Canvas.Text color={theme.accentColor}>
                        {`Показать ещё ${step}`}
                      </Canvas.Text>
                    </Canvas.Container>
                  )}
                  <Canvas.Text color={theme.textMedium}>
                    {`Показано ${loaded.toLocaleString(
                      'ru-RU',
                    )} из ${total.toLocaleString('ru-RU')}`}
                  </Canvas.Text>
                </Canvas.Container>
              );
            },
          },
        },
        {
          key: 'activity',
          name: 'Активность',
          minWidth: 180,
          subRow: { keyOfColumnInSubRow: 'activity' },
        },
        {
          key: 'location',
          name: 'Локация',
          minWidth: 180,
          subRow: { keyOfColumnInSubRow: 'location' },
        },
        {
          key: 'amount',
          name: 'Сумма',
          minWidth: 160,
          subRow: { keyOfColumnInSubRow: 'amount' },
        },
      ],
      [handleLoadMore],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 640 },
          // «Чистый» вид: без линий сетки и рамок.
          appearance: { variant: 'clean' },
          subRows: {
            getSubRows: (r) => r.subRows,
            rowKeyGetter: (r) => r.id,
          },
          mergeCells: {
            mergedCellsRegions: regions,
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
        }}
        columnConfig={columns}
        rows={pageRows}
      />
    );
  },
};
