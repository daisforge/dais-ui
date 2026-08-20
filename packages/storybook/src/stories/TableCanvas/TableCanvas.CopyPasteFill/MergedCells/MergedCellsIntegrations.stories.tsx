import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  type MergedCellsRegion,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import {
  type CSSProperties,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Объединение ячеек/Интеграции',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const hintStyle: CSSProperties = {
  fontSize: 13,
  color: '#888',
  marginBottom: 8,
};

const btnStyle: CSSProperties = { padding: '4px 10px', cursor: 'pointer' };

// ---------------------------------------------------------------------------
// Общие данные «отдел / роль / сотрудник / план / факт»: значения dept/role
// реально повторяются в строках, объединение — визуальный фасад над ними.
type ERow = {
  id: number;
  dept: string;
  role: string;
  person: string;
  rate: number;
  plan: number;
  fact: number;
};

const DEPTS = [
  { dept: 'Отдел A', roles: ['Аналитик', 'Разработчик'] },
  { dept: 'Отдел B', roles: ['Разработчик', 'Тестировщик'] },
  { dept: 'Отдел C', roles: ['Менеджер', 'Аналитик'] },
];

// Ставка определяется ролью, поэтому в данных повторяется по пробегу роли и
// сливается через mergeByCellValues (числовая объединяемая колонка).
const RATES: Record<string, number> = {
  Аналитик: 1200.5,
  Разработчик: 1800.75,
  Тестировщик: 1500.25,
  Менеджер: 2100,
};

const ROLE_OPTIONS = Object.keys(RATES).map((r) => ({ value: r, text: r }));

const buildRows = (perRole: number): ERow[] => {
  const rows: ERow[] = [];
  let id = 1;
  for (const d of DEPTS) {
    for (const role of d.roles) {
      for (let i = 0; i < perRole; i += 1) {
        rows.push({
          id,
          dept: d.dept,
          role,
          person: `Сотрудник ${id}`,
          rate: RATES[role] ?? 0,
          plan: (id % 7) * 1000 + 500.5,
          fact: (id % 5) * 900 + 250.25,
        });
        id += 1;
      }
    }
  }
  return rows;
};

