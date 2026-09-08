/* eslint-disable react-hooks/rules-of-hooks, @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
import { createSeededRandom } from '@df-storybook/data/tableData';
import { StoryHint } from '@df-storybook/utils/StoryHint';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Большой пример потребителя: иерархические данные с объединёнными ячейками и весь
 * набор фич сразу — пагинация, сортировка, фильтры, поиск, resize, закрепление,
 * чекбоксы, размер строки, настройка колонок, fullscreen, редактирование.
 *
 * Потребитель владеет деревом (дивизион / управление / команда / сотрудник),
 * разворачивает его в строки-листья и кладёт путь предков в поля-ключи
 * (divPath / unitPath / teamPath). Колонки-предки объединяются по этим ключам
 * через mergeByCellValues, поэтому одинаковые имена в разных ветках не сливаются.
 *
 * Пагинация, сортировка, фильтры и поиск помечены manual и считаются здесь же
 * (эмуляция бэка). Таблица рисует полученную страницу и объединяет ячейки.
 *
 * Закрепление колонок и группы шапки включены вместе: по умолчанию группы
 * отключают закрепление, явный columnsControl.pinning: true включает его
 * обратно. Группы стоят только над показателями, чтобы шапка групп не
 * пересекала границу закреплённой области.
 *
 * Сортируются листья внутри команды, порядок команд не меняется — поэтому блоки
 * не рассыпаются. Сортировка самих колонок иерархии (блоками) пока не реализована.
 */
const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CellsMerging',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

// Разделитель пути: управляющий символ, чтобы имена веток не столкнулись случайно.
const SEP = String.fromCharCode(1);

// ---------------------------------------------------------------------------
// Строка-лист: сотрудник, показатели за квартал и путь предков,
// продублированный прямо в строке.
type LeafRow = {
  id: string;
  division: string;
  unit: string;
  team: string;
  employee: string;
  plan: number;
  fact: number;
  conversion: number;
  avgCheck: number;
  // Ключи пути (учитывают предков) — по ним объединяются колонки-предки.
  divPath: string;
  unitPath: string;
  teamPath: string;
};

// Оргструктура «от бэка»: дивизион -> управление -> команда (-> сотрудники).
const ORG: ReadonlyArray<{
  name: string;
  units: ReadonlyArray<{ name: string; teams: readonly string[] }>;
}> = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн', 'Команда Офис'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
      { name: 'Управление факторинга', teams: ['Команда Экспорт'] },
    ],
  },
  {
    name: 'Цифровые платформы',
    units: [
      {
        name: 'Управление разработки',
        teams: ['Команда Мобайл', 'Команда Веб'],
      },
      { name: 'Управление данных', teams: ['Команда ML'] },
    ],
  },
];

const SURNAMES = [
  'Иванов',
  'Петрова',
  'Сидоров',
  'Кузнецова',
  'Смирнов',
  'Попова',
  'Волков',
  'Соколова',
  'Морозов',
  'Лебедева',
  'Козлов',
  'Новикова',
];

// Узел дерева «от бэка»: узлы-предки несут своё поле (division/unit/team),
// листья — строки с показателями. Из одного дерева получаем и плоские листья
// (для плоской стори и группировки),
// и само дерево (для subRows) — данные во всех трёх стори идентичны.
type ShowcaseNode = {
  id: string;
  division?: string;
  unit?: string;
  team?: string;
  employee?: string;
  plan?: number;
  fact?: number;
  conversion?: number;
  avgCheck?: number;
  subRows?: ShowcaseNode[];
};

// Числа строятся от зафиксированного зерна случайности — данные одинаковые
// при каждом запуске.
const buildTree = (): ShowcaseNode[] => {
  const rnd = createSeededRandom(7);
  const money = (min: number, max: number) =>
    Math.round((min + rnd() * (max - min)) / 1000) * 1000;

  let g = 0;
  return ORG.map((div, di) => ({
    id: `dv${di}`,
    division: div.name,
    subRows: div.units.map((unit, ui) => ({
      id: `dv${di}u${ui}`,
      unit: unit.name,
      subRows: unit.teams.map((teamName, ti) => ({
        id: `dv${di}u${ui}t${ti}`,
        team: teamName,
        // 12..27 сотрудников в команде — крупные блоки под merge/пагинацию.
        subRows: Array.from({ length: 12 + Math.floor(rnd() * 16) }, () => {
          const plan = money(600000, 2400000);
          const leaf: ShowcaseNode = {
            id: `e${g}`,
            employee: `${SURNAMES[g % SURNAMES.length]} ${g + 1}`,
            plan,
            fact: Math.round((plan * (0.55 + rnd() * 0.7)) / 1000) * 1000,
            conversion: Math.round((12 + rnd() * 48) * 10) / 10,
            avgCheck: money(3000, 60000),
          };
          g += 1;
          return leaf;
        }),
      })),
    })),
  }));
};

// Разворачиваем дерево в плоские листья: в каждую строку записываем имена
// предков и ключи пути.
const treeToLeaves = (
  nodes: readonly ShowcaseNode[],
  anc: { division?: string; unit?: string; team?: string } = {},
): LeafRow[] => {
  const out: LeafRow[] = [];
  nodes.forEach((n) => {
    const nextAnc = {
      division: n.division ?? anc.division,
      unit: n.unit ?? anc.unit,
      team: n.team ?? anc.team,
    };
    if (n.subRows?.length) {
      out.push(...treeToLeaves(n.subRows, nextAnc));
    } else {
      const division = nextAnc.division ?? '';
      const unit = nextAnc.unit ?? '';
      const team = nextAnc.team ?? '';
      out.push({
        id: n.id,
        division,
        unit,
        team,
        employee: n.employee ?? '',
        plan: n.plan ?? 0,
        fact: n.fact ?? 0,
        conversion: n.conversion ?? 0,
        avgCheck: n.avgCheck ?? 0,
        divPath: division,
        unitPath: [division, unit].join(SEP),
        teamPath: [division, unit, team].join(SEP),
      });
    }
  });
  return out;
};

// Общее дерево и плоские листья — источник данных для всех трёх стори.
const TREE: readonly ShowcaseNode[] = buildTree();
const DATA: readonly LeafRow[] = treeToLeaves(TREE);

// ---------------------------------------------------------------------------
// Эмуляция бэка: запрос -> фильтры -> сортировка (с сохранением объединений) -> срез страницы.
type Filters = {
  employee: string;
  plan: string;
  fact: string;
  conversion: string;
  avgCheck: string;
};

const CLEARED_FILTERS: Filters = {
  employee: '',
  plan: '',
  fact: '',
  conversion: 'Все',
  avgCheck: '',
};

const parseMin = (s: string): number | null => {
  const n = Number(s);
  return s.trim() !== '' && Number.isFinite(n) ? n : null;
};

