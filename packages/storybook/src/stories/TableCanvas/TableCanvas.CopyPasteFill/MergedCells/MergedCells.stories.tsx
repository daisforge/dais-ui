/* eslint-disable no-underscore-dangle */
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Объединение ячеек',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'cell', value: 'cell' },
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'disabled', value: 'disabled' },
];

const HIGHLIGHT_ACTIVE_TYPE_OPTIONS: Array<{
  label: string;
  value: HighlightActiveType;
}> = [
  { label: 'row', value: 'row' },
  { label: 'disabled', value: 'disabled' },
];

// Базовый rowSpan: role/dept ПОВТОРЯЮТСЯ в данных по блоку из 3 строк (объединение —
// чистый UI-фасад над повторяющимися значениями), period/plan/fact — свои у строки.
export const RowSpanBasic: Story = {
  name: 'Базовый rowSpan (повторяющиеся данные)',
  render: () => {
    type MRow = {
      id: number;
      role: string;
      dept: string;
      period: string;
      plan: number;
      fact: number;
    };
    const GROUPS = [
      { role: 'Аналитик', dept: 'Отдел A' },
      { role: 'Разработчик', dept: 'Отдел B' },
      { role: 'Тестировщик', dept: 'Отдел C' },
      { role: 'Менеджер', dept: 'Отдел D' },
    ];
    const PERIODS = ['Q1', 'Q2', 'Q3'];
    const initialRows: MRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (const p of PERIODS) {
        initialRows.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          period: p,
          plan: counter * 10,
          fact: counter * 8,
        });
        counter += 1;
      }
    }

    const [rows, setRows] = useState<MRow[]>(initialRows);
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const [highlightActiveType, setHighlightActiveType] =
      useState<HighlightActiveType>('disabled');

    // Блок = 3 строки одной группы. Диапазон ОДИНАКОВ для всех ячеек блока.
    const rowSpanByThree = (rowInd: number): readonly [number, number] => {
      const start = Math.floor(rowInd / 3) * 3;
      return [start, start + 2];
    };

    const columns = useMemo<readonly ColumnConfig<MRow>[]>(
      () => [
        {
          key: 'role',
          name: 'Роль (merge ×3)',
          width: 220,
          rowSpan: (ci) => rowSpanByThree(ci.rowInd),
        },
        {
          key: 'dept',
          name: 'Отдел (custom + merge ×3)',
          width: 220,
          rowSpan: (ci) => rowSpanByThree(ci.rowInd),
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              padding={8}
              alignItems="center"
              justifyContent="center"
            >
              <Canvas.Text color={theme.textDark}>{row.dept}</Canvas.Text>
            </Canvas.Container>
          ),
          copyData: (row) => row.dept,
        },
        {
          key: 'period',
          name: 'Период',
          width: 120,
          editingCell: { component: 'inputString' },
        },
        {
          key: 'plan',
          name: 'План',
          width: 120,
          editingCell: { component: 'inputNumber' },
        },
        {
          key: 'fact',
          name: 'Факт',
          width: 120,
          editingCell: { component: 'inputNumber' },
        },
      ],
      [],
    );

    return (
      <div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
          <label>
            Режим выделения:{' '}
            <select
              value={selectionMode}
              onChange={(e) =>
                setSelectionMode(e.target.value as CellsSelectionMode)
              }
            >
              {SELECTION_MODE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Highlight active:{' '}
            <select
              value={highlightActiveType}
              onChange={(e) =>
                setHighlightActiveType(e.target.value as HighlightActiveType)
              }
            >
              {HIGHLIGHT_ACTIVE_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          <b>Роль</b> и <b>Отдел</b> слиты блоками по 3 строки. Значения РЕАЛЬНО
          повторяются в данных (Аналитик×3, Отдел A×3) — объединение только
          UI-фасад, скрытых других значений нет. Период/План/Факт — свои у строки.
        </p>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            highlightActiveType,
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            rowSize: { default: 'medium', showInControl: true },
            cellsSelection: {
              mode: selectionMode,
              enableColumnSelection: true,
            },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
            resizableColumn: true,
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Colspan: строки-заголовки секций, первая колонка спанит всю ширину.
export const Colspan: Story = {
  name: 'Colspan (заголовок секции на всю ширину)',
  render: () => {
    type MRow = {
      id: number;
      kind: 'header' | 'data';
      label: string;
      a: string;
      b: string;
    };
    const initialRows: MRow[] = [];
    let id = 1;
    for (let s = 0; s < 3; s += 1) {
      initialRows.push({
        id: id++,
        kind: 'header',
        label: `Секция ${s + 1}`,
        a: '',
        b: '',
      });
      for (let r = 0; r < 3; r += 1) {
        initialRows.push({
          id: id++,
          kind: 'data',
          label: `Строка ${r + 1}`,
          a: `A${s}${r}`,
          b: `B${s}${r}`,
        });
      }
    }

    const [rows, setRows] = useState<MRow[]>(initialRows);

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'label',
        name: 'Заголовок / Строка',
        width: 220,
        // header-строка: colSpan=2 → спан 3 колонки (label, a, b).
        colSpan: (ci) => (ci.row.kind === 'header' ? 2 : 0),
        editingCell: { component: 'inputString' },
        renderCell: ({ row, theme }) => (
          <Canvas.Container padding={8} alignItems="center">
            <Canvas.Text color={theme.textDark}>{row.label}</Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'a',
        name: 'A',
        width: 200,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'b',
        name: 'B',
        width: 200,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Строки-заголовки секций: первая колонка через <code>colSpan</code>{' '}
          спанит все 3 колонки. Данные-строки — обычные. Редактирование/протяжка/
          копирование включены — проверяем overlay-редактор и перенос на merged.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
          }}
          columnConfig={columns}
          rows={rows}
        />
      </div>
    );
  },
};

// Прямоугольный блок: colSpan + rowSpan на ОДНОЙ origin-ячейке = блок cols×rows.
export const Rectangular: Story = {
  name: 'Прямоугольный блок (colSpan + rowSpan)',
  render: () => {
    type MRow = { id: number; a: string; b: string; c: string; d: string };
    const initialRows: MRow[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      a: `A·${i}`,
      b: `B·${i}`,
      c: `C·${i}`,
      d: `D·${i}`,
    }));

    const [rows, setRows] = useState<MRow[]>(initialRows);
    // Снимок «сохранённого» состояния: отмена = потребитель откатывает свой стейт.
    const savedRef = useRef<MRow[]>(initialRows);

    // Блок 2×3: колонки A,B × строки 1..3. На origin-колонке 'a' для этих строк:
    // colSpan=1 (2 колонки A,B) + rowSpan=[1,3] (3 строки).
    const inBlock = (rowInd: number) => rowInd >= 1 && rowInd <= 3;

    const columns: readonly ColumnConfig<MRow>[] = [
      {
        key: 'a',
        name: 'A (origin)',
        width: 160,
        colSpan: (ci) => (inBlock(ci.rowInd) ? 1 : 0),
        rowSpan: (ci) => (inBlock(ci.rowInd) ? [1, 3] : null),
        editingCell: { component: 'inputString' },
        renderCell: ({ row, rowInd, theme }) => (
          <Canvas.Container
            padding={8}
            alignItems="center"
            justifyContent={inBlock(rowInd) ? 'center' : 'flex-start'}
          >
            <Canvas.Text color={theme.textDark}>
              {inBlock(rowInd) ? 'Блок 2×3' : row.a}
            </Canvas.Text>
          </Canvas.Container>
        ),
      },
      {
        key: 'b',
        name: 'B',
        width: 160,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'c',
        name: 'C',
        width: 160,
        editingCell: { component: 'inputString' },
      },
      {
        key: 'd',
        name: 'D',
        width: 160,
        editingCell: { component: 'inputString' },
      },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Прямоугольный блок 2×3 (колонки A,B × строки 2–4) — через{' '}
          <code>colSpan</code> + <code>rowSpan</code> на origin-ячейке A.
          Редактирование/протяжка/копирование включены — проверяем overlay на
          блоке и перенос.
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            cellsSelection: { mode: 'range-cell', enableColumnSelection: true },
            cellTransfer: { fillHandle: true },
            editing: {
              onRowsChange: setRows,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
              // Отмена/сохранение данных — на стороне потребителя: снимок при
              // входе, восстановление по «Отменить», фиксация по «Сохранить».
              onEnableEditing: (enable) => {
                savedRef.current = rows;
                enable();
              },
              onCancel: (disable) => {
                setRows(savedRef.current);
                disable();
              },
              onSave: (disable) => {
                savedRef.current = rows;
                disable();
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

// Derived-объединение: rowSpan ВЫВОДИТСЯ из значения на ТЕКУЩЕМ видимом порядке
// (слить подряд идущие строки с одинаковым role/dept). Через manualSorting стори
// сама владеет отсортированным/отфильтрованным массивом, поэтому rowInd совпадает с
// позицией в нём, и функция может посчитать «пробеги» одинаковых значений. Так
// объединения САМИ пересобираются при сортировке/фильтре (в отличие от позиционного
// rowSpan в RowSpanBasic, который слил бы по индексу и сломался бы при сортировке).
export const DerivedGroupingSortFilter: Story = {
  name: 'Derived-объединение + сортировка/фильтр',
  render: () => {
    type GRow = {
      id: number;
      role: string;
      dept: string;
      person: string;
      plan: number;
    };
    const GROUPS = [
      { role: 'Аналитик', dept: 'Отдел A' },
      { role: 'Разработчик', dept: 'Отдел B' },
      { role: 'Тестировщик', dept: 'Отдел C' },
      { role: 'Менеджер', dept: 'Отдел D' },
    ];
    const ALL: GRow[] = [];
    let counter = 1;
    for (const g of GROUPS) {
      for (let p = 0; p < 3; p += 1) {
        ALL.push({
          id: counter,
          role: g.role,
          dept: g.dept,
          person: `Сотрудник ${counter}`,
          plan: (13 - counter) * 5,
        });
        counter += 1;
      }
    }

    const [sort, setSort] = useState<readonly SortColumn[]>([]);
    // Фильтрация обёртки (feature filtering). manualFiltering — фильтруем сами в
    // visible, чтобы стори владела итоговым порядком (нужно для derived-merge).
    const filteringState = useState<{ role: string }>({ role: 'Все' });
    const [filterValue] = filteringState;

    // Manual sort+filter: стори владеет видимым порядком (rowInd = индекс здесь).
    const visible = useMemo<GRow[]>(() => {
      const roleFilter = filterValue.role;
      let rows =
        roleFilter === 'Все'
          ? ALL.slice()
          : ALL.filter((r) => r.role === roleFilter);
      const s = sort[0];
      if (s) {
        const dir = s.direction === 'ASC' ? 1 : -1;
        rows = rows.slice().sort((a, b) => {
          const av = a[s.columnKey as keyof GRow];
          const bv = b[s.columnKey as keyof GRow];
          if (typeof av === 'number' && typeof bv === 'number') {
            return (av - bv) * dir;
          }
          return String(av).localeCompare(String(bv)) * dir;
        });
      }
      return rows;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, filterValue]);

    // Пробеги одинаковых значений колонки в текущем порядке: индекс → [start,end].
    const runsFor = (
      key: keyof GRow,
    ): Map<number, readonly [number, number]> => {
      const map = new Map<number, readonly [number, number]>();
      let i = 0;
      while (i < visible.length) {
        const val = visible[i]?.[key];
        let j = i;
        while (j + 1 < visible.length && visible[j + 1]?.[key] === val) {
          j += 1;
        }
        for (let k = i; k <= j; k += 1) map.set(k, [i, j]);
        i = j + 1;
      }
      return map;
    };
    const roleRuns = useMemo(() => runsFor('role'), [visible]);
    const deptRuns = useMemo(() => runsFor('dept'), [visible]);

    const columns: readonly ColumnConfig<GRow>[] = [
      {
        key: 'role',
        name: 'Роль (merge)',
        width: 260,
        sortingType: 'stringSort',
        filtering: {
          component: 'select',
          keyInFilterState: 'role',
          valueInRow: (r) => r.role,
          selectOptions: {
            type: 'constant',
            options: [
              { value: 'Все', text: 'Все' },
              ...GROUPS.map((g) => ({ value: g.role, text: g.role })),
            ],
          },
          filter: {
            typeOfValue: 'single',
            filteringType: (fv, rv) => fv === 'Все' || rv === fv,
          },
        },
        rowSpan: (ci) => roleRuns.get(ci.rowInd) ?? [ci.rowInd, ci.rowInd],
      },
      {
        key: 'dept',
        name: 'Отдел (merge)',
        width: 260,
        sortingType: 'stringSort',
        rowSpan: (ci) => deptRuns.get(ci.rowInd) ?? [ci.rowInd, ci.rowInd],
      },
      { key: 'person', name: 'Сотрудник', width: 170 },
      { key: 'plan', name: 'План', width: 110, sortingType: 'numberSort' },
    ];

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Объединение <b>выводится из значения</b> на текущем порядке (пробеги
          одинаковых role/dept). Отсортируй по <b>Роль</b> → блоки соберутся; по{' '}
          <b>План</b> → роли перемешаются и блоки распадутся; фильтр по роли
          (в шапке колонки «Роль») → блоки сожмутся. Всё пересобирается САМО (в
          отличие от позиционного rowSpan в «Базовом rowSpan»).
        </p>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: '520px' },
            rowMarkers: { startIndex: 1 },
            columnsControl: { enable: true },
            sorting: { state: [sort, setSort], manualSorting: true },
            filtering: {
              state: filteringState,
              manualFiltering: true,
              filtersInfo: { role: { label: 'Роль', clearedValue: 'Все' } },
            },
          }}
          columnConfig={columns}
          rows={visible}
        />
      </div>
    );
  },
};