// ---------------------------------------------------------------------------
// Поиск + сортировка + чекбоксы выделения строк + панель массовых действий.
// Чекбокс — ось СТРОК: внутри слитого блока каждая строка выделяется отдельно,
// блок на это не влияет. Поиск/сортировка пересобирают блоки сами.
export const SearchAndCheckboxes: Story = {
  name: 'Поиск + чекбоксы строк + массовые действия',
  render: () => {
    const rows = useMemo(() => buildRows(3), []);
    const selectingState = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    const [sort, setSort] = useState<readonly SortColumn[]>([]);
    const [selected] = selectingState;

    const columns: readonly ColumnConfig<ERow>[] = [
      { key: 'dept', name: 'Отдел', width: 170, sortingType: 'stringSort' },
      { key: 'role', name: 'Роль', width: 170, sortingType: 'stringSort' },
      { key: 'person', name: 'Сотрудник', width: 180 },
      { key: 'plan', name: 'План', width: 130, sortingType: 'numberSort' },
    ];

    return (
      <div>
        <p style={hintStyle}>
          <code>
            mergeCells.mergeByCellValues: [&apos;dept&apos;, &apos;role&apos;]
          </code>{' '}
          + глобальный поиск + чекбоксы строк с панелью массовых действий. Поищи
          «Сотрудник 1» — блоки сожмутся под найденные строки. Чекбокс выделяет
          СВОЮ строку даже внутри слитого блока. Отсортируй по «План» — блоки
          распадутся (значения перемешались).
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '560px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            mergeCells: { mergeByCellValues: ['dept', 'role'] },
            searching: { enabled: true, showSearchBlock: true },
            sorting: { state: [sort, setSort] },
            selecting: {
              state: selectingState,
              rowKeyGetter: (r) => r.id,
            },
            controlBlock: {
              massActionPanel: {
                buttons: [
                  {
                    type: 'button',
                    text: `Выбрано: ${selected.size}`,
                    view: 'secondary',
                    onClick: () => {},
                  },
                ],
              },
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Дерево (subRows) + объединение по значению. Merge живёт на ПЛОСКОМ видимом
// списке (родители + раскрытые дети), поэтому родитель и его дети с одинаковым
// значением сливаются в один блок; сворачивание пересобирает блоки.
export const TreeSubRowsMerge: Story = {
  name: 'Дерево (subRows) + объединение по значению',
  render: () => {
    type TRow = {
      id: string;
      region: string;
      name: string;
      plan: number;
      children?: TRow[];
    };

    const rows = useMemo((): TRow[] => {
      const make = (region: string, idx: number, childCount: number): TRow => ({
        id: `${region}-${idx}`,
        region,
        name: `Команда ${idx}`,
        plan: idx * 100,
        children: Array.from({ length: childCount }, (_, c) => ({
          id: `${region}-${idx}-${c + 1}`,
          region,
          name: `Проект ${idx}.${c + 1}`,
          plan: c * 10,
        })),
      });
      return [
        make('Север', 1, 2),
        make('Север', 2, 3),
        make('Юг', 3, 2),
        make('Юг', 4, 2),
      ];
    }, []);

    const getSubRows = useCallback((row: TRow) => row.children, []);
    const rowKeyGetter = useCallback((row: TRow) => row.id, []);

    // parentKeyAsDefault: дочерние строки читают то же поле, что и родитель
    // (без него ячейки детей рендерятся пустыми).
    const columns: readonly ColumnConfig<TRow>[] = [
      {
        key: 'region',
        name: 'Регион (merge)',
        width: 180,
        subRow: { parentKeyAsDefault: true },
      },
      {
        key: 'name',
        name: 'Команда / Проект',
        width: 240,
        subRow: { isColumnWithArrow: true, parentKeyAsDefault: true },
      },
      {
        key: 'plan',
        name: 'План',
        width: 130,
        contentFormat: 'number',
        subRow: { parentKeyAsDefault: true },
      },
    ];

    return (
      <div>
        <p style={hintStyle}>
          Регион повторяется у родителя и его детей. Раскрой команду — дочерние
          строки попадают в видимый список и блок «Регион» накрывает родителя
          вместе с детьми; сверни — блок пересоберётся. Merge считается по
          плоскому видимому списку, отдельного API для subRows не нужно.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '560px' },
            rowMarkers: { startIndex: 1 },
            mergeCells: { mergeByCellValues: ['region'] },
            subRows: { getSubRows, rowKeyGetter },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Форматирование, кастомный рендер и выравнивание при объединении: блок рисует
// контент ORIGIN-ячейки (левой верхней), включая её contentFormat и renderCell.
// Форматы покрытых колонок/строк на блок не влияют.
export const FormatFromOrigin: Story = {
  name: 'contentFormat / кастомный рендер: всё из origin',
  render: () => {
    const rows = useMemo(() => buildRows(2), []);
    const [regions, setRegions] = useState<MergedCellsRegion[]>([
      { rowKeys: [1, 2], colKeys: ['plan', 'fact'] },
    ]);

    const columns: readonly ColumnConfig<ERow>[] = [
      { key: 'dept', name: 'Отдел (merge)', width: 160 },
      {
        key: 'role',
        name: 'Роль (custom render)',
        width: 200,
        // Кастомный canvas-рендер: в блоке рисуется origin-ячейка, контент
        // растягивается на весь прямоугольник и центрируется как задано тут.
        renderCell: ({ row }) => (
          <Canvas.Container
            padding={8}
            alignItems="center"
            justifyContent="center"
          >
            <Canvas.Badge text={row.role} />
          </Canvas.Container>
        ),
        copyData: (row) => row.role,
        // У canvas-колонок превью по умолчанию выключено — включаем явно.
        renderCellPreview: 'cellEditorAsPreview',
      },
      { key: 'person', name: 'Сотрудник', width: 170 },
      {
        key: 'plan',
        name: 'План (number, right)',
        width: 170,
        contentFormat: {
          type: 'number',
          minimumFractionDigits: 2,
          alignContent: 'right',
        },
      },
      {
        key: 'fact',
        name: 'Факт (custom ₽)',
        width: 170,
        contentFormat: { customFormat: (v) => `${v} ₽` },
      },
    ];

    return (
      <div>
        <p style={hintStyle}>
          «Отдел» и «Роль» слиты по значению: блок роли рисуется кастомным
          рендером origin (бейдж по центру). Кнопкой можно слить «План+Факт»
          строк 1–2 в прямоугольник: блок покажет ЗНАЧЕНИЕ и number-ФОРМАТ
          origin-ячейки (План, выравнивание вправо) — формат покрытой колонки
          «Факт» (₽) на блок не влияет.
        </p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <button
            type="button"
            style={btnStyle}
            onClick={() =>
              setRegions([{ rowKeys: [1, 2], colKeys: ['plan', 'fact'] }])
            }
          >
            Слить План+Факт (строки 1-2)
          </button>
          <button type="button" style={btnStyle} onClick={() => setRegions([])}>
            Очистить
          </button>
        </div>
        <pre style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          mergedCellsRegions = {JSON.stringify(regions)}
        </pre>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            mergeCells: {
              mergeByCellValues: ['dept', 'role'],
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Слитые шапки (columnsGrouping + squashEmptyCells) вместе с объединением тела:
// две независимые фичи, работают одновременно.
export const MergedHeadersAndBody: Story = {
  name: 'Слитые шапки + объединение тела',
  render: () => {
    const rows = useMemo(() => buildRows(2), []);

    const columnConfig: readonly ColumnOrColumnGroupConfig<ERow>[] = [
      // Одиночная колонка при squash тянется на всю высоту шапки.
      { key: 'person', name: 'Сотрудник', width: 180 },
      {
        key: 'org',
        name: 'Организация',
        squashedHeaderAlign: { horizontal: 'center' },
        children: [
          { key: 'dept', name: 'Отдел', width: 160 },
          { key: 'role', name: 'Роль', width: 160 },
        ],
      },
      {
        key: 'metrics',
        name: 'Показатели',
        squashedHeaderAlign: { horizontal: 'center' },
        children: [
          { key: 'plan', name: 'План', width: 130, contentFormat: 'number' },
          { key: 'fact', name: 'Факт', width: 130, contentFormat: 'number' },
        ],
      },
    ];

    return (
      <div>
        <p style={hintStyle}>
          Шапка: группы «Организация» и «Показатели», одиночный «Сотрудник»
          растянут на всю высоту (<code>squashEmptyCells</code>). Тело: отдел и
          роль слиты по значению. Фичи независимы и работают вместе.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsGrouping: {
              squashEmptyCells: true,
              squashedHeaderAlign: { vertical: 'center' },
            },
            mergeCells: { mergeByCellValues: ['dept', 'role'] },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Всеобъемлющий пример: поиск, фильтр, сортировка, rowSize, настройка колонок
// (hide/pin/reorder), чекбоксы + массовые действия, слитые шапки, объединение
// по значению + controlled-регионы кнопками, клиентская пагинация.
export const FullKitchenSink: Story = {
  name: 'Всеобъемлющий пример (все возможности + merge)',
  render: () => {
    // Полный набор в стейте: редактирование правит его через маппинг по id.
    const [allRows, setAllRows] = useState<ERow[]>(() => buildRows(6)); // 72 строки
    const PER_PAGE = 18;
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const selectingState = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    const [sort, setSort] = useState<readonly SortColumn[]>([]);
    const filteringState = useState<{ dept: string }>({ dept: 'Все' });
    const [regions, setRegions] = useState<MergedCellsRegion[]>([]);
    const [lastMenuPick, setLastMenuPick] = useState('');
    const [selected] = selectingState;
    const [filters] = filteringState;

    // Снимок для «Отменить»: делается при входе в режим редактирования,
    // восстанавливается по отмене, фиксируется по сохранению.
    const savedRef = useRef<ERow[]>([]);

    // Таблица правит СРЕЗ страницы: мапим изменённые строки обратно в полный
    // набор по id (при пагинации onRowsChange отдаёт только строки страницы).
    const handleRowsChange = useCallback((newPageRows: ERow[]) => {
      const byId = new Map(newPageRows.map((r) => [r.id, r]));
      setAllRows((prev) => prev.map((r) => byId.get(r.id) ?? r));
    }, []);

    // ВАЖНО: при активной пагинации таблица работает в «серверном» контракте —
    // встроенные поиск/фильтры/сортировка ОТКЛЮЧЕНЫ (данные считаются внешними).
    // Поэтому эмулируем сервер: сами применяем поиск, фильтр и сортировку ко
    // всему набору, затем отдаём срез текущей страницы. Merge считается по
    // видимой странице; controlled-регион с rowKeys другой страницы не рисуется.
    const processed = useMemo(() => {
      let result = allRows;
      const q = query.trim().toLowerCase();
      if (q) {
        result = result.filter((r) =>
          [r.dept, r.role, r.person].some((v) => v.toLowerCase().includes(q)),
        );
      }
      if (filters.dept !== 'Все') {
        result = result.filter((r) => r.dept === filters.dept);
      }
      const [s] = sort;
      if (s) {
        const dir = s.direction === 'ASC' ? 1 : -1;
        const key = s.columnKey as keyof ERow;
        result = [...result].sort((a, b) => {
          const av = a[key];
          const bv = b[key];
          if (typeof av === 'number' && typeof bv === 'number') {
            return (av - bv) * dir;
          }
          return String(av).localeCompare(String(bv)) * dir;
        });
      }
      return result;
    }, [allRows, query, filters, sort]);

    const pageCount = Math.max(1, Math.ceil(processed.length / PER_PAGE));
    const safePage = Math.min(page, pageCount);
    const pageRows = useMemo(
      () => processed.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE),
      [processed, safePage],
    );

    const columnConfig: readonly ColumnOrColumnGroupConfig<ERow>[] = [
      {
        key: 'org',
        name: 'Организация',
        squashedHeaderAlign: { horizontal: 'center' },
        children: [
          {
            key: 'dept',
            name: 'Отдел',
            width: 160,
            sortingType: 'stringSort',
            filtering: {
              component: 'select',
              keyInFilterState: 'dept',
              valueInRow: (r) => r.dept,
              selectOptions: {
                type: 'constant',
                options: [
                  { value: 'Все', text: 'Все' },
                  ...DEPTS.map((d) => ({ value: d.dept, text: d.dept })),
                ],
              },
              filter: {
                typeOfValue: 'single',
                filteringType: (fv, rv) => fv === 'Все' || rv === fv,
              },
            },
            // Строковый редактор на объединяемой колонке: правка origin
            // меняет значение и блок пересобирается по новым пробегам.
            editingCell: { component: 'inputString' },
          },
          {
            key: 'role',
            name: 'Роль',
            width: 160,
            sortingType: 'stringSort',
            // Select на объединяемой колонке.
            editingCell: {
              component: 'select',
              options: { type: 'constant', options: ROLE_OPTIONS },
            },
          },
        ],
      },
      {
        key: 'person',
        name: 'Сотрудник',
        width: 180,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'metrics',
        name: 'Показатели',
        squashedHeaderAlign: { horizontal: 'center' },
        children: [
          {
            // Числовая ОБЪЕДИНЯЕМАЯ колонка: значение повторяется по пробегу
            // роли; contentFormat берётся из origin-ячейки блока.
            key: 'rate',
            name: 'Ставка (merge)',
            width: 150,
            sortingType: 'numberSort',
            contentFormat: {
              type: 'number',
              minimumFractionDigits: 2,
              alignContent: 'right',
            },
            editingCell: { component: 'inputNumber' },
          },
          {
            key: 'plan',
            name: 'План',
            width: 130,
            sortingType: 'numberSort',
            contentFormat: 'number',
            editingCell: { component: 'inputNumber' },
          },
          {
            key: 'fact',
            name: 'Факт',
            width: 130,
            sortingType: 'numberSort',
            contentFormat: 'number',
            editingCell: { component: 'inputNumber' },
          },
        ],
      },
    ];

    return (
      <div>
        <p style={hintStyle}>
          Всё сразу: слитые шапки, merge по значению (отдел/роль), controlled
          прямоугольник кнопкой, поиск, фильтр по отделу, сортировка, чекбоксы с
          массовыми действиями, hide/pin/reorder через шестерёнку, размер строк,
          пагинация. Плюс: редактирование (строка/число/select, «Отменить»
          откатывает к снимку, «Сохранить» фиксирует), протяжка fill-handle,
          контекстное меню ячеек. Правый клик по ЛЮБОЙ ячейке слитого блока
          показывает в пунктах строку/колонку ORIGIN (форк нормализует клик).
          «Ставка» — числовая объединяемая колонка: формат числа берётся из
          origin-ячейки блока; правка значения пересобирает блоки. «План» тоже в
          mergeByCellValues: без сортировки одинаковые значения не соседствуют и
          блоков нет, а сортировка по «План» собирает их в блоки — merge следует
          за данными. Нюанс контракта: при активной пагинации ВСТРОЕННЫЕ
          поиск/фильтры/сортировка отключены (серверный режим) — стори эмулирует
          сервер (manualSearching / manualFiltering / manualSorting) и отдаёт
          срез страницы. Регион задан ключами строк 1-3: виден только на
          странице 1.
        </p>
        {lastMenuPick && (
          <p style={{ ...hintStyle, color: '#555' }}>
            Последний пункт контекстного меню: <b>{lastMenuPick}</b>
          </p>
        )}
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <button
            type="button"
            style={btnStyle}
            onClick={() =>
              setRegions([{ rowKeys: [1, 2, 3], colKeys: ['dept', 'role'] }])
            }
          >
            Прямоугольник 1-3 × Отдел+Роль
          </button>
          <button type="button" style={btnStyle} onClick={() => setRegions([])}>
            Очистить регионы
          </button>
        </div>
        <pre style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          mergedCellsRegions = {JSON.stringify(regions)} | mergeByCellValues =
          [&quot;dept&quot;, &quot;role&quot;, &quot;rate&quot;,
          &quot;plan&quot;]
        </pre>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '640px' },
            rowMarkers: { startIndex: (safePage - 1) * PER_PAGE + 1 },
            rowSize: { default: 'medium', showInControl: true },
            resizableColumn: true,
            columnsControl: { enable: true },
            columnsGrouping: { squashEmptyCells: true },
            mergeCells: {
              mergeByCellValues: ['dept', 'role', 'rate', 'plan'],
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
            editing: {
              onRowsChange: handleRowsChange,
              rowKeyGetter: (r) => `${r.id}`,
              // Снимок при входе, откат по «Отменить», фиксация по «Сохранить».
              onEnableEditing: (enable) => {
                savedRef.current = allRows;
                enable();
              },
              onCancel: (disable) => {
                setAllRows(savedRef.current);
                disable();
              },
              onSave: (disable) => {
                savedRef.current = allRows;
                disable();
              },
            },
            cellTransfer: { fillHandle: true },
            // Контекстное меню ячеек: правый клик по ЛЮБОЙ ячейке слитого блока
            // форк нормализует к origin, поэтому в пунктах — строка/колонка
            // origin-ячейки (левого верхнего угла блока).
            onCellContextMenuDropdown: {
              type: 'dropdown',
              getDropdownItems: ({ row, column }) => [
                {
                  value: 'row',
                  label: `Строка: ${row.person} (id ${row.id})`,
                },
                { value: 'col', label: `Колонка: ${String(column.key)}` },
                { value: 'dept', label: `Отдел: ${row.dept}` },
              ],
              onItemSelect: (item) => {
                setLastMenuPick(String(item.label ?? item.value));
              },
            },
            searching: {
              enabled: true,
              showSearchBlock: true,
              manualSearching: true,
              searchQueryState: [
                query,
                (v) => {
                  setQuery(typeof v === 'function' ? v(query) : v);
                  setPage(1);
                },
              ],
            },
            sorting: { state: [sort, setSort], manualSorting: true },
            filtering: {
              state: [
                filters,
                (v) => {
                  filteringState[1](v);
                  setPage(1);
                },
              ],
              manualFiltering: true,
              filtersInfo: { dept: { label: 'Отдел', clearedValue: 'Все' } },
            },
            selecting: {
              state: selectingState,
              rowKeyGetter: (r) => r.id,
            },
            controlBlock: {
              massActionPanel: {
                buttons: [
                  {
                    type: 'button',
                    text: `Выбрано: ${selected.size}`,
                    view: 'secondary',
                    onClick: () => {},
                  },
                ],
              },
            },
            cellsSelection: { mode: 'range-cell' },
            pagination: {
              count: processed.length,
              perPage: PER_PAGE,
              value: safePage,
              onChangePageValue: (p, scrollToTop) => {
                if (typeof p === 'number') {
                  setPage(p);
                  scrollToTop();
                }
              },
            },
          }}
          columnConfig={columnConfig}
          rows={pageRows}
        />
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// ПРОТОТИП: группировка как плоский вид. Дерево групп приходит извне (как в
// tree-виде rowsGrouping), стори раскладывает его в плоские строки и генерирует
// mergedCellsRegions из УЗЛОВ дерева: регион = группа (у него есть identity —
// ключи строк). В отличие от merge по значению, блок дочернего уровня НЕ
// сливается через границу родителя (у «Разработчика» из отделов A и B разные
// регионы). Сливаются и сервисные колонки: нумерация показывает НОМЕР ГРУППЫ
// верхнего уровня, чекбокс-колонка слита по отделу (визуально; нативный
// групповой тоггл — доработка фичи, пока группу выделяет клик по блоку отдела).
export const GroupedFlatView: Story = {
  name: 'Группировка как плоский вид (прототип)',
  render: () => {
    type GRow = {
      id: number;
      dept: string;
      role: string;
      person: string;
      rate: number;
      plan: number;
    };

    // Вход — дерево групп, как его отдаёт потребитель (или бэк).
    const TREE = useMemo(
      () => [
        {
          dept: 'Отдел A',
          roles: [
            { role: 'Аналитик', people: ['Иванов', 'Петров', 'Сидоров'] },
            { role: 'Разработчик', people: ['Козлов', 'Новиков'] },
          ],
        },
        {
          dept: 'Отдел B',
          roles: [
            { role: 'Разработчик', people: ['Смирнов', 'Волков', 'Зайцев'] },
            { role: 'Тестировщик', people: ['Морозов', 'Павлов'] },
          ],
        },
        {
          dept: 'Отдел C',
          roles: [{ role: 'Менеджер', people: ['Фёдоров', 'Егоров'] }],
        },
      ],
      [],
    );

    // Раскладка дерева в плоские строки + регионы из узлов + номера групп.
    const { rows, regions, deptOrdinal, deptRowKeys } = useMemo(() => {
      const flat: GRow[] = [];
      const regionList: MergedCellsRegion[] = [];
      const ordinal = new Map<number, number>();
      const byDept = new Map<string, number[]>();
      let id = 1;
      TREE.forEach((deptNode, deptIdx) => {
        const deptKeys: number[] = [];
        for (const roleNode of deptNode.roles) {
          const roleKeys: number[] = [];
          for (const person of roleNode.people) {
            flat.push({
              id,
              dept: deptNode.dept,
              role: roleNode.role,
              person,
              rate: RATES[roleNode.role] ?? 0,
              plan: (id % 5) * 1000 + 500,
            });
            ordinal.set(id, deptIdx + 1);
            deptKeys.push(id);
            roleKeys.push(id);
            id += 1;
          }
          // Регион группы РОЛИ: только своя колонка, в рамках родителя.
          regionList.push({ rowKeys: roleKeys, colKeys: ['role'] });
          regionList.push({ rowKeys: roleKeys, colKeys: ['rate'] });
        }
        // Регионы группы ОТДЕЛА: data-колонка + сервисные (нумерация, чекбокс).
        regionList.push({ rowKeys: deptKeys, colKeys: ['dept'] });
        regionList.push({ rowKeys: deptKeys, colKeys: ['row-markers'] });
        regionList.push({ rowKeys: deptKeys, colKeys: ['checkbox-row'] });
        byDept.set(deptNode.dept, deptKeys);
      });
      return {
        rows: flat,
        regions: regionList,
        deptOrdinal: ordinal,
        deptRowKeys: byDept,
      };
    }, [TREE]);

    const selectingState = useState(
      (): ReadonlySet<string | number> => new Set(),
    );
    const [selected, setSelected] = selectingState;

    const columns: readonly ColumnConfig<GRow>[] = [
      { key: 'dept', name: 'Отдел', width: 150 },
      { key: 'role', name: 'Роль', width: 150 },
      { key: 'person', name: 'Сотрудник', width: 170 },
      {
        key: 'rate',
        name: 'Ставка',
        width: 130,
        contentFormat: { type: 'number', minimumFractionDigits: 2 },
      },
      { key: 'plan', name: 'План', width: 120, contentFormat: 'number' },
    ];

    return (
      <div>
        <p style={hintStyle}>
          Дерево групп (отдел, роль) отображается ПЛОСКО через регионы из узлов
          дерева. «Разработчик» есть в отделах A и B — блоки НЕ сливаются через
          границу (разные регионы). Нумерация — номер группы верхнего уровня,
          чекбокс-колонка слита по отделу. Клик по блоку «Отдел» выделяет все
          строки группы (полоса покрывает группу целиком). Переставь или скрой
          колонки через шестерёнку — регионы по ключам, ничего не ломается.
        </p>
        <p style={{ ...hintStyle, color: '#555' }}>
          Выбрано строк: <b>{selected.size}</b>
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '640px' },
            rowMarkers: {
              startIndex: 1,
              getRowMarker: ({ row }) => deptOrdinal.get(row.id) ?? '',
            },
            columnsControl: { enable: true },
            mergeCells: {
              mergedCellsRegions: regions,
              rowKeyGetter: (r) => r.id,
            },
            selecting: {
              state: selectingState,
              rowKeyGetter: (r) => r.id,
            },
            cellsSelection: { mode: 'range-cell' },
            onCellClicked: (_cell, info) => {
              // Групповой тоггл: клик по слитому блоку отдела выделяет/снимает
              // ВСЕ строки группы (identity региона = ключи строк группы).
              if (!('row' in info) || info.column.key !== 'dept') return;
              const keys = deptRowKeys.get(info.row.dept);
              if (!keys) return;
              setSelected((prev) => {
                const next = new Set(prev);
                const allIn = keys.every((k) => next.has(k));
                keys.forEach((k) => (allIn ? next.delete(k) : next.add(k)));
                return next;
              });
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};