const selectPage = (
  all: readonly LeafRow[],
  params: {
    query: string;
    filters: Filters;
    sort: readonly SortColumn[];
    page: number;
    perPage: number;
  },
): { pageRows: LeafRow[]; total: number } => {
  const { query, filters, sort, page, perPage } = params;
  let data: LeafRow[] = [...all];

  // Глобальный поиск по тексту иерархии и по числовым мерам.
  const q = query.trim().toLowerCase();
  if (q) {
    data = data.filter(
      (r) =>
        [r.employee, r.team, r.unit, r.division].some((v) =>
          v.toLowerCase().includes(q),
        ) || [r.plan, r.fact, r.avgCheck].some((v) => String(v).includes(q)),
    );
  }

  // Колоночные фильтры.
  const emp = filters.employee.trim().toLowerCase();
  if (emp) data = data.filter((r) => r.employee.toLowerCase().includes(emp));

  const minPlan = parseMin(filters.plan);
  if (minPlan !== null) data = data.filter((r) => r.plan >= minPlan);

  const minFact = parseMin(filters.fact);
  if (minFact !== null) data = data.filter((r) => r.fact >= minFact);

  const minCheck = parseMin(filters.avgCheck);
  if (minCheck !== null) data = data.filter((r) => r.avgCheck >= minCheck);

  if (filters.conversion === 'low')
    data = data.filter((r) => r.conversion < 20);
  else if (filters.conversion === 'mid')
    data = data.filter((r) => r.conversion >= 20 && r.conversion <= 40);
  else if (filters.conversion === 'high')
    data = data.filter((r) => r.conversion > 40);

  // Сортировка ВНУТРИ команды: строки одной команды остаются соседними, порядок
  // блоков команд сохраняется (Map хранит порядок вставки) — объединения целые.
  const primary = sort[0];
  if (primary) {
    const { columnKey, direction } = primary;
    const dir = direction === 'ASC' ? 1 : -1;

    const groups = new Map<string, LeafRow[]>();
    data.forEach((r) => {
      const arr = groups.get(r.teamPath);
      if (arr) arr.push(r);
      else groups.set(r.teamPath, [r]);
    });

    groups.forEach((arr) => {
      arr.sort((a, b) => {
        const av = a[columnKey as keyof LeafRow];
        const bv = b[columnKey as keyof LeafRow];
        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * dir;
        }
        return String(av).localeCompare(String(bv)) * dir;
      });
    });

    data = Array.from(groups.values()).flat();
  }

  const total = data.length;
  const start = (page - 1) * perPage;
  return { pageRows: data.slice(start, start + perPage), total };
};

// ---------------------------------------------------------------------------
// Эмуляция бэка для ДЕРЕВА (subRows): те же поиск/фильтры/сортировка, но считаем
// прямо по дереву узлов-предков. Лист остаётся, если проходит поиск и фильтры;
// пустые команды/управления/дивизионы вырезаем. Сортировка показателей идёт внутри
// команды (блоки целые), сортировка колонок иерархии переставляет ветки уровня.
const leafText = (
  leaf: ShowcaseNode,
  anc: { division: string; unit: string; team: string },
): string =>
  [
    leaf.employee ?? '',
    anc.division,
    anc.unit,
    anc.team,
    String(leaf.plan ?? ''),
    String(leaf.fact ?? ''),
    String(leaf.conversion ?? ''),
    String(leaf.avgCheck ?? ''),
  ]
    .join(' ')
    .toLowerCase();

// Лист проходит колоночные фильтры (те же правила, что и в плоской стори).
const leafPassesFilters = (leaf: ShowcaseNode, filters: Filters): boolean => {
  const emp = filters.employee.trim().toLowerCase();
  if (emp && !(leaf.employee ?? '').toLowerCase().includes(emp)) return false;

  const minPlan = parseMin(filters.plan);
  if (minPlan !== null && (leaf.plan ?? 0) < minPlan) return false;

  const minFact = parseMin(filters.fact);
  if (minFact !== null && (leaf.fact ?? 0) < minFact) return false;

  const minCheck = parseMin(filters.avgCheck);
  if (minCheck !== null && (leaf.avgCheck ?? 0) < minCheck) return false;

  const conv = leaf.conversion ?? 0;
  if (filters.conversion === 'low' && !(conv < 20)) return false;
  if (filters.conversion === 'mid' && !(conv >= 20 && conv <= 40)) return false;
  if (filters.conversion === 'high' && !(conv > 40)) return false;

  return true;
};

// Имя ветки узла (для сортировки колонок иерархии и текста поиска).
const nodeName = (n: ShowcaseNode): string =>
  n.division ?? n.unit ?? n.team ?? '';

const selectTreePage = (
  tree: readonly ShowcaseNode[],
  params: {
    query: string;
    filters: Filters;
    sort: readonly SortColumn[];
    page: number;
    perPage: number;
  },
): { pageTree: ShowcaseNode[]; totalDivisions: number } => {
  const { query, filters, sort, page, perPage } = params;
  const q = query.trim().toLowerCase();
  const primary = sort[0];
  const sortKey = primary?.columnKey;
  const dir = primary?.direction === 'ASC' ? 1 : -1;
  const measureKeys = ['employee', 'plan', 'fact', 'conversion', 'avgCheck'];
  const hierarchyKeys = ['division', 'unit', 'team'];
  const sortByMeasure = !!sortKey && measureKeys.includes(sortKey);
  const sortByHierarchy = !!sortKey && hierarchyKeys.includes(sortKey);

  // Обходим дерево сверху вниз: на уровне команды фильтруем листья и, если
  // сортировка по показателю, сортируем их; на уровнях выше отбрасываем пустые
  // ветки и, если сортировка по колонке иерархии, переставляем сами ветки.
  const walk = (
    nodes: readonly ShowcaseNode[],
    anc: { division: string; unit: string; team: string },
  ): ShowcaseNode[] => {
    const out: ShowcaseNode[] = [];
    nodes.forEach((n) => {
      const nextAnc = {
        division: n.division ?? anc.division,
        unit: n.unit ?? anc.unit,
        team: n.team ?? anc.team,
      };
      const children = n.subRows ?? [];
      const childrenAreLeaves = children.length > 0 && !children[0]?.subRows;

      if (childrenAreLeaves) {
        // Уровень команды: отбираем листья по поиску и фильтрам.
        let leaves = children.filter((leaf) => {
          if (q && !leafText(leaf, nextAnc).includes(q)) return false;
          return leafPassesFilters(leaf, filters);
        });
        if (sortByMeasure) {
          leaves = [...leaves].sort((a, b) => {
            const av = a[sortKey as keyof ShowcaseNode];
            const bv = b[sortKey as keyof ShowcaseNode];
            if (typeof av === 'number' && typeof bv === 'number') {
              return (av - bv) * dir;
            }
            return String(av ?? '').localeCompare(String(bv ?? '')) * dir;
          });
        }
        if (!leaves.length) return;
        out.push({ ...n, subRows: leaves });
      } else if (children.length) {
        // Промежуточный уровень: сначала обрабатываем детей, пустые узлы гасим.
        const kept = walk(children, nextAnc);
        if (!kept.length) return;
        out.push({ ...n, subRows: kept });
      }
    });

    // Сортировка колонок иерархии: переставляем ветки этого уровня по имени.
    // Переставляем только тот уровень, чьё поле выбрано для сортировки.
    if (sortByHierarchy) {
      const levelMatches =
        (sortKey === 'division' && out[0]?.division !== undefined) ||
        (sortKey === 'unit' && out[0]?.unit !== undefined) ||
        (sortKey === 'team' && out[0]?.team !== undefined);
      if (levelMatches) {
        out.sort((a, b) => nodeName(a).localeCompare(nodeName(b)) * dir);
      }
    }

    return out;
  };

  const filtered = walk(tree, { division: '', unit: '', team: '' });
  const totalDivisions = filtered.length;
  const start = (page - 1) * perPage;
  return { pageTree: filtered.slice(start, start + perPage), totalDivisions };
};

// ---------------------------------------------------------------------------
// Общий стейт и вся конфигурация (владение данными + объединения + фичи).
const useShowcase = () => {
  // Полный «серверный» набор держим в стейте, чтобы поддержать редактирование.
  const [allRows, setAllRows] = useState<readonly LeafRow[]>(DATA);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Снимок для отмены редактирования.
  const savedRowsRef = useRef<readonly LeafRow[] | null>(null);

  // Любое изменение выборки возвращает на первую страницу.
  useEffect(() => {
    setPage(1);
  }, [query, filters, sort]);

  const { pageRows, total } = useMemo(
    () => selectPage(allRows, { query, filters, sort, page, perPage }),
    [allRows, query, filters, sort, page, perPage],
  );

  // Правки прилетают на ТЕКУЩУЮ СТРАНИЦУ; вливаем их обратно в полный набор по id.
  const handleRowsChange = (updatedPage: readonly LeafRow[]) => {
    const byId = new Map(updatedPage.map((r) => [r.id, r]));
    setAllRows((prev) => prev.map((r) => byId.get(r.id) ?? r));
  };

  const shared = {
    containerStyle: { height: '78vh' },
    resizableColumn: true,
    fullScreenEnabled: true as const,
    rowMarkers: { startIndex: 1 },
    rowSize: { default: 'medium' as const, showInControl: true },
    // Чекбоксы (выбор строк) как отдельная фича с колонкой-чекбоксом.
    selecting: {
      state: [selectedIds, setSelectedIds] as [
        ReadonlySet<string>,
        React.Dispatch<React.SetStateAction<ReadonlySet<string>>>,
      ],
      rowKeyGetter: (r: LeafRow) => r.id,
      showDefault: true,
      showInControl: true,
    },
    editing: {
      rowKeyGetter: (r: LeafRow) => r.id,
      onRowsChange: handleRowsChange,
      onEnableEditing(enable: () => void) {
        savedRowsRef.current = allRows;
        enable();
      },
      onCancel(disable: () => void) {
        if (savedRowsRef.current) setAllRows(savedRowsRef.current);
        disable();
      },
      onSave(disable: () => void) {
        savedRowsRef.current = null;
        disable();
      },
    },
    mergeCells: {
      mergeByCellValues: [
        { colKey: 'division', value: (r: LeafRow) => r.divPath },
        { colKey: 'unit', value: (r: LeafRow) => r.unitPath },
        { colKey: 'team', value: (r: LeafRow) => r.teamPath },
      ],
    },
    searching: {
      enabled: true,
      manualSearching: true,
      showSearchBlock: true,
      placeholder: 'Поиск по сотруднику, команде, сумме',
      searchQueryState: [query, setQuery] as [
        string,
        React.Dispatch<React.SetStateAction<string>>,
      ],
    },
    sorting: {
      state: [sort, setSort] as [
        readonly SortColumn[],
        React.Dispatch<React.SetStateAction<readonly SortColumn[]>>,
      ],
      manualSorting: true,
    },
    filtering: {
      state: [filters, setFilters] as [
        Filters,
        React.Dispatch<React.SetStateAction<Filters>>,
      ],
      manualFiltering: true,
      filtersInfo: {
        employee: { label: 'Сотрудник', clearedValue: '' },
        plan: { label: 'План (минимум)', clearedValue: '' },
        fact: { label: 'Факт (минимум)', clearedValue: '' },
        conversion: { label: 'Конверсия', clearedValue: 'Все' },
        avgCheck: { label: 'Средний чек (минимум)', clearedValue: '' },
      },
    },
    pagination: {
      count: total,
      perPage,
      value: page,
      responsiveSlots: true,
      onChangePageValue(nextPage: number | undefined, scrollToTop: () => void) {
        if (typeof nextPage === 'number') {
          setPage(nextPage);
          scrollToTop();
        }
      },
      onChange(
        nextPage: number | undefined,
        nextPerPage: number | undefined,
        scrollToTop: () => void,
      ) {
        // Смена «показывать по» возвращает на первую страницу, чтобы не
        // оказаться за пределами уменьшившегося числа страниц.
        if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
          setPerPage(nextPerPage);
          setPage(1);
        } else if (typeof nextPage === 'number') {
          setPage(nextPage);
        }
        scrollToTop();
      },
    },
  };

  return {
    pageRows,
    shared,
    flow: {
      total,
      perPage,
      page,
      query,
      sort,
      filters,
      selected: selectedIds.size,
    },
  };
};

// ---------------------------------------------------------------------------
// Листовые колонки (без групповой шапки — иначе отключится закрепление). Пять «рабочих»
// колонок (Сотрудник, План, Факт, Конверсия, Средний чек) — с сортировкой и
// фильтрацией; показатели и объединённая «Команда» — редактируемые. Ширины с запасом
// под иконки сортировки/фильтра.
const colDivision: ColumnConfig<LeafRow> = {
  key: 'division',
  name: 'Дивизион',
  width: 190,
  // columnGroupLabel делает колонку доступной в селекторе группировки
  // (кнопка groupButton). В стори без rowsGrouping игнорируется.
  rowsGrouping: { columnGroupLabel: 'Дивизион' },
};
const colUnit: ColumnConfig<LeafRow> = {
  key: 'unit',
  name: 'Управление',
  width: 210,
  rowsGrouping: { columnGroupLabel: 'Управление' },
};
const colTeam: ColumnConfig<LeafRow> = {
  key: 'team',
  name: 'Команда',
  width: 180,
  rowsGrouping: { columnGroupLabel: 'Команда' },
  // Редактирование объединённой ячейки: правка записывается во все строки
  // блока, и весь блок показывает новое имя.
  editingCell: { component: 'inputString' },
};
const colEmployee: ColumnConfig<LeafRow> = {
  key: 'employee',
  name: 'Сотрудник',
  width: 220,
  sortingType: 'stringSort',
  searching: { valueInRow: (r) => r.employee },
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'employee',
    valueInRow: (r) => r.employee,
  },
};
const colPlan: ColumnConfig<LeafRow> = {
  key: 'plan',
  name: 'План',
  width: 150,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  searching: { valueInRow: (r) => r.plan },
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'plan',
    valueInRow: (r) => r.plan,
  },
};
const colFact: ColumnConfig<LeafRow> = {
  key: 'fact',
  name: 'Факт',
  width: 150,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  searching: { valueInRow: (r) => r.fact },
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'fact',
    valueInRow: (r) => r.fact,
  },
};
const colConversion: ColumnConfig<LeafRow> = {
  key: 'conversion',
  name: 'Конверсия, %',
  width: 175,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  filtering: {
    component: 'select',
    keyInFilterState: 'conversion',
    valueInRow: (r) => r.conversion,
    selectOptions: {
      type: 'constant',
      options: [
        { value: 'Все', text: 'Все' },
        { value: 'low', text: 'до 20%' },
        { value: 'mid', text: '20-40%' },
        { value: 'high', text: 'выше 40%' },
      ],
    },
    filter: {
      typeOfValue: 'single',
      // Варианты селекта задают диапазоны, поэтому сравниваем не текст,
      // а попадание числа в диапазон.
      filteringType: (fv, rv) => {
        const v = Number(rv);
        if (fv === 'low') return v < 20;
        if (fv === 'mid') return v >= 20 && v <= 40;
        if (fv === 'high') return v > 40;
        return true;
      },
    },
  },
};
const colAvgCheck: ColumnConfig<LeafRow> = {
  key: 'avgCheck',
  name: 'Средний чек',
  width: 185,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'avgCheck',
    valueInRow: (r) => r.avgCheck,
  },
};

// ===========================================================================
// Единый большой пример: merged + закрепление + чекбоксы + rowSize + редактирование +
// resize + fullscreen + настройка колонок + поиск/сортировка/фильтр/пагинация.
const SHOWCASE_CODE = `
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Строка-лист: сотрудник, показатели и путь предков, продублированный в строке.
// Ключи пути (divPath/unitPath/teamPath) учитывают предков — по ним
// объединяются колонки-предки, одинаковые имена в разных ветках не сливаются.
type Row = {
  id: string;
  division: string;
  unit: string;
  team: string;
  employee: string;
  plan: number;
  fact: number;
  divPath: string;
  unitPath: string;
  teamPath: string;
};

// Оргструктура «от бэка»: дивизион -> управление -> команда -> сотрудники.
const ORG = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
    ],
  },
];
const SURNAMES = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов'];

const buildRows = (): Row[] => {
  const out: Row[] = [];
  let g = 0;
  for (const div of ORG) {
    for (const unit of div.units) {
      for (const team of unit.teams) {
        // По 12 сотрудников в команде — крупные блоки под merge и пагинацию.
        for (let i = 0; i < 12; i += 1) {
          const plan = 600000 + ((g * 37) % 18) * 100000;
          out.push({
            id: \`e\${g}\`,
            division: div.name,
            unit: unit.name,
            team,
            employee: \`\${SURNAMES[g % SURNAMES.length]} \${g + 1}\`,
            plan,
            fact: Math.round(plan * 0.8),
            divPath: div.name,
            unitPath: [div.name, unit.name].join('/'),
            teamPath: [div.name, unit.name, team].join('/'),
          });
          g += 1;
        }
      }
    }
  }
  return out;
};

const DATA: readonly Row[] = buildRows();

type Filters = { employee: string; plan: string };
const CLEARED_FILTERS: Filters = { employee: '', plan: '' };

// Эмуляция бэка: поиск -> фильтры -> сортировка внутри команды -> срез страницы.
const selectPage = (
  all: readonly Row[],
  params: {
    query: string;
    filters: Filters;
    sort: readonly SortColumn[];
    page: number;
    perPage: number;
  },
): { pageRows: Row[]; total: number } => {
  const { query, filters, sort, page, perPage } = params;
  let data = [...all];

  // Глобальный поиск: строка ищется по тексту всей иерархии.
  const q = query.trim().toLowerCase();
  if (q) {
    data = data.filter((r) =>
      [r.employee, r.team, r.unit, r.division].some((v) =>
        v.toLowerCase().includes(q),
      ),
    );
  }

  // Колоночные фильтры: подстрока по сотруднику и минимум по плану.
  const emp = filters.employee.trim().toLowerCase();
  if (emp) data = data.filter((r) => r.employee.toLowerCase().includes(emp));
  const minPlan = Number(filters.plan);
  if (filters.plan.trim() !== '' && Number.isFinite(minPlan)) {
    data = data.filter((r) => r.plan >= minPlan);
  }

  // Сортировка ВНУТРИ команды: строки одной команды остаются соседними,
  // порядок блоков команд сохраняется — объединения не рассыпаются.
  const primary = sort[0];
  if (primary) {
    const dir = primary.direction === 'ASC' ? 1 : -1;
    const groups = new Map<string, Row[]>();
    data.forEach((r) => {
      const arr = groups.get(r.teamPath);
      if (arr) arr.push(r);
      else groups.set(r.teamPath, [r]);
    });
    groups.forEach((arr) =>
      arr.sort((a, b) => {
        const av = a[primary.columnKey as keyof Row];
        const bv = b[primary.columnKey as keyof Row];
        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * dir;
        }
        return String(av).localeCompare(String(bv)) * dir;
      }),
    );
    data = Array.from(groups.values()).flat();
  }

  const total = data.length;
  const start = (page - 1) * perPage;
  return { pageRows: data.slice(start, start + perPage), total };
};

// Колонки иерархии без групповой шапки (мы их закрепляем), показатели — под ней.
const colDivision: ColumnConfig<Row> = {
  key: 'division',
  name: 'Дивизион',
  width: 190,
};
const colUnit: ColumnConfig<Row> = {
  key: 'unit',
  name: 'Управление',
  width: 210,
};
const colTeam: ColumnConfig<Row> = {
  key: 'team',
  name: 'Команда',
  width: 180,
  // Правка объединённой ячейки записывается во все строки блока,
  // и весь блок показывает новое имя.
  editingCell: { component: 'inputString' },
};
const colEmployee: ColumnConfig<Row> = {
  key: 'employee',
  name: 'Сотрудник',
  width: 220,
  sortingType: 'stringSort',
  searching: { valueInRow: (r) => r.employee },
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'employee',
    valueInRow: (r) => r.employee,
  },
};
const colPlan: ColumnConfig<Row> = {
  key: 'plan',
  name: 'План',
  width: 150,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: 'plan',
    valueInRow: (r) => r.plan,
  },
};
const colFact: ColumnConfig<Row> = {
  key: 'fact',
  name: 'Факт',
  width: 150,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
};

const columnConfig: ColumnOrColumnGroupConfig<Row>[] = [
  colDivision,
  colUnit,
  colTeam,
  colEmployee,
  {
    key: 'results',
    name: 'Результаты за квартал',
    children: [colPlan, colFact],
  },
];

export const Example = () => {
  // Полный «серверный» набор в стейте — чтобы поддержать редактирование.
  const [allRows, setAllRows] = useState<readonly Row[]>(DATA);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Снимок для отмены редактирования.
  const savedRowsRef = useRef<readonly Row[] | null>(null);

  // Любое изменение выборки возвращает на первую страницу.
  useEffect(() => {
    setPage(1);
  }, [query, filters, sort]);

  const { pageRows, total } = useMemo(
    () => selectPage(allRows, { query, filters, sort, page, perPage }),
    [allRows, query, filters, sort, page, perPage],
  );

  // Правки прилетают на ТЕКУЩУЮ страницу; вливаем их обратно в полный набор.
  const handleRowsChange = (updatedPage: readonly Row[]) => {
    const byId = new Map(updatedPage.map((r) => [r.id, r]));
    setAllRows((prev) => prev.map((r) => byId.get(r.id) ?? r));
  };

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '78vh' },
        resizableColumn: true,
        fullScreenEnabled: true,
        rowMarkers: { startIndex: 1 },
        rowSize: { default: 'medium', showInControl: true },
        columnsGrouping: { squashEmptyCells: true },
        columnsControl: {
          enable: true,
          // Группы шапки по умолчанию отключают закрепление колонок,
          // явный pinning: true включает его обратно.
          pinning: true,
          pinnedDefault: ['division', 'unit', 'team', 'employee'],
        },
        // Объединение колонок-предков по ключу пути.
        mergeCells: {
          mergeByCellValues: [
            { colKey: 'division', value: (r) => r.divPath },
            { colKey: 'unit', value: (r) => r.unitPath },
            { colKey: 'team', value: (r) => r.teamPath },
          ],
        },
        // Ключ строки должен быть стабильным между страницами: по нему живут
        // выделение и возврат правок.
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: (r) => r.id,
          showDefault: true,
          showInControl: true,
        },
        editing: {
          rowKeyGetter: (r) => r.id,
          onRowsChange: handleRowsChange,
          onEnableEditing: (enable) => {
            savedRowsRef.current = allRows;
            enable();
          },
          onCancel: (disable) => {
            if (savedRowsRef.current) setAllRows(savedRowsRef.current);
            disable();
          },
          onSave: (disable) => {
            savedRowsRef.current = null;
            disable();
          },
        },
        // Поиск/сортировка/фильтрация/пагинация — manual: считает потребитель.
        searching: {
          enabled: true,
          manualSearching: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде',
          searchQueryState: [query, setQuery],
        },
        sorting: { state: [sort, setSort], manualSorting: true },
        filtering: {
          state: [filters, setFilters],
          manualFiltering: true,
          filtersInfo: {
            employee: { label: 'Сотрудник', clearedValue: '' },
            plan: { label: 'План (минимум)', clearedValue: '' },
          },
        },
        pagination: {
          count: total,
          perPage,
          value: page,
          responsiveSlots: true,
          onChangePageValue: (nextPage, scrollToTop) => {
            if (typeof nextPage === 'number') {
              setPage(nextPage);
              scrollToTop();
            }
          },
          onChange: (nextPage, nextPerPage, scrollToTop) => {
            // Смена «показывать по» возвращает на первую страницу, чтобы не
            // оказаться за пределами уменьшившегося числа страниц.
            if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
              setPerPage(nextPerPage);
              setPage(1);
            } else if (typeof nextPage === 'number') {
              setPage(nextPage);
            }
            scrollToTop();
          },
        },
      }}
      columnConfig={columnConfig}
      rows={pageRows}
    />
  );
};
`;

export const Showcase: Story = {
  name: 'mergeByCellValues: пример с серверными данными',
  ...storySourceDoc({
    code: SHOWCASE_CODE,
    type: 'code',
    previewSource: 'shown',
  }),
  render: () => {
    const { pageRows, shared } = useShowcase();

    // Колонки иерархии без групповой шапки (мы их закрепляем), показатели — под 3-уровневой шапкой
    // (Результаты -> Продажи -> План/Факт). Группы только над показателями, чтобы шапка
    // групп не пересекала границу закреплённой области.
    const columnConfig: ColumnOrColumnGroupConfig<LeafRow>[] = [
      colDivision,
      colUnit,
      colTeam,
      colEmployee,
      {
        key: 'results',
        name: 'Результаты за квартал',
        children: [
          { key: 'sales', name: 'Продажи', children: [colPlan, colFact] },
          {
            key: 'eff',
            name: 'Эффективность',
            children: [colConversion, colAvgCheck],
          },
        ],
      },
    ];

    return (
      <div>
        <StoryHint>
          Полный пример: страницы, поиск, сортировку и фильтры готовит «сервер»
          (здесь он эмулируется), таблица рисует полученную страницу и сливает
          колонки иерархии.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            ...shared,
            columnsGrouping: { squashEmptyCells: true },
            columnsControl: {
              enable: true,
              // Группы шапки по умолчанию отключают закрепление — включаем явно.
              pinning: true,
              pinnedDefault: ['division', 'unit', 'team', 'employee'],
            },
          }}
          columnConfig={columnConfig}
          rows={pageRows}
        />
      </div>
    );
  },
};

// ===========================================================================
// Общая часть конфига для merged-стори на структуре (subRows / rowsGrouping).
// Поиск/сортировку/фильтры подключаем в самих стори: для subRows — manual (считаем
// по дереву), для rowsGrouping — встроенные (таблица считает по листьям до сборки
// групп, так как фильтрация и сортировка идут раньше группировки в конвейере).
const useBuiltinFeatures = () => {
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );

  const commonConfig = {
    containerStyle: { height: '74vh' },
    resizableColumn: true,
    fullScreenEnabled: true as const,
    rowMarkers: { startIndex: 1 },
    rowSize: { default: 'medium' as const, showInControl: true },
    columnsGrouping: { squashEmptyCells: true },
    columnsControl: { enable: true },
  };

  return { selectedIds, setSelectedIds, commonConfig };
};

// Колонки для subRows-стори (строки — узлы дерева ShowcaseNode). Меры под 3-уровневой
// шапкой; поля читаются с нужным фолбэком (у листа они есть, у предков — нет).
const nodeMeasure = (
  key: 'plan' | 'fact' | 'conversion' | 'avgCheck',
  name: string,
  width: number,
): ColumnConfig<ShowcaseNode> => ({
  key,
  name,
  width,
  contentFormat: 'number',
  editingCell: { component: 'inputNumber' },
  sortingType: 'numberSort',
  searching: { valueInRow: (r) => r[key] ?? 0 },
  filtering: {
    component: 'input',
    filter: 'includes',
    keyInFilterState: key,
    valueInRow: (r) => r[key] ?? 0,
  },
});

const NODE_COLUMNS: ColumnOrColumnGroupConfig<ShowcaseNode>[] = [
  // Колонки иерархии: sortingType включает стрелку сортировки, по ней потребитель
  // переставляет ветки уровня целиком (см. selectTreePage).
  { key: 'division', name: 'Дивизион', width: 190, sortingType: 'stringSort' },
  { key: 'unit', name: 'Управление', width: 210, sortingType: 'stringSort' },
  { key: 'team', name: 'Команда', width: 170, sortingType: 'stringSort' },
  {
    key: 'employee',
    name: 'Сотрудник',
    width: 220,
    sortingType: 'stringSort',
    searching: { valueInRow: (r) => r.employee ?? '' },
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'employee',
      valueInRow: (r) => r.employee ?? '',
    },
  },
  {
    key: 'results',
    name: 'Результаты за квартал',
    children: [
      {
        key: 'sales',
        name: 'Продажи',
        children: [
          nodeMeasure('plan', 'План', 150),
          nodeMeasure('fact', 'Факт', 150),
        ],
      },
      {
        key: 'eff',
        name: 'Эффективность',
        children: [
          nodeMeasure('conversion', 'Конверсия, %', 175),
          nodeMeasure('avgCheck', 'Средний чек', 185),
        ],
      },
    ],
  },
];

// Правки показателей листа записываем обратно в дерево, лист находим по id.
const updateTreeLeaves = (
  nodes: readonly ShowcaseNode[],
  byId: Map<string, ShowcaseNode>,
): ShowcaseNode[] =>
  nodes.map((n) => {
    if (n.subRows?.length) {
      return { ...n, subRows: updateTreeLeaves(n.subRows, byId) };
    }
    const upd = byId.get(n.id);
    return upd ? { ...n, ...upd } : n;
  });

// Общий columnConfig с групповой шапкой для стори на плоских листьях (LeafRow).
const LEAF_COLUMNS: ColumnOrColumnGroupConfig<LeafRow>[] = [
  colDivision,
  colUnit,
  colTeam,
  colEmployee,
  {
    key: 'results',
    name: 'Результаты за квартал',
    children: [
      { key: 'sales', name: 'Продажи', children: [colPlan, colFact] },
      {
        key: 'eff',
        name: 'Эффективность',
        children: [colConversion, colAvgCheck],
      },
    ],
  },
];

// ===========================================================================
// Стори 2 — тот же пример через subRows view:'merged' (структуру задаёт дерево).
const SUB_ROWS_MERGED_CODE = `
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Узел дерева: узлы-предки несут своё поле (division/unit/team), листья — строки с показателями.
type Node = {
  id: string;
  division?: string;
  unit?: string;
  team?: string;
  employee?: string;
  plan?: number;
  fact?: number;
  subRows?: Node[];
};

const ORG = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
    ],
  },
];
const SURNAMES = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов'];

// Дерево «от бэка»: дивизион -> управление -> команда -> сотрудники (листья).
let g = 0;
const TREE: Node[] = ORG.map((div, di) => ({
  id: \`dv\${di}\`,
  division: div.name,
  subRows: div.units.map((unit, ui) => ({
    id: \`dv\${di}u\${ui}\`,
    unit: unit.name,
    subRows: unit.teams.map((teamName, ti) => ({
      id: \`dv\${di}u\${ui}t\${ti}\`,
      team: teamName,
      subRows: Array.from({ length: 12 }, () => {
        const plan = 600000 + ((g * 37) % 18) * 100000;
        const leaf: Node = {
          id: \`e\${g}\`,
          employee: \`\${SURNAMES[g % SURNAMES.length]} \${g + 1}\`,
          plan,
          fact: Math.round(plan * 0.8),
        };
        g += 1;
        return leaf;
      }),
    })),
  })),
}));

type Filters = { employee: string; plan: string; fact: string };
const CLEARED_FILTERS: Filters = { employee: '', plan: '', fact: '' };
const parseMin = (s: string): number | null => {
  const n = Number(s);
  return s.trim() !== '' && Number.isFinite(n) ? n : null;
};

// Поиск/фильтры/сортировка считаются по дереву: лист остаётся, если проходит
// поиск и фильтры; пустые ветки вырезаем. Сортировка показателей идёт внутри команды
// (блоки целые), сортировка колонок иерархии переставляет ветки уровня по имени.
const selectTreePage = (
  tree: readonly Node[],
  params: {
    query: string;
    filters: Filters;
    sort: readonly SortColumn[];
    page: number;
    perPage: number;
  },
): { pageTree: Node[]; totalDivisions: number } => {
  const { query, filters, sort, page, perPage } = params;
  const q = query.trim().toLowerCase();
  const primary = sort[0];
  const sortKey = primary?.columnKey;
  const dir = primary?.direction === 'ASC' ? 1 : -1;
  const measureKeys = ['employee', 'plan', 'fact'];
  const hierarchyKeys = ['division', 'unit', 'team'];
  const sortByMeasure = !!sortKey && measureKeys.includes(sortKey);
  const sortByHierarchy = !!sortKey && hierarchyKeys.includes(sortKey);

  const nodeName = (n: Node) => n.division ?? n.unit ?? n.team ?? '';

  const walk = (
    nodes: readonly Node[],
    anc: { division: string; unit: string; team: string },
  ): Node[] => {
    const out: Node[] = [];
    nodes.forEach((n) => {
      const nextAnc = {
        division: n.division ?? anc.division,
        unit: n.unit ?? anc.unit,
        team: n.team ?? anc.team,
      };
      const children = n.subRows ?? [];
      const childrenAreLeaves = children.length > 0 && !children[0]?.subRows;

      if (childrenAreLeaves) {
        // Уровень команды: отбираем листья по поиску и фильтрам.
        let leaves = children.filter((leaf) => {
          const text = [
            leaf.employee ?? '',
            nextAnc.division,
            nextAnc.unit,
            nextAnc.team,
            String(leaf.plan ?? ''),
            String(leaf.fact ?? ''),
          ]
            .join(' ')
            .toLowerCase();
          if (q && !text.includes(q)) return false;
          const emp = filters.employee.trim().toLowerCase();
          if (emp && !(leaf.employee ?? '').toLowerCase().includes(emp)) {
            return false;
          }
          const minPlan = parseMin(filters.plan);
          if (minPlan !== null && (leaf.plan ?? 0) < minPlan) return false;
          const minFact = parseMin(filters.fact);
          if (minFact !== null && (leaf.fact ?? 0) < minFact) return false;
          return true;
        });
        // Сортировка показателей: только внутри команды, порядок блоков не меняется.
        if (sortByMeasure) {
          leaves = [...leaves].sort((a, b) => {
            const av = a[sortKey as keyof Node];
            const bv = b[sortKey as keyof Node];
            if (typeof av === 'number' && typeof bv === 'number') {
              return (av - bv) * dir;
            }
            return String(av ?? '').localeCompare(String(bv ?? '')) * dir;
          });
        }
        if (!leaves.length) return;
        out.push({ ...n, subRows: leaves });
      } else if (children.length) {
        // Промежуточный уровень: сначала обрабатываем детей, пустые ветки гасим.
        const kept = walk(children, nextAnc);
        if (!kept.length) return;
        out.push({ ...n, subRows: kept });
      }
    });

    // Сортировка колонки иерархии: переставляем только тот уровень,
    if (sortByHierarchy) {
    // чьё поле выбрано для сортировки.
      const levelMatches =
        (sortKey === 'division' && out[0]?.division !== undefined) ||
        (sortKey === 'unit' && out[0]?.unit !== undefined) ||
        (sortKey === 'team' && out[0]?.team !== undefined);
      if (levelMatches) {
        out.sort((a, b) => nodeName(a).localeCompare(nodeName(b)) * dir);
      }
    }
    return out;
  };

  const filtered = walk(tree, { division: '', unit: '', team: '' });
  const totalDivisions = filtered.length;
  const start = (page - 1) * perPage;
  return { pageTree: filtered.slice(start, start + perPage), totalDivisions };
};

const columns: readonly ColumnConfig<Node>[] = [
  // Колонки иерархии: sortingType включает стрелку, по ней переставляем ветки.
  { key: 'division', name: 'Дивизион', width: 190, sortingType: 'stringSort' },
  { key: 'unit', name: 'Управление', width: 210, sortingType: 'stringSort' },
  { key: 'team', name: 'Команда', width: 170, sortingType: 'stringSort' },
  {
    key: 'employee',
    name: 'Сотрудник',
    width: 220,
    sortingType: 'stringSort',
    searching: { valueInRow: (r) => r.employee ?? '' },
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'employee',
      valueInRow: (r) => r.employee ?? '',
    },
  },
  {
    key: 'plan',
    name: 'План',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'plan',
      valueInRow: (r) => r.plan ?? 0,
    },
  },
  {
    key: 'fact',
    name: 'Факт',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'fact',
      valueInRow: (r) => r.fact ?? 0,
    },
  },
];

// Правки показателей листа записываем обратно в дерево, лист находим по id.
const updateTreeLeaves = (
  nodes: readonly Node[],
  byId: Map<string, Node>,
): Node[] =>
  nodes.map((n) => {
    if (n.subRows?.length) {
      return { ...n, subRows: updateTreeLeaves(n.subRows, byId) };
    }
    const upd = byId.get(n.id);
    return upd ? { ...n, ...upd } : n;
  });

export const Example = () => {
  const [tree, setTree] = useState<readonly Node[]>(TREE);
  // Снимок дерева для отмены редактирования.
  const beforeEditRef = useRef(tree);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Поиск/сортировка/фильтры — manual, считаются по дереву в selectTreePage.
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
  const [sort, setSort] = useState<readonly SortColumn[]>([]);
  // Пагинация по верхним блокам (дивизионам): потребитель владеет деревом и
  // отдаёт страницу целых поддеревьев — блоки не рвутся на границе страницы.
  // Единица «показывать по» — дивизион, поэтому список свой: perPageList.
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);

  // Любое изменение выборки возвращает на первую страницу.
  useEffect(() => {
    setPage(1);
  }, [query, filters, sort]);

  const { pageTree, totalDivisions } = useMemo(
    () => selectTreePage(tree, { query, filters, sort, page, perPage }),
    [tree, query, filters, sort, page, perPage],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '74vh' },
        resizableColumn: true,
        fullScreenEnabled: true,
        rowMarkers: { startIndex: 1 },
        rowSize: { default: 'medium', showInControl: true },
        columnsControl: { enable: true },
        // Поиск/сортировка/фильтры — manual: считает потребитель по дереву.
        searching: {
          enabled: true,
          manualSearching: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде, сумме',
          searchQueryState: [query, setQuery],
        },
        sorting: { state: [sort, setSort], manualSorting: true },
        filtering: {
          state: [filters, setFilters],
          manualFiltering: true,
          filtersInfo: {
            employee: { label: 'Сотрудник', clearedValue: '' },
            plan: { label: 'План (минимум)', clearedValue: '' },
            fact: { label: 'Факт (минимум)', clearedValue: '' },
          },
        },
        pagination: {
          // count — число дивизионов после фильтра, а не число строк.
          count: totalDivisions,
          perPage,
          // Свой список «показывать по»: единица здесь — дивизион, а не строка.
          perPageList: [1, 2],
          value: page,
          responsiveSlots: true,
          onChangePageValue: (nextPage, scrollToTop) => {
            if (typeof nextPage === 'number') {
              setPage(nextPage);
              scrollToTop();
            }
          },
          onChange: (nextPage, nextPerPage, scrollToTop) => {
            if (typeof nextPerPage === 'number' && nextPerPage !== perPage) {
              setPerPage(nextPerPage);
              setPage(1);
            } else if (typeof nextPage === 'number') {
              setPage(nextPage);
            }
            scrollToTop();
          },
        },
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: (r) => r.id,
          showDefault: true,
          showInControl: true,
        },
        editing: {
          rowKeyGetter: (r) => r.id,
          onRowsChange: (updated) => {
            const byId = new Map(updated.map((r) => [r.id, r]));
            setTree((prev) => updateTreeLeaves(prev, byId));
          },
          onEnableEditing: (enable) => {
            beforeEditRef.current = tree;
            enable();
          },
          onCancel: (disable) => {
            setTree(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
        // Структуру задаёт дерево потребителя; колонки уровней сливаются по
        // границам групп, чекбокс и индекс — один на дивизион.
        subRows: {
          getSubRows: (row) => row?.subRows,
          rowKeyGetter: (row) => row.id,
          view: 'merged',
          mergedColumns: ['division', 'unit', 'team'],
        },
      }}
      columnConfig={columns}
      rows={pageTree as Node[]}
    />
  );
};
`;

export const SubRowsMerged: Story = {
  name: 'subRows: дерево с пагинацией',
  ...storySourceDoc({
    code: SUB_ROWS_MERGED_CODE,
    type: 'code',
    previewSource: 'shown',
  }),
  render: () => {
    const { selectedIds, setSelectedIds, commonConfig } = useBuiltinFeatures();
    const [tree, setTree] = useState<readonly ShowcaseNode[]>(TREE);
    const beforeEditRef = useRef(tree);
    // Поиск, сортировка и фильтры — manual (как в плоской стори), но считаются по
    // дереву в selectTreePage.
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState<Filters>(CLEARED_FILTERS);
    const [sort, setSort] = useState<readonly SortColumn[]>([]);
    // Пагинация по верхним блокам (дивизионам): потребитель владеет деревом и
    // отдаёт страницу целых поддеревьев — блоки не рвутся на границе страницы.
    // Единица «показывать по» — дивизион, поэтому список свой: perPageList.
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(2);

    // Любое изменение выборки возвращает на первую страницу.
    useEffect(() => {
      setPage(1);
    }, [query, filters, sort]);

    const { pageTree, totalDivisions } = useMemo(
      () => selectTreePage(tree, { query, filters, sort, page, perPage }),
      [tree, query, filters, sort, page, perPage],
    );

    return (
      <div>
        <StoryHint>
          Поиск, сортировка и фильтры включены и считаются на стороне примера:
          дерево фильтруется целиком, сортировка показателей идёт внутри команд,
          страницы — по оставшимся дивизионам.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            ...commonConfig,
            searching: {
              enabled: true,
              manualSearching: true,
              showSearchBlock: true,
              placeholder: 'Поиск по сотруднику, команде, сумме',
              searchQueryState: [query, setQuery],
            },
            sorting: { state: [sort, setSort], manualSorting: true },
            filtering: {
              state: [filters, setFilters],
              manualFiltering: true,
              filtersInfo: {
                employee: { label: 'Сотрудник', clearedValue: '' },
                plan: { label: 'План (минимум)', clearedValue: '' },
                fact: { label: 'Факт (минимум)', clearedValue: '' },
                conversion: { label: 'Конверсия', clearedValue: 'Все' },
                avgCheck: { label: 'Средний чек (минимум)', clearedValue: '' },
              },
            },
            pagination: {
              count: totalDivisions,
              perPage,
              // Свой список «показывать по»: единица здесь — дивизион, а не строка.
              perPageList: [1, 2, 3],
              value: page,
              responsiveSlots: true,
              onChangePageValue(nextPage, scrollToTop) {
                if (typeof nextPage === 'number') {
                  setPage(nextPage);
                  scrollToTop();
                }
              },
              onChange(nextPage, nextPerPage, scrollToTop) {
                if (
                  typeof nextPerPage === 'number' &&
                  nextPerPage !== perPage
                ) {
                  setPerPage(nextPerPage);
                  setPage(1);
                } else if (typeof nextPage === 'number') {
                  setPage(nextPage);
                }
                scrollToTop();
              },
            },
            selecting: {
              state: [selectedIds, setSelectedIds],
              rowKeyGetter: (r) => r.id,
              showDefault: true,
              showInControl: true,
            },
            editing: {
              rowKeyGetter: (r) => r.id,
              onRowsChange: (updated) => {
                const byId = new Map(updated.map((r) => [r.id, r]));
                setTree((prev) => updateTreeLeaves(prev, byId));
              },
              onEnableEditing: (enable) => {
                beforeEditRef.current = tree;
                enable();
              },
              onCancel: (disable) => {
                setTree(beforeEditRef.current);
                disable();
              },
              onSave: (disable) => {
                disable();
              },
            },
            subRows: {
              getSubRows: (row) => row?.subRows,
              rowKeyGetter: (row) => row.id,
              view: 'merged',
              mergedColumns: ['division', 'unit', 'team'],
            },
          }}
          columnConfig={NODE_COLUMNS}
          rows={pageTree as ShowcaseNode[]}
        />
      </div>
    );
  },
};

// ===========================================================================
// Стори 3 — тот же пример через rowsGrouping view:'merged' (группирует таблица).
const GROUPING_MERGED_CODE = `
import { useRef, useState } from 'react';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

// Плоские листья на входе, дерево строит сама таблица по groupByState.
type Row = {
  id: string;
  division: string;
  unit: string;
  team: string;
  employee: string;
  plan: number;
  fact: number;
};

const ORG = [
  {
    name: 'Розничный бизнес',
    units: [
      { name: 'Управление продаж', teams: ['Команда Север', 'Команда Юг'] },
      { name: 'Управление сервиса', teams: ['Команда Онлайн'] },
    ],
  },
  {
    name: 'Корпоративный бизнес',
    units: [
      { name: 'Управление КИБ', teams: ['Команда Крупные', 'Команда СМБ'] },
    ],
  },
];
const SURNAMES = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов'];

const buildRows = (): Row[] => {
  const out: Row[] = [];
  let g = 0;
  for (const div of ORG) {
    for (const unit of div.units) {
      for (const team of unit.teams) {
        for (let i = 0; i < 12; i += 1) {
          const plan = 600000 + ((g * 37) % 18) * 100000;
          out.push({
            id: \`e\${g}\`,
            division: div.name,
            unit: unit.name,
            team,
            employee: \`\${SURNAMES[g % SURNAMES.length]} \${g + 1}\`,
            plan,
            fact: Math.round(plan * 0.8),
          });
          g += 1;
        }
      }
    }
  }
  return out;
};

const DATA: readonly Row[] = buildRows();

// columnGroupLabel делает колонку доступной в селекторе группировки
// (кнопка groupButton).
const columns: readonly ColumnConfig<Row>[] = [
  {
    key: 'division',
    name: 'Дивизион',
    width: 190,
    rowsGrouping: { columnGroupLabel: 'Дивизион' },
  },
  {
    key: 'unit',
    name: 'Управление',
    width: 210,
    rowsGrouping: { columnGroupLabel: 'Управление' },
  },
  {
    key: 'team',
    name: 'Команда',
    width: 180,
    rowsGrouping: { columnGroupLabel: 'Команда' },
  },
  {
    key: 'employee',
    name: 'Сотрудник',
    width: 220,
    sortingType: 'stringSort',
    searching: { valueInRow: (r) => r.employee },
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'employee',
      valueInRow: (r) => r.employee,
    },
  },
  {
    key: 'plan',
    name: 'План',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'plan',
      valueInRow: (r) => r.plan,
    },
  },
  {
    key: 'fact',
    name: 'Факт',
    width: 150,
    contentFormat: 'number',
    editingCell: { component: 'inputNumber' },
    sortingType: 'numberSort',
    filtering: {
      component: 'input',
      filter: 'includes',
      keyInFilterState: 'fact',
      valueInRow: (r) => r.fact,
    },
  },
];

export const Example = () => {
  const [rows, setRows] = useState<readonly Row[]>(DATA);
  // Снимок строк для отмены редактирования.
  const beforeEditRef = useRef(rows);
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(
    new Set(),
  );
  // Порядок ключей задаёт порядок уровней: сначала дивизион, внутри него
  // управление, внутри — команда.
  const groupByState = useState<string[]>(['division', 'unit', 'team']);
  const sortState = useState<readonly SortColumn[]>([]);
  // В стейте должен быть ключ каждого фильтра из колонок. Фильтр без своего
  // ключа получит пустое значение и может отсеять все строки.
  const filteringState = useState<{
    employee: string;
    plan: string;
    fact: string;
  }>({
    employee: '',
    plan: '',
    fact: '',
  });

  // Пагинации здесь нет: чтобы собрать группы, таблице нужны все строки сразу.
  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: '74vh' },
        resizableColumn: true,
        fullScreenEnabled: true,
        rowMarkers: { startIndex: 1 },
        rowSize: { default: 'medium', showInControl: true },
        columnsControl: { enable: true },
        // Встроенные (не manual) поиск/сортировка/фильтры: считает сама таблица
        // на входных листьях до сборки групп.
        searching: {
          enabled: true,
          showSearchBlock: true,
          placeholder: 'Поиск по сотруднику, команде, сумме',
        },
        sorting: { state: sortState },
        filtering: {
          state: filteringState,
          filtersInfo: {
            employee: { label: 'Сотрудник', clearedValue: '' },
            plan: { label: 'План (минимум)', clearedValue: '' },
            fact: { label: 'Факт (минимум)', clearedValue: '' },
          },
        },
        selecting: {
          state: [selectedIds, setSelectedIds],
          rowKeyGetter: (r) => r.id,
          showDefault: true,
          showInControl: true,
        },
        editing: {
          rowKeyGetter: (r) => r.id,
          onRowsChange: (updated) => setRows(updated as Row[]),
          onEnableEditing: (enable) => {
            beforeEditRef.current = rows;
            enable();
          },
          onCancel: (disable) => {
            setRows(beforeEditRef.current);
            disable();
          },
          onSave: (disable) => {
            disable();
          },
        },
        rowsGrouping: {
          view: 'merged',
          groupByState,
          rowKeyGetter: (r) => r.id,
          // Селектор группировки в блоке управления: пользователь сам выбирает,
          // по каким колонкам группировать.
          groupButton: {},
          // Гасим сортировку у группирующих колонок, чтобы она не конфликтовала
          // с порядком групп.
          disableGroupColumnsSort: true,
        },
      }}
      columnConfig={columns}
      rows={rows as Row[]}
    />
  );
};
`;

export const GroupingMerged: Story = {
  name: 'rowsGrouping: группировка пользователем',
  ...storySourceDoc({
    code: GROUPING_MERGED_CODE,
    type: 'code',
    previewSource: 'shown',
  }),
  render: () => {
    const { selectedIds, setSelectedIds, commonConfig } = useBuiltinFeatures();
    const [rows, setRows] = useState<readonly LeafRow[]>(DATA);
    const beforeEditRef = useRef(rows);
    const groupByState = useState<string[]>(['division', 'unit', 'team']);
    const sortState = useState<readonly SortColumn[]>([]);
    // Ключи стейта обязаны покрывать все фильтры колонок: селект «Конверсия»
    // без своего ключа получил бы пустое значение и отсеял бы все строки.
    const filteringState = useState<Filters>({ ...CLEARED_FILTERS });

    return (
      <div>
        <StoryHint>
          Встроенные поиск, сортировка и фильтры работают как обычно — данные
          фильтруются и сортируются до сборки групп; сортировка по группирующим
          колонкам отключена. Пагинации нет: чтобы собрать группы, таблице нужны
          все строки сразу.
        </StoryHint>
        <TableCanvas
          tableConfig={{
            ...commonConfig,
            // Встроенные (не manual) поиск/сортировка/фильтры: считает сама
            // таблица на входных листьях ДО сборки групп.
            searching: {
              enabled: true,
              showSearchBlock: true,
              placeholder: 'Поиск по сотруднику, команде, сумме',
            },
            sorting: { state: sortState },
            filtering: {
              state: filteringState,
              filtersInfo: {
                employee: { label: 'Сотрудник', clearedValue: '' },
                plan: { label: 'План (минимум)', clearedValue: '' },
                fact: { label: 'Факт (минимум)', clearedValue: '' },
                conversion: { label: 'Конверсия', clearedValue: 'Все' },
                avgCheck: { label: 'Средний чек (минимум)', clearedValue: '' },
              },
            },
            selecting: {
              state: [selectedIds, setSelectedIds],
              rowKeyGetter: (r) => r.id,
              showDefault: true,
              showInControl: true,
            },
            editing: {
              rowKeyGetter: (r) => r.id,
              onRowsChange: (updated) => setRows(updated as LeafRow[]),
              onEnableEditing: (enable) => {
                beforeEditRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(beforeEditRef.current);
                disable();
              },
              onSave: (disable) => {
                disable();
              },
            },
            rowsGrouping: {
              view: 'merged',
              groupByState,
              rowKeyGetter: (r) => r.id,
              // Селектор группировки в блоке управления: пользователь сам выбирает,
              // по каким колонкам группировать (Дивизион/Управление/Команда).
              groupButton: {},
              // Гасим сортировку у группирующих колонок, чтобы она не конфликтовала
              // с порядком групп.
              disableGroupColumnsSort: true,
            },
          }}
          columnConfig={LEAF_COLUMNS}
          rows={rows as LeafRow[]}
        />
      </div>
    );
  },
};
